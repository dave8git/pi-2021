import { dataSource } from './data.js';
import { utils } from './utils.js';
import { templates } from './settings.js';

export class Coffee {
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
    thisCoffee.dom = {};
    thisCoffee.dom.wrapper = element;
    console.log(thisCoffee.dom.wrapper);
    for (let cafe of dataSource.coffee) {
      console.log(cafe);
      const generatedHTML = templates.coffeeTemplate(cafe);
      //console.log('generatedHTML', generatedHTML);
      thisCoffee.dom.element = utils.createDOMFromHTML(generatedHTML);
      //thisCoffee.products = document.querySelector(select.containerOf.coffee);
      console.log(thisCoffee.dom.element);
      //thisCoffee.dom.wrapper.appendChild(thisCoffee.dom.element);
      thisCoffee.dom.wrapper.innerHTML += generatedHTML;
    }
  }
}



