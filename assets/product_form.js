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
      const varID = 40065683947710
      console.log(varID)
      return varID;
    } else {
      masterSelect.setAttribute('value', currentID)
      const varID = masterSelect.value
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
   
   const getData = async function () { 
     const res = await fetch('/cart/add.js', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(formData)
   })
   const data = await res.json();
   console.log(data)
    }
    getData();
}

updateCart(){
  const cartBubble = document.querySelector('.header__content-cart .cart-bubble')
  const getdata = async function () {
    const res = await fetch('/cart.js', { method: 'GET' });
    const data = await res.json();
    cartBubble.textContent = `${data.item_count}`
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

            });
  

  }
  getdata();
  console.log(getdata())
}



}

customElements.define('product-form', ProductForm);