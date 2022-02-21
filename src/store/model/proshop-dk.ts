import {Store} from './store';

export const ProshopDK: Store = {
  currency: 'kr.',
  labels: {
    inStock: {
      container: '.site-stock',
      text: ['1-2 dages levering', 'fjernlager'],
    },
    maxPrice: {
      container:
        '.site-currency-wrapper > span[class="site-currency-attention"]',
      euroFormat: true,
    },
    outOfStock: {
      container: '.site-stock',
      text: ['bestilt'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.proshop.dk/2694767',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5de',
      url: 'https://www.proshop.dk/Spillekonsol/Sony-PlayStation-5-Digital-Edition-Nordic/2863627',
    },
  ],
  name: 'proshop-dk',
};
