const qtyBtns = document.querySelectorAll('.line__item-quantity button')
const deleteBtn = document.querySelectorAll('.line__item .delete')
const quantityInput = document.querySelectorAll('#quantityInput')
const changeInputEvent = new Event('change', {bubbles: true})
const lineItemProduct = document.querySelectorAll('.line__item-product')
const sectionCart = document.getElementById('cart')


// function handleClick(e) { 
//   e.preventDefault();
//   console.log('click')
//   quantityInput.forEach((input, i) => {
//     const previousValue = input.value;
//     e.target.name === 'minus' ? input.stepDown(1) : input.stepUp(1);
//     if (previousValue !== input.value) { input.dispatchEvent(changeInputEvent);
//     }
//   });
// }

function deleteItem(e) {
  e.preventDefault();
  const sectionID = e.target.nextElementSibling.dataset.id
  console.log(e.target)
let form = {
  'id': e.target.nextElementSibling.dataset.varid,
  'quantity': 0
}
changeData(form)
 e.target.parentElement.outerHTML = ''
renderSection(sectionID)
console.log(e.target)


}

 const changeData = async (form) => { 
   const req = await fetch('/cart/change.js', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(form)
   })
   const data = req.json();
   console.log(data)
 }

 const renderSection = async () => {
   const req = await fetch(`/?section_id=cart`)
   const data = await req.text();
   const cartId = `cart`
  const html = new DOMParser().parseFromString(data, 'text/html');
  const destination = document.getElementById(cartId)
  const source = html.getElementById(cartId)
  const totalSourcePrice = html.getElementById('total-price')
  const totalDestPrice = document.getElementById('total-price')
  console.log( source, source, destination)
  if (source && destination) {

     totalDestPrice.textContent = totalSourcePrice.textContent
  }
 }

deleteBtn.forEach(btn => {

btn.addEventListener('click', deleteItem)
});

// qtyBtns.forEach(btn => {
//   btn.addEventListener('click', handleClick)
// });

class CartDrawer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open'})
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'cart__content');
        const headingContainer = wrapper.appendChild(document.createElement('div'));
        headingContainer.setAttribute('class', 'cart__headings');
        const cartHeading = headingContainer.appendChild(document.createElement('span'));
        const cartItemsContainer = wrapper.appendChild(document.createElement('div'));
        cartItemsContainer.setAttribute('class', 'cart__items');
        cartItemsContainer.setAttribute('id', 'cartItems');
        this.loader = cartItemsContainer.appendChild(document.createElement('div'))
        const style = document.createElement('style');
        style.textContent = `
        @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
        input[type="number"] {
            -webkit-appearance: textfield;
            -moz-appearance: textfield;
            appearance: textfield;
        }
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
        }
        .load-icon {
          position: absolute;
          top:0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .load-icon.done {
          display: none;
        }
        .load-icon svg {
          width: 100px;
          height: 100px;
        }
        .load-icon svg circle {
          fill: var(--primary-20);
        }
        .cart__content {
            padding: 10rem 5rem 5rem 5rem;
            display: flex;
            flex-wrap: wrap;
        }
        .cart__content .cart__headings {
            display: flex;
            justify-content: space-evenly;
            font-size: var(--medium);
            flex-basis: 100%;
            margin-bottom: 5rem;
        }
        .cart__content .cart__items {
            flex-basis: 100%;
            flex-wrap: wrap;
            overflow-x: hidden;
        }
        .cart__content .cart__items .line__item {
            margin-top: 3rem;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .cart__content .cart__items .line__item-details {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-wrap: wrap;
            width: 100%;
            font-size: var(--regular);
            text-align: center;
            padding: 0.5rem;
        }
        .cart__content .cart__items .line__item-details span {
            width: 100%;
        }
        .cart__content .cart__items .line__item-details span span {
            display: block;
        }
        .cart__content .cart__items .line__item-details .quantity-input-drawer {
            display: flex;
            justify-content: center;
            align-items: center;
            width: min-content;
            margin: 2rem 0 2rem 0;
            border: 2px solid var(--primary-50);
            border-radius: 3rem;
            background-color: var(--primary-90);
        }
        .cart__content .cart__items .line__item-details .quantity-input-drawer button {
            position: relative;
            z-index: 5;
            width: auto;
            height: auto;
            padding: 1rem 2rem;
            cursor: pointer;
            background: none;
            border: none;
        }
        .cart__content
            .cart__items
            .line__item-details
            .quantity-input-drawer
            button:hover
            i,
            .cart__content
            .cart__items
            .line__item-details
            .quantity-input-drawer
            button:active
            i {
            transform: scale(1.05);
            color: var(--primary-60);
        }
        .cart__content .cart__items .line__item-details .quantity-input-drawer button i {
            position: relative;
            z-index: -1;
            font-size: 4rem;
            color: var(--primary-50);
            cursor: pointer;
            transform: scale(1);
            transition: all 0.3s ease-in-out;
        }
        .cart__content .cart__items .line__item-details .quantity-input-drawer input {
            text-align: center;
            background-color: var(--primary-90);
            border-left: 2px solid var(--primary-50);
            border-right: 2px solid var(--primary-50);
            border-top: none;
            border-bottom: none;
            width: max-content;
            font-size: var(--small);
            color: var(--primary-30);
        }
        .cart__content .cart__items .line__item .delete__icon {
            cursor: pointer;
            display: block;
            position: absolute;
            width: 3rem;
            height: 3rem;
            border: none;
            background: none;
            top: 0;
            right: 0;
        }
        .cart__content .cart__items .line__item .delete__icon::after, .cart__content .cart__items .line__item .delete__icon::before {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            content: "";
            background-color: var(--primary-50);
            width: 3rem;
            height: 0.5rem;
            border-radius: 10rem;
        }
        .cart__content .cart__items .line__item .delete__icon::before {
            transform: rotate(45deg);
        }
        .cart__content .cart__items .line__item .delete__icon::after {
            transform: rotate(-45deg);
        }
        .checkout {
            position: relative;
            bottom: 0;
            border: none;
            width: 40%;

        }

        .total {
          font-size: var(--regular);
          font-weight: 600;
          color: var(--primary-30);
          width: 100%;
          text-align: center;
          padding-top: .5rem;
        }
         .checkout-wrapper {
           display: flex;
           flex-wrap: wrap-reverse;
           justify-content: space-evenly;
           align-items: center;
          z-index: 10;
          position: sticky;
          background: white;
          box-shadow: 0 -6px 25px hsla(35, 88.2%, 10%, .6);
          top: 100%;
          border: none;
          width: 100%;
          height: 10rem;
        }

        .btn {
          padding: 1rem 4rem;
          text-align: center;
          font-size: var(--small);
          font-weight: 600;
        }
        .btn.btn-primary {
          transform: scale(1);
          transition: all 0.3s ease-in-out;
          background-color: var(--primary-50);
          color: var(--primary-98);
          border-radius: 1rem;
        }
        .btn.btn-primary:active, .btn.btn-primary:hover {
          transform: scale(1.05);
          color: var(--secondary-30);
          background-color: var(--primary-50);
          border-radius: 1.3rem;
        }
        .quantity-input-drawer {
          width: 70%;
        }




        `;
        const fontAwesome = document.createElement('link')
        fontAwesome.setAttribute('ref', 'stylesheet')
        fontAwesome.setAttribute('href', '/assets/font-awesome.min.css')
        fontAwesome.setAttribute('type', 'text/css')
        fontAwesome.setAttribute('media', 'all')
        this.shadowRoot.appendChild(fontAwesome)
        this.shadowRoot.append(style,wrapper)
        const cartIcon = document.querySelector('.header__content-cart');
          cartIcon.addEventListener('click',this.onEventHandler.bind(this))
    };


    onEventHandler () {
      this.openDrawer(this)
      this.loadData(this.setCartHeading, this)
      this.loadData(this.getCartItems, this, this.changeCart.bind(this))
    }
    openDrawer() {
  const cartDrawer = this
      if (cartDrawer.dataset.state === 'open') {
        cartDrawer.setAttribute('data-state', 'closed');
      } else {
        cartDrawer.setAttribute('data-state', 'open');
      }
    }
    loadAnimation(el) {
      el.setAttribute('class', 'load-icon')
      el.innerHTML = `
      <svg enable-background="new 0 0 0 0" id="L4" version="1.1" viewbox="0 0 100 100" x="0px" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
      <circle cx="6" cy="50" fill="#fff" r="6" stroke="none">
          <animate attributename="opacity" begin="0.1" dur="1s" repeatcount="indefinite" values="0;1;0"/>
      </circle>
      <circle cx="26" cy="50" fill="#fff" r="6" stroke="none">
          <animate attributename="opacity" begin="0.2" dur="1s" repeatcount="indefinite" values="0;1;0"/>
      </circle>
      <circle cx="46" cy="50" fill="#fff" r="6" stroke="none">
          <animate attributename="opacity" begin="0.3" dur="1s" repeatcount="indefinite" values="0;1;0"/>
      </circle>
  </svg>
      `
    }

    removeAnimation(el) {

      el.innerHTML = ``;
      el.setAttribute('class', 'done')
      
    }


 loadData(fn, el, fns)  {
      const data = currentCart

      fn(data, el, fns);
    }

    setCartHeading(cart, elem) {
        const shadow = elem.shadowRoot;
       const parElem = shadow.querySelector('.cart__headings > span')
        if (cart.items.length === 0) {
            parElem.textContent = 'No Items In Your Cart';
            return;
        }

        if (cart.items.length >= 2) {
            shadow.querySelector('.cart__headings > span').textContent = `You Have ${cart.items.length} items in your cart`;
            return;

        }

        if (cart.items.length <= 1) {
            shadow.querySelector('.cart__headings > span').textContent = `You Have ${cart.items.length} item in your cart`;
            return;

        }


     }
     getCartItems (cart, elem, fn) {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

      });

      const body = document.querySelector('body');
      const bodyWidth = body.clientWidth
      const shadow = elem.shadowRoot;
      console.log(cart.items)
         console.log(elem.dataset.state)
        if (cart.items.length >= 1 && elem.dataset.state === 'open') {
          const checkoutButtonWrapper = shadow.appendChild(document.createElement('form'));
          checkoutButtonWrapper.setAttribute('class', 'checkout-wrapper')
          const checkoutButton = checkoutButtonWrapper.appendChild(document.createElement('input'));
          checkoutButton.setAttribute('class','btn btn-primary checkout');
          checkoutButton.setAttribute('type','submit');
          checkoutButton.setAttribute('name','checkout');
          checkoutButton.setAttribute('value','Checkout');
          checkoutButtonWrapper.setAttribute('method','post');
          checkoutButtonWrapper.setAttribute('action', `${window.routes.cart_url}`);
          checkoutButton.textContent = 'Checkout';
          const cartTotal = checkoutButtonWrapper.appendChild(document.createElement('span'));
          cartTotal.textContent = 'Your Total: ' + `${formatter.format(cart.total_price() * .01)}`
          cartTotal.setAttribute('class','total')
                cart.items.forEach((item, i) => {
                    const lineItem = shadow.querySelector('.cart__items').appendChild(document.createElement('div'));
                    lineItem.setAttribute('class', 'line__item');
                    lineItem.setAttribute('data-varID', `${item.id}`);
                    lineItem.setAttribute('data-quantity', `${item.quantity}`);
                    lineItem.setAttribute('data-line', `${i + 1}`);
                    const deleteItemButton = lineItem.appendChild(document.createElement('button'));
                    deleteItemButton.setAttribute('class', 'delete__icon');
                    deleteItemButton.setAttribute('name', 'deleteItem');
                    deleteItemButton.setAttribute('type', 'button');
                    const itemImage = lineItem.appendChild(document.createElement('img'));
                    itemImage.setAttribute('class','line__item-img');
                    itemImage.setAttribute('height','300');
                    itemImage.setAttribute('width','300');
                    itemImage.setAttribute('src',`${item.image}`);
                    const lineItemDetails = lineItem.appendChild(document.createElement('div'))
                    lineItemDetails.setAttribute('class', 'line__item-details')
                    const itemHeading = lineItemDetails.appendChild(document.createElement('span'));
                    itemHeading.setAttribute('class', 'item__title');
                    itemHeading.textContent = `${item.title}`
                    const itemPrice = lineItemDetails.appendChild(document.createElement('span'));
                    itemPrice.setAttribute('class', 'item__price')
                    itemPrice.textContent = `${formatter.format(item.price * .01)}`
                    const lineItemQuantity = lineItemDetails.appendChild(document.createElement('div'));
                    lineItemQuantity.setAttribute('class', 'quantity-input-drawer')
                    const addToCart = lineItemQuantity.appendChild(document.createElement('button'));
                    addToCart.setAttribute('class', 'plus');
                    addToCart.setAttribute('name', 'plus');
                    addToCart.setAttribute('type', 'button');
                    const addToCartIcon = addToCart.appendChild(document.createElement('i'));
                    addToCartIcon.setAttribute('class', 'fa fa-plus-circle')
                    const itemQuantity = lineItemQuantity.appendChild(document.createElement('input'));
                    itemQuantity.setAttribute('value', `${item.quantity}`)
                    itemQuantity.setAttribute('id', 'quantityInput')
                    itemQuantity.setAttribute('type', 'number')
                    itemQuantity.setAttribute('min', '0')

                    const removeFromCart = lineItemQuantity.appendChild(document.createElement('button'));
                    removeFromCart.setAttribute('class', 'minus');
                    removeFromCart.setAttribute('name', 'minus');
                    removeFromCart.setAttribute('type', 'button');
                    const removeFromCartIcon = removeFromCart.appendChild(document.createElement('i'));
                    removeFromCartIcon.setAttribute('class', 'fa fa-minus-circle');

                    const buttons = lineItem.querySelectorAll('button');
                    const changeItem = fn.bind(shadow)
                    buttons.forEach(button => {
                        button.addEventListener('click', changeItem)
                    })
                  // if (elem.dataset.state !== 'open') {
                  //   const cartItemsWrapper = shadow.querySelector('.cart__items')
                  //   const child = shadow.querySelectorAll('.line__item')
                  //   child.forEach(child => {
                  //     child.remove();
                  //   });
                  //   const checkoutButtonWrapper = shadow.querySelector('.checkout-wrapper')
                  //   // console.log(cartItemsWrapper.child)
                  //   shadow.removeChild(checkoutButtonWrapper);
                  // }
                });


              }
        if (elem.dataset.state === 'closed' && cart.items.length > 0) {
          const cartItemsWrapper = shadow.querySelector('.cart__items')
          const child = shadow.querySelectorAll('.line__item')
          child.forEach(child => {
          child.remove();
          });
          const checkoutButtonWrapper = shadow.querySelectorAll('.checkout-wrapper')
          checkoutButtonWrapper.forEach(btn => {
            btn.remove();
          });
          return;
        }

            const cartDrawer = document.querySelector('cart-drawer')
            const cartIcon = document.querySelector('.header__content-cart')
            const hamburgerIcon = document.querySelector('.header__content-hamburger')
            const cartContent = shadow.querySelector('.cart__content')
            const cartHeading = shadow.querySelector('.cart__headings > span')
            const lineItem = shadow.querySelectorAll('.line__item')
            // console.log(lineItem)

            if (bodyWidth <= 900) {
              console.log(bodyWidth)
              lineItem.forEach(child => {
                console.log(child.children[2].children[2].children[1])
                child.children[1].style.width = '150px';
                child.children[1].style.height = '150px';
                child.children[0].style.top = '6rem'
                child.children[2].style.fontSize = 'var(--small)'
                child.children[2].style.fontSize = 'var(--small)'
                child.children[2].style.width = '100%'
                child.children[2].children[2].style.width = 'auto'
                child.children[2].children[2].style.padding = '.5rem 1rem'
                child.children[2].children[2].children[1].style.width = 'calc(2rem + 5vw)'
                child.children[2].children[2].children[1].style.padding = '0'
                child.children[2].children[2].children[1].style.lineHeight = 'auto'
                child.children[2].children[2].children[0].firstChild.style.fontSize = 'calc(2rem + 1vw)'
                child.children[2].children[2].children[0].style.padding = '0 3px 0 0'
                child.children[2].children[2].children[2].firstChild.style.fontSize = 'calc(2rem + 1vw)'
                child.children[2].children[2].children[2].style.padding = '0 0 0 3px'
              });
             cartHeading.style.fontSize = 'var(--regular)'
             cartDrawer.style.border = 'none'
             cartContent.style.padding = '7rem 2rem 2rem 3rem'
             cartIcon.style.top = '5%'
             hamburgerIcon.style.top = '13%'
            }
            if (cartDrawer.dataset.state === 'open') {
              cartIcon.style.top = '3%'
              hamburgerIcon.style.top = '15%'
            }
            if (cartDrawer.dataset.state === 'closed'){
              cartIcon.style.top = '26%'
              hamburgerIcon.style.top = '15%'
            }
     }


     changeCart(e) {
       const itemsInCart = currentCart;
          e.preventDefault();
        const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',

        });

        const newQuantity = this.shadowRoot.querySelectorAll('input')
        const newItemsHeading = this.shadowRoot.querySelector('.cart__headings > span');

        let formData = {}

        let lineItems = this.shadowRoot.querySelectorAll('.line__item');
        const newTotal = this.shadowRoot.querySelector('.total')
        const cartBubble = document.querySelector('.cart-bubble')
        const updateTotal = function (data){
          itemsInCart.items = [];
          itemsInCart.items = data.items
          console.log(data)
          if (formatter.format(data.total_price * .01) === NaN && data.items.length === 0 ) {
            newTotal.textContent = 'Your Total: $0'
            newItemsHeading.textContent = 'You Have No Items In Your Cart' 
            return;
          } else {
          newTotal.textContent = 'Your Total: ' + `${formatter.format(data.total_price * .01)}`;
          }
          cartBubble.textContent = `${data.items.length}`;
          data.items.length > 1 ?
          newItemsHeading.textContent = `You Have ${data.items.length} Items In Your Cart` :
          newItemsHeading.textContent = `You Have ${data.items.length} Item In Your Cart`



        }

        const postData = async function (form, fn) {

            const res = await fetch('/cart/change.js', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
          })
          const data = await res.json();
          fn(data);

           }

           this.loadAnimation(this.loader)

            switch (e.target.className) {
                case 'minus':
                 if (e.target) {
                  e.target.previousSibling.stepDown(1)
                  formData = {
                    'id': e.target.offsetParent.dataset.varID,
                    'line': Number(e.target.offsetParent.dataset.line),
                    'quantity': Number(e.target.previousSibling.value)
                  }
                  if (Number(e.target.previousSibling.value) === 0) {
                    e.target.offsetParent.remove()
                  }
                 } else {
                  e.originalTarget.previousSibling.stepDown(1)
                  formData = {
                    'id': e.originalTarget.offsetParent.dataset.varID,
                    'line': Number(e.originalTarget.offsetParent.dataset.line),
                    'quantity': Number(e.originalTarget.previousSibling.value)
                  }

                  if (Number(e.originalTarget.previousSibling.value) === 0) {
                    e.originalTarget.offsetParent.remove()
                  }
                 }
                postData(formData, updateTotal)

                // console.log(Number(newQuantity.value))




                    break;

               case 'plus':

               if (e.target) {
                e.target.nextSibling.stepUp(1)
                formData = {
                  'id': Number(e.target.offsetParent.dataset.varID),
                  'line': Number(e.target.offsetParent.dataset.line),
                  'quantity': e.target.nextSibling.value

                }
               } else {
                e.originalTarget.nextSibling.stepUp(1)
                formData = {
                  'id': Number(e.originalTarget.offsetParent.dataset.varID),
                  'line': Number(e.originalTarget.offsetParent.dataset.line),
                  'quantity': e.originalTarget.nextSibling.value

                }
               }
                postData(formData, updateTotal)


                   break;

               case 'delete__icon':

               if (e.target) {

                formData = {
                  'id': Number(e.target.offsetParent.dataset.varID),
                  'line': Number(e.target.offsetParent.dataset.line),
                  'quantity': 0

                }
                postData(formData, updateTotal)
                e.target.offsetParent.remove()
               }else {
                lineItems = this.querySelectorAll('.line__item')
                formData = {
                  'id': Number(e.originalTarget.offsetParent.dataset.varID),
                  'line': Number(e.originalTarget.offsetParent.dataset.line),
                  'quantity': 0

                }
                postData(formData, updateTotal)
                e.originalTarget.offsetParent.remove()
               }

                   break;


                default:
                    break;
            }
            this.removeAnimation(this.loader)

     }

    connectedCallback(){

    }


}

customElements.define('cart-drawer', CartDrawer);