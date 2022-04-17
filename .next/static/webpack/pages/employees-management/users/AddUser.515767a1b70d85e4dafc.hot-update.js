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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);






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
    userName: "",
    email: "",
    mobileNo: "",
    cnicNo: "",
    city: "",
    status: "",
    address: "",
    country: "",
    province: "",
    zip: ""
  }),
      user = _useState[0],
      setUser = _useState[1];

  var fullName = user.fullName,
      email = user.email,
      mobileNo = user.mobileNo,
      cnicNo = user.cnicNo,
      city = user.city,
      status = user.status,
      address = user.address,
      userName = user.userName,
      country = user.country,
      province = user.province,
      zip = user.zip;

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
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("http://localhost:3001/users", user);

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
        lineNumber: 46,
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
              lineNumber: 54,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "email",
              "class": "form-control",
              name: "fullName",
              value: fullName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "User Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "password",
              "class": "form-control",
              name: "userName",
              value: userName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "form-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "Mobile No"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "tel",
              "class": "form-control",
              name: "mobileNo",
              value: mobileNo
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "CNIC No"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "tel",
              "class": "form-control",
              name: "cnicNo",
              value: cnicNo
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "form-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "email",
              "class": "form-control",
              name: "email",
              value: email
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
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "Country"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              "class": "form-control",
              name: "country",
              value: country
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            "for": "inputAddress",
            children: "Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            "class": "form-control",
            id: "inputAddress",
            placeholder: "1234 Main St",
            name: "address",
            value: address
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
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
              lineNumber: 131,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              "class": "form-control",
              id: "inputCity",
              name: "city",
              value: city
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              "for": "inputState",
              children: "Province"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              "class": "form-control",
              placeholder: "Sindh",
              name: "province",
              value: province
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              "for": "inputZip",
              children: "Zip"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              "class": "form-control",
              id: "inputZip",
              name: "zip",
              value: zip
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          "class": "btn btn-primary",
          children: "Sign in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(AddUser, "lqJesLAXeEwOEaVCEmkUDAU+zrc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvQWRkVXNlci5qc3giXSwibmFtZXMiOlsiQWRkVXNlciIsInVzZVN0YXRlIiwiZnVsbE5hbWUiLCJ1c2VyTmFtZSIsImVtYWlsIiwibW9iaWxlTm8iLCJjbmljTm8iLCJjaXR5Iiwic3RhdHVzIiwiYWRkcmVzcyIsImNvdW50cnkiLCJwcm92aW5jZSIsInppcCIsInVzZXIiLCJzZXRVc2VyIiwib25JbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJBeGlvcyIsInBvc3QiLCJyb3V0ZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0lDLHNEQUFRLENBQUM7QUFDL0JDLFlBQVEsRUFBRSxFQURxQjtBQUUvQkMsWUFBUSxFQUFFLEVBRnFCO0FBRy9CQyxTQUFLLEVBQUUsRUFId0I7QUFJL0JDLFlBQVEsRUFBRSxFQUpxQjtBQUsvQkMsVUFBTSxFQUFFLEVBTHVCO0FBTS9CQyxRQUFJLEVBQUUsRUFOeUI7QUFPL0JDLFVBQU0sRUFBRSxFQVB1QjtBQVEvQkMsV0FBTyxFQUFFLEVBUnNCO0FBUy9CQyxXQUFPLEVBQUUsRUFUc0I7QUFVL0JDLFlBQVEsRUFBRSxFQVZxQjtBQVcvQkMsT0FBRyxFQUFFO0FBWDBCLEdBQUQsQ0FEWjtBQUFBLE1BQ2JDLElBRGE7QUFBQSxNQUNQQyxPQURPOztBQUFBLE1BZWxCWixRQWZrQixHQTBCaEJXLElBMUJnQixDQWVsQlgsUUFma0I7QUFBQSxNQWdCbEJFLEtBaEJrQixHQTBCaEJTLElBMUJnQixDQWdCbEJULEtBaEJrQjtBQUFBLE1BaUJsQkMsUUFqQmtCLEdBMEJoQlEs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O0FBQUEsaUJBckhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBb0lELENBeEtEOztHQUFNWixPOztLQUFBQSxPO0FBMEtTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbXBsb3llZXMtbWFuYWdlbWVudC91c2Vycy9BZGRVc2VyLjUxNTc2N2ExYjcwZDg1ZTRkYWZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbnRhaW5lckRlZmF1bHQgZnJvbSBcIn4vY29tcG9uZW50cy9sYXlvdXRzL0NvbnRhaW5lckRlZmF1bHRcIjtcclxuaW1wb3J0IEhlYWRlckRhc2hib2FyZCBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9oZWFkZXJzL0hlYWRlckRhc2hib2FyZFwiO1xyXG4vLyBpbXBvcnQgRm9ybWlrRm9ybSBmcm9tIFwiLi9Gb3JtaWtGb3JtXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmNvbnN0IEFkZFVzZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgZnVsbE5hbWU6IFwiXCIsXHJcbiAgICB1c2VyTmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgbW9iaWxlTm86IFwiXCIsXHJcbiAgICBjbmljTm86IFwiXCIsXHJcbiAgICBjaXR5OiBcIlwiLFxyXG4gICAgc3RhdHVzOiBcIlwiLFxyXG4gICAgYWRkcmVzczogXCJcIixcclxuICAgIGNvdW50cnk6IFwiXCIsXHJcbiAgICBwcm92aW5jZTogXCJcIixcclxuICAgIHppcDogXCJcIixcclxuICB9KTtcclxuICBjb25zdCB7XHJcbiAgICBmdWxsTmFtZSxcclxuICAgIGVtYWlsLFxyXG4gICAgbW9iaWxlTm8sXHJcbiAgICBjbmljTm8sXHJcbiAgICBjaXR5LFxyXG4gICAgc3RhdHVzLFxyXG4gICAgYWRkcmVzcyxcclxuICAgIHVzZXJOYW1lLFxyXG4gICAgY291bnRyeSxcclxuICAgIHByb3ZpbmNlLFxyXG4gICAgemlwLFxyXG4gIH0gPSB1c2VyO1xyXG4gIGNvbnN0IG9uSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0VXNlcih7IC4uLnVzZXIsIFtlLnRhcmdldC5mdWxsTmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYXdhaXQgQXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91c2Vyc1wiLCB1c2VyKTtcclxuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q29udGFpbmVyRGVmYXVsdCB0aXRsZT0nRW1wbG95ZWVzIE1hbmFnZSc+XHJcbiAgICAgICAgPEhlYWRlckRhc2hib2FyZFxyXG4gICAgICAgICAgdGl0bGU9J0VtcGxveWVlcyBNYW5hZ2VtZW50J1xyXG4gICAgICAgICAgZGVzY3JpcHRpb249J0VtcGxveWVlcyBMaXN0aW5nICdcclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiA8Rm9ybWlrRm9ybSAvPiAqL31cclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tcm93Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1ncm91cCBjb2wtbWQtNic+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkZ1bGwgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgIGNsYXNzPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdmdWxsTmFtZSdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtmdWxsTmFtZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1ncm91cCBjb2wtbWQtNic+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlVzZXIgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgIGNsYXNzPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSd1c2VyTmFtZSdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyTmFtZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1yb3cnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWdyb3VwIGNvbC1tZC02Jz5cclxuICAgICAgICAgICAgICA8bGFiZWw+TW9iaWxlIE5vPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgICAgICAgIGNsYXNzPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdtb2JpbGVObydcclxuICAgICAgICAgICAgICAgIHZhbHVlPXttb2JpbGVOb31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1ncm91cCBjb2wtbWQtNic+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkNOSUMgTm88L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGVsJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J2NuaWNObydcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjbmljTm99XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tcm93Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1ncm91cCBjb2wtbWQtNic+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWdyb3VwIGNvbC1tZC02Jz5cclxuICAgICAgICAgICAgICA8bGFiZWw+Q291bnRyeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J2NvdW50cnknXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y291bnRyeX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHsvKiA8c2VsZWN0IGlkPSdpbnB1dFN0YXRlJyBjbGFzcz0nZm9ybS1jb250cm9sJz5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+UGFraXN0YW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+SW5kaWE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+VS5TLkE8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWdyb3VwJz5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj0naW5wdXRBZGRyZXNzJz5BZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICBjbGFzcz0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgIGlkPSdpbnB1dEFkZHJlc3MnXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9JzEyMzQgTWFpbiBTdCdcclxuICAgICAgICAgICAgICBuYW1lPSdhZGRyZXNzJ1xyXG4gICAgICAgICAgICAgIHZhbHVlPXthZGRyZXNzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1yb3cnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWdyb3VwIGNvbC1tZC02Jz5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPSdpbnB1dENpdHknPkNpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIGNsYXNzPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBpZD0naW5wdXRDaXR5J1xyXG4gICAgICAgICAgICAgICAgbmFtZT0nY2l0eSdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjaXR5fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWdyb3VwIGNvbC1tZC00Jz5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPSdpbnB1dFN0YXRlJz5Qcm92aW5jZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTaW5kaCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J3Byb3ZpbmNlJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb3ZpbmNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgey8qIDxzZWxlY3QgaWQ9J2lucHV0U3RhdGUnIGNsYXNzPSdmb3JtLWNvbnRyb2wnPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD5TaW5kaDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj5QdW5qYWI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+QmFsb2NoaXN0YW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+S1BLPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1ncm91cCBjb2wtbWQtMic+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj0naW5wdXRaaXAnPlppcDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIGlkPSdpbnB1dFppcCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J3ppcCdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt6aXB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3M9J2J0biBidG4tcHJpbWFyeSc+XHJcbiAgICAgICAgICAgIFNpZ24gaW5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9Db250YWluZXJEZWZhdWx0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFVzZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=