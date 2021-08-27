import { select } from './settings.js';
import { Coffee } from './coffee.js';

const app = {
  initCoffee: function () {
    const thisApp = this;
    const coffeeElem = document.querySelector(select.containerOf.coffee);

    thisApp.coffee = new Coffee(coffeeElem);
  },
  init: function () {
    const thisApp = this;
    thisApp.initCoffee();
  },
};

app.init();
