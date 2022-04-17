webpackHotUpdate_N_E("pages/employees-management/users/AddUser",{

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

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






var _jsxFileName = "E:\\FYP\\admin-dashboard\\martfury-admin-react\\pages\\employees-management\\users\\FormikForm.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var index = function index() {
  _s();

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

            case 1:
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
            lineNumber: 64,
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
                  lineNumber: 70,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
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
                  lineNumber: 80,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
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
                  lineNumber: 92,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
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
                  lineNumber: 102,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
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
                  lineNumber: 114,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
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
                  lineNumber: 124,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 112,
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
                  lineNumber: 136,
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
                  lineNumber: 144,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2VtcGxveWVlcy1tYW5hZ2VtZW50L3VzZXJzL0Zvcm1pa0Zvcm0uanN4Il0sIm5hbWVzIjpbImluZGV4IiwidXNlU3RhdGUiLCJmdWxsTmFtZSIsImVtYWlsIiwibW9iaWxlTm8iLCJjbmljTm8iLCJjaXR5Iiwic3RhdHVzIiwiYWRkcmVzcyIsInVzZXIiLCJzZXRVc2VyIiwib25JbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0ZSIsIll1cCIsIm1heCIsInJlcXVpcmVkIiwidmFsdWVzIiwiZm9ybWlrIiwicGFkZGluZyIsImZvbnRTaXplIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQztBQUMvQkMsWUFBUSxFQUFFLEVBRHFCO0FBRS9CQyxTQUFLLEVBQUUsRUFGd0I7QUFHL0JDLFlBQVEsRUFBRSxFQUhxQjtBQUkvQkMsVUFBTSxFQUFFLEVBSnVCO0FBSy9CQyxRQUFJLEVBQUUsRUFMeUI7QUFNL0JD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QUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE3Q0YsZUFtRUU7QUFBSyx1QkFBUyxFQUFDLEtBQWY7QUFBQSxxQ0FDRTtBQUFLLHlCQUFTLEVBQUMsV0FBZjtBQUFBLHdDQUNFLHFFQUFDLG1EQUFEO0FBQ0UsdUJBQUssRUFBQyxTQURSO0FBRUUsNkJBQVcsRUFBQyxjQUZkO0FBR0Usc0JBQUksRUFBQyxTQUhQO0FBSUUsc0JBQUksRUFBQyxNQUpQO0FBS0UsdUJBQUssRUFBRUosT0FMVDtBQU1FLDBCQUFRLEVBQUUsa0JBQUNJLENBQUQ7QUFBQSwyQkFBT0QsYUFBYSxDQUFDQyxDQUFELENBQXBCO0FBQUE7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBU0U7QUFDRSxzQkFBSSxFQUFDLFFBRFA7QUFFRSwyQkFBUyxFQUFDLGlCQUZaO0FBR0UsdUJBQUssRUFBRTtBQUNMVywyQkFBTyxFQUFFLFdBREo7QUFFTEMsNEJBQVEsRUFBRSxNQUZMO0FBR0xDLDZCQUFTLEVBQUU7QUFITixtQkFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQW5FRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBQUE7QUFmSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFzSEQsQ0E5SkQ7O0dBQU16QixLOztBQWdLU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvQWRkVXNlci40ODA1MGE1MWMxNmNmNjA1ZmM0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IEZvcm1GaWVsZHMgZnJvbSBcIi4vRm9ybUZpZWxkc1wiO1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBmdWxsTmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgbW9iaWxlTm86IFwiXCIsXHJcbiAgICBjbmljTm86IFwiXCIsXHJcbiAgICBjaXR5OiBcIlwiLFxyXG4gICAgc3RhdHVzOiBcIlwiLFxyXG4gICAgYWRkcmVzczogXCJcIixcclxuICB9KTtcclxuICBjb25zdCB7IGZ1bGxOYW1lLCBlbWFpbCwgbW9iaWxlTm8sIGNuaWNObywgY2l0eSwgc3RhdHVzLCBhZGRyZXNzIH0gPSB1c2VyO1xyXG4gIGNvbnN0IG9uSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0VXNlcih7IC4uLnVzZXIsIFtlLnRhcmdldC5mdWxsTmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRlID0gWXVwLm9iamVjdCh7XHJcbiAgICBmdWxsTmFtZTogWXVwLnN0cmluZygpXHJcbiAgICAgIC5tYXgoMTUsIFwiTXVzdCBiZSAxNSBjaGFyYWN0ZXIgb3IgbGVzc1wiKVxyXG4gICAgICAucmVxdWlyZWQoXCJOYW1lIGlzIHJlcXVpcmVkXCIpLFxyXG4gICAgZW1haWw6IFl1cC5zdHJpbmcoKS5lbWFpbChcIkVtYWlsIGlzIGludmFsaWRcIikucmVxdWlyZWQoXCJFbWFpIGlzIHJlcXVpcmVkXCIpLFxyXG4gICAgbW9iaWxlTm86IFl1cC5zdHJpbmcoKVxyXG4gICAgICAubWF4KDE1LCBcIk1vYmlsZSBubyBpcyBpbnZhbGlkXCIpXHJcbiAgICAgIC5yZXF1aXJlZChcIk1vYmlsZSBubyBpcyByZXF1aXJlZFwiKSxcclxuICAgIGNuaWNObzogWXVwLnN0cmluZygpXHJcbiAgICAgIC5tYXgoMjAsIFwiQ05JQyBubyBpcyBpbnZhbGlkXCIpXHJcbiAgICAgIC5yZXF1aXJlZChcIkNOSUMgbmkgaXMgcmVxdWlyZWRcIiksXHJcbiAgICBjaXR5OiBZdXAuc3RyaW5nKClcclxuICAgICAgLm1heCgyMCwgXCJDTklDIG5vIGlzIGludmFsaWRcIilcclxuICAgICAgLnJlcXVpcmVkKFwiQ2l0eSBpcyByZXF1aXJlZFwiKSxcclxuICAgIHN0YXR1czogWXVwLnN0cmluZygpXHJcbiAgICAgIC5tYXgoMjAsIFwiQ05JQyBubyBpcyBpbnZhbGlkXCIpXHJcbiAgICAgIC5yZXF1aXJlZChcIlN0YXR1cyBpcyByZXF1aXJlZFwiKSxcclxuICAgIGFkZHJlc3M6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAubWF4KDUwLCBcIkNOSUMgbm8gaXMgaW52YWxpZFwiKVxyXG4gICAgICAucmVxdWlyZWQoXCJBZGRyZXNzIGlzIHJlcXVpcmVkXCIpLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybWlrXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgZnVsbE5hbWU6IFwiXCIsXHJcbiAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgIG1vYmlsZU5vOiBcIlwiLFxyXG4gICAgICAgICAgY25pY05vOiBcIlwiLFxyXG4gICAgICAgICAgY2l0eTogXCJcIixcclxuICAgICAgICAgIHN0YXR1czogXCJcIixcclxuICAgICAgICAgIGFkZHJlc3M6IFwiXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXt2YWxpZGF0ZX1cclxuICAgICAgICBvblN1Ym1pdD17KHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWVzKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgeyhmb3JtaWspID0+IChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J215LTQgZm9udC13ZWlnaHQtYm9sZC1kaXNwbGF5LTQnPlxyXG4gICAgICAgICAgICAgIEFkZCBOZXcgRW1wbG95ZWVcclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9eyhlKSA9PiBvblN1Ym1pdChlKX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTYnPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdGdWxsIE5hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1dhaGFiIEtoYW4gJ1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2Z1bGxOYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Z1bGxOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25JbnB1dENoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02Jz5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRW1haWwnXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J3dhaGFiQGdtYWlsLmNvbSdcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTYnPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdNb2JpbGUgbm8nXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9JzEyMzEyMydcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdtb2JpbGVObydcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21vYmlsZU5vfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25JbnB1dENoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02Jz5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQ05JQyBubydcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nMjM0NTQ1J1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2NuaWNObydcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NuaWNOb31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uSW5wdXRDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNic+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0NpdHknXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0h5ZGVyYWJhZCdcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdjaXR5J1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTYnPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdTdGF0dXMnXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0hpcmUvTm90IEhpcmUnXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nc3RhdHVzJ1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uSW5wdXRDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtMTInPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdBZGRyZXNzJ1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdob3VzZSBubyAyMzQnXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nYWRkcmVzcydcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXthZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25JbnB1dENoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeSdcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4IDIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Zvcm1paz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==