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
/* harmony import */ var E_FYP_admin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_FYP_admin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_FYP_admin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(E_FYP_admin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var E_FYP_admin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_shared_cards_CardSaleReport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/shared/cards/CardSaleReport */ "./components/shared/cards/CardSaleReport.jsx");
/* harmony import */ var _components_layouts_ContainerDashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/layouts/ContainerDashboard */ "./components/layouts/ContainerDashboard.jsx");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/firebaseConfig */ "./firebaseConfig.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.module.css */ "./pages/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");





var _jsxFileName = "E:\\FYP\\admin-dashboard\\office-automation\\pages\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();






var usersInstance = Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_7__["collection"])(_firebaseConfig__WEBPACK_IMPORTED_MODULE_8__["database"], "users");





var Index = function Index() {
  _s();

  var employeeInstance = Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_7__["collection"])(_firebaseConfig__WEBPACK_IMPORTED_MODULE_8__["database"], "employee");

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      countUsers = _useState[0],
      setCountUsers = _useState[1];

  var fileListRef = Object(firebase_storage__WEBPACK_IMPORTED_MODULE_11__["ref"])(_firebaseConfig__WEBPACK_IMPORTED_MODULE_8__["storage"], "file/");
  Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_7__["getDocs"])(employeeInstance).then(function (snap) {
    var size = snap.size; // will return the collection size

    setCountUsers(size); // console.log(size);
  });

  var getAllUsers = /*#__PURE__*/function () {
    var _ref = Object(E_FYP_admin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/E_FYP_admin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      return E_FYP_admin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_7__["getDocs"])(usersInstance).then(function (data) {
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

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    getAllUsers();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    Object(firebase_storage__WEBPACK_IMPORTED_MODULE_11__["listAll"])(fileListRef).then(function (res) {
      res.items.forEach(function (item) {
        Object(firebase_storage__WEBPACK_IMPORTED_MODULE_11__["getDownloadURL"])(item).then(function (url) {
          setFileList(function (prev) {
            return [].concat(Object(E_FYP_admin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prev), [{
              url: url,
              name: item.name
            }]);
          });
          setLoading(true);
        });
      });
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_ContainerDashboard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Dashboard",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.img1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.content,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.text,
              children: [" ", countUsers, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              style: {
                color: "red",
                cursor: "pointer"
              },
              children: "Employee Hired"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
              href: "/employees-management",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _style_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.btn,
                children: "Click Me"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.img2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.content,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.text,
              children: "120"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              style: {
                color: "red",
                cursor: "pointer"
              },
              children: "Files are Stored"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
              href: "/file-management",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _style_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.btn,
                children: "Click Me"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.img3
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.content,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.text,
              children: "5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              style: {
                color: "red",
                cursor: "pointer"
              },
              children: "Meetings Scheduled"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
              href: "/meeting-scheduler",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _style_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.btn,
                children: "Click Me"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _style_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.box,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.box1,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _style_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.weather
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _style_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.date
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-8",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.card,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_cards_CardSaleReport__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-8",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.team
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.storage
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, _this);
};

_s(Index, "tFoKINBv23f5XhYcPfd5hHe4/1E=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbInVzZXJzSW5zdGFuY2UiLCJjb2xsZWN0aW9uIiwiZGF0YWJhc2UiLCJJbmRleCIsImVtcGxveWVlSW5zdGFuY2UiLCJ1c2VTdGF0ZSIsImNvdW50VXNlcnMiLCJzZXRDb3VudFVzZXJzIiwiZmlsZUxpc3RSZWYiLCJyZWYiLCJzdG9yYWdlIiwiZ2V0RG9jcyIsInRoZW4iLCJzbmFwIiwic2l6ZSIsImdldEFsbFVzZXJzIiwiZGF0YSIsImRvY3MiLCJtYXAiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImxpc3RBbGwiLCJyZXMiLCJpdGVtcyIsImZvckVhY2giLCJnZXREb3dubG9hZFVSTCIsInVybCIsInNldEZpbGVMaXN0IiwicHJldiIsIm5hbWUiLCJzZXRMb2FkaW5nIiwic3R5bGUiLCJpbWcxIiwiY29udGVudCIsInRleHQiLCJjb2xvciIsImN1cnNvciIsImJ0biIsImltZzIiLCJpbWczIiwiYm94IiwiYm94MSIsIndlYXRoZXIiLCJkYXRlIiwiY2FyZCIsInRlYW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsYUFBYSxHQUFHQyxxRUFBVSxDQUFDQyx3REFBRCxFQUFXLE9BQVgsQ0FBaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFRQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLGdCQUFnQixHQUFHSCxxRUFBVSxDQUFDQyx3REFBRCxFQUFXLFVBQVgsQ0FBbkM7O0FBRGtCLGtCQUVrQkcsc0RBQVEsQ0FBQyxFQUFELENBRjFCO0FBQUEsTUFFWEMsVUFGVztBQUFBLE1BRUNDLGFBRkQ7O0FBR2xCLE1BQU1DLFdBQVcsR0FBR0MsNkRBQUcsQ0FBQ0MsdURBQUQsRUFBVSxPQUFWLENBQXZCO0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXZDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtRUQsQ0FsR0Q7O0dBQU1QLEs7O0tBQUFBLEs7QUFvR1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU2MTEyMDQwNjY1MDE3ZmQxMTg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcmRTYWxlUmVwb3J0IGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL2NhcmRzL0NhcmRTYWxlUmVwb3J0XCI7XG5pbXBvcnQgQ29udGFpbmVyRGFzaGJvYXJkIGZyb20gXCJ+L2NvbXBvbmVudHMvbGF5b3V0cy9Db250YWluZXJEYXNoYm9hcmRcIjtcbmltcG9ydCB7IGdldERvY3MsIGNvbGxlY3Rpb24gfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBkYXRhYmFzZSB9IGZyb20gXCJ+L2ZpcmViYXNlQ29uZmlnXCI7XG5jb25zdCB1c2Vyc0luc3RhbmNlID0gY29sbGVjdGlvbihkYXRhYmFzZSwgXCJ1c2Vyc1wiKTtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSBcIn4vZmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCB7XG4gIHJlZixcbiAgdXBsb2FkQnl0ZXMsXG4gIGxpc3RBbGwsXG4gIGdldERvd25sb2FkVVJMLFxuICBkZWxldGVPYmplY3QsXG59IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBlbXBsb3llZUluc3RhbmNlID0gY29sbGVjdGlvbihkYXRhYmFzZSwgXCJlbXBsb3llZVwiKTtcbiAgY29uc3QgW2NvdW50VXNlcnMsIHNldENvdW50VXNlcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBmaWxlTGlzdFJlZiA9IHJlZihzdG9yYWdlLCBcImZpbGUvXCIpO1xuXG4gIGdldERvY3MoZW1wbG95ZWVJbnN0YW5jZSkudGhlbigoc25hcCkgPT4ge1xuICAgIGNvbnN0IHNpemUgPSBzbmFwLnNpemU7IC8vIHdpbGwgcmV0dXJuIHRoZSBjb2xsZWN0aW9uIHNpemVcbiAgICBzZXRDb3VudFVzZXJzKHNpemUpO1xuICAgIC8vIGNvbnNvbGUubG9nKHNpemUpO1xuICB9KTtcbiAgY29uc3QgZ2V0QWxsVXNlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgZ2V0RG9jcyh1c2Vyc0luc3RhbmNlKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBkYXRhLmRvY3MubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0uZGF0YSgpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEFsbFVzZXJzKCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxpc3RBbGwoZmlsZUxpc3RSZWYpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgcmVzLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgZ2V0RG93bmxvYWRVUkwoaXRlbSkudGhlbigodXJsKSA9PiB7XG4gICAgICAgICAgc2V0RmlsZUxpc3QoKHByZXYpID0+IFsuLi5wcmV2LCB7IHVybCwgbmFtZTogaXRlbS5uYW1lIH1dKTtcbiAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lckRhc2hib2FyZCB0aXRsZT0nRGFzaGJvYXJkJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTQnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmltZzF9PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRlbnR9PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZS50ZXh0fT4ge2NvdW50VXNlcnN9IDwvaDI+XG4gICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICBFbXBsb3llZSBIaXJlZFxuICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICA8TGluayBocmVmPScvZW1wbG95ZWVzLW1hbmFnZW1lbnQnPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5idG59PkNsaWNrIE1lPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW1nMn0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGVudH0+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlLnRleHR9PjEyMDwvaDI+XG4gICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICBGaWxlcyBhcmUgU3RvcmVkXG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9maWxlLW1hbmFnZW1lbnQnPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5idG59PkNsaWNrIE1lPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW1nM30+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGVudH0+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlLnRleHR9PjU8L2gyPlxuICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgTWVldGluZ3MgU2NoZWR1bGVkXG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9tZWV0aW5nLXNjaGVkdWxlcic+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLmJ0bn0+Q2xpY2sgTWU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYm94fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ib3gxfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUud2VhdGhlcn0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmRhdGV9PjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC04Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcmR9PlxuICAgICAgICAgICAgICAgIDxDYXJkU2FsZVJlcG9ydCAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC04Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRlYW19PjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC00Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnN0b3JhZ2V9PjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXJEYXNoYm9hcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=