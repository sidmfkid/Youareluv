
class CartDrawer extends HTMLElement{
    constructor(){
        super();

        this.cartItemWrapper = this.querySelector('.line__item');
        this.itemImg = this.querySelector('.line__item-img');
        this.itemDetails = this.querySelector('.line__item-details');
        this.itemTitle = this.querySelector('.item__title');
        this.itemPrice = this.querySelector('.item__price');
        this.btns = this.querySelector('.quantity__btns');
        this.currentQuantity = this.querySelector('.item__quantity');

        this.deleteItem = this.querySelector('.delete__icon');

        this.cart = this.querySelector('.cart__content')
        this.logItems = this.loadCartContents
        // this.cart.addEventListener('load', this.onEvent);
        this.onEvent();
    }

    onEvent(){
        console.log('loaded')
        const cartInfo = async function () { 
            const res = await fetch('/cart.js', {method: 'GET'})
            const data = await res.json();
            const numItemsInCart = data.items.length;
            const price = [];
            data.items.forEach(item => {
                price.push(item.price)
            });
            

            console.log(price);
         }

         cartInfo();
    //   e.preventDefault();
        // this.getCart();
    }



    //  splitData(data){
    //     const [itemsInCart] = data.items
        

    //      this.quantity = itemsInCart.quantity
    //      this.variant = itemsInCart.title
    //      this.price = itemsInCart.final_price

    //      return console.log(this.quantity)
    //  }

    // getCart(){
    //     const cartBubble = document.querySelector('.header__content-cart .cart-bubble')
    //     fetch('/cart.js', {
    //       method: 'GET'
    //     })
    //     .then(response => response.json())
    //     .then(cartData => 
    //       {
    //         cartBubble.textContent = `${cartData.item_count}`
    //       })
    //     console.log(cartBubble)
    //   }



}

customElements.define('cart-drawer', CartDrawer);
