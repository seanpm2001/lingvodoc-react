import React from 'react';
import { compose, withHandlers, pure } from 'recompose';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

import { goToLanguage } from '../../../common/';
import ListItem from './ListItem';
import './styles.scss';

/* ----------- PROPS ----------- */
const classNames = {
  wrap: 'container-gray container-gray_education langs-nav-list__wrap',
  main: 'langs-nav-list',
  short: 'langs-nav-list_short',
  mainHeader: 'menu',
  list: 'langs-nav-list__list',
};

/* ----------- ENHANCERS ----------- */
const addHandlers = withHandlers({
  onLangSelect: () => (ev) => {
    ev.preventDefault();

    const id = ev.target.getAttribute('data-id');

    goToLanguage(id);
  },
});

const enhance = compose(addHandlers, pure);

/* ----------- COMPONENT ----------- */
const LangsNavList = ({ data, onLangSelect }) => {
  const list = data.map(langSet => <ListItem key={langSet[0]} data={langSet} onLangSelect={onLangSelect} />);

  return (
    <Container className={classNames.wrap}>
      <div className={classNames.main}>
        {list}
      </div>
    </Container>
  );
};

/* ----------- PROPS VALIDATION ----------- */
LangsNavList.propTypes = {
  data: PropTypes.array.isRequired,
  onLangSelect: PropTypes.func.isRequired,
};

export default enhance(LangsNavList);
