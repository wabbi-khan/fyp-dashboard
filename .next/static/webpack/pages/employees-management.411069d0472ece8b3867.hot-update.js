webpackHotUpdate_N_E("pages/employees-management",{

/***/ "./pages/employees-management/index.jsx":
/*!**********************************************!*\
  !*** ./pages/employees-management/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_ContainerDefault__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/layouts/ContainerDefault */ "./components/layouts/ContainerDefault.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_shared_headers_HeaderDashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/shared/headers/HeaderDashboard */ "./components/shared/headers/HeaderDashboard.jsx");


var _jsxFileName = "E:\\FYP\\admin-dashboard\\martfury-admin-react\\pages\\employees-management\\index.jsx",
    _this = undefined;


 // import Pagination from "~/components/elements/basic/Pagination";
// import TableProjectItems from "~/components/shared/tables/TableProjectItems";
// import { Select } from "antd";


 // import { connect, useDispatch } from "react-redux";
// import { toggleDrawerMenu } from "~/store/app/action";
// const { Option } = Select;

var ProductPage = function ProductPage() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(toggleDrawerMenu(false));
  // }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_ContainerDefault__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Employees Manage",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_headers_HeaderDashboard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Employees Management",
      description: "Employees Listing "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Employees Details"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/exm",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "asdasd"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, _this);
};

_c = ProductPage;
/* harmony default export */ __webpack_exports__["default"] = (ProductPage); // export default connect((state) => state.app)(ProductPage);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW1wbG95ZWVzLW1hbmFnZW1lbnQvaW5kZXguanN4Il0sIm5hbWVzIjpbIlByb2R1Y3RQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBO0FBQ0E7QUFDQTs7QUFDQTtDQUVBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQ0UscUVBQUMsNEVBQUQ7QUFBa0IsU0FBSyxFQUFDLGtCQUF4QjtBQUFBLDRCQUNFLHFFQUFDLGtGQUFEO0FBQ0UsV0FBSyxFQUFDLHNCQURSO0FBRUUsaUJBQVcsRUFBQztBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsZUFRRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxNQUFYO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE2RkQsQ0FsR0Q7O0tBQU1BLFc7QUFtR1NBLDBFQUFmLEUsQ0FDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbXBsb3llZXMtbWFuYWdlbWVudC40MTEwNjlkMDQ3MmVjZThiMzg2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRhaW5lckRlZmF1bHQgZnJvbSBcIn4vY29tcG9uZW50cy9sYXlvdXRzL0NvbnRhaW5lckRlZmF1bHRcIjtcbi8vIGltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZWxlbWVudHMvYmFzaWMvUGFnaW5hdGlvblwiO1xuLy8gaW1wb3J0IFRhYmxlUHJvamVjdEl0ZW1zIGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL3RhYmxlcy9UYWJsZVByb2plY3RJdGVtc1wiO1xuLy8gaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBIZWFkZXJEYXNoYm9hcmQgZnJvbSBcIn4vY29tcG9uZW50cy9zaGFyZWQvaGVhZGVycy9IZWFkZXJEYXNoYm9hcmRcIjtcbi8vIGltcG9ydCB7IGNvbm5lY3QsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG4vLyBpbXBvcnQgeyB0b2dnbGVEcmF3ZXJNZW51IH0gZnJvbSBcIn4vc3RvcmUvYXBwL2FjdGlvblwiO1xuXG4vLyBjb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xuY29uc3QgUHJvZHVjdFBhZ2UgPSAoKSA9PiB7XG4gIC8vIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBkaXNwYXRjaCh0b2dnbGVEcmF3ZXJNZW51KGZhbHNlKSk7XG4gIC8vIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyRGVmYXVsdCB0aXRsZT0nRW1wbG95ZWVzIE1hbmFnZSc+XG4gICAgICA8SGVhZGVyRGFzaGJvYXJkXG4gICAgICAgIHRpdGxlPSdFbXBsb3llZXMgTWFuYWdlbWVudCdcbiAgICAgICAgZGVzY3JpcHRpb249J0VtcGxveWVlcyBMaXN0aW5nICdcbiAgICAgIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+RW1wbG95ZWVzIERldGFpbHM8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8TGluayBocmVmPScvZXhtJz5cbiAgICAgICAgPGJ1dHRvbj5hc2Rhc2Q8L2J1dHRvbj5cbiAgICAgIDwvTGluaz5cbiAgICAgIHsvKiA8c2VjdGlvbiBjbGFzc05hbWU9J3BzLWl0ZW1zLWxpc3RpbmcnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHMtc2VjdGlvbl9fYWN0aW9ucyc+XG4gICAgICAgICAgPExpbmsgaHJlZj0nL3Byb2R1Y3RzL2NyZWF0ZS1wcm9kdWN0Jz5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ncHMtYnRuIHN1Y2Nlc3MnPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ljb24gaWNvbi1wbHVzIG1yLTInIC8+XG4gICAgICAgICAgICAgIE5ldyBQcm9kdWN0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BzLXNlY3Rpb25fX2hlYWRlcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BzLXNlY3Rpb25fX2ZpbHRlcic+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J3BzLWZvcm0tLWZpbHRlcicgYWN0aW9uPSdpbmRleC5odG1sJyBtZXRob2Q9J2dldCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcy1mb3JtX19sZWZ0Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWxlY3QgQ2F0ZWdvcnknXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHMtYW50LWRyb3Bkb3duJ1xuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbUhlaWdodD17MjB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9J2Nsb3RoaW5nLWFuZC1hcHBhcmVsJz5cbiAgICAgICAgICAgICAgICAgICAgICBDbG90aGluZyAmIEFwcGFyZWxcbiAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9J2dhcmRlbi1hbmQta2l0Y2hlbic+R2FyZGVuICYgS2l0Y2hlbjwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VsZWN0IENhdGVnb3J5J1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3BzLWFudC1kcm9wZG93bidcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW1IZWlnaHQ9ezIwfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPSdzaW1wbGUtcHJvZHVjdCc+U2ltcGxlIFByb2R1Y3Q8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT0nZ3JvdXBwZWQtcHJvZHVjdCc+R3JvdXBwZWQgcHJvZHVjdDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU3RhdHVzJ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3BzLWFudC1kcm9wZG93bidcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW1IZWlnaHQ9ezIwfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPSdhY3RpdmUnPkFjdGl2ZTwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPSdpbi1hY3RpdmUnPkluQWN0aXZlPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcy1mb3JtX19yaWdodCc+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3BzLWJ0biBwcy1idG4tLWdyYXknPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdpY29uIGljb24tZnVubmVsIG1yLTInPjwvaT5cbiAgICAgICAgICAgICAgICAgIEZpbHRlclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHMtc2VjdGlvbl9fc2VhcmNoJz5cbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHMtZm9ybS0tc2VhcmNoLXNpbXBsZSdcbiAgICAgICAgICAgICAgYWN0aW9uPSdpbmRleC5odG1sJ1xuICAgICAgICAgICAgICBtZXRob2Q9J2dldCdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VhcmNoIHByb2R1Y3QnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdpY29uIGljb24tbWFnbmlmaWVyJz48L2k+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BzLXNlY3Rpb25fX2NvbnRlbnQnPlxuICAgICAgICAgIDxUYWJsZVByb2plY3RJdGVtcyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BzLXNlY3Rpb25fX2Zvb3Rlcic+XG4gICAgICAgICAgPHA+U2hvdyAxMCBpbiAzMCBpdGVtcy48L3A+XG4gICAgICAgICAgPFBhZ2luYXRpb24gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+ICovfVxuICAgIDwvQ29udGFpbmVyRGVmYXVsdD5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0UGFnZTtcbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0YXRlKSA9PiBzdGF0ZS5hcHApKFByb2R1Y3RQYWdlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=