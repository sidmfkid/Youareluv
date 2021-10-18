'use strict';
$(document).ready(function() {



    const $cartNum = $(".cart-bubble");
    const $addItem = $('#addItem');
    const $quantityInput = $('#quantityInput');
    const $currentID = $("option[selected='selected']").val();
    const selectForm = document.querySelector("#id");
    const addToCart = document.querySelector("#addToCart");

    

    // const addToCart = jQuery.post('/cart/add.js', $('form[action="/cart/add"]').serialize());


    function addItem(e) {
      e.preventDefault();
    jQuery.post('/cart/add.js', $("[action='/cart/add']"));

    jQuery.getJSON('/cart.js', function (cart) {
      const [items] = cart.items
      const quantity = items.quantity
          $cartNum.text(function () {
              if (quantity <= 0){
              return '';
              } else {
           return   `${quantity}`;
              }
          });

      console.log(quantity)
      console.log(items)
   })
   }

     function checkVariantId() { 
       var variant = this.options[this.selectedIndex].value;
       console.log(variant)
       jQuery.post('/cart/add.js', {
        items: [
          {
            quantity: 1,
            id: variant
          }
        ]
      });
      
       //var params = `?variant=${variant}`
       //const productURL = window.location.href;
      //let newUrl = new URL(productURL)
      // let p = new URLSearchParams(newUrl.search.slice(1));
      // console.log(p)
      //console.log(newUrl)
     // console.log(productURL)
      //newUrl.searchParams.set('variant', variant)
      // console.log(p)
      //console.log(newUrl)
      //console.log(newUrl.searchParams.get('variant'))

      return variant

      }

     selectForm.addEventListener('change', checkVariantId, false);
       addToCart.addEventListener('click', addItem, false);
});