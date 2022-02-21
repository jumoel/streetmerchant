import {Store} from './store';

export const PowerDK: Store = {
  currency: 'kr.',
  labels: {
    inStock: {
      container: '.buy-area__webshop button:not([disabled])',
      text: ['Føj til kurv'],
    },
    outOfStock: {
      container: '.buy-area button[disabled]',
      text: ['Ikke på lager online'],
    },
    maxPrice: {
      container: '.pwr-product-price-container-decimal',
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.power.dk/computere-og-tablets/webkamera-og-videokonference/webkamera/logitech-c310-webcam-5-mp-1280-x-720-pixel-usb-sort/p-1152199/?q=usb',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.power.dk/gaming-og-underholdning/playstation/playstation-konsoller/playstation-5/p-1077687/',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5de',
      url: 'https://www.power.dk/gaming-og-underholdning/playstation/playstation-konsoller/playstation-5-digital-edition/p-1101680/',
    },
  ],
  name: 'power-dk',
};
