$(function() {

    // const addToCart = jQuery.post('/cart/add.js', $('form[action="/cart/add"]').serialize());

    $('[action="/cart/add"]').on('click', function (e) { 
        e.preventDefault();
      jQuery.post('/cart/add.js', $('form[action="/cart/add"]').serialize());
      jQuery.getJSON('/cart.js', function (cart) { 
        console.log(cart.items)
     })
     })

    

    jQuery.getJSON('/products/you-are-10-piece-crayons.js', function(product) {

        const variant = product.variants
        // console.log(variant);
          function getVariantId() {
              for (let i = 0; i < variant.length; i++) {
                  const [id] = [variant[i].id];
                  
                //   console.log(id);
              }
                  return id;
           }
           getVariantId();



        // console.log(variants);
        console.log(window.location.pathname)
        
        });
});