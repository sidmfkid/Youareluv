const menu = document.querySelector('.header__content-hamburger');
const nav = document.querySelector('.header__content');
const header = document.querySelector('.header');
const overlay = document.querySelector('.header__overlay');
menu.addEventListener('click', e => {
  e.preventDefault();
  nav.classList.toggle('open');
  header.classList.toggle('open');
  overlay.classList.toggle('open');
});
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
    setTimeout(() => {
      nav.classList.add('down');
    }, 500);
  } else {
    setTimeout(() => {
      nav.classList.remove('sticky');
    }, 500);
    nav.classList.remove('down');
  }
};

const observerHeader = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: '350px'
});
observerHeader.observe(header);



// ************** Fade in Section Animations **************** //

const allSections = document.querySelectorAll('section');


const revealSection = function (entries, observer) {
  const [entry] = entries;
  entry.target.classList.remove('hide');
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: .15
});
allSections.forEach(function (section) {
  section.className === 'hide' ? section.classList.remove('hide') : section.classList.add('hide')
  sectionObserver.observe(section);
});


// ************** Create cart obj**************** //


let currentCart = {
  items: [],
  total_price: function total_price(){
    const itemPrices = []
    this.items.forEach(item => {
      itemPrices.push(item.price * item.quantity)
    });
    const sum = itemPrices.reduce(add, 0)
    function add(accum, a) { 
      return accum + a
    }
    return sum;
    }
}



function creatCartObj(data){

if (currentCart.items.length === 0) {
  data.items.forEach( (item) => {
    currentCart.items.push(item)
  });
  return;
}
const newItem = data.items
const currentIds = []

if (currentCart.items.length >= 1) {
  currentCart.items.forEach((item, i) => {
    currentIds.push(item.id)
    if (currentIds[i] === newItem[0].id) {
      item.quantity = newItem[0].quantity
      return;
    }
  });
  let duplicateItem = false

  currentIds.forEach(id => {
    if (id === newItem[0].id) {
      duplicateItem = true
      return;
    }
  })
  if (duplicateItem !== true) {
    currentCart.items.push(newItem[0])
  }
  }
}


// ************** Open Cart Drawer **************** //


const cartIcon = document.querySelector('.header__content-cart');
const cartDrawer = document.querySelector('cart-drawer');

// ** Get amount of items in cart on load and apply to bubble ** //


async function getCart(fn) {
   const res = await fetch('/cart.js', {method: 'GET'})
   const data = await res.json()

    fn(data)
}
const cartBubble = document.querySelector('.header__content-cart .cart-bubble');

function loadCartBubble (data){
  if (data.items.length === 0) {
    cartBubble.style.opacity = '0'
  } else {
  cartBubble.textContent = `${data.items.length}`;
  }
}

function loadData (data){
  loadCartBubble(data);
  creatCartObj(data)
}
window.onload = getCart(loadData);

function debounce(fn, wait) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

const serializeForm = form => {
  const obj = {};
  const formData = new FormData(form);

  for (const key of formData.keys()) {
    const regex = /(?:^(properties\[))(.*?)(?:\]$)/;

    if (regex.test(key)) {
      obj.properties = obj.properties || {};
      obj.properties[regex.exec(key)[2]] = formData.get(key);
    } else {
      obj[key] = formData.get(key);
    }
  }

  return JSON.stringify(obj);
};

function fetchConfig(type = 'json') {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': `application/${type}`
    }
  };
}

if (typeof window.Shopify == 'undefined') {
  window.Shopify = {};
}

Shopify.bind = function (fn, scope) {
  return function () {
    return fn.apply(scope, arguments);
  };
};

Shopify.setSelectorByValue = function (selector, value) {
  for (var i = 0, count = selector.options.length; i < count; i++) {
    var option = selector.options[i];

    if (value == option.value || value == option.innerHTML) {
      selector.selectedIndex = i;
      return i;
    }
  }
};

Shopify.addListener = function (target, eventName, callback) {
  target.addEventListener ? target.addEventListener(eventName, callback, false) : target.attachEvent('on' + eventName, callback);
};

Shopify.postLink = function (path, options) {
  options = options || {};
  var method = options['method'] || 'post';
  var params = options['parameters'] || {};
  var form = document.createElement("form");
  form.setAttribute("method", method);
  form.setAttribute("action", path);

  for (var key in params) {
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", key);
    hiddenField.setAttribute("value", params[key]);
    form.appendChild(hiddenField);
  }

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
};

Shopify.CountryProvinceSelector = function (country_domid, province_domid, options) {
  this.countryEl = document.getElementById(country_domid);
  this.provinceEl = document.getElementById(province_domid);
  this.provinceContainer = document.getElementById(options['hideElement'] || province_domid);
  Shopify.addListener(this.countryEl, 'change', Shopify.bind(this.countryHandler, this));
  this.initCountry();
  this.initProvince();
};

Shopify.CountryProvinceSelector.prototype = {
  initCountry: function () {
    var value = this.countryEl.getAttribute('data-default');
    Shopify.setSelectorByValue(this.countryEl, value);
    this.countryHandler();
  },
  initProvince: function () {
    var value = this.provinceEl.getAttribute('data-default');

    if (value && this.provinceEl.options.length > 0) {
      Shopify.setSelectorByValue(this.provinceEl, value);
    }
  },
  countryHandler: function (e) {
    var opt = this.countryEl.options[this.countryEl.selectedIndex];
    var raw = opt.getAttribute('data-provinces');
    var provinces = JSON.parse(raw);
    this.clearOptions(this.provinceEl);

    if (provinces && provinces.length == 0) {
      this.provinceContainer.style.display = 'none';
    } else {
      for (var i = 0; i < provinces.length; i++) {
        var opt = document.createElement('option');
        opt.value = provinces[i][0];
        opt.innerHTML = provinces[i][1];
        this.provinceEl.appendChild(opt);
      }

      this.provinceContainer.style.display = "";
    }
  },
  clearOptions: function (selector) {
    while (selector.firstChild) {
      selector.removeChild(selector.firstChild);
    }
  },
  setOptions: function (selector, values) {
    for (var i = 0, count = values.length; i < values.length; i++) {
      var opt = document.createElement('option');
      opt.value = values[i];
      opt.innerHTML = values[i];
      selector.appendChild(opt);
    }
  }
};

class VariantRadios extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('change', this.onVariantChange);
  }

  onVariantChange() {
    this.updateOptions();
    this.updateMasterId();

    if (!this.currentVariant) {
      console.log('unavailable');
    } else {
      this.updateURL();
      this.renderProductInfo();
    }
  }

  updateOptions() {
    const fieldsets = Array.from(this.querySelectorAll('fieldset'));
    this.options = fieldsets.map(fieldset => {
      return Array.from(fieldset.querySelectorAll('input')).find(radio => radio.checked).value;
    });
  }

  updateMasterId() {
    this.currentVariant = this.getVariantData().find(variant => {
      return !variant.options.map((option, index) => {
        return this.options[index] === option;
      }).includes(false);
    });
  }

  getVariantData() {
    this.variantData = this.variantData || JSON.parse(this.querySelector('[type="application/json"]').textContent);
    return this.variantData;
  }

  updateURL() {
    if (!this.currentVariant || this.dataset.updateUrl === 'false') return;
    window.history.replaceState({}, '', `${this.dataset.url}?variant=${this.currentVariant.id}`);
  }

  renderProductInfo() {
    fetch(`${this.dataset.url}?variant=${this.currentVariant.id}&section_id=${this.dataset.section}`).then(response => response.text()).then(responseText => {
      const id = `price-${this.dataset.section}`;
      const html = new DOMParser().parseFromString(responseText, 'text/html');
      const destination = document.getElementById(id);
      const source = html.getElementById(id);

      if (source && destination) {
        destination.dataset.price = source.dataset.price
        destination.children[0].textContent = source.children[0].textContent
      }
      const total = '.selection-total .total';
      const savings = '.selection-total .savings';
      const origPrice = '.selection-total .orig-price';
      const destinationTotal = document.querySelector(total);
      const destinationSavings = document.querySelector(savings);
      const destinationOrigPrice = document.querySelector(origPrice);

      const sourceTotal = html.querySelector(total);
      const sourceSavings = html.querySelector(savings);
      const sourceOrigPrice = html.querySelector(origPrice);
      if (destinationTotal && sourceTotal) {
        destinationTotal.textContent = sourceTotal.textContent
      }

      if (destinationSavings && sourceSavings) {
        destinationSavings.textContent = sourceSavings.textContent
      }
      if (destinationOrigPrice && sourceOrigPrice) {
        destinationOrigPrice.textContent = sourceOrigPrice.textContent
      }
    });
  }

}

customElements.define('variant-radios', VariantRadios);

//Product Quanitiy Input Component//

class QuantityInput extends HTMLElement {
  constructor() {
    super();
    this.input = this.querySelector('input');
    this.changeEvent = new Event('change', {
      bubbles: true
    });
    this.querySelectorAll('button').forEach(button => button.addEventListener('click', this.onButtonClick.bind(this)));
  }

  onButtonClick(event) {
    event.preventDefault();
    const previousValue = this.input.value;
    event.target.name === 'plus' ? this.input.stepUp(1) : this.input.stepDown(1);
    if (previousValue !== this.input.value) this.input.dispatchEvent(this.changeEvent);
  }

}

customElements.define('quantity-input', QuantityInput); // Product Slider Component

const currentImage = document.getElementById('mainImage');
const varImage = document.querySelectorAll('#varImage');
const productPath = 'products'
if (window.location.pathname.includes(productPath)) {
  varImage[0].classList.add('selected');
}

const arrowBtns = document.querySelectorAll('.product__content-imgs i'); // const selectedImg = document.querySelector('.product__content-imgs .selected')

arrowBtns.forEach(button => {
  button.addEventListener('click', changeImage);
});
varImage.forEach(image => {
  image.addEventListener('click', changeImage);
});

function getImageTitles() {
  let varImg = [];
  varImage.forEach((image, i) => {
    varImg.push(image.getAttribute('src'));
  });
  return varImg;
}

getImageTitles();
clicks = 0;

function changeImage(e) {
  e.preventDefault();
  const selectedImg = document.querySelector('.product__content-imgs .selected');

  if (e.target.id === 'varImage') {
    e.target.classList.add('selected');
    clicks = e.target.dataset.image - 1;
  }

  if (e.target.classList.contains('fa-caret-left') && selectedImg.previousElementSibling.tagName === 'IMG') {
    selectedImg.previousElementSibling.classList.add('selected');
    clicks -= 1;
  }

  if (e.target.classList.contains('fa-caret-left') && selectedImg.previousElementSibling.tagName !== 'IMG') {
    varImage[varImage.length - 1].classList.add('selected');
    clicks = varImage.length - 1;
  }

  if (e.target.classList.contains('fa-caret-right') && selectedImg.nextElementSibling.tagName === 'IMG') {
    selectedImg.nextElementSibling.classList.add('selected');
    clicks += 1;
  }

  if (e.target.classList.contains('fa-caret-right') && selectedImg.nextElementSibling.tagName !== 'IMG') {
    varImage[0].classList.add('selected');
    clicks = 0;
  }
  selectedImg.classList.remove('selected');
  return changeImageUrl(clicks);
}

;

const changeImageUrl = function () {
  const titles = getImageTitles();
  titles.forEach(title => {
    title[clicks].replace('100x100', '500x500');
  });
  currentImage.classList.toggle('fade-out');
  setTimeout(() => {
    currentImage.setAttribute('src', `${titles[clicks].replace('100x100', 'medium')}`);
    currentImage.classList.toggle('fade-out');
  }, 300);
};


const customerIcon = document.getElementById('customerModal')
const modal = document.getElementById('modal')
customerIcon.addEventListener('click', handleIconClick.bind(this))

function handleIconClick(e) {
  e.preventDefault();
  modal.classList.toggle('show')
}