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
      lineNumber: 32,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Employees Details"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-6",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: "/employees-management/users/AddUser",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "btn btn-primary ",
              style: {
                fontSize: "15px"
              },
              children: "Add Employee"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-6",
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Search Employee with CNIC no...",
            onChange: function onChange(event) {
              setSearchTerm(event.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
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
              lineNumber: 61,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              scope: "col",
              children: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              scope: "col",
              children: "Mobile No"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              scope: "col",
              children: "CNIC"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              scope: "col",
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              scope: "col",
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              scope: "col",
              children: "Action"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: users.map(function (user, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                scope: "row",
                children: [" ", index + 1, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: [" ", user.name, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: [" ", user.phone, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: [" ", user.cnicNo, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: [" ", user.email, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: [" ", user.status, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  href: "/employees-management/users/viewUser/" + user.id,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "btn btn-primary mr-2",
                    children: "View"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  href: "/employees-management/users/" + user.id,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "btn btn-outline-primary mr-2",
                    children: "Edit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "btn btn-danger mr-2",
                  onClick: function onClick() {
                    return deleteUser(user.id);
                  },
                  children: "Delete"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW1wbG95ZWVzLW1hbmFnZW1lbnQvaW5kZXguanN4Il0sIm5hbWVzIjpbIkRpc3BsYXlVc2VycyIsInVzZVN0YXRlIiwidXNlcnMiLCJzZXRVc2VyIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJ1c2VFZmZlY3QiLCJsb2FkVXNlcnMiLCJBeGlvcyIsImdldCIsInJlc3VsdCIsImRhdGEiLCJkZWxldGVVc2VyIiwiaWQiLCJmb250U2l6ZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJ1c2VyIiwiaW5kZXgiLCJuYW1lIiwicGhvbmUiLCJjbmljTm8iLCJlbWFpbCIsInN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0FDLHNEQUFRLENBQUMsRUFBRCxDQURSO0FBQUEsTUFDbEJDLEtBRGtCO0FBQUEsTUFDWEMsT0FEVzs7QUFBQSxtQkFFV0Ysc0RBQVEsQ0FBQyxFQUFELENBRm5CO0FBQUEsTUFFbEJHLFVBRmtCO0FBQUEsTUFFTkMsYUFGTTs7QUFJekJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxhQUFTO0FBQ1YsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNQSxTQUFTO0FBQUEsa1ZBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDS0MsNENBQUssQ0FBQ0MsR0FBTixDQUFVLDZCQUFWLENBREw7O0FBQUE7QUFDVkMsb0JBRFU7QUFFaEJQLHFCQUFPLENBQUNPLE1BQU0sQ0FBQ0MsSUFBUixDQUFQOztBQUZnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFUSixTQUFTO0FBQUE7QUFBQTtB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bGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbXBsb3llZXMtbWFuYWdlbWVudC5jZWU4ZTA0NmFlMjYxZDc3YTc4NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb250YWluZXJEZWZhdWx0IGZyb20gXCJ+L2NvbXBvbmVudHMvbGF5b3V0cy9Db250YWluZXJEZWZhdWx0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSGVhZGVyRGFzaGJvYXJkIGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlcnMvSGVhZGVyRGFzaGJvYXJkXCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG4vLyBpbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2VsZW1lbnRzL2Jhc2ljL1BhZ2luYXRpb25cIjtcbi8vIGltcG9ydCBUYWJsZVByb2plY3RJdGVtcyBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC90YWJsZXMvVGFibGVQcm9qZWN0SXRlbXNcIjtcbi8vIGltcG9ydCB7IFNlbGVjdCB9IGZyb20gXCJhbnRkXCI7XG4vLyBpbXBvcnQgeyBjb25uZWN0LCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuLy8gaW1wb3J0IHsgdG9nZ2xlRHJhd2VyTWVudSB9IGZyb20gXCJ+L3N0b3JlL2FwcC9hY3Rpb25cIjtcbi8vIGNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XG5jb25zdCBEaXNwbGF5VXNlcnMgPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9hZFVzZXJzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBsb2FkVXNlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3VzZXJzXCIpO1xuICAgIHNldFVzZXIocmVzdWx0LmRhdGEpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAoaWQpID0+IHtcbiAgICBhd2FpdCBBeGlvcy5kZWxldGUoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91c2Vycy8ke2lkfWApO1xuICAgIGxvYWRVc2VycygpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lckRlZmF1bHQgdGl0bGU9J0VtcGxveWVlcyBNYW5hZ2UnPlxuICAgICAgPEhlYWRlckRhc2hib2FyZFxuICAgICAgICB0aXRsZT0nRW1wbG95ZWVzIE1hbmFnZW1lbnQnXG4gICAgICAgIGRlc2NyaXB0aW9uPSdFbXBsb3llZXMgTGlzdGluZyAnXG4gICAgICAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkVtcGxveWVlcyBEZXRhaWxzPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02Jz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9lbXBsb3llZXMtbWFuYWdlbWVudC91c2Vycy9BZGRVc2VyJz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeSAnIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE1cHhcIiB9fT5cbiAgICAgICAgICAgICAgICBBZGQgRW1wbG95ZWVcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02Jz5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VhcmNoIEVtcGxveWVlIHdpdGggQ05JQyBuby4uLidcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFNlYXJjaFRlcm0oZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSBib3JkZXIgc2hhZG93IG10LTQnPlxuICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9J3RoZWFkLWRhcmsgJz5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoIHNjb3BlPSdjb2wnPiM8L3RoPlxuICAgICAgICAgICAgICA8dGggc2NvcGU9J2NvbCc+TmFtZTwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT0nY29sJz5Nb2JpbGUgTm88L3RoPlxuICAgICAgICAgICAgICA8dGggc2NvcGU9J2NvbCc+Q05JQzwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT0nY29sJz5FbWFpbDwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT0nY29sJz5TdGF0dXM8L3RoPlxuICAgICAgICAgICAgICA8dGggc2NvcGU9J2NvbCc+QWN0aW9uPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7dXNlcnMubWFwKCh1c2VyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPSdyb3cnPiB7aW5kZXggKyAxfSA8L3RoPlxuICAgICAgICAgICAgICAgIDx0ZD4ge3VzZXIubmFtZX0gPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+IHt1c2VyLnBob25lfSA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ge3VzZXIuY25pY05vfSA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ge3VzZXIuZW1haWx9IDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiB7dXNlci5zdGF0dXN9IDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9lbXBsb3llZXMtbWFuYWdlbWVudC91c2Vycy92aWV3VXNlci9gICsgdXNlci5pZH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeSBtci0yJz5WaWV3PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICB7LyogPExpbmtcbiAgICAgICAgICAgICAgICAgICAgaHJlZj0nL2VtcGxveWVlcy1tYW5hZ2VtZW50L3VzZXJzL0VkaXRVc2VyL1tpZF0nXG4gICAgICAgICAgICAgICAgICAgIGFzPXtgL2VtcGxveWVlcy1tYW5hZ2VtZW50L3VzZXJzL0VkaXRVc2VyLyR7dXNlcj8uaWR9YH1cbiAgICAgICAgICAgICAgICAgID4gKi99XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2VtcGxveWVlcy1tYW5hZ2VtZW50L3VzZXJzL2AgKyB1c2VyLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tb3V0bGluZS1wcmltYXJ5IG1yLTInPlxuICAgICAgICAgICAgICAgICAgICAgIEVkaXRcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj0nIyc+ICovfVxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tZGFuZ2VyIG1yLTInXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVVzZXIodXNlci5pZCl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICB7LyogPC9MaW5rPiAqL31cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyRGVmYXVsdD5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5VXNlcnM7XG4iXSwic291cmNlUm9vdCI6IiJ9