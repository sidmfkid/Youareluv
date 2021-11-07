function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CartDrawer = /*#__PURE__*/function (_HTMLElement) {
  "use strict";

  _inherits(CartDrawer, _HTMLElement);

  var _super = _createSuper(CartDrawer);

  function CartDrawer() {
    var _this;

    _classCallCheck(this, CartDrawer);

    _this = _super.call(this);

    _this.attachShadow({
      mode: 'open'
    });

    var wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'cart__content');
    var headingContainer = wrapper.appendChild(document.createElement('div'));
    headingContainer.setAttribute('class', 'cart__headings');
    var cartHeading = headingContainer.appendChild(document.createElement('span'));
    var cartItemsContainer = wrapper.appendChild(document.createElement('div'));
    cartItemsContainer.setAttribute('class', 'cart__items');
    cartItemsContainer.setAttribute('id', 'cartItems');
    _this.loader = cartItemsContainer.appendChild(document.createElement('div'));
    var style = document.createElement('style');
    style.textContent = "\n        @import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\");\n        input[type=\"number\"] {\n            -webkit-appearance: textfield;\n            -moz-appearance: textfield;\n            appearance: textfield;\n        }\n        input[type=\"number\"]::-webkit-inner-spin-button,\n        input[type=\"number\"]::-webkit-outer-spin-button {\n            -webkit-appearance: none;\n        }\n        .load-icon {\n          position: absolute;\n          top:0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          overflow: hidden;\n        }\n\n        .load-icon.done {\n          display: none;\n        }\n        .load-icon svg {\n          width: 100px;\n          height: 100px;\n        }\n        .load-icon svg circle {\n          fill: var(--primary-20);\n        }\n        .cart__content {\n            padding: 10rem 5rem 5rem 5rem;\n            display: flex;\n            flex-wrap: wrap;\n        }\n        .cart__content .cart__headings {\n            display: flex;\n            justify-content: space-evenly;\n            font-size: var(--medium);\n            flex-basis: 100%;\n            margin-bottom: 5rem;\n        }\n        .cart__content .cart__items {\n            flex-basis: 100%;\n            flex-wrap: wrap;\n            overflow-x: hidden;\n        }\n        .cart__content .cart__items .line__item {\n            margin-top: 3rem;\n            position: relative;\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n        }\n        .cart__content .cart__items .line__item-details {\n            display: flex;\n            justify-content: space-evenly;\n            align-items: center;\n            flex-wrap: wrap;\n            flex-basis: 100%;\n            font-size: var(--regular);\n            text-align: center;\n            padding: 0.5rem;\n        }\n        .cart__content .cart__items .line__item-details span {\n            width: 100%;\n        }\n        .cart__content .cart__items .line__item-details span span {\n            display: block;\n        }\n        .cart__content .cart__items .line__item-details .quantity-input-drawer {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            width: min-content;\n            margin: 2rem 0 2rem 0;\n            border: 2px solid var(--primary-50);\n            border-radius: 3rem;\n            background-color: var(--primary-90);\n        }\n        .cart__content .cart__items .line__item-details .quantity-input-drawer button {\n            position: relative;\n            z-index: 5;\n            width: auto;\n            height: auto;\n            padding: 1rem 2rem;\n            cursor: pointer;\n            background: none;\n            border: none;\n        }\n        .cart__content\n            .cart__items\n            .line__item-details\n            .quantity-input-drawer\n            button:hover\n            i,\n            .cart__content\n            .cart__items\n            .line__item-details\n            .quantity-input-drawer\n            button:active\n            i {\n            transform: scale(1.05);\n            color: var(--primary-60);\n        }\n        .cart__content .cart__items .line__item-details .quantity-input-drawer button i {\n            position: relative;\n            z-index: -1;\n            font-size: 4rem;\n            color: var(--primary-50);\n            cursor: pointer;\n            transform: scale(1);\n            transition: all 0.3s ease-in-out;\n        }\n        .cart__content .cart__items .line__item-details .quantity-input-drawer input {\n            text-align: center;\n            background-color: var(--primary-90);\n            border-left: 2px solid var(--primary-50);\n            border-right: 2px solid var(--primary-50);\n            border-top: none;\n            border-bottom: none;\n            width: max-content;\n            font-size: var(--small);\n            color: var(--primary-30);\n        }\n        .cart__content .cart__items .line__item .delete__icon {\n            cursor: pointer;\n            display: block;\n            position: absolute;\n            width: 3rem;\n            height: 3rem;\n            border: none;\n            background: none;\n            top: 0;\n            right: 0;\n        }\n        .cart__content .cart__items .line__item .delete__icon::after, .cart__content .cart__items .line__item .delete__icon::before {\n            display: block;\n            position: absolute;\n            top: 0;\n            right: 0;\n            content: \"\";\n            background-color: var(--primary-50);\n            width: 3rem;\n            height: 0.5rem;\n            border-radius: 10rem;\n        }\n        .cart__content .cart__items .line__item .delete__icon::before {\n            transform: rotate(45deg);\n        }\n        .cart__content .cart__items .line__item .delete__icon::after {\n            transform: rotate(-45deg);\n        }\n        .checkout {\n            position: relative;\n            bottom: 0;\n            border: none;\n            width: 40%;\n\n        }\n\n        .total {\n          font-size: var(--regular);\n          font-weight: 600;\n          color: var(--primary-30);\n          width: 100%;\n          text-align: center;\n          padding-top: .5rem;\n        }\n         .checkout-wrapper {\n           display: flex;\n           flex-wrap: wrap-reverse;\n           justify-content: space-evenly;\n           align-items: center;\n          z-index: 10;\n          position: sticky;\n          background: white;\n          box-shadow: 0 -6px 25px hsla(35, 88.2%, 10%, .6);\n          top: 100%;\n          border: none;\n          width: 100%;\n          height: 10rem;\n        }\n\n        .btn {\n          padding: 1rem 4rem;\n          text-align: center;\n          font-size: var(--small);\n          font-weight: 600;\n        }\n        .btn.btn-primary {\n          transform: scale(1);\n          transition: all 0.3s ease-in-out;\n          background-color: var(--primary-50);\n          color: var(--primary-98);\n          border-radius: 1rem;\n        }\n        .btn.btn-primary:active, .btn.btn-primary:hover {\n          transform: scale(1.05);\n          color: var(--secondary-30);\n          background-color: var(--primary-50);\n          border-radius: 1.3rem;\n        }\n        .quantity-input-drawer {\n          width: 70%;\n        }\n\n\n\n\n        ";
    var fontAwesome = document.createElement('link');
    fontAwesome.setAttribute('ref', 'stylesheet');
    fontAwesome.setAttribute('href', '/assets/font-awesome.min.css');
    fontAwesome.setAttribute('type', 'text/css');
    fontAwesome.setAttribute('media', 'all');

    _this.shadowRoot.appendChild(fontAwesome);

    _this.shadowRoot.append(style, wrapper);

    var cartIcon = document.querySelector('.header__content-cart');
    cartIcon.addEventListener('click', _this.onEventHandler.bind(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(CartDrawer, [{
    key: "onEventHandler",
    value: function onEventHandler() {
      this.openDrawer(this);
      this.loadData(this.setCartHeading, this);
      this.loadData(this.getCartItems, this, this.changeCart.bind(this));
    }
  }, {
    key: "openDrawer",
    value: function openDrawer() {
      var cartDrawer = this;

      if (cartDrawer.dataset.state === 'open') {
        cartDrawer.setAttribute('data-state', 'closed');
      } else {
        cartDrawer.setAttribute('data-state', 'open');
      }
    }
  }, {
    key: "loadAnimation",
    value: function loadAnimation(el) {
      el.setAttribute('class', 'load-icon');
      el.innerHTML = "\n      <svg enable-background=\"new 0 0 0 0\" id=\"L4\" version=\"1.1\" viewbox=\"0 0 100 100\" x=\"0px\" xml:space=\"preserve\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" y=\"0px\">\n      <circle cx=\"6\" cy=\"50\" fill=\"#fff\" r=\"6\" stroke=\"none\">\n          <animate attributename=\"opacity\" begin=\"0.1\" dur=\"1s\" repeatcount=\"indefinite\" values=\"0;1;0\"/>\n      </circle>\n      <circle cx=\"26\" cy=\"50\" fill=\"#fff\" r=\"6\" stroke=\"none\">\n          <animate attributename=\"opacity\" begin=\"0.2\" dur=\"1s\" repeatcount=\"indefinite\" values=\"0;1;0\"/>\n      </circle>\n      <circle cx=\"46\" cy=\"50\" fill=\"#fff\" r=\"6\" stroke=\"none\">\n          <animate attributename=\"opacity\" begin=\"0.3\" dur=\"1s\" repeatcount=\"indefinite\" values=\"0;1;0\"/>\n      </circle>\n  </svg>\n      ";
    }
  }, {
    key: "removeAnimation",
    value: function removeAnimation(el) {
      el.innerHTML = "";
      el.setAttribute('class', 'done');
    }
  }, {
    key: "loadData",
    value: function loadData(fn, el, fns) {
      var data = currentCart;
      fn(data, el, fns);
    }
  }, {
    key: "setCartHeading",
    value: function setCartHeading(cart, elem) {
      var shadow = elem.shadowRoot;
      var parElem = shadow.querySelector('.cart__headings > span');

      if (cart.items.length === 0) {
        parElem.textContent = 'No Items In Your Cart';
        return;
      }

      if (cart.items.length >= 2) {
        shadow.querySelector('.cart__headings > span').textContent = "You Have ".concat(cart.items.length, " items in your cart");
        return;
      }

      if (cart.items.length <= 1) {
        shadow.querySelector('.cart__headings > span').textContent = "You Have ".concat(cart.items.length, " item in your cart");
        return;
      }
    }
  }, {
    key: "getCartItems",
    value: function getCartItems(cart, elem, fn) {
      var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });
      var body = document.querySelector('body');
      var bodyWidth = body.clientWidth;
      var shadow = elem.shadowRoot;
      console.log(cart.items);
      console.log(elem.dataset.state);

      if (cart.items.length >= 1 && elem.dataset.state === 'open') {
        var checkoutButtonWrapper = shadow.appendChild(document.createElement('form'));
        checkoutButtonWrapper.setAttribute('class', 'checkout-wrapper');
        var checkoutButton = checkoutButtonWrapper.appendChild(document.createElement('input'));
        checkoutButton.setAttribute('class', 'btn btn-primary checkout');
        checkoutButton.setAttribute('type', 'submit');
        checkoutButton.setAttribute('name', 'checkout');
        checkoutButton.setAttribute('value', 'Checkout');
        checkoutButtonWrapper.setAttribute('method', 'post');
        checkoutButtonWrapper.setAttribute('action', "".concat(window.routes.cart_url));
        checkoutButton.textContent = 'Checkout';
        var cartTotal = checkoutButtonWrapper.appendChild(document.createElement('span'));
        cartTotal.textContent = 'Your Total: ' + "".concat(formatter.format(cart.total_price() * .01));
        cartTotal.setAttribute('class', 'total');
        cart.items.forEach(function (item, i) {
          var lineItem = shadow.querySelector('.cart__items').appendChild(document.createElement('div'));
          lineItem.setAttribute('class', 'line__item');
          lineItem.setAttribute('data-varID', "".concat(item.id));
          lineItem.setAttribute('data-quantity', "".concat(item.quantity));
          lineItem.setAttribute('data-line', "".concat(i + 1));
          var deleteItemButton = lineItem.appendChild(document.createElement('button'));
          deleteItemButton.setAttribute('class', 'delete__icon');
          deleteItemButton.setAttribute('name', 'deleteItem');
          deleteItemButton.setAttribute('type', 'button');
          var itemImage = lineItem.appendChild(document.createElement('img'));
          itemImage.setAttribute('class', 'line__item-img');
          itemImage.setAttribute('height', '300');
          itemImage.setAttribute('width', '300');
          itemImage.setAttribute('src', "".concat(item.image));
          var lineItemDetails = lineItem.appendChild(document.createElement('div'));
          lineItemDetails.setAttribute('class', 'line__item-details');
          var itemHeading = lineItemDetails.appendChild(document.createElement('span'));
          itemHeading.setAttribute('class', 'item__title');
          itemHeading.textContent = "".concat(item.title);
          var itemPrice = lineItemDetails.appendChild(document.createElement('span'));
          itemPrice.setAttribute('class', 'item__price');
          itemPrice.textContent = "".concat(formatter.format(item.price * .01));
          var lineItemQuantity = lineItemDetails.appendChild(document.createElement('div'));
          lineItemQuantity.setAttribute('class', 'quantity-input-drawer');
          var addToCart = lineItemQuantity.appendChild(document.createElement('button'));
          addToCart.setAttribute('class', 'plus');
          addToCart.setAttribute('name', 'plus');
          addToCart.setAttribute('type', 'button');
          var addToCartIcon = addToCart.appendChild(document.createElement('i'));
          addToCartIcon.setAttribute('class', 'fa fa-plus-circle');
          var itemQuantity = lineItemQuantity.appendChild(document.createElement('input'));
          itemQuantity.setAttribute('value', "".concat(item.quantity));
          itemQuantity.setAttribute('id', 'quantityInput');
          itemQuantity.setAttribute('type', 'number');
          itemQuantity.setAttribute('min', '0');
          var removeFromCart = lineItemQuantity.appendChild(document.createElement('button'));
          removeFromCart.setAttribute('class', 'minus');
          removeFromCart.setAttribute('name', 'minus');
          removeFromCart.setAttribute('type', 'button');
          var removeFromCartIcon = removeFromCart.appendChild(document.createElement('i'));
          removeFromCartIcon.setAttribute('class', 'fa fa-minus-circle');
          var buttons = lineItem.querySelectorAll('button');
          var changeItem = fn.bind(shadow);
          buttons.forEach(function (button) {
            button.addEventListener('click', changeItem);
          }); // if (elem.dataset.state !== 'open') {
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
        return;
      }

      if (elem.dataset.state === 'closed' && cart.items.length > 0) {
        var cartItemsWrapper = shadow.querySelector('.cart__items');
        var child = shadow.querySelectorAll('.line__item');
        child.forEach(function (child) {
          child.remove();
        });

        var _checkoutButtonWrapper = shadow.querySelectorAll('.checkout-wrapper');

        _checkoutButtonWrapper.forEach(function (btn) {
          btn.remove();
        });

        return;
      }

      var cartDrawer = document.querySelector('cart-drawer');
      var cartIcon = document.querySelector('.header__content-cart');
      var hamburgerIcon = document.querySelector('.header__content-hamburger');
      var cartContent = shadow.querySelector('.cart__content');
      var cartHeading = shadow.querySelector('.cart__headings > span');
      var lineItem = shadow.querySelectorAll('.line__item'); // console.log(lineItem)

      if (bodyWidth <= 900 && cartDrawer.dataset.state === 'open') {
        lineItem.forEach(function (child) {
          console.log(child.children[2].children[2].children[1]);
          child.children[1].style.width = '150px';
          child.children[1].style.height = '150px';
          child.children[0].style.top = '6rem';
          child.children[2].style.fontSize = 'var(--small)';
          child.children[2].style.fontSize = 'var(--small)';
          child.children[2].style.width = 'min-content';
          child.children[2].children[2].style.width = 'auto';
          child.children[2].children[2].style.padding = '.5rem 1rem';
          child.children[2].children[2].children[1].style.width = 'calc(2rem + 5vw)';
          child.children[2].children[2].children[1].style.padding = '0';
          child.children[2].children[2].children[1].style.lineHeight = 'auto';
          child.children[2].children[2].children[0].firstChild.style.fontSize = 'calc(2rem + 1vw)';
          child.children[2].children[2].children[0].style.padding = '0 3px 0 0';
          child.children[2].children[2].children[2].firstChild.style.fontSize = 'calc(2rem + 1vw)';
          child.children[2].children[2].children[2].style.padding = '0 0 0 3px';
        });
        cartHeading.style.fontSize = 'var(--regular)';
        cartDrawer.style.border = 'none';
        cartContent.style.padding = '7rem 2rem 2rem 3rem';
        cartIcon.style.top = '5%';
        hamburgerIcon.style.top = '13%';
      }

      if (bodyWidth < 900 && cartDrawer.dataset.state !== 'open') {
        cartIcon.style.top = '26%';
        hamburgerIcon.style.top = '15%';
      } else {
        cartIcon.style.top = '26%';
        hamburgerIcon.style.top = '15%';
      }

      if (bodyWidth > 900) {
        cartIcon.style.top = '0%';
      }
    }
  }, {
    key: "changeCart",
    value: function changeCart(e) {
      var itemsInCart = currentCart;
      e.preventDefault();
      var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });
      var newQuantity = this.shadowRoot.querySelectorAll('input');
      var newItemsHeading = this.shadowRoot.querySelector('.cart__headings > span');
      var formData = {};
      var lineItems = this.shadowRoot.querySelectorAll('.line__item');
      var newTotal = this.shadowRoot.querySelector('.total');
      var cartBubble = document.querySelector('.cart-bubble');

      var updateTotal = function updateTotal(data) {
        itemsInCart.items = [];
        itemsInCart.items = data.items;
        console.log(data);

        if (formatter.format(data.total_price * .01) === NaN && data.items.length === 0) {
          newTotal.textContent = 'Your Total: $0';
          newItemsHeading.textContent = 'You Have No Items In Your Cart';
          return;
        } else {
          newTotal.textContent = 'Your Total: ' + "".concat(formatter.format(data.total_price * .01));
        }

        cartBubble.textContent = "".concat(data.items.length);
        data.items.length > 1 ? newItemsHeading.textContent = "You Have ".concat(data.items.length, " Items In Your Cart") : newItemsHeading.textContent = "You Have ".concat(data.items.length, " Item In Your Cart");
      };

      var postData = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(form, fn) {
          var res, data;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return fetch('/cart/change.js', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(form)
                  });

                case 2:
                  res = _context.sent;
                  _context.next = 5;
                  return res.json();

                case 5:
                  data = _context.sent;
                  fn(data);

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function postData(_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }();

      this.loadAnimation(this.loader);

      switch (e.target.className) {
        case 'minus':
          if (e.target) {
            e.target.previousSibling.stepDown(1);
            formData = {
              'id': e.target.offsetParent.dataset.varID,
              'line': Number(e.target.offsetParent.dataset.line),
              'quantity': Number(e.target.previousSibling.value)
            };

            if (Number(e.target.previousSibling.value) === 0) {
              e.target.offsetParent.remove();
            }
          } else {
            e.originalTarget.previousSibling.stepDown(1);
            formData = {
              'id': e.originalTarget.offsetParent.dataset.varID,
              'line': Number(e.originalTarget.offsetParent.dataset.line),
              'quantity': Number(e.originalTarget.previousSibling.value)
            };

            if (Number(e.originalTarget.previousSibling.value) === 0) {
              e.originalTarget.offsetParent.remove();
            }
          }

          postData(formData, updateTotal); // console.log(Number(newQuantity.value))

          break;

        case 'plus':
          if (e.target) {
            e.target.nextSibling.stepUp(1);
            formData = {
              'id': Number(e.target.offsetParent.dataset.varID),
              'line': Number(e.target.offsetParent.dataset.line),
              'quantity': e.target.nextSibling.value
            };
          } else {
            e.originalTarget.nextSibling.stepUp(1);
            formData = {
              'id': Number(e.originalTarget.offsetParent.dataset.varID),
              'line': Number(e.originalTarget.offsetParent.dataset.line),
              'quantity': e.originalTarget.nextSibling.value
            };
          }

          postData(formData, updateTotal);
          break;

        case 'delete__icon':
          if (e.target) {
            formData = {
              'id': Number(e.target.offsetParent.dataset.varID),
              'line': Number(e.target.offsetParent.dataset.line),
              'quantity': 0
            };
            postData(formData, updateTotal);
            e.target.offsetParent.remove();
          } else {
            lineItems = this.querySelectorAll('.line__item');
            formData = {
              'id': Number(e.originalTarget.offsetParent.dataset.varID),
              'line': Number(e.originalTarget.offsetParent.dataset.line),
              'quantity': 0
            };
            postData(formData, updateTotal);
            e.originalTarget.offsetParent.remove();
          }

          break;

        default:
          break;
      }

      this.removeAnimation(this.loader);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {}
  }]);

  return CartDrawer;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('cart-drawer', CartDrawer);