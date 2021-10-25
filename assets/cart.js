class CartDrawer extends HTMLElement{
    constructor(){
        super();

        const cartIcon = document.querySelector('.header__content-cart');

        cartIcon.addEventListener('click', this.renderCart )

  
    }
    renderCart(){
        const defaults = {
            cartDrawer: 'cart-drawer',
            cartItemsWrapper: 'cart-drawer .cart__items',
            lineItem: 'cart-drawer .line__item',
            deleteIcon: 'cart-drawer .delete__icon',
            lineItemImage: 'cart-drawer .line__item-img',
            lineItemDetails: 'cart-drawer .line__item-details',
            lineItemTitle: 'cart-drawer .item__title',
            lineItemPrice: 'cart-drawer .item__price',
            addToCart: 'cart-drawer .plus',
            removeFromCart: 'cart-drawer .minus',
            checkoutButton: 'cart-drawer .checkout',
            heading: 'cart-drawer .cart__headings span',
            lineItemQuantity: 'cart-drawer quantity-input',
            plusIcon: 'cart-drawer .fa.fa-plus-circle',
            minusIcon: 'cart-drawer .fa.fa-minus-circle',
            input: 'cart-drawer input'
        }

        const cartDrawer = document.querySelector(defaults.cartDrawer);
        const cartItemsWrapper = document.querySelector(defaults.cartItemsWrapper);
        const lineItem = document.querySelector(defaults.lineItem);
        const deleteIcon = document.querySelector(defaults.deleteIcon)
        const lineItemImage = document.querySelector(defaults.lineItemImage)
        const lineItemDetails = document.querySelector(defaults.lineItemDetails);
        const lineItemTitle = document.querySelector(defaults.lineItemTitle);
        const lineItemPrice = document.querySelector(defaults.lineItemPrice);
        const lineItemQuantity = document.querySelector(defaults.lineItemQuantity);
        const addToCart = document.querySelector(defaults.addToCart);
        const plusIcon = document.querySelector(defaults.plusIcon);
        const removeFromCart = document.querySelector(defaults.removeFromCart);
        const minusIcon = document.querySelector(defaults.minusIcon);
        const input = document.querySelector(defaults.input);

        const checkoutButton = document.querySelector(defaults.checkoutButton);
        const heading = document.querySelector(defaults.heading)

        const fetchCart = async function () { 
            const req = await fetch('/cart.js')
            const data = await req.json()
            let cartData = data.items.map(items => {
                return items
            })
            if (cartData.length <= 0) {
                heading.textContent = "No Items In Your Cart";
                return;
            }
            if (cartData.length > 0) {
                cartItemsWrapper.classList.remove('is-hidden');

                cartData.length === 1 ? heading.textContent = `You Have ${cartData.length} Item In Your Cart` : heading.textContent = `You Have ${cartData.length} Items In Your Cart`;
                 
                const formatter = new Intl.NumberFormat('en-US', {
                                 style: 'currency',
                                 currency: 'USD',
                               });
                cartData.forEach(item => {
                    if (cartDrawer.dataset.state === "closed") {
                       while  (cartItemsWrapper.firstChild.nextSibling) {
                       cartItemsWrapper.children[0].nextSibling.remove();
                       }
                    } 
                    if (cartDrawer.dataset.state === "open") {
                        console.log(cartItemsWrapper.children[0].style.display)

                     // Cloning elements(nodes) 
                     let clones = {
                    lineItemClone: lineItem.cloneNode(),
                    deleteIconClone: deleteIcon.cloneNode(),
                    lineItemImageClone: lineItemImage.cloneNode(),
                    lineItemDetailsClone: lineItemDetails.cloneNode(),
                    lineItemTitleClone: lineItemTitle.cloneNode(),
                    lineItemPriceClone: lineItemPrice.cloneNode(),
                    lineItemQuantityClone: lineItemQuantity.cloneNode(),
                    addToCartClone: addToCart.cloneNode(),
                    plusIconClone: plusIcon.cloneNode(),
                    inputClone: input.cloneNode(),
                    removeFromCartClone: removeFromCart.cloneNode(),
                    minusIconClone: minusIcon.cloneNode()
                     }


                    // Appending Cloned elements to dom
                    cartItemsWrapper.appendChild(clones.lineItemClone);
                    clones.lineItemClone.appendChild(clones.deleteIconClone);
                    clones.lineItemClone.appendChild(clones.lineItemImageClone);
                    clones.lineItemClone.appendChild(clones.lineItemDetailsClone);
                    clones.lineItemDetailsClone.appendChild(clones.lineItemTitleClone);
                    clones.lineItemDetailsClone.appendChild(clones.lineItemPriceClone);
                    clones.lineItemDetailsClone.appendChild(clones.lineItemQuantityClone);
                    clones.lineItemQuantityClone.appendChild(clones.addToCartClone);
                    clones.lineItemQuantityClone.appendChild(clones.inputClone);
                    clones.lineItemQuantityClone.appendChild(clones.removeFromCartClone);
                    clones.addToCartClone.appendChild(clones.plusIconClone);
                    clones.removeFromCartClone.appendChild(clones.minusIconClone);


                    // adding Cart data To Dom
                    clones.lineItemClone.setAttribute('data-varID', `${item.id}`)
                    clones.lineItemClone.setAttribute('data-quantity', `${item.quantity}`)
                    clones.lineItemImageClone.setAttribute('src', `${item.image}`);
                    clones.lineItemTitleClone.textContent = `${item.title}`;
                    clones.lineItemPriceClone.textContent = formatter.format(item.price * .01);
                    clones.inputClone.value = `${item.quantity}`

                    }
                 });


            }
            console.log(cartData)
         }
         fetchCart();
    }



    // onEvent(){
    //     const cartInfo = async function () { 
    //         const res = await fetch('/cart.js', {method: 'GET'})
    //         const data = await res.json();
    //         const numItemsInCart = data.items.length;

    //         const price = [];
    //         const itemImage = [];
    //         const itemTitle = [];
    //         const itemVariantTitle = [];
    //         const wrapper = document.querySelector('.cart__items');
    //         var formatter = new Intl.NumberFormat('en-US', {
    //             style: 'currency',
    //             currency: 'USD',
    //           });

    //         data.items.forEach(item => {


    //             const cartItemWrapper = document.createElement('div');
    //             const deleteItem = document.createElement('span');
    //             const itemImg = document.createElement('img');
    //             const itemDetails = document.createElement('div');
    //             const itemTitles = document.createElement('span');
    //             const itemPrice = document.createElement('span');
    //             const btnsWrapper = document.createElement('quantity-input');
    //             const addItem = document.createElement('button');
    //             const plusIcon = document.createElement('i');
    //             const removeItem = document.createElement('button');
    //             const minusIcon = document.createElement('i');
    //             const currentQuantity = document.createElement('input');

    //             cartItemWrapper.classList.add('line__item');
    //             deleteItem.classList.add('delete__icon');
    //             itemImg.classList.add('line__item-img');
    //             itemDetails.classList.add('line__item-details');
    //             itemTitles.classList.add('item__title');
    //             itemPrice.classList.add('item__price');
    //             removeItem.classList.add('minus');
    //             removeItem.setAttribute('type', 'button')
    //             removeItem.setAttribute('id', 'minus')
    //             removeItem.setAttribute('name', 'minus')
    //             addItem.classList.add('plus');
    //             addItem.setAttribute('type', 'button')
    //             addItem.setAttribute('id', 'plus')
    //             addItem.setAttribute('name', 'plus')
    //             plusIcon.setAttribute('class', 'fa fa-plus-circle')
    //             minusIcon.setAttribute('class', 'fa fa-minus-circle')
    //             currentQuantity.setAttribute('id', 'quantityInput')
    //             currentQuantity.setAttribute('type', 'number')
    //             currentQuantity.setAttribute('value', '1')
    //             currentQuantity.setAttribute('min', '1')
    //             currentQuantity.setAttribute('form', 'product-form')



    //             wrapper.appendChild(cartItemWrapper);
    //             cartItemWrapper.appendChild(deleteItem);
    //             cartItemWrapper.appendChild(itemImg);
    //             cartItemWrapper.appendChild(itemDetails);
    //             itemDetails.appendChild(itemTitles);
    //             itemDetails.appendChild(itemPrice);
    //             itemDetails.appendChild(btnsWrapper);
    //             btnsWrapper.appendChild(addItem);
    //             addItem.appendChild(plusIcon);
    //             btnsWrapper.appendChild(currentQuantity);
    //             btnsWrapper.appendChild(removeItem);
    //             removeItem.appendChild(minusIcon)

    //             itemImg.setAttribute('src', `${item.image}`)
    //             itemImg.setAttribute('width', '300')
    //             itemImg.setAttribute('height', '300')
    //             itemTitles.textContent = `${item.product_title}` + ' / ' + `${item.variant_title}`
    //             itemPrice.textContent = formatter.format(item.price * .01)
    //             currentQuantity.value = `${item.quantity}`
                
    //             // addItem.textContent = 'Add Item';
    //             // removeItem.textContent = 'Remove Item';


                
    //             price.push(item.price)
    //             itemImage.push(item.image)
    //             itemVariantTitle.push(item.variant_title)
    //             itemTitle.push(item.product_title)

                
    //         });


    //         console.log(data.items);
    //         console.log(itemImage);
    //      }
    //      cartInfo();
    // }

}

customElements.define('cart-drawer', CartDrawer);
