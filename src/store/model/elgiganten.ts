import {Store} from './store';

export const Elgiganten: Store = {
  currency: 'kr.',
  labels: {
    inStock: {
      container: '[data-ta="addToCart-button"]',
      text: ['Tilføj til kurv'],
    },
    maxPrice: {
      container: '[data-ta="productprice-text"]',
    },
    // outOfStock: {
    //   container: '#buy-box .unavailable--content',
    //   text: ['Dette produkt er ikke på lager'],
    // },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.elgiganten.dk/product/tv-lyd-billede/tv-tilbehor/tv/sony-65-x81j-4k-led-2021/318532',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5de',
      url: 'https://www.elgiganten.dk/product/gaming/spillekonsol-tilbehor/playstation/playstation-spillekonsol/playstation-5-digital-2021/345102',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.elgiganten.dk/product/gaming/spillekonsol-tilbehor/playstation/playstation-spillekonsol/playstation-5-2021/345097',
    },
  ],
  name: 'elgiganten',
};
