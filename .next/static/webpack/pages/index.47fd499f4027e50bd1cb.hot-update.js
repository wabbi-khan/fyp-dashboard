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
/* harmony import */ var E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_shared_cards_CardRecentOrders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/shared/cards/CardRecentOrders */ "./components/shared/cards/CardRecentOrders.jsx");
/* harmony import */ var _components_shared_cards_CardSaleReport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/shared/cards/CardSaleReport */ "./components/shared/cards/CardSaleReport.jsx");
/* harmony import */ var _components_shared_cards_CardEarning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/shared/cards/CardEarning */ "./components/shared/cards/CardEarning.jsx");
/* harmony import */ var _components_shared_cards_CardStatics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/shared/cards/CardStatics */ "./components/shared/cards/CardStatics.jsx");
/* harmony import */ var _components_layouts_ContainerDashboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/components/layouts/ContainerDashboard */ "./components/layouts/ContainerDashboard.jsx");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _components_shared_cards_CardTopCountries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/components/shared/cards/CardTopCountries */ "./components/shared/cards/CardTopCountries.jsx");
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/firebaseConfig */ "./firebaseConfig.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);




var _jsxFileName = "E:\\FYP\\admin-dashboard\\martfury-admin-react\\pages\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();







 // import { useDispatch } from "react-redux";
// import { toggleDrawerMenu } from "~/store/app/action";



var usersInstance = Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_9__["collection"])(_firebaseConfig__WEBPACK_IMPORTED_MODULE_11__["database"], "users");


var Index = function Index() {
  _s();

  // const dispatch = useDispatch();
  var getAllUsers = /*#__PURE__*/function () {
    var _ref = Object(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_9__["getDocs"])(usersInstance).then(function (data) {
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_ContainerDashboard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Dashboard",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: "Team Members:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "Wahab khan (A18BSIT037)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "Syed Saif Uddin (A18BSIT032)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "Rushda khan (A18BSIT015)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container pt-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-6",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "card",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              "class": "card-img-top",
              src: "/img/1.png",
              alt: "Card image cap"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              "class": "card-body",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                "class": "card-title",
                children: "Employees Management"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                "class": "card-text",
                children: "Some quick example text to build on the card title and make up the bulk of the card's content."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
                href: "/employees-management",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  "class": "btn btn-primary",
                  style: {
                    fontSize: "15px"
                  },
                  children: "Click Me"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-6",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "card",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              "class": "card-img-top",
              src: "/img/4.png",
              alt: "Card image cap"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              "class": "card-body",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                "class": "card-title",
                children: "Files Management"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                "class": "card-text",
                children: "Some quick example text to build on the card title and make up the bulk of the card's content."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
                href: "/file-management",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  "class": "btn btn-primary",
                  style: {
                    fontSize: "15px"
                  },
                  children: "Click Me"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row pt-4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-6",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "card",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              "class": "card-img-top",
              src: "/img/3.png",
              alt: "Card image cap"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              "class": "card-body",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                "class": "card-title",
                children: "Meeting Scheduler"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                "class": "card-text",
                children: "Some quick example text to build on the card title and make up the bulk of the card's content."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
                href: "/meeting-scheduler",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  "class": "btn btn-primary",
                  style: {
                    fontSize: "15px"
                  },
                  children: "Click Me"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};

_s(Index, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbInVzZXJzSW5zdGFuY2UiLCJjb2xsZWN0aW9uIiwiZGF0YWJhc2UiLCJJbmRleCIsImdldEFsbFVzZXJzIiwiZ2V0RG9jcyIsInRoZW4iLCJkYXRhIiwiZG9jcyIsIm1hcCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLElBQU1BLGFBQWEsR0FBR0MscUVBQVUsQ0FBQ0MseURBQUQsRUFBVyxPQUFYLENBQWhDO0FBQ0E7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQjtBQUNBLE1BQU1DLFdBQVc7QUFBQSxrVkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2xCQyxnRkFBTyxDQUFDTCxhQUFELENBQVAsQ0FBdUJNLElBQXZCLENBQTRCLFVBQUNDLElBQUQsRUFBVTtBQUNwQztBQUNBQSxvQkFBSSxDQUFDQyxJQUFMLENBQVVDLEdBQVYsQ0FBYyxVQUFDQyxJQUFELEVBQVU7QUFDdEJDLHlCQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBSSxDQUFDSCxJQUFMLEVBQVo7QUFDRCxpQkFGRDtBQUdELGVBTEQ7O0FBRGtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVhILFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBUUFTLHlEQUFTLENBQUMsWUFBTTtBQUNkVCxlQUFXO0FBQ1osR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNFLHFFQUFDLDhFQUFEO0FBQW9CLFNBQUssRUFBQyxXQUExQjtBQUFBLDRCQUNFO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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RUFBQyxpREFBRDtBQUFNLG9CQUFJLEVBQUMsb0JBQVg7QUFBQSx1Q0FDRTtBQUFHLDJCQUFNLGlCQUFUO0FBQTJCLHVCQUFLLEVBQUU7QUFBRUEsNEJBQVEsRUFBRTtBQUFaLG1CQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkZELENBM0dEOztHQUFNWCxLOztLQUFBQSxLO0FBNkdTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40N2ZkNDk5ZjQwMjdlNTBiZDFjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcmRSZWNlbnRPcmRlcnMgZnJvbSBcIn4vY29tcG9uZW50cy9zaGFyZWQvY2FyZHMvQ2FyZFJlY2VudE9yZGVyc1wiO1xuaW1wb3J0IENhcmRTYWxlUmVwb3J0IGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL2NhcmRzL0NhcmRTYWxlUmVwb3J0XCI7XG5pbXBvcnQgQ2FyZEVhcm5pbmcgZnJvbSBcIn4vY29tcG9uZW50cy9zaGFyZWQvY2FyZHMvQ2FyZEVhcm5pbmdcIjtcbmltcG9ydCBDYXJkU3RhdGljcyBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9jYXJkcy9DYXJkU3RhdGljc1wiO1xuaW1wb3J0IENvbnRhaW5lckRhc2hib2FyZCBmcm9tIFwifi9jb21wb25lbnRzL2xheW91dHMvQ29udGFpbmVyRGFzaGJvYXJkXCI7XG5pbXBvcnQgeyBnZXREb2NzLCBjb2xsZWN0aW9uIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuLy8gaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbi8vIGltcG9ydCB7IHRvZ2dsZURyYXdlck1lbnUgfSBmcm9tIFwifi9zdG9yZS9hcHAvYWN0aW9uXCI7XG5pbXBvcnQgQ2FyZFRvcENvdW50cmllcyBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9jYXJkcy9DYXJkVG9wQ291bnRyaWVzXCI7XG5pbXBvcnQgeyBkYXRhYmFzZSB9IGZyb20gXCJ+L2ZpcmViYXNlQ29uZmlnXCI7XG5jb25zdCB1c2Vyc0luc3RhbmNlID0gY29sbGVjdGlvbihkYXRhYmFzZSwgXCJ1c2Vyc1wiKTtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIC8vIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgZ2V0QWxsVXNlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgZ2V0RG9jcyh1c2Vyc0luc3RhbmNlKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIGRhdGEuZG9jcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbS5kYXRhKCkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0QWxsVXNlcnMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lckRhc2hib2FyZCB0aXRsZT0nRGFzaGJvYXJkJz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoND5UZWFtIE1lbWJlcnM6PC9oND5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPldhaGFiIGtoYW4gKEExOEJTSVQwMzcpPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPlN5ZWQgU2FpZiBVZGRpbiAoQTE4QlNJVDAzMik8L2gzPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+UnVzaGRhIGtoYW4gKEExOEJTSVQwMTUpPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBwdC00Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmQnPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPSdjYXJkLWltZy10b3AnIHNyYz0nL2ltZy8xLnBuZycgYWx0PSdDYXJkIGltYWdlIGNhcCcgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY2FyZC1ib2R5Jz5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9J2NhcmQtdGl0bGUnPkVtcGxveWVlcyBNYW5hZ2VtZW50PC9oNT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz0nY2FyZC10ZXh0Jz5cbiAgICAgICAgICAgICAgICAgIFNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwXG4gICAgICAgICAgICAgICAgICB0aGUgYnVsayBvZiB0aGUgY2FyZCdzIGNvbnRlbnQuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9lbXBsb3llZXMtbWFuYWdlbWVudCc+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz0nYnRuIGJ0bi1wcmltYXJ5JyBzdHlsZT17eyBmb250U2l6ZTogXCIxNXB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIENsaWNrIE1lXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkJz5cbiAgICAgICAgICAgICAgPGltZyBjbGFzcz0nY2FyZC1pbWctdG9wJyBzcmM9Jy9pbWcvNC5wbmcnIGFsdD0nQ2FyZCBpbWFnZSBjYXAnIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmQtYm9keSc+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPSdjYXJkLXRpdGxlJz5GaWxlcyBNYW5hZ2VtZW50PC9oNT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz0nY2FyZC10ZXh0Jz5cbiAgICAgICAgICAgICAgICAgIFNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwXG4gICAgICAgICAgICAgICAgICB0aGUgYnVsayBvZiB0aGUgY2FyZCdzIGNvbnRlbnQuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9maWxlLW1hbmFnZW1lbnQnPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9J2J0biBidG4tcHJpbWFyeScgc3R5bGU9e3sgZm9udFNpemU6IFwiMTVweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICBDbGljayBNZVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcHQtNCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmQnPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPSdjYXJkLWltZy10b3AnIHNyYz0nL2ltZy8zLnBuZycgYWx0PSdDYXJkIGltYWdlIGNhcCcgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY2FyZC1ib2R5Jz5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9J2NhcmQtdGl0bGUnPk1lZXRpbmcgU2NoZWR1bGVyPC9oNT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz0nY2FyZC10ZXh0Jz5cbiAgICAgICAgICAgICAgICAgIFNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwXG4gICAgICAgICAgICAgICAgICB0aGUgYnVsayBvZiB0aGUgY2FyZCdzIGNvbnRlbnQuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9tZWV0aW5nLXNjaGVkdWxlcic+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz0nYnRuIGJ0bi1wcmltYXJ5JyBzdHlsZT17eyBmb250U2l6ZTogXCIxNXB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIENsaWNrIE1lXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxkaXY+XG4gICAgICAgIDxoMT5Tb21lIENvbXBhbnkgRGV0YWlscyBPbiBEYXNoYm9hcmQ8L2gxPlxuICAgICAgPC9kaXY+ICovfVxuICAgICAgey8qIDxzZWN0aW9uIGNsYXNzTmFtZT0ncHMtZGFzaGJvYXJkJyBpZD0naG9tZXBhZ2UnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHMtc2VjdGlvbl9fbGVmdCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhsLTggY29sLTEyJz5cbiAgICAgICAgICAgICAgPENhcmRTYWxlUmVwb3J0IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteGwtNCBjb2wtMTInPlxuICAgICAgICAgICAgICA8Q2FyZEVhcm5pbmcgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxDYXJkUmVjZW50T3JkZXJzIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHMtc2VjdGlvbl9fcmlnaHQnPlxuICAgICAgICAgIDxDYXJkU3RhdGljcyAvPlxuICAgICAgICAgIDxDYXJkVG9wQ291bnRyaWVzIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPiAqL31cbiAgICA8L0NvbnRhaW5lckRhc2hib2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==