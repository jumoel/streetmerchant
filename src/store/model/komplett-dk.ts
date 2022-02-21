import {Store} from './store';

export const KomplettDK: Store = {
  currency: 'kr.',
  labels: {
    inStock: {
      container: '[data-automationid="AddToCart"]',
      text: ['Læg I indkøbsvognen'],
    },
    outOfStock: {
      container: 'div.monitor-button',
      text: ['Modtag varsel'],
    },
    maxPrice: {
      container: '.product-price-now',
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.komplett.dk/product/1183996/',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.komplett.dk/product/1111557',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5de',
      url: 'https://www.komplett.dk/product/1161553',
    },
  ],
  name: 'komplett-dk',
};
