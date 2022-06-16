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
/* harmony import */ var E_FYP_office_autonmatin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_FYP_office_autonmatin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_FYP_office_autonmatin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_FYP_office_autonmatin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
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




var _jsxFileName = "E:\\FYP\\office-autonmatin-dashboard\\office-automation\\pages\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();






var usersInstance = Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_6__["collection"])(_firebaseConfig__WEBPACK_IMPORTED_MODULE_7__["database"], "users");





var Index = function Index() {
  _s();

  var employeeInstance = Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_6__["collection"])(_firebaseConfig__WEBPACK_IMPORTED_MODULE_7__["database"], "employee");
  var allMeeting = Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_6__["query"])(Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_6__["collection"])(_firebaseConfig__WEBPACK_IMPORTED_MODULE_7__["database"], "events"));
  var files = Object(firebase_storage__WEBPACK_IMPORTED_MODULE_10__["ref"])(_firebaseConfig__WEBPACK_IMPORTED_MODULE_7__["storage"], "file/"); // const fileListRef = ref(storage, "file/");

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      countUsers = _useState[0],
      setCountUsers = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      allMeetings = _useState2[0],
      setAllMeetings = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      allfiles = _useState3[0],
      setAllFiles = _useState3[1]; //? count all employess


  Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_6__["getDocs"])(employeeInstance).then(function (snap) {
    var size = snap.size; // will return the collection size

    setCountUsers(size); // console.log(size);
  }); //? count all file

  Object(firebase_storage__WEBPACK_IMPORTED_MODULE_10__["list"])(files).then(function (snap) {
    var size = snap.items.length;
    setAllFiles(size); // will return the collection size
    // console.log(size);
  }); //? count all meetings

  Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_6__["getDocs"])(allMeeting).then(function (snap) {
    var size = snap.size; // will return the collection size

    setAllMeetings(size);
  });

  var getAllUsers = /*#__PURE__*/function () {
    var _ref = Object(E_FYP_office_autonmatin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/E_FYP_office_autonmatin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return E_FYP_office_autonmatin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_6__["getDocs"])(usersInstance).then(function (data) {
                data.docs.map(function (item) {// console.log(item.data());
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

  var time = function time() {
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time);
  };

  time();
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
            lineNumber: 66,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.content,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text,
              children: [" ", countUsers, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              style: {
                color: "red",
                cursor: "pointer"
              },
              children: "Employee Hired"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
              href: "/employees-management",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.btn,
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
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.img2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.content,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text,
              children: [" ", allfiles, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              style: {
                color: "red",
                cursor: "pointer"
              },
              children: "Files are Stored"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
              href: "/file-management",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.btn,
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.img3
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.content,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text,
              children: allMeetings
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              style: {
                color: "red",
                cursor: "pointer"
              },
              children: "Meetings Scheduled"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
              href: "/meeting-scheduler",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.btn,
                children: "Click Me"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
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
                lineNumber: 106,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.date
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-8",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.card,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_cards_CardSaleReport__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-8",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.team
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.storage
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, _this);
};

_s(Index, "bOvWWCl+1pAZH669miZaOD8jrWU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbInVzZXJzSW5zdGFuY2UiLCJjb2xsZWN0aW9uIiwiZGF0YWJhc2UiLCJJbmRleCIsImVtcGxveWVlSW5zdGFuY2UiLCJhbGxNZWV0aW5nIiwicXVlcnkiLCJmaWxlcyIsInJlZiIsInN0b3JhZ2UiLCJ1c2VTdGF0ZSIsImNvdW50VXNlcnMiLCJzZXRDb3VudFVzZXJzIiwiYWxsTWVldGluZ3MiLCJzZXRBbGxNZWV0aW5ncyIsImFsbGZpbGVzIiwic2V0QWxsRmlsZXMiLCJnZXREb2NzIiwidGhlbiIsInNuYXAiLCJzaXplIiwibGlzdCIsIml0ZW1zIiwibGVuZ3RoIiwiZ2V0QWxsVXNlcnMiLCJkYXRhIiwiZG9jcyIsIm1hcCIsIml0ZW0iLCJ1c2VFZmZlY3QiLCJ0aW1lIiwidG9kYXkiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwiaW1nMSIsImNvbnRlbnQiLCJ0ZXh0IiwiY29sb3IiLCJjdXJzb3IiLCJidG4iLCJpbWcyIiwiaW1nMyIsImJveCIsImJveDEiLCJ3ZWF0aGVyIiwiZGF0ZSIsImNhcmQiLCJ0ZWFtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxhQUFhLEdBQUdDLHFFQUFVLENBQUNDLHdEQUFELEVBQVcsT0FBWCxDQUFoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsZ0JBQWdCLEdBQUdILHFFQUFVLENBQUNDLHdEQUFELEVBQVcsVUFBWCxDQUFuQztBQUNBLE1BQU1HLFVBQVUsR0FBR0MsZ0VBQUssQ0FBQ0wscUVBQVUsQ0FBQ0Msd0RBQUQsRUFBVyxRQUFYLENBQVgsQ0FBeEI7QUFDQSxNQUFN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O0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBY0U7QUFBSyxtQkFBUyxFQUFDLEtBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsT0FBZjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBRWIsd0RBQUssQ0FBQ2M7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFHUyxHQUhULGVBSUU7QUFBSyxxQkFBUyxFQUFDLE9BQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUVkLHdEQUFLLENBQUM1QjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1FRCxDQXJIRDs7R0FBTU4sSzs7S0FBQUEsSztBQXVIU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDEwMjJkOTEyZjBkMWUzNjYzMWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2FyZFNhbGVSZXBvcnQgZnJvbSBcIn4vY29tcG9uZW50cy9zaGFyZWQvY2FyZHMvQ2FyZFNhbGVSZXBvcnRcIjtcbmltcG9ydCBDb250YWluZXJEYXNoYm9hcmQgZnJvbSBcIn4vY29tcG9uZW50cy9sYXlvdXRzL0NvbnRhaW5lckRhc2hib2FyZFwiO1xuaW1wb3J0IHsgZ2V0RG9jcywgY29sbGVjdGlvbiwgcXVlcnkgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBkYXRhYmFzZSB9IGZyb20gXCJ+L2ZpcmViYXNlQ29uZmlnXCI7XG5jb25zdCB1c2Vyc0luc3RhbmNlID0gY29sbGVjdGlvbihkYXRhYmFzZSwgXCJ1c2Vyc1wiKTtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSBcIn4vZmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCB7IHJlZiwgbGlzdCB9IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgZW1wbG95ZWVJbnN0YW5jZSA9IGNvbGxlY3Rpb24oZGF0YWJhc2UsIFwiZW1wbG95ZWVcIik7XG4gIGNvbnN0IGFsbE1lZXRpbmcgPSBxdWVyeShjb2xsZWN0aW9uKGRhdGFiYXNlLCBcImV2ZW50c1wiKSk7XG4gIGNvbnN0IGZpbGVzID0gcmVmKHN0b3JhZ2UsIFwiZmlsZS9cIik7XG5cbiAgLy8gY29uc3QgZmlsZUxpc3RSZWYgPSByZWYoc3RvcmFnZSwgXCJmaWxlL1wiKTtcblxuICBjb25zdCBbY291bnRVc2Vycywgc2V0Q291bnRVc2Vyc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthbGxNZWV0aW5ncywgc2V0QWxsTWVldGluZ3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYWxsZmlsZXMsIHNldEFsbEZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAvLz8gY291bnQgYWxsIGVtcGxveWVzc1xuXG4gIGdldERvY3MoZW1wbG95ZWVJbnN0YW5jZSkudGhlbigoc25hcCkgPT4ge1xuICAgIGNvbnN0IHNpemUgPSBzbmFwLnNpemU7IC8vIHdpbGwgcmV0dXJuIHRoZSBjb2xsZWN0aW9uIHNpemVcbiAgICBzZXRDb3VudFVzZXJzKHNpemUpO1xuICAgIC8vIGNvbnNvbGUubG9nKHNpemUpO1xuICB9KTtcbiAgLy8/IGNvdW50IGFsbCBmaWxlXG5cbiAgbGlzdChmaWxlcykudGhlbigoc25hcCkgPT4ge1xuICAgIGNvbnN0IHNpemUgPSBzbmFwLml0ZW1zLmxlbmd0aDtcbiAgICBzZXRBbGxGaWxlcyhzaXplKTsgLy8gd2lsbCByZXR1cm4gdGhlIGNvbGxlY3Rpb24gc2l6ZVxuICAgIC8vIGNvbnNvbGUubG9nKHNpemUpO1xuICB9KTtcblxuICAvLz8gY291bnQgYWxsIG1lZXRpbmdzXG5cbiAgZ2V0RG9jcyhhbGxNZWV0aW5nKS50aGVuKChzbmFwKSA9PiB7XG4gICAgY29uc3Qgc2l6ZSA9IHNuYXAuc2l6ZTsgLy8gd2lsbCByZXR1cm4gdGhlIGNvbGxlY3Rpb24gc2l6ZVxuICAgIHNldEFsbE1lZXRpbmdzKHNpemUpO1xuICB9KTtcbiAgY29uc3QgZ2V0QWxsVXNlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgZ2V0RG9jcyh1c2Vyc0luc3RhbmNlKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBkYXRhLmRvY3MubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0uZGF0YSgpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEFsbFVzZXJzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB0aW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpbWUgPVxuICAgICAgdG9kYXkuZ2V0SG91cnMoKSArIFwiOlwiICsgdG9kYXkuZ2V0TWludXRlcygpICsgXCI6XCIgKyB0b2RheS5nZXRTZWNvbmRzKCk7XG4gICAgY29uc29sZS5sb2codGltZSk7XG4gIH07XG4gIHRpbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXJEYXNoYm9hcmQgdGl0bGU9J0Rhc2hib2FyZCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC00Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbWcxfT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250ZW50fT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGUudGV4dH0+IHtjb3VudFVzZXJzfSA8L2gyPlxuICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgRW1wbG95ZWUgSGlyZWRcbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2VtcGxveWVlcy1tYW5hZ2VtZW50Jz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuYnRufT5DbGljayBNZTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTQnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmltZzJ9PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRlbnR9PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZS50ZXh0fT4ge2FsbGZpbGVzfSA8L2gyPlxuICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgRmlsZXMgYXJlIFN0b3JlZFxuICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICA8TGluayBocmVmPScvZmlsZS1tYW5hZ2VtZW50Jz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuYnRufT5DbGljayBNZTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTQnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmltZzN9PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRlbnR9PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZS50ZXh0fT57YWxsTWVldGluZ3N9PC9oMj5cbiAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19PlxuICAgICAgICAgICAgICAgIE1lZXRpbmdzIFNjaGVkdWxlZFxuICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICA8TGluayBocmVmPScvbWVldGluZy1zY2hlZHVsZXInPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5idG59PkNsaWNrIE1lPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJveH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTQnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYm94MX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLndlYXRoZXJ9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5kYXRlfT48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtOCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXJkfT5cbiAgICAgICAgICAgICAgICA8Q2FyZFNhbGVSZXBvcnQgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtOCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50ZWFtfT48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zdG9yYWdlfT48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyRGFzaGJvYXJkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9