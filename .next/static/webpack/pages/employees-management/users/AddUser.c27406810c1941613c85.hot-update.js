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
/* harmony import */ var E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");






var _jsxFileName = "E:\\FYP\\admin-dashboard\\martfury-admin-react\\pages\\employees-management\\users\\FormFields.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var FormFields = function FormFields(_ref) {
  _s();

  var label = _ref.label,
      placeholder = _ref.placeholder,
      value = _ref.value,
      onChange = _ref.onChange,
      props = Object(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["label", "placeholder", "value", "onChange"]);

  var _useField = Object(formik__WEBPACK_IMPORTED_MODULE_5__["useField"])(props),
      _useField2 = Object(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mb-2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: [" ", label, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread(_objectSpread({
        placeholder: placeholder,
        onChange: onChange,
        className: "form-control shandow-none ".concat(meta.touched && meta.error && "is-invalid"),
        autoComplete: "off"
      }, field), props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          color: "red",
          fontSize: "12px"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], {
          name: field.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(FormFields, "ImX69+3rRx1BE5Ru6eNKPZVOEn4=", false, function () {
  return [formik__WEBPACK_IMPORTED_MODULE_5__["useField"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvRm9ybUZpZWxkcy5qc3giXSwibmFtZXMiOlsiRm9ybUZpZWxkcyIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicHJvcHMiLCJ1c2VGaWVsZCIsImZpZWxkIiwibWV0YSIsInRvdWNoZWQiLCJlcnJvciIsImNvbG9yIiwiZm9udFNpemUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXVEO0FBQUE7O0FBQUEsTUFBcERDLEtBQW9ELFFBQXBEQSxLQUFvRDtBQUFBLE1BQTdDQyxXQUE2QyxRQUE3Q0EsV0FBNkM7QUFBQSxNQUFoQ0MsS0FBZ0MsUUFBaENBLEtBQWdDO0FBQUEsTUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5QjtBQUFBLE1BQVpDLEtBQVk7O0FBQUEsa0JBQ2xEQyx1REFBUSxDQUFDRCxLQUFELENBRDBDO0FBQUE7QUFBQSxNQUNqRUUsS0FEaUU7QUFBQSxNQUMxREMsSUFEMEQ7O0FBRXhFLHNCQUNFO0FBQUEsMkJBR0U7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUVFO0FBQUEsd0JBQVNQLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUNFLG1CQUFXLEVBQUVDLFdBRGY7QUFFRSxnQkFBUSxFQUFFRSxRQUZaO0FBR0UsaUJBQVMsc0NBQ1BJLElBQUksQ0FBQ0MsT0FBTCxJQUFnQkQsSUFBSSxDQUFDRSxLQUFyQixJQUE4QixZQUR2QixDQUhYO0FBTUUsb0JBQVksRUFBQztBQU5mLFNBT01ILEtBUE4sR0FRTUYsS0FSTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFhRTtBQUFLLGFBQUssRUFBRTtBQUFFTSxlQUFLLEVBQUUsS0FBVDtBQUFnQkMsa0JBQVEsRUFBRTtBQUExQixTQUFaO0FBQUEsK0JBQ0UscUVBQUMsbURBQUQ7QUFBYyxjQUFJLEVBQUVMLEtBQUssQ0FBQ007QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRixtQkFERjtBQXlCRCxDQTNCRDs7R0FBTWIsVTtVQUNrQk0sK0M7OztLQURsQk4sVTtBQTZCU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvQWRkVXNlci5jMjc0MDY4MTBjMTk0MTYxM2M4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBFcnJvck1lc3NhZ2UsIHVzZUZpZWxkIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5jb25zdCBGb3JtRmllbGRzID0gKHsgbGFiZWwsIHBsYWNlaG9sZGVyLCB2YWx1ZSwgb25DaGFuZ2UsIC4uLnByb3BzIH0pID0+IHtcclxuICBjb25zdCBbZmllbGQsIG1ldGFdID0gdXNlRmllbGQocHJvcHMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC0xMic+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItMic+XHJcbiAgICAgICAgey8qIGh0bWxGb3I9e2ZpZWxkLm5hbWV9ICovfVxyXG4gICAgICAgIDxsYWJlbD4ge2xhYmVsfSA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIHNoYW5kb3ctbm9uZSAke1xyXG4gICAgICAgICAgICBtZXRhLnRvdWNoZWQgJiYgbWV0YS5lcnJvciAmJiBcImlzLWludmFsaWRcIlxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgICBhdXRvQ29tcGxldGU9J29mZidcclxuICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIsIGZvbnRTaXplOiBcIjEycHhcIiB9fT5cclxuICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT17ZmllbGQubmFtZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICovfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1GaWVsZHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=