webpackHotUpdate_N_E("pages/employees-management/users/AddUser",{

/***/ "./pages/employees-management/users/FormFields.jsx":
/*!*********************************************************!*\
  !*** ./pages/employees-management/users/FormFields.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var _jsxFileName = "E:\\FYP\\admin-dashboard\\martfury-admin-react\\pages\\employees-management\\users\\FormFields.jsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // import { useField } from "formik";

var FormFields = function FormFields(_ref) {
  var label = _ref.label,
      placeholder = _ref.placeholder,
      props = Object(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["label", "placeholder"]);

  // const [field, meta] = useField(props);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mb-2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: [" ", label, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread({
        placeholder: placeholder,
        className: "form-control shandow-none",
        autoComplete: "off" // {...field}

      }, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_c = FormFields;
/* harmony default export */ __webpack_exports__["default"] = (FormFields);

var _c;

$RefreshReg$(_c, "FormFields");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvRm9ybUZpZWxkcy5qc3giXSwibmFtZXMiOlsiRm9ybUZpZWxkcyIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFzQztBQUFBLE1BQW5DQyxLQUFtQyxRQUFuQ0EsS0FBbUM7QUFBQSxNQUE1QkMsV0FBNEIsUUFBNUJBLFdBQTRCO0FBQUEsTUFBWkMsS0FBWTs7QUFDdkQ7QUFDQSxzQkFDRTtBQUFBLDJCQUdFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSw4QkFFRTtBQUFBLHdCQUFTRixLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFDRSxtQkFBVyxFQUFFQyxXQURmO0FBRUUsaUJBQVMsRUFBQywyQkFGWjtBQUdFLG9CQUFZLEVBQUMsS0FIZixDQUlFOztBQUpGLFNBS01DLEtBTE47QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGLG1CQURGO0FBbUJELENBckJEOztLQUFNSCxVO0FBdUJTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbXBsb3llZXMtbWFuYWdlbWVudC91c2Vycy9BZGRVc2VyLjIwYTM3MjQyOTRmNWNjMmZiNTllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCB7IHVzZUZpZWxkIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5jb25zdCBGb3JtRmllbGRzID0gKHsgbGFiZWwsIHBsYWNlaG9sZGVyLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgLy8gY29uc3QgW2ZpZWxkLCBtZXRhXSA9IHVzZUZpZWxkKHByb3BzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtMTInPiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTInPlxyXG4gICAgICAgIHsvKiBodG1sRm9yPXtmaWVsZC5uYW1lfSAqL31cclxuICAgICAgICA8bGFiZWw+IHtsYWJlbH0gPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sIHNoYW5kb3ctbm9uZSdcclxuICAgICAgICAgIGF1dG9Db21wbGV0ZT0nb2ZmJ1xyXG4gICAgICAgICAgLy8gey4uLmZpZWxkfVxyXG4gICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPC9kaXY+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtRmllbGRzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9