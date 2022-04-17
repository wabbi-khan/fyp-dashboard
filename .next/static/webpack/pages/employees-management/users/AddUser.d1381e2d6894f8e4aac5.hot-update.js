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
      onChange = _ref.onChange,
      props = Object(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["label", "placeholder", "onChange"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvRm9ybUZpZWxkcy5qc3giXSwibmFtZXMiOlsiRm9ybUZpZWxkcyIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInByb3BzIiwidXNlRmllbGQiLCJmaWVsZCIsIm1ldGEiLCJ0b3VjaGVkIiwiZXJyb3IiLCJjb2xvciIsImZvbnRTaXplIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFnRDtBQUFBOztBQUFBLE1BQTdDQyxLQUE2QyxRQUE3Q0EsS0FBNkM7QUFBQSxNQUF0Q0MsV0FBc0MsUUFBdENBLFdBQXNDO0FBQUEsTUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5QjtBQUFBLE1BQVpDLEtBQVk7O0FBQUEsa0JBQzNDQyx1REFBUSxDQUFDRCxLQUFELENBRG1DO0FBQUE7QUFBQSxNQUMxREUsS0FEMEQ7QUFBQSxNQUNuREMsSUFEbUQ7O0FBRWpFLHNCQUNFO0FBQUEsMkJBR0U7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUVFO0FBQUEsd0JBQVNOLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUNFLG1CQUFXLEVBQUVDLFdBRGY7QUFFRSxnQkFBUSxFQUFFQyxRQUZaO0FBR0UsaUJBQVMsc0NBQ1BJLElBQUksQ0FBQ0MsT0FBTCxJQUFnQkQsSUFBSSxDQUFDRSxLQUFyQixJQUE4QixZQUR2QixDQUhYO0FBTUUsb0JBQVksRUFBQztBQU5mLFNBT01ILEtBUE4sR0FRTUYsS0FSTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFhRTtBQUFLLGFBQUssRUFBRTtBQUFFTSxlQUFLLEVBQUUsS0FBVDtBQUFnQkMsa0JBQVEsRUFBRTtBQUExQixTQUFaO0FBQUEsK0JBQ0UscUVBQUMsbURBQUQ7QUFBYyxjQUFJLEVBQUVMLEtBQUssQ0FBQ007QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRixtQkFERjtBQXlCRCxDQTNCRDs7R0FBTVosVTtVQUNrQkssK0M7OztLQURsQkwsVTtBQTZCU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvQWRkVXNlci5kMTM4MWUyZDY4OTRmOGU0YWFjNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBFcnJvck1lc3NhZ2UsIHVzZUZpZWxkIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5jb25zdCBGb3JtRmllbGRzID0gKHsgbGFiZWwsIHBsYWNlaG9sZGVyLCBvbkNoYW5nZSwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IFtmaWVsZCwgbWV0YV0gPSB1c2VGaWVsZChwcm9wcyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTEyJz4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0yJz5cclxuICAgICAgICB7LyogaHRtbEZvcj17ZmllbGQubmFtZX0gKi99XHJcbiAgICAgICAgPGxhYmVsPiB7bGFiZWx9IDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgc2hhbmRvdy1ub25lICR7XHJcbiAgICAgICAgICAgIG1ldGEudG91Y2hlZCAmJiBtZXRhLmVycm9yICYmIFwiaXMtaW52YWxpZFwiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICAgIGF1dG9Db21wbGV0ZT0nb2ZmJ1xyXG4gICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiwgZm9udFNpemU6IFwiMTJweFwiIH19PlxyXG4gICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPXtmaWVsZC5uYW1lfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gKi99XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUZpZWxkcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==