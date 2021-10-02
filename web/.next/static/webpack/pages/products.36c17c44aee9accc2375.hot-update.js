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

var Products = function Products(props) {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
      children: "Products"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
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
            lineNumber: 17,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h3", {
            children: ["Driveaway from: ", product.driveawayPrice]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 11
          }, _this), product.featured && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("strong", {
            children: "GREAT VALUE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 33
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5___default()), _objectSpread({
              blocks: product.description
            }, _client__WEBPACK_IMPORTED_MODULE_4__.default.config()), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h3", {
            children: "Available colours:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("ul", {
            children: product.availableColours.map(function (colour) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
                children: colour.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 15
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
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
            return _client__WEBPACK_IMPORTED_MODULE_4__.default.fetch("*[_type == \"product\"]{\n      ...,\n      \"thumbnail\": thumbnail->,\n      \"availableColours\": availableColours[]->\n    }", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdHMuMzZjMTdjNDRhZWU5YWNjYzIzNzUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUksT0FBTyxHQUFHRCx3REFBZSxDQUFDRiw0Q0FBRCxDQUEvQjs7QUFFQSxJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDMUIsTUFBTUMsTUFBTSxHQUFHUCxzREFBUyxFQUF4QjtBQUVBLHNCQUFRO0FBQUEsNEJBQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFETSxlQUVOO0FBQUssV0FBSyxFQUFFO0FBQUMsbUJBQVcsTUFBWjtBQUFvQixpQ0FBeUI7QUFBN0MsT0FBWjtBQUFBLGdCQUNHTSxLQUFLLENBQUNFLFFBQU4sQ0FBZUMsR0FBZixDQUFtQixVQUFDQyxPQUFEO0FBQUEsNEJBQ2xCO0FBQUEsa0NBQ0U7QUFBQSxzQkFBS0EsT0FBTyxDQUFDQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBLDJDQUFxQkQsT0FBTyxDQUFDRSxjQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsRUFHSUYsT0FBTyxDQUFDRyxRQUFSLGlCQUFvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIeEIsZUFJRTtBQUFBLG1DQUNFLDhEQUFDLHVFQUFEO0FBQ0Usb0JBQU0sRUFBRUgsT0FBTyxDQUFDSTtBQURsQixlQUVNYixtREFBQSxFQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkYsZUFXRTtBQUFBLHNCQUNHUyxPQUFPLENBQUNNLGdCQUFSLENBQXlCUCxHQUF6QixDQUE2QixVQUFDUSxNQUFEO0FBQUEsa0NBQzVCO0FBQUEsMEJBQUtBLE1BQU0sQ0FBQ0M7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUQ0QjtBQUFBLGFBQTdCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGtCO0FBQUEsT0FBbkI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRk07QUFBQSxrQkFBUjtBQXdCRCxDQTNCRDs7R0FBTWI7VUFDV0w7OztLQURYSzs7QUE2Qk5BLFFBQVEsQ0FBQ2MsZUFBVDtBQUFBLHVYQUEyQixpQkFBZUMsT0FBZjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3pCO0FBRHlCLGtDQUVIQSxPQUFPLENBQUNDLEtBRkwsQ0FFakJDLElBRmlCLEVBRWpCQSxJQUZpQixvQ0FFVixFQUZVO0FBQUE7QUFBQSxtQkFLUHJCLGtEQUFBLHFJQUlaO0FBQUVxQixjQUFBQSxJQUFJLEVBQUpBO0FBQUYsYUFKWSxDQUxPOztBQUFBO0FBQUE7QUFBQTtBQUt2QmQsY0FBQUEsUUFMdUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUEzQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFhQSwrREFBZUgsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwb3N0LmpzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi9jbGllbnRcIjtcclxuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tIFwiQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0XCI7XHJcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XHJcblxyXG5jb25zdCBidWlsZGVyID0gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCk7XHJcblxyXG5jb25zdCBQcm9kdWN0cyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICByZXR1cm4gKDw+XHJcbiAgICA8aDE+UHJvZHVjdHM8L2gxPlxyXG4gICAgPGRpdiBzdHlsZT17e1wiZGlzcGxheVwiOiBcImdyaWRcIiwgXCJncmlkLXRlbXBsYXRlLWNvbHVtbnNcIjogXCJyZXBlYXQoMSwgMWZyKVwifX0+XHJcbiAgICAgIHtwcm9wcy5wcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMj57cHJvZHVjdC5zaG9ydE5hbWV9PC9oMj5cclxuICAgICAgICAgIDxoMz5Ecml2ZWF3YXkgZnJvbToge3Byb2R1Y3QuZHJpdmVhd2F5UHJpY2V9PC9oMz5cclxuICAgICAgICAgIHsgcHJvZHVjdC5mZWF0dXJlZCAmJiA8c3Ryb25nPkdSRUFUIFZBTFVFPC9zdHJvbmc+IH1cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxCbG9ja0NvbnRlbnRcclxuICAgICAgICAgICAgICBibG9ja3M9e3Byb2R1Y3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgey4uLmNsaWVudC5jb25maWcoKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgzPkF2YWlsYWJsZSBjb2xvdXJzOjwvaDM+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0LmF2YWlsYWJsZUNvbG91cnMubWFwKChjb2xvdXIpID0+IChcclxuICAgICAgICAgICAgICA8bGk+e2NvbG91ci5uYW1lfTwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIDwvPik7XHJcbn07XHJcblxyXG5Qcm9kdWN0cy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjb250ZXh0KSB7XHJcbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcclxuICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvZHVjdHM6IGF3YWl0IGNsaWVudC5mZXRjaChgKltfdHlwZSA9PSBcInByb2R1Y3RcIl17XHJcbiAgICAgIC4uLixcclxuICAgICAgXCJ0aHVtYm5haWxcIjogdGh1bWJuYWlsLT4sXHJcbiAgICAgIFwiYXZhaWxhYmxlQ29sb3Vyc1wiOiBhdmFpbGFibGVDb2xvdXJzW10tPlxyXG4gICAgfWAsIHsgc2x1ZyB9KVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0czsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiY2xpZW50IiwiQmxvY2tDb250ZW50IiwiaW1hZ2VVcmxCdWlsZGVyIiwiYnVpbGRlciIsIlByb2R1Y3RzIiwicHJvcHMiLCJyb3V0ZXIiLCJwcm9kdWN0cyIsIm1hcCIsInByb2R1Y3QiLCJzaG9ydE5hbWUiLCJkcml2ZWF3YXlQcmljZSIsImZlYXR1cmVkIiwiZGVzY3JpcHRpb24iLCJjb25maWciLCJhdmFpbGFibGVDb2xvdXJzIiwiY29sb3VyIiwibmFtZSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJxdWVyeSIsInNsdWciLCJmZXRjaCJdLCJzb3VyY2VSb290IjoiIn0=