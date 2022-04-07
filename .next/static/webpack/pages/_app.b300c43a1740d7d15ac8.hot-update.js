webpackHotUpdate_N_E("pages/_app",{

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
    url: "/employees-management",
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
      marginTop: "100px"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvbWVudXMvTWVudVNpZGViYXIuanN4Il0sIm5hbWVzIjpbIk1lbnVTaWRlYmFyIiwicm91dGVyIiwidXNlUm91dGVyIiwibWVudUl0ZW1zIiwidGV4dCIsInVybCIsImljb24iLCJtYXJnaW5Ub3AiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJwYXRobmFtZSIsInBhZGRpbmdCb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN4QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLENBQ2hCO0FBQ0VDLFFBQUksRUFBRSxXQURSO0FBRUVDLE9BQUcsRUFBRSxHQUZQO0FBR0VDLFFBQUksRUFBRTtBQUhSLEdBRGdCLEVBTWhCO0FBQ0VGLFFBQUksRUFBRSxzQkFEUjtBQUVFQyxPQUFHLEVBQUUsdUJBRlA7QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FOZ0IsRUFXaEI7QUFDRUYsUUFBSSxFQUFFLGlCQURSO0FBRUVDLE9BQUcsRUFBRSxTQUZQO0FBR0VDLFFBQUksRUFBRTtBQUhSLEdBWGdCLEVBZ0JoQjtBQUNFRixRQUFJLEVBQUUsbUJBRFI7QUFFRUMsT0FBRyxFQUFFLFlBRlA7QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FoQmdCLENBcUJoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlCZ0IsR0FBbEI7QUFpQ0Esc0JBQ0U7QUFBSSxhQUFTLEVBQUMsTUFBZDtBQUFxQixTQUFLLEVBQUU7QUFBRUMsZUFBUyxFQUFFO0FBQWIsS0FBNUI7QUFBQSxjQUNHSixTQUFTLENBQUNLLEdBQVYsQ0FBYyxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSwwQkFDYjtBQUVFLGlCQUFTLEVBQUVULE1BQU0sQ0FBQ1UsUUFBUCxLQUFvQkYsSUFBSSxDQUFDSixHQUF6QixHQUErQixRQUEvQixHQUEwQyxFQUZ2RDtBQUFBLCtCQUlFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFFSSxJQUFJLENBQUNKLEdBQWpCO0FBQUEsaUNBQ0U7QUFBRyxpQkFBSyxFQUFFO0FBQUVPLDJCQUFhLEVBQUU7QUFBakIsYUFBVjtBQUFBLG9DQUNFO0FBQUcsdUJBQVMsRUFBRUgsSUFBSSxDQUFDSDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUdHLElBQUksQ0FBQ0wsSUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkYsU0FDT00sS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGE7QUFBQSxLQUFkO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUJELENBcEREOztHQUFNVixXO1VBQ1dFLHFEOzs7S0FEWEYsVztBQXNEU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iMzAwYzQzYTE3NDBkN2QxNWFjOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IE1lbnVTaWRlYmFyID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgbWVudUl0ZW1zID0gW1xuICAgIHtcbiAgICAgIHRleHQ6IFwiRGFzaGJvYXJkXCIsXG4gICAgICB1cmw6IFwiL1wiLFxuICAgICAgaWNvbjogXCJpY29uLWhvbWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiRW1wbG95ZWVzIE1hbmFnZW1lbnRcIixcbiAgICAgIHVybDogXCIvZW1wbG95ZWVzLW1hbmFnZW1lbnRcIixcbiAgICAgIGljb246IFwiaWNvbi1kYXRhYmFzZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJGaWxlIE1hbmFnZW1lbnRcIixcbiAgICAgIHVybDogXCIvb3JkZXJzXCIsXG4gICAgICBpY29uOiBcImljb24tYmFnMlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJNZWV0aW5nIFNjaGVkdWxlclwiLFxuICAgICAgdXJsOiBcIi9jdXN0b21lcnNcIixcbiAgICAgIGljb246IFwiaWNvbi11c2VyczJcIixcbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgIHRleHQ6IFwiQ2F0ZWdvcmllc1wiLFxuICAgIC8vICAgdXJsOiBcIi9jYXRlZ29yaWVzXCIsXG4gICAgLy8gICBpY29uOiBcImljb24tdXNlcnMyXCIsXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICB0ZXh0OiBcIlNldHRpbmdzXCIsXG4gICAgLy8gICB1cmw6IFwiL3NldHRpbmdzXCIsXG4gICAgLy8gICBpY29uOiBcImljb24tY29nXCIsXG4gICAgLy8gfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9J21lbnUnIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMDBweFwiIH19PlxuICAgICAge21lbnVJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxsaVxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09IGl0ZW0udXJsID8gXCJhY3RpdmVcIiA6IFwiXCJ9XG4gICAgICAgID5cbiAgICAgICAgICA8TGluayBocmVmPXtpdGVtLnVybH0+XG4gICAgICAgICAgICA8YSBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiBcIjE1cHhcIiB9fT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtpdGVtLmljb259PjwvaT5cbiAgICAgICAgICAgICAge2l0ZW0udGV4dH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudVNpZGViYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9