
class CartDrawer extends HTMLElement{
    constructor(){
        super();


        const minusBtn = document.querySelector('#minus')
        const atcBtn = document.querySelector("[name='addToCart']")
        const input = document.querySelector('input')
        const plusBtn = document.querySelector('#plus')
        console.log(minusBtn)

        this.onEvent();
        atcBtn.addEventListener('click', this.onEvent)
    }

    onEvent(){
        console.log('loaded')
        const cartInfo = async function () { 
            const res = await fetch('/cart.js', {method: 'GET'})
            const data = await res.json();
            const numItemsInCart = data.items.length;

            const price = [];
            const itemImage = [];
            const itemTitle = [];
            const itemVariantTitle = [];
            const wrapper = document.querySelector('.cart__items');
            var formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              });

            data.items.forEach(item => {


                const cartItemWrapper = document.createElement('div');
                const deleteItem = document.createElement('span');
                const itemImg = document.createElement('img');
                const itemDetails = document.createElement('div');
                const itemTitles = document.createElement('span');
                const itemPrice = document.createElement('span');
                const btnsWrapper = document.createElement('quantity-input');
                const addItem = document.createElement('button');
                const plusIcon = document.createElement('i');
                const removeItem = document.createElement('button');
                const minusIcon = document.createElement('i');
                const currentQuantity = document.createElement('input');

                cartItemWrapper.classList.add('line__item');
                deleteItem.classList.add('delete__icon');
                itemImg.classList.add('line__item-img');
                itemDetails.classList.add('line__item-details');
                itemTitles.classList.add('item__title');
                itemPrice.classList.add('item__price');
                removeItem.classList.add('minus');
                removeItem.setAttribute('type', 'button')
                removeItem.setAttribute('id', 'minus')
                removeItem.setAttribute('name', 'minus')
                addItem.classList.add('plus');
                addItem.setAttribute('type', 'button')
                addItem.setAttribute('id', 'plus')
                addItem.setAttribute('name', 'plus')
                plusIcon.setAttribute('class', 'fa fa-plus-circle')
                minusIcon.setAttribute('class', 'fa fa-minus-circle')
                currentQuantity.setAttribute('id', 'quantityInput')
                currentQuantity.setAttribute('type', 'number')
                currentQuantity.setAttribute('value', '1')
                currentQuantity.setAttribute('min', '1')
                currentQuantity.setAttribute('form', 'product-form')




                cartItemWrapper.appendChild(deleteItem);
                cartItemWrapper.appendChild(itemImg);
                cartItemWrapper.appendChild(itemDetails);
                itemDetails.appendChild(itemTitles);
                itemDetails.appendChild(itemPrice);
                itemDetails.appendChild(btnsWrapper);
                btnsWrapper.appendChild(addItem);
                addItem.appendChild(plusIcon);
                btnsWrapper.appendChild(currentQuantity);
                btnsWrapper.appendChild(removeItem);
                removeItem.appendChild(minusIcon)
                wrapper.appendChild(cartItemWrapper);

                itemImg.setAttribute('src', `${item.image}`)
                itemImg.setAttribute('width', '300')
                itemImg.setAttribute('height', '300')
                itemTitles.textContent = `${item.product_title}` + ' / ' + `${item.variant_title}`
                itemPrice.textContent = formatter.format(item.price * .01)
                currentQuantity.value = `${item.quantity}`
                
                // addItem.textContent = 'Add Item';
                // removeItem.textContent = 'Remove Item';


                
                price.push(item.price)
                itemImage.push(item.image)
                itemVariantTitle.push(item.variant_title)
                itemTitle.push(item.product_title)
            });


            console.log(data.items);
            console.log(itemImage);
         }
         cartInfo();
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
