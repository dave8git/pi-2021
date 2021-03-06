export const select = {
  templateOf: {
    coffee: '#template-product',
  },
  containerOf: {
    coffee: '.products',
  },
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''), 
    coffee: 'coffee'
  }
};

export const templates = {
  coffeeTemplate: Handlebars.compile(document.querySelector(select.templateOf.coffee).innerHTML),
};

