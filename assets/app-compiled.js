function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var menu = document.querySelector('.header__content-hamburger');
var nav = document.querySelector('.header__content');
var header = document.querySelector('.header');
var overlay = document.querySelector('.header__overlay');
menu.addEventListener('click', function (e) {
  e.preventDefault();
  nav.classList.toggle('open');
  header.classList.toggle('open');
  overlay.classList.toggle('open');
});
var navHeight = nav.getBoundingClientRect().height;

var stickyNav = function stickyNav(entries) {
  var _entries = _slicedToArray(entries, 1),
      entry = _entries[0];

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
    setTimeout(function () {
      nav.classList.add('down');
    }, 500);
  } else {
    setTimeout(function () {
      nav.classList.remove('sticky');
    }, 500);
    nav.classList.remove('down');
  }
};

var observerHeader = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: '350px'
});
observerHeader.observe(header); // ************** Fade in Section Animations **************** //

var allSections = document.querySelectorAll('section');

var revealSection = function revealSection(entries, observer) {
  var _entries2 = _slicedToArray(entries, 1),
      entry = _entries2[0];

  entry.target.classList.remove('hide');
};

var sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: .15
});
allSections.forEach(function (section) {
  section.className === 'hide' ? section.classList.remove('hide') : section.classList.add('hide');
  sectionObserver.observe(section);
}); // ************** Create cart obj**************** //

var currentCart = {
  items: [],
  total_price: function total_price() {
    var itemPrices = [];
    this.items.forEach(function (item) {
      itemPrices.push(item.price * item.quantity);
    });
    var sum = itemPrices.reduce(add, 0);

    function add(accum, a) {
      return accum + a;
    }

    return sum;
  }
};

function creatCartObj(data) {
  if (currentCart.items.length === 0) {
    data.items.forEach(function (item) {
      currentCart.items.push(item);
    });
    return;
  }

  var newItem = data.items;
  var currentIds = [];

  if (currentCart.items.length >= 1) {
    currentCart.items.forEach(function (item, i) {
      currentIds.push(item.id);

      if (currentIds[i] === newItem[0].id) {
        item.quantity = newItem[0].quantity;
        return;
      }
    });
    var duplicateItem = false;
    currentIds.forEach(function (id) {
      if (id === newItem[0].id) {
        duplicateItem = true;
        return;
      }
    });

    if (duplicateItem !== true) {
      currentCart.items.push(newItem[0]);
    }
  }
} // ************** Open Cart Drawer **************** //


var cartIcon = document.querySelector('.header__content-cart');
var cartDrawer = document.querySelector('cart-drawer'); // ** Get amount of items in cart on load and apply to bubble ** //

function getCart(_x) {
  return _getCart.apply(this, arguments);
}

function _getCart() {
  _getCart = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(fn) {
    var res, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('/cart.js', {
              method: 'GET'
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
  return _getCart.apply(this, arguments);
}

var cartBubble = document.querySelector('.header__content-cart .cart-bubble');

function loadCartBubble(data) {
  if (data.items.length === 0) {
    cartBubble.style.opacity = '0';
  } else {
    cartBubble.textContent = "".concat(data.items.length);
  }
}

function loadData(data) {
  loadCartBubble(data);
  creatCartObj(data);
}

window.onload = getCart(loadData);

function debounce(fn, wait) {
  var _this = this;

  var t;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(t);
    t = setTimeout(function () {
      return fn.apply(_this, args);
    }, wait);
  };
}

var serializeForm = function serializeForm(form) {
  var obj = {};
  var formData = new FormData(form);

  var _iterator = _createForOfIteratorHelper(formData.keys()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      var regex = /(?:^(properties\[))(.*?)(?:\]$)/;

      if (regex.test(key)) {
        obj.properties = obj.properties || {};
        obj.properties[regex.exec(key)[2]] = formData.get(key);
      } else {
        obj[key] = formData.get(key);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return JSON.stringify(obj);
};

function fetchConfig() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'json';
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': "application/".concat(type)
    }
  };
}

if (typeof window.Shopify == 'undefined') {
  window.Shopify = {};
}

Shopify.bind = function (fn, scope) {
  return function () {
    return fn.apply(scope, arguments);
  };
};

Shopify.setSelectorByValue = function (selector, value) {
  for (var i = 0, count = selector.options.length; i < count; i++) {
    var option = selector.options[i];

    if (value == option.value || value == option.innerHTML) {
      selector.selectedIndex = i;
      return i;
    }
  }
};

Shopify.addListener = function (target, eventName, callback) {
  target.addEventListener ? target.addEventListener(eventName, callback, false) : target.attachEvent('on' + eventName, callback);
};

Shopify.postLink = function (path, options) {
  options = options || {};
  var method = options['method'] || 'post';
  var params = options['parameters'] || {};
  var form = document.createElement("form");
  form.setAttribute("method", method);
  form.setAttribute("action", path);

  for (var key in params) {
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", key);
    hiddenField.setAttribute("value", params[key]);
    form.appendChild(hiddenField);
  }

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
};

Shopify.CountryProvinceSelector = function (country_domid, province_domid, options) {
  this.countryEl = document.getElementById(country_domid);
  this.provinceEl = document.getElementById(province_domid);
  this.provinceContainer = document.getElementById(options['hideElement'] || province_domid);
  Shopify.addListener(this.countryEl, 'change', Shopify.bind(this.countryHandler, this));
  this.initCountry();
  this.initProvince();
};

Shopify.CountryProvinceSelector.prototype = {
  initCountry: function initCountry() {
    var value = this.countryEl.getAttribute('data-default');
    Shopify.setSelectorByValue(this.countryEl, value);
    this.countryHandler();
  },
  initProvince: function initProvince() {
    var value = this.provinceEl.getAttribute('data-default');

    if (value && this.provinceEl.options.length > 0) {
      Shopify.setSelectorByValue(this.provinceEl, value);
    }
  },
  countryHandler: function countryHandler(e) {
    var opt = this.countryEl.options[this.countryEl.selectedIndex];
    var raw = opt.getAttribute('data-provinces');
    var provinces = JSON.parse(raw);
    this.clearOptions(this.provinceEl);

    if (provinces && provinces.length == 0) {
      this.provinceContainer.style.display = 'none';
    } else {
      for (var i = 0; i < provinces.length; i++) {
        var opt = document.createElement('option');
        opt.value = provinces[i][0];
        opt.innerHTML = provinces[i][1];
        this.provinceEl.appendChild(opt);
      }

      this.provinceContainer.style.display = "";
    }
  },
  clearOptions: function clearOptions(selector) {
    while (selector.firstChild) {
      selector.removeChild(selector.firstChild);
    }
  },
  setOptions: function setOptions(selector, values) {
    for (var i = 0, count = values.length; i < values.length; i++) {
      var opt = document.createElement('option');
      opt.value = values[i];
      opt.innerHTML = values[i];
      selector.appendChild(opt);
    }
  }
};

var VariantRadios = /*#__PURE__*/function (_HTMLElement) {
  "use strict";

  _inherits(VariantRadios, _HTMLElement);

  var _super = _createSuper(VariantRadios);

  function VariantRadios() {
    var _this2;

    _classCallCheck(this, VariantRadios);

    _this2 = _super.call(this);

    _this2.addEventListener('change', _this2.onVariantChange);

    return _this2;
  }

  _createClass(VariantRadios, [{
    key: "onVariantChange",
    value: function onVariantChange() {
      this.updateOptions();
      this.updateMasterId();

      if (!this.currentVariant) {
        console.log('unavailable');
      } else {
        this.updateURL();
        this.renderProductInfo();
      }
    }
  }, {
    key: "updateOptions",
    value: function updateOptions() {
      var fieldsets = Array.from(this.querySelectorAll('fieldset'));
      this.options = fieldsets.map(function (fieldset) {
        return Array.from(fieldset.querySelectorAll('input')).find(function (radio) {
          return radio.checked;
        }).value;
      });
    }
  }, {
    key: "updateMasterId",
    value: function updateMasterId() {
      var _this3 = this;

      this.currentVariant = this.getVariantData().find(function (variant) {
        return !variant.options.map(function (option, index) {
          return _this3.options[index] === option;
        }).includes(false);
      });
    }
  }, {
    key: "getVariantData",
    value: function getVariantData() {
      this.variantData = this.variantData || JSON.parse(this.querySelector('[type="application/json"]').textContent);
      return this.variantData;
    }
  }, {
    key: "updateURL",
    value: function updateURL() {
      if (!this.currentVariant || this.dataset.updateUrl === 'false') return;
      window.history.replaceState({}, '', "".concat(this.dataset.url, "?variant=").concat(this.currentVariant.id));
    }
  }, {
    key: "renderProductInfo",
    value: function renderProductInfo() {
      var _this4 = this;

      fetch("".concat(this.dataset.url, "?variant=").concat(this.currentVariant.id, "&section_id=").concat(this.dataset.section)).then(function (response) {
        return response.text();
      }).then(function (responseText) {
        var id = "price-".concat(_this4.dataset.section);
        var html = new DOMParser().parseFromString(responseText, 'text/html');
        var destination = document.getElementById(id);
        var source = html.getElementById(id);

        if (source && destination) {
          destination.dataset.price = source.dataset.price;
          destination.children[0].textContent = source.children[0].textContent;
        }

        var total = '.selection-total .total';
        var savings = '.selection-total .savings';
        var origPrice = '.selection-total .orig-price';
        var destinationTotal = document.querySelector(total);
        var destinationSavings = document.querySelector(savings);
        var destinationOrigPrice = document.querySelector(origPrice);
        var sourceTotal = html.querySelector(total);
        var sourceSavings = html.querySelector(savings);
        var sourceOrigPrice = html.querySelector(origPrice);

        if (destinationTotal && sourceTotal) {
          destinationTotal.textContent = sourceTotal.textContent;
        }

        if (destinationSavings && sourceSavings) {
          destinationSavings.textContent = sourceSavings.textContent;
        }

        if (destinationOrigPrice && sourceOrigPrice) {
          destinationOrigPrice.textContent = sourceOrigPrice.textContent;
        }
      });
    }
  }]);

  return VariantRadios;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('variant-radios', VariantRadios); //Product Quanitiy Input Component//

var QuantityInput = /*#__PURE__*/function (_HTMLElement2) {
  "use strict";

  _inherits(QuantityInput, _HTMLElement2);

  var _super2 = _createSuper(QuantityInput);

  function QuantityInput() {
    var _this5;

    _classCallCheck(this, QuantityInput);

    _this5 = _super2.call(this);
    _this5.input = _this5.querySelector('input');
    _this5.changeEvent = new Event('change', {
      bubbles: true
    });

    _this5.querySelectorAll('button').forEach(function (button) {
      return button.addEventListener('click', _this5.onButtonClick.bind(_assertThisInitialized(_this5)));
    });

    return _this5;
  }

  _createClass(QuantityInput, [{
    key: "onButtonClick",
    value: function onButtonClick(event) {
      event.preventDefault();
      var previousValue = this.input.value;
      event.target.name === 'plus' ? this.input.stepUp(1) : this.input.stepDown(1);
      if (previousValue !== this.input.value) this.input.dispatchEvent(this.changeEvent);
    }
  }]);

  return QuantityInput;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('quantity-input', QuantityInput); // Product Slider Component

var currentImage = document.getElementById('mainImage');
var varImage = document.querySelectorAll('#varImage');
var productPath = 'products';

if (window.location.pathname.includes(productPath)) {
  varImage[0].classList.add('selected');
}

var arrowBtns = document.querySelectorAll('.product__content-imgs i'); // const selectedImg = document.querySelector('.product__content-imgs .selected')

arrowBtns.forEach(function (button) {
  button.addEventListener('click', changeImage);
});
varImage.forEach(function (image) {
  image.addEventListener('click', changeImage);
});

function getImageTitles() {
  var varImg = [];
  varImage.forEach(function (image, i) {
    varImg.push(image.getAttribute('src'));
  });
  return varImg;
}

getImageTitles();
clicks = 0;

function changeImage(e) {
  e.preventDefault();
  var selectedImg = document.querySelector('.product__content-imgs .selected');

  if (e.target.id === 'varImage') {
    e.target.classList.add('selected');
    clicks = e.target.dataset.image - 1;
  }

  if (e.target.classList.contains('fa-caret-left') && selectedImg.previousElementSibling.tagName === 'IMG') {
    selectedImg.previousElementSibling.classList.add('selected');
    clicks -= 1;
  }

  if (e.target.classList.contains('fa-caret-left') && selectedImg.previousElementSibling.tagName !== 'IMG') {
    varImage[varImage.length - 1].classList.add('selected');
    clicks = varImage.length - 1;
  }

  if (e.target.classList.contains('fa-caret-right') && selectedImg.nextElementSibling.tagName === 'IMG') {
    selectedImg.nextElementSibling.classList.add('selected');
    clicks += 1;
  }

  if (e.target.classList.contains('fa-caret-right') && selectedImg.nextElementSibling.tagName !== 'IMG') {
    varImage[0].classList.add('selected');
    clicks = 0;
  }

  selectedImg.classList.remove('selected');
  return changeImageUrl(clicks);
}

;

var changeImageUrl = function changeImageUrl() {
  var titles = getImageTitles();
  titles.forEach(function (title) {
    title[clicks].replace('100x100', '500x500');
  });
  currentImage.classList.toggle('fade-out');
  setTimeout(function () {
    currentImage.setAttribute('src', "".concat(titles[clicks].replace('100x100', 'medium')));
    currentImage.classList.toggle('fade-out');
  }, 300);
};