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
                  type: "text" // value={fullName}
                  ,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvRm9ybWlrRm9ybS5qc3giXSwibmFtZXMiOlsiaW5kZXgiLCJ1c2VTdGF0ZSIsImZ1bGxOYW1lIiwiZW1haWwiLCJtb2JpbGVObyIsImNuaWNObyIsImNpdHkiLCJzdGF0dXMiLCJhZGRyZXNzIiwidXNlciIsInNldFVzZXIiLCJvbklucHV0Q2hhbmdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsInZhbGlkYXRlIiwiWXVwIiwibWF4IiwicmVxdWlyZWQiLCJ2YWx1ZXMiLCJmb3JtaWsiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUM7QUFDL0JDLFlBQVEsRUFBRSxFQURxQjtBQUUvQkMsU0FBSyxFQUFFLEVBRndCO0FBRy9CQyxZQUFRLEVBQUUsRUFIcUI7QUFJL0JDLFVBQU0sRUFBRSxFQUp1QjtBQUsvQkMsUUFBSSxFQUFFLEVBTHlCO0FBTS9CQyxVQUFNLEVBQUUsRUFOdUI7QUFPL0JDLFdBQU8sRUFBRTtBQVBzQixHQUFELENBRGQ7QUFBQSxNQUNYQyxJQURXO0FBQUEsTUFDTEMsT0FESzs7QUFVbEIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxDQUFELEVBQU87QUFDM0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBckI7QUFDRCxHQUZEOztBQUlBLE1BQU1DLFFBQVEsR0FBR0MsMENBQUEsQ0FBVztBQUMxQmhCLFlBQVEsRUFBRWdCLDBDQUFBLEdBQ1BDLEdBRE8sQ0FDSCxFQURHLEVBQ0MsOEJBREQsRUFFUEMsUUFGTyxDQUVFLGtCQUZGLENBRGdCO0FBSTFCakIsU0FBSyxFQUFFZSwwQ0FBQSxHQUFhZixLQUFiLENBQW1CLGtCQUFuQixFQUF1Q2lCLFFBQXZDLENBQWdELGtCQUFoRCxDQUptQjtBQUsxQmhCLFlBQVEsRUFBRWMsMENBQUEsR0FDUEMsR0FETyxDQUNILEVBREcsRUFDQyxzQkFERCxFQUVQQyxRQUZPLENBRUUsdUJBRkYsQ0FMZ0I7QUFRMUJmLFVBQU0sRUFBRWEsMENBQUEsR0FDTEMsR0FESyxDQUNELEVBREMsRUFDRyxvQkFESCxFQUVMQyxRQUZLLENBRUkscUJBRkosQ0FSa0I7QUFXMUJkLFFBQUksRUFBRVksMENBQUEsR0FDSEMsR0FERyxDQUNDLEVBREQsRUFDSyxvQkFETCxFQUVIQyxRQUZHLENBRU0sa0JBRk4sQ0FYb0I7QUFjMUJiLFVBQU0sRUFBRVcsMENBQUEsR0FDTEMsR0FESyxDQUNELEVBREMsRUFDRyxvQkFESCxFQUVMQyxRQUZLLENBRUksb0JBRkosQ0Fka0I7QUFpQjFCWixXQUFPLEVBQUVVLDBDQUFBLEdBQ05DLEdBRE0sQ0FDRixFQURFLEVBQ0Usb0JBREYsRUFFTkMsUUFGTSxDQUVHLHFCQUZIO0FBakJpQixHQUFYLENBQWpCO0FBcUJBLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsNkNBQUQ7QUFDRSxtQkFBYSxFQUFFO0FBQ2JsQixnQkFBUSxFQUFFLEVBREc7QUFFYkMsYUFBSyxFQUFFLEVBRk07QUFHYkMsZ0JBQVEsRUFBRSxFQUhHO0FBSWJDLGNBQU0sRUFBRSxFQUpLO0FBS2JDLFlBQUksRUFBRSxFQUxPO0FBTWJDLGNBQU0sRUFBRSxFQU5LO0FBT2JDLGVBQU8sRUFBRTtBQVBJLE9BRGpCO0FBVUUsc0JBQWdCLEVBQUVTLFFBVnBCO0FBV0UsY0FBUSxFQUFFLGtCQUFDSSxNQUFELEVBQVk7QUFDcEJSLGVBQU8sQ0FBQ0MsR0FBUixDQUFZTyxNQUFaO0FBQ0QsT0FiSDtBQUFBLGdCQWVHLGtCQUFDQyxNQUFEO0FBQUEsNEJBQ0M7QUFBQSxrQ0FDRTtBQUFJLHFCQUFTLEVBQUMsaUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRSxxRUFBQywyQ0FBRDtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBQyxLQUFmO0FBQUEsc0NBQ0U7QUFBSyx5QkFBUyxFQUFDLE9BQWY7QUFBQSx1Q0FDRSxxRUFBQyxtREFBRDtBQUNFLHVCQUFLLEVBQUMsV0FEUjtBQUVFLDZCQUFXLEVBQUMsYUFGZDtBQUdFLHNCQUFJLEVBQUMsVUFIUDtBQUlFLHNCQUFJLEVBQUMsTUFKUCxDQUtFO0FBTEY7QUFNRSwwQkFBUSxFQUFFLGtCQUFDVixDQUFEO0FBQUEsMkJBQU9ELGFBQWEsQ0FBQ0MsQ0FBRCxDQUFwQjtBQUFBO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFXRTtBQUFLLHlCQUFTLEVBQUMsT0FBZjtBQUFBLHVDQUNFLHFFQUFDLG1EQUFEO0FBQ0UsdUJBQUssRUFBQyxPQURSO0FBRUUsNkJBQVcsRUFBQyxpQkFGZDtBQUdFLHNCQUFJLEVBQUMsT0FIUDtBQUlFLHNCQUFJLEVBQUMsT0FKUDtBQUtFLHVCQUFLLEVBQUVUO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBc0JFO0FBQUssdUJBQVMsRUFBQyxLQUFmO0FBQUEsc0NBQ0U7QUFBSyx5QkFBUyxFQUFDLE9BQWY7QUFBQSx1Q0FDRSxxRUFBQyxtREFBRDtBQUNFLHVCQUFLLEVBQUMsV0FEUjtBQUVFLDZCQUFXLEVBQUMsUUFGZDtBQUdFLHNCQUFJLEVBQUMsVUFIUDtBQUlFLHNCQUFJLEVBQUMsS0FKUDtBQUtFLHVCQUFLLEVBQUVDO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFVRTtBQUFLLHlCQUFTLEVBQUMsT0FBZjtBQUFBLHVDQUNFLHFFQUFDLG1EQUFEO0FBQ0UsdUJBQUssRUFBQyxTQURSO0FBRUUsNkJBQVcsRUFBQyxRQUZkO0FBR0Usc0JBQUksRUFBQyxRQUhQO0FBSUUsc0JBQUksRUFBQyxLQUpQO0FBS0UsdUJBQUssRUFBRUM7QUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBdEJGLGVBMENFO0FBQUssdUJBQVMsRUFBQyxLQUFmO0FBQUEsc0NBQ0U7QUFBSyx5QkFBUyxFQUFDLE9BQWY7QUFBQSx1Q0FDRSxxRUFBQyxtREFBRDtBQUNFLHVCQUFLLEVBQUMsTUFEUjtBQUVFLDZCQUFXLEVBQUMsV0FGZDtBQUdFLHNCQUFJLEVBQUMsTUFIUDtBQUlFLHNCQUFJLEVBQUMsTUFKUDtBQUtFLHVCQUFLLEVBQUVDO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFVRTtBQUFLLHlCQUFTLEVBQUMsT0FBZjtBQUFBLHVDQUNFLHFFQUFDLG1EQUFEO0FBQ0UsdUJBQUssRUFBQyxRQURSO0FBRUUsNkJBQVcsRUFBQyxlQUZkO0FBR0Usc0JBQUksRUFBQyxRQUhQO0FBSUUsc0JBQUksRUFBQyxNQUpQO0FBS0UsdUJBQUssRUFBRUM7QUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBMUNGLGVBOERFO0FBQUssdUJBQVMsRUFBQyxLQUFmO0FBQUEscUNBQ0U7QUFBSyx5QkFBUyxFQUFDLFdBQWY7QUFBQSx3Q0FDRSxxRUFBQyxtREFBRDtBQUNFLHVCQUFLLEVBQUMsU0FEUjtBQUVFLDZCQUFXLEVBQUMsY0FGZDtBQUdFLHNCQUFJLEVBQUMsU0FIUDtBQUlFLHNCQUFJLEVBQUMsTUFKUDtBQUtFLHVCQUFLLEVBQUVDO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQVFFO0FBQ0Usc0JBQUksRUFBQyxRQURQO0FBRUUsMkJBQVMsRUFBQyxpQkFGWjtBQUdFLHVCQUFLLEVBQUU7QUFDTGUsMkJBQU8sRUFBRSxXQURKO0FBRUxDLDRCQUFRLEVBQUUsTUFGTDtBQUdMQyw2QkFBUyxFQUFFO0FBSE4sbUJBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE5REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERDtBQUFBO0FBZkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBZ0hELENBbkpEOztHQUFNekIsSzs7QUFxSlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VtcGxveWVlcy1tYW5hZ2VtZW50L3VzZXJzL0FkZFVzZXIuZGJlN2Y2MzRlMDZlMmFkNWViY2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0gfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCBGb3JtRmllbGRzIGZyb20gXCIuL0Zvcm1GaWVsZHNcIjtcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcclxuY29uc3QgaW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgZnVsbE5hbWU6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIG1vYmlsZU5vOiBcIlwiLFxyXG4gICAgY25pY05vOiBcIlwiLFxyXG4gICAgY2l0eTogXCJcIixcclxuICAgIHN0YXR1czogXCJcIixcclxuICAgIGFkZHJlc3M6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3Qgb25JbnB1dENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdmFsaWRhdGUgPSBZdXAub2JqZWN0KHtcclxuICAgIGZ1bGxOYW1lOiBZdXAuc3RyaW5nKClcclxuICAgICAgLm1heCgxNSwgXCJNdXN0IGJlIDE1IGNoYXJhY3RlciBvciBsZXNzXCIpXHJcbiAgICAgIC5yZXF1aXJlZChcIk5hbWUgaXMgcmVxdWlyZWRcIiksXHJcbiAgICBlbWFpbDogWXVwLnN0cmluZygpLmVtYWlsKFwiRW1haWwgaXMgaW52YWxpZFwiKS5yZXF1aXJlZChcIkVtYWkgaXMgcmVxdWlyZWRcIiksXHJcbiAgICBtb2JpbGVObzogWXVwLnN0cmluZygpXHJcbiAgICAgIC5tYXgoMTUsIFwiTW9iaWxlIG5vIGlzIGludmFsaWRcIilcclxuICAgICAgLnJlcXVpcmVkKFwiTW9iaWxlIG5vIGlzIHJlcXVpcmVkXCIpLFxyXG4gICAgY25pY05vOiBZdXAuc3RyaW5nKClcclxuICAgICAgLm1heCgyMCwgXCJDTklDIG5vIGlzIGludmFsaWRcIilcclxuICAgICAgLnJlcXVpcmVkKFwiQ05JQyBuaSBpcyByZXF1aXJlZFwiKSxcclxuICAgIGNpdHk6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAubWF4KDIwLCBcIkNOSUMgbm8gaXMgaW52YWxpZFwiKVxyXG4gICAgICAucmVxdWlyZWQoXCJDaXR5IGlzIHJlcXVpcmVkXCIpLFxyXG4gICAgc3RhdHVzOiBZdXAuc3RyaW5nKClcclxuICAgICAgLm1heCgyMCwgXCJDTklDIG5vIGlzIGludmFsaWRcIilcclxuICAgICAgLnJlcXVpcmVkKFwiU3RhdHVzIGlzIHJlcXVpcmVkXCIpLFxyXG4gICAgYWRkcmVzczogWXVwLnN0cmluZygpXHJcbiAgICAgIC5tYXgoNTAsIFwiQ05JQyBubyBpcyBpbnZhbGlkXCIpXHJcbiAgICAgIC5yZXF1aXJlZChcIkFkZHJlc3MgaXMgcmVxdWlyZWRcIiksXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICBmdWxsTmFtZTogXCJcIixcclxuICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgbW9iaWxlTm86IFwiXCIsXHJcbiAgICAgICAgICBjbmljTm86IFwiXCIsXHJcbiAgICAgICAgICBjaXR5OiBcIlwiLFxyXG4gICAgICAgICAgc3RhdHVzOiBcIlwiLFxyXG4gICAgICAgICAgYWRkcmVzczogXCJcIixcclxuICAgICAgICB9fVxyXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e3ZhbGlkYXRlfVxyXG4gICAgICAgIG9uU3VibWl0PXsodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7KGZvcm1paykgPT4gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nbXktNCBmb250LXdlaWdodC1ib2xkLWRpc3BsYXktNCc+XHJcbiAgICAgICAgICAgICAgQWRkIE5ldyBFbXBsb3llZVxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNic+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0Z1bGwgTmFtZSdcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nV2FoYWIgS2hhbiAnXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZnVsbE5hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZT17ZnVsbE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTYnPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdFbWFpbCdcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nd2FoYWJAZ21haWwuY29tJ1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02Jz5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nTW9iaWxlIG5vJ1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPScxMjMxMjMnXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nbW9iaWxlTm8nXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGVsJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXttb2JpbGVOb31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02Jz5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQ05JQyBubydcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nMjM0NTQ1J1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2NuaWNObydcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NuaWNOb31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02Jz5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQ2l0eSdcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nSHlkZXJhYmFkJ1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2NpdHknXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2l0eX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02Jz5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nU3RhdHVzJ1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdIaXJlL05vdCBIaXJlJ1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3N0YXR1cydcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtMTInPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdBZGRyZXNzJ1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdob3VzZSBubyAyMzQnXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nYWRkcmVzcydcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXthZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5J1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHggMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRm9ybWlrPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9