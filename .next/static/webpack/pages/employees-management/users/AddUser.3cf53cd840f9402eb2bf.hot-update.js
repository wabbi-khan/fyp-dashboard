webpackHotUpdate_N_E("pages/employees-management/users/AddUser",{

/***/ "./pages/employees-management/users/FormikForm.jsx":
/*!*********************************************************!*\
  !*** ./pages/employees-management/users/FormikForm.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _FormFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormFields */ "./pages/employees-management/users/FormFields.jsx");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");



var _jsxFileName = "E:\\FYP\\admin-dashboard\\martfury-admin-react\\pages\\employees-management\\users\\FormikForm.jsx",
    _this = undefined;






var index = function index() {
  var validate = yup__WEBPACK_IMPORTED_MODULE_4__["object"]({
    fullName: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().max(15, "Must be 15 character or less").required("Name is required"),
    email: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().email("Email is invalid").required("Emai is required"),
    mobileNo: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().max(15, "Mobile no is invalid").required("Mobile no is required"),
    cnicNo: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().max(20, "CNIC no is invalid").required("CNIC ni is required"),
    city: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().max(20, "CNIC no is invalid").required("City is required"),
    status: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().max(20, "CNIC no is invalid").required("Status is required"),
    address: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().max(50, "CNIC no is invalid").required("Address is required")
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
      initialValues: {
        fullName: "",
        email: "",
        mobileNo: "",
        cnicNo: "",
        city: "",
        status: "",
        address: ""
      },
      validationSchema: validate,
      children: function children(formik) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "my-4 font-weight-bold-display-4",
            children: ["Add New Employee", console.log(formik.values)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFields__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  label: "Full Name",
                  placeholder: "Wahab Khan ",
                  name: "fullName",
                  type: "text"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFields__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  label: "Email",
                  placeholder: "wahab@gmail.com",
                  name: "email",
                  type: "email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFields__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  label: "Mobile no",
                  placeholder: "123123",
                  name: "mobileNo",
                  type: "tel"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFields__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  label: "CNIC no",
                  placeholder: "234545",
                  name: "cnicNo",
                  type: "tel"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFields__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  label: "City",
                  placeholder: "Hyderabad",
                  name: "city",
                  type: "text"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFields__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  label: "Status",
                  placeholder: "Hire/Not Hire",
                  name: "status",
                  type: "text"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-md-12",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFields__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  label: "Address",
                  placeholder: "house no 234",
                  name: "address",
                  type: "text"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  type: "submit",
                  className: "btn btn-primary",
                  style: {
                    padding: "10px 20px",
                    fontSize: "15px",
                    marginTop: "20px"
                  },
                  children: "Submit"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (index);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvRm9ybWlrRm9ybS5qc3giXSwibmFtZXMiOlsiaW5kZXgiLCJ2YWxpZGF0ZSIsIll1cCIsImZ1bGxOYW1lIiwibWF4IiwicmVxdWlyZWQiLCJlbWFpbCIsIm1vYmlsZU5vIiwiY25pY05vIiwiY2l0eSIsInN0YXR1cyIsImFkZHJlc3MiLCJmb3JtaWsiLCJjb25zb2xlIiwibG9nIiwidmFsdWVzIiwicGFkZGluZyIsImZvbnRTaXplIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2xCLE1BQU1DLFFBQVEsR0FBR0MsMENBQUEsQ0FBVztBQUMxQkMsWUFBUSxFQUFFRCwwQ0FBQSxHQUNQRSxHQURPLENBQ0gsRUFERyxFQUNDLDhCQURELEVBRVBDLFFBRk8sQ0FFRSxrQkFGRixDQURnQjtBQUkxQkMsU0FBSyxFQUFFSiwwQ0FBQSxHQUFhSSxLQUFiLENBQW1CLGtCQUFuQixFQUF1Q0QsUUFBdkMsQ0FBZ0Qsa0JBQWhELENBSm1CO0FBSzFCRSxZQUFRLEVBQUVMLDBDQUFBLEdBQ1BFLEdBRE8sQ0FDSCxFQURHLEVBQ0Msc0JBREQsRUFFUEMsUUFGTyxDQUVFLHVCQUZGLENBTGdCO0FBUTFCRyxVQUFNLEVBQUVOLDBDQUFBLEdBQ0xFLEdBREssQ0FDRCxFQURDLEVBQ0csb0JBREgsRUFFTEMsUUFGSyxDQUVJLHFCQUZKLENBUmtCO0FBVzFCSSxRQUFJLEVBQUVQLDBDQUFBLEdBQ0hFLEdBREcsQ0FDQyxFQURELEVBQ0ssb0JBREwsRUFFSEMsUUFGRyxDQUVNLGtCQUZOLENBWG9CO0FBYzFCSyxVQUFNLEVBQUVSLDBDQUFBLEdBQ0xFLEdBREssQ0FDRCxFQURDLEVBQ0csb0JBREgsRUFFTEMsUUFGSyxDQUVJLG9CQUZKLENB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QkFyQ0YsZUF1REU7QUFBSyx1QkFBUyxFQUFDLEtBQWY7QUFBQSxxQ0FDRTtBQUFLLHlCQUFTLEVBQUMsV0FBZjtBQUFBLHdDQUNFLHFFQUFDLG1EQUFEO0FBQ0UsdUJBQUssRUFBQyxTQURSO0FBRUUsNkJBQVcsRUFBQyxjQUZkO0FBR0Usc0JBQUksRUFBQyxTQUhQO0FBSUUsc0JBQUksRUFBQztBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFPRTtBQUNFLHNCQUFJLEVBQUMsUUFEUDtBQUVFLDJCQUFTLEVBQUMsaUJBRlo7QUFHRSx1QkFBSyxFQUFFO0FBQ0xDLDJCQUFPLEVBQUUsV0FESjtBQUVMQyw0QkFBUSxFQUFFLE1BRkw7QUFHTEMsNkJBQVMsRUFBRTtBQUhOLG1CQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBdkRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQ7QUFBQTtBQVpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXNHRCxDQTVIRDs7QUE4SGVsQixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbXBsb3llZXMtbWFuYWdlbWVudC91c2Vycy9BZGRVc2VyLjNjZjUzY2Q4NDBmOTQwMmViMmJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IEZvcm1GaWVsZHMgZnJvbSBcIi4vRm9ybUZpZWxkc1wiO1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICBjb25zdCB2YWxpZGF0ZSA9IFl1cC5vYmplY3Qoe1xyXG4gICAgZnVsbE5hbWU6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAubWF4KDE1LCBcIk11c3QgYmUgMTUgY2hhcmFjdGVyIG9yIGxlc3NcIilcclxuICAgICAgLnJlcXVpcmVkKFwiTmFtZSBpcyByZXF1aXJlZFwiKSxcclxuICAgIGVtYWlsOiBZdXAuc3RyaW5nKCkuZW1haWwoXCJFbWFpbCBpcyBpbnZhbGlkXCIpLnJlcXVpcmVkKFwiRW1haSBpcyByZXF1aXJlZFwiKSxcclxuICAgIG1vYmlsZU5vOiBZdXAuc3RyaW5nKClcclxuICAgICAgLm1heCgxNSwgXCJNb2JpbGUgbm8gaXMgaW52YWxpZFwiKVxyXG4gICAgICAucmVxdWlyZWQoXCJNb2JpbGUgbm8gaXMgcmVxdWlyZWRcIiksXHJcbiAgICBjbmljTm86IFl1cC5zdHJpbmcoKVxyXG4gICAgICAubWF4KDIwLCBcIkNOSUMgbm8gaXMgaW52YWxpZFwiKVxyXG4gICAgICAucmVxdWlyZWQoXCJDTklDIG5pIGlzIHJlcXVpcmVkXCIpLFxyXG4gICAgY2l0eTogWXVwLnN0cmluZygpXHJcbiAgICAgIC5tYXgoMjAsIFwiQ05JQyBubyBpcyBpbnZhbGlkXCIpXHJcbiAgICAgIC5yZXF1aXJlZChcIkNpdHkgaXMgcmVxdWlyZWRcIiksXHJcbiAgICBzdGF0dXM6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAubWF4KDIwLCBcIkNOSUMgbm8gaXMgaW52YWxpZFwiKVxyXG4gICAgICAucmVxdWlyZWQoXCJTdGF0dXMgaXMgcmVxdWlyZWRcIiksXHJcbiAgICBhZGRyZXNzOiBZdXAuc3RyaW5nKClcclxuICAgICAgLm1heCg1MCwgXCJDTklDIG5vIGlzIGludmFsaWRcIilcclxuICAgICAgLnJlcXVpcmVkKFwiQWRkcmVzcyBpcyByZXF1aXJlZFwiKSxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgIGZ1bGxOYW1lOiBcIlwiLFxyXG4gICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICBtb2JpbGVObzogXCJcIixcclxuICAgICAgICAgIGNuaWNObzogXCJcIixcclxuICAgICAgICAgIGNpdHk6IFwiXCIsXHJcbiAgICAgICAgICBzdGF0dXM6IFwiXCIsXHJcbiAgICAgICAgICBhZGRyZXNzOiBcIlwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17dmFsaWRhdGV9XHJcbiAgICAgID5cclxuICAgICAgICB7KGZvcm1paykgPT4gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nbXktNCBmb250LXdlaWdodC1ib2xkLWRpc3BsYXktNCc+XHJcbiAgICAgICAgICAgICAgQWRkIE5ldyBFbXBsb3llZVxyXG4gICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhmb3JtaWsudmFsdWVzKX1cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTYnPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdGdWxsIE5hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1dhaGFiIEtoYW4gJ1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2Z1bGxOYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNic+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSd3YWhhYkBnbWFpbC5jb20nXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nZW1haWwnXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNic+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J01vYmlsZSBubydcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nMTIzMTIzJ1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J21vYmlsZU5vJ1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02Jz5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQ05JQyBubydcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nMjM0NTQ1J1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2NuaWNObydcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNic+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0NpdHknXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0h5ZGVyYWJhZCdcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdjaXR5J1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNic+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1N0YXR1cydcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nSGlyZS9Ob3QgSGlyZSdcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdzdGF0dXMnXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC0xMic+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0FkZHJlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2hvdXNlIG5vIDIzNCdcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdhZGRyZXNzJ1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnknXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweCAyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Gb3JtaWs+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=