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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_ContainerDefault__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/layouts/ContainerDefault */ "./components/layouts/ContainerDefault.jsx");
/* harmony import */ var _components_shared_headers_HeaderDashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/shared/headers/HeaderDashboard */ "./components/shared/headers/HeaderDashboard.jsx");
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/firebaseConfig */ "./firebaseConfig.js");



var _jsxFileName = "E:\\FYP\\admin-dashboard\\martfury-admin-react\\pages\\file-management\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();






var index = function index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      fileUpload = _useState[0],
      setFileUpload = _useState[1];

  var uploadFile = function uploadFile() {
    if (fileUpload == null) return;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_ContainerDefault__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "File Manage",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_headers_HeaderDashboard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "File Management",
        description: "File Listing "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "file",
          onChange: function onChange(e) {
            setFileUpload(e.target.files[0]);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: uploadFile,
          children: "Upload File"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(index, "E1U+UetMp6Jcu5Ac1dU2m34nLqM=");

/* harmony default export */ __webpack_exports__["default"] = (index); // ? only store fakePath of file
// import React, { useEffect, useState } from "react";
// import ContainerDefault from "~/components/layouts/ContainerDefault";
// import Link from "next/link";
// import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
// import Axios from "axios";
// import style from "./style.module.css";
// // import {
// //   collection,
// //   addDoc,
// //   getDocs,
// //   deleteDoc,
// //   doc,
// // } from "firebase/firestore";
// // import { database } from "~/firebaseConfig";
// // const employeeInstance = collection(database, "employee");
// const DisplayUsers = ({ ID }) => {
//   const [users, setUser] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   useEffect(() => {
//     loadUsers();
//   }, []);
//   const loadUsers = async () => {
//     const result = await Axios.get("http://localhost:3001/users");
//     // let employees = [];
//     // getDocs(employeeInstance).then((data) => {
//     //   for (let i = 0; i < data.docs.length; i++) {
//     //     const item = data.docs[i];
//     //     employees.push({ ...item.data(), id: item.id });
//     //     console.log(item.data());
//     //   }
//     //   setUser(employees);
//     //   // console.log(data);
//     // });
//     setUser(result.data);
//     // console.log(result);
//   };
//   //   const deleteUser = async (id) => {
//   //     // await Axios.delete(`http://localhost:3001/users/${id}`);
//   //     const deleteUser = doc(database, "employee", id);
//   //     await deleteDoc(deleteUser);
//   //     loadUsers();
//   //   };
//   return (
//     <ContainerDefault title='Employees Manage'>
//       <HeaderDashboard
//         title='Employees Management'
//         description='Employees Listing '
//       />
//       <div>
//         <h1>Employees Details</h1>
//         <div className='row'>
//           <div className='col-6'>
//             <input
//               className={style.input}
//               type='text'
//               placeholder='Search Employee...'
//               onChange={(event) => {
//                 setSearchTerm(event.target.value);
//               }}
//             />
//           </div>
//           <div className='col-6'>
//             <Link href='/file-management/AddFile'>
//               {/* <button className={style.btn}>Add Employee</button> */}
//               <button class={style.cssbuttons}>
//                 <svg
//                   xmlns='http://www.w3.org/2000/svg'
//                   viewBox='0 0 24 24'
//                   width='24'
//                   height='24'
//                 >
//                   <path fill='none' d='M0 0h24v24H0z'></path>
//                   <path
//                     fill='currentColor'
//                     d='M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z'
//                   ></path>
//                 </svg>
//                 <span>Add Employee</span>
//               </button>
//             </Link>
//           </div>
//         </div>
//         <table className='table border shadow mt-4'>
//           <thead className='thead-dark '>
//             <tr>
//               <th scope='col'>#</th>
//               <th scope='col'>Name</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users
//               .filter((user) => {
//                 if (searchTerm == "") {
//                   return user;
//                 } else if (
//                   user.cnicNo
//                     .toLowerCase()
//                     .includes(searchTerm.toLowerCase()) ||
//                   user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                   user.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                   user.email.toLowerCase().includes(searchTerm.toLowerCase())
//                 ) {
//                   return user;
//                 }
//               })
//               .map((user, index) => (
//                 <tr>
//                   <th scope='row'> {index + 1} </th>
//                   <td> {user.name} </td>
//                   <td>
//                     <Link
//                       href={`/employees-management/users/viewUser/` + user.id}
//                     >
//                       <button className='btn btn-primary mr-2'>View</button>
//                     </Link>
//                     {/* <Link
//                     href='/employees-management/users/EditUser/[id]'
//                     as={`/employees-management/users/EditUser/${user?.id}`}
//                   > */}
//                     <Link href={`/employees-management/users/` + user.id}>
//                       <button className='btn btn-outline-primary mr-2'>
//                         Edit
//                       </button>
//                     </Link>
//                     {/* <Link href='#'> */}
//                     <button
//                       className='btn btn-danger mr-2'
//                       onClick={() => deleteUser(user.id)}
//                     >
//                       Delete
//                     </button>
//                     {/* </Link> */}
//                   </td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       </div>
//     </ContainerDefault>
//   );
// };
// export default DisplayUsers;
//* ==========================================================
// import React, { useEffect, useState } from "react";
// import ContainerDefault from "~/components/layouts/ContainerDefault";
// import Link from "next/link";
// import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
// import style from "./style.module.css";
// import DragFile from "./components/drop-file/DragFile";
// const FileManager = () => {
//   const onFileChange = (file) => {
//     console.log(file);
//   };
//   return (
//     <ContainerDefault title='Employees Manage'>
//       <HeaderDashboard
//         title='Employees Management'
//         description='Employees Listing '
//       />
//       <div>
//         <h1>File Details</h1>
//       </div>
//       <div className='container'>
//         <div className='row'>
//           <div className='col-12'>
//             <div className={style.box}>
//               <div className={style.header}>drag your file here !</div>
//               <DragFile onFileChange={(file) => onFileChange(file)} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </ContainerDefault>
//   );
// };
// export default FileManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlsZS1tYW5hZ2VtZW50L2luZGV4LmpzeCJdLCJuYW1lcyI6WyJpbmRleCIsInVzZVN0YXRlIiwiZmlsZVVwbG9hZCIsInNldEZpbGVVcGxvYWQiLCJ1cGxvYWRGaWxlIiwiZSIsInRhcmdldCIsImZpbGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNrQkMsc0RBQVEsQ0FBQyxJQUFELENBRDFCO0FBQUEsTUFDWEMsVUFEVztBQUFBLE1BQ0NDLGFBREQ7O0FBRWxCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsUUFBSUYsVUFBVSxJQUFJLElBQWxCLEVBQXdCO0FBQ3pCLEdBRkQ7O0FBR0Esc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyw0RUFBRDtBQUFrQixXQUFLLEVBQUMsYUFBeEI7QUFBQSw4QkFDRSxxRUFBQyxrRkFBRDtBQUFpQixhQUFLLEVBQUMsaUJBQXZCO0FBQXlDLG1CQUFXLEVBQUM7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBR0U7QUFBQSxnQ0FDRTtBQUNFLGNBQUksRUFBQyxNQURQO0FBRUUsa0JBQVEsRUFBRSxrQkFBQ0csQ0FBRCxFQUFPO0FBQ2ZGLHlCQUFhLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQUFELENBQWI7QUFDRDtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRTtBQUFRLGlCQUFPLEVBQUVILFVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBaUJELENBdEJEOztHQUFNSixLOztBQXdCU0Esb0VBQWYsRSxDQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9maWxlLW1hbmFnZW1lbnQuN2EzZTdmZGNhNzE3NTQ3N2Y3MDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRhaW5lckRlZmF1bHQgZnJvbSBcIn4vY29tcG9uZW50cy9sYXlvdXRzL0NvbnRhaW5lckRlZmF1bHRcIjtcbmltcG9ydCBIZWFkZXJEYXNoYm9hcmQgZnJvbSBcIn4vY29tcG9uZW50cy9zaGFyZWQvaGVhZGVycy9IZWFkZXJEYXNoYm9hcmRcIjtcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tIFwifi9maXJlYmFzZUNvbmZpZ1wiO1xuXG5jb25zdCBpbmRleCA9ICgpID0+IHtcbiAgY29uc3QgW2ZpbGVVcGxvYWQsIHNldEZpbGVVcGxvYWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHVwbG9hZEZpbGUgPSAoKSA9PiB7XG4gICAgaWYgKGZpbGVVcGxvYWQgPT0gbnVsbCkgcmV0dXJuO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q29udGFpbmVyRGVmYXVsdCB0aXRsZT0nRmlsZSBNYW5hZ2UnPlxuICAgICAgICA8SGVhZGVyRGFzaGJvYXJkIHRpdGxlPSdGaWxlIE1hbmFnZW1lbnQnIGRlc2NyaXB0aW9uPSdGaWxlIExpc3RpbmcgJyAvPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPSdmaWxlJ1xuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIHNldEZpbGVVcGxvYWQoZS50YXJnZXQuZmlsZXNbMF0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dXBsb2FkRmlsZX0+VXBsb2FkIEZpbGU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lckRlZmF1bHQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcblxuLy8gPyBvbmx5IHN0b3JlIGZha2VQYXRoIG9mIGZpbGVcblxuLy8gaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBDb250YWluZXJEZWZhdWx0IGZyb20gXCJ+L2NvbXBvbmVudHMvbGF5b3V0cy9Db250YWluZXJEZWZhdWx0XCI7XG4vLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG4vLyBpbXBvcnQgSGVhZGVyRGFzaGJvYXJkIGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlcnMvSGVhZGVyRGFzaGJvYXJkXCI7XG4vLyBpbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG4vLyBpbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUubW9kdWxlLmNzc1wiO1xuLy8gLy8gaW1wb3J0IHtcbi8vIC8vICAgY29sbGVjdGlvbixcbi8vIC8vICAgYWRkRG9jLFxuLy8gLy8gICBnZXREb2NzLFxuLy8gLy8gICBkZWxldGVEb2MsXG4vLyAvLyAgIGRvYyxcbi8vIC8vIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuLy8gLy8gaW1wb3J0IHsgZGF0YWJhc2UgfSBmcm9tIFwifi9maXJlYmFzZUNvbmZpZ1wiO1xuLy8gLy8gY29uc3QgZW1wbG95ZWVJbnN0YW5jZSA9IGNvbGxlY3Rpb24oZGF0YWJhc2UsIFwiZW1wbG95ZWVcIik7XG5cbi8vIGNvbnN0IERpc3BsYXlVc2VycyA9ICh7IElEIH0pID0+IHtcbi8vICAgY29uc3QgW3VzZXJzLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFtdKTtcbi8vICAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoXCJcIik7XG5cbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICBsb2FkVXNlcnMoKTtcbi8vICAgfSwgW10pO1xuXG4vLyAgIGNvbnN0IGxvYWRVc2VycyA9IGFzeW5jICgpID0+IHtcbi8vICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBBeGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvdXNlcnNcIik7XG4vLyAgICAgLy8gbGV0IGVtcGxveWVlcyA9IFtdO1xuLy8gICAgIC8vIGdldERvY3MoZW1wbG95ZWVJbnN0YW5jZSkudGhlbigoZGF0YSkgPT4ge1xuLy8gICAgIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmRvY3MubGVuZ3RoOyBpKyspIHtcbi8vICAgICAvLyAgICAgY29uc3QgaXRlbSA9IGRhdGEuZG9jc1tpXTtcbi8vICAgICAvLyAgICAgZW1wbG95ZWVzLnB1c2goeyAuLi5pdGVtLmRhdGEoKSwgaWQ6IGl0ZW0uaWQgfSk7XG4vLyAgICAgLy8gICAgIGNvbnNvbGUubG9nKGl0ZW0uZGF0YSgpKTtcbi8vICAgICAvLyAgIH1cbi8vICAgICAvLyAgIHNldFVzZXIoZW1wbG95ZWVzKTtcbi8vICAgICAvLyAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gICAgIC8vIH0pO1xuLy8gICAgIHNldFVzZXIocmVzdWx0LmRhdGEpO1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4vLyAgIH07XG5cbi8vICAgLy8gICBjb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKGlkKSA9PiB7XG4vLyAgIC8vICAgICAvLyBhd2FpdCBBeGlvcy5kZWxldGUoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91c2Vycy8ke2lkfWApO1xuLy8gICAvLyAgICAgY29uc3QgZGVsZXRlVXNlciA9IGRvYyhkYXRhYmFzZSwgXCJlbXBsb3llZVwiLCBpZCk7XG4vLyAgIC8vICAgICBhd2FpdCBkZWxldGVEb2MoZGVsZXRlVXNlcik7XG4vLyAgIC8vICAgICBsb2FkVXNlcnMoKTtcbi8vICAgLy8gICB9O1xuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPENvbnRhaW5lckRlZmF1bHQgdGl0bGU9J0VtcGxveWVlcyBNYW5hZ2UnPlxuLy8gICAgICAgPEhlYWRlckRhc2hib2FyZFxuLy8gICAgICAgICB0aXRsZT0nRW1wbG95ZWVzIE1hbmFnZW1lbnQnXG4vLyAgICAgICAgIGRlc2NyaXB0aW9uPSdFbXBsb3llZXMgTGlzdGluZyAnXG4vLyAgICAgICAvPlxuLy8gICAgICAgPGRpdj5cbi8vICAgICAgICAgPGgxPkVtcGxveWVlcyBEZXRhaWxzPC9oMT5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4vLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02Jz5cbi8vICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmlucHV0fVxuLy8gICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuLy8gICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VhcmNoIEVtcGxveWVlLi4uJ1xuLy8gICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgc2V0U2VhcmNoVGVybShldmVudC50YXJnZXQudmFsdWUpO1xuLy8gICAgICAgICAgICAgICB9fVxuLy8gICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTYnPlxuLy8gICAgICAgICAgICAgPExpbmsgaHJlZj0nL2ZpbGUtbWFuYWdlbWVudC9BZGRGaWxlJz5cbi8vICAgICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5idG59PkFkZCBFbXBsb3llZTwvYnV0dG9uPiAqL31cbi8vICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz17c3R5bGUuY3NzYnV0dG9uc30+XG4vLyAgICAgICAgICAgICAgICAgPHN2Z1xuLy8gICAgICAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuLy8gICAgICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuLy8gICAgICAgICAgICAgICAgICAgd2lkdGg9JzI0J1xuLy8gICAgICAgICAgICAgICAgICAgaGVpZ2h0PScyNCdcbi8vICAgICAgICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSdub25lJyBkPSdNMCAwaDI0djI0SDB6Jz48L3BhdGg+XG4vLyAgICAgICAgICAgICAgICAgICA8cGF0aFxuLy8gICAgICAgICAgICAgICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXG4vLyAgICAgICAgICAgICAgICAgICAgIGQ9J00xMSAxMVY1aDJ2Nmg2djJoLTZ2NmgtMnYtNkg1di0yeidcbi8vICAgICAgICAgICAgICAgICAgID48L3BhdGg+XG4vLyAgICAgICAgICAgICAgICAgPC9zdmc+XG4vLyAgICAgICAgICAgICAgICAgPHNwYW4+QWRkIEVtcGxveWVlPC9zcGFuPlxuLy8gICAgICAgICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgICAgIDwvTGluaz5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPC9kaXY+XG5cbi8vICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUgYm9yZGVyIHNoYWRvdyBtdC00Jz5cbi8vICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPSd0aGVhZC1kYXJrICc+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgIDx0aCBzY29wZT0nY29sJz4jPC90aD5cbi8vICAgICAgICAgICAgICAgPHRoIHNjb3BlPSdjb2wnPk5hbWU8L3RoPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICA8L3RoZWFkPlxuLy8gICAgICAgICAgIDx0Ym9keT5cbi8vICAgICAgICAgICAgIHt1c2Vyc1xuLy8gICAgICAgICAgICAgICAuZmlsdGVyKCh1c2VyKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaFRlcm0gPT0gXCJcIikge1xuLy8gICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4vLyAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbi8vICAgICAgICAgICAgICAgICAgIHVzZXIuY25pY05vXG4vLyAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4vLyAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpIHx8XG4vLyAgICAgICAgICAgICAgICAgICB1c2VyLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpIHx8XG4vLyAgICAgICAgICAgICAgICAgICB1c2VyLnBob25lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSB8fFxuLy8gICAgICAgICAgICAgICAgICAgdXNlci5lbWFpbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSlcbi8vICAgICAgICAgICAgICAgICApIHtcbi8vICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgICAgLm1hcCgodXNlciwgaW5kZXgpID0+IChcbi8vICAgICAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9J3Jvdyc+IHtpbmRleCArIDF9IDwvdGg+XG4vLyAgICAgICAgICAgICAgICAgICA8dGQ+IHt1c2VyLm5hbWV9IDwvdGQ+XG5cbi8vICAgICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPExpbmtcbi8vICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2VtcGxveWVlcy1tYW5hZ2VtZW50L3VzZXJzL3ZpZXdVc2VyL2AgKyB1c2VyLmlkfVxuLy8gICAgICAgICAgICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeSBtci0yJz5WaWV3PC9idXR0b24+XG4vLyAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbi8vICAgICAgICAgICAgICAgICAgICAgey8qIDxMaW5rXG4vLyAgICAgICAgICAgICAgICAgICAgIGhyZWY9Jy9lbXBsb3llZXMtbWFuYWdlbWVudC91c2Vycy9FZGl0VXNlci9baWRdJ1xuLy8gICAgICAgICAgICAgICAgICAgICBhcz17YC9lbXBsb3llZXMtbWFuYWdlbWVudC91c2Vycy9FZGl0VXNlci8ke3VzZXI/LmlkfWB9XG4vLyAgICAgICAgICAgICAgICAgICA+ICovfVxuLy8gICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2VtcGxveWVlcy1tYW5hZ2VtZW50L3VzZXJzL2AgKyB1c2VyLmlkfT5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgbXItMic+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbi8vICAgICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9JyMnPiAqL31cbi8vICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuLy8gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYW5nZXIgbXItMidcbi8vICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVVc2VyKHVzZXIuaWQpfVxuLy8gICAgICAgICAgICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgICAgICAgICAgICAgICB7LyogPC9MaW5rPiAqL31cbi8vICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICAgICAgKSl9XG4vLyAgICAgICAgICAgPC90Ym9keT5cbi8vICAgICAgICAgPC90YWJsZT5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIDwvQ29udGFpbmVyRGVmYXVsdD5cbi8vICAgKTtcbi8vIH07XG4vLyBleHBvcnQgZGVmYXVsdCBEaXNwbGF5VXNlcnM7XG5cbi8vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIGltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgQ29udGFpbmVyRGVmYXVsdCBmcm9tIFwifi9jb21wb25lbnRzL2xheW91dHMvQ29udGFpbmVyRGVmYXVsdFwiO1xuLy8gaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuLy8gaW1wb3J0IEhlYWRlckRhc2hib2FyZCBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9oZWFkZXJzL0hlYWRlckRhc2hib2FyZFwiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLm1vZHVsZS5jc3NcIjtcbi8vIGltcG9ydCBEcmFnRmlsZSBmcm9tIFwiLi9jb21wb25lbnRzL2Ryb3AtZmlsZS9EcmFnRmlsZVwiO1xuLy8gY29uc3QgRmlsZU1hbmFnZXIgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IG9uRmlsZUNoYW5nZSA9IChmaWxlKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coZmlsZSk7XG4vLyAgIH07XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPENvbnRhaW5lckRlZmF1bHQgdGl0bGU9J0VtcGxveWVlcyBNYW5hZ2UnPlxuLy8gICAgICAgPEhlYWRlckRhc2hib2FyZFxuLy8gICAgICAgICB0aXRsZT0nRW1wbG95ZWVzIE1hbmFnZW1lbnQnXG4vLyAgICAgICAgIGRlc2NyaXB0aW9uPSdFbXBsb3llZXMgTGlzdGluZyAnXG4vLyAgICAgICAvPlxuLy8gICAgICAgPGRpdj5cbi8vICAgICAgICAgPGgxPkZpbGUgRGV0YWlsczwvaDE+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbi8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEyJz5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ib3h9PlxuLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaGVhZGVyfT5kcmFnIHlvdXIgZmlsZSBoZXJlICE8L2Rpdj5cbi8vICAgICAgICAgICAgICAgPERyYWdGaWxlIG9uRmlsZUNoYW5nZT17KGZpbGUpID0+IG9uRmlsZUNoYW5nZShmaWxlKX0gLz5cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIDwvQ29udGFpbmVyRGVmYXVsdD5cbi8vICAgKTtcbi8vIH07XG4vLyBleHBvcnQgZGVmYXVsdCBGaWxlTWFuYWdlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=