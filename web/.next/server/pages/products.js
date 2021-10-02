"use strict";
(() => {
var exports = {};
exports.id = "pages/products";
exports.ids = ["pages/products"];
exports.modules = {

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ "@sanity/client");
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);
// client.js

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
  projectId: "y1chmpo8",
  // you can find this in sanity.json
  dataset: "production",
  // or the name you chose in step 1
  useCdn: false // `false` if you want to ensure fresh data

}));

/***/ }),

/***/ "./pages/products.js":
/*!***************************!*\
  !*** ./pages/products.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/block-content-to-react */ "@sanity/block-content-to-react");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/image-url */ "@sanity/image-url");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\user1\\Documents\\work\\creative\\creative-2021\\2021-10-03_sanity-discovery\\web\\pages\\products.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// post.js






const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default()(_client__WEBPACK_IMPORTED_MODULE_1__.default);

function urlFor(source) {
  return builder.image(source);
}

const Products = props => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
      children: "Products"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      style: {
        "display": "grid",
        "grid-template-columns": "repeat(1, 1fr)"
      },
      children: props.products.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
          children: product.shortName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
          src: urlFor(product.thumbnail).format("webp").quality(80).width(400).url()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
          children: ["Driveaway from: ", product.driveawayPrice]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined), product.featured && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("strong", {
          children: "GREAT VALUE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 33
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread({
            blocks: product.description
          }, _client__WEBPACK_IMPORTED_MODULE_1__.default.config()), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
          children: "Available colours:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
          children: product.availableColours.map(colour => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: colour.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }, undefined)]
  }, void 0, true);
};

Products.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const {
    slug = ""
  } = context.query;
  return {
    products: await _client__WEBPACK_IMPORTED_MODULE_1__.default.fetch(`*[_type == "product"]{
      ...,
      "availableColours": availableColours[]->
    }`, {
      slug
    })
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Products);

/***/ }),

/***/ "@sanity/block-content-to-react":
/*!*************************************************!*\
  !*** external "@sanity/block-content-to-react" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@sanity/block-content-to-react");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/products.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWJwYWNrOi8vd2ViLy4vcGFnZXMvcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vd2ViL2V4dGVybmFsIFwiQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vd2ViL2V4dGVybmFsIFwiQHNhbml0eS9jbGllbnRcIiIsIndlYnBhY2s6Ly93ZWIvZXh0ZXJuYWwgXCJAc2FuaXR5L2ltYWdlLXVybFwiIiwid2VicGFjazovL3dlYi9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vd2ViL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY2xpZW50LmpzXHJcbmltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSBcIkBzYW5pdHkvY2xpZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzYW5pdHlDbGllbnQoe1xyXG4gIHByb2plY3RJZDogXCJ5MWNobXBvOFwiLCAvLyB5b3UgY2FuIGZpbmQgdGhpcyBpbiBzYW5pdHkuanNvblxyXG4gIGRhdGFzZXQ6IFwicHJvZHVjdGlvblwiLCAvLyBvciB0aGUgbmFtZSB5b3UgY2hvc2UgaW4gc3RlcCAxXHJcbiAgdXNlQ2RuOiBmYWxzZSAvLyBgZmFsc2VgIGlmIHlvdSB3YW50IHRvIGVuc3VyZSBmcmVzaCBkYXRhXHJcbn0pIiwiLy8gcG9zdC5qc1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vY2xpZW50XCI7XHJcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSBcIkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdFwiO1xyXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xyXG5cclxuY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihjbGllbnQpO1xyXG5cclxuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xyXG4gIHJldHVybiBidWlsZGVyLmltYWdlKHNvdXJjZSlcclxufVxyXG5cclxuY29uc3QgUHJvZHVjdHMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgcmV0dXJuICg8PlxyXG4gICAgPGgxPlByb2R1Y3RzPC9oMT5cclxuICAgIDxkaXYgc3R5bGU9e3tcImRpc3BsYXlcIjogXCJncmlkXCIsIFwiZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zXCI6IFwicmVwZWF0KDEsIDFmcilcIn19PlxyXG4gICAgICB7cHJvcHMucHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDI+e3Byb2R1Y3Quc2hvcnROYW1lfTwvaDI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17dXJsRm9yKHByb2R1Y3QudGh1bWJuYWlsKS5mb3JtYXQoXCJ3ZWJwXCIpLnF1YWxpdHkoODApLndpZHRoKDQwMCkudXJsKCl9IC8+XHJcbiAgICAgICAgICA8aDM+RHJpdmVhd2F5IGZyb206IHtwcm9kdWN0LmRyaXZlYXdheVByaWNlfTwvaDM+XHJcbiAgICAgICAgICB7IHByb2R1Y3QuZmVhdHVyZWQgJiYgPHN0cm9uZz5HUkVBVCBWQUxVRTwvc3Ryb25nPiB9XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8QmxvY2tDb250ZW50XHJcbiAgICAgICAgICAgICAgYmxvY2tzPXtwcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIHsuLi5jbGllbnQuY29uZmlnKCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMz5BdmFpbGFibGUgY29sb3Vyczo8L2gzPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7cHJvZHVjdC5hdmFpbGFibGVDb2xvdXJzLm1hcCgoY29sb3VyKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpPntjb2xvdXIubmFtZX08L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICA8Lz4pO1xyXG59O1xyXG5cclxuUHJvZHVjdHMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oY29udGV4dCkge1xyXG4gIC8vIEl0J3MgaW1wb3J0YW50IHRvIGRlZmF1bHQgdGhlIHNsdWcgc28gdGhhdCBpdCBkb2Vzbid0IHJldHVybiBcInVuZGVmaW5lZFwiXHJcbiAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY29udGV4dC5xdWVyeTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb2R1Y3RzOiBhd2FpdCBjbGllbnQuZmV0Y2goYCpbX3R5cGUgPT0gXCJwcm9kdWN0XCJde1xyXG4gICAgICAuLi4sXHJcbiAgICAgIFwiYXZhaWxhYmxlQ29sb3Vyc1wiOiBhdmFpbGFibGVDb2xvdXJzW10tPlxyXG4gICAgfWAsIHsgc2x1ZyB9KVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0czsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNhbml0eS9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNhbml0eS9pbWFnZS11cmxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJwcm9qZWN0SWQiLCJkYXRhc2V0IiwidXNlQ2RuIiwidXNlUm91dGVyIiwiY2xpZW50IiwiQmxvY2tDb250ZW50IiwiaW1hZ2VVcmxCdWlsZGVyIiwiYnVpbGRlciIsInVybEZvciIsInNvdXJjZSIsImltYWdlIiwiUHJvZHVjdHMiLCJwcm9wcyIsInJvdXRlciIsInByb2R1Y3RzIiwibWFwIiwicHJvZHVjdCIsInNob3J0TmFtZSIsInRodW1ibmFpbCIsImZvcm1hdCIsInF1YWxpdHkiLCJ3aWR0aCIsInVybCIsImRyaXZlYXdheVByaWNlIiwiZmVhdHVyZWQiLCJkZXNjcmlwdGlvbiIsImNvbmZpZyIsImF2YWlsYWJsZUNvbG91cnMiLCJjb2xvdXIiLCJuYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInNsdWciLCJxdWVyeSIsImZldGNoIl0sInNvdXJjZVJvb3QiOiIifQ==