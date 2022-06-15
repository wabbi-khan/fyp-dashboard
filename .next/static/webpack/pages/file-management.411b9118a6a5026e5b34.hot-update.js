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
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: item.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 27
                  }, _this)
                }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlsZS1tYW5hZ2VtZW50L2luZGV4LmpzeCJdLCJuYW1lcyI6WyJpbmRleCIsInVzZVN0YXRlIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJmaWxlVXBsb2FkIiwic2V0RmlsZVVwbG9hZCIsImZpbGVMaXN0Iiwic2V0RmlsZUxpc3QiLCJmaWxlTGlzdFJlZiIsInJlZiIsInN0b3JhZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVwbG9hZEZpbGUiLCJmaWxlUmVmIiwibmFtZSIsInVwbG9hZEJ5dGVzIiwidGhlbiIsInNuYXBzaG90IiwiZ2V0RG93bmxvYWRVUkwiLCJ1cmwiLCJwcmV2IiwiYWxlcnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImRlbGV0ZUZpbGUiLCJmaWxlTmFtZSIsImRlc2VydFJlZiIsImRlbGV0ZU9iamVjdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInVzZUVmZmVjdCIsImxpc3RBbGwiLCJyZXMiLCJpdGVtcyIsImZvckVhY2giLCJpdGVtIiwic3R5bGUiLCJmaWVsZCIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImJ0biIsImlucHV0IiwiZXZlbnQiLCJ2YWx1ZSIsImZpbHRlciIsImZpbGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FRQTs7QUFDQTtBQUVBOztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDa0JDLHNEQUFRLENBQUMsRUFBRCxDQUQxQjtBQUFBLE1BQ1hDLFVBRFc7QUFBQSxNQUNDQyxhQUREOztBQUFBLG1CQUVrQkYsc0RBQVEsQ0FBQyxJQUFELENBRjFCO0FBQUEsTUFFWEcsVUFGVztBQUFBLE1BRUNDLGFBRkQ7O0FBQUEsbUJBR2NKLHNEQUFRLENBQUMsRUFBRCxD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MTFiOTExOGE2YTUwMjZlNWIzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb250YWluZXJEZWZhdWx0IGZyb20gXCJ+L2NvbXBvbmVudHMvbGF5b3V0cy9Db250YWluZXJEZWZhdWx0XCI7XG5pbXBvcnQgSGVhZGVyRGFzaGJvYXJkIGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlcnMvSGVhZGVyRGFzaGJvYXJkXCI7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSBcIn4vZmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCB7XG4gIHJlZixcbiAgdXBsb2FkQnl0ZXMsXG4gIGxpc3RBbGwsXG4gIGdldERvd25sb2FkVVJMLFxuICBkZWxldGVPYmplY3QsXG59IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XG4vLyBpbXBvcnQgY2xvdWRpY29uIGZyb20gXCJ+L3B1YmxpYy9pbWcvY2xvdWRpY29uLnBuZ1wiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIn4vY29tcG9uZW50cy9zcGlubmVyL2luZGV4XCI7XG5cbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5tb2R1bGUuY3NzXCI7XG5jb25zdCBpbmRleCA9ICgpID0+IHtcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtmaWxlVXBsb2FkLCBzZXRGaWxlVXBsb2FkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZmlsZUxpc3QsIHNldEZpbGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgZmlsZUxpc3RSZWYgPSByZWYoc3RvcmFnZSwgXCJmaWxlL1wiKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vVXBsb2FkIEZpbGVcbiAgY29uc3QgdXBsb2FkRmlsZSA9ICgpID0+IHtcbiAgICBpZiAoZmlsZVVwbG9hZCA9PSBudWxsKSByZXR1cm47XG4gICAgY29uc3QgZmlsZVJlZiA9IHJlZihzdG9yYWdlLCBgZmlsZS8ke2ZpbGVVcGxvYWQubmFtZX1gKTtcblxuICAgIHVwbG9hZEJ5dGVzKGZpbGVSZWYsIGZpbGVVcGxvYWQpLnRoZW4oKHNuYXBzaG90KSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzbmFwc2hvdCk7XG4gICAgICBnZXREb3dubG9hZFVSTChzbmFwc2hvdC5yZWYpLnRoZW4oKHVybCkgPT4ge1xuICAgICAgICBzZXRGaWxlTGlzdCgocHJldikgPT4gWy4uLnByZXYsIHVybF0pO1xuICAgICAgfSk7XG4gICAgICBhbGVydChcIkZpbGUgVXBsb2FkZWRcIik7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG4gIH07XG4gIC8vIERlbGV0ZSBmaWxlXG4gIGNvbnN0IGRlbGV0ZUZpbGUgPSAoZmlsZU5hbWUpID0+IHtcbiAgICBjb25zdCBkZXNlcnRSZWYgPSByZWYoc3RvcmFnZSwgYGZpbGUvJHtmaWxlTmFtZX1gKTtcbiAgICAvLyBEZWxldGUgdGhlIGZpbGVcbiAgICBkZWxldGVPYmplY3QoZGVzZXJ0UmVmKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJ3b3d3IGZpbGUgZGVsZXRlXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgLy8gVWgtb2gsIGFuIGVycm9yIG9jY3VycmVkIVxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgY29uc3QgdW5zdWIgPSBvblNuYXBzaG90KGRvYyhkYiwgXCJjaXRpZXNcIiwgXCJTRlwiKSwgKGRvYykgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgZGF0YTogXCIsIGRvYy5kYXRhKCkpO1xuICAgIC8vIH0pO1xuICAgIGxpc3RBbGwoZmlsZUxpc3RSZWYpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcbiAgICAgIHJlcy5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0ubmFtZSk7XG4gICAgICAgIGdldERvd25sb2FkVVJMKGl0ZW0pLnRoZW4oKHVybCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICAgIHNldEZpbGVMaXN0KChwcmV2KSA9PiBbLi4ucHJldiwgeyB1cmwsIG5hbWU6IGl0ZW0ubmFtZSB9XSk7XG4gICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb250YWluZXJEZWZhdWx0IHRpdGxlPSdGaWxlIE1hbmFnZSc+XG4gICAgICAgIDxIZWFkZXJEYXNoYm9hcmQgdGl0bGU9J0ZpbGUgTWFuYWdlbWVudCcgZGVzY3JpcHRpb249J0ZpbGUgTGlzdGluZyAnIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3AtNCc+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPSdmaWxlJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5maWVsZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRGaWxlVXBsb2FkKGUudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3VwbG9hZEZpbGV9IGNsYXNzTmFtZT17c3R5bGUuYnRufT5cbiAgICAgICAgICAgIFVwbG9hZCBGaWxlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNic+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5pbnB1dH1cbiAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1NlYXJjaCBFbXBsb3llZS4uLidcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFNlYXJjaFRlcm0oZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSBib3JkZXIgc2hhZG93IG10LTQnPlxuICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT0ndGhlYWQtZGFyayAnPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPSdjb2wnPiM8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT0nY29sJz5GaWxlIE5hbWU8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT0nY29sJz5BY3Rpb248L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgZmlsZUxpc3RcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGZpbGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaFRlcm0gPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWxlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGUubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ge2luZGV4ICsgMX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS51cmx9IHRhcmdldD0nX2JsYW5rJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDx0ZD57Y29uc29sZS5sb2coaXRlbS51cmwpfTwvdGQ+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkoaXRlbSwgMCwgMSl9ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5kZWxldGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRlbGV0ZUZpbGUoaXRlbS5uYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lckRlZmF1bHQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=