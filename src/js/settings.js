export const select = {
  templateOf: {
    coffee: '#template-product',
  },
  containerOf: {
    coffee: '.products',
  },
};

export const templates = {
  coffeeTemplate: Handlebars.compile(
    document.querySelector(select.templateOf.coffee).innerHTML),
};
