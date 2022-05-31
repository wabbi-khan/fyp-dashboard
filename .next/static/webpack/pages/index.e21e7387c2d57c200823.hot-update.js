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
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./style.module.css */ "./pages/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_13__);




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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.img1,
            children: "asdfc"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "img1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "img1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbInVzZXJzSW5zdGFuY2UiLCJjb2xsZWN0aW9uIiwiZGF0YWJhc2UiLCJJbmRleCIsImdldEFsbFVzZXJzIiwiZ2V0RG9jcyIsInRoZW4iLCJkYXRhIiwiZG9jcyIsIm1hcCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0Iiwic3R5bGUiLCJpbWcxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLElBQU1BLGFBQWEsR0FBR0MscUVBQVUsQ0FBQ0MseURBQUQsRUFBVyxPQUFYLENBQWhDO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCO0FBQ0EsTUFBTUMsV0FBVztBQUFBLGtWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbEJDLGdGQUFPLENBQUNMLGFBQUQsQ0FBUCxDQUF1Qk0sSUFBdkIsQ0FBNEIsVUFBQ0MsSUFBRCxFQUFVO0FBQ3BDO0FBQ0FBLG9CQUFJLENBQUNDLElBQUwsQ0FBVUMsR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBVTtBQUN0QkMseUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFJLENBQUNILElBQUwsRUFBWjtBQUNELGlCQUZEO0FBR0QsZUFMRDs7QUFEa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWEgsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFRQVMseURBQVMsQ0FBQyxZQUFNO0FBQ2RULGVBQVc7QUFDWixHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0UscUVBQUMsOEVBQUQ7QUFBb0IsU0FBSyxFQUFDLFdBQTFCO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLE9BQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUVVLHlEQUFLLENBQUNDLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQUssbUJBQVMsRUFBQyxPQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFPRTtBQUFLLG1CQUFTLEVBQUMsT0FBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxSEQsQ0FuSUQ7O0dBQU1aLEs7O0tBQUFBLEs7QUFxSVNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUyMWU3Mzg3YzJkNTdjMjAwODIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2FyZFJlY2VudE9yZGVycyBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9jYXJkcy9DYXJkUmVjZW50T3JkZXJzXCI7XG5pbXBvcnQgQ2FyZFNhbGVSZXBvcnQgZnJvbSBcIn4vY29tcG9uZW50cy9zaGFyZWQvY2FyZHMvQ2FyZFNhbGVSZXBvcnRcIjtcbmltcG9ydCBDYXJkRWFybmluZyBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9jYXJkcy9DYXJkRWFybmluZ1wiO1xuaW1wb3J0IENhcmRTdGF0aWNzIGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL2NhcmRzL0NhcmRTdGF0aWNzXCI7XG5pbXBvcnQgQ29udGFpbmVyRGFzaGJvYXJkIGZyb20gXCJ+L2NvbXBvbmVudHMvbGF5b3V0cy9Db250YWluZXJEYXNoYm9hcmRcIjtcbmltcG9ydCB7IGdldERvY3MsIGNvbGxlY3Rpb24gfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG4vLyBpbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuLy8gaW1wb3J0IHsgdG9nZ2xlRHJhd2VyTWVudSB9IGZyb20gXCJ+L3N0b3JlL2FwcC9hY3Rpb25cIjtcbmltcG9ydCBDYXJkVG9wQ291bnRyaWVzIGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL2NhcmRzL0NhcmRUb3BDb3VudHJpZXNcIjtcbmltcG9ydCB7IGRhdGFiYXNlIH0gZnJvbSBcIn4vZmlyZWJhc2VDb25maWdcIjtcbmNvbnN0IHVzZXJzSW5zdGFuY2UgPSBjb2xsZWN0aW9uKGRhdGFiYXNlLCBcInVzZXJzXCIpO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLm1vZHVsZS5jc3NcIjtcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICAvLyBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGdldEFsbFVzZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIGdldERvY3ModXNlcnNJbnN0YW5jZSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBkYXRhLmRvY3MubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0uZGF0YSgpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEFsbFVzZXJzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXJEYXNoYm9hcmQgdGl0bGU9J0Rhc2hib2FyZCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC00Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbWcxfT5hc2RmYzwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW1nMSc+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC00Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWcxJz48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8ZGl2PlxuICAgICAgICA8aDM+VGVhbSBNZW1iZXJzOjwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxvbD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxoND5XYWhhYiBraGFuIChBMThCU0lUMDM3KTwvaDQ+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8aDQ+U3llZCBTYWlmIFVkZGluIChBMThCU0lUMDMyKTwvaDQ+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8aDQ+UnVzaGRhIGtoYW4gKEExOEJTSVQwMTUpPC9oND5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvb2w+ICovfVxuICAgICAgey8qIDxkaXY+XG4gICAgICAgIDxoMz5XYWhhYiBraGFuIChBMThCU0lUMDM3KTwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5TeWVkIFNhaWYgVWRkaW4gKEExOEJTSVQwMzIpPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPlJ1c2hkYSBraGFuIChBMThCU0lUMDE1KTwvaDM+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBwdC00Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmQnPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPSdjYXJkLWltZy10b3AnIHNyYz0nL2ltZy8xLnBuZycgYWx0PSdDYXJkIGltYWdlIGNhcCcgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY2FyZC1ib2R5Jz5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9J2NhcmQtdGl0bGUnPkVtcGxveWVlcyBNYW5hZ2VtZW50PC9oNT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz0nY2FyZC10ZXh0Jz5cbiAgICAgICAgICAgICAgICAgIFNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwXG4gICAgICAgICAgICAgICAgICB0aGUgYnVsayBvZiB0aGUgY2FyZCdzIGNvbnRlbnQuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9lbXBsb3llZXMtbWFuYWdlbWVudCc+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz0nYnRuIGJ0bi1wcmltYXJ5JyBzdHlsZT17eyBmb250U2l6ZTogXCIxNXB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIENsaWNrIE1lXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkJz5cbiAgICAgICAgICAgICAgPGltZyBjbGFzcz0nY2FyZC1pbWctdG9wJyBzcmM9Jy9pbWcvNC5wbmcnIGFsdD0nQ2FyZCBpbWFnZSBjYXAnIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmQtYm9keSc+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPSdjYXJkLXRpdGxlJz5GaWxlcyBNYW5hZ2VtZW50PC9oNT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz0nY2FyZC10ZXh0Jz5cbiAgICAgICAgICAgICAgICAgIFNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwXG4gICAgICAgICAgICAgICAgICB0aGUgYnVsayBvZiB0aGUgY2FyZCdzIGNvbnRlbnQuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9maWxlLW1hbmFnZW1lbnQnPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9J2J0biBidG4tcHJpbWFyeScgc3R5bGU9e3sgZm9udFNpemU6IFwiMTVweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICBDbGljayBNZVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcHQtNCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmQnPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPSdjYXJkLWltZy10b3AnIHNyYz0nL2ltZy8zLnBuZycgYWx0PSdDYXJkIGltYWdlIGNhcCcgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY2FyZC1ib2R5Jz5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9J2NhcmQtdGl0bGUnPk1lZXRpbmcgU2NoZWR1bGVyPC9oNT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz0nY2FyZC10ZXh0Jz5cbiAgICAgICAgICAgICAgICAgIFNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwXG4gICAgICAgICAgICAgICAgICB0aGUgYnVsayBvZiB0aGUgY2FyZCdzIGNvbnRlbnQuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9tZWV0aW5nLXNjaGVkdWxlcic+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz0nYnRuIGJ0bi1wcmltYXJ5JyBzdHlsZT17eyBmb250U2l6ZTogXCIxNXB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIENsaWNrIE1lXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiAqL31cbiAgICAgIHsvKiA8ZGl2PlxuICAgICAgICA8aDE+U29tZSBDb21wYW55IERldGFpbHMgT24gRGFzaGJvYXJkPC9oMT5cbiAgICAgIDwvZGl2PiAqL31cbiAgICAgIHsvKiA8c2VjdGlvbiBjbGFzc05hbWU9J3BzLWRhc2hib2FyZCcgaWQ9J2hvbWVwYWdlJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BzLXNlY3Rpb25fX2xlZnQnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14bC04IGNvbC0xMic+XG4gICAgICAgICAgICAgIDxDYXJkU2FsZVJlcG9ydCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhsLTQgY29sLTEyJz5cbiAgICAgICAgICAgICAgPENhcmRFYXJuaW5nIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Q2FyZFJlY2VudE9yZGVycyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BzLXNlY3Rpb25fX3JpZ2h0Jz5cbiAgICAgICAgICA8Q2FyZFN0YXRpY3MgLz5cbiAgICAgICAgICA8Q2FyZFRvcENvdW50cmllcyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj4gKi99XG4gICAgPC9Db250YWluZXJEYXNoYm9hcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=