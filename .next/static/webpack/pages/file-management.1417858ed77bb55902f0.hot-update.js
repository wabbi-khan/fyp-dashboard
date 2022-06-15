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
/* harmony import */ var E_FYP_admin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layouts_ContainerDefault__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/layouts/ContainerDefault */ "./components/layouts/ContainerDefault.jsx");
/* harmony import */ var _components_shared_headers_HeaderDashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/shared/headers/HeaderDashboard */ "./components/shared/headers/HeaderDashboard.jsx");
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/firebaseConfig */ "./firebaseConfig.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var _components_spinner_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/spinner/index */ "./components/spinner/index.jsx");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.module.css */ "./pages/file-management/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "E:\\FYP\\admin-dashboard\\office-automation\\pages\\file-management\\index.jsx",
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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState4[0],
      setLoading = _useState4[1]; //Upload File


  var uploadFile = function uploadFile() {
    if (fileUpload == null) return;
    var fileRef = Object(firebase_storage__WEBPACK_IMPORTED_MODULE_6__["ref"])(_firebaseConfig__WEBPACK_IMPORTED_MODULE_5__["storage"], "file/".concat(fileUpload.name));
    Object(firebase_storage__WEBPACK_IMPORTED_MODULE_6__["uploadBytes"])(fileRef, fileUpload).then(function (snapshot) {
      // console.log(snapshot);
      Object(firebase_storage__WEBPACK_IMPORTED_MODULE_6__["getDownloadURL"])(snapshot.ref).then(function (url) {
        setFileList(function (prev) {
          return [].concat(Object(E_FYP_admin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prev), [url]);
        });
      });
      alert("File Uploaded");
      window.location.reload();
    });
  }; // Delete file


  var deleteFile = function deleteFile(fileName) {
    var desertRef = Object(firebase_storage__WEBPACK_IMPORTED_MODULE_6__["ref"])(_firebaseConfig__WEBPACK_IMPORTED_MODULE_5__["storage"], "file/".concat(fileName)); // Delete the file

    Object(firebase_storage__WEBPACK_IMPORTED_MODULE_6__["deleteObject"])(desertRef).then(function () {
      window.location.reload();
      console.log("woww file delete");
    })["catch"](function (error) {
      // Uh-oh, an error occurred!
      console.log(error);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Object(firebase_storage__WEBPACK_IMPORTED_MODULE_6__["listAll"])(fileListRef).then(function (res) {
      res.items.forEach(function (item) {
        Object(firebase_storage__WEBPACK_IMPORTED_MODULE_6__["getDownloadURL"])(item).then(function (url) {
          console.log(item);
          setFileList(function (prev) {
            return [].concat(Object(E_FYP_admin_dashboard_office_automation_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prev), [{
              url: url,
              name: item.name
            }]);
          });
          setLoading(true);
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
        lineNumber: 67,
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
          lineNumber: 70,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: uploadFile,
          className: _style_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.btn,
          children: "Upload File"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
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
            lineNumber: 83,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
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
                lineNumber: 96,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                scope: "col",
                children: "File Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                scope: "col",
                children: "Action"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: loading ? fileList.filter(function (file) {
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
                  lineNumber: 116,
                  columnNumber: 25
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: item.url,
                  target: "_blank",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: item.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 118,
                    columnNumber: 27
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 25
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: _style_module_css__WEBPACK_IMPORTED_MODULE_8___default.a["delete"],
                    onClick: function onClick(e) {
                      return deleteFile(item.name);
                    },
                    children: "Delete"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 27
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 25
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 23
              }, _this);
            }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_spinner_index__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(index, "PaRgwEmtg4ADanzesjcIfpGznbE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlsZS1tYW5hZ2VtZW50L2luZGV4LmpzeCJdLCJuYW1lcyI6WyJpbmRleCIsInVzZVN0YXRlIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJmaWxlVXBsb2FkIiwic2V0RmlsZVVwbG9hZCIsImZpbGVMaXN0Iiwic2V0RmlsZUxpc3QiLCJmaWxlTGlzdFJlZiIsInJlZiIsInN0b3JhZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVwbG9hZEZpbGUiLCJmaWxlUmVmIiwibmFtZSIsInVwbG9hZEJ5dGVzIiwidGhlbiIsInNuYXBzaG90IiwiZ2V0RG93bmxvYWRVUkwiLCJ1cmwiLCJwcmV2IiwiYWxlcnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImRlbGV0ZUZpbGUiLCJmaWxlTmFtZSIsImRlc2VydFJlZiIsImRlbGV0ZU9iamVjdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInVzZUVmZmVjdCIsImxpc3RBbGwiLCJyZXMiLCJpdGVtcyIsImZvckVhY2giLCJpdGVtIiwic3R5bGUiLCJmaWVsZCIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImJ0biIsImlucHV0IiwiZXZlbnQiLCJ2YWx1ZSIsImZpbHRlciIsImZpbGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBRUE7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNrQkMsc0RBQVEsQ0FBQyxFQUFELENBRDFCO0FBQUEsTUFDWEMsVUFEVztBQUFBLE1BQ0NDLGFBREQ7O0FBQUEsbUJBRWtCRixzREFBUSxDQUFDLElBQUQsQ0FGMUI7QUFBQSxNQUVYRyxVQUZXO0FBQUEsTUFFQ0MsYUFGRDs7QUFBQSxtQkFHY0osc0RBQVEsQ0FBQyxFQUFELENB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QUFMLENBQVVtQyxXQUFWLEdBQXdCQyxRQUF4QixDQUFpQ2pELFVBQVUsQ0FBQ2dELFdBQVgsRUFBakMsQ0FESyxFQUVMO0FBQ0EsdUJBQU9ELElBQVA7QUFDRDtBQUNGLGFBVEgsRUFVR0csR0FWSCxDQVVPLFVBQUNkLElBQUQsRUFBT3RDLEtBQVAsRUFBaUI7QUFDcEIsa0NBQ0U7QUFBQSx3Q0FDRTtBQUFBLGtDQUFNQSxLQUFLLEdBQUcsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRTtBQUFHLHNCQUFJLEVBQUVzQyxJQUFJLENBQUNsQixHQUFkO0FBQW1CLHdCQUFNLEVBQUMsUUFBMUI7QUFBQSx5Q0FDRTtBQUFBLDhCQUFLa0IsSUFBSSxDQUFDdkI7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRixlQVFFO0FBQUEseUNBQ0U7QUFDRSw2QkFBUyxFQUFFd0Isd0RBQUssVUFEbEI7QUFFRSwyQkFBTyxFQUFFLGlCQUFDRSxDQUFEO0FBQUEsNkJBQU9mLFVBQVUsQ0FBQ1ksSUFBSSxDQUFDdkIsSUFBTixDQUFqQjtBQUFBLHFCQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFtQkQsYUE5QkgsQ0FETSxnQkFpQ04scUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWxDSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQStFRCxDQWhJRDs7R0FBTWYsSzs7QUFrSVNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZpbGUtbWFuYWdlbWVudC4xNDE3ODU4ZWQ3N2JiNTU5MDJmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb250YWluZXJEZWZhdWx0IGZyb20gXCJ+L2NvbXBvbmVudHMvbGF5b3V0cy9Db250YWluZXJEZWZhdWx0XCI7XG5pbXBvcnQgSGVhZGVyRGFzaGJvYXJkIGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlcnMvSGVhZGVyRGFzaGJvYXJkXCI7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSBcIn4vZmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCB7XG4gIHJlZixcbiAgdXBsb2FkQnl0ZXMsXG4gIGxpc3RBbGwsXG4gIGdldERvd25sb2FkVVJMLFxuICBkZWxldGVPYmplY3QsXG59IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwifi9jb21wb25lbnRzL3NwaW5uZXIvaW5kZXhcIjtcblxuaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLm1vZHVsZS5jc3NcIjtcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2ZpbGVVcGxvYWQsIHNldEZpbGVVcGxvYWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtmaWxlTGlzdCwgc2V0RmlsZUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBmaWxlTGlzdFJlZiA9IHJlZihzdG9yYWdlLCBcImZpbGUvXCIpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy9VcGxvYWQgRmlsZVxuICBjb25zdCB1cGxvYWRGaWxlID0gKCkgPT4ge1xuICAgIGlmIChmaWxlVXBsb2FkID09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCBmaWxlUmVmID0gcmVmKHN0b3JhZ2UsIGBmaWxlLyR7ZmlsZVVwbG9hZC5uYW1lfWApO1xuXG4gICAgdXBsb2FkQnl0ZXMoZmlsZVJlZiwgZmlsZVVwbG9hZCkudGhlbigoc25hcHNob3QpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNuYXBzaG90KTtcbiAgICAgIGdldERvd25sb2FkVVJMKHNuYXBzaG90LnJlZikudGhlbigodXJsKSA9PiB7XG4gICAgICAgIHNldEZpbGVMaXN0KChwcmV2KSA9PiBbLi4ucHJldiwgdXJsXSk7XG4gICAgICB9KTtcbiAgICAgIGFsZXJ0KFwiRmlsZSBVcGxvYWRlZFwiKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcbiAgfTtcbiAgLy8gRGVsZXRlIGZpbGVcbiAgY29uc3QgZGVsZXRlRmlsZSA9IChmaWxlTmFtZSkgPT4ge1xuICAgIGNvbnN0IGRlc2VydFJlZiA9IHJlZihzdG9yYWdlLCBgZmlsZS8ke2ZpbGVOYW1lfWApO1xuICAgIC8vIERlbGV0ZSB0aGUgZmlsZVxuICAgIGRlbGV0ZU9iamVjdChkZXNlcnRSZWYpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIndvd3cgZmlsZSBkZWxldGVcIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAvLyBVaC1vaCwgYW4gZXJyb3Igb2NjdXJyZWQhXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGlzdEFsbChmaWxlTGlzdFJlZikudGhlbigocmVzKSA9PiB7XG4gICAgICByZXMuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBnZXREb3dubG9hZFVSTChpdGVtKS50aGVuKCh1cmwpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICAgICAgICBzZXRGaWxlTGlzdCgocHJldikgPT4gWy4uLnByZXYsIHsgdXJsLCBuYW1lOiBpdGVtLm5hbWUgfV0pO1xuICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q29udGFpbmVyRGVmYXVsdCB0aXRsZT0nRmlsZSBNYW5hZ2UnPlxuICAgICAgICA8SGVhZGVyRGFzaGJvYXJkIHRpdGxlPSdGaWxlIE1hbmFnZW1lbnQnIGRlc2NyaXB0aW9uPSdGaWxlIExpc3RpbmcgJyAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTQnPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0nZmlsZSdcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuZmllbGR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgc2V0RmlsZVVwbG9hZChlLnRhcmdldC5maWxlc1swXSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt1cGxvYWRGaWxlfSBjbGFzc05hbWU9e3N0eWxlLmJ0bn0+XG4gICAgICAgICAgICBVcGxvYWQgRmlsZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTYnPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuaW5wdXR9XG4gICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2ggRW1wbG95ZWUuLi4nXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUgYm9yZGVyIHNoYWRvdyBtdC00Jz5cbiAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9J3RoZWFkLWRhcmsgJz5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT0nY29sJz4jPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9J2NvbCc+RmlsZSBOYW1lPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9J2NvbCc+QWN0aW9uPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgIGZpbGVMaXN0XG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKChmaWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2hUZXJtID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWxlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IHtpbmRleCArIDF9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0udXJsfSB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8dGQ+e2NvbnNvbGUubG9nKGl0ZW0udXJsKX08L3RkPiAqL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge0pTT04uc3RyaW5naWZ5KGl0ZW0sIDAsIDEpfSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuZGVsZXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkZWxldGVGaWxlKGl0ZW0ubmFtZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXJEZWZhdWx0PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9