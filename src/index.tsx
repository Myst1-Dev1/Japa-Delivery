import 'bootstrap/dist/css/bootstrap.css';
import './styles/global.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { createServer, Model } from 'miragejs';

// const takoyaki = require('./assets/images/takoyaki.png');
// const hotRoll = require('./assets/images/hotRoll.png');
// const harumaki = require('./assets/images/harumaki.png');
// const temaki = require('./assets/images/temaki.png');
// const guioza = require('./assets/images/guioza.png');
// const yakisoba = require('./assets/images/yakisoba.png');
// const lamen = require('./assets/images/lamen.png');
// const sashimi = require('./assets/images/sashimi.png');
// const makimono = require('./assets/images/makimono.png')
// const teppanyaki = require('./assets/images/teppanyaki.png')
// const onigiri = require('./assets/images/onigiri.png');
// const dorayaki = require('./assets/images/dorayaki.png');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

