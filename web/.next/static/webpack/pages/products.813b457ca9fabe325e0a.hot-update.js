"use strict";
self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./pages/products.js":
/*!***************************!*\
  !*** ./pages/products.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_user1_Documents_work_creative_creative_2021_2021_10_03_sanity_discovery_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_user1_Documents_work_creative_creative_2021_2021_10_03_sanity_discovery_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_user1_Documents_work_creative_creative_2021_2021_10_03_sanity_discovery_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_user1_Documents_work_creative_creative_2021_2021_10_03_sanity_discovery_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_user1_Documents_work_creative_creative_2021_2021_10_03_sanity_discovery_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanity/block-content-to-react */ "./node_modules/@sanity/block-content-to-react/lib/BlockContent.js");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sanity/image-url */ "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\user1\\Documents\\work\\creative\\creative-2021\\2021-10-03_sanity-discovery\\web\\pages\\products.js",
    _this = undefined,
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_user1_Documents_work_creative_creative_2021_2021_10_03_sanity_discovery_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// post.js






var builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_7___default()(_client__WEBPACK_IMPORTED_MODULE_4__.default);

function urlFor(source) {
  return builder.image(source);
}

var Products = function Products(props) {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
      children: "Products"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      style: {
        "display": "grid",
        "grid-template-columns": "repeat(1, 1fr)"
      },
      children: props.products.map(function (product) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
            children: product.shortName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
            src: urlFor(product.thumbnail).format("webp").width(200).url()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h3", {
            children: ["Driveaway from: ", product.driveawayPrice]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 11
          }, _this), product.featured && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("strong", {
            children: "GREAT VALUE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 33
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5___default()), _objectSpread({
              blocks: product.description
            }, _client__WEBPACK_IMPORTED_MODULE_4__.default.config()), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h3", {
            children: "Available colours:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("ul", {
            children: product.availableColours.map(function (colour) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
                children: colour.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 15
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }, _this)]
  }, void 0, true);
};

_s(Products, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = Products;

Products.getInitialProps = /*#__PURE__*/function () {
  var _ref = (0,C_Users_user1_Documents_work_creative_creative_2021_2021_10_03_sanity_discovery_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_user1_Documents_work_creative_creative_2021_2021_10_03_sanity_discovery_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(context) {
    var _context$query$slug, slug;

    return C_Users_user1_Documents_work_creative_creative_2021_2021_10_03_sanity_discovery_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // It's important to default the slug so that it doesn't return "undefined"
            _context$query$slug = context.query.slug, slug = _context$query$slug === void 0 ? "" : _context$query$slug;
            _context.next = 3;
            return _client__WEBPACK_IMPORTED_MODULE_4__.default.fetch("*[_type == \"product\"]{\n      ...,\n      \"availableColours\": availableColours[]->\n    }", {
              slug: slug
            });

          case 3:
            _context.t0 = _context.sent;
            return _context.abrupt("return", {
              products: _context.t0
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Products);

var _c;

$RefreshReg$(_c, "Products");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdHMuODEzYjQ1N2NhOWZhYmUzMjVlMGEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUksT0FBTyxHQUFHRCx3REFBZSxDQUFDRiw0Q0FBRCxDQUEvQjs7QUFFQSxTQUFTSSxNQUFULENBQWdCQyxNQUFoQixFQUF3QjtBQUN0QixTQUFPRixPQUFPLENBQUNHLEtBQVIsQ0FBY0QsTUFBZCxDQUFQO0FBQ0Q7O0FBRUQsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzFCLE1BQU1DLE1BQU0sR0FBR1Ysc0RBQVMsRUFBeEI7QUFFQSxzQkFBUTtBQUFBLDRCQUNOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRE0sZUFFTjtBQUFLLFdBQUssRUFBRTtBQUFDLG1CQUFXLE1BQVo7QUFBb0IsaUNBQXlCO0FBQTdDLE9BQVo7QUFBQSxnQkFDR1MsS0FBSyxDQUFDRSxRQUFOLENBQWVDLEdBQWYsQ0FBbUIsVUFBQ0MsT0FBRDtBQUFBLDRCQUNsQjtBQUFBLGtDQUNFO0FBQUEsc0JBQUtBLE9BQU8sQ0FBQ0M7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBSyxlQUFHLEVBQUVULE1BQU0sQ0FBQ1EsT0FBTyxDQUFDRSxTQUFULENBQU4sQ0FBMEJDLE1BQTFCLENBQWlDLE1BQWpDLEVBQXlDQyxLQUF6QyxDQUErQyxHQUEvQyxFQUFvREMsR0FBcEQ7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBQSwyQ0FBcUJMLE9BQU8sQ0FBQ00sY0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLEVBSUlOLE9BQU8sQ0FBQ08sUUFBUixpQkFBb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSnhCLGVBS0U7QUFBQSxtQ0FDRSw4REFBQyx1RUFBRDtBQUNFLG9CQUFNLEVBQUVQLE9BQU8sQ0FBQ1E7QUFEbEIsZUFFTXBCLG1EQUFBLEVBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsZUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRixlQVlFO0FBQUEsc0JBQ0dZLE9BQU8sQ0FBQ1UsZ0JBQVIsQ0FBeUJYLEdBQXpCLENBQTZCLFVBQUNZLE1BQUQ7QUFBQSxrQ0FDNUI7QUFBQSwwQkFBS0EsTUFBTSxDQUFDQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRDRCO0FBQUEsYUFBN0I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEa0I7QUFBQSxPQUFuQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGTTtBQUFBLGtCQUFSO0FBeUJELENBNUJEOztHQUFNakI7VUFDV1I7OztLQURYUTs7QUE4Qk5BLFFBQVEsQ0FBQ2tCLGVBQVQ7QUFBQSx1WEFBMkIsaUJBQWVDLE9BQWY7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN6QjtBQUR5QixrQ0FFSEEsT0FBTyxDQUFDQyxLQUZMLENBRWpCQyxJQUZpQixFQUVqQkEsSUFGaUIsb0NBRVYsRUFGVTtBQUFBO0FBQUEsbUJBS1A1QixrREFBQSxrR0FHWjtBQUFFNEIsY0FBQUEsSUFBSSxFQUFKQTtBQUFGLGFBSFksQ0FMTzs7QUFBQTtBQUFBO0FBQUE7QUFLdkJsQixjQUFBQSxRQUx1QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTNCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVlBLCtEQUFlSCxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBvc3QuanNcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uL2NsaWVudFwiO1xyXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gXCJAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3RcIjtcclxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tIFwiQHNhbml0eS9pbWFnZS11cmxcIjtcclxuXHJcbmNvbnN0IGJ1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KTtcclxuXHJcbmZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcclxuICByZXR1cm4gYnVpbGRlci5pbWFnZShzb3VyY2UpXHJcbn1cclxuXHJcbmNvbnN0IFByb2R1Y3RzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHJldHVybiAoPD5cclxuICAgIDxoMT5Qcm9kdWN0czwvaDE+XHJcbiAgICA8ZGl2IHN0eWxlPXt7XCJkaXNwbGF5XCI6IFwiZ3JpZFwiLCBcImdyaWQtdGVtcGxhdGUtY29sdW1uc1wiOiBcInJlcGVhdCgxLCAxZnIpXCJ9fT5cclxuICAgICAge3Byb3BzLnByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgyPntwcm9kdWN0LnNob3J0TmFtZX08L2gyPlxyXG4gICAgICAgICAgPGltZyBzcmM9e3VybEZvcihwcm9kdWN0LnRodW1ibmFpbCkuZm9ybWF0KFwid2VicFwiKS53aWR0aCgyMDApLnVybCgpfSAvPlxyXG4gICAgICAgICAgPGgzPkRyaXZlYXdheSBmcm9tOiB7cHJvZHVjdC5kcml2ZWF3YXlQcmljZX08L2gzPlxyXG4gICAgICAgICAgeyBwcm9kdWN0LmZlYXR1cmVkICYmIDxzdHJvbmc+R1JFQVQgVkFMVUU8L3N0cm9uZz4gfVxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEJsb2NrQ29udGVudFxyXG4gICAgICAgICAgICAgIGJsb2Nrcz17cHJvZHVjdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICB7Li4uY2xpZW50LmNvbmZpZygpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aDM+QXZhaWxhYmxlIGNvbG91cnM6PC9oMz5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge3Byb2R1Y3QuYXZhaWxhYmxlQ29sb3Vycy5tYXAoKGNvbG91cikgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaT57Y29sb3VyLm5hbWV9PC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgPC8+KTtcclxufTtcclxuXHJcblByb2R1Y3RzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKGNvbnRleHQpIHtcclxuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxyXG4gIGNvbnN0IHsgc2x1ZyA9IFwiXCIgfSA9IGNvbnRleHQucXVlcnk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9kdWN0czogYXdhaXQgY2xpZW50LmZldGNoKGAqW190eXBlID09IFwicHJvZHVjdFwiXXtcclxuICAgICAgLi4uLFxyXG4gICAgICBcImF2YWlsYWJsZUNvbG91cnNcIjogYXZhaWxhYmxlQ29sb3Vyc1tdLT5cclxuICAgIH1gLCB7IHNsdWcgfSlcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsImNsaWVudCIsIkJsb2NrQ29udGVudCIsImltYWdlVXJsQnVpbGRlciIsImJ1aWxkZXIiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSIsIlByb2R1Y3RzIiwicHJvcHMiLCJyb3V0ZXIiLCJwcm9kdWN0cyIsIm1hcCIsInByb2R1Y3QiLCJzaG9ydE5hbWUiLCJ0aHVtYm5haWwiLCJmb3JtYXQiLCJ3aWR0aCIsInVybCIsImRyaXZlYXdheVByaWNlIiwiZmVhdHVyZWQiLCJkZXNjcmlwdGlvbiIsImNvbmZpZyIsImF2YWlsYWJsZUNvbG91cnMiLCJjb2xvdXIiLCJuYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInF1ZXJ5Iiwic2x1ZyIsImZldGNoIl0sInNvdXJjZVJvb3QiOiIifQ==