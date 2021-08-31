import { select, settings } from './settings.js';
import { Coffee } from './coffee.js';

const app = {
  initData: function () {
    const thisApp = this; 
    const url = settings.db.url + '/' + settings.db.coffee;
    this.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.coffee = parsedResponse;
        thisApp.initCoffee(); 
      });
  },
  initCoffee: function () {
    const thisApp = this;
    const coffeeElem = document.querySelector(select.containerOf.coffee);

    thisApp.coffee = new Coffee(coffeeElem, this.data.coffee);
  },
  init: function () {
    const thisApp = this;
    thisApp.initData(); 
    //thisApp.initCoffee();
  },
};

app.init();
