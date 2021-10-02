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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\user1\\Documents\\work\\creative\\creative-2021\\2021-10-03_sanity-discovery\\web\\pages\\products.js",
    _this = undefined,
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_user1_Documents_work_creative_creative_2021_2021_10_03_sanity_discovery_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// post.js






var Products = function Products(props) {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
      children: "Products"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
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
            lineNumber: 14,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h3", {
            children: ["Driveaway from: ", product.driveawayPrice]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 11
          }, _this), product.featured && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("strong", {
            children: "GREAT VALUE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 33
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5___default()), _objectSpread({
              blocks: product.description
            }, _client__WEBPACK_IMPORTED_MODULE_4__.default.config()), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h3", {
            children: "Available colours:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("ul", {
            children: product.availableColours.map(function (colour) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
                children: colour.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 15
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
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
            return _client__WEBPACK_IMPORTED_MODULE_4__.default.fetch("*[_type == \"product\"]{\n      \"availableColours\": availableColours[]->,\n      ...,\n    }", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdHMuMTJmM2YzOWYxOTU5ZjdiZDFmNjEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzFCLE1BQU1DLE1BQU0sR0FBR0wsc0RBQVMsRUFBeEI7QUFFQSxzQkFBUTtBQUFBLDRCQUNOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRE0sZUFFTjtBQUFLLFdBQUssRUFBRTtBQUFDLG1CQUFXLE1BQVo7QUFBb0IsaUNBQXlCO0FBQTdDLE9BQVo7QUFBQSxnQkFDR0ksS0FBSyxDQUFDRSxRQUFOLENBQWVDLEdBQWYsQ0FBbUIsVUFBQ0MsT0FBRDtBQUFBLDRCQUNsQjtBQUFBLGtDQUNFO0FBQUEsc0JBQUtBLE9BQU8sQ0FBQ0M7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSwyQ0FBcUJELE9BQU8sQ0FBQ0UsY0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLEVBR0lGLE9BQU8sQ0FBQ0csUUFBUixpQkFBb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSHhCLGVBSUU7QUFBQSxtQ0FDRSw4REFBQyx1RUFBRDtBQUNFLG9CQUFNLEVBQUVILE9BQU8sQ0FBQ0k7QUFEbEIsZUFFTVgsbURBQUEsRUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixlQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZGLGVBV0U7QUFBQSxzQkFDR08sT0FBTyxDQUFDTSxnQkFBUixDQUF5QlAsR0FBekIsQ0FBNkIsVUFBQ1EsTUFBRDtBQUFBLGtDQUM1QjtBQUFBLDBCQUFLQSxNQUFNLENBQUNDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFENEI7QUFBQSxhQUE3QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURrQjtBQUFBLE9BQW5CO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZNO0FBQUEsa0JBQVI7QUF3QkQsQ0EzQkQ7O0dBQU1iO1VBQ1dIOzs7S0FEWEc7O0FBNkJOQSxRQUFRLENBQUNjLGVBQVQ7QUFBQSx1WEFBMkIsaUJBQWVDLE9BQWY7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN6QjtBQUR5QixrQ0FFSEEsT0FBTyxDQUFDQyxLQUZMLENBRWpCQyxJQUZpQixFQUVqQkEsSUFGaUIsb0NBRVYsRUFGVTtBQUFBO0FBQUEsbUJBS1BuQixrREFBQSxtR0FHWjtBQUFFbUIsY0FBQUEsSUFBSSxFQUFKQTtBQUFGLGFBSFksQ0FMTzs7QUFBQTtBQUFBO0FBQUE7QUFLdkJkLGNBQUFBLFFBTHVCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBM0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBWUEsK0RBQWVILFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcG9zdC5qc1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vY2xpZW50XCI7XHJcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSBcIkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdFwiO1xyXG5cclxuY29uc3QgUHJvZHVjdHMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgcmV0dXJuICg8PlxyXG4gICAgPGgxPlByb2R1Y3RzPC9oMT5cclxuICAgIDxkaXYgc3R5bGU9e3tcImRpc3BsYXlcIjogXCJncmlkXCIsIFwiZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zXCI6IFwicmVwZWF0KDEsIDFmcilcIn19PlxyXG4gICAgICB7cHJvcHMucHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDI+e3Byb2R1Y3Quc2hvcnROYW1lfTwvaDI+XHJcbiAgICAgICAgICA8aDM+RHJpdmVhd2F5IGZyb206IHtwcm9kdWN0LmRyaXZlYXdheVByaWNlfTwvaDM+XHJcbiAgICAgICAgICB7IHByb2R1Y3QuZmVhdHVyZWQgJiYgPHN0cm9uZz5HUkVBVCBWQUxVRTwvc3Ryb25nPiB9XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8QmxvY2tDb250ZW50XHJcbiAgICAgICAgICAgICAgYmxvY2tzPXtwcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIHsuLi5jbGllbnQuY29uZmlnKCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMz5BdmFpbGFibGUgY29sb3Vyczo8L2gzPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7cHJvZHVjdC5hdmFpbGFibGVDb2xvdXJzLm1hcCgoY29sb3VyKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpPntjb2xvdXIubmFtZX08L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICA8Lz4pO1xyXG59O1xyXG5cclxuUHJvZHVjdHMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oY29udGV4dCkge1xyXG4gIC8vIEl0J3MgaW1wb3J0YW50IHRvIGRlZmF1bHQgdGhlIHNsdWcgc28gdGhhdCBpdCBkb2Vzbid0IHJldHVybiBcInVuZGVmaW5lZFwiXHJcbiAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY29udGV4dC5xdWVyeTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb2R1Y3RzOiBhd2FpdCBjbGllbnQuZmV0Y2goYCpbX3R5cGUgPT0gXCJwcm9kdWN0XCJde1xyXG4gICAgICBcImF2YWlsYWJsZUNvbG91cnNcIjogYXZhaWxhYmxlQ29sb3Vyc1tdLT4sXHJcbiAgICAgIC4uLixcclxuICAgIH1gLCB7IHNsdWcgfSlcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsImNsaWVudCIsIkJsb2NrQ29udGVudCIsIlByb2R1Y3RzIiwicHJvcHMiLCJyb3V0ZXIiLCJwcm9kdWN0cyIsIm1hcCIsInByb2R1Y3QiLCJzaG9ydE5hbWUiLCJkcml2ZWF3YXlQcmljZSIsImZlYXR1cmVkIiwiZGVzY3JpcHRpb24iLCJjb25maWciLCJhdmFpbGFibGVDb2xvdXJzIiwiY29sb3VyIiwibmFtZSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJxdWVyeSIsInNsdWciLCJmZXRjaCJdLCJzb3VyY2VSb290IjoiIn0=