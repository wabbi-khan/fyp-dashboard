webpackHotUpdate_N_E("pages/employees-management",{

/***/ "./firebaseConfig.js":
/*!***************************!*\
  !*** ./firebaseConfig.js ***!
  \***************************/
/*! exports provided: app, database, storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "database", function() { return database; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
// Import the functions you need from the SDKs you need



var firebaseConfig = {
  apiKey: "AIzaSyD2fFro448NgCMuR8ZrQBP2iT5l3qoSdmg",
  authDomain: "learn-189ba.firebaseapp.com",
  projectId: "learn-189ba",
  storageBucket: "learn-189ba.appspot.com",
  messagingSenderId: "9257843948",
  appId: "1:9257843948:web:dfa51db592a39a0d5379c9",
  measurementId: "G-TQWCCB47FP"
}; // Initialize Firebase

var app = Object(firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"])(firebaseConfig);
var database = Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["getFirestore"])(app);
var storage = Object(firebase_storage__WEBPACK_IMPORTED_MODULE_2__["getStorage"])(app);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmlyZWJhc2VDb25maWcuanMiXSwibmFtZXMiOlsiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwiaW5pdGlhbGl6ZUFwcCIsImRhdGFiYXNlIiwiZ2V0RmlyZXN0b3JlIiwic3RvcmFnZSIsImdldFN0b3JhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsY0FBYyxHQUFHO0FBQ25CQyxRQUFNLEVBQUUseUNBRFc7QUFFbkJDLFlBQVUsRUFBRSw2QkFGTztBQUduQkMsV0FBUyxFQUFFLGFBSFE7QUFJbkJDLGVBQWEsRUFBRSx5QkFKSTtBQUtuQkMsbUJBQWlCLEVBQUUsWUFMQTtBQU1uQkMsT0FBSyxFQUFFLHlDQU5ZO0FBT25CQyxlQUFhLEVBQUU7QUFQSSxDQUF2QixDLENBVUE7O0FBQ08sSUFBTUMsR0FBRyxHQUFHQyxrRUFBYSxDQUFDVCxjQUFELENBQXpCO0FBRUEsSUFBTVUsUUFBUSxHQUFHQyx1RUFBWSxDQUFDSCxHQUFELENBQTdCO0FBQ0EsSUFBTUksT0FBTyxHQUFHQyxtRUFBVSxDQUFDTCxHQUFELENBQTFCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VtcGxveWVlcy1tYW5hZ2VtZW50LjczYWY3NTg3ODI5ZDdhNWNiNTM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSdcclxuaW1wb3J0IHsgZ2V0U3RvcmFnZSB9IGZyb20gJ2ZpcmViYXNlL3N0b3JhZ2UnXHJcblxyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5RDJmRnJvNDQ4TmdDTXVSOFpyUUJQMmlUNWwzcW9TZG1nXCIsXHJcbiAgICBhdXRoRG9tYWluOiBcImxlYXJuLTE4OWJhLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcImxlYXJuLTE4OWJhXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcImxlYXJuLTE4OWJhLmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI5MjU3ODQzOTQ4XCIsXHJcbiAgICBhcHBJZDogXCIxOjkyNTc4NDM5NDg6d2ViOmRmYTUxZGI1OTJhMzlhMGQ1Mzc5YzlcIixcclxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy1UUVdDQ0I0N0ZQXCJcclxufVxyXG5cclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5leHBvcnQgY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcblxyXG5leHBvcnQgY29uc3QgZGF0YWJhc2UgPSBnZXRGaXJlc3RvcmUoYXBwKTtcclxuZXhwb3J0IGNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKGFwcCkiXSwic291cmNlUm9vdCI6IiJ9