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
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");




var _jsxFileName = "E:\\FYP\\admin-dashboard\\office-automation\\pages\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();






var usersInstance = Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_6__["collection"])(_firebaseConfig__WEBPACK_IMPORTED_MODULE_7__["database"], "users");





var Index = function Index() {
  _s();

  var employeeInstance = Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_6__["collection"])(_firebaseConfig__WEBPACK_IMPORTED_MODULE_7__["database"], "employee");
  var allMeeting = Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_6__["query"])(Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_6__["collection"])(_firebaseConfig__WEBPACK_IMPORTED_MODULE_7__["database"], "events")); // const fileListRef = ref(storage, "file/");

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      countUsers = _useState[0],
      setCountUsers = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      allMeetings = _useState2[0],
      setAllMeetings = _useState2[1]; //? count all employess


  Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_6__["getDocs"])(employeeInstance).then(function (snap) {
    var size = snap.size; // will return the collection size

    setCountUsers(size); // console.log(size);
  }); //? count all meetings

  Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_6__["getDocs"])(allMeeting).then(function (snap) {
    var size = snap.size; // will return the collection size

    setAllMeetings(size);
  });

  var getAllUsers = /*#__PURE__*/function () {
    var _ref = Object(E_FYP_admin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/E_FYP_admin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return E_FYP_admin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_6__["getDocs"])(usersInstance).then(function (data) {
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
  }, []); //? count all file

  var files = Object(firebase_storage__WEBPACK_IMPORTED_MODULE_10__["ref"])(_firebaseConfig__WEBPACK_IMPORTED_MODULE_7__["storage"], "file/");
  Object(firebase_storage__WEBPACK_IMPORTED_MODULE_10__["list"])(files).then(function (snap) {
    var size = snap; // will return the collection size

    console.log(snap);
  });
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
            lineNumber: 65,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.content,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text,
              children: [" ", countUsers, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              style: {
                color: "red",
                cursor: "pointer"
              },
              children: "Employee Hired"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
              href: "/employees-management",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.btn,
                children: "Click Me"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.img2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.content,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text,
              children: "120"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              style: {
                color: "red",
                cursor: "pointer"
              },
              children: "Files are Stored"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
              href: "/file-management",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.btn,
                children: "Click Me"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.img3
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.content,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text,
              children: allMeetings
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              style: {
                color: "red",
                cursor: "pointer"
              },
              children: "Meetings Scheduled"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
              href: "/meeting-scheduler",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.btn,
                children: "Click Me"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
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
                lineNumber: 105,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.date
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-8",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.card,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_cards_CardSaleReport__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-8",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.team
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.storage
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, _this);
};

_s(Index, "hBTeHpkiZXVYZFCLB0IYee7ZJG4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbInVzZXJzSW5zdGFuY2UiLCJjb2xsZWN0aW9uIiwiZGF0YWJhc2UiLCJJbmRleCIsImVtcGxveWVlSW5zdGFuY2UiLCJhbGxNZWV0aW5nIiwicXVlcnkiLCJ1c2VTdGF0ZSIsImNvdW50VXNlcnMiLCJzZXRDb3VudFVzZXJzIiwiYWxsTWVldGluZ3MiLCJzZXRBbGxNZWV0aW5ncyIsImdldERvY3MiLCJ0aGVuIiwic25hcCIsInNpemUiLCJnZXRBbGxVc2VycyIsImRhdGEiLCJkb2NzIiwibWFwIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJmaWxlcyIsInJlZiIsInN0b3JhZ2UiLCJsaXN0Iiwic3R5bGUiLCJpbWcxIiwiY29udGVudCIsInRleHQiLCJjb2xvciIsImN1cnNvciIsImJ0biIsImltZzIiLCJpbWczIiwiYm94IiwiYm94MSIsIndlYXRoZXIiLCJkYXRlIiwiY2FyZCIsInRlYW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGFBQWEsR0FBR0MscUVBQVUsQ0FBQ0Msd0RBQUQsRUFBVyxPQUFYLENBQWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxnQkFBZ0IsR0FBR0gscUVBQVUsQ0FBQ0Msd0RBQUQsRUFBVyxVQUFYLENBQW5DO0FBQ0EsTUFBTUcsVUFBVSxHQUFHQyxnRUFBSyxDQUFDTCxxRUFBVSxDQUFDQyx3REFBRCxFQUFXLFFBQVgsQ0FBWCxDQUF4QixDQUZrQixDQUdsQjs7QUFIa0Isa0JBS2tCSyxzREFBUSxDQUFDLEVBQUQsQ0FMMUI7QUFBQSxNQUtYQyxVQUxXO0FBQUEsTUFLQ0MsYUFMRDs7QUFBQSxtQkFNb0JGLHNEQUFRLENB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RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1FRCxDQTNHRDs7R0FBTXZCLEs7O0tBQUFBLEs7QUE2R1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM5M2ZiZmFkNGZiNjkxMGE0NGZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcmRTYWxlUmVwb3J0IGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL2NhcmRzL0NhcmRTYWxlUmVwb3J0XCI7XG5pbXBvcnQgQ29udGFpbmVyRGFzaGJvYXJkIGZyb20gXCJ+L2NvbXBvbmVudHMvbGF5b3V0cy9Db250YWluZXJEYXNoYm9hcmRcIjtcbmltcG9ydCB7IGdldERvY3MsIGNvbGxlY3Rpb24sIHF1ZXJ5IH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZGF0YWJhc2UgfSBmcm9tIFwifi9maXJlYmFzZUNvbmZpZ1wiO1xuY29uc3QgdXNlcnNJbnN0YW5jZSA9IGNvbGxlY3Rpb24oZGF0YWJhc2UsIFwidXNlcnNcIik7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gXCJ+L2ZpcmViYXNlQ29uZmlnXCI7XG5pbXBvcnQge1xuICByZWYsXG4gIHVwbG9hZEJ5dGVzLFxuICBsaXN0QWxsLFxuICBnZXREb3dubG9hZFVSTCxcbiAgZGVsZXRlT2JqZWN0LFxuICBnZXRCeXRlcyxcbiAgbGlzdFJlc3VsdCxcbiAgbGlzdCxcbn0gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIjtcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBlbXBsb3llZUluc3RhbmNlID0gY29sbGVjdGlvbihkYXRhYmFzZSwgXCJlbXBsb3llZVwiKTtcbiAgY29uc3QgYWxsTWVldGluZyA9IHF1ZXJ5KGNvbGxlY3Rpb24oZGF0YWJhc2UsIFwiZXZlbnRzXCIpKTtcbiAgLy8gY29uc3QgZmlsZUxpc3RSZWYgPSByZWYoc3RvcmFnZSwgXCJmaWxlL1wiKTtcblxuICBjb25zdCBbY291bnRVc2Vycywgc2V0Q291bnRVc2Vyc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthbGxNZWV0aW5ncywgc2V0QWxsTWVldGluZ3NdID0gdXNlU3RhdGUoW10pO1xuXG4gIC8vPyBjb3VudCBhbGwgZW1wbG95ZXNzXG5cbiAgZ2V0RG9jcyhlbXBsb3llZUluc3RhbmNlKS50aGVuKChzbmFwKSA9PiB7XG4gICAgY29uc3Qgc2l6ZSA9IHNuYXAuc2l6ZTsgLy8gd2lsbCByZXR1cm4gdGhlIGNvbGxlY3Rpb24gc2l6ZVxuICAgIHNldENvdW50VXNlcnMoc2l6ZSk7XG4gICAgLy8gY29uc29sZS5sb2coc2l6ZSk7XG4gIH0pO1xuXG4gIC8vPyBjb3VudCBhbGwgbWVldGluZ3NcblxuICBnZXREb2NzKGFsbE1lZXRpbmcpLnRoZW4oKHNuYXApID0+IHtcbiAgICBjb25zdCBzaXplID0gc25hcC5zaXplOyAvLyB3aWxsIHJldHVybiB0aGUgY29sbGVjdGlvbiBzaXplXG4gICAgc2V0QWxsTWVldGluZ3Moc2l6ZSk7XG4gIH0pO1xuICBjb25zdCBnZXRBbGxVc2VycyA9IGFzeW5jICgpID0+IHtcbiAgICBnZXREb2NzKHVzZXJzSW5zdGFuY2UpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGRhdGEuZG9jcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbS5kYXRhKCkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0QWxsVXNlcnMoKTtcbiAgfSwgW10pO1xuXG4gIC8vPyBjb3VudCBhbGwgZmlsZVxuICBjb25zdCBmaWxlcyA9IHJlZihzdG9yYWdlLCBcImZpbGUvXCIpO1xuXG4gIGxpc3QoZmlsZXMpLnRoZW4oKHNuYXApID0+IHtcbiAgICBjb25zdCBzaXplID0gc25hcDsgLy8gd2lsbCByZXR1cm4gdGhlIGNvbGxlY3Rpb24gc2l6ZVxuICAgIGNvbnNvbGUubG9nKHNuYXApO1xuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyRGFzaGJvYXJkIHRpdGxlPSdEYXNoYm9hcmQnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW1nMX0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGVudH0+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlLnRleHR9PiB7Y291bnRVc2Vyc30gPC9oMj5cbiAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19PlxuICAgICAgICAgICAgICAgIEVtcGxveWVlIEhpcmVkXG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9lbXBsb3llZXMtbWFuYWdlbWVudCc+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLmJ0bn0+Q2xpY2sgTWU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC00Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbWcyfT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250ZW50fT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGUudGV4dH0+MTIwPC9oMj5cbiAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19PlxuICAgICAgICAgICAgICAgIEZpbGVzIGFyZSBTdG9yZWRcbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2ZpbGUtbWFuYWdlbWVudCc+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLmJ0bn0+Q2xpY2sgTWU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC00Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbWczfT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250ZW50fT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGUudGV4dH0+e2FsbE1lZXRpbmdzfTwvaDI+XG4gICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICBNZWV0aW5ncyBTY2hlZHVsZWRcbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL21lZXRpbmctc2NoZWR1bGVyJz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuYnRufT5DbGljayBNZTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ib3h9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC00Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJveDF9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS53ZWF0aGVyfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZGF0ZX0+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTgnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2FyZH0+XG4gICAgICAgICAgICAgICAgPENhcmRTYWxlUmVwb3J0IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTgnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudGVhbX0+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTQnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc3RvcmFnZX0+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NvbnRhaW5lckRhc2hib2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==