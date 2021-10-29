

class CartDrawer extends HTMLElement{
    constructor(){
        super();
        // cartIcon.addEventListener('click', this.renderCart )
        this.attachShadow({ mode: 'open'})
    //    this.shadowRoot.appendChild(template.content.cloneNode(true))
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'cart__content');
        const headingContainer = wrapper.appendChild(document.createElement('div'));
        headingContainer.setAttribute('class', 'cart__headings');
        const cartHeading = headingContainer.appendChild(document.createElement('span'));

        const cartItemsContainer = wrapper.appendChild(document.createElement('div'));
        cartItemsContainer.setAttribute('class', 'cart__items');
        cartItemsContainer.setAttribute('id', 'cartItems');








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
            flex-basis: 100%;
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
        const addToCartBtn = document.querySelector('.product-form__submit')
          cartIcon.addEventListener('click',this.onEventHandler.bind(this))
          
         
    };


    onEventHandler () {
      this.loadData(this.setCartHeading, this)
      this.loadData(this.getCartItems, this, this.changeCart)
    }

    async loadData(fn, el, fns)  {
      const req = await fetch('/cart.js');
      const data = await req.json();
      fn(data, el, fns);

    }

    setCartHeading(cart, elem) {
        const shadow = elem.shadowRoot;

        if (cart.items.length === 0) {
            shadow.querySelector('.cart__headings > span').textContent = 'No Items In Your Cart';
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
        if (cart.items.length > 0 && elem.dataset.state === 'open') {
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
          console.log(cart.total_price)
          cartTotal.textContent = 'Your Total: ' + `${formatter.format(cart.total_price * .01)}`
          cartTotal.setAttribute('class','total')
                cart.items.forEach((item, i) => {
                  if (elem.dataset.state === 'open') {
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
                  }
                  
                  if (elem.dataset.state !== 'open') {
                    const cartItemsWrapper = shadow.querySelector('.cart__items')
                    const child = shadow.querySelector('.line__item')
                    cartItemsWrapper.removeChild(child);
                    const checkoutButtonWrapper = shadow.querySelector('.checkout-wrapper')
                    shadow.removeChild(checkoutButtonWrapper);
                  }
                });

            }
            if (elem.dataset.state !== 'open' && cart.items.length >= 0) {
              const cartItemsWrapper = shadow.querySelector('.cart__items')
              const child = shadow.querySelector('.line__item')
              if (child) {
              cartItemsWrapper.removeChild(child);
              }
              const checkoutButtonWrapper = shadow.querySelector('.checkout-wrapper')
              checkoutButtonWrapper ? shadow.removeChild(checkoutButtonWrapper) :
              console.log('checkout button visible');
            }
            const chatApp = document.querySelector('.chat-app.chap-app--')
            const cartDrawer = document.querySelector('cart-drawer')
            const cartIcon = document.querySelector('.header__content-cart')
            const hamburgerIcon = document.querySelector('.header__content-hamburger')
            const cartContent = shadow.querySelector('.cart__content')
            const deleteIcon = shadow.querySelector('.delete__icon')
            const cartImage = shadow.querySelector('.line__item-img')
            const itemDetails = shadow.querySelector('.line__item-details')
            const itemTitle = shadow.querySelector('.item__title')
            const itemPrice = shadow.querySelector('.item__price')
            const inputWrapper = shadow.querySelector('.quantity-input-drawer')
            const input = shadow.querySelector('input')
            const icons = shadow.querySelectorAll('.quantity-input-drawer button')
            const cartHeading = shadow.querySelector('.cart__headings > span')

            if (bodyWidth < 900 && cartDrawer.dataset.state === 'open') {
             cartImage.setAttribute('width', '150');
             cartImage.setAttribute('height', '150');
             deleteIcon.style.top = '6rem'
             itemTitle.style.fontSize = 'var(--small)'
             itemPrice.style.fontSize = 'var(--small)'
             cartHeading.style.fontSize = 'var(--regular)'
             itemDetails.style.width = 'min-content'
             inputWrapper.style.width = 'auto'
             input.style.width = 'calc(2rem + 5vw)'
             input.style.padding = '0'
             inputWrapper.style.padding = '.5rem 1rem'
             cartDrawer.style.border = 'none'
             input.style.lineHeight = 'auto'
             cartContent.style.padding = '7rem 2rem 2rem 3rem'
             cartIcon.style.top = '5%'
             hamburgerIcon.style.top = '13%'
             icons[0].firstChild.style.fontSize = 'calc(2rem + 1vw)'
             icons[0].style.padding = '0 3px 0 0'
             icons[1].firstChild.style.fontSize = 'calc(2rem + 1vw)'
             icons[1].style.padding = '0 0 0 3px'
             chatApp.style.marginBottom = '10rem'
            }
            if (bodyWidth < 900 && cartDrawer.dataset.state !== 'open') {
              cartIcon.style.top = '26%'
              hamburgerIcon.style.top = '15%'
            } else {
              cartIcon.style.top = '26%'
              hamburgerIcon.style.top = '15%'
            }
            if (bodyWidth > 900) {
              cartIcon.style.top = '0%'
              
            }
     }


     changeCart(e) {
          e.preventDefault();
        const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
  
        });

        const newQuantity = this.querySelectorAll('input')
        const newItemsHeading = this.querySelector('.cart__headings span');
        console.log(this)

        let formData = {}

        let lineItems = this.querySelectorAll('.line__item');
        const newTotal = this.querySelector('.total')
        const cartBubble = document.querySelector('.cart-bubble')
        const updateTotal = function (data){
          if (formatter.format(data.total_price * .01) === NaN && data.items.length === 0 ) {
            newTotal.textContent = 'Your Total: $0'
          } else {
          newTotal.textContent = 'Your Total: ' + `${formatter.format(data.total_price * .01)}`;
          }
          cartBubble.textContent = `${data.items.length}`;

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
          console.log(data)
          fn(data);
           }


            switch (e.target.className) {
                case 'minus':
                  console.log(e.originalTarget.previousSibling.value)
                  e.originalTarget.previousSibling.stepDown(1)
                formData = {
                  'id': e.originalTarget.offsetParent.dataset.varID,
                  'line': Number(e.originalTarget.offsetParent.dataset.line),
                  'quantity': Number(e.originalTarget.previousSibling.value)
                }
                postData(formData, updateTotal)

                // console.log(Number(newQuantity.value))
                if (Number(e.originalTarget.previousSibling.value) === 0) {
                  e.originalTarget.offsetParent.remove()
                }
                lineItems = this.querySelectorAll('.line__item');

                if (lineItems.length === 0) {
                  newItemsHeading.textContent = 'You Have No Items In Your Cart'
                }
                if (lineItems.length > 0) {
                  newItemsHeading.textContent = `You Have ${lineItems.length} Items In Your Cart`
                }

                
                    break;

               case 'plus':
                e.originalTarget.nextSibling.stepUp(1)
                formData = {
                  'id': Number(e.originalTarget.offsetParent.dataset.varID),
                  'line': Number(e.originalTarget.offsetParent.dataset.line),
                  'quantity': e.originalTarget.nextSibling.value

                }
                postData(formData, updateTotal)
                lineItems = this.querySelectorAll('.line__item');


                   break;

               case 'delete__icon':
                 lineItems = this.querySelectorAll('.line__item')
                formData = {
                  'id': Number(e.originalTarget.offsetParent.dataset.varID),
                  'line': Number(e.originalTarget.offsetParent.dataset.line),
                  'quantity': 0

                }
                postData(formData, updateTotal)
                console.log(e.originalTarget.nextSibling.nextSibling.lastChild.firstChild.nextSibling.value)
                
                  e.originalTarget.offsetParent.remove()
                
                  lineItems = this.querySelectorAll('.line__item');

                if (lineItems.length === 0) {
                  newItemsHeading.textContent = 'You Have No Items In Your Cart'
                }
                if (lineItems.length > 0) {
                  newItemsHeading.textContent = `You Have ${lineItems.length} Items In Your Cart`
                }

                   break;


                default:
                    break;
            }
     }


    connectedCallback(){

    }


}

customElements.define('cart-drawer', CartDrawer);


//Product Quanitiy Input Component For Drawer//

class QuantityInputDrawer extends CartDrawer {
    constructor() {
      super();

    }
    }

  customElements.define('quantity-input-drawer', QuantityInputDrawer);


    // renderCart(){
    //     const defaults = {
    //         cartDrawer: 'cart-drawer',
    //         cartItemsWrapper: 'cart-drawer .cart__items',
    //         lineItem: 'cart-drawer .line__item',
    //         deleteIcon: 'cart-drawer .delete__icon',
    //         lineItemImage: 'cart-drawer .line__item-img',
    //         lineItemDetails: 'cart-drawer .line__item-details',
    //         lineItemTitle: 'cart-drawer .item__title',
    //         lineItemPrice: 'cart-drawer .item__price',
    //         addToCart: 'cart-drawer .plus',
    //         removeFromCart: 'cart-drawer .minus',
    //         checkoutButton: 'cart-drawer .checkout',
    //         heading: 'cart-drawer .cart__headings span',
    //         lineItemQuantity: 'cart-drawer quantity-input-drawer',
    //         plusIcon: 'cart-drawer .fa.fa-plus-circle',
    //         minusIcon: 'cart-drawer .fa.fa-minus-circle',
    //         input: 'cart-drawer input'
    //     }

    //     const cartDrawer = document.querySelector(defaults.cartDrawer);
    //     const cartItemsWrapper = document.querySelector(defaults.cartItemsWrapper);
    //     const lineItem = document.querySelector(defaults.lineItem);
    //     const deleteIcon = document.querySelector(defaults.deleteIcon)
    //     const lineItemImage = document.querySelector(defaults.lineItemImage)
    //     const lineItemDetails = document.querySelector(defaults.lineItemDetails);
    //     const lineItemTitle = document.querySelector(defaults.lineItemTitle);
    //     const lineItemPrice = document.querySelector(defaults.lineItemPrice);
    //     const lineItemQuantity = document.querySelector(defaults.lineItemQuantity);
    //     const addToCart = document.querySelector(defaults.addToCart);
    //     const plusIcon = document.querySelector(defaults.plusIcon);
    //     const removeFromCart = document.querySelector(defaults.removeFromCart);
    //     const minusIcon = document.querySelector(defaults.minusIcon);
    //     const input = document.querySelector(defaults.input);

    //     const checkoutButton = document.querySelector(defaults.checkoutButton);
    //     const heading = document.querySelector(defaults.heading)

    //     const fetchCart = async function () {
    //         const req = await fetch('/cart.js')
    //         const data = await req.json()
    //         let cartData = data.items.map(items => {
    //             return items
    //         })
    //         if (cartData.length <= 0) {
    //             heading.textContent = "No Items In Your Cart";
    //             return;
    //         }
    //         if (cartData.length > 0) {
    //             cartItemsWrapper.classList.toggle('is-hidden');
    //             checkoutButton.classList.toggle('is-hidden');

    //             cartData.length === 1 ? heading.textContent = `You Have ${cartData.length} Item In Your Cart` : heading.textContent = `You Have ${cartData.length} Items In Your Cart`;

    //             const formatter = new Intl.NumberFormat('en-US', {
    //                              style: 'currency',
    //                              currency: 'USD',
    //                            });
    //             cartData.forEach(item => {
    //                if (cartDrawer.dataset.state = "open") {
    //                     cartItemsWrapper.outerHTML = "<div class=\"line__item\">";
    //                    console.log(cartItemsWrapper.outerHTML)
    //                }
    //              });


    //         }
    //         console.log(cartData)
    //      }
    //      fetchCart();

    // }
    // changeCart(e){
    //     e.preventDefault();
    //     console.log(e.target)
    // }