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
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.module.css */ "./pages/file-management/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_7__);




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

  var fileListRef = Object(firebase_storage__WEBPACK_IMPORTED_MODULE_6__["ref"])(_firebaseConfig__WEBPACK_IMPORTED_MODULE_5__["storage"], "file/");

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
  };

  var deleteFile = function deleteFile() {
    var desertRef = Object(firebase_storage__WEBPACK_IMPORTED_MODULE_6__["ref"])(_firebaseConfig__WEBPACK_IMPORTED_MODULE_5__["storage"], "file/".concat(fileUpload.name)); // Delete the file

    Object(firebase_storage__WEBPACK_IMPORTED_MODULE_6__["deleteObject"])(desertRef).then(function () {// File deleted successfully
    })["catch"](function (error) {// Uh-oh, an error occurred!
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
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
        lineNumber: 58,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "p-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "file",
          className: _style_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.field,
          onChange: function onChange(e) {
            setFileUpload(e.target.files[0]);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: uploadFile,
          className: _style_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.btn,
          children: "Upload File"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-6",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: _style_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.input,
            type: "text",
            placeholder: "Search Employee...",
            onChange: function onChange(event) {
              setSearchTerm(event.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
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
                lineNumber: 87,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                scope: "col",
                children: "File Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                scope: "col",
                children: "Action"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
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
                  lineNumber: 106,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: item.url,
                  target: "_blank",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: item.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    onClick: function onClick(e) {
                      return deleteFile(e);
                    },
                    children: "Delete"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 21
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlsZS1tYW5hZ2VtZW50L2luZGV4LmpzeCJdLCJuYW1lcyI6WyJpbmRleCIsInVzZVN0YXRlIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJmaWxlVXBsb2FkIiwic2V0RmlsZVVwbG9hZCIsImZpbGVMaXN0Iiwic2V0RmlsZUxpc3QiLCJmaWxlTGlzdFJlZiIsInJlZiIsInN0b3JhZ2UiLCJ1cGxvYWRGaWxlIiwiZmlsZVJlZiIsIm5hbWUiLCJ1cGxvYWRCeXRlcyIsInRoZW4iLCJzbmFwc2hvdCIsImdldERvd25sb2FkVVJMIiwidXJsIiwicHJldiIsImFsZXJ0IiwiZGVsZXRlRmlsZSIsImRlc2VydFJlZiIsImRlbGV0ZU9iamVjdCIsImVycm9yIiwidXNlRWZmZWN0IiwibGlzdEFsbCIsInJlcyIsIml0ZW1zIiwiZm9yRWFjaCIsIml0ZW0iLCJzdHlsZSIsImZpZWxkIiwiZSIsInRhcmdldCIsImZpbGVzIiwiYnRuIiwiaW5wdXQiLCJldmVudCIsInZhbHVlIiwiZmlsdGVyIiwiZmlsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ2tCQyxzREFBUSxDQUFDLEVBQUQsQ0FEMUI7QUFBQSxNQUNYQyxVQURXO0FBQUEsTUFDQ0MsYUFERDs7QUFBQSxtQkFFa0JGLHNEQUFRLENBQUMsSUFBRCxDQUYxQjtBQUFBLE1BRVhHLFVBRlc7QUFBQSxNQUVDQyxhQUZEOztBQUFBLG1CQUdjSixzREFBUSxDQUFDLEVBQUQsQ0FIdEI7QUFBQSxNQUdYSyxRQUhXO0FBQUEsTUFHREMsV0FIQzs7QUFJbEIsTUFBTUMsV0FBVyxHQUFHQyw0REFBRyxDQUFDQyx1REFBRCxFQUFVLE9B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eUJBRkYsZUFNRTtBQUFBLHlDQUNFO0FBQVEsMkJBQU8sRUFBRSxpQkFBQ29CLENBQUQ7QUFBQSw2QkFBT1osVUFBVSxDQUFDWSxDQUFELENBQWpCO0FBQUEscUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFZRCxhQXZCRjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBb0VELENBOUdEOztHQUFNakMsSzs7QUFnSFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZpbGUtbWFuYWdlbWVudC4yNzRkMWE0MjY1NjU2ZjE1ZTYyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb250YWluZXJEZWZhdWx0IGZyb20gXCJ+L2NvbXBvbmVudHMvbGF5b3V0cy9Db250YWluZXJEZWZhdWx0XCI7XG5pbXBvcnQgSGVhZGVyRGFzaGJvYXJkIGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlcnMvSGVhZGVyRGFzaGJvYXJkXCI7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSBcIn4vZmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCB7XG4gIHJlZixcbiAgdXBsb2FkQnl0ZXMsXG4gIGxpc3RBbGwsXG4gIGdldERvd25sb2FkVVJMLFxuICBkZWxldGVPYmplY3QsXG59IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUubW9kdWxlLmNzc1wiO1xuY29uc3QgaW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZmlsZVVwbG9hZCwgc2V0RmlsZVVwbG9hZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2ZpbGVMaXN0LCBzZXRGaWxlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IGZpbGVMaXN0UmVmID0gcmVmKHN0b3JhZ2UsIFwiZmlsZS9cIik7XG4gIGNvbnN0IHVwbG9hZEZpbGUgPSAoKSA9PiB7XG4gICAgaWYgKGZpbGVVcGxvYWQgPT0gbnVsbCkgcmV0dXJuO1xuICAgIGNvbnN0IGZpbGVSZWYgPSByZWYoc3RvcmFnZSwgYGZpbGUvJHtmaWxlVXBsb2FkLm5hbWV9YCk7XG5cbiAgICB1cGxvYWRCeXRlcyhmaWxlUmVmLCBmaWxlVXBsb2FkKS50aGVuKChzbmFwc2hvdCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coc25hcHNob3QpO1xuICAgICAgZ2V0RG93bmxvYWRVUkwoc25hcHNob3QucmVmKS50aGVuKCh1cmwpID0+IHtcbiAgICAgICAgc2V0RmlsZUxpc3QoKHByZXYpID0+IFsuLi5wcmV2LCB1cmxdKTtcbiAgICAgIH0pO1xuICAgICAgYWxlcnQoXCJGaWxlIFVwbG9hZGVkXCIpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUZpbGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZGVzZXJ0UmVmID0gcmVmKHN0b3JhZ2UsIGBmaWxlLyR7ZmlsZVVwbG9hZC5uYW1lfWApO1xuICAgIC8vIERlbGV0ZSB0aGUgZmlsZVxuICAgIGRlbGV0ZU9iamVjdChkZXNlcnRSZWYpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIEZpbGUgZGVsZXRlZCBzdWNjZXNzZnVsbHlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIC8vIFVoLW9oLCBhbiBlcnJvciBvY2N1cnJlZCFcbiAgICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGlzdEFsbChmaWxlTGlzdFJlZikudGhlbigocmVzKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgcmVzLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbS5uYW1lKTtcbiAgICAgICAgZ2V0RG93bmxvYWRVUkwoaXRlbSkudGhlbigodXJsKSA9PiB7XG4gICAgICAgICAgc2V0RmlsZUxpc3QoKHByZXYpID0+IFsuLi5wcmV2LCB7IHVybCwgbmFtZTogaXRlbS5uYW1lIH1dKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb250YWluZXJEZWZhdWx0IHRpdGxlPSdGaWxlIE1hbmFnZSc+XG4gICAgICAgIDxIZWFkZXJEYXNoYm9hcmQgdGl0bGU9J0ZpbGUgTWFuYWdlbWVudCcgZGVzY3JpcHRpb249J0ZpbGUgTGlzdGluZyAnIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3AtNCc+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPSdmaWxlJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5maWVsZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRGaWxlVXBsb2FkKGUudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3VwbG9hZEZpbGV9IGNsYXNzTmFtZT17c3R5bGUuYnRufT5cbiAgICAgICAgICAgIFVwbG9hZCBGaWxlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNic+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5pbnB1dH1cbiAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1NlYXJjaCBFbXBsb3llZS4uLidcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFNlYXJjaFRlcm0oZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSBib3JkZXIgc2hhZG93IG10LTQnPlxuICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT0ndGhlYWQtZGFyayAnPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPSdjb2wnPiM8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT0nY29sJz5GaWxlIE5hbWU8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT0nY29sJz5BY3Rpb248L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAge2ZpbGVMaXN0XG4gICAgICAgICAgICAgICAgLmZpbHRlcigoZmlsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaFRlcm0gPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsZTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGZpbGUubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPiB7aW5kZXggKyAxfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS51cmx9IHRhcmdldD0nX2JsYW5rJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyoge0pTT04uc3RyaW5naWZ5KGl0ZW0sIDAsIDEpfSAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gZGVsZXRlRmlsZShlKX0+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXJEZWZhdWx0PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9