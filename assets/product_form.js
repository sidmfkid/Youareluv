class ProductForm extends HTMLElement {
  constructor(){
    super();
    this.form = this.querySelector('form');
    this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
  }
  onSubmitHandler(evt) {
    evt.preventDefault();
    this.getID();
    this.postReq();
    this.updateCart();
  }

  getID() {
    var masterSelect = document.querySelector('#currentVariant')
      var uri = window.location.search
      const currentID = uri.slice(9);
  
    if (!currentID) {
      let varID = 40065683947710
      console.log(varID)
      return varID;
    } else {
      masterSelect.setAttribute('value', currentID)
      let varID = masterSelect.value
      console.log(varID)
      return varID
    }
  }



postReq(){
  const elemQuantity = document.querySelector('#quantityInput');
  let elemValue = elemQuantity.value;
  let formData = {
    'items': [{
     'id': this.getID(),
     'quantity': `${elemValue}`
     }]
   };
   
   fetch('/cart/add.js', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(formData)
   })
   .then(response => {
     return response.json();
   })
   .catch((error) => {
     console.error('Error:', error);
   });
   
  console.log(formData)
}

updateCart(){
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
}



}

customElements.define('product-form', ProductForm);