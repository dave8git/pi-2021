import { dataSource } from ./data.js;

class Coffee {
  constructor() {
    const thisCoffee = this;

    thisCoffee.render();
    thisCoffee.getElements();
    thisCoffee.initActions();
    //thisBooks.booksFilter();
  }
  getElements() {
    const thisCoffee = this;
    thisCoffee.dom = {};
    thisCoffee.coffee = dataSource.coffee;
  }

  render() {
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

