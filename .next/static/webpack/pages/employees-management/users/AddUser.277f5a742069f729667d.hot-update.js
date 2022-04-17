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
    _this = undefined,
    _s = $RefreshSig$();






var index = function index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    fullName: "",
    email: "",
    mobileNo: "",
    cnicNo: "",
    city: "",
    status: "",
    address: ""
  }),
      user = _useState[0],
      setUser = _useState[1];

  var onInputChange = function onInputChange(e) {
    console.log(e.target.value);
  };

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
      onSubmit: function onSubmit(values) {
        console.log(values);
      },
      children: function children(formik) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "my-4 font-weight-bold-display-4",
            children: "Add New Employee"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
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
                  type: "text",
                  value: fullName,
                  onChange: function onChange(e) {
                    return onInputChange(e);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFields__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  label: "Email",
                  placeholder: "wahab@gmail.com",
                  name: "email",
                  type: "email",
                  value: email
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFields__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  label: "Mobile no",
                  placeholder: "123123",
                  name: "mobileNo",
                  type: "tel",
                  value: mobileNo
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
                  label: "CNIC no",
                  placeholder: "234545",
                  name: "cnicNo",
                  type: "tel",
                  value: cnicNo
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFields__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  label: "City",
                  placeholder: "Hyderabad",
                  name: "city",
                  type: "text",
                  value: city
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFields__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  label: "Status",
                  placeholder: "Hire/Not Hire",
                  name: "status",
                  type: "text",
                  value: status
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-md-12",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFields__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  label: "Address",
                  placeholder: "house no 234",
                  name: "address",
                  type: "text",
                  value: address
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
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
                  lineNumber: 133,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(index, "ONTFGvFcOhkBhuUwwjQDmY5NRmQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvRm9ybWlrRm9ybS5qc3giXSwibmFtZXMiOlsiaW5kZXgiLCJ1c2VTdGF0ZSIsImZ1bGxOYW1lIiwiZW1haWwiLCJtb2JpbGVObyIsImNuaWNObyIsImNpdHkiLCJzdGF0dXMiLCJhZGRyZXNzIiwidXNlciIsInNldFVzZXIiLCJvbklucHV0Q2hhbmdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsInZhbGlkYXRlIiwiWXVwIiwibWF4IiwicmVxdWlyZWQiLCJ2YWx1ZXMiLCJmb3JtaWsiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUM7QUFDL0JDLFlBQVEsRUFBRSxFQURxQjtBQUUvQkMsU0FBSyxFQUFFLEVBRndCO0FBRy9CQyxZQUFRLEVBQUUsRUFIcUI7QUFJL0JDLFVBQU0sRUFBRSxFQUp1QjtBQUsvQkMsUUFBSSxFQUFFLEVBTHlCO0FBTS9CQyxVQUFNLEVBQUUsRUFOdUI7QUFPL0JDLFdBQU8sRUFBRTtBQVBzQixHQUFELENBRGQ7QUFBQSxNQUNYQyxJQURXO0FBQUEsTUFDTEMsT0FESzs7QUFVbEIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxDQUFELEVBQU87QUFDM0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBckI7QUFDRCxHQUZEOztBQUlBLE1BQU1DLFFBQVEsR0FBR0MsMENBQUEsQ0FBVztBQUMxQmhCLFlBQVEsRUFBRWdCLDBDQUFBLEdBQ1BDLEdBRE8sQ0FDSCxFQURHLEVBQ0MsOEJBREQsRUFFUEMsUUFGTyxDQUVFLGtCQUZG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QUVFLDJCQUFTLEVBQUMsaUJBRlo7QUFHRSx1QkFBSyxFQUFFO0FBQ0xlLDJCQUFPLEVBQUUsV0FESjtBQUVMQyw0QkFBUSxFQUFFLE1BRkw7QUFHTEMsNkJBQVMsRUFBRTtBQUhOLG1CQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBOURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQ7QUFBQTtBQWZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWdIRCxDQW5KRDs7R0FBTXpCLEs7O0FBcUpTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbXBsb3llZXMtbWFuYWdlbWVudC91c2Vycy9BZGRVc2VyLjI3N2Y1YTc0MjA2OWY3Mjk2NjdkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgRm9ybUZpZWxkcyBmcm9tIFwiLi9Gb3JtRmllbGRzXCI7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcclxuICAgIGZ1bGxOYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBtb2JpbGVObzogXCJcIixcclxuICAgIGNuaWNObzogXCJcIixcclxuICAgIGNpdHk6IFwiXCIsXHJcbiAgICBzdGF0dXM6IFwiXCIsXHJcbiAgICBhZGRyZXNzOiBcIlwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IG9uSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRlID0gWXVwLm9iamVjdCh7XHJcbiAgICBmdWxsTmFtZTogWXVwLnN0cmluZygpXHJcbiAgICAgIC5tYXgoMTUsIFwiTXVzdCBiZSAxNSBjaGFyYWN0ZXIgb3IgbGVzc1wiKVxyXG4gICAgICAucmVxdWlyZWQoXCJOYW1lIGlzIHJlcXVpcmVkXCIpLFxyXG4gICAgZW1haWw6IFl1cC5zdHJpbmcoKS5lbWFpbChcIkVtYWlsIGlzIGludmFsaWRcIikucmVxdWlyZWQoXCJFbWFpIGlzIHJlcXVpcmVkXCIpLFxyXG4gICAgbW9iaWxlTm86IFl1cC5zdHJpbmcoKVxyXG4gICAgICAubWF4KDE1LCBcIk1vYmlsZSBubyBpcyBpbnZhbGlkXCIpXHJcbiAgICAgIC5yZXF1aXJlZChcIk1vYmlsZSBubyBpcyByZXF1aXJlZFwiKSxcclxuICAgIGNuaWNObzogWXVwLnN0cmluZygpXHJcbiAgICAgIC5tYXgoMjAsIFwiQ05JQyBubyBpcyBpbnZhbGlkXCIpXHJcbiAgICAgIC5yZXF1aXJlZChcIkNOSUMgbmkgaXMgcmVxdWlyZWRcIiksXHJcbiAgICBjaXR5OiBZdXAuc3RyaW5nKClcclxuICAgICAgLm1heCgyMCwgXCJDTklDIG5vIGlzIGludmFsaWRcIilcclxuICAgICAgLnJlcXVpcmVkKFwiQ2l0eSBpcyByZXF1aXJlZFwiKSxcclxuICAgIHN0YXR1czogWXVwLnN0cmluZygpXHJcbiAgICAgIC5tYXgoMjAsIFwiQ05JQyBubyBpcyBpbnZhbGlkXCIpXHJcbiAgICAgIC5yZXF1aXJlZChcIlN0YXR1cyBpcyByZXF1aXJlZFwiKSxcclxuICAgIGFkZHJlc3M6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAubWF4KDUwLCBcIkNOSUMgbm8gaXMgaW52YWxpZFwiKVxyXG4gICAgICAucmVxdWlyZWQoXCJBZGRyZXNzIGlzIHJlcXVpcmVkXCIpLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybWlrXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgZnVsbE5hbWU6IFwiXCIsXHJcbiAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgIG1vYmlsZU5vOiBcIlwiLFxyXG4gICAgICAgICAgY25pY05vOiBcIlwiLFxyXG4gICAgICAgICAgY2l0eTogXCJcIixcclxuICAgICAgICAgIHN0YXR1czogXCJcIixcclxuICAgICAgICAgIGFkZHJlc3M6IFwiXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXt2YWxpZGF0ZX1cclxuICAgICAgICBvblN1Ym1pdD17KHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgeyhmb3JtaWspID0+IChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J215LTQgZm9udC13ZWlnaHQtYm9sZC1kaXNwbGF5LTQnPlxyXG4gICAgICAgICAgICAgIEFkZCBOZXcgRW1wbG95ZWVcclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTYnPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdGdWxsIE5hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1dhaGFiIEtoYW4gJ1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2Z1bGxOYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Z1bGxOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25JbnB1dENoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02Jz5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRW1haWwnXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J3dhaGFiQGdtYWlsLmNvbSdcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNic+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J01vYmlsZSBubydcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nMTIzMTIzJ1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J21vYmlsZU5vJ1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bW9iaWxlTm99XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNic+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0NOSUMgbm8nXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9JzIzNDU0NSdcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdjbmljTm8nXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGVsJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjbmljTm99XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNic+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0NpdHknXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0h5ZGVyYWJhZCdcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdjaXR5J1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NpdHl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNic+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1N0YXR1cydcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nSGlyZS9Ob3QgSGlyZSdcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdzdGF0dXMnXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTEyJz5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQWRkcmVzcydcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0naG91c2Ugbm8gMjM0J1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2FkZHJlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeSdcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4IDIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Zvcm1paz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==