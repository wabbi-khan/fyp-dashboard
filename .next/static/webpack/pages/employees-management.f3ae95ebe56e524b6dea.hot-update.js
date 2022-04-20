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
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: "/employees-management/users/AddUser",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.btn,
              children: "Add Employee"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, _this)
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
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input,
            type: "text",
            placeholder: "Search Employee...",
            onChange: function onChange(event) {
              setSearchTerm(event.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
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
              className: "w-50",
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
              lineNumber: 64,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              scope: "col",
              children: "CNIC"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              scope: "col",
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              scope: "col",
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              scope: "col",
              children: "Action"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
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
                lineNumber: 89,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: [" ", user.name, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: [" ", user.phone, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: [" ", user.cnicNo, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: [" ", user.email, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: [" ", user.status, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  href: "/employees-management/users/viewUser/" + user.id,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "btn btn-primary mr-2",
                    children: "View"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  href: "/employees-management/users/" + user.id,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "btn btn-outline-primary mr-2",
                    children: "Edit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "btn btn-danger mr-2",
                  onClick: function onClick() {
                    return deleteUser(user.id);
                  },
                  children: "Delete"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW1wbG95ZWVzLW1hbmFnZW1lbnQvaW5kZXguanN4Il0sIm5hbWVzIjpbIkRpc3BsYXlVc2VycyIsInVzZVN0YXRlIiwidXNlcnMiLCJzZXRVc2VyIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJ1c2VFZmZlY3QiLCJsb2FkVXNlcnMiLCJBeGlvcyIsImdldCIsInJlc3VsdCIsImRhdGEiLCJkZWxldGVVc2VyIiwiaWQiLCJzdHlsZSIsImJ0biIsImlucHV0IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbHRlciIsInVzZXIiLCJjbmljTm8iLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibmFtZSIsInBob25lIiwiZW1haWwiLCJtYXAiLCJpbmRleCIsInN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFBQSxrQkFDQUMsc0RBQVEsQ0FBQyxFQUFELENBRFI7QUFBQSxNQUNsQkMsS0FEa0I7QUFBQSxNQUNYQyxPQURXOztBQUFBLG1CQUVXRixzREFBUSxDQUFDLEVBQUQsQ0FGbkI7QUFBQSxNQUVsQkcsVUFGa0I7QUFBQSxNQUVOQyxhQUZNOztBQUl6QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLGFBQVM7QUFDVixHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLE1BQU1BLFNBQVM7QUFBQSxrVkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNLQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsNkJBQVYsQ0FETDs7QUFBQTtBQUNWQyxvQkFEVTtBQUVoQlAscUJBQU8sQ0FBQ08sTUFBTSxDQUFDQyxJQUFSLENBQVA7O0FBRmdCO0FBQUE7QUFBQTtB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TSxzQkFBSSxFQUFFLGlDQUFpQ1EsSUFBSSxDQUFDUixFQUFsRDtBQUFBLHlDQUNFO0FBQVEsNkJBQVMsRUFBQyw4QkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVZGLGVBZ0JFO0FBQ0UsMkJBQVMsRUFBQyxxQkFEWjtBQUVFLHlCQUFPLEVBQUU7QUFBQSwyQkFBTUQsVUFBVSxDQUFDUyxJQUFJLENBQUNSLEVBQU4sQ0FBaEI7QUFBQSxtQkFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERztBQUFBLFdBZk47QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStGRCxDQWpIRDs7R0FBTWIsWTs7S0FBQUEsWTtBQWtIU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZW1wbG95ZWVzLW1hbmFnZW1lbnQuZjNhZTk1ZWJlNTZlNTI0YjZkZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udGFpbmVyRGVmYXVsdCBmcm9tIFwifi9jb21wb25lbnRzL2xheW91dHMvQ29udGFpbmVyRGVmYXVsdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEhlYWRlckRhc2hib2FyZCBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9oZWFkZXJzL0hlYWRlckRhc2hib2FyZFwiO1xuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuLy8gaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9lbGVtZW50cy9iYXNpYy9QYWdpbmF0aW9uXCI7XG4vLyBpbXBvcnQgVGFibGVQcm9qZWN0SXRlbXMgZnJvbSBcIn4vY29tcG9uZW50cy9zaGFyZWQvdGFibGVzL1RhYmxlUHJvamVjdEl0ZW1zXCI7XG4vLyBpbXBvcnQgeyBTZWxlY3QgfSBmcm9tIFwiYW50ZFwiO1xuLy8gaW1wb3J0IHsgY29ubmVjdCwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbi8vIGltcG9ydCB7IHRvZ2dsZURyYXdlck1lbnUgfSBmcm9tIFwifi9zdG9yZS9hcHAvYWN0aW9uXCI7XG4vLyBjb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLm1vZHVsZS5jc3NcIjtcbmNvbnN0IERpc3BsYXlVc2VycyA9ICgpID0+IHtcbiAgY29uc3QgW3VzZXJzLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkVXNlcnMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGxvYWRVc2VycyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBBeGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvdXNlcnNcIik7XG4gICAgc2V0VXNlcihyZXN1bHQuZGF0YSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVXNlciA9IGFzeW5jIChpZCkgPT4ge1xuICAgIGF3YWl0IEF4aW9zLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDozMDAxL3VzZXJzLyR7aWR9YCk7XG4gICAgbG9hZFVzZXJzKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyRGVmYXVsdCB0aXRsZT0nRW1wbG95ZWVzIE1hbmFnZSc+XG4gICAgICA8SGVhZGVyRGFzaGJvYXJkXG4gICAgICAgIHRpdGxlPSdFbXBsb3llZXMgTWFuYWdlbWVudCdcbiAgICAgICAgZGVzY3JpcHRpb249J0VtcGxveWVlcyBMaXN0aW5nICdcbiAgICAgIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+RW1wbG95ZWVzIERldGFpbHM8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTYnPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2VtcGxveWVlcy1tYW5hZ2VtZW50L3VzZXJzL0FkZFVzZXInPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuYnRufT5BZGQgRW1wbG95ZWU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTYnPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuaW5wdXR9XG4gICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2ggRW1wbG95ZWUuLi4nXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSBib3JkZXIgc2hhZG93IG10LTQnPlxuICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9J3RoZWFkLWRhcmsgJz5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoIHNjb3BlPSdjb2wnPiM8L3RoPlxuICAgICAgICAgICAgICA8dGggc2NvcGU9J2NvbCcgY2xhc3NOYW1lPSd3LTUwJz5cbiAgICAgICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT0nY29sJz5Nb2JpbGUgTm88L3RoPlxuICAgICAgICAgICAgICA8dGggc2NvcGU9J2NvbCc+Q05JQzwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT0nY29sJz5FbWFpbDwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT0nY29sJz5TdGF0dXM8L3RoPlxuICAgICAgICAgICAgICA8dGggc2NvcGU9J2NvbCc+QWN0aW9uPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7dXNlcnNcbiAgICAgICAgICAgICAgLmZpbHRlcigodXNlcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZWFyY2hUZXJtID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICB1c2VyLmNuaWNOb1xuICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgICAgICAgICAgdXNlci5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgICAgICAgICAgdXNlci5waG9uZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgICAgICAgICAgIHVzZXIuZW1haWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5tYXAoKHVzZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPSdyb3cnPiB7aW5kZXggKyAxfSA8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRkPiB7dXNlci5uYW1lfSA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPiB7dXNlci5waG9uZX0gPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD4ge3VzZXIuY25pY05vfSA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPiB7dXNlci5lbWFpbH0gPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD4ge3VzZXIuc3RhdHVzfSA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvdmlld1VzZXIvYCArIHVzZXIuaWR9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5IG1yLTInPlZpZXc8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICB7LyogPExpbmtcbiAgICAgICAgICAgICAgICAgICAgaHJlZj0nL2VtcGxveWVlcy1tYW5hZ2VtZW50L3VzZXJzL0VkaXRVc2VyL1tpZF0nXG4gICAgICAgICAgICAgICAgICAgIGFzPXtgL2VtcGxveWVlcy1tYW5hZ2VtZW50L3VzZXJzL0VkaXRVc2VyLyR7dXNlcj8uaWR9YH1cbiAgICAgICAgICAgICAgICAgID4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvYCArIHVzZXIuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBtci0yJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj0nIyc+ICovfVxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLWRhbmdlciBtci0yJ1xuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVVzZXIodXNlci5pZCl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXJEZWZhdWx0PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IERpc3BsYXlVc2VycztcbiJdLCJzb3VyY2VSb290IjoiIn0=