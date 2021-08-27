import { dataSource } from './data.js';
import { utils } from './utils.js';
import { templates, select } from './settings.js';

class Coffee {
  constructor(element) {
    const thisCoffee = this;
    thisCoffee.render(element);
    thisCoffee.getElements();
  }
  getElements() {
    const thisCoffee = this;
    thisCoffee.dom = {};
    thisCoffee.coffee = dataSource.coffee;
  }

  render(element) {
    const thisCoffee = this;
    for (let cafe of dataSource.coffee) {
      const generatedHTML = templates.coffeTemplate(cafe);
      thisCoffee.element = utils.createDOMFromHTML(generatedHTML);
      thisCoffee.products = document.querySelector(select.containerOf.booklist);
      thisCoffee.products.appendChild(thisCoffee.element);
    }
  }
}

export default Coffee;

