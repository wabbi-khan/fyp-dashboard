webpackHotUpdate_N_E("pages/products",{

/***/ "./pages/products/index.jsx":
/*!**********************************!*\
  !*** ./pages/products/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_ContainerDefault__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/layouts/ContainerDefault */ "./components/layouts/ContainerDefault.jsx");
/* harmony import */ var _components_elements_basic_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/elements/basic/Pagination */ "./components/elements/basic/Pagination.jsx");
/* harmony import */ var _components_shared_tables_TableProjectItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/shared/tables/TableProjectItems */ "./components/shared/tables/TableProjectItems.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_shared_headers_HeaderDashboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/shared/headers/HeaderDashboard */ "./components/shared/headers/HeaderDashboard.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_app_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/store/app/action */ "./store/app/action.js");


var _jsxFileName = "E:\\FYP\\admin-dashboard\\martfury-admin-react\\pages\\products\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();










var Option = antd__WEBPACK_IMPORTED_MODULE_5__["Select"].Option;

var ProductPage = function ProductPage() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(Object(_store_app_action__WEBPACK_IMPORTED_MODULE_9__["toggleDrawerMenu"])(false));
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_ContainerDefault__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Products",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_headers_HeaderDashboard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: "Products",
      description: "Martfury Product Listing "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, _this);
};

_s(ProductPage, "rAh3tY+Iv6hWC9AI4Dm+rCbkwNE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"]];
});

_c = ProductPage;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(function (state) {
  return state.app;
})(ProductPage));

var _c;

$RefreshReg$(_c, "ProductPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvaW5kZXguanN4Il0sIm5hbWVzIjpbIk9wdGlvbiIsIlNlbGVjdCIsIlByb2R1Y3RQYWdlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInRvZ2dsZURyYXdlck1lbnUiLCJjb25uZWN0Iiwic3RhdGUiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxNLEdBQVdDLDJDLENBQVhELE07O0FBQ1IsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN4QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkRixZQUFRLENBQUNHLDBFQUFnQixDQUFDLEtBQUQsQ0FBakIsQ0FBUjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFHQSxzQkFDRSxxRUFBQyw0RUFBRDtBQUFrQixTQUFLLEVBQUMsVUFBeEI7QUFBQSwyQkFDRSxxRUFBQyxrRkFBRDtBQUNFLFdBQUssRUFBQyxVQURSO0FBRUUsaUJBQVcsRUFBQztBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1RkQsQ0E1RkQ7O0dBQU1KLFc7VUFDYUUsdUQ7OztLQURiRixXO0FBNkZTSywwSEFBTyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEdBQWpCO0FBQUEsQ0FBRCxDQUFQLENBQThCUCxXQUE5QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzLjcwMDQ0MmNkMjM3Y2FhODY0NmIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udGFpbmVyRGVmYXVsdCBmcm9tIFwifi9jb21wb25lbnRzL2xheW91dHMvQ29udGFpbmVyRGVmYXVsdFwiO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9lbGVtZW50cy9iYXNpYy9QYWdpbmF0aW9uXCI7XG5pbXBvcnQgVGFibGVQcm9qZWN0SXRlbXMgZnJvbSBcIn4vY29tcG9uZW50cy9zaGFyZWQvdGFibGVzL1RhYmxlUHJvamVjdEl0ZW1zXCI7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEhlYWRlckRhc2hib2FyZCBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9oZWFkZXJzL0hlYWRlckRhc2hib2FyZFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHRvZ2dsZURyYXdlck1lbnUgfSBmcm9tIFwifi9zdG9yZS9hcHAvYWN0aW9uXCI7XG5cbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XG5jb25zdCBQcm9kdWN0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHRvZ2dsZURyYXdlck1lbnUoZmFsc2UpKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXJEZWZhdWx0IHRpdGxlPSdQcm9kdWN0cyc+XG4gICAgICA8SGVhZGVyRGFzaGJvYXJkXG4gICAgICAgIHRpdGxlPSdQcm9kdWN0cydcbiAgICAgICAgZGVzY3JpcHRpb249J01hcnRmdXJ5IFByb2R1Y3QgTGlzdGluZyAnXG4gICAgICAvPlxuICAgICAgey8qIDxzZWN0aW9uIGNsYXNzTmFtZT0ncHMtaXRlbXMtbGlzdGluZyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcy1zZWN0aW9uX19hY3Rpb25zJz5cbiAgICAgICAgICA8TGluayBocmVmPScvcHJvZHVjdHMvY3JlYXRlLXByb2R1Y3QnPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdwcy1idG4gc3VjY2Vzcyc+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0naWNvbiBpY29uLXBsdXMgbXItMicgLz5cbiAgICAgICAgICAgICAgTmV3IFByb2R1Y3RcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHMtc2VjdGlvbl9faGVhZGVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHMtc2VjdGlvbl9fZmlsdGVyJz5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0ncHMtZm9ybS0tZmlsdGVyJyBhY3Rpb249J2luZGV4Lmh0bWwnIG1ldGhvZD0nZ2V0Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BzLWZvcm1fX2xlZnQnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1NlbGVjdCBDYXRlZ29yeSdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwcy1hbnQtZHJvcGRvd24nXG4gICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtSGVpZ2h0PXsyMH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT0nY2xvdGhpbmctYW5kLWFwcGFyZWwnPlxuICAgICAgICAgICAgICAgICAgICAgIENsb3RoaW5nICYgQXBwYXJlbFxuICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT0nZ2FyZGVuLWFuZC1raXRjaGVuJz5HYXJkZW4gJiBLaXRjaGVuPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWxlY3QgQ2F0ZWdvcnknXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHMtYW50LWRyb3Bkb3duJ1xuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbUhlaWdodD17MjB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9J3NpbXBsZS1wcm9kdWN0Jz5TaW1wbGUgUHJvZHVjdDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPSdncm91cHBlZC1wcm9kdWN0Jz5Hcm91cHBlZCBwcm9kdWN0PC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTdGF0dXMnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHMtYW50LWRyb3Bkb3duJ1xuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbUhlaWdodD17MjB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9J2FjdGl2ZSc+QWN0aXZlPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9J2luLWFjdGl2ZSc+SW5BY3RpdmU8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BzLWZvcm1fX3JpZ2h0Jz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncHMtYnRuIHBzLWJ0bi0tZ3JheSc+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ljb24gaWNvbi1mdW5uZWwgbXItMic+PC9pPlxuICAgICAgICAgICAgICAgICAgRmlsdGVyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcy1zZWN0aW9uX19zZWFyY2gnPlxuICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwcy1mb3JtLS1zZWFyY2gtc2ltcGxlJ1xuICAgICAgICAgICAgICBhY3Rpb249J2luZGV4Lmh0bWwnXG4gICAgICAgICAgICAgIG1ldGhvZD0nZ2V0J1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2ggcHJvZHVjdCdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ljb24gaWNvbi1tYWduaWZpZXInPjwvaT5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHMtc2VjdGlvbl9fY29udGVudCc+XG4gICAgICAgICAgPFRhYmxlUHJvamVjdEl0ZW1zIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHMtc2VjdGlvbl9fZm9vdGVyJz5cbiAgICAgICAgICA8cD5TaG93IDEwIGluIDMwIGl0ZW1zLjwvcD5cbiAgICAgICAgICA8UGFnaW5hdGlvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj4gKi99XG4gICAgPC9Db250YWluZXJEZWZhdWx0PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0YXRlKSA9PiBzdGF0ZS5hcHApKFByb2R1Y3RQYWdlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=