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
/* harmony import */ var E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _FormFields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormFields */ "./pages/employees-management/users/FormFields.jsx");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "E:\\FYP\\admin-dashboard\\martfury-admin-react\\pages\\employees-management\\users\\FormikForm.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var index = function index() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
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

  var fullName = user.fullName,
      email = user.email,
      mobileNo = user.mobileNo,
      cnicNo = user.cnicNo,
      city = user.city,
      status = user.status,
      address = user.address;

  var onInputChange = function onInputChange(e) {
    // console.log(e.target.value);
    setUser(_objectSpread(_objectSpread({}, user), {}, Object(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, e.target.fullName, e.target.value)));
  };

  var _onSubmit = /*#__PURE__*/function () {
    var _ref = Object(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      return E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("http://localhost:3001/users", user);

            case 3:
              router.push("/");

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var validate = yup__WEBPACK_IMPORTED_MODULE_7__["object"]({
    fullName: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().max(15, "Must be 15 character or less").required("Name is required"),
    email: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().email("Email is invalid").required("Emai is required"),
    mobileNo: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().max(15, "Mobile no is invalid").required("Mobile no is required"),
    cnicNo: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().max(20, "CNIC no is invalid").required("CNIC ni is required"),
    city: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().max(20, "CNIC no is invalid").required("City is required"),
    status: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().max(20, "CNIC no is invalid").required("Status is required"),
    address: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().max(50, "CNIC no is invalid").required("Address is required")
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
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
      onSubmit: function onSubmit(values) {// console.log(values);
      },
      children: function children(formik) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "my-4 font-weight-bold-display-4",
            children: "Add New Employee"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_5__["Form"], {
            onSubmit: function onSubmit(e) {
              return _onSubmit(e);
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFields__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
                  lineNumber: 75,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFields__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  label: "Email",
                  placeholder: "wahab@gmail.com",
                  name: "email",
                  type: "email",
                  value: email,
                  onChange: function onChange(e) {
                    return onInputChange(e);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFields__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  label: "Mobile no",
                  placeholder: "123123",
                  name: "mobileNo",
                  type: "tel",
                  value: mobileNo,
                  onChange: function onChange(e) {
                    return onInputChange(e);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFields__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  label: "CNIC no",
                  placeholder: "234545",
                  name: "cnicNo",
                  type: "tel",
                  value: cnicNo,
                  onChange: function onChange(e) {
                    return onInputChange(e);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFields__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  label: "City",
                  placeholder: "Hyderabad",
                  name: "city",
                  type: "text",
                  value: city,
                  onChange: function onChange(e) {
                    return onInputChange(e);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFields__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  label: "Status",
                  placeholder: "Hire/Not Hire",
                  name: "status",
                  type: "text",
                  value: status,
                  onChange: function onChange(e) {
                    return onInputChange(e);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-md-12",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFields__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  label: "Address",
                  placeholder: "house no 234",
                  name: "address",
                  type: "text",
                  value: address,
                  onChange: function onChange(e) {
                    return onInputChange(e);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
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
                  lineNumber: 149,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(index, "+wukb44ET8r8CcAY31QpBovt3YA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvRm9ybWlrRm9ybS5qc3giXSwibmFtZXMiOlsiaW5kZXgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImZ1bGxOYW1lIiwiZW1haWwiLCJtb2JpbGVObyIsImNuaWNObyIsImNpdHkiLCJzdGF0dXMiLCJhZGRyZXNzIiwidXNlciIsInNldFVzZXIiLCJvbklucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsIkF4aW9zIiwicG9zdCIsInB1c2giLCJ2YWxpZGF0ZSIsIll1cCIsIm1heCIsInJlcXVpcmVkIiwidmFsdWVzIiwiZm9ybWlrIiwicGFkZGluZyIsImZvbnRTaXplIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEa0Isa0JBRU1DLHNEQUFRLENBQUM7QUFDL0JDLFlBQVEsRUFBRSxFQURxQjtBQUUvQkMsU0FBSyxFQUFFLEVBRndCO0FBRy9CQyxZQUFRLEVBQUUsRUFIcUI7QUFJL0JDLFVBQU0sRUFBRSxFQUp1QjtBQUsvQkMsUUFBSSxFQUFFLEVBTHlCO0FBTS9CQyxVQUFNLEVBQUUsRUFOdUI7QUFPL0JDLFdBQU8sRUFBRTtBQVBzQixHQUFELENBRmQ7QUFBQSxNQUVYQyxJQUZXO0FBQUEsTUFFTEMsT0FGSzs7QUFBQSxNQVdWUixRQVhVLEdBV21ETyxJQVhuRCxDQVdWUCxRQVhVO0FBQUEsTUFXQUMsS0FYQSxHQVdtRE0sSUFYbkQsQ0FXQU4sS0FYQTtBQUFBLE1BV09DLFFBWFAsR0FXbURLLElBWG5ELENBV09M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QUFBSyx1QkFBUyxFQUFDLEtBQWY7QUFBQSxxQ0FDRTtBQUFLLHlCQUFTLEVBQUMsV0FBZjtBQUFBLHdDQUNFLHFFQUFDLG1EQUFEO0FBQ0UsdUJBQUssRUFBQyxTQURSO0FBRUUsNkJBQVcsRUFBQyxjQUZkO0FBR0Usc0JBQUksRUFBQyxTQUhQO0FBSUUsc0JBQUksRUFBQyxNQUpQO0FBS0UsdUJBQUssRUFBRUosT0FMVDtBQU1FLDBCQUFRLEVBQUUsa0JBQUNJLENBQUQ7QUFBQSwyQkFBT0QsYUFBYSxDQUFDQyxDQUFELENBQXBCO0FBQUE7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBU0U7QUFDRSxzQkFBSSxFQUFDLFFBRFA7QUFFRSwyQkFBUyxFQUFDLGlCQUZaO0FBR0UsdUJBQUssRUFBRTtBQUNMYywyQkFBTyxFQUFFLFdBREo7QUFFTEMsNEJBQVEsRUFBRSxNQUZMO0FBR0xDLDZCQUFTLEVBQUU7QUFITixtQkFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQW5FRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBQUE7QUFmSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFzSEQsQ0FqS0Q7O0dBQU05QixLO1VBQ1dFLHFEOzs7QUFrS0ZGLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VtcGxveWVlcy1tYW5hZ2VtZW50L3VzZXJzL0FkZFVzZXIuOGFkMWVjNjBmODMyY2YyM2MxNDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0gfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCBGb3JtRmllbGRzIGZyb20gXCIuL0Zvcm1GaWVsZHNcIjtcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuY29uc3QgaW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgZnVsbE5hbWU6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIG1vYmlsZU5vOiBcIlwiLFxyXG4gICAgY25pY05vOiBcIlwiLFxyXG4gICAgY2l0eTogXCJcIixcclxuICAgIHN0YXR1czogXCJcIixcclxuICAgIGFkZHJlc3M6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgeyBmdWxsTmFtZSwgZW1haWwsIG1vYmlsZU5vLCBjbmljTm8sIGNpdHksIHN0YXR1cywgYWRkcmVzcyB9ID0gdXNlcjtcclxuICBjb25zdCBvbklucHV0Q2hhbmdlID0gKGUpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIHNldFVzZXIoeyAuLi51c2VyLCBbZS50YXJnZXQuZnVsbE5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICB9O1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGF3YWl0IEF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvdXNlcnNcIiwgdXNlcik7XHJcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdmFsaWRhdGUgPSBZdXAub2JqZWN0KHtcclxuICAgIGZ1bGxOYW1lOiBZdXAuc3RyaW5nKClcclxuICAgICAgLm1heCgxNSwgXCJNdXN0IGJlIDE1IGNoYXJhY3RlciBvciBsZXNzXCIpXHJcbiAgICAgIC5yZXF1aXJlZChcIk5hbWUgaXMgcmVxdWlyZWRcIiksXHJcbiAgICBlbWFpbDogWXVwLnN0cmluZygpLmVtYWlsKFwiRW1haWwgaXMgaW52YWxpZFwiKS5yZXF1aXJlZChcIkVtYWkgaXMgcmVxdWlyZWRcIiksXHJcbiAgICBtb2JpbGVObzogWXVwLnN0cmluZygpXHJcbiAgICAgIC5tYXgoMTUsIFwiTW9iaWxlIG5vIGlzIGludmFsaWRcIilcclxuICAgICAgLnJlcXVpcmVkKFwiTW9iaWxlIG5vIGlzIHJlcXVpcmVkXCIpLFxyXG4gICAgY25pY05vOiBZdXAuc3RyaW5nKClcclxuICAgICAgLm1heCgyMCwgXCJDTklDIG5vIGlzIGludmFsaWRcIilcclxuICAgICAgLnJlcXVpcmVkKFwiQ05JQyBuaSBpcyByZXF1aXJlZFwiKSxcclxuICAgIGNpdHk6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAubWF4KDIwLCBcIkNOSUMgbm8gaXMgaW52YWxpZFwiKVxyXG4gICAgICAucmVxdWlyZWQoXCJDaXR5IGlzIHJlcXVpcmVkXCIpLFxyXG4gICAgc3RhdHVzOiBZdXAuc3RyaW5nKClcclxuICAgICAgLm1heCgyMCwgXCJDTklDIG5vIGlzIGludmFsaWRcIilcclxuICAgICAgLnJlcXVpcmVkKFwiU3RhdHVzIGlzIHJlcXVpcmVkXCIpLFxyXG4gICAgYWRkcmVzczogWXVwLnN0cmluZygpXHJcbiAgICAgIC5tYXgoNTAsIFwiQ05JQyBubyBpcyBpbnZhbGlkXCIpXHJcbiAgICAgIC5yZXF1aXJlZChcIkFkZHJlc3MgaXMgcmVxdWlyZWRcIiksXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICBmdWxsTmFtZTogXCJcIixcclxuICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgbW9iaWxlTm86IFwiXCIsXHJcbiAgICAgICAgICBjbmljTm86IFwiXCIsXHJcbiAgICAgICAgICBjaXR5OiBcIlwiLFxyXG4gICAgICAgICAgc3RhdHVzOiBcIlwiLFxyXG4gICAgICAgICAgYWRkcmVzczogXCJcIixcclxuICAgICAgICB9fVxyXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e3ZhbGlkYXRlfVxyXG4gICAgICAgIG9uU3VibWl0PXsodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7KGZvcm1paykgPT4gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nbXktNCBmb250LXdlaWdodC1ib2xkLWRpc3BsYXktNCc+XHJcbiAgICAgICAgICAgICAgQWRkIE5ldyBFbXBsb3llZVxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17KGUpID0+IG9uU3VibWl0KGUpfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNic+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0Z1bGwgTmFtZSdcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nV2FoYWIgS2hhbiAnXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZnVsbE5hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZnVsbE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTYnPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdFbWFpbCdcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nd2FoYWJAZ21haWwuY29tJ1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uSW5wdXRDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNic+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J01vYmlsZSBubydcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nMTIzMTIzJ1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J21vYmlsZU5vJ1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bW9iaWxlTm99XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTYnPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdDTklDIG5vJ1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPScyMzQ1NDUnXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nY25pY05vJ1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y25pY05vfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25JbnB1dENoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02Jz5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQ2l0eSdcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nSHlkZXJhYmFkJ1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2NpdHknXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2l0eX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uSW5wdXRDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNic+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1N0YXR1cydcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nSGlyZS9Ob3QgSGlyZSdcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdzdGF0dXMnXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25JbnB1dENoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC0xMic+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0FkZHJlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2hvdXNlIG5vIDIzNCdcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdhZGRyZXNzJ1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5J1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHggMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRm9ybWlrPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9