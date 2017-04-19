import React from 'react';
import PropTypes from 'prop-types';
import { is } from 'immutable';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Dropdown, Icon } from 'semantic-ui-react';

import { Perspective as PerspectiveModel } from 'api/perspective';
import { Dictionary as DictionaryModel } from 'api/dictionary';
import { requestPublished, selectors } from 'ducks/data';

import './published.scss';

const Perspective =
({
  perspective: p,
}) =>
  <Dropdown.Item as={Link} to={`dictionary/${p.urlFor('parent_')}/perspective/${p.url}`}>
    {p.translation} {p.authors && p.authors.content && ` (${p.authors.content})`}
  </Dropdown.Item>;

Perspective.propTypes = {
  perspective: PropTypes.instanceOf(PerspectiveModel).isRequired,
};

const Dictionary =
({
  dictionary,
  perspectives,
  history,
}) =>
  <div className="dict">
    <span title={history.join(' > ')} className="dict-name">{dictionary.translation}</span>
    {
      perspectives && perspectives.valueSeq &&
        <Dropdown inline text={`View (${perspectives.size})`}>
          <Dropdown.Menu>
            {
              perspectives.valueSeq().map(pers =>
                <Perspective
                  key={pers.url}
                  perspective={pers}
                />
              )
            }
          </Dropdown.Menu>
        </Dropdown>
      }
  </div>;

Dictionary.propTypes = {
  dictionary: PropTypes.instanceOf(DictionaryModel).isRequired,
  perspectives: PropTypes.object,
  history: PropTypes.array.isRequired,
};

Dictionary.defaultProps = {
  perspectives: {},
};

const DictionaryList =
({
  dicts,
  history,
  perspectives,
}) => {
  if (dicts.length === 0) return null;

  return (
    <div className="dict-list">
      <span className="translation">
        { history.map(s => <span key={s}>{s}</span>) }
      </span>
      {
        dicts.map(dictionary =>
          <Dictionary
            key={dictionary.url}
            perspectives={perspectives.get(dictionary.id)}
            history={history}
            dictionary={dictionary}
          />
        )
      }
    </div>
  );
};

DictionaryList.propTypes = {
  dicts: PropTypes.array.isRequired,
  perspectives: PropTypes.object.isRequired,
  history: PropTypes.array.isRequired,
};

class Home extends React.Component {
  static propTypes = {
    languages: PropTypes.array.isRequired,
    perspectives: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.renderEntries = this.renderEntries.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(requestPublished());
  }

  shouldComponentUpdate({ perspectives, loading }) {
    const same = is(perspectives, this.props.perspectives) &&
      loading === this.props.loading;
    return !same;
  }

  renderEntries() {
    const {
      languages,
      perspectives,
    } = this.props;

    if (languages.length === 0) {
      return null;
    }

    return languages.map(lang =>
      <DictionaryList
        key={lang.url}
        perspectives={perspectives}
        {...lang}
      />
    );
  }

  render() {
    const {
      loading,
    } = this.props;

    return (
      <Container className="published">
        <h2>Опубликованные словари {loading && <Icon name="spinner" loading />}</h2>
        { this.renderEntries() }
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    languages: selectors.getDictionaries(state),
    loading: selectors.getLoading(state),
    perspectives: selectors.getPerspectives(state),
  };
}

export default connect(
  mapStateToProps
)(Home);
