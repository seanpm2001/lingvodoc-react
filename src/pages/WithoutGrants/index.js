import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, branch, renderNothing } from 'recompose';
import { Redirect, matchPath } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Immutable, { fromJS, Map } from 'immutable';
import { Container, Segment, Label } from 'semantic-ui-react';

import { buildLanguageTree } from 'pages/Search/treeBuilder';


import config from 'config';

import BackTopButton from 'components/BackTopButton';
import TreeWithoutGrants from './builderTreeWithoutGrants';
import Placeholder from 'components/Placeholder';
import { getScrollContainer } from 'components/Home/common';
import { getTranslation } from 'api/i18n';

const authenticatedCorporaQuery = gql`
  query AuthCorpora {
    dictionaries(proxy: true) {
      id
      parent_id
      translation
      status
      category
      additional_metadata {
        authors
      }
      perspectives {
        id
        translation
      }
    }
    permission_lists(proxy: true) {
      view {
        id
        parent_id
        translation
      }
      edit {
        id
        parent_id
        translation
      }
      publish {
        id
        parent_id
        translation
      }
      limited {
        id
        parent_id
        translation
      }
    }
  }
`;

const guestCorporaQuery = gql`
  query GuestCorpora {
    dictionaries(proxy: false, published: true) {
      id
      parent_id
      translation
      status
      category
      additional_metadata {
        authors
      }
      perspectives {
        id
        translation
      }
    }
    permission_lists(proxy: false) {
      view {
        id
        parent_id
        translation
      }
      edit {
        id
        parent_id
        translation
      }
      publish {
        id
        parent_id
        translation
      }
      limited {
        id
        parent_id
        translation
      }
    }
  }
`;

const CorporaAll = (props) => {
  const {
    dictionaries: localDictionaries,
    perspectives,
    languages,
    isAuthenticated,
    grants,
    data: {
      loading, error, dictionaries, permission_lists: permissionLists
    },
    location: { hash },
  } = props;

  if (error) {
    return null;
  }

  if (loading) {
    return (
      <Placeholder />
    );
  }

  const grantsList = fromJS(grants);
  if (hash) {
    const match = matchPath(hash, {
      path: '#/dictionary/:pcid/:poid/perspective/:cid/:oid/:mode',
    });
    if (match) {
      const {
        pcid, poid, cid, oid, mode,
      } = match.params;
      return <Redirect to={`/dictionary/${pcid}/${poid}/perspective/${cid}/${oid}/${mode}`} />;
    }
  }


  const languagesTree = buildLanguageTree(fromJS(languages));

  const permissions =
    config.buildType === 'server'
      ? null
      : fromJS({
        view: permissionLists.view,
        edit: permissionLists.edit,
        publish: permissionLists.publish,
        limited: permissionLists.limited,
      }).map(ps => new Immutable.Set(ps.map(p => p.get('id'))));

  const dictsSource = fromJS(dictionaries);

  const localDicts = fromJS(localDictionaries);
  const isDownloaded = dict => !!localDicts.find(d => d.get('id').equals(dict.get('id')));
  const hasPermission = (p, permission) =>
    (config.buildType === 'server' ? false : permissions.get(permission).has(p.get('id')));

  const dicts = dictsSource.reduce(
    (acc, dict) => acc.set(dict.get('id'), dict.set('isDownloaded', isDownloaded(dict))),
    new Map()
  );

  const perspectivesList = fromJS(perspectives).map(perspective =>
    fromJS({
      ...perspective.toJS(),
      view: hasPermission(perspective, 'view'),
      edit: hasPermission(perspective, 'edit'),
      publish: hasPermission(perspective, 'publish'),
      limited: hasPermission(perspective, 'limited'),
    }));


  const scrollContainer = getScrollContainer();

  return (
    <Container className="published">
      <Segment size='huge'>{getTranslation('Dictionaries created out of grant')}</Segment>
      <Segment>
        {
          <TreeWithoutGrants
            languagesTree={languagesTree}
            dictionaries={dicts}
            perspectives={perspectivesList}
            grants={grantsList}
            isAuthenticated={isAuthenticated}
          />
        }
      </Segment>
      <BackTopButton scrollContainer={scrollContainer} />
    </Container>
  );
};

CorporaAll.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
  }).isRequired,
  grants: PropTypes.array.isRequired,
  dictionaries: PropTypes.array,
  perspectives: PropTypes.array.isRequired,
  languages: PropTypes.array.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
};

CorporaAll.defaultProps = {
  dictionaries: [],
};

const dictionaryWithPerspectivesQuery = gql`
  query DictionaryWithPerspectives {
    perspectives {
      id
      parent_id
      translation
    }
    grants {
      id
      translation
      issuer
      grant_number
      additional_metadata {
        participant
      }
    }
    language_tree {
      id
      parent_id
      translation
      created_at
    }
    is_authenticated
  }
`;

const dictionaryWithPerspectivesProxyQuery = gql`
  query DictionaryWithPerspectivesProxy {
    dictionaries(proxy: false, published: true) {
      id
      parent_id
      translation
      additional_metadata {
        authors
      }
      perspectives {
        id
        translation
      }
    }
    perspectives {
      id
      parent_id
      translation
    }
    grants {
      id
      translation
      issuer
      grant_number
      additional_metadata {
        participant
      }
    }
    language_tree {
      id
      parent_id
      translation
      created_at
    }
    is_authenticated
  }
`;

const AuthWrapper = ({
  data: {
    perspectives, grants, language_tree: languages, is_authenticated: isAuthenticated, dictionaries,
  },
}) => {
  const Component = compose(
    connect(state => ({ ...state.router })),
    graphql(isAuthenticated ? authenticatedCorporaQuery : guestCorporaQuery, {
      options: {
        fetchPolicy: 'network-only'
      }
    })
  )(CorporaAll);

  if (config.buildType === 'server') {
    return (
      <Component perspectives={perspectives} grants={grants} languages={languages} isAuthenticated={isAuthenticated} />
    );
  }

  return (
    <Component
      dictionaries={dictionaries}
      perspectives={perspectives}
      grants={grants}
      languages={languages}
      isAuthenticated={isAuthenticated}
    />
  );
};

AuthWrapper.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    perspectives: PropTypes.array,
    grants: PropTypes.array,
    language_tree: PropTypes.array,
    is_authenticated: PropTypes.bool,
  }).isRequired,
};


export default compose(
  graphql(config.buildType === 'server' ? dictionaryWithPerspectivesQuery : dictionaryWithPerspectivesProxyQuery),
  branch(({ data }) => data.loading || data.error, renderNothing)
)(AuthWrapper);