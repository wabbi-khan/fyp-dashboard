webpackHotUpdate_N_E("pages/index",{

/***/ "./components/shared/cards/CardSaleReport.jsx":
/*!****************************************************!*\
  !*** ./components/shared/cards/CardSaleReport.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "E:\\FYP\\admin-dashboard\\martfury-admin-react\\components\\shared\\cards\\CardSaleReport.jsx",
    _this = undefined;



var Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js")];
    },
    modules: ["..\\components\\shared\\cards\\CardSaleReport.jsx -> " + "react-apexcharts"]
  }
});
_c2 = Chart;

var CardSaleReport = function CardSaleReport() {
  var state = {
    series: [{
      name: "series1",
      data: [100, 120, 99, 125, 127, 130, 148]
    }],
    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#fcb800", "#f9f9f9", "#9C27B0"],
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      },
      responsive: [{
        breakpoint: 1680,
        options: {
          chart: {
            width: "100%"
          }
        }
      }, {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%"
          },
          legend: {
            position: "bottom"
          }
        }
      }]
    }
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "ps-card ps-card--sale-report",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "ps-card__header",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: "Summary Of This Month"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "ps-card__content",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "chart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Chart, {
        options: state.options,
        series: state.series,
        type: "area",
        height: 220
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, _this);
};

_c3 = CardSaleReport;
/* harmony default export */ __webpack_exports__["default"] = (CardSaleReport);

var _c, _c2, _c3;

$RefreshReg$(_c, "Chart$dynamic");
$RefreshReg$(_c2, "Chart");
$RefreshReg$(_c3, "CardSaleReport");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvY2FyZHMvQ2FyZFNhbGVSZXBvcnQuanN4Il0sIm5hbWVzIjpbIkNoYXJ0IiwiZHluYW1pYyIsInNzciIsIkNhcmRTYWxlUmVwb3J0Iiwic3RhdGUiLCJzZXJpZXMiLCJuYW1lIiwiZGF0YSIsIm9wdGlvbnMiLCJjaGFydCIsImhlaWdodCIsInR5cGUiLCJ0b29sYmFyIiwic2hvdyIsImRhdGFMYWJlbHMiLCJlbmFibGVkIiwiY29sb3JzIiwic3Ryb2tlIiwiY3VydmUiLCJ4YXhpcyIsImNhdGVnb3JpZXMiLCJ0b29sdGlwIiwieCIsImZvcm1hdCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwid2lkdGgiLCJsZWdlbmQiLCJwb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLDBLQUFOO0FBQUEsQ0FBRCxFQUFtQztBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUE7QUFBQSxrQ0FBckIsc0ZBQXFCO0FBQUE7QUFBQSx3RUFBckIsa0JBQXFCO0FBQUE7QUFBQSxDQUFuQyxDQUFyQjtNQUFNRixLOztBQUVOLElBQU1HLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixNQUFNQyxLQUFLLEdBQUc7QUFDWkMsVUFBTSxFQUFFLENBQ047QUFDRUMsVUFBSSxFQUFFLFNBRFI7QUFFRUMsVUFBSSxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxFQUFYLEVBQWUsR0FBZixFQUFvQixHQUFwQixFQUF5QixHQUF6QixFQUE4QixHQUE5QjtBQUZSLEtBRE0sQ0FESTtBQVFaQyxXQUFPLEVBQUU7QUFDUEMsV0FBSyxFQUFFO0FBQ0xDLGNBQU0sRUFBRSxHQURIO0FBRUxDLFlBQUksRUFBRSxNQUZEO0FBR0xDLGVBQU8sRUFBRTtBQUNQQyxjQUFJLEVBQUU7QUFEQztBQUhKLE9BREE7QUFRUEMsZ0JBQVUsRUFBRTtBQUNWQyxlQUFPLEVBQUU7QUFEQyxPQVJMO0FBV1BDLFlBQU0sRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCLENBWEQ7QUFZUEMsWUFBTSxFQUFFO0FBQ05DLGFBQUssRUFBRTtBQURELE9BWkQ7QUFlUEMsV0FBSyxFQUFFO0FBQ0xSLFlBQUksRUFBRSxVQUREO0FBRUxTLGtCQUFVLEVBQUUsQ0FDViwwQkFEVSxFQUVWLDBCQUZVLEVBR1YsMEJBSFUsRUFJViwwQkFKVSxFQUtWLDBCQUxVLEVBTVYsMEJBTlUsRUFPViwwQkFQVTtBQUZQLE9BZkE7QUEyQlBDLGFBQU8sRUFBRTtBQUNQQyxTQUFDLEVBQUU7QUFDREMsZ0JBQU0sRUFBRTtBQURQO0FBREksT0EzQkY7QUFnQ1BDLGdCQUFVLEVBQUUsQ0FDVjtBQUNFQyxrQkFBVSxFQUFFLElBRGQ7QUFFRWpCLGVBQU8sRUFBRTtBQUNQQyxlQUFLLEVBQUU7QUFDTGlCLGlCQUFLLEVBQUU7QUFERjtBQURBO0FBRlgsT0FEVSxFQVNWO0FBQ0VELGtCQUFVLEVBQUUsR0FEZDtBQUVFakIsZUFBTyxFQUFFO0FBQ1BDLGVBQUssRUFBRTtBQUNMaUIsaUJBQUssRUFBRTtBQURGLFdBREE7QUFJUEMsZ0JBQU0sRUFBRTtBQUNOQyxvQkFBUSxFQUFFO0FBREo7QUFKRDtBQUZYLE9BVFU7QUFoQ0w7QUFSRyxHQUFkO0FBZ0VBLHNCQUNFO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsOEJBQ0U7QUFBSyxVQUFFLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSxxRUFBQyxLQUFEO0FBQ0UsZUFBTyxFQUFFeEIsS0FBSyxDQUFDSSxPQURqQjtBQUVFLGNBQU0sRUFBRUosS0FBSyxDQUFDQyxNQUZoQjtBQUdFLFlBQUksRUFBQyxNQUhQO0FBSUUsY0FBTSxFQUFFO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0JELENBaEdEOztNQUFNRixjO0FBa0dTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mZDYzNTEwNzZkY2UyNjQzMDkzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5cbmNvbnN0IENoYXJ0ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJyZWFjdC1hcGV4Y2hhcnRzXCIpLCB7IHNzcjogZmFsc2UgfSk7XG5cbmNvbnN0IENhcmRTYWxlUmVwb3J0ID0gKCkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IHtcbiAgICBzZXJpZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJzZXJpZXMxXCIsXG4gICAgICAgIGRhdGE6IFsxMDAsIDEyMCwgOTksIDEyNSwgMTI3LCAxMzAsIDE0OF0sXG4gICAgICB9LFxuICAgIF0sXG5cbiAgICBvcHRpb25zOiB7XG4gICAgICBjaGFydDoge1xuICAgICAgICBoZWlnaHQ6IDM1MCxcbiAgICAgICAgdHlwZTogXCJhcmVhXCIsXG4gICAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGNvbG9yczogW1wiI2ZjYjgwMFwiLCBcIiNmOWY5ZjlcIiwgXCIjOUMyN0IwXCJdLFxuICAgICAgc3Ryb2tlOiB7XG4gICAgICAgIGN1cnZlOiBcInNtb290aFwiLFxuICAgICAgfSxcbiAgICAgIHhheGlzOiB7XG4gICAgICAgIHR5cGU6IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgY2F0ZWdvcmllczogW1xuICAgICAgICAgIFwiMjAxOC0wOS0xOVQwMDowMDowMC4wMDBaXCIsXG4gICAgICAgICAgXCIyMDE4LTA5LTE5VDAxOjMwOjAwLjAwMFpcIixcbiAgICAgICAgICBcIjIwMTgtMDktMTlUMDI6MzA6MDAuMDAwWlwiLFxuICAgICAgICAgIFwiMjAxOC0wOS0xOVQwMzozMDowMC4wMDBaXCIsXG4gICAgICAgICAgXCIyMDE4LTA5LTE5VDA0OjMwOjAwLjAwMFpcIixcbiAgICAgICAgICBcIjIwMTgtMDktMTlUMDU6MzA6MDAuMDAwWlwiLFxuICAgICAgICAgIFwiMjAxOC0wOS0xOVQwNjozMDowMC4wMDBaXCIsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgdG9vbHRpcDoge1xuICAgICAgICB4OiB7XG4gICAgICAgICAgZm9ybWF0OiBcImRkL01NL3l5IEhIOm1tXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTY4MCxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA0ODAsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b21cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdwcy1jYXJkIHBzLWNhcmQtLXNhbGUtcmVwb3J0Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcy1jYXJkX19oZWFkZXInPlxuICAgICAgICA8aDQ+U3VtbWFyeSBPZiBUaGlzIE1vbnRoPC9oND5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHMtY2FyZF9fY29udGVudCc+XG4gICAgICAgIDxkaXYgaWQ9J2NoYXJ0Jz48L2Rpdj5cbiAgICAgICAgPENoYXJ0XG4gICAgICAgICAgb3B0aW9ucz17c3RhdGUub3B0aW9uc31cbiAgICAgICAgICBzZXJpZXM9e3N0YXRlLnNlcmllc31cbiAgICAgICAgICB0eXBlPSdhcmVhJ1xuICAgICAgICAgIGhlaWdodD17MjIwfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0ncHMtY2FyZF9fZm9vdGVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC04Jz5cbiAgICAgICAgICAgIDxwPkl0ZW1zIEVhcm5pbmcgU2FsZXMgKCQpPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNCc+XG4gICAgICAgICAgICA8YSBocmVmPScjJz5cbiAgICAgICAgICAgICAgRXhwb3J0IFJlcG9ydFxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ljb24gaWNvbi1jbG91ZC1kb3dubG9hZCBtbC0yJz48L2k+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFNhbGVSZXBvcnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9