webpackHotUpdate_N_E("pages/file-management",{

/***/ "./pages/file-management/index.jsx":
/*!*****************************************!*\
  !*** ./pages/file-management/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layouts_ContainerDefault__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/layouts/ContainerDefault */ "./components/layouts/ContainerDefault.jsx");
/* harmony import */ var _components_shared_headers_HeaderDashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/shared/headers/HeaderDashboard */ "./components/shared/headers/HeaderDashboard.jsx");
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/firebaseConfig */ "./firebaseConfig.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var _public_img_cloudicon_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/public/img/cloudicon.png */ "./public/img/cloudicon.png");
/* harmony import */ var _public_img_cloudicon_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_cloudicon_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.module.css */ "./pages/file-management/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "E:\\FYP\\admin-dashboard\\martfury-admin-react\\pages\\file-management\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();









var index = function index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      searchTerm = _useState[0],
      setSearchTerm = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      fileUpload = _useState2[0],
      setFileUpload = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      fileList = _useState3[0],
      setFileList = _useState3[1];

  var fileListRef = Object(firebase_storage__WEBPACK_IMPORTED_MODULE_6__["ref"])(_firebaseConfig__WEBPACK_IMPORTED_MODULE_5__["storage"], "file/"); //Upload File

  var uploadFile = function uploadFile() {
    if (fileUpload == null) return;
    var fileRef = Object(firebase_storage__WEBPACK_IMPORTED_MODULE_6__["ref"])(_firebaseConfig__WEBPACK_IMPORTED_MODULE_5__["storage"], "file/".concat(fileUpload.name));
    Object(firebase_storage__WEBPACK_IMPORTED_MODULE_6__["uploadBytes"])(fileRef, fileUpload).then(function (snapshot) {
      // console.log(snapshot);
      Object(firebase_storage__WEBPACK_IMPORTED_MODULE_6__["getDownloadURL"])(snapshot.ref).then(function (url) {
        setFileList(function (prev) {
          return [].concat(Object(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prev), [url]);
        });
      });
      alert("File Uploaded");
    });
  }; // Delete file


  var deleteFile = function deleteFile(fileName) {
    var desertRef = Object(firebase_storage__WEBPACK_IMPORTED_MODULE_6__["ref"])(_firebaseConfig__WEBPACK_IMPORTED_MODULE_5__["storage"], "file/".concat(fileName)); // Delete the file

    Object(firebase_storage__WEBPACK_IMPORTED_MODULE_6__["deleteObject"])(desertRef).then(function () {
      // File deleted successfully
      console.log("woww file delete");
    })["catch"](function (error) {
      // Uh-oh, an error occurred!
      console.log(error);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    //   const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
    //     console.log("Current data: ", doc.data());
    // });
    Object(firebase_storage__WEBPACK_IMPORTED_MODULE_6__["listAll"])(fileListRef).then(function (res) {
      // console.log(res);
      res.items.forEach(function (item) {
        // console.log(item.name);
        Object(firebase_storage__WEBPACK_IMPORTED_MODULE_6__["getDownloadURL"])(item).then(function (url) {
          setFileList(function (prev) {
            return [].concat(Object(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prev), [{
              url: url,
              name: item.name
            }]);
          });
        });
      });
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_ContainerDefault__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "File Manage",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_headers_HeaderDashboard__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: "File Management",
        description: "File Listing "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "p-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "file",
          className: _style_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.field,
          onChange: function onChange(e) {
            setFileUpload(e.target.files[0]);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: uploadFile,
          className: _style_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.btn,
          children: "Upload File"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-6",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input,
            type: "text",
            placeholder: "Search Employee...",
            onChange: function onChange(event) {
              setSearchTerm(event.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: "table border shadow mt-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            className: "thead-dark ",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                scope: "col",
                children: "#"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                scope: "col",
                children: "File Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                scope: "col",
                children: "Action"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: fileList.filter(function (file) {
              if (searchTerm == "") {
                return file;
              } else if (file.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return file;
              }
            }).map(function (item, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: [" ", index + 1]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: item.url,
                  target: "_blank",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: item.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: _style_module_css__WEBPACK_IMPORTED_MODULE_8___default.a["delete"],
                    onClick: function onClick(e) {
                      return deleteFile(item.name);
                    },
                    children: "Delete"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 21
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(index, "65NnBPAn9KphJXpCkcgr4KH1hnw=");

/* harmony default export */ __webpack_exports__["default"] = (index);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./public/img/cloudicon.png":
/*!**********************************!*\
  !*** ./public/img/cloudicon.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cloudicon-d05b965557338f81a56a021098f3451b.png";

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlsZS1tYW5hZ2VtZW50L2luZGV4LmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ltZy9jbG91ZGljb24ucG5nIl0sIm5hbWVzIjpbImluZGV4IiwidXNlU3RhdGUiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsImZpbGVVcGxvYWQiLCJzZXRGaWxlVXBsb2FkIiwiZmlsZUxpc3QiLCJzZXRGaWxlTGlzdCIsImZpbGVMaXN0UmVmIiwicmVmIiwic3RvcmFnZSIsInVwbG9hZEZpbGUiLCJmaWxlUmVmIiwibmFtZSIsInVwbG9hZEJ5dGVzIiwidGhlbiIsInNuYXBzaG90IiwiZ2V0RG93bmxvYWRVUkwiLCJ1cmwiLCJwcmV2IiwiYWxlcnQiLCJkZWxldGVGaWxlIiwiZmlsZU5hbWUiLCJkZXNlcnRSZWYiLCJkZWxldGVPYmplY3QiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJsaXN0QWxsIiwicmVzIiwiaXRlbXMiLCJmb3JFYWNoIiwiaXRlbSIsInN0eWxlIiwiZmllbGQiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJidG4iLCJpbnB1dCIsImV2ZW50IiwidmFsdWUiLCJmaWx0ZXIiLCJmaWxlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ2tCQyxzREFBUSxDQUFDLEVBQUQsQ0FEMUI7QUFBQSxNQUNYQyxVQURXO0FBQUEsTUFDQ0MsYUFERDs7QUFBQSxtQkFFa0JGLHNEQUFRLENBQUMsSUFBRCxDQUYxQjtBQUFBLE1BRVhHLFVBRlc7QUFBQSxNQUVDQyxhQUZEOztBQUFBLG1CQUdjSixzREFBUSxDQUFDLEVBQUQsQ0FIdEI7QUFB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R0FBRyxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFO0FBQUcsc0JBQUksRUFBRWlDLElBQUksQ0FBQ2YsR0FBZDtBQUFtQix3QkFBTSxFQUFDLFFBQTFCO0FBQUEseUNBQ0U7QUFBQSw4QkFBS2UsSUFBSSxDQUFDcEI7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRixlQU9FO0FBQUEseUNBQ0U7QUFDRSw2QkFBUyxFQUFFcUIsd0RBQUssVUFEbEI7QUFFRSwyQkFBTyxFQUFFLGlCQUFDRSxDQUFEO0FBQUEsNkJBQU9mLFVBQVUsQ0FBQ1ksSUFBSSxDQUFDcEIsSUFBTixDQUFqQjtBQUFBLHFCQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFrQkQsYUE3QkY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQTBFRCxDQTFIRDs7R0FBTWIsSzs7QUE0SFNBLG9FQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pJQSx1RiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9maWxlLW1hbmFnZW1lbnQuMzVkMGE1NGEwZWM4OGYzNTgwOTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udGFpbmVyRGVmYXVsdCBmcm9tIFwifi9jb21wb25lbnRzL2xheW91dHMvQ29udGFpbmVyRGVmYXVsdFwiO1xuaW1wb3J0IEhlYWRlckRhc2hib2FyZCBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9oZWFkZXJzL0hlYWRlckRhc2hib2FyZFwiO1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gXCJ+L2ZpcmViYXNlQ29uZmlnXCI7XG5pbXBvcnQge1xuICByZWYsXG4gIHVwbG9hZEJ5dGVzLFxuICBsaXN0QWxsLFxuICBnZXREb3dubG9hZFVSTCxcbiAgZGVsZXRlT2JqZWN0LFxufSBmcm9tIFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xuaW1wb3J0IGNsb3VkaWNvbiBmcm9tIFwifi9wdWJsaWMvaW1nL2Nsb3VkaWNvbi5wbmdcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5tb2R1bGUuY3NzXCI7XG5jb25zdCBpbmRleCA9ICgpID0+IHtcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtmaWxlVXBsb2FkLCBzZXRGaWxlVXBsb2FkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZmlsZUxpc3QsIHNldEZpbGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgZmlsZUxpc3RSZWYgPSByZWYoc3RvcmFnZSwgXCJmaWxlL1wiKTtcbiAgLy9VcGxvYWQgRmlsZVxuICBjb25zdCB1cGxvYWRGaWxlID0gKCkgPT4ge1xuICAgIGlmIChmaWxlVXBsb2FkID09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCBmaWxlUmVmID0gcmVmKHN0b3JhZ2UsIGBmaWxlLyR7ZmlsZVVwbG9hZC5uYW1lfWApO1xuXG4gICAgdXBsb2FkQnl0ZXMoZmlsZVJlZiwgZmlsZVVwbG9hZCkudGhlbigoc25hcHNob3QpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNuYXBzaG90KTtcbiAgICAgIGdldERvd25sb2FkVVJMKHNuYXBzaG90LnJlZikudGhlbigodXJsKSA9PiB7XG4gICAgICAgIHNldEZpbGVMaXN0KChwcmV2KSA9PiBbLi4ucHJldiwgdXJsXSk7XG4gICAgICB9KTtcbiAgICAgIGFsZXJ0KFwiRmlsZSBVcGxvYWRlZFwiKTtcbiAgICB9KTtcbiAgfTtcbiAgLy8gRGVsZXRlIGZpbGVcbiAgY29uc3QgZGVsZXRlRmlsZSA9IChmaWxlTmFtZSkgPT4ge1xuICAgIGNvbnN0IGRlc2VydFJlZiA9IHJlZihzdG9yYWdlLCBgZmlsZS8ke2ZpbGVOYW1lfWApO1xuICAgIC8vIERlbGV0ZSB0aGUgZmlsZVxuICAgIGRlbGV0ZU9iamVjdChkZXNlcnRSZWYpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIEZpbGUgZGVsZXRlZCBzdWNjZXNzZnVsbHlcbiAgICAgICAgY29uc29sZS5sb2coXCJ3b3d3IGZpbGUgZGVsZXRlXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgLy8gVWgtb2gsIGFuIGVycm9yIG9jY3VycmVkIVxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgY29uc3QgdW5zdWIgPSBvblNuYXBzaG90KGRvYyhkYiwgXCJjaXRpZXNcIiwgXCJTRlwiKSwgKGRvYykgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgZGF0YTogXCIsIGRvYy5kYXRhKCkpO1xuICAgIC8vIH0pO1xuICAgIGxpc3RBbGwoZmlsZUxpc3RSZWYpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcbiAgICAgIHJlcy5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0ubmFtZSk7XG4gICAgICAgIGdldERvd25sb2FkVVJMKGl0ZW0pLnRoZW4oKHVybCkgPT4ge1xuICAgICAgICAgIHNldEZpbGVMaXN0KChwcmV2KSA9PiBbLi4ucHJldiwgeyB1cmwsIG5hbWU6IGl0ZW0ubmFtZSB9XSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q29udGFpbmVyRGVmYXVsdCB0aXRsZT0nRmlsZSBNYW5hZ2UnPlxuICAgICAgICA8SGVhZGVyRGFzaGJvYXJkIHRpdGxlPSdGaWxlIE1hbmFnZW1lbnQnIGRlc2NyaXB0aW9uPSdGaWxlIExpc3RpbmcgJyAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTQnPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0nZmlsZSdcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuZmllbGR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgc2V0RmlsZVVwbG9hZChlLnRhcmdldC5maWxlc1swXSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt1cGxvYWRGaWxlfSBjbGFzc05hbWU9e3N0eWxlLmJ0bn0+XG4gICAgICAgICAgICBVcGxvYWQgRmlsZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTYnPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuaW5wdXR9XG4gICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2ggRW1wbG95ZWUuLi4nXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUgYm9yZGVyIHNoYWRvdyBtdC00Jz5cbiAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9J3RoZWFkLWRhcmsgJz5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT0nY29sJz4jPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9J2NvbCc+RmlsZSBOYW1lPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9J2NvbCc+QWN0aW9uPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHtmaWxlTGlzdFxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGZpbGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2hUZXJtID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbGU7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgICBmaWxlLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbGU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ge2luZGV4ICsgMX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0udXJsfSB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ubmFtZX08L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyoge0pTT04uc3RyaW5naWZ5KGl0ZW0sIDAsIDEpfSAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmRlbGV0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRlbGV0ZUZpbGUoaXRlbS5uYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lckRlZmF1bHQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9jbG91ZGljb24tZDA1Yjk2NTU1NzMzOGY4MWE1NmEwMjEwOThmMzQ1MWIucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==