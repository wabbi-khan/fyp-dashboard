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





 // import cloudicon from "~/public/img/cloudicon.png";




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
    //   const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
    //     console.log("Current data: ", doc.data());
    // });
    Object(firebase_storage__WEBPACK_IMPORTED_MODULE_6__["listAll"])(fileListRef).then(function (res) {
      // console.log(res);
      res.items.forEach(function (item) {
        // console.log(item.name);
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
        lineNumber: 73,
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
          lineNumber: 76,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: uploadFile,
          className: _style_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.btn,
          children: "Upload File"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
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
            lineNumber: 89,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
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
                lineNumber: 102,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                scope: "col",
                children: "File Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                scope: "col",
                children: "Action"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
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
                  lineNumber: 122,
                  columnNumber: 25
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: item.url,
                  target: "_blank",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: item.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 27
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: console.log(item.url)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 27
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
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
                    lineNumber: 130,
                    columnNumber: 27
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 25
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 23
              }, _this);
            }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_spinner_index__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlsZS1tYW5hZ2VtZW50L2luZGV4LmpzeCJdLCJuYW1lcyI6WyJpbmRleCIsInVzZVN0YXRlIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJmaWxlVXBsb2FkIiwic2V0RmlsZVVwbG9hZCIsImZpbGVMaXN0Iiwic2V0RmlsZUxpc3QiLCJmaWxlTGlzdFJlZiIsInJlZiIsInN0b3JhZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVwbG9hZEZpbGUiLCJmaWxlUmVmIiwibmFtZSIsInVwbG9hZEJ5dGVzIiwidGhlbiIsInNuYXBzaG90IiwiZ2V0RG93bmxvYWRVUkwiLCJ1cmwiLCJwcmV2IiwiYWxlcnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImRlbGV0ZUZpbGUiLCJmaWxlTmFtZSIsImRlc2VydFJlZiIsImRlbGV0ZU9iamVjdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInVzZUVmZmVjdCIsImxpc3RBbGwiLCJyZXMiLCJpdGVtcyIsImZvckVhY2giLCJpdGVtIiwic3R5bGUiLCJmaWVsZCIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImJ0biIsImlucHV0IiwiZXZlbnQiLCJ2YWx1ZSIsImZpbHRlciIsImZpbGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FRQTs7QUFDQTtBQUVBOztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDa0JDLHNEQUFRLENBQUMsRUFBRCxDQUQxQjtBQUFBLE1BQ1hDLFVBRFc7QUFBQSxNQUNDQyxhQUREOztBQUFBLG1CQUVrQkYsc0RBQVEsQ0FBQyxJQUFELENBRjFCO0FBQUEsTUFFWEcsVUFGVztBQUFBLE1BRUNDLGFBRkQ7O0FBQUEsbUJBR2NKLHNEQUFRLENBQUMsRUFBRCxD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O0FBREYsbUJBREY7QUErRUQsQ0FySUQ7O0dBQU1mLEs7O0FBdUlTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9maWxlLW1hbmFnZW1lbnQuY2JiOGQzNmViNGYwNzc3YTZkZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udGFpbmVyRGVmYXVsdCBmcm9tIFwifi9jb21wb25lbnRzL2xheW91dHMvQ29udGFpbmVyRGVmYXVsdFwiO1xuaW1wb3J0IEhlYWRlckRhc2hib2FyZCBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9oZWFkZXJzL0hlYWRlckRhc2hib2FyZFwiO1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gXCJ+L2ZpcmViYXNlQ29uZmlnXCI7XG5pbXBvcnQge1xuICByZWYsXG4gIHVwbG9hZEJ5dGVzLFxuICBsaXN0QWxsLFxuICBnZXREb3dubG9hZFVSTCxcbiAgZGVsZXRlT2JqZWN0LFxufSBmcm9tIFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xuLy8gaW1wb3J0IGNsb3VkaWNvbiBmcm9tIFwifi9wdWJsaWMvaW1nL2Nsb3VkaWNvbi5wbmdcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCJ+L2NvbXBvbmVudHMvc3Bpbm5lci9pbmRleFwiO1xuXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUubW9kdWxlLmNzc1wiO1xuY29uc3QgaW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZmlsZVVwbG9hZCwgc2V0RmlsZVVwbG9hZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2ZpbGVMaXN0LCBzZXRGaWxlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IGZpbGVMaXN0UmVmID0gcmVmKHN0b3JhZ2UsIFwiZmlsZS9cIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvL1VwbG9hZCBGaWxlXG4gIGNvbnN0IHVwbG9hZEZpbGUgPSAoKSA9PiB7XG4gICAgaWYgKGZpbGVVcGxvYWQgPT0gbnVsbCkgcmV0dXJuO1xuICAgIGNvbnN0IGZpbGVSZWYgPSByZWYoc3RvcmFnZSwgYGZpbGUvJHtmaWxlVXBsb2FkLm5hbWV9YCk7XG5cbiAgICB1cGxvYWRCeXRlcyhmaWxlUmVmLCBmaWxlVXBsb2FkKS50aGVuKChzbmFwc2hvdCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coc25hcHNob3QpO1xuICAgICAgZ2V0RG93bmxvYWRVUkwoc25hcHNob3QucmVmKS50aGVuKCh1cmwpID0+IHtcbiAgICAgICAgc2V0RmlsZUxpc3QoKHByZXYpID0+IFsuLi5wcmV2LCB1cmxdKTtcbiAgICAgIH0pO1xuICAgICAgYWxlcnQoXCJGaWxlIFVwbG9hZGVkXCIpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuICB9O1xuICAvLyBEZWxldGUgZmlsZVxuICBjb25zdCBkZWxldGVGaWxlID0gKGZpbGVOYW1lKSA9PiB7XG4gICAgY29uc3QgZGVzZXJ0UmVmID0gcmVmKHN0b3JhZ2UsIGBmaWxlLyR7ZmlsZU5hbWV9YCk7XG4gICAgLy8gRGVsZXRlIHRoZSBmaWxlXG4gICAgZGVsZXRlT2JqZWN0KGRlc2VydFJlZilcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwid293dyBmaWxlIGRlbGV0ZVwiKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIC8vIFVoLW9oLCBhbiBlcnJvciBvY2N1cnJlZCFcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgIGNvbnN0IHVuc3ViID0gb25TbmFwc2hvdChkb2MoZGIsIFwiY2l0aWVzXCIsIFwiU0ZcIiksIChkb2MpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJDdXJyZW50IGRhdGE6IFwiLCBkb2MuZGF0YSgpKTtcbiAgICAvLyB9KTtcbiAgICBsaXN0QWxsKGZpbGVMaXN0UmVmKS50aGVuKChyZXMpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICByZXMuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtLm5hbWUpO1xuICAgICAgICBnZXREb3dubG9hZFVSTChpdGVtKS50aGVuKCh1cmwpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICAgICAgICBzZXRGaWxlTGlzdCgocHJldikgPT4gWy4uLnByZXYsIHsgdXJsLCBuYW1lOiBpdGVtLm5hbWUgfV0pO1xuICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q29udGFpbmVyRGVmYXVsdCB0aXRsZT0nRmlsZSBNYW5hZ2UnPlxuICAgICAgICA8SGVhZGVyRGFzaGJvYXJkIHRpdGxlPSdGaWxlIE1hbmFnZW1lbnQnIGRlc2NyaXB0aW9uPSdGaWxlIExpc3RpbmcgJyAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTQnPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0nZmlsZSdcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuZmllbGR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgc2V0RmlsZVVwbG9hZChlLnRhcmdldC5maWxlc1swXSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt1cGxvYWRGaWxlfSBjbGFzc05hbWU9e3N0eWxlLmJ0bn0+XG4gICAgICAgICAgICBVcGxvYWQgRmlsZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTYnPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuaW5wdXR9XG4gICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2ggRW1wbG95ZWUuLi4nXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUgYm9yZGVyIHNoYWRvdyBtdC00Jz5cbiAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9J3RoZWFkLWRhcmsgJz5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT0nY29sJz4jPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9J2NvbCc+RmlsZSBOYW1lPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9J2NvbCc+QWN0aW9uPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgIGZpbGVMaXN0XG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKChmaWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2hUZXJtID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWxlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IHtpbmRleCArIDF9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0udXJsfSB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Y29uc29sZS5sb2coaXRlbS51cmwpfTwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtKU09OLnN0cmluZ2lmeShpdGVtLCAwLCAxKX0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmRlbGV0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZGVsZXRlRmlsZShpdGVtLm5hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyRGVmYXVsdD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==