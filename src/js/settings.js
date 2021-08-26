const select = {
  templateOf: {
    coffee: '#template-product',
  },
  containerOf: {
    booklist: '.products',
  },
};

const templates = {
  coffeeTemplate: Handlebars.compile(
    document.querySelector(select.templateOf.coffee).innerHTML),
};
