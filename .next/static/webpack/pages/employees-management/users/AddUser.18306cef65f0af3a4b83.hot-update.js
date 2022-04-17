webpackHotUpdate_N_E("pages/employees-management/users/AddUser",{

/***/ "./pages/employees-management/users/AddUser.jsx":
/*!******************************************************!*\
  !*** ./pages/employees-management/users/AddUser.jsx ***!
  \******************************************************/
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
/* harmony import */ var _components_layouts_ContainerDefault__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/layouts/ContainerDefault */ "./components/layouts/ContainerDefault.jsx");
/* harmony import */ var _components_shared_headers_HeaderDashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/shared/headers/HeaderDashboard */ "./components/shared/headers/HeaderDashboard.jsx");






var _jsxFileName = "E:\\FYP\\admin-dashboard\\martfury-admin-react\\pages\\employees-management\\users\\AddUser.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // import FormikForm from "./FormikForm";

var AddUser = function AddUser() {
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

  var onSubmit = /*#__PURE__*/function () {
    var _ref = Object(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      return E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return Axios.post("http://localhost:3001/users", user);

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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_ContainerDefault__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Employees Manage",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_headers_HeaderDashboard__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Employees Management",
        description: "Employees Listing "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "form-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "Full Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "email",
              "class": "form-control",
              name: "fullName",
              value: fullName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "User Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "password",
              "class": "form-control"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "form-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "Mobile No"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "tel",
              "class": "form-control"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "CNIC No"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "tel",
              "class": "form-control"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "form-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "email",
              "class": "form-control"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "Country"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              "class": "form-control"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            "for": "inputAddress",
            children: "Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            "class": "form-control",
            id: "inputAddress",
            placeholder: "1234 Main St"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "Address 2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            "class": "form-control",
            id: "inputAddress2",
            placeholder: "Apartment, studio, or floor"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "form-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              "for": "inputCity",
              children: "City"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              "class": "form-control",
              id: "inputCity"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              "for": "inputState",
              children: "Province"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              "class": "form-control",
              placeholder: "Sindh"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              "for": "inputZip",
              children: "Zip"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              "class": "form-control",
              id: "inputZip"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "form-group",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-check",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              "class": "form-check-input",
              type: "checkbox",
              id: "gridCheck"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              "class": "form-check-label",
              "for": "gridCheck",
              children: "Check me out"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          "class": "btn btn-primary",
          children: "Sign in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(AddUser, "ONTFGvFcOhkBhuUwwjQDmY5NRmQ=");

_c = AddUser;
/* harmony default export */ __webpack_exports__["default"] = (AddUser);

var _c;

$RefreshReg$(_c, "AddUser");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvQWRkVXNlci5qc3giXSwibmFtZXMiOlsiQWRkVXNlciIsInVzZVN0YXRlIiwiZnVsbE5hbWUiLCJlbWFpbCIsIm1vYmlsZU5vIiwiY25pY05vIiwiY2l0eSIsInN0YXR1cyIsImFkZHJlc3MiLCJ1c2VyIiwic2V0VXNlciIsIm9uSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiQXhpb3MiLCJwb3N0Iiwicm91dGVyIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLGtCQUNJQyxzREFBUSxDQUFDO0FBQy9CQyxZQUFRLEVBQUUsRUFEcUI7QUFFL0JDLFNBQUssRUFBRSxFQUZ3QjtBQUcvQkMsWUFBUSxFQUFFLEVBSHFCO0FBSS9CQyxVQUFNLEVBQUUsRUFKdUI7QUFLL0JDLFFBQUksRUFBRSxFQUx5QjtBQU0vQkMsVUFBTSxFQUFFLEVBTnVCO0FBTy9CQyxXQUFPLEVBQUU7QUFQc0IsR0FBRCxDQURaO0FBQUEsTUFDYkMsSUFEYTtBQUFBLE1BQ1BDLE9BRE87O0FBQUEsTUFVWlIsUUFWWSxHQVVpRE8sSUFWakQsQ0FVWlAsUUFWWTtBQUFBLE1BVUZDLEtBVkUsR0FVaURNLElBVmpELENBVUZOLEtBVkU7QUFBQSxNQVVLQyxRQVZMLEdBVWlESyxJQVZqRCxDQVVLTCxRQVZMO0FBQUEsTUFVZUMsTUFWZixHQVVpREksSUFWakQsQ0FVZUosTUFWZjtBQUFBLE1BVXVCQyxJQVZ2QixHQVVpREcsSUFWakQsQ0FVdUJILElBVnZCO0FBQUEsTUFVNkJDLE1BVjdCLEdBVWlERSxJQVZqRCxDQVU2QkYsTUFWN0I7QUFBQSxNQVVxQ0MsT0FWckMsR0FV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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBZUU7QUFBSyxxQkFBTSxxQkFBWDtBQUFBLG9DQUNFO0FBQU8scUJBQUksVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQU8sa0JBQUksRUFBQyxNQUFaO0FBQW1CLHVCQUFNLGNBQXpCO0FBQXdDLGdCQUFFLEVBQUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTNERixlQStFRTtBQUFLLG1CQUFNLFlBQVg7QUFBQSxpQ0FDRTtBQUFLLHFCQUFNLFlBQVg7QUFBQSxvQ0FDRTtBQUFPLHVCQUFNLGtCQUFiO0FBQWdDLGtCQUFJLEVBQUMsVUFBckM7QUFBZ0QsZ0JBQUUsRUFBQztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBTyx1QkFBTSxrQkFBYjtBQUFnQyxxQkFBSSxXQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9FRixlQXVGRTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFNLGlCQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2RkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFzR0QsQ0ExSEQ7O0dBQU1GLE87O0tBQUFBLE87QUE0SFNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VtcGxveWVlcy1tYW5hZ2VtZW50L3VzZXJzL0FkZFVzZXIuMTgzMDZjZWY2NWYwYWYzYTRiODMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyRGVmYXVsdCBmcm9tIFwifi9jb21wb25lbnRzL2xheW91dHMvQ29udGFpbmVyRGVmYXVsdFwiO1xyXG5pbXBvcnQgSGVhZGVyRGFzaGJvYXJkIGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlcnMvSGVhZGVyRGFzaGJvYXJkXCI7XHJcbi8vIGltcG9ydCBGb3JtaWtGb3JtIGZyb20gXCIuL0Zvcm1pa0Zvcm1cIjtcclxuY29uc3QgQWRkVXNlciA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBmdWxsTmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgbW9iaWxlTm86IFwiXCIsXHJcbiAgICBjbmljTm86IFwiXCIsXHJcbiAgICBjaXR5OiBcIlwiLFxyXG4gICAgc3RhdHVzOiBcIlwiLFxyXG4gICAgYWRkcmVzczogXCJcIixcclxuICB9KTtcclxuICBjb25zdCB7IGZ1bGxOYW1lLCBlbWFpbCwgbW9iaWxlTm8sIGNuaWNObywgY2l0eSwgc3RhdHVzLCBhZGRyZXNzIH0gPSB1c2VyO1xyXG4gIGNvbnN0IG9uSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0VXNlcih7IC4uLnVzZXIsIFtlLnRhcmdldC5mdWxsTmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYXdhaXQgQXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91c2Vyc1wiLCB1c2VyKTtcclxuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q29udGFpbmVyRGVmYXVsdCB0aXRsZT0nRW1wbG95ZWVzIE1hbmFnZSc+XHJcbiAgICAgICAgPEhlYWRlckRhc2hib2FyZFxyXG4gICAgICAgICAgdGl0bGU9J0VtcGxveWVlcyBNYW5hZ2VtZW50J1xyXG4gICAgICAgICAgZGVzY3JpcHRpb249J0VtcGxveWVlcyBMaXN0aW5nICdcclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiA8Rm9ybWlrRm9ybSAvPiAqL31cclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tcm93Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1ncm91cCBjb2wtbWQtNic+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkZ1bGwgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgIGNsYXNzPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdmdWxsTmFtZSdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtmdWxsTmFtZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1ncm91cCBjb2wtbWQtNic+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlVzZXIgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3Bhc3N3b3JkJyBjbGFzcz0nZm9ybS1jb250cm9sJyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1yb3cnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWdyb3VwIGNvbC1tZC02Jz5cclxuICAgICAgICAgICAgICA8bGFiZWw+TW9iaWxlIE5vPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGVsJyBjbGFzcz0nZm9ybS1jb250cm9sJyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1ncm91cCBjb2wtbWQtNic+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkNOSUMgTm88L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZWwnIGNsYXNzPSdmb3JtLWNvbnRyb2wnIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLXJvdyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZ3JvdXAgY29sLW1kLTYnPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J2VtYWlsJyBjbGFzcz0nZm9ybS1jb250cm9sJyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1ncm91cCBjb2wtbWQtNic+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkNvdW50cnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzcz0nZm9ybS1jb250cm9sJyAvPlxyXG4gICAgICAgICAgICAgIHsvKiA8c2VsZWN0IGlkPSdpbnB1dFN0YXRlJyBjbGFzcz0nZm9ybS1jb250cm9sJz5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+UGFraXN0YW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+SW5kaWE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+VS5TLkE8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWdyb3VwJz5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj0naW5wdXRBZGRyZXNzJz5BZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICBjbGFzcz0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgIGlkPSdpbnB1dEFkZHJlc3MnXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9JzEyMzQgTWFpbiBTdCdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1ncm91cCc+XHJcbiAgICAgICAgICAgIDxsYWJlbD5BZGRyZXNzIDI8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgIGNsYXNzPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgaWQ9J2lucHV0QWRkcmVzczInXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0FwYXJ0bWVudCwgc3R1ZGlvLCBvciBmbG9vcidcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1yb3cnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWdyb3VwIGNvbC1tZC02Jz5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPSdpbnB1dENpdHknPkNpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzcz0nZm9ybS1jb250cm9sJyBpZD0naW5wdXRDaXR5JyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1ncm91cCBjb2wtbWQtNCc+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj0naW5wdXRTdGF0ZSc+UHJvdmluY2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzcz0nZm9ybS1jb250cm9sJyBwbGFjZWhvbGRlcj0nU2luZGgnIC8+XHJcbiAgICAgICAgICAgICAgey8qIDxzZWxlY3QgaWQ9J2lucHV0U3RhdGUnIGNsYXNzPSdmb3JtLWNvbnRyb2wnPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD5TaW5kaDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj5QdW5qYWI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+QmFsb2NoaXN0YW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+S1BLPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1ncm91cCBjb2wtbWQtMic+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj0naW5wdXRaaXAnPlppcDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzPSdmb3JtLWNvbnRyb2wnIGlkPSdpbnB1dFppcCcgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZ3JvdXAnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWNoZWNrJz5cclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9J2Zvcm0tY2hlY2staW5wdXQnIHR5cGU9J2NoZWNrYm94JyBpZD0nZ3JpZENoZWNrJyAvPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0nZm9ybS1jaGVjay1sYWJlbCcgZm9yPSdncmlkQ2hlY2snPlxyXG4gICAgICAgICAgICAgICAgQ2hlY2sgbWUgb3V0XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzcz0nYnRuIGJ0bi1wcmltYXJ5Jz5cclxuICAgICAgICAgICAgU2lnbiBpblxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L0NvbnRhaW5lckRlZmF1bHQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkVXNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==