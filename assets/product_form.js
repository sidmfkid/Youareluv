class ProductForm extends HTMLElement {
  constructor() {
    super();
    this.form = this.querySelector("form");
    this.form.addEventListener("submit", this.onSubmitHandler.bind(this));
  }
  onSubmitHandler(evt) {
    evt.preventDefault();
    this.getID();
    this.postReq(this.postData);
    // this.updateCart();
  }

  getID() {
    var masterSelect = document.querySelector("#currentVariant");
    var uri = window.location.search;
    const currentID = uri.slice(9);

    if (!currentID) {
      const varID = productJson.variants[0].id.toString();

      return varID;
    } else {
      masterSelect.setAttribute("value", currentID);
      const varID = masterSelect.value;

      return varID;
    }
  }

  postReq(fn) {
    const elemQuantity = document.querySelector("#quantityInput");
    let elemValue = elemQuantity.value;
    let formData = {
      items: [
        {
          id: this.getID(),
          quantity: `${elemValue}`,
        },
      ],
    };

    fn(this.updateCart, formData);
  }

  async postData(fn, formData) {
    const res = await fetch("/cart/add.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log("First post request", data);
    fn(data);
  }

  updateCart(data) {
    creatCartObj(data);
    cartBubble.textContent = "";
    cartBubble.textContent = `${
      currentCart.items.length === 0 ? 1 : currentCart.items.length
    }`;
    cartBubble.style.opacity = "1";

    // const getdata = async function () {
    //   const res = await fetch('/cart.js')
    //   const data = await res.json();

    // }
    //  getdata();
  }
}

customElements.define("product-form", ProductForm);
