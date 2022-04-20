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
/* harmony import */ var E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layouts_ContainerDefault__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/layouts/ContainerDefault */ "./components/layouts/ContainerDefault.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_shared_headers_HeaderDashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/shared/headers/HeaderDashboard */ "./components/shared/headers/HeaderDashboard.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.module.css */ "./pages/employees-management/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "E:\\FYP\\admin-dashboard\\martfury-admin-react\\pages\\employees-management\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();





 // import Pagination from "~/components/elements/basic/Pagination";
// import TableProjectItems from "~/components/shared/tables/TableProjectItems";
// import { Select } from "antd";
// import { connect, useDispatch } from "react-redux";
// import { toggleDrawerMenu } from "~/store/app/action";
// const { Option } = Select;



var DisplayUsers = function DisplayUsers() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      users = _useState[0],
      setUser = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      searchTerm = _useState2[0],
      setSearchTerm = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    loadUsers();
  }, []);

  var loadUsers = /*#__PURE__*/function () {
    var _ref = Object(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var result;
      return E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("http://localhost:3001/users");

            case 2:
              result = _context.sent;
              setUser(result.data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function loadUsers() {
      return _ref.apply(this, arguments);
    };
  }();

  var deleteUser = /*#__PURE__*/function () {
    var _ref2 = Object(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(id) {
      return E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a["delete"]("http://localhost:3001/users/".concat(id));

            case 2:
              loadUsers();

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function deleteUser(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_ContainerDefault__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Employees Manage",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_headers_HeaderDashboard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Employees Management",
      description: "Employees Listing "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Employees Details"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-6",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input,
            type: "text",
            placeholder: "Search Employee...",
            onChange: function onChange(event) {
              setSearchTerm(event.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-6",
          style: {
            marginRight: "4px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: "/employees-management/users/AddUser",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.btn,
              children: "Add Employee"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        className: "table border shadow mt-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          className: "thead-dark ",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              scope: "col",
              children: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              scope: "col",
              children: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              scope: "col",
              children: "Mobile No"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              scope: "col",
              children: "CNIC"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              scope: "col",
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              scope: "col",
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              scope: "col",
              children: "Action"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: users.filter(function (user) {
            if (searchTerm == "") {
              return user;
            } else if (user.cnicNo.toLowerCase().includes(searchTerm.toLowerCase()) || user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.phone.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase())) {
              return user;
            }
          }).map(function (user, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                scope: "row",
                children: [" ", index + 1, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: [" ", user.name, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: [" ", user.phone, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: [" ", user.cnicNo, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: [" ", user.email, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: [" ", user.status, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  href: "/employees-management/users/viewUser/" + user.id,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "btn btn-primary mr-2",
                    children: "View"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  href: "/employees-management/users/" + user.id,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "btn btn-outline-primary mr-2",
                    children: "Edit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "btn btn-danger mr-2",
                  onClick: function onClick() {
                    return deleteUser(user.id);
                  },
                  children: "Delete"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, _this);
};

_s(DisplayUsers, "kaiswhqUKS0+ULMdWzlxUmtoZvQ=");

_c = DisplayUsers;
/* harmony default export */ __webpack_exports__["default"] = (DisplayUsers);

var _c;

$RefreshReg$(_c, "DisplayUsers");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW1wbG95ZWVzLW1hbmFnZW1lbnQvaW5kZXguanN4Il0sIm5hbWVzIjpbIkRpc3BsYXlVc2VycyIsInVzZVN0YXRlIiwidXNlcnMiLCJzZXRVc2VyIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJ1c2VFZmZlY3QiLCJsb2FkVXNlcnMiLCJBeGlvcyIsImdldCIsInJlc3VsdCIsImRhdGEiLCJkZWxldGVVc2VyIiwiaWQiLCJzdHlsZSIsImlucHV0IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcmdpblJpZ2h0IiwiYnRuIiwiZmlsdGVyIiwidXNlciIsImNuaWNObyIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJuYW1lIiwicGhvbmUiLCJlbWFpbCIsIm1hcCIsImluZGV4Iiwic3RhdHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUFBLGtCQUNBQyxzREFBUSxDQUFDLEVBQUQsQ0FEUjtBQUFBLE1BQ2xCQyxLQURrQjtBQUFBLE1BQ1hDLE9BRFc7O0FBQUEsbUJBRVdGLHNEQUFRLENBQUMsRUFBRCxDQUZuQjtBQUFBLE1BRWxCRyxVQUZrQjtBQUFBLE1BRU5DLGFBRk07O0FBSXpCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsYUFBUztBQUNWLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsTUFBTUEsU0FBUztBQUFBLGtWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0tDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSw2QkFBVixDQURMOztBQUFBO0FBQ1ZDLG9CQURVO0FBRWhCUCxxQkFBTyxDQUFDTyxNQUFNLENBQUNDLElBQVIsQ0FBUDs7QUFG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QUFBO0FBQUEseUJBREYsZUFVRSxxRUFBQyxnREFBRDtBQUFNLHNCQUFJLEVBQUUsaUNBQWlDUyxJQUFJLENBQUNULEVBQWxEO0FBQUEseUNBQ0U7QUFBUSw2QkFBUyxFQUFDLDhCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBVkYsZUFnQkU7QUFDRSwyQkFBUyxFQUFDLHFCQURaO0FBRUUseUJBQU8sRUFBRTtBQUFBLDJCQUFNRCxVQUFVLENBQUNVLElBQUksQ0FBQ1QsRUFBTixDQUFoQjtBQUFBLG1CQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURHO0FBQUEsV0FmTjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkZELENBL0dEOztHQUFNYixZOztLQUFBQSxZO0FBZ0hTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbXBsb3llZXMtbWFuYWdlbWVudC5lNDM5ZmI4YzBjM2ZkMjRmOGI3Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb250YWluZXJEZWZhdWx0IGZyb20gXCJ+L2NvbXBvbmVudHMvbGF5b3V0cy9Db250YWluZXJEZWZhdWx0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSGVhZGVyRGFzaGJvYXJkIGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlcnMvSGVhZGVyRGFzaGJvYXJkXCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG4vLyBpbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2VsZW1lbnRzL2Jhc2ljL1BhZ2luYXRpb25cIjtcbi8vIGltcG9ydCBUYWJsZVByb2plY3RJdGVtcyBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC90YWJsZXMvVGFibGVQcm9qZWN0SXRlbXNcIjtcbi8vIGltcG9ydCB7IFNlbGVjdCB9IGZyb20gXCJhbnRkXCI7XG4vLyBpbXBvcnQgeyBjb25uZWN0LCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuLy8gaW1wb3J0IHsgdG9nZ2xlRHJhd2VyTWVudSB9IGZyb20gXCJ+L3N0b3JlL2FwcC9hY3Rpb25cIjtcbi8vIGNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUubW9kdWxlLmNzc1wiO1xuY29uc3QgRGlzcGxheVVzZXJzID0gKCkgPT4ge1xuICBjb25zdCBbdXNlcnMsIHNldFVzZXJdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWRVc2VycygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgbG9hZFVzZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91c2Vyc1wiKTtcbiAgICBzZXRVc2VyKHJlc3VsdC5kYXRhKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgYXdhaXQgQXhpb3MuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvdXNlcnMvJHtpZH1gKTtcbiAgICBsb2FkVXNlcnMoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXJEZWZhdWx0IHRpdGxlPSdFbXBsb3llZXMgTWFuYWdlJz5cbiAgICAgIDxIZWFkZXJEYXNoYm9hcmRcbiAgICAgICAgdGl0bGU9J0VtcGxveWVlcyBNYW5hZ2VtZW50J1xuICAgICAgICBkZXNjcmlwdGlvbj0nRW1wbG95ZWVzIExpc3RpbmcgJ1xuICAgICAgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5FbXBsb3llZXMgRGV0YWlsczwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNic+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5pbnB1dH1cbiAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1NlYXJjaCBFbXBsb3llZS4uLidcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFNlYXJjaFRlcm0oZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02JyBzdHlsZT17eyBtYXJnaW5SaWdodDogXCI0cHhcIiB9fT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9lbXBsb3llZXMtbWFuYWdlbWVudC91c2Vycy9BZGRVc2VyJz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLmJ0bn0+QWRkIEVtcGxveWVlPC9idXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlIGJvcmRlciBzaGFkb3cgbXQtNCc+XG4gICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT0ndGhlYWQtZGFyayAnPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGggc2NvcGU9J2NvbCc+IzwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT0nY29sJz5OYW1lPC90aD5cbiAgICAgICAgICAgICAgPHRoIHNjb3BlPSdjb2wnPk1vYmlsZSBObzwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT0nY29sJz5DTklDPC90aD5cbiAgICAgICAgICAgICAgPHRoIHNjb3BlPSdjb2wnPkVtYWlsPC90aD5cbiAgICAgICAgICAgICAgPHRoIHNjb3BlPSdjb2wnPlN0YXR1czwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT0nY29sJz5BY3Rpb248L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHt1c2Vyc1xuICAgICAgICAgICAgICAuZmlsdGVyKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaFRlcm0gPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgIHVzZXIuY25pY05vXG4gICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAgICAgICAgICAgICB1c2VyLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAgICAgICAgICAgICB1c2VyLnBob25lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgICAgICAgICAgdXNlci5lbWFpbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLm1hcCgodXNlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGggc2NvcGU9J3Jvdyc+IHtpbmRleCArIDF9IDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGQ+IHt1c2VyLm5hbWV9IDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+IHt1c2VyLnBob25lfSA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPiB7dXNlci5jbmljTm99IDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+IHt1c2VyLmVtYWlsfSA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPiB7dXNlci5zdGF0dXN9IDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9lbXBsb3llZXMtbWFuYWdlbWVudC91c2Vycy92aWV3VXNlci9gICsgdXNlci5pZH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnkgbXItMic+VmlldzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8TGlua1xuICAgICAgICAgICAgICAgICAgICBocmVmPScvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvRWRpdFVzZXIvW2lkXSdcbiAgICAgICAgICAgICAgICAgICAgYXM9e2AvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvRWRpdFVzZXIvJHt1c2VyPy5pZH1gfVxuICAgICAgICAgICAgICAgICAgPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9lbXBsb3llZXMtbWFuYWdlbWVudC91c2Vycy9gICsgdXNlci5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tb3V0bGluZS1wcmltYXJ5IG1yLTInPlxuICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPScjJz4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tZGFuZ2VyIG1yLTInXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlVXNlcih1c2VyLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDwvTGluaz4gKi99XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NvbnRhaW5lckRlZmF1bHQ+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRGlzcGxheVVzZXJzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==