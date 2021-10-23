$(document).ready(function () {

const menu = document.querySelector('.header__content-hamburger')
const nav = document.querySelector('.header__content')
const header = document.querySelector('.header')
const overlay = document.querySelector('.header__overlay')

menu.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.toggle('open');
    header.classList.toggle('open');
    overlay.classList.toggle('open');
})

const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight)


const stickyNav = function (entries) {
    const [entry] = entries;

    // console.log(entry)
    if (!entry.isIntersecting) {
    nav.classList.add('sticky');
    setTimeout(() => {
        nav.classList.add('down')
    }, 500);
}
    else  {
        setTimeout(() => {
            nav.classList.remove('sticky')
        }, 500);
        nav.classList.remove('down');
    }
 }


const observerHeader = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: '500px',
});

observerHeader.observe(header);

const allSections = document.querySelectorAll('section')

const revealSection = function (entries, observer) { 
    const [entry] = entries;
    entry.target.classList.remove('hide')
    // console.log(entry)
 }

 const sectionObserver = new IntersectionObserver(revealSection, {
     root: null,
     threshold: .15,
 })
 allSections.forEach(function (section) { 
    sectionObserver.observe(section)
    section.classList.add('hide');
 })

})

const cartIcon = document.querySelector('.header__content-cart');
const cartDrawer = document.querySelector('cart-drawer');

function openDrawer() {
    if (cartDrawer.dataset.state === 'open') {
    cartDrawer.setAttribute('data-state', 'closed');
    } else {
    cartDrawer.setAttribute('data-state', 'open');
    }
    console.log()
 }

 cartIcon.addEventListener('click', openDrawer, false)


 function getCart(){
  const cartBubble = document.querySelector('.header__content-cart .cart-bubble')
  fetch('/cart.js', {
    method: 'GET'
  })
  .then(response => response.json())
  .then(cartData => 
    {
      cartBubble.textContent = `${cartData.item_count}`
    })
  console.log(cartBubble)
  // return cartData;
}

getCart();

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
      headers: { 'Content-Type': 'application/json', 'Accept': `application/${type}` }
    };
  }


  class VariantRadios extends HTMLElement {
    constructor() {
      super();
    this.addEventListener('change', this.onVariantChange);

    }

    onVariantChange(){
        this.updateOptions();
        this.updateMasterId();
        
        if (!this.currentVariant){
            console.log('unavailable');
        }else{
      this.updateURL();

        }

    }
  
    updateOptions() {
      const fieldsets = Array.from(this.querySelectorAll('fieldset'));
      this.options = fieldsets.map((fieldset) => {
        return Array.from(fieldset.querySelectorAll('input')).find((radio) => radio.checked).value;
      });
      console.log('This is this current option',this.options)
    }

    updateMasterId() {
        this.currentVariant = this.getVariantData().find((variant) => {
          return !variant.options.map((option, index) => {
            return this.options[index] === option;
          }).includes(false);
        });
        console.log('this is curent value', this.currentVariant)
      }

      getVariantData() {
        this.variantData = this.variantData || JSON.parse(this.querySelector('[type="application/json"]').textContent);
        return this.variantData;
      }
      updateURL() {
        if (!this.currentVariant || this.dataset.updateUrl === 'false') return;
        window.history.replaceState({ }, '', `${this.dataset.url}?variant=${this.currentVariant.id}`);
      }
  }

customElements.define('variant-radios', VariantRadios);

class QuantityInput extends HTMLElement {
  constructor() {
    super();
    this.input = this.querySelector('input');
    this.changeEvent = new Event('change', { bubbles: true })

    
    this.querySelectorAll('button').forEach(
      (button) => button.addEventListener('click', this.onButtonClick.bind(this))
    );
  }

  onButtonClick(event) {
    event.preventDefault();
    const previousValue = this.input.value;

    event.target.name === 'plus' ? this.input.stepUp(1) : this.input.stepDown(1);
    if (previousValue !== this.input.value) this.input.dispatchEvent(this.changeEvent);
    console.log(this.input.value)
  }
}
customElements.define('quantity-input', QuantityInput);
