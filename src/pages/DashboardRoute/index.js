import React from 'react';
import './styles.scss';

import imageDictionaries from '../../images/books1.svg';
import imageCreate from '../../images/books2.svg';
import imageCreateCorpus from '../../images/file_bundle1.svg';
import imageCorpora from '../../images/file_bundle2.svg';
import imageDialeqt from '../../images/cloud_files.svg';
import imageImport from '../../images/cloud_files2.svg';
import { Link } from 'react-router-dom';

import { getTranslation } from 'api/i18n';
import Footer from 'components/Footer';

function dashboardRoute() {
  return (
  <div className="lingvodoc-page">
    <div className="background-cards lingvodoc-page__content">
      <div className="dashboardRoute">
        <h2 className="dashboard-header">{getTranslation('Dashboard')}</h2>
        
        <div className="cards-list">
          <Link className="card-item" to="/dashboard/dictionaries">
            <label className="card-item__label">{getTranslation('Dictionaries')}</label>
            <img className="card-item__img" src={imageDictionaries} />
          </Link>
          <Link className="card-item" to="/dashboard/create_dictionary">
            <label className="card-item__label">{getTranslation('Create dictionary')}</label>
            <img className="card-item__img" src={imageCreate} />
          </Link>
          <Link className="card-item" to="/dashboard/create_corpus">
            <label className="card-item__label">{getTranslation('Create corpus')}</label>
            <img className="card-item__img" src={imageCreateCorpus} />
          </Link>
          <Link className="card-item" to="/dashboard/corpora">
            <label className="card-item__label">{getTranslation('Corpora')}</label>
            <img className="card-item__img" src={imageCorpora} />
          </Link>
          <Link className="card-item" to="/import_dialeqt">
            <label className="card-item__label">{getTranslation('Import Dialeqt dictionary')}</label>
            <img className="card-item__img card-item__img_dialeqt" src={imageDialeqt} />
          </Link>
          <Link className="card-item" to="/import">
            <label className="card-item__label">{getTranslation('Import Starling dictionaries')}</label>
            <img className="card-item__img card-item__img_import" src={imageImport} />
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default dashboardRoute;
