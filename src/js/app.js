import {select, templates} from '.settings.js';
import { Coffee } from '.coffee.js';
const app = {
  initCoffee: function () {
    const thisApp = this;
    const coffeeElem = document.querySelector(select.containerOf.coffee);

    thisApp.coffee = new this.coffee(coffeeElem);
  },
  init: function () {
    const thisApp = this;
    thisApp.initCoffee();
  },
};

app.init();
