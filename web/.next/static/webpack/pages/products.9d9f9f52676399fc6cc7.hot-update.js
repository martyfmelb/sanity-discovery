self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./pages/products.js":
/*!***************************!*\
  !*** ./pages/products.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
      lineNumber: 11,
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
            lineNumber: 15,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h3", {
            children: ["Driveaway from: ", product.driveawayPrice]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 11
          }, _this), product.featured && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("strong", {
            children: "GREAT VALUE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 33
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5___default()), _objectSpread({
              blocks: product.description
            }, _client__WEBPACK_IMPORTED_MODULE_4__.default.config()), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h3", {
            children: "Available colours:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("ul", {
            children: product.availableColours.map(function (colour) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
                children: colour.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 15
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
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


/***/ }),

/***/ "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@sanity/image-url/lib/browser/image-url.umd.js ***!
  \*********************************************************************/
/***/ (function(module) {

(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, (function () {
  var example = 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg';
  function parseAssetId(ref) {
    var ref$1 = ref.split('-');
    var id = ref$1[1];
    var dimensionString = ref$1[2];
    var format = ref$1[3];

    if (!id || !dimensionString || !format) {
      throw new Error(("Malformed asset _ref '" + ref + "'. Expected an id like \"" + example + "\"."));
    }

    var ref$2 = dimensionString.split('x');
    var imgWidthStr = ref$2[0];
    var imgHeightStr = ref$2[1];
    var width = +imgWidthStr;
    var height = +imgHeightStr;
    var isValidAssetId = isFinite(width) && isFinite(height);

    if (!isValidAssetId) {
      throw new Error(("Malformed asset _ref '" + ref + "'. Expected an id like \"" + example + "\"."));
    }

    return {
      id: id,
      width: width,
      height: height,
      format: format
    };
  }

  var isRef = function (src) {
    var source = src;
    return source ? typeof source._ref === 'string' : false;
  };

  var isAsset = function (src) {
    var source = src;
    return source ? typeof source._id === 'string' : false;
  };

  var isAssetStub = function (src) {
    var source = src;
    return source && source.asset ? typeof source.asset.url === 'string' : false;
  }; // Convert an asset-id, asset or image to an image record suitable for processing
  // eslint-disable-next-line complexity


  function parseSource(source) {
    if (!source) {
      return null;
    }

    var image;

    if (typeof source === 'string' && isUrl(source)) {
      // Someone passed an existing image url?
      image = {
        asset: {
          _ref: urlToId(source)
        }
      };
    } else if (typeof source === 'string') {
      // Just an asset id
      image = {
        asset: {
          _ref: source
        }
      };
    } else if (isRef(source)) {
      // We just got passed an asset directly
      image = {
        asset: source
      };
    } else if (isAsset(source)) {
      // If we were passed an image asset document
      image = {
        asset: {
          _ref: source._id || ''
        }
      };
    } else if (isAssetStub(source)) {
      // If we were passed a partial asset (`url`, but no `_id`)
      image = {
        asset: {
          _ref: urlToId(source.asset.url)
        }
      };
    } else if (typeof source.asset === 'object') {
      // Probably an actual image with materialized asset
      image = source;
    } else {
      // We got something that does not look like an image, or it is an image
      // that currently isn't sporting an asset.
      return null;
    }

    var img = source;

    if (img.crop) {
      image.crop = img.crop;
    }

    if (img.hotspot) {
      image.hotspot = img.hotspot;
    }

    return applyDefaults(image);
  }

  function isUrl(url) {
    return /^https?:\/\//.test(("" + url));
  }

  function urlToId(url) {
    var parts = url.split('/').slice(-1);
    return ("image-" + (parts[0])).replace(/\.([a-z]+)$/, '-$1');
  } // Mock crop and hotspot if image lacks it


  function applyDefaults(image) {
    if (image.crop && image.hotspot) {
      return image;
    } // We need to pad in default values for crop or hotspot


    var result = Object.assign({}, image);

    if (!result.crop) {
      result.crop = {
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
      };
    }

    if (!result.hotspot) {
      result.hotspot = {
        x: 0.5,
        y: 0.5,
        height: 1.0,
        width: 1.0
      };
    }

    return result;
  }

  var SPEC_NAME_TO_URL_NAME_MAPPINGS = [['width', 'w'], ['height', 'h'], ['format', 'fm'], ['download', 'dl'], ['blur', 'blur'], ['sharpen', 'sharp'], ['invert', 'invert'], ['orientation', 'or'], ['minHeight', 'min-h'], ['maxHeight', 'max-h'], ['minWidth', 'min-w'], ['maxWidth', 'max-w'], ['quality', 'q'], ['fit', 'fit'], ['crop', 'crop'], ['saturation', 'sat'], ['auto', 'auto'], ['dpr', 'dpr'], ['pad', 'pad']];
  function urlForImage(options) {
    var spec = Object.assign({}, (options || {}));
    var source = spec.source;
    delete spec.source;
    var image = parseSource(source);

    if (!image) {
      throw new Error(("Unable to resolve image URL from source (" + (JSON.stringify(source)) + ")"));
    }

    var id = image.asset._ref || image.asset._id || '';
    var asset = parseAssetId(id); // Compute crop rect in terms of pixel coordinates in the raw source image

    var cropLeft = Math.round(image.crop.left * asset.width);
    var cropTop = Math.round(image.crop.top * asset.height);
    var crop = {
      left: cropLeft,
      top: cropTop,
      width: Math.round(asset.width - image.crop.right * asset.width - cropLeft),
      height: Math.round(asset.height - image.crop.bottom * asset.height - cropTop)
    }; // Compute hot spot rect in terms of pixel coordinates

    var hotSpotVerticalRadius = image.hotspot.height * asset.height / 2;
    var hotSpotHorizontalRadius = image.hotspot.width * asset.width / 2;
    var hotSpotCenterX = image.hotspot.x * asset.width;
    var hotSpotCenterY = image.hotspot.y * asset.height;
    var hotspot = {
      left: hotSpotCenterX - hotSpotHorizontalRadius,
      top: hotSpotCenterY - hotSpotVerticalRadius,
      right: hotSpotCenterX + hotSpotHorizontalRadius,
      bottom: hotSpotCenterY + hotSpotVerticalRadius
    }; // If irrelevant, or if we are requested to: don't perform crop/fit based on
    // the crop/hotspot.

    if (!(spec.rect || spec.focalPoint || spec.ignoreImageParams || spec.crop)) {
      spec = Object.assign({}, spec,
        fit({
          crop: crop,
          hotspot: hotspot
        }, spec));
    }

    return specToImageUrl(Object.assign({}, spec,
      {asset: asset}));
  } // eslint-disable-next-line complexity

  function specToImageUrl(spec) {
    var cdnUrl = spec.baseUrl || 'https://cdn.sanity.io';
    var filename = (spec.asset.id) + "-" + (spec.asset.width) + "x" + (spec.asset.height) + "." + (spec.asset.format);
    var baseUrl = cdnUrl + "/images/" + (spec.projectId) + "/" + (spec.dataset) + "/" + filename;
    var params = [];

    if (spec.rect) {
      // Only bother url with a crop if it actually crops anything
      var ref = spec.rect;
      var left = ref.left;
      var top = ref.top;
      var width = ref.width;
      var height = ref.height;
      var isEffectiveCrop = left !== 0 || top !== 0 || height !== spec.asset.height || width !== spec.asset.width;

      if (isEffectiveCrop) {
        params.push(("rect=" + left + "," + top + "," + width + "," + height));
      }
    }

    if (spec.bg) {
      params.push(("bg=" + (spec.bg)));
    }

    if (spec.focalPoint) {
      params.push(("fp-x=" + (spec.focalPoint.x)));
      params.push(("fp-y=" + (spec.focalPoint.y)));
    }

    var flip = [spec.flipHorizontal && 'h', spec.flipVertical && 'v'].filter(Boolean).join('');

    if (flip) {
      params.push(("flip=" + flip));
    } // Map from spec name to url param name, and allow using the actual param name as an alternative


    SPEC_NAME_TO_URL_NAME_MAPPINGS.forEach(function (mapping) {
      var specName = mapping[0];
      var param = mapping[1];

      if (typeof spec[specName] !== 'undefined') {
        params.push((param + "=" + (encodeURIComponent(spec[specName]))));
      } else if (typeof spec[param] !== 'undefined') {
        params.push((param + "=" + (encodeURIComponent(spec[param]))));
      }
    });

    if (params.length === 0) {
      return baseUrl;
    }

    return (baseUrl + "?" + (params.join('&')));
  }

  function fit(source, spec) {
    var cropRect;
    var imgWidth = spec.width;
    var imgHeight = spec.height; // If we are not constraining the aspect ratio, we'll just use the whole crop

    if (!(imgWidth && imgHeight)) {
      return {
        width: imgWidth,
        height: imgHeight,
        rect: source.crop
      };
    }

    var crop = source.crop;
    var hotspot = source.hotspot; // If we are here, that means aspect ratio is locked and fitting will be a bit harder

    var desiredAspectRatio = imgWidth / imgHeight;
    var cropAspectRatio = crop.width / crop.height;

    if (cropAspectRatio > desiredAspectRatio) {
      // The crop is wider than the desired aspect ratio. That means we are cutting from the sides
      var height = Math.round(crop.height);
      var width = Math.round(height * desiredAspectRatio);
      var top = Math.max(0, Math.round(crop.top)); // Center output horizontally over hotspot

      var hotspotXCenter = Math.round((hotspot.right - hotspot.left) / 2 + hotspot.left);
      var left = Math.max(0, Math.round(hotspotXCenter - width / 2)); // Keep output within crop

      if (left < crop.left) {
        left = crop.left;
      } else if (left + width > crop.left + crop.width) {
        left = crop.left + crop.width - width;
      }

      cropRect = {
        left: left,
        top: top,
        width: width,
        height: height
      };
    } else {
      // The crop is taller than the desired ratio, we are cutting from top and bottom
      var width$1 = crop.width;
      var height$1 = Math.round(width$1 / desiredAspectRatio);
      var left$1 = Math.max(0, Math.round(crop.left)); // Center output vertically over hotspot

      var hotspotYCenter = Math.round((hotspot.bottom - hotspot.top) / 2 + hotspot.top);
      var top$1 = Math.max(0, Math.round(hotspotYCenter - height$1 / 2)); // Keep output rect within crop

      if (top$1 < crop.top) {
        top$1 = crop.top;
      } else if (top$1 + height$1 > crop.top + crop.height) {
        top$1 = crop.top + crop.height - height$1;
      }

      cropRect = {
        left: left$1,
        top: top$1,
        width: width$1,
        height: height$1
      };
    }

    return {
      width: imgWidth,
      height: imgHeight,
      rect: cropRect
    };
  } // For backwards-compatibility

  var validFits = ['clip', 'crop', 'fill', 'fillmax', 'max', 'scale', 'min'];
  var validCrops = ['top', 'bottom', 'left', 'right', 'center', 'focalpoint', 'entropy'];
  var validAutoModes = ['format'];

  function isSanityClientLike(client) {
    return client ? typeof client.clientConfig === 'object' : false;
  }

  function rewriteSpecName(key) {
    var specs = SPEC_NAME_TO_URL_NAME_MAPPINGS;

    for (var i = 0, list = specs; i < list.length; i += 1) {
      var entry = list[i];

      var specName = entry[0];
      var param = entry[1];

      if (key === specName || key === param) {
        return specName;
      }
    }

    return key;
  }

  function urlBuilder(options) {
    // Did we get a SanityClient?
    var client = options;

    if (isSanityClientLike(client)) {
      // Inherit config from client
      var ref = client.clientConfig;
      var apiUrl = ref.apiHost;
      var projectId = ref.projectId;
      var dataset = ref.dataset;
      var apiHost = apiUrl || 'https://api.sanity.io';
      return new ImageUrlBuilder(null, {
        baseUrl: apiHost.replace(/^https:\/\/api\./, 'https://cdn.'),
        projectId: projectId,
        dataset: dataset
      });
    } // Or just accept the options as given


    return new ImageUrlBuilder(null, options);
  }
  var ImageUrlBuilder = function ImageUrlBuilder(parent, options) {
    this.options = parent ? Object.assign({}, (parent.options || {}),
      (options || {})) // Merge parent options
    : Object.assign({}, (options || {})); // Copy options
  };

  ImageUrlBuilder.prototype.withOptions = function withOptions (options) {
    var baseUrl = options.baseUrl || this.options.baseUrl;
    var newOptions = {
      baseUrl: baseUrl
    };

    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        var specKey = rewriteSpecName(key);
        newOptions[specKey] = options[key];
      }
    }

    return new ImageUrlBuilder(this, Object.assign({}, {baseUrl: baseUrl},
      newOptions));
  }; // The image to be represented. Accepts a Sanity 'image'-document, 'asset'-document or
  // _id of asset. To get the benefit of automatic hot-spot/crop integration with the content
  // studio, the 'image'-document must be provided.


  ImageUrlBuilder.prototype.image = function image (source) {
    return this.withOptions({
      source: source
    });
  }; // Specify the dataset


  ImageUrlBuilder.prototype.dataset = function dataset (dataset$1) {
    return this.withOptions({
      dataset: dataset$1
    });
  }; // Specify the projectId


  ImageUrlBuilder.prototype.projectId = function projectId (projectId$1) {
    return this.withOptions({
      projectId: projectId$1
    });
  }; // Specify background color


  ImageUrlBuilder.prototype.bg = function bg (bg$1) {
    return this.withOptions({
      bg: bg$1
    });
  }; // Set DPR scaling factor


  ImageUrlBuilder.prototype.dpr = function dpr (dpr$1) {
    // A DPR of 1 is the default - so only include it if we have a different value
    return this.withOptions(dpr$1 && dpr$1 !== 1 ? {
      dpr: dpr$1
    } : {});
  }; // Specify the width of the image in pixels


  ImageUrlBuilder.prototype.width = function width (width$1) {
    return this.withOptions({
      width: width$1
    });
  }; // Specify the height of the image in pixels


  ImageUrlBuilder.prototype.height = function height (height$1) {
    return this.withOptions({
      height: height$1
    });
  }; // Specify focal point in fraction of image dimensions. Each component 0.0-1.0


  ImageUrlBuilder.prototype.focalPoint = function focalPoint (x, y) {
    return this.withOptions({
      focalPoint: {
        x: x,
        y: y
      }
    });
  };

  ImageUrlBuilder.prototype.maxWidth = function maxWidth (maxWidth$1) {
    return this.withOptions({
      maxWidth: maxWidth$1
    });
  };

  ImageUrlBuilder.prototype.minWidth = function minWidth (minWidth$1) {
    return this.withOptions({
      minWidth: minWidth$1
    });
  };

  ImageUrlBuilder.prototype.maxHeight = function maxHeight (maxHeight$1) {
    return this.withOptions({
      maxHeight: maxHeight$1
    });
  };

  ImageUrlBuilder.prototype.minHeight = function minHeight (minHeight$1) {
    return this.withOptions({
      minHeight: minHeight$1
    });
  }; // Specify width and height in pixels


  ImageUrlBuilder.prototype.size = function size (width, height) {
    return this.withOptions({
      width: width,
      height: height
    });
  }; // Specify blur between 0 and 100


  ImageUrlBuilder.prototype.blur = function blur (blur$1) {
    return this.withOptions({
      blur: blur$1
    });
  };

  ImageUrlBuilder.prototype.sharpen = function sharpen (sharpen$1) {
    return this.withOptions({
      sharpen: sharpen$1
    });
  }; // Specify the desired rectangle of the image


  ImageUrlBuilder.prototype.rect = function rect (left, top, width, height) {
    return this.withOptions({
      rect: {
        left: left,
        top: top,
        width: width,
        height: height
      }
    });
  }; // Specify the image format of the image. 'jpg', 'pjpg', 'png', 'webp'


  ImageUrlBuilder.prototype.format = function format (format$1) {
    return this.withOptions({
      format: format$1
    });
  };

  ImageUrlBuilder.prototype.invert = function invert (invert$1) {
    return this.withOptions({
      invert: invert$1
    });
  }; // Rotation in degrees 0, 90, 180, 270


  ImageUrlBuilder.prototype.orientation = function orientation (orientation$1) {
    return this.withOptions({
      orientation: orientation$1
    });
  }; // Compression quality 0-100


  ImageUrlBuilder.prototype.quality = function quality (quality$1) {
    return this.withOptions({
      quality: quality$1
    });
  }; // Make it a download link. Parameter is default filename.


  ImageUrlBuilder.prototype.forceDownload = function forceDownload (download) {
    return this.withOptions({
      download: download
    });
  }; // Flip image horizontally


  ImageUrlBuilder.prototype.flipHorizontal = function flipHorizontal () {
    return this.withOptions({
      flipHorizontal: true
    });
  }; // Flip image vertically


  ImageUrlBuilder.prototype.flipVertical = function flipVertical () {
    return this.withOptions({
      flipVertical: true
    });
  }; // Ignore crop/hotspot from image record, even when present


  ImageUrlBuilder.prototype.ignoreImageParams = function ignoreImageParams () {
    return this.withOptions({
      ignoreImageParams: true
    });
  };

  ImageUrlBuilder.prototype.fit = function fit (value) {
    if (validFits.indexOf(value) === -1) {
      throw new Error(("Invalid fit mode \"" + value + "\""));
    }

    return this.withOptions({
      fit: value
    });
  };

  ImageUrlBuilder.prototype.crop = function crop (value) {
    if (validCrops.indexOf(value) === -1) {
      throw new Error(("Invalid crop mode \"" + value + "\""));
    }

    return this.withOptions({
      crop: value
    });
  }; // Saturation


  ImageUrlBuilder.prototype.saturation = function saturation (saturation$1) {
    return this.withOptions({
      saturation: saturation$1
    });
  };

  ImageUrlBuilder.prototype.auto = function auto (value) {
    if (validAutoModes.indexOf(value) === -1) {
      throw new Error(("Invalid auto mode \"" + value + "\""));
    }

    return this.withOptions({
      auto: value
    });
  }; // Specify the number of pixels to pad the image


  ImageUrlBuilder.prototype.pad = function pad (pad$1) {
    return this.withOptions({
      pad: pad$1
    });
  }; // Gets the url based on the submitted parameters


  ImageUrlBuilder.prototype.url = function url () {
    return urlForImage(this.options);
  }; // Alias for url()


  ImageUrlBuilder.prototype.toString = function toString () {
    return this.url();
  };

  return urlBuilder;

})));
//# sourceMappingURL=image-url.umd.js.map


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdHMuOWQ5ZjlmNTI2NzYzOTlmYzZjYzcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDMUIsTUFBTUMsTUFBTSxHQUFHTixzREFBUyxFQUF4QjtBQUVBLHNCQUFRO0FBQUEsNEJBQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFETSxlQUVOO0FBQUssV0FBSyxFQUFFO0FBQUMsbUJBQVcsTUFBWjtBQUFvQixpQ0FBeUI7QUFBN0MsT0FBWjtBQUFBLGdCQUNHSyxLQUFLLENBQUNFLFFBQU4sQ0FBZUMsR0FBZixDQUFtQixVQUFDQyxPQUFEO0FBQUEsNEJBQ2xCO0FBQUEsa0NBQ0U7QUFBQSxzQkFBS0EsT0FBTyxDQUFDQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBLDJDQUFxQkQsT0FBTyxDQUFDRSxjQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsRUFHSUYsT0FBTyxDQUFDRyxRQUFSLGlCQUFvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIeEIsZUFJRTtBQUFBLG1DQUNFLDhEQUFDLHVFQUFEO0FBQ0Usb0JBQU0sRUFBRUgsT0FBTyxDQUFDSTtBQURsQixlQUVNWixtREFBQSxFQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkYsZUFXRTtBQUFBLHNCQUNHUSxPQUFPLENBQUNNLGdCQUFSLENBQXlCUCxHQUF6QixDQUE2QixVQUFDUSxNQUFEO0FBQUEsa0NBQzVCO0FBQUEsMEJBQUtBLE1BQU0sQ0FB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Q0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQUk7QUFDVixLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvaW1hZ2UtdXJsL2xpYi9icm93c2VyL2ltYWdlLXVybC51bWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcG9zdC5qc1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vY2xpZW50XCI7XHJcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSBcIkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdFwiO1xyXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xyXG5cclxuY29uc3QgUHJvZHVjdHMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgcmV0dXJuICg8PlxyXG4gICAgPGgxPlByb2R1Y3RzPC9oMT5cclxuICAgIDxkaXYgc3R5bGU9e3tcImRpc3BsYXlcIjogXCJncmlkXCIsIFwiZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zXCI6IFwicmVwZWF0KDEsIDFmcilcIn19PlxyXG4gICAgICB7cHJvcHMucHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDI+e3Byb2R1Y3Quc2hvcnROYW1lfTwvaDI+XHJcbiAgICAgICAgICA8aDM+RHJpdmVhd2F5IGZyb206IHtwcm9kdWN0LmRyaXZlYXdheVByaWNlfTwvaDM+XHJcbiAgICAgICAgICB7IHByb2R1Y3QuZmVhdHVyZWQgJiYgPHN0cm9uZz5HUkVBVCBWQUxVRTwvc3Ryb25nPiB9XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8QmxvY2tDb250ZW50XHJcbiAgICAgICAgICAgICAgYmxvY2tzPXtwcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIHsuLi5jbGllbnQuY29uZmlnKCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMz5BdmFpbGFibGUgY29sb3Vyczo8L2gzPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7cHJvZHVjdC5hdmFpbGFibGVDb2xvdXJzLm1hcCgoY29sb3VyKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpPntjb2xvdXIubmFtZX08L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICA8Lz4pO1xyXG59O1xyXG5cclxuUHJvZHVjdHMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oY29udGV4dCkge1xyXG4gIC8vIEl0J3MgaW1wb3J0YW50IHRvIGRlZmF1bHQgdGhlIHNsdWcgc28gdGhhdCBpdCBkb2Vzbid0IHJldHVybiBcInVuZGVmaW5lZFwiXHJcbiAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY29udGV4dC5xdWVyeTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb2R1Y3RzOiBhd2FpdCBjbGllbnQuZmV0Y2goYCpbX3R5cGUgPT0gXCJwcm9kdWN0XCJde1xyXG4gICAgICAuLi4sXHJcbiAgICAgIFwidGh1bWJuYWlsXCI6IHRodW1ibmFpbC0+LFxyXG4gICAgICBcImF2YWlsYWJsZUNvbG91cnNcIjogYXZhaWxhYmxlQ29sb3Vyc1tdLT5cclxuICAgIH1gLCB7IHNsdWcgfSlcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsLlNhbml0eUltYWdlVXJsQnVpbGRlciA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7XG4gIHZhciBleGFtcGxlID0gJ2ltYWdlLVRiOUV3OENYSXdhWTZSMWtqTXZJMHVSUi0yMDAweDMwMDAtanBnJztcbiAgZnVuY3Rpb24gcGFyc2VBc3NldElkKHJlZikge1xuICAgIHZhciByZWYkMSA9IHJlZi5zcGxpdCgnLScpO1xuICAgIHZhciBpZCA9IHJlZiQxWzFdO1xuICAgIHZhciBkaW1lbnNpb25TdHJpbmcgPSByZWYkMVsyXTtcbiAgICB2YXIgZm9ybWF0ID0gcmVmJDFbM107XG5cbiAgICBpZiAoIWlkIHx8ICFkaW1lbnNpb25TdHJpbmcgfHwgIWZvcm1hdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKChcIk1hbGZvcm1lZCBhc3NldCBfcmVmICdcIiArIHJlZiArIFwiJy4gRXhwZWN0ZWQgYW4gaWQgbGlrZSBcXFwiXCIgKyBleGFtcGxlICsgXCJcXFwiLlwiKSk7XG4gICAgfVxuXG4gICAgdmFyIHJlZiQyID0gZGltZW5zaW9uU3RyaW5nLnNwbGl0KCd4Jyk7XG4gICAgdmFyIGltZ1dpZHRoU3RyID0gcmVmJDJbMF07XG4gICAgdmFyIGltZ0hlaWdodFN0ciA9IHJlZiQyWzFdO1xuICAgIHZhciB3aWR0aCA9ICtpbWdXaWR0aFN0cjtcbiAgICB2YXIgaGVpZ2h0ID0gK2ltZ0hlaWdodFN0cjtcbiAgICB2YXIgaXNWYWxpZEFzc2V0SWQgPSBpc0Zpbml0ZSh3aWR0aCkgJiYgaXNGaW5pdGUoaGVpZ2h0KTtcblxuICAgIGlmICghaXNWYWxpZEFzc2V0SWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigoXCJNYWxmb3JtZWQgYXNzZXQgX3JlZiAnXCIgKyByZWYgKyBcIicuIEV4cGVjdGVkIGFuIGlkIGxpa2UgXFxcIlwiICsgZXhhbXBsZSArIFwiXFxcIi5cIikpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBpZDogaWQsXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIGZvcm1hdDogZm9ybWF0XG4gICAgfTtcbiAgfVxuXG4gIHZhciBpc1JlZiA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICB2YXIgc291cmNlID0gc3JjO1xuICAgIHJldHVybiBzb3VyY2UgPyB0eXBlb2Ygc291cmNlLl9yZWYgPT09ICdzdHJpbmcnIDogZmFsc2U7XG4gIH07XG5cbiAgdmFyIGlzQXNzZXQgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgdmFyIHNvdXJjZSA9IHNyYztcbiAgICByZXR1cm4gc291cmNlID8gdHlwZW9mIHNvdXJjZS5faWQgPT09ICdzdHJpbmcnIDogZmFsc2U7XG4gIH07XG5cbiAgdmFyIGlzQXNzZXRTdHViID0gZnVuY3Rpb24gKHNyYykge1xuICAgIHZhciBzb3VyY2UgPSBzcmM7XG4gICAgcmV0dXJuIHNvdXJjZSAmJiBzb3VyY2UuYXNzZXQgPyB0eXBlb2Ygc291cmNlLmFzc2V0LnVybCA9PT0gJ3N0cmluZycgOiBmYWxzZTtcbiAgfTsgLy8gQ29udmVydCBhbiBhc3NldC1pZCwgYXNzZXQgb3IgaW1hZ2UgdG8gYW4gaW1hZ2UgcmVjb3JkIHN1aXRhYmxlIGZvciBwcm9jZXNzaW5nXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5cblxuICBmdW5jdGlvbiBwYXJzZVNvdXJjZShzb3VyY2UpIHtcbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGltYWdlO1xuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnICYmIGlzVXJsKHNvdXJjZSkpIHtcbiAgICAgIC8vIFNvbWVvbmUgcGFzc2VkIGFuIGV4aXN0aW5nIGltYWdlIHVybD9cbiAgICAgIGltYWdlID0ge1xuICAgICAgICBhc3NldDoge1xuICAgICAgICAgIF9yZWY6IHVybFRvSWQoc291cmNlKVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIEp1c3QgYW4gYXNzZXQgaWRcbiAgICAgIGltYWdlID0ge1xuICAgICAgICBhc3NldDoge1xuICAgICAgICAgIF9yZWY6IHNvdXJjZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNSZWYoc291cmNlKSkge1xuICAgICAgLy8gV2UganVzdCBnb3QgcGFzc2VkIGFuIGFzc2V0IGRpcmVjdGx5XG4gICAgICBpbWFnZSA9IHtcbiAgICAgICAgYXNzZXQ6IHNvdXJjZVxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzQXNzZXQoc291cmNlKSkge1xuICAgICAgLy8gSWYgd2Ugd2VyZSBwYXNzZWQgYW4gaW1hZ2UgYXNzZXQgZG9jdW1lbnRcbiAgICAgIGltYWdlID0ge1xuICAgICAgICBhc3NldDoge1xuICAgICAgICAgIF9yZWY6IHNvdXJjZS5faWQgfHwgJydcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzQXNzZXRTdHViKHNvdXJjZSkpIHtcbiAgICAgIC8vIElmIHdlIHdlcmUgcGFzc2VkIGEgcGFydGlhbCBhc3NldCAoYHVybGAsIGJ1dCBubyBgX2lkYClcbiAgICAgIGltYWdlID0ge1xuICAgICAgICBhc3NldDoge1xuICAgICAgICAgIF9yZWY6IHVybFRvSWQoc291cmNlLmFzc2V0LnVybClcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzb3VyY2UuYXNzZXQgPT09ICdvYmplY3QnKSB7XG4gICAgICAvLyBQcm9iYWJseSBhbiBhY3R1YWwgaW1hZ2Ugd2l0aCBtYXRlcmlhbGl6ZWQgYXNzZXRcbiAgICAgIGltYWdlID0gc291cmNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBnb3Qgc29tZXRoaW5nIHRoYXQgZG9lcyBub3QgbG9vayBsaWtlIGFuIGltYWdlLCBvciBpdCBpcyBhbiBpbWFnZVxuICAgICAgLy8gdGhhdCBjdXJyZW50bHkgaXNuJ3Qgc3BvcnRpbmcgYW4gYXNzZXQuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgaW1nID0gc291cmNlO1xuXG4gICAgaWYgKGltZy5jcm9wKSB7XG4gICAgICBpbWFnZS5jcm9wID0gaW1nLmNyb3A7XG4gICAgfVxuXG4gICAgaWYgKGltZy5ob3RzcG90KSB7XG4gICAgICBpbWFnZS5ob3RzcG90ID0gaW1nLmhvdHNwb3Q7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFwcGx5RGVmYXVsdHMoaW1hZ2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNVcmwodXJsKSB7XG4gICAgcmV0dXJuIC9eaHR0cHM/OlxcL1xcLy8udGVzdCgoXCJcIiArIHVybCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXJsVG9JZCh1cmwpIHtcbiAgICB2YXIgcGFydHMgPSB1cmwuc3BsaXQoJy8nKS5zbGljZSgtMSk7XG4gICAgcmV0dXJuIChcImltYWdlLVwiICsgKHBhcnRzWzBdKSkucmVwbGFjZSgvXFwuKFthLXpdKykkLywgJy0kMScpO1xuICB9IC8vIE1vY2sgY3JvcCBhbmQgaG90c3BvdCBpZiBpbWFnZSBsYWNrcyBpdFxuXG5cbiAgZnVuY3Rpb24gYXBwbHlEZWZhdWx0cyhpbWFnZSkge1xuICAgIGlmIChpbWFnZS5jcm9wICYmIGltYWdlLmhvdHNwb3QpIHtcbiAgICAgIHJldHVybiBpbWFnZTtcbiAgICB9IC8vIFdlIG5lZWQgdG8gcGFkIGluIGRlZmF1bHQgdmFsdWVzIGZvciBjcm9wIG9yIGhvdHNwb3RcblxuXG4gICAgdmFyIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIGltYWdlKTtcblxuICAgIGlmICghcmVzdWx0LmNyb3ApIHtcbiAgICAgIHJlc3VsdC5jcm9wID0ge1xuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcmlnaHQ6IDBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKCFyZXN1bHQuaG90c3BvdCkge1xuICAgICAgcmVzdWx0LmhvdHNwb3QgPSB7XG4gICAgICAgIHg6IDAuNSxcbiAgICAgICAgeTogMC41LFxuICAgICAgICBoZWlnaHQ6IDEuMCxcbiAgICAgICAgd2lkdGg6IDEuMFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdmFyIFNQRUNfTkFNRV9UT19VUkxfTkFNRV9NQVBQSU5HUyA9IFtbJ3dpZHRoJywgJ3cnXSwgWydoZWlnaHQnLCAnaCddLCBbJ2Zvcm1hdCcsICdmbSddLCBbJ2Rvd25sb2FkJywgJ2RsJ10sIFsnYmx1cicsICdibHVyJ10sIFsnc2hhcnBlbicsICdzaGFycCddLCBbJ2ludmVydCcsICdpbnZlcnQnXSwgWydvcmllbnRhdGlvbicsICdvciddLCBbJ21pbkhlaWdodCcsICdtaW4taCddLCBbJ21heEhlaWdodCcsICdtYXgtaCddLCBbJ21pbldpZHRoJywgJ21pbi13J10sIFsnbWF4V2lkdGgnLCAnbWF4LXcnXSwgWydxdWFsaXR5JywgJ3EnXSwgWydmaXQnLCAnZml0J10sIFsnY3JvcCcsICdjcm9wJ10sIFsnc2F0dXJhdGlvbicsICdzYXQnXSwgWydhdXRvJywgJ2F1dG8nXSwgWydkcHInLCAnZHByJ10sIFsncGFkJywgJ3BhZCddXTtcbiAgZnVuY3Rpb24gdXJsRm9ySW1hZ2Uob3B0aW9ucykge1xuICAgIHZhciBzcGVjID0gT2JqZWN0LmFzc2lnbih7fSwgKG9wdGlvbnMgfHwge30pKTtcbiAgICB2YXIgc291cmNlID0gc3BlYy5zb3VyY2U7XG4gICAgZGVsZXRlIHNwZWMuc291cmNlO1xuICAgIHZhciBpbWFnZSA9IHBhcnNlU291cmNlKHNvdXJjZSk7XG5cbiAgICBpZiAoIWltYWdlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKFwiVW5hYmxlIHRvIHJlc29sdmUgaW1hZ2UgVVJMIGZyb20gc291cmNlIChcIiArIChKU09OLnN0cmluZ2lmeShzb3VyY2UpKSArIFwiKVwiKSk7XG4gICAgfVxuXG4gICAgdmFyIGlkID0gaW1hZ2UuYXNzZXQuX3JlZiB8fCBpbWFnZS5hc3NldC5faWQgfHwgJyc7XG4gICAgdmFyIGFzc2V0ID0gcGFyc2VBc3NldElkKGlkKTsgLy8gQ29tcHV0ZSBjcm9wIHJlY3QgaW4gdGVybXMgb2YgcGl4ZWwgY29vcmRpbmF0ZXMgaW4gdGhlIHJhdyBzb3VyY2UgaW1hZ2VcblxuICAgIHZhciBjcm9wTGVmdCA9IE1hdGgucm91bmQoaW1hZ2UuY3JvcC5sZWZ0ICogYXNzZXQud2lkdGgpO1xuICAgIHZhciBjcm9wVG9wID0gTWF0aC5yb3VuZChpbWFnZS5jcm9wLnRvcCAqIGFzc2V0LmhlaWdodCk7XG4gICAgdmFyIGNyb3AgPSB7XG4gICAgICBsZWZ0OiBjcm9wTGVmdCxcbiAgICAgIHRvcDogY3JvcFRvcCxcbiAgICAgIHdpZHRoOiBNYXRoLnJvdW5kKGFzc2V0LndpZHRoIC0gaW1hZ2UuY3JvcC5yaWdodCAqIGFzc2V0LndpZHRoIC0gY3JvcExlZnQpLFxuICAgICAgaGVpZ2h0OiBNYXRoLnJvdW5kKGFzc2V0LmhlaWdodCAtIGltYWdlLmNyb3AuYm90dG9tICogYXNzZXQuaGVpZ2h0IC0gY3JvcFRvcClcbiAgICB9OyAvLyBDb21wdXRlIGhvdCBzcG90IHJlY3QgaW4gdGVybXMgb2YgcGl4ZWwgY29vcmRpbmF0ZXNcblxuICAgIHZhciBob3RTcG90VmVydGljYWxSYWRpdXMgPSBpbWFnZS5ob3RzcG90LmhlaWdodCAqIGFzc2V0LmhlaWdodCAvIDI7XG4gICAgdmFyIGhvdFNwb3RIb3Jpem9udGFsUmFkaXVzID0gaW1hZ2UuaG90c3BvdC53aWR0aCAqIGFzc2V0LndpZHRoIC8gMjtcbiAgICB2YXIgaG90U3BvdENlbnRlclggPSBpbWFnZS5ob3RzcG90LnggKiBhc3NldC53aWR0aDtcbiAgICB2YXIgaG90U3BvdENlbnRlclkgPSBpbWFnZS5ob3RzcG90LnkgKiBhc3NldC5oZWlnaHQ7XG4gICAgdmFyIGhvdHNwb3QgPSB7XG4gICAgICBsZWZ0OiBob3RTcG90Q2VudGVyWCAtIGhvdFNwb3RIb3Jpem9udGFsUmFkaXVzLFxuICAgICAgdG9wOiBob3RTcG90Q2VudGVyWSAtIGhvdFNwb3RWZXJ0aWNhbFJhZGl1cyxcbiAgICAgIHJpZ2h0OiBob3RTcG90Q2VudGVyWCArIGhvdFNwb3RIb3Jpem9udGFsUmFkaXVzLFxuICAgICAgYm90dG9tOiBob3RTcG90Q2VudGVyWSArIGhvdFNwb3RWZXJ0aWNhbFJhZGl1c1xuICAgIH07IC8vIElmIGlycmVsZXZhbnQsIG9yIGlmIHdlIGFyZSByZXF1ZXN0ZWQgdG86IGRvbid0IHBlcmZvcm0gY3JvcC9maXQgYmFzZWQgb25cbiAgICAvLyB0aGUgY3JvcC9ob3RzcG90LlxuXG4gICAgaWYgKCEoc3BlYy5yZWN0IHx8IHNwZWMuZm9jYWxQb2ludCB8fCBzcGVjLmlnbm9yZUltYWdlUGFyYW1zIHx8IHNwZWMuY3JvcCkpIHtcbiAgICAgIHNwZWMgPSBPYmplY3QuYXNzaWduKHt9LCBzcGVjLFxuICAgICAgICBmaXQoe1xuICAgICAgICAgIGNyb3A6IGNyb3AsXG4gICAgICAgICAgaG90c3BvdDogaG90c3BvdFxuICAgICAgICB9LCBzcGVjKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwZWNUb0ltYWdlVXJsKE9iamVjdC5hc3NpZ24oe30sIHNwZWMsXG4gICAgICB7YXNzZXQ6IGFzc2V0fSkpO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5cbiAgZnVuY3Rpb24gc3BlY1RvSW1hZ2VVcmwoc3BlYykge1xuICAgIHZhciBjZG5VcmwgPSBzcGVjLmJhc2VVcmwgfHwgJ2h0dHBzOi8vY2RuLnNhbml0eS5pbyc7XG4gICAgdmFyIGZpbGVuYW1lID0gKHNwZWMuYXNzZXQuaWQpICsgXCItXCIgKyAoc3BlYy5hc3NldC53aWR0aCkgKyBcInhcIiArIChzcGVjLmFzc2V0LmhlaWdodCkgKyBcIi5cIiArIChzcGVjLmFzc2V0LmZvcm1hdCk7XG4gICAgdmFyIGJhc2VVcmwgPSBjZG5VcmwgKyBcIi9pbWFnZXMvXCIgKyAoc3BlYy5wcm9qZWN0SWQpICsgXCIvXCIgKyAoc3BlYy5kYXRhc2V0KSArIFwiL1wiICsgZmlsZW5hbWU7XG4gICAgdmFyIHBhcmFtcyA9IFtdO1xuXG4gICAgaWYgKHNwZWMucmVjdCkge1xuICAgICAgLy8gT25seSBib3RoZXIgdXJsIHdpdGggYSBjcm9wIGlmIGl0IGFjdHVhbGx5IGNyb3BzIGFueXRoaW5nXG4gICAgICB2YXIgcmVmID0gc3BlYy5yZWN0O1xuICAgICAgdmFyIGxlZnQgPSByZWYubGVmdDtcbiAgICAgIHZhciB0b3AgPSByZWYudG9wO1xuICAgICAgdmFyIHdpZHRoID0gcmVmLndpZHRoO1xuICAgICAgdmFyIGhlaWdodCA9IHJlZi5oZWlnaHQ7XG4gICAgICB2YXIgaXNFZmZlY3RpdmVDcm9wID0gbGVmdCAhPT0gMCB8fCB0b3AgIT09IDAgfHwgaGVpZ2h0ICE9PSBzcGVjLmFzc2V0LmhlaWdodCB8fCB3aWR0aCAhPT0gc3BlYy5hc3NldC53aWR0aDtcblxuICAgICAgaWYgKGlzRWZmZWN0aXZlQ3JvcCkge1xuICAgICAgICBwYXJhbXMucHVzaCgoXCJyZWN0PVwiICsgbGVmdCArIFwiLFwiICsgdG9wICsgXCIsXCIgKyB3aWR0aCArIFwiLFwiICsgaGVpZ2h0KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNwZWMuYmcpIHtcbiAgICAgIHBhcmFtcy5wdXNoKChcImJnPVwiICsgKHNwZWMuYmcpKSk7XG4gICAgfVxuXG4gICAgaWYgKHNwZWMuZm9jYWxQb2ludCkge1xuICAgICAgcGFyYW1zLnB1c2goKFwiZnAteD1cIiArIChzcGVjLmZvY2FsUG9pbnQueCkpKTtcbiAgICAgIHBhcmFtcy5wdXNoKChcImZwLXk9XCIgKyAoc3BlYy5mb2NhbFBvaW50LnkpKSk7XG4gICAgfVxuXG4gICAgdmFyIGZsaXAgPSBbc3BlYy5mbGlwSG9yaXpvbnRhbCAmJiAnaCcsIHNwZWMuZmxpcFZlcnRpY2FsICYmICd2J10uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJycpO1xuXG4gICAgaWYgKGZsaXApIHtcbiAgICAgIHBhcmFtcy5wdXNoKChcImZsaXA9XCIgKyBmbGlwKSk7XG4gICAgfSAvLyBNYXAgZnJvbSBzcGVjIG5hbWUgdG8gdXJsIHBhcmFtIG5hbWUsIGFuZCBhbGxvdyB1c2luZyB0aGUgYWN0dWFsIHBhcmFtIG5hbWUgYXMgYW4gYWx0ZXJuYXRpdmVcblxuXG4gICAgU1BFQ19OQU1FX1RPX1VSTF9OQU1FX01BUFBJTkdTLmZvckVhY2goZnVuY3Rpb24gKG1hcHBpbmcpIHtcbiAgICAgIHZhciBzcGVjTmFtZSA9IG1hcHBpbmdbMF07XG4gICAgICB2YXIgcGFyYW0gPSBtYXBwaW5nWzFdO1xuXG4gICAgICBpZiAodHlwZW9mIHNwZWNbc3BlY05hbWVdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBwYXJhbXMucHVzaCgocGFyYW0gKyBcIj1cIiArIChlbmNvZGVVUklDb21wb25lbnQoc3BlY1tzcGVjTmFtZV0pKSkpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc3BlY1twYXJhbV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHBhcmFtcy5wdXNoKChwYXJhbSArIFwiPVwiICsgKGVuY29kZVVSSUNvbXBvbmVudChzcGVjW3BhcmFtXSkpKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGJhc2VVcmw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChiYXNlVXJsICsgXCI/XCIgKyAocGFyYW1zLmpvaW4oJyYnKSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZml0KHNvdXJjZSwgc3BlYykge1xuICAgIHZhciBjcm9wUmVjdDtcbiAgICB2YXIgaW1nV2lkdGggPSBzcGVjLndpZHRoO1xuICAgIHZhciBpbWdIZWlnaHQgPSBzcGVjLmhlaWdodDsgLy8gSWYgd2UgYXJlIG5vdCBjb25zdHJhaW5pbmcgdGhlIGFzcGVjdCByYXRpbywgd2UnbGwganVzdCB1c2UgdGhlIHdob2xlIGNyb3BcblxuICAgIGlmICghKGltZ1dpZHRoICYmIGltZ0hlaWdodCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiBpbWdXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBpbWdIZWlnaHQsXG4gICAgICAgIHJlY3Q6IHNvdXJjZS5jcm9wXG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciBjcm9wID0gc291cmNlLmNyb3A7XG4gICAgdmFyIGhvdHNwb3QgPSBzb3VyY2UuaG90c3BvdDsgLy8gSWYgd2UgYXJlIGhlcmUsIHRoYXQgbWVhbnMgYXNwZWN0IHJhdGlvIGlzIGxvY2tlZCBhbmQgZml0dGluZyB3aWxsIGJlIGEgYml0IGhhcmRlclxuXG4gICAgdmFyIGRlc2lyZWRBc3BlY3RSYXRpbyA9IGltZ1dpZHRoIC8gaW1nSGVpZ2h0O1xuICAgIHZhciBjcm9wQXNwZWN0UmF0aW8gPSBjcm9wLndpZHRoIC8gY3JvcC5oZWlnaHQ7XG5cbiAgICBpZiAoY3JvcEFzcGVjdFJhdGlvID4gZGVzaXJlZEFzcGVjdFJhdGlvKSB7XG4gICAgICAvLyBUaGUgY3JvcCBpcyB3aWRlciB0aGFuIHRoZSBkZXNpcmVkIGFzcGVjdCByYXRpby4gVGhhdCBtZWFucyB3ZSBhcmUgY3V0dGluZyBmcm9tIHRoZSBzaWRlc1xuICAgICAgdmFyIGhlaWdodCA9IE1hdGgucm91bmQoY3JvcC5oZWlnaHQpO1xuICAgICAgdmFyIHdpZHRoID0gTWF0aC5yb3VuZChoZWlnaHQgKiBkZXNpcmVkQXNwZWN0UmF0aW8pO1xuICAgICAgdmFyIHRvcCA9IE1hdGgubWF4KDAsIE1hdGgucm91bmQoY3JvcC50b3ApKTsgLy8gQ2VudGVyIG91dHB1dCBob3Jpem9udGFsbHkgb3ZlciBob3RzcG90XG5cbiAgICAgIHZhciBob3RzcG90WENlbnRlciA9IE1hdGgucm91bmQoKGhvdHNwb3QucmlnaHQgLSBob3RzcG90LmxlZnQpIC8gMiArIGhvdHNwb3QubGVmdCk7XG4gICAgICB2YXIgbGVmdCA9IE1hdGgubWF4KDAsIE1hdGgucm91bmQoaG90c3BvdFhDZW50ZXIgLSB3aWR0aCAvIDIpKTsgLy8gS2VlcCBvdXRwdXQgd2l0aGluIGNyb3BcblxuICAgICAgaWYgKGxlZnQgPCBjcm9wLmxlZnQpIHtcbiAgICAgICAgbGVmdCA9IGNyb3AubGVmdDtcbiAgICAgIH0gZWxzZSBpZiAobGVmdCArIHdpZHRoID4gY3JvcC5sZWZ0ICsgY3JvcC53aWR0aCkge1xuICAgICAgICBsZWZ0ID0gY3JvcC5sZWZ0ICsgY3JvcC53aWR0aCAtIHdpZHRoO1xuICAgICAgfVxuXG4gICAgICBjcm9wUmVjdCA9IHtcbiAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBjcm9wIGlzIHRhbGxlciB0aGFuIHRoZSBkZXNpcmVkIHJhdGlvLCB3ZSBhcmUgY3V0dGluZyBmcm9tIHRvcCBhbmQgYm90dG9tXG4gICAgICB2YXIgd2lkdGgkMSA9IGNyb3Aud2lkdGg7XG4gICAgICB2YXIgaGVpZ2h0JDEgPSBNYXRoLnJvdW5kKHdpZHRoJDEgLyBkZXNpcmVkQXNwZWN0UmF0aW8pO1xuICAgICAgdmFyIGxlZnQkMSA9IE1hdGgubWF4KDAsIE1hdGgucm91bmQoY3JvcC5sZWZ0KSk7IC8vIENlbnRlciBvdXRwdXQgdmVydGljYWxseSBvdmVyIGhvdHNwb3RcblxuICAgICAgdmFyIGhvdHNwb3RZQ2VudGVyID0gTWF0aC5yb3VuZCgoaG90c3BvdC5ib3R0b20gLSBob3RzcG90LnRvcCkgLyAyICsgaG90c3BvdC50b3ApO1xuICAgICAgdmFyIHRvcCQxID0gTWF0aC5tYXgoMCwgTWF0aC5yb3VuZChob3RzcG90WUNlbnRlciAtIGhlaWdodCQxIC8gMikpOyAvLyBLZWVwIG91dHB1dCByZWN0IHdpdGhpbiBjcm9wXG5cbiAgICAgIGlmICh0b3AkMSA8IGNyb3AudG9wKSB7XG4gICAgICAgIHRvcCQxID0gY3JvcC50b3A7XG4gICAgICB9IGVsc2UgaWYgKHRvcCQxICsgaGVpZ2h0JDEgPiBjcm9wLnRvcCArIGNyb3AuaGVpZ2h0KSB7XG4gICAgICAgIHRvcCQxID0gY3JvcC50b3AgKyBjcm9wLmhlaWdodCAtIGhlaWdodCQxO1xuICAgICAgfVxuXG4gICAgICBjcm9wUmVjdCA9IHtcbiAgICAgICAgbGVmdDogbGVmdCQxLFxuICAgICAgICB0b3A6IHRvcCQxLFxuICAgICAgICB3aWR0aDogd2lkdGgkMSxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQkMVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IGltZ1dpZHRoLFxuICAgICAgaGVpZ2h0OiBpbWdIZWlnaHQsXG4gICAgICByZWN0OiBjcm9wUmVjdFxuICAgIH07XG4gIH0gLy8gRm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5XG5cbiAgdmFyIHZhbGlkRml0cyA9IFsnY2xpcCcsICdjcm9wJywgJ2ZpbGwnLCAnZmlsbG1heCcsICdtYXgnLCAnc2NhbGUnLCAnbWluJ107XG4gIHZhciB2YWxpZENyb3BzID0gWyd0b3AnLCAnYm90dG9tJywgJ2xlZnQnLCAncmlnaHQnLCAnY2VudGVyJywgJ2ZvY2FscG9pbnQnLCAnZW50cm9weSddO1xuICB2YXIgdmFsaWRBdXRvTW9kZXMgPSBbJ2Zvcm1hdCddO1xuXG4gIGZ1bmN0aW9uIGlzU2FuaXR5Q2xpZW50TGlrZShjbGllbnQpIHtcbiAgICByZXR1cm4gY2xpZW50ID8gdHlwZW9mIGNsaWVudC5jbGllbnRDb25maWcgPT09ICdvYmplY3QnIDogZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiByZXdyaXRlU3BlY05hbWUoa2V5KSB7XG4gICAgdmFyIHNwZWNzID0gU1BFQ19OQU1FX1RPX1VSTF9OQU1FX01BUFBJTkdTO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBzcGVjczsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHZhciBlbnRyeSA9IGxpc3RbaV07XG5cbiAgICAgIHZhciBzcGVjTmFtZSA9IGVudHJ5WzBdO1xuICAgICAgdmFyIHBhcmFtID0gZW50cnlbMV07XG5cbiAgICAgIGlmIChrZXkgPT09IHNwZWNOYW1lIHx8IGtleSA9PT0gcGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIHNwZWNOYW1lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBrZXk7XG4gIH1cblxuICBmdW5jdGlvbiB1cmxCdWlsZGVyKG9wdGlvbnMpIHtcbiAgICAvLyBEaWQgd2UgZ2V0IGEgU2FuaXR5Q2xpZW50P1xuICAgIHZhciBjbGllbnQgPSBvcHRpb25zO1xuXG4gICAgaWYgKGlzU2FuaXR5Q2xpZW50TGlrZShjbGllbnQpKSB7XG4gICAgICAvLyBJbmhlcml0IGNvbmZpZyBmcm9tIGNsaWVudFxuICAgICAgdmFyIHJlZiA9IGNsaWVudC5jbGllbnRDb25maWc7XG4gICAgICB2YXIgYXBpVXJsID0gcmVmLmFwaUhvc3Q7XG4gICAgICB2YXIgcHJvamVjdElkID0gcmVmLnByb2plY3RJZDtcbiAgICAgIHZhciBkYXRhc2V0ID0gcmVmLmRhdGFzZXQ7XG4gICAgICB2YXIgYXBpSG9zdCA9IGFwaVVybCB8fCAnaHR0cHM6Ly9hcGkuc2FuaXR5LmlvJztcbiAgICAgIHJldHVybiBuZXcgSW1hZ2VVcmxCdWlsZGVyKG51bGwsIHtcbiAgICAgICAgYmFzZVVybDogYXBpSG9zdC5yZXBsYWNlKC9eaHR0cHM6XFwvXFwvYXBpXFwuLywgJ2h0dHBzOi8vY2RuLicpLFxuICAgICAgICBwcm9qZWN0SWQ6IHByb2plY3RJZCxcbiAgICAgICAgZGF0YXNldDogZGF0YXNldFxuICAgICAgfSk7XG4gICAgfSAvLyBPciBqdXN0IGFjY2VwdCB0aGUgb3B0aW9ucyBhcyBnaXZlblxuXG5cbiAgICByZXR1cm4gbmV3IEltYWdlVXJsQnVpbGRlcihudWxsLCBvcHRpb25zKTtcbiAgfVxuICB2YXIgSW1hZ2VVcmxCdWlsZGVyID0gZnVuY3Rpb24gSW1hZ2VVcmxCdWlsZGVyKHBhcmVudCwgb3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IHBhcmVudCA/IE9iamVjdC5hc3NpZ24oe30sIChwYXJlbnQub3B0aW9ucyB8fCB7fSksXG4gICAgICAob3B0aW9ucyB8fCB7fSkpIC8vIE1lcmdlIHBhcmVudCBvcHRpb25zXG4gICAgOiBPYmplY3QuYXNzaWduKHt9LCAob3B0aW9ucyB8fCB7fSkpOyAvLyBDb3B5IG9wdGlvbnNcbiAgfTtcblxuICBJbWFnZVVybEJ1aWxkZXIucHJvdG90eXBlLndpdGhPcHRpb25zID0gZnVuY3Rpb24gd2l0aE9wdGlvbnMgKG9wdGlvbnMpIHtcbiAgICB2YXIgYmFzZVVybCA9IG9wdGlvbnMuYmFzZVVybCB8fCB0aGlzLm9wdGlvbnMuYmFzZVVybDtcbiAgICB2YXIgbmV3T3B0aW9ucyA9IHtcbiAgICAgIGJhc2VVcmw6IGJhc2VVcmxcbiAgICB9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdmFyIHNwZWNLZXkgPSByZXdyaXRlU3BlY05hbWUoa2V5KTtcbiAgICAgICAgbmV3T3B0aW9uc1tzcGVjS2V5XSA9IG9wdGlvbnNba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEltYWdlVXJsQnVpbGRlcih0aGlzLCBPYmplY3QuYXNzaWduKHt9LCB7YmFzZVVybDogYmFzZVVybH0sXG4gICAgICBuZXdPcHRpb25zKSk7XG4gIH07IC8vIFRoZSBpbWFnZSB0byBiZSByZXByZXNlbnRlZC4gQWNjZXB0cyBhIFNhbml0eSAnaW1hZ2UnLWRvY3VtZW50LCAnYXNzZXQnLWRvY3VtZW50IG9yXG4gIC8vIF9pZCBvZiBhc3NldC4gVG8gZ2V0IHRoZSBiZW5lZml0IG9mIGF1dG9tYXRpYyBob3Qtc3BvdC9jcm9wIGludGVncmF0aW9uIHdpdGggdGhlIGNvbnRlbnRcbiAgLy8gc3R1ZGlvLCB0aGUgJ2ltYWdlJy1kb2N1bWVudCBtdXN0IGJlIHByb3ZpZGVkLlxuXG5cbiAgSW1hZ2VVcmxCdWlsZGVyLnByb3RvdHlwZS5pbWFnZSA9IGZ1bmN0aW9uIGltYWdlIChzb3VyY2UpIHtcbiAgICByZXR1cm4gdGhpcy53aXRoT3B0aW9ucyh7XG4gICAgICBzb3VyY2U6IHNvdXJjZVxuICAgIH0pO1xuICB9OyAvLyBTcGVjaWZ5IHRoZSBkYXRhc2V0XG5cblxuICBJbWFnZVVybEJ1aWxkZXIucHJvdG90eXBlLmRhdGFzZXQgPSBmdW5jdGlvbiBkYXRhc2V0IChkYXRhc2V0JDEpIHtcbiAgICByZXR1cm4gdGhpcy53aXRoT3B0aW9ucyh7XG4gICAgICBkYXRhc2V0OiBkYXRhc2V0JDFcbiAgICB9KTtcbiAgfTsgLy8gU3BlY2lmeSB0aGUgcHJvamVjdElkXG5cblxuICBJbWFnZVVybEJ1aWxkZXIucHJvdG90eXBlLnByb2plY3RJZCA9IGZ1bmN0aW9uIHByb2plY3RJZCAocHJvamVjdElkJDEpIHtcbiAgICByZXR1cm4gdGhpcy53aXRoT3B0aW9ucyh7XG4gICAgICBwcm9qZWN0SWQ6IHByb2plY3RJZCQxXG4gICAgfSk7XG4gIH07IC8vIFNwZWNpZnkgYmFja2dyb3VuZCBjb2xvclxuXG5cbiAgSW1hZ2VVcmxCdWlsZGVyLnByb3RvdHlwZS5iZyA9IGZ1bmN0aW9uIGJnIChiZyQxKSB7XG4gICAgcmV0dXJuIHRoaXMud2l0aE9wdGlvbnMoe1xuICAgICAgYmc6IGJnJDFcbiAgICB9KTtcbiAgfTsgLy8gU2V0IERQUiBzY2FsaW5nIGZhY3RvclxuXG5cbiAgSW1hZ2VVcmxCdWlsZGVyLnByb3RvdHlwZS5kcHIgPSBmdW5jdGlvbiBkcHIgKGRwciQxKSB7XG4gICAgLy8gQSBEUFIgb2YgMSBpcyB0aGUgZGVmYXVsdCAtIHNvIG9ubHkgaW5jbHVkZSBpdCBpZiB3ZSBoYXZlIGEgZGlmZmVyZW50IHZhbHVlXG4gICAgcmV0dXJuIHRoaXMud2l0aE9wdGlvbnMoZHByJDEgJiYgZHByJDEgIT09IDEgPyB7XG4gICAgICBkcHI6IGRwciQxXG4gICAgfSA6IHt9KTtcbiAgfTsgLy8gU3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGltYWdlIGluIHBpeGVsc1xuXG5cbiAgSW1hZ2VVcmxCdWlsZGVyLnByb3RvdHlwZS53aWR0aCA9IGZ1bmN0aW9uIHdpZHRoICh3aWR0aCQxKSB7XG4gICAgcmV0dXJuIHRoaXMud2l0aE9wdGlvbnMoe1xuICAgICAgd2lkdGg6IHdpZHRoJDFcbiAgICB9KTtcbiAgfTsgLy8gU3BlY2lmeSB0aGUgaGVpZ2h0IG9mIHRoZSBpbWFnZSBpbiBwaXhlbHNcblxuXG4gIEltYWdlVXJsQnVpbGRlci5wcm90b3R5cGUuaGVpZ2h0ID0gZnVuY3Rpb24gaGVpZ2h0IChoZWlnaHQkMSkge1xuICAgIHJldHVybiB0aGlzLndpdGhPcHRpb25zKHtcbiAgICAgIGhlaWdodDogaGVpZ2h0JDFcbiAgICB9KTtcbiAgfTsgLy8gU3BlY2lmeSBmb2NhbCBwb2ludCBpbiBmcmFjdGlvbiBvZiBpbWFnZSBkaW1lbnNpb25zLiBFYWNoIGNvbXBvbmVudCAwLjAtMS4wXG5cblxuICBJbWFnZVVybEJ1aWxkZXIucHJvdG90eXBlLmZvY2FsUG9pbnQgPSBmdW5jdGlvbiBmb2NhbFBvaW50ICh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMud2l0aE9wdGlvbnMoe1xuICAgICAgZm9jYWxQb2ludDoge1xuICAgICAgICB4OiB4LFxuICAgICAgICB5OiB5XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgSW1hZ2VVcmxCdWlsZGVyLnByb3RvdHlwZS5tYXhXaWR0aCA9IGZ1bmN0aW9uIG1heFdpZHRoIChtYXhXaWR0aCQxKSB7XG4gICAgcmV0dXJuIHRoaXMud2l0aE9wdGlvbnMoe1xuICAgICAgbWF4V2lkdGg6IG1heFdpZHRoJDFcbiAgICB9KTtcbiAgfTtcblxuICBJbWFnZVVybEJ1aWxkZXIucHJvdG90eXBlLm1pbldpZHRoID0gZnVuY3Rpb24gbWluV2lkdGggKG1pbldpZHRoJDEpIHtcbiAgICByZXR1cm4gdGhpcy53aXRoT3B0aW9ucyh7XG4gICAgICBtaW5XaWR0aDogbWluV2lkdGgkMVxuICAgIH0pO1xuICB9O1xuXG4gIEltYWdlVXJsQnVpbGRlci5wcm90b3R5cGUubWF4SGVpZ2h0ID0gZnVuY3Rpb24gbWF4SGVpZ2h0IChtYXhIZWlnaHQkMSkge1xuICAgIHJldHVybiB0aGlzLndpdGhPcHRpb25zKHtcbiAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0JDFcbiAgICB9KTtcbiAgfTtcblxuICBJbWFnZVVybEJ1aWxkZXIucHJvdG90eXBlLm1pbkhlaWdodCA9IGZ1bmN0aW9uIG1pbkhlaWdodCAobWluSGVpZ2h0JDEpIHtcbiAgICByZXR1cm4gdGhpcy53aXRoT3B0aW9ucyh7XG4gICAgICBtaW5IZWlnaHQ6IG1pbkhlaWdodCQxXG4gICAgfSk7XG4gIH07IC8vIFNwZWNpZnkgd2lkdGggYW5kIGhlaWdodCBpbiBwaXhlbHNcblxuXG4gIEltYWdlVXJsQnVpbGRlci5wcm90b3R5cGUuc2l6ZSA9IGZ1bmN0aW9uIHNpemUgKHdpZHRoLCBoZWlnaHQpIHtcbiAgICByZXR1cm4gdGhpcy53aXRoT3B0aW9ucyh7XG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodFxuICAgIH0pO1xuICB9OyAvLyBTcGVjaWZ5IGJsdXIgYmV0d2VlbiAwIGFuZCAxMDBcblxuXG4gIEltYWdlVXJsQnVpbGRlci5wcm90b3R5cGUuYmx1ciA9IGZ1bmN0aW9uIGJsdXIgKGJsdXIkMSkge1xuICAgIHJldHVybiB0aGlzLndpdGhPcHRpb25zKHtcbiAgICAgIGJsdXI6IGJsdXIkMVxuICAgIH0pO1xuICB9O1xuXG4gIEltYWdlVXJsQnVpbGRlci5wcm90b3R5cGUuc2hhcnBlbiA9IGZ1bmN0aW9uIHNoYXJwZW4gKHNoYXJwZW4kMSkge1xuICAgIHJldHVybiB0aGlzLndpdGhPcHRpb25zKHtcbiAgICAgIHNoYXJwZW46IHNoYXJwZW4kMVxuICAgIH0pO1xuICB9OyAvLyBTcGVjaWZ5IHRoZSBkZXNpcmVkIHJlY3RhbmdsZSBvZiB0aGUgaW1hZ2VcblxuXG4gIEltYWdlVXJsQnVpbGRlci5wcm90b3R5cGUucmVjdCA9IGZ1bmN0aW9uIHJlY3QgKGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCkge1xuICAgIHJldHVybiB0aGlzLndpdGhPcHRpb25zKHtcbiAgICAgIHJlY3Q6IHtcbiAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgIH1cbiAgICB9KTtcbiAgfTsgLy8gU3BlY2lmeSB0aGUgaW1hZ2UgZm9ybWF0IG9mIHRoZSBpbWFnZS4gJ2pwZycsICdwanBnJywgJ3BuZycsICd3ZWJwJ1xuXG5cbiAgSW1hZ2VVcmxCdWlsZGVyLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiBmb3JtYXQgKGZvcm1hdCQxKSB7XG4gICAgcmV0dXJuIHRoaXMud2l0aE9wdGlvbnMoe1xuICAgICAgZm9ybWF0OiBmb3JtYXQkMVxuICAgIH0pO1xuICB9O1xuXG4gIEltYWdlVXJsQnVpbGRlci5wcm90b3R5cGUuaW52ZXJ0ID0gZnVuY3Rpb24gaW52ZXJ0IChpbnZlcnQkMSkge1xuICAgIHJldHVybiB0aGlzLndpdGhPcHRpb25zKHtcbiAgICAgIGludmVydDogaW52ZXJ0JDFcbiAgICB9KTtcbiAgfTsgLy8gUm90YXRpb24gaW4gZGVncmVlcyAwLCA5MCwgMTgwLCAyNzBcblxuXG4gIEltYWdlVXJsQnVpbGRlci5wcm90b3R5cGUub3JpZW50YXRpb24gPSBmdW5jdGlvbiBvcmllbnRhdGlvbiAob3JpZW50YXRpb24kMSkge1xuICAgIHJldHVybiB0aGlzLndpdGhPcHRpb25zKHtcbiAgICAgIG9yaWVudGF0aW9uOiBvcmllbnRhdGlvbiQxXG4gICAgfSk7XG4gIH07IC8vIENvbXByZXNzaW9uIHF1YWxpdHkgMC0xMDBcblxuXG4gIEltYWdlVXJsQnVpbGRlci5wcm90b3R5cGUucXVhbGl0eSA9IGZ1bmN0aW9uIHF1YWxpdHkgKHF1YWxpdHkkMSkge1xuICAgIHJldHVybiB0aGlzLndpdGhPcHRpb25zKHtcbiAgICAgIHF1YWxpdHk6IHF1YWxpdHkkMVxuICAgIH0pO1xuICB9OyAvLyBNYWtlIGl0IGEgZG93bmxvYWQgbGluay4gUGFyYW1ldGVyIGlzIGRlZmF1bHQgZmlsZW5hbWUuXG5cblxuICBJbWFnZVVybEJ1aWxkZXIucHJvdG90eXBlLmZvcmNlRG93bmxvYWQgPSBmdW5jdGlvbiBmb3JjZURvd25sb2FkIChkb3dubG9hZCkge1xuICAgIHJldHVybiB0aGlzLndpdGhPcHRpb25zKHtcbiAgICAgIGRvd25sb2FkOiBkb3dubG9hZFxuICAgIH0pO1xuICB9OyAvLyBGbGlwIGltYWdlIGhvcml6b250YWxseVxuXG5cbiAgSW1hZ2VVcmxCdWlsZGVyLnByb3RvdHlwZS5mbGlwSG9yaXpvbnRhbCA9IGZ1bmN0aW9uIGZsaXBIb3Jpem9udGFsICgpIHtcbiAgICByZXR1cm4gdGhpcy53aXRoT3B0aW9ucyh7XG4gICAgICBmbGlwSG9yaXpvbnRhbDogdHJ1ZVxuICAgIH0pO1xuICB9OyAvLyBGbGlwIGltYWdlIHZlcnRpY2FsbHlcblxuXG4gIEltYWdlVXJsQnVpbGRlci5wcm90b3R5cGUuZmxpcFZlcnRpY2FsID0gZnVuY3Rpb24gZmxpcFZlcnRpY2FsICgpIHtcbiAgICByZXR1cm4gdGhpcy53aXRoT3B0aW9ucyh7XG4gICAgICBmbGlwVmVydGljYWw6IHRydWVcbiAgICB9KTtcbiAgfTsgLy8gSWdub3JlIGNyb3AvaG90c3BvdCBmcm9tIGltYWdlIHJlY29yZCwgZXZlbiB3aGVuIHByZXNlbnRcblxuXG4gIEltYWdlVXJsQnVpbGRlci5wcm90b3R5cGUuaWdub3JlSW1hZ2VQYXJhbXMgPSBmdW5jdGlvbiBpZ25vcmVJbWFnZVBhcmFtcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMud2l0aE9wdGlvbnMoe1xuICAgICAgaWdub3JlSW1hZ2VQYXJhbXM6IHRydWVcbiAgICB9KTtcbiAgfTtcblxuICBJbWFnZVVybEJ1aWxkZXIucHJvdG90eXBlLmZpdCA9IGZ1bmN0aW9uIGZpdCAodmFsdWUpIHtcbiAgICBpZiAodmFsaWRGaXRzLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKChcIkludmFsaWQgZml0IG1vZGUgXFxcIlwiICsgdmFsdWUgKyBcIlxcXCJcIikpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLndpdGhPcHRpb25zKHtcbiAgICAgIGZpdDogdmFsdWVcbiAgICB9KTtcbiAgfTtcblxuICBJbWFnZVVybEJ1aWxkZXIucHJvdG90eXBlLmNyb3AgPSBmdW5jdGlvbiBjcm9wICh2YWx1ZSkge1xuICAgIGlmICh2YWxpZENyb3BzLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKChcIkludmFsaWQgY3JvcCBtb2RlIFxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy53aXRoT3B0aW9ucyh7XG4gICAgICBjcm9wOiB2YWx1ZVxuICAgIH0pO1xuICB9OyAvLyBTYXR1cmF0aW9uXG5cblxuICBJbWFnZVVybEJ1aWxkZXIucHJvdG90eXBlLnNhdHVyYXRpb24gPSBmdW5jdGlvbiBzYXR1cmF0aW9uIChzYXR1cmF0aW9uJDEpIHtcbiAgICByZXR1cm4gdGhpcy53aXRoT3B0aW9ucyh7XG4gICAgICBzYXR1cmF0aW9uOiBzYXR1cmF0aW9uJDFcbiAgICB9KTtcbiAgfTtcblxuICBJbWFnZVVybEJ1aWxkZXIucHJvdG90eXBlLmF1dG8gPSBmdW5jdGlvbiBhdXRvICh2YWx1ZSkge1xuICAgIGlmICh2YWxpZEF1dG9Nb2Rlcy5pbmRleE9mKHZhbHVlKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigoXCJJbnZhbGlkIGF1dG8gbW9kZSBcXFwiXCIgKyB2YWx1ZSArIFwiXFxcIlwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMud2l0aE9wdGlvbnMoe1xuICAgICAgYXV0bzogdmFsdWVcbiAgICB9KTtcbiAgfTsgLy8gU3BlY2lmeSB0aGUgbnVtYmVyIG9mIHBpeGVscyB0byBwYWQgdGhlIGltYWdlXG5cblxuICBJbWFnZVVybEJ1aWxkZXIucHJvdG90eXBlLnBhZCA9IGZ1bmN0aW9uIHBhZCAocGFkJDEpIHtcbiAgICByZXR1cm4gdGhpcy53aXRoT3B0aW9ucyh7XG4gICAgICBwYWQ6IHBhZCQxXG4gICAgfSk7XG4gIH07IC8vIEdldHMgdGhlIHVybCBiYXNlZCBvbiB0aGUgc3VibWl0dGVkIHBhcmFtZXRlcnNcblxuXG4gIEltYWdlVXJsQnVpbGRlci5wcm90b3R5cGUudXJsID0gZnVuY3Rpb24gdXJsICgpIHtcbiAgICByZXR1cm4gdXJsRm9ySW1hZ2UodGhpcy5vcHRpb25zKTtcbiAgfTsgLy8gQWxpYXMgZm9yIHVybCgpXG5cblxuICBJbWFnZVVybEJ1aWxkZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICAgIHJldHVybiB0aGlzLnVybCgpO1xuICB9O1xuXG4gIHJldHVybiB1cmxCdWlsZGVyO1xuXG59KSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UtdXJsLnVtZC5qcy5tYXBcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJjbGllbnQiLCJCbG9ja0NvbnRlbnQiLCJpbWFnZVVybEJ1aWxkZXIiLCJQcm9kdWN0cyIsInByb3BzIiwicm91dGVyIiwicHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0Iiwic2hvcnROYW1lIiwiZHJpdmVhd2F5UHJpY2UiLCJmZWF0dXJlZCIsImRlc2NyaXB0aW9uIiwiY29uZmlnIiwiYXZhaWxhYmxlQ29sb3VycyIsImNvbG91ciIsIm5hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwicXVlcnkiLCJzbHVnIiwiZmV0Y2giXSwic291cmNlUm9vdCI6IiJ9