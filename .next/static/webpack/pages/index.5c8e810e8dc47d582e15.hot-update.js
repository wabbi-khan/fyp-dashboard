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
    var time = Date().toLocaleString();
    console.log(time);
  };

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
            lineNumber: 64,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.content,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text,
              children: [" ", countUsers, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              style: {
                color: "red",
                cursor: "pointer"
              },
              children: "Employee Hired"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
              href: "/employees-management",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.btn,
                children: "Click Me"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.img2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.content,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text,
              children: [" ", allfiles, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              style: {
                color: "red",
                cursor: "pointer"
              },
              children: "Files are Stored"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
              href: "/file-management",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.btn,
                children: "Click Me"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.img3
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.content,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text,
              children: allMeetings
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              style: {
                color: "red",
                cursor: "pointer"
              },
              children: "Meetings Scheduled"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
              href: "/meeting-scheduler",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.btn,
                children: "Click Me"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
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
                lineNumber: 104,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.date
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-8",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.card,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_cards_CardSaleReport__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, _this)
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
          lineNumber: 101,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-8",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.team
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.storage
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbInVzZXJzSW5zdGFuY2UiLCJjb2xsZWN0aW9uIiwiZGF0YWJhc2UiLCJJbmRleCIsImVtcGxveWVlSW5zdGFuY2UiLCJhbGxNZWV0aW5nIiwicXVlcnkiLCJmaWxlcyIsInJlZiIsInN0b3JhZ2UiLCJ1c2VTdGF0ZSIsImNvdW50VXNlcnMiLCJzZXRDb3VudFVzZXJzIiwiYWxsTWVldGluZ3MiLCJzZXRBbGxNZWV0aW5ncyIsImFsbGZpbGVzIiwic2V0QWxsRmlsZXMiLCJnZXREb2NzIiwidGhlbiIsInNuYXAiLCJzaXplIiwibGlzdCIsIml0ZW1zIiwibGVuZ3RoIiwiZ2V0QWxsVXNlcnMiLCJkYXRhIiwiZG9jcyIsIm1hcCIsIml0ZW0iLCJ1c2VFZmZlY3QiLCJ0aW1lIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwiaW1nMSIsImNvbnRlbnQiLCJ0ZXh0IiwiY29sb3IiLCJjdXJzb3IiLCJidG4iLCJpbWcyIiwiaW1nMyIsImJveCIsImJveDEiLCJ3ZWF0aGVyIiwiZGF0ZSIsImNhcmQiLCJ0ZWFtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxhQUFhLEdBQUdDLHFFQUFVLENBQUNDLHdEQUFELEVBQVcsT0FBWCxDQUFoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsZ0JBQWdCLEdBQUdILHFFQUFVLENBQUNDLHdEQUFELEVBQVcsVUFBWCxDQUFuQztBQUNBLE1BQU1HLFVBQVUsR0FBR0MsZ0VBQUssQ0FBQ0wscUVBQVUsQ0FBQ0Msd0RBQUQsRUFBVyxRQUFYLENBQVgsQ0FBeEI7QUFDQSxNQUFNSyxLQUFLLEdBQUdDLDZEQUFHLENBQUNDLHVEQUFELEVBQVUsT0FBVixDQUFqQixDQUhrQixDQUtsQjs7QUFMa0Isa0JBT2tCQyxzREFBUSxDQUFDLEVBQUQsQ0FQMUI7QUFBQSxNQU9YQyxVQVBXO0FBQUEsTUFPQ0MsYUFQRDs7QUFBQSxtQkFRb0JGLHNEQUFRLENBQUMsRUFBRCxDQVI1QjtBQUFBLE1BUVhHLFdBUlc7QUFBQSxNQVFFQyxjQVJGOztBQUFBLG1CQVNjSixzREFBUSxDQUFDLEVBQUQsQ0FUdEI7QUFBQSxNQVNYSyxRQVRXO0FBQUEsTUFTREMsV0FUQyxrQkFXbEI7OztBQUVBQyxvRUFBTyxDQUFDYixnQkFBRCxDQUFQLENBQTBCYyxJQUExQixDQUErQixVQUFDQyxJQUFELEVBQVU7QUFDdkMsUUFBTUMsSUFBSSxHQUFHRCxJQUFJLENBQUNDLElBQWxCLENBRHVDLENBQ2Y7O0FBQ3hCUixpQkFBYSxDQUFDUSxJQUFELENBQWIsQ0FGdUMsQ0FHdkM7QUFDRCxHQUpELEVBYmtCLENBa0JsQjs7QUFFQUMsZ0VBQUksQ0FBQ2QsS0FBRCxDQUFKLENBQVlXLElBQVosQ0FBaUIsVUFBQ0MsSUFBRCxFQUFVO0FBQ3pCLFFBQU1DLElBQUksR0FBR0QsSUFBSSxDQUFDRyxLQUFMLENBQVdDLE1BQXhCO0FBQ0FQLGVBQVcsQ0FBQ0ksSUFBRCxDQUFYLENBRnlCLENBRU47QUFDbkI7QUFDRCxHQUpELEVBcEJrQixDQTBCbEI7O0FBRUFILG9FQUFPLENBQUNaLFVBQUQsQ0FBUCxDQUFvQmEsSUFBcEIsQ0FBeUIsVUFBQ0MsSUFBRCxFQUFVO0FBQ2pDLFFBQU1DLElBQUksR0FBR0QsSUFBSSxDQUFDQyxJQUFsQixDQURpQyxDQUNUOztBQUN4Qk4sa0JBQWMsQ0FBQ00sSUFBRCxDQUFkO0FBQ0QsR0FIRDs7QUFJQSxNQUFNSSxXQUFXO0FBQUEsb1dBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNsQlAsZ0ZBQU8sQ0FBQ2pCLGFBQUQsQ0FBUCxDQUF1QmtCLElBQXZCLENBQTRCLFVBQUNPLElBQUQsRUFBVTtBQUNwQ0Esb0JBQUksQ0FBQ0MsSUFBTCxDQUFVQyxHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFVLENBQ3RCO0FBQ0QsaUJBRkQ7QUFHRCxlQUpEOztBQURrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFYSixXQUFXO0FBQUE7QUFBQTtBQUFBLEtBQWpCOztBQU9BSyx5REFBUyxDQUFDLFlBQU07QUFDZEwsZUFBVztBQUNaLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsTUFBTU0sSUFBSSxHQUFHLGdCQUFNO0FBQ2pCLFFBQU1BLElBQUksR0FBR0MsSUFBSSxHQUFHQyxjQUFQLEVBQWI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlKLElBQVo7QUFDRCxHQUhEOztBQUtBLHNCQUNFLHFFQUFDLDhFQUFEO0FBQW9CLFNBQUssRUFBQyxXQUExQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxPQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFFSyx3REFBSyxDQUFDQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBSyxxQkFBUyxFQUFFRCx3REFBSyxDQUFDRSxPQUF0QjtBQUFBLG9DQUNFO0FBQUksdUJBQVMsRUFBRUYsd0RBQUssQ0FBQ0csSUFBckI7QUFBQSw4QkFBNkIzQixVQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFJLG1CQUFLLEVBQUU7QUFBRTRCLHFCQUFLLEVBQUUsS0FBVDtBQUFnQkMsc0JBQU0sRUFBRTtBQUF4QixlQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBS0UscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLHVCQUFYO0FBQUEscUNBQ0U7QUFBUSx5QkFBUyxFQUFFTCx3REFBSyxDQUFDTSxHQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQWFFO0FBQUssbUJBQVMsRUFBQyxPQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFFTix3REFBSyxDQUFDTztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBSyxxQkFBUyxFQUFFUCx3REFBSyxDQUFDRSxPQUF0QjtBQUFBLG9DQUNFO0FBQUksdUJBQVMsRUFBRUYsd0RBQUssQ0FBQ0csSUFBckI7QUFBQSw4QkFBNkJ2QixRQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFJLG1CQUFLLEVBQUU7QUFBRXdCLHFCQUFLLEVBQUUsS0FBVDtBQUFnQkMsc0JBQU0sRUFBRTtBQUF4QixlQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBS0UscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLGtCQUFYO0FBQUEscUNBQ0U7QUFBUSx5QkFBUyxFQUFFTCx3REFBSyxDQUFDTSxHQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRixlQXlCRTtBQUFLLG1CQUFTLEVBQUMsT0FBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBRU4sd0RBQUssQ0FBQ1E7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUsscUJBQVMsRUFBRVIsd0RBQUssQ0FBQ0UsT0FBdEI7QUFBQSxvQ0FDRTtBQUFJLHVCQUFTLEVBQUVGLHdEQUFLLENBQUNHLElBQXJCO0FBQUEsd0JBQTRCekI7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUksbUJBQUssRUFBRTtBQUFFMEIscUJBQUssRUFBRSxLQUFUO0FBQWdCQyxzQkFBTSxFQUFFO0FBQXhCLGVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFLRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUMsb0JBQVg7QUFBQSxxQ0FDRTtBQUFRLHlCQUFTLEVBQUVMLHdEQUFLLENBQUNNLEdBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQXVDRTtBQUFLLGlCQUFTLEVBQUVOLHdEQUFLLENBQUNTLEdBQXRCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLEtBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsT0FBZjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBRVQsd0RBQUssQ0FBQ1UsSUFBdEI7QUFBQSxzQ0FDRTtBQUFLLHlCQUFTLEVBQUVWLHdEQUFLLENBQUNXO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFLLHlCQUFTLEVBQUVYLHdEQUFLLENBQUNZO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQU9FO0FBQUsscUJBQVMsRUFBQyxPQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFFWix3REFBSyxDQUFDYSxJQUF0QjtBQUFBLHFDQUNFLHFFQUFDLCtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFjRTtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxPQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFFYix3REFBSyxDQUFDYztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUdTLEdBSFQsZUFJRTtBQUFLLHFCQUFTLEVBQUMsT0FBZjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBRWQsd0RBQUssQ0FBQzFCO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUVELENBbkhEOztHQUFNTixLOztLQUFBQSxLO0FBcUhTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41YzhlODEwZThkYzQ3ZDU4MmUxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJkU2FsZVJlcG9ydCBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9jYXJkcy9DYXJkU2FsZVJlcG9ydFwiO1xuaW1wb3J0IENvbnRhaW5lckRhc2hib2FyZCBmcm9tIFwifi9jb21wb25lbnRzL2xheW91dHMvQ29udGFpbmVyRGFzaGJvYXJkXCI7XG5pbXBvcnQgeyBnZXREb2NzLCBjb2xsZWN0aW9uLCBxdWVyeSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IGRhdGFiYXNlIH0gZnJvbSBcIn4vZmlyZWJhc2VDb25maWdcIjtcbmNvbnN0IHVzZXJzSW5zdGFuY2UgPSBjb2xsZWN0aW9uKGRhdGFiYXNlLCBcInVzZXJzXCIpO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tIFwifi9maXJlYmFzZUNvbmZpZ1wiO1xuaW1wb3J0IHsgcmVmLCBsaXN0IH0gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIjtcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBlbXBsb3llZUluc3RhbmNlID0gY29sbGVjdGlvbihkYXRhYmFzZSwgXCJlbXBsb3llZVwiKTtcbiAgY29uc3QgYWxsTWVldGluZyA9IHF1ZXJ5KGNvbGxlY3Rpb24oZGF0YWJhc2UsIFwiZXZlbnRzXCIpKTtcbiAgY29uc3QgZmlsZXMgPSByZWYoc3RvcmFnZSwgXCJmaWxlL1wiKTtcblxuICAvLyBjb25zdCBmaWxlTGlzdFJlZiA9IHJlZihzdG9yYWdlLCBcImZpbGUvXCIpO1xuXG4gIGNvbnN0IFtjb3VudFVzZXJzLCBzZXRDb3VudFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2FsbE1lZXRpbmdzLCBzZXRBbGxNZWV0aW5nc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthbGxmaWxlcywgc2V0QWxsRmlsZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIC8vPyBjb3VudCBhbGwgZW1wbG95ZXNzXG5cbiAgZ2V0RG9jcyhlbXBsb3llZUluc3RhbmNlKS50aGVuKChzbmFwKSA9PiB7XG4gICAgY29uc3Qgc2l6ZSA9IHNuYXAuc2l6ZTsgLy8gd2lsbCByZXR1cm4gdGhlIGNvbGxlY3Rpb24gc2l6ZVxuICAgIHNldENvdW50VXNlcnMoc2l6ZSk7XG4gICAgLy8gY29uc29sZS5sb2coc2l6ZSk7XG4gIH0pO1xuICAvLz8gY291bnQgYWxsIGZpbGVcblxuICBsaXN0KGZpbGVzKS50aGVuKChzbmFwKSA9PiB7XG4gICAgY29uc3Qgc2l6ZSA9IHNuYXAuaXRlbXMubGVuZ3RoO1xuICAgIHNldEFsbEZpbGVzKHNpemUpOyAvLyB3aWxsIHJldHVybiB0aGUgY29sbGVjdGlvbiBzaXplXG4gICAgLy8gY29uc29sZS5sb2coc2l6ZSk7XG4gIH0pO1xuXG4gIC8vPyBjb3VudCBhbGwgbWVldGluZ3NcblxuICBnZXREb2NzKGFsbE1lZXRpbmcpLnRoZW4oKHNuYXApID0+IHtcbiAgICBjb25zdCBzaXplID0gc25hcC5zaXplOyAvLyB3aWxsIHJldHVybiB0aGUgY29sbGVjdGlvbiBzaXplXG4gICAgc2V0QWxsTWVldGluZ3Moc2l6ZSk7XG4gIH0pO1xuICBjb25zdCBnZXRBbGxVc2VycyA9IGFzeW5jICgpID0+IHtcbiAgICBnZXREb2NzKHVzZXJzSW5zdGFuY2UpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGRhdGEuZG9jcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbS5kYXRhKCkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0QWxsVXNlcnMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHRpbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgdGltZSA9IERhdGUoKS50b0xvY2FsZVN0cmluZygpO1xuICAgIGNvbnNvbGUubG9nKHRpbWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lckRhc2hib2FyZCB0aXRsZT0nRGFzaGJvYXJkJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTQnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmltZzF9PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRlbnR9PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZS50ZXh0fT4ge2NvdW50VXNlcnN9IDwvaDI+XG4gICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICBFbXBsb3llZSBIaXJlZFxuICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICA8TGluayBocmVmPScvZW1wbG95ZWVzLW1hbmFnZW1lbnQnPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5idG59PkNsaWNrIE1lPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW1nMn0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGVudH0+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlLnRleHR9PiB7YWxsZmlsZXN9IDwvaDI+XG4gICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICBGaWxlcyBhcmUgU3RvcmVkXG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9maWxlLW1hbmFnZW1lbnQnPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5idG59PkNsaWNrIE1lPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW1nM30+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGVudH0+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlLnRleHR9PnthbGxNZWV0aW5nc308L2gyPlxuICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgTWVldGluZ3MgU2NoZWR1bGVkXG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9tZWV0aW5nLXNjaGVkdWxlcic+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLmJ0bn0+Q2xpY2sgTWU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYm94fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ib3gxfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUud2VhdGhlcn0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmRhdGV9PjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC04Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcmR9PlxuICAgICAgICAgICAgICAgIDxDYXJkU2FsZVJlcG9ydCAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC04Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRlYW19PjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC00Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnN0b3JhZ2V9PjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXJEYXNoYm9hcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=