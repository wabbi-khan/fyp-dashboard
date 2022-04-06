webpackHotUpdate_N_E("pages/index",{

/***/ "./components/shared/menus/MenuSidebar.jsx":
/*!*************************************************!*\
  !*** ./components/shared/menus/MenuSidebar.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "E:\\FYP\\admin-dashboard\\martfury-admin-react\\components\\shared\\menus\\MenuSidebar.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var MenuSidebar = function MenuSidebar() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var menuItems = [{
    text: "Dashboard",
    url: "/",
    icon: "icon-home"
  }, {
    text: "Employees Management",
    url: "/products",
    icon: "icon-database"
  }, {
    text: "File Management",
    url: "/orders",
    icon: "icon-bag2"
  }, {
    text: "Meeting Scheduler",
    url: "/customers",
    icon: "icon-users2"
  } // {
  //   text: "Categories",
  //   url: "/categories",
  //   icon: "icon-users2",
  // },
  // {
  //   text: "Settings",
  //   url: "/settings",
  //   icon: "icon-cog",
  // },
  ];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: "menu",
    style: {
      paddingTop: "20px"
    },
    children: menuItems.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: router.pathname === item.url ? "active" : "",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: item.url,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            style: {
              paddingBottom: "15px"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: item.icon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, _this), item.text]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, _this);
};

_s(MenuSidebar, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = MenuSidebar;
/* harmony default export */ __webpack_exports__["default"] = (MenuSidebar);

var _c;

$RefreshReg$(_c, "MenuSidebar");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvbWVudXMvTWVudVNpZGViYXIuanN4Il0sIm5hbWVzIjpbIk1lbnVTaWRlYmFyIiwicm91dGVyIiwidXNlUm91dGVyIiwibWVudUl0ZW1zIiwidGV4dCIsInVybCIsImljb24iLCJwYWRkaW5nVG9wIiwibWFwIiwiaXRlbSIsImluZGV4IiwicGF0aG5hbWUiLCJwYWRkaW5nQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFDeEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFNBQVMsR0FBRyxDQUNoQjtBQUNFQyxRQUFJLEVBQUUsV0FEUjtBQUVFQyxPQUFHLEVBQUUsR0FGUDtBQUdFQyxRQUFJLEVBQUU7QUFIUixHQURnQixFQU1oQjtBQUNFRixRQUFJLEVBQUUsc0JBRFI7QUFFRUMsT0FBRyxFQUFFLFdBRlA7QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FOZ0IsRUFXaEI7QUFDRUYsUUFBSSxFQUFFLGlCQURSO0FBRUVDLE9BQUcsRUFBRSxTQUZQO0FBR0VDLFFBQUksRUFBRTtBQUhSLEdBWGdCLEVBZ0JoQjtBQUNFRixRQUFJLEVBQUUsbUJBRFI7QUFFRUMsT0FBRyxFQUFFLFlBRlA7QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FoQmdCLENBcUJoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlCZ0IsR0FBbEI7QUFpQ0Esc0JBQ0U7QUFBSSxhQUFTLEVBQUMsTUFBZDtBQUFxQixTQUFLLEVBQUU7QUFBRUMsZ0JBQVUsRUFBRTtBQUFkLEtBQTVCO0FBQUEsY0FDR0osU0FBUyxDQUFDSyxHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsMEJBQ2I7QUFFRSxpQkFBUyxFQUFFVCxNQUFNLENBQUNVLFFBQVAsS0FBb0JGLElBQUksQ0FBQ0osR0FBekIsR0FBK0IsUUFBL0IsR0FBMEMsRUFGdkQ7QUFBQSwrQkFJRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBRUksSUFBSSxDQUFDSixHQUFqQjtBQUFBLGlDQUNFO0FBQUcsaUJBQUssRUFBRTtBQUFFTywyQkFBYSxFQUFFO0FBQWpCLGFBQVY7QUFBQSxvQ0FDRTtBQUFHLHVCQUFTLEVBQUVILElBQUksQ0FBQ0g7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVHRyxJQUFJLENBQUNMLElBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGLFNBQ09NLEtBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURhO0FBQUEsS0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlCRCxDQXBERDs7R0FBTVYsVztVQUNXRSxxRDs7O0tBRFhGLFc7QUFzRFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFjMDgwOTBlNjc4YzBmMWQzZWU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgTWVudVNpZGViYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBtZW51SXRlbXMgPSBbXG4gICAge1xuICAgICAgdGV4dDogXCJEYXNoYm9hcmRcIixcbiAgICAgIHVybDogXCIvXCIsXG4gICAgICBpY29uOiBcImljb24taG9tZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJFbXBsb3llZXMgTWFuYWdlbWVudFwiLFxuICAgICAgdXJsOiBcIi9wcm9kdWN0c1wiLFxuICAgICAgaWNvbjogXCJpY29uLWRhdGFiYXNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIkZpbGUgTWFuYWdlbWVudFwiLFxuICAgICAgdXJsOiBcIi9vcmRlcnNcIixcbiAgICAgIGljb246IFwiaWNvbi1iYWcyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIk1lZXRpbmcgU2NoZWR1bGVyXCIsXG4gICAgICB1cmw6IFwiL2N1c3RvbWVyc1wiLFxuICAgICAgaWNvbjogXCJpY29uLXVzZXJzMlwiLFxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgdGV4dDogXCJDYXRlZ29yaWVzXCIsXG4gICAgLy8gICB1cmw6IFwiL2NhdGVnb3JpZXNcIixcbiAgICAvLyAgIGljb246IFwiaWNvbi11c2VyczJcIixcbiAgICAvLyB9LFxuICAgIC8vIHtcbiAgICAvLyAgIHRleHQ6IFwiU2V0dGluZ3NcIixcbiAgICAvLyAgIHVybDogXCIvc2V0dGluZ3NcIixcbiAgICAvLyAgIGljb246IFwiaWNvbi1jb2dcIixcbiAgICAvLyB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT0nbWVudScgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIyMHB4XCIgfX0+XG4gICAgICB7bWVudUl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgPGxpXG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PT0gaXRlbS51cmwgPyBcImFjdGl2ZVwiIDogXCJcIn1cbiAgICAgICAgPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0udXJsfT5cbiAgICAgICAgICAgIDxhIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IFwiMTVweFwiIH19PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2l0ZW0uaWNvbn0+PC9pPlxuICAgICAgICAgICAgICB7aXRlbS50ZXh0fVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51U2lkZWJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=