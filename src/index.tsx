import 'bootstrap/dist/css/bootstrap.css';
import './styles/global.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createServer, Model } from 'miragejs';

const takoyaki = require('./assets/images/takoyaki.png');
const hotRoll = require('./assets/images/hotRoll.png');
const harumaki = require('./assets/images/harumaki.png');
const temaki = require('./assets/images/temaki.png');
const guioza = require('./assets/images/guioza.png');
const yakisoba = require('./assets/images/yakisoba.png');
const lamen = require('./assets/images/lamen.png');
const sashimi = require('./assets/images/sashimi.png');
const makimono = require('./assets/images/makimono.png')
const teppanyaki = require('./assets/images/teppanyaki.png')
const onigiri = require('./assets/images/onigiri.png');
const dorayaki = require('./assets/images/dorayaki.png');

createServer({
  models: {
    product: Model,
  },

  seeds(server) {
    server.db.loadData({
      products: [
          {
            id:1,
            image: `${takoyaki}`,
            name:"Takoyaki",
            price: 45,
            deletedPrice: 62
        },
        {
            id:2,
            image: `${hotRoll}`,
            name:"Hot Roll",
            price: 15,
            deletedPrice: 27.50
        },
        {
            id:3,
            image: `${harumaki}`,
            name:"Harumaki",
            price: 7.50,
            deletedPrice: 13.45
        },
        {
            id:4,
            image: `${temaki}`,
            name:"Temaki Salmon",
            price: 17.50,
            deletedPrice: 24
        },
        {
            id:5,
            image: `${guioza}`,
            name:"Guioza",
            price: 12.50,
            deletedPrice: 20
        },
        {
            id:6,
            image: `${yakisoba}`,
            name:"Yakisoba",
            price: 16,
            deletedPrice: 28
        },
        {
            id:7,
            image: `${lamen}`,
            name:"Lámen",
            price: 20.70,
            deletedPrice: 32
        },
        {
            id:8,
            image: `${makimono}`,
            name:"Makimono",
            price: 12.30,
            deletedPrice: 24.90
        },
        {
          id:9,
          image: `${teppanyaki}`,
          name:"Teppanyaki",
          price: 18.30,
          deletedPrice: 25
      },
        {
          id:10,
          image: `${sashimi}`,
          name:"Sashimi",
          price: 10.30,
          deletedPrice: 22.90
      },
        {
          id:11,
          image: `${onigiri}`,
          name:"Onigiri",
          price: 17.30,
          deletedPrice: 28.50
      },
      {
        id:12,
        image: `${dorayaki}`,
        name:"Dorayaki",
        price: 13.90,
        deletedPrice: 20.30
      },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/products', () => {
      return this.schema.all('product');
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

