webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_FYP_admin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_FYP_admin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_FYP_admin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_FYP_admin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_shared_cards_CardSaleReport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/shared/cards/CardSaleReport */ "./components/shared/cards/CardSaleReport.jsx");
/* harmony import */ var _components_layouts_ContainerDashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/layouts/ContainerDashboard */ "./components/layouts/ContainerDashboard.jsx");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/firebaseConfig */ "./firebaseConfig.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.module.css */ "./pages/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_9__);




var _jsxFileName = "E:\\FYP\\admin-dashboard\\office-automation\\pages\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();






var usersInstance = Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_6__["collection"])(_firebaseConfig__WEBPACK_IMPORTED_MODULE_7__["database"], "users");



var Index = function Index() {
  _s();

  var employeeInstance = Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_6__["collection"])(_firebaseConfig__WEBPACK_IMPORTED_MODULE_7__["database"], "employee"); // console.log(employeeInstance.lenght);
  // const dispatch = useDispatch();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      countUsers = _useState[0],
      setCountUsers = _useState[1]; // const allusers = () => {


  Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_6__["getDocs"])(employeeInstance).then(function (snap) {
    var size = snap.size; // will return the collection size
    // setAllUsers(size);

    console.log(size);
  }); // };
  // allusers;

  var getAllUsers = /*#__PURE__*/function () {
    var _ref = Object(E_FYP_admin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/E_FYP_admin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return E_FYP_admin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_6__["getDocs"])(usersInstance).then(function (data) {
                // console.log(data);
                data.docs.map(function (item) {
                  console.log(item.data());
                });
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getAllUsers() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getAllUsers();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_ContainerDashboard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Dashboard",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.img1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.content,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text,
              children: "10"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              style: {
                color: "red",
                cursor: "pointer"
              },
              children: "Employee Hired"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
              href: "/employees-management",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.btn,
                children: "Click Me"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.img2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.content,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text,
              children: "120"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              style: {
                color: "red",
                cursor: "pointer"
              },
              children: "Files are Stored"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
              href: "/file-management",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.btn,
                children: "Click Me"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.img3
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.content,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text,
              children: "5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              style: {
                color: "red",
                cursor: "pointer"
              },
              children: "Meetings Scheduled"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
              href: "/meeting-scheduler",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.btn,
                children: "Click Me"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.box,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.box1,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.weather
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.date
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-8",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.card,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_cards_CardSaleReport__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-8",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.team
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.storage
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, _this);
};

_s(Index, "rJqZvFKuQIRLf6R8CBv2KXYXPSU=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbInVzZXJzSW5zdGFuY2UiLCJjb2xsZWN0aW9uIiwiZGF0YWJhc2UiLCJJbmRleCIsImVtcGxveWVlSW5zdGFuY2UiLCJ1c2VTdGF0ZSIsImNvdW50VXNlcnMiLCJzZXRDb3VudFVzZXJzIiwiZ2V0RG9jcyIsInRoZW4iLCJzbmFwIiwic2l6ZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRBbGxVc2VycyIsImRhdGEiLCJkb2NzIiwibWFwIiwiaXRlbSIsInVzZUVmZmVjdCIsInN0eWxlIiwiaW1nMSIsImNvbnRlbnQiLCJ0ZXh0IiwiY29sb3IiLCJjdXJzb3IiLCJidG4iLCJpbWcyIiwiaW1nMyIsImJveCIsImJveDEiLCJ3ZWF0aGVyIiwiZGF0ZSIsImNhcmQiLCJ0ZWFtIiwic3RvcmFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxhQUFhLEdBQUdDLHFFQUFVLENBQUNDLHdEQUFELEVBQVcsT0FBWCxDQUFoQztBQUNBO0FBQ0E7O0FBQ0EsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxnQkFBZ0IsR0FBR0gscUVBQVUsQ0FBQ0Msd0RBQUQsRUFBVyxVQUFYLENBQW5DLENBRGtCLENBRWxCO0FBQ0E7O0FBSGtCLGtCQUlrQkcsc0RBQVEsQ0FBQyxFQUFELENBSjFCO0FBQUEsTUFJWEMsVUFKVztBQUFBLE1BSUNDLGFBSkQsaUJBS2xCOzs7QUFDQUMsb0VBQU8sQ0FBQ0osZ0JBQUQsQ0FBUCxDQUEwQkssSUFBMUIsQ0FBK0IsVUFBQ0MsSUFBRCxFQUFVO0FBQ3ZDLFFBQU1DLElBQUksR0FBR0QsSUFBSSxDQUFDQyxJQUFsQixDQUR1QyxDQUNmO0FBQ3hCOztBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNELEdBSkQs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REYsZUFjRTtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxPQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFFYix3REFBSyxDQUFDYztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUdTLEdBSFQsZUFJRTtBQUFLLHFCQUFTLEVBQUMsT0FBZjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBRWQsd0RBQUssQ0FBQ2U7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXZDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1S0QsQ0FoTUQ7O0dBQU1oQyxLOztLQUFBQSxLO0FBa01TQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMzYzYjM0OWMwM2UxM2E0NTkxNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJkU2FsZVJlcG9ydCBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9jYXJkcy9DYXJkU2FsZVJlcG9ydFwiO1xuaW1wb3J0IENvbnRhaW5lckRhc2hib2FyZCBmcm9tIFwifi9jb21wb25lbnRzL2xheW91dHMvQ29udGFpbmVyRGFzaGJvYXJkXCI7XG5pbXBvcnQgeyBnZXREb2NzLCBjb2xsZWN0aW9uIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZGF0YWJhc2UgfSBmcm9tIFwifi9maXJlYmFzZUNvbmZpZ1wiO1xuY29uc3QgdXNlcnNJbnN0YW5jZSA9IGNvbGxlY3Rpb24oZGF0YWJhc2UsIFwidXNlcnNcIik7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUubW9kdWxlLmNzc1wiO1xuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IGVtcGxveWVlSW5zdGFuY2UgPSBjb2xsZWN0aW9uKGRhdGFiYXNlLCBcImVtcGxveWVlXCIpO1xuICAvLyBjb25zb2xlLmxvZyhlbXBsb3llZUluc3RhbmNlLmxlbmdodCk7XG4gIC8vIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW2NvdW50VXNlcnMsIHNldENvdW50VXNlcnNdID0gdXNlU3RhdGUoW10pO1xuICAvLyBjb25zdCBhbGx1c2VycyA9ICgpID0+IHtcbiAgZ2V0RG9jcyhlbXBsb3llZUluc3RhbmNlKS50aGVuKChzbmFwKSA9PiB7XG4gICAgY29uc3Qgc2l6ZSA9IHNuYXAuc2l6ZTsgLy8gd2lsbCByZXR1cm4gdGhlIGNvbGxlY3Rpb24gc2l6ZVxuICAgIC8vIHNldEFsbFVzZXJzKHNpemUpO1xuICAgIGNvbnNvbGUubG9nKHNpemUpO1xuICB9KTtcbiAgLy8gfTtcbiAgLy8gYWxsdXNlcnM7XG4gIGNvbnN0IGdldEFsbFVzZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIGdldERvY3ModXNlcnNJbnN0YW5jZSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBkYXRhLmRvY3MubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0uZGF0YSgpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEFsbFVzZXJzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXJEYXNoYm9hcmQgdGl0bGU9J0Rhc2hib2FyZCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC00Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbWcxfT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250ZW50fT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGUudGV4dH0+MTA8L2gyPlxuICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgRW1wbG95ZWUgSGlyZWRcbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2VtcGxveWVlcy1tYW5hZ2VtZW50Jz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuYnRufT5DbGljayBNZTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTQnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmltZzJ9PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRlbnR9PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZS50ZXh0fT4xMjA8L2gyPlxuICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgRmlsZXMgYXJlIFN0b3JlZFxuICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICA8TGluayBocmVmPScvZmlsZS1tYW5hZ2VtZW50Jz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuYnRufT5DbGljayBNZTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTQnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmltZzN9PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRlbnR9PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZS50ZXh0fT41PC9oMj5cbiAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19PlxuICAgICAgICAgICAgICAgIE1lZXRpbmdzIFNjaGVkdWxlZFxuICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICA8TGluayBocmVmPScvbWVldGluZy1zY2hlZHVsZXInPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5idG59PkNsaWNrIE1lPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJveH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTQnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYm94MX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLndlYXRoZXJ9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5kYXRlfT48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtOCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXJkfT5cbiAgICAgICAgICAgICAgICA8Q2FyZFNhbGVSZXBvcnQgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtOCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50ZWFtfT48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zdG9yYWdlfT48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxkaXY+XG4gICAgICAgIDxoMz5UZWFtIE1lbWJlcnM6PC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgPG9sPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGg0PldhaGFiIGtoYW4gKEExOEJTSVQwMzcpPC9oND5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxoND5TeWVkIFNhaWYgVWRkaW4gKEExOEJTSVQwMzIpPC9oND5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxoND5SdXNoZGEga2hhbiAoQTE4QlNJVDAxNSk8L2g0PlxuICAgICAgICA8L2xpPlxuICAgICAgPC9vbD4gKi99XG4gICAgICB7LyogPGRpdj5cbiAgICAgICAgPGgzPldhaGFiIGtoYW4gKEExOEJTSVQwMzcpPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPlN5ZWQgU2FpZiBVZGRpbiAoQTE4QlNJVDAzMik8L2gzPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+UnVzaGRhIGtoYW4gKEExOEJTSVQwMTUpPC9oMz5cbiAgICAgIDwvZGl2PiAqL31cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHB0LTQnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTYnPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nY2FyZCc+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9J2NhcmQtaW1nLXRvcCcgc3JjPScvaW1nLzEucG5nJyBhbHQ9J0NhcmQgaW1hZ2UgY2FwJyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkLWJvZHknPlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz0nY2FyZC10aXRsZSc+RW1wbG95ZWVzIE1hbmFnZW1lbnQ8L2g1PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPSdjYXJkLXRleHQnPlxuICAgICAgICAgICAgICAgICAgU29tZSBxdWljayBleGFtcGxlIHRleHQgdG8gYnVpbGQgb24gdGhlIGNhcmQgdGl0bGUgYW5kIG1ha2UgdXBcbiAgICAgICAgICAgICAgICAgIHRoZSBidWxrIG9mIHRoZSBjYXJkJ3MgY29udGVudC5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2VtcGxveWVlcy1tYW5hZ2VtZW50Jz5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdidG4gYnRuLXByaW1hcnknIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE1cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgQ2xpY2sgTWVcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmQnPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPSdjYXJkLWltZy10b3AnIHNyYz0nL2ltZy80LnBuZycgYWx0PSdDYXJkIGltYWdlIGNhcCcgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY2FyZC1ib2R5Jz5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9J2NhcmQtdGl0bGUnPkZpbGVzIE1hbmFnZW1lbnQ8L2g1PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPSdjYXJkLXRleHQnPlxuICAgICAgICAgICAgICAgICAgU29tZSBxdWljayBleGFtcGxlIHRleHQgdG8gYnVpbGQgb24gdGhlIGNhcmQgdGl0bGUgYW5kIG1ha2UgdXBcbiAgICAgICAgICAgICAgICAgIHRoZSBidWxrIG9mIHRoZSBjYXJkJ3MgY29udGVudC5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2ZpbGUtbWFuYWdlbWVudCc+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz0nYnRuIGJ0bi1wcmltYXJ5JyBzdHlsZT17eyBmb250U2l6ZTogXCIxNXB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIENsaWNrIE1lXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBwdC00Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTYnPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nY2FyZCc+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9J2NhcmQtaW1nLXRvcCcgc3JjPScvaW1nLzMucG5nJyBhbHQ9J0NhcmQgaW1hZ2UgY2FwJyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkLWJvZHknPlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz0nY2FyZC10aXRsZSc+TWVldGluZyBTY2hlZHVsZXI8L2g1PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPSdjYXJkLXRleHQnPlxuICAgICAgICAgICAgICAgICAgU29tZSBxdWljayBleGFtcGxlIHRleHQgdG8gYnVpbGQgb24gdGhlIGNhcmQgdGl0bGUgYW5kIG1ha2UgdXBcbiAgICAgICAgICAgICAgICAgIHRoZSBidWxrIG9mIHRoZSBjYXJkJ3MgY29udGVudC5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL21lZXRpbmctc2NoZWR1bGVyJz5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdidG4gYnRuLXByaW1hcnknIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE1cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgQ2xpY2sgTWVcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+ICovfVxuICAgICAgey8qIDxkaXY+XG4gICAgICAgIDxoMT5Tb21lIENvbXBhbnkgRGV0YWlscyBPbiBEYXNoYm9hcmQ8L2gxPlxuICAgICAgPC9kaXY+ICovfVxuICAgICAgey8qIDxzZWN0aW9uIGNsYXNzTmFtZT0ncHMtZGFzaGJvYXJkJyBpZD0naG9tZXBhZ2UnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHMtc2VjdGlvbl9fbGVmdCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhsLTggY29sLTEyJz5cbiAgICAgICAgICAgICAgPENhcmRTYWxlUmVwb3J0IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteGwtNCBjb2wtMTInPlxuICAgICAgICAgICAgICA8Q2FyZEVhcm5pbmcgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxDYXJkUmVjZW50T3JkZXJzIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHMtc2VjdGlvbl9fcmlnaHQnPlxuICAgICAgICAgIDxDYXJkU3RhdGljcyAvPlxuICAgICAgICAgIDxDYXJkVG9wQ291bnRyaWVzIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPiAqL31cbiAgICA8L0NvbnRhaW5lckRhc2hib2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==