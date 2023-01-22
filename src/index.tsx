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
// const yakitori = require('./assets/images/yakitori.png');
// const tempura = require('./assets/images/tempura.png');
// const udon = require('./assets/images/udon.png');
// const soba = require('./assets/images/soba.png');
// const misso = require('./assets/images/misso.png');
// const tonkatsu = require('./assets/images/tonkatsu.png');
// const okonomiyaki = require('./assets/images/okonomiyaki.png');
// const unagi = require('./assets/images/unagi.png');
// const karaage = require('./assets/images/karaage.png');
// const gyudon = require('./assets/images/gyudon.png');
// const korokke = require('./assets/images/korokke.png');
// const donburi = require('./assets/images/donburi.png');
// const oyakodon = require('./assets/images/oyakodon.png');
// const yakimono = require('./assets/images/yakimono.png');
// const kushiyaki = require('./assets/images/kushiyaki.png');
// const omuraisu = require('./assets/images/omuraisu.png');
// const omusoba = require('./assets/images/omusoba.png');
// const nabemono = require('./assets/images/nabemono.png');
// const motsunabe = require('./assets/images/motsunabe.png');
// const chirashisushi = require('./assets/images/chirashisushi.png');

// createServer({
//   models: {
//     product: Model,
//     allProduct: Model,
//   },

//   seeds(server) {
//     server.db.loadData({
//       products: [
//           {
//             id:1,
//             image: `${takoyaki}`,
//             name:"Takoyaki",
//             price: 45,
//             deletedPrice: 62
//         },
//         {
//             id:2,
//             image: `${hotRoll}`,
//             name:"Hot Roll",
//             price: 15,
//             deletedPrice: 27.50
//         },
//         {
//             id:3,
//             image: `${harumaki}`,
//             name:"Harumaki",
//             price: 7.50,
//             deletedPrice: 13.45
//         },
//         {
//             id:4,
//             image: `${temaki}`,
//             name:"Temaki Salmon",
//             price: 17.50,
//             deletedPrice: 24
//         },
//         {
//             id:5,
//             image: `${guioza}`,
//             name:"Guioza",
//             price: 12.50,
//             deletedPrice: 20
//         },
//         {
//             id:6,
//             image: `${yakisoba}`,
//             name:"Yakisoba",
//             price: 16,
//             deletedPrice: 28
//         },
//         {
//             id:7,
//             image: `${lamen}`,
//             name:"Lámen",
//             price: 20.70,
//             deletedPrice: 32
//         },
//         {
//             id:8,
//             image: `${makimono}`,
//             name:"Makimono",
//             price: 12.30,
//             deletedPrice: 24.90
//         },
//         {
//           id:9,
//           image: `${teppanyaki}`,
//           name:"Teppanyaki",
//           price: 18.30,
//           deletedPrice: 25
//       },
//         {
//           id:10,
//           image: `${sashimi}`,
//           name:"Sashimi",
//           price: 10.30,
//           deletedPrice: 22.90
//       },
//         {
//           id:11,
//           image: `${onigiri}`,
//           name:"Onigiri",
//           price: 17.30,
//           deletedPrice: 28.50
//       },
//       {
//         id:12,
//         image: `${dorayaki}`,
//         name:"Dorayaki",
//         price: 13.90,
//         deletedPrice: 20.30
//       },
//       ],
//       allProducts: [
//             {
//               id:1,
//               image: `${takoyaki}`,
//               name:"Takoyaki",
//               price: 45,
//               deletedPrice: 62
//           },
//           {
//               id:2,
//               image: `${hotRoll}`,
//               name:"Hot Roll",
//               price: 15,
//               deletedPrice: 27.50
//           },
//           {
//               id:3,
//               image: `${harumaki}`,
//               name:"Harumaki",
//               price: 7.50,
//               deletedPrice: 13.45
//           },
//           {
//               id:4,
//               image: `${temaki}`,
//               name:"Temaki Salmon",
//               price: 17.50,
//               deletedPrice: 24
//           },
//           {
//               id:5,
//               image: `${guioza}`,
//               name:"Guioza",
//               price: 12.50,
//               deletedPrice: 20
//           },
//           {
//               id:6,
//               image: `${yakisoba}`,
//               name:"Yakisoba",
//               price: 16,
//               deletedPrice: 28
//           },
//           {
//               id:7,
//               image: `${lamen}`,
//               name:"Lámen",
//               price: 20.70,
//               deletedPrice: 32
//           },
//           {
//               id:8,
//               image: `${makimono}`,
//               name:"Makimono",
//               price: 12.30,
//               deletedPrice: 24.90
//           },
//           {
//             id:9,
//             image: `${teppanyaki}`,
//             name:"Teppanyaki",
//             price: 18.30,
//             deletedPrice: 25
//         },
//           {
//             id:10,
//             image: `${sashimi}`,
//             name:"Sashimi",
//             price: 10.30,
//             deletedPrice: 22.90
//         },
//           {
//             id:11,
//             image: `${onigiri}`,
//             name:"Onigiri",
//             price: 17.30,
//             deletedPrice: 28.50
//         },
//           {
//             id:12,
//             image: `${dorayaki}`,
//             name:"Dorayaki",
//             price: 13.90,
//             deletedPrice: 20.30
//           },
//           {
//             id:13,
//             image: `${yakitori}`,
//             name:"Yakitori",
//             price: 10.90,
//             deletedPrice: 25.90
//           },
//           {
//             id:14,
//             image: `${tempura}`,
//             name:"Tempura de Camarão",
//             price: 17.90,
//             deletedPrice: 32
//           },
//           {
//             id:15,
//             image: `${udon}`,
//             name:"Udon",
//             price: 17,
//             deletedPrice: 25
//           },
//           {
//             id:16,
//             image: `${soba}`,
//             name:"Soba",
//             price: 14.50,
//             deletedPrice: 21
//           },
//           {
//             id:17,
//             image: `${misso}`,
//             name:"Sopa de missô",
//             price: 13.20,
//             deletedPrice: 22.57
//           },
//           {
//             id:18,
//             image: `${tonkatsu}`,
//             name:"Tonkatsu",
//             price: 22.50,
//             deletedPrice: 38
//           },
//           {
//             id:19,
//             image: `${okonomiyaki}`,
//             name:"Okonomiyaki",
//             price: 17,
//             deletedPrice: 32
//           },
//           {
//             id:20,
//             image: `${unagi}`,
//             name:"Unagi",
//             price: 15,
//             deletedPrice: 27
//           },
//           {
//             id:21,
//             image: `${karaage}`,
//             name:"Karaage",
//             price: 15,
//             deletedPrice: 27
//           },
//           {
//             id:22,
//             image: `${gyudon}`,
//             name:"Gyudon",
//             price: 16.80,
//             deletedPrice: 24
//           },
//           {
//             id:23,
//             image: `${korokke}`,
//             name:"Korokke",
//             price: 23.50,
//             deletedPrice: 38
//           },
//           {
//             id:24,
//             image: `${donburi}`,
//             name:"Donburi",
//             price: 23.50,
//             deletedPrice: 38
//           },
//           {
//             id:25,
//             image: `${oyakodon}`,
//             name:"Oyakodon",
//             price: 19.50,
//             deletedPrice: 29.30
//           },
//           {
//             id:26,
//             image: `${yakimono}`,
//             name:"Yakimono",
//             price: 16.80,
//             deletedPrice: 32.50
//           },
//           {
//             id:27,
//             image: `${kushiyaki}`,
//             name:"Kushiyaki",
//             price: 17.20,
//             deletedPrice: 30.50
//           },
//           {
//             id:28,
//             image: `${omuraisu}`,
//             name:"Omu-raisu",
//             price: 17.20,
//             deletedPrice: 30.50
//           },
//           {
//             id:29,
//             image: `${omusoba}`,
//             name:"Omu-soba",
//             price: 24.70,
//             deletedPrice: 45.50
//           },
//           {
//             id:30,
//             image: `${nabemono}`,
//             name:"Nabemono",
//             price: 20,
//             deletedPrice: 31
//           },
//           {
//             id:31,
//             image: `${motsunabe}`,
//             name:"Motsunabe",
//             price: 23,
//             deletedPrice: 29
//           },
//           {
//             id:32,
//             image: `${chirashisushi}`,
//             name:"Chirashi Sushi",
//             price: 13,
//             deletedPrice: 19
//           },
//       ]
//     })
//   },

//   routes() {
//     this.namespace = 'api';

//     this.get('/products', () => {
//       return this.schema.all('product');
//     })

//     this.get('/allProducts', () => {
//       return this.schema.all('allProduct');
//     })
//   }
// })

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

