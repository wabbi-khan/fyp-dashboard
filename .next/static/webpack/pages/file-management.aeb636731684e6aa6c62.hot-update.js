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



var _jsxFileName = "E:\\FYP\\admin-dashboard\\martfury-admin-react\\pages\\file-management\\index.jsx",
    _this = undefined;



 // import FormikForm from "./FormikForm";

var index = function index() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_ContainerDefault__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "File Manage",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_headers_HeaderDashboard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "File Management",
        description: "File Listing "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlsZS1tYW5hZ2VtZW50L2luZGV4LmpzeCJdLCJuYW1lcyI6WyJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQixzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLDRFQUFEO0FBQWtCLFdBQUssRUFBQyxhQUF4QjtBQUFBLDZCQUNFLHFFQUFDLGtGQUFEO0FBQWlCLGFBQUssRUFBQyxpQkFBdkI7QUFBeUMsbUJBQVcsRUFBQztBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBT0QsQ0FSRDs7QUFVZUEsb0VBQWYsRSxDQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9maWxlLW1hbmFnZW1lbnQuYWViNjM2NzMxNjg0ZTZhYTZjNjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRhaW5lckRlZmF1bHQgZnJvbSBcIn4vY29tcG9uZW50cy9sYXlvdXRzL0NvbnRhaW5lckRlZmF1bHRcIjtcbmltcG9ydCBIZWFkZXJEYXNoYm9hcmQgZnJvbSBcIn4vY29tcG9uZW50cy9zaGFyZWQvaGVhZGVycy9IZWFkZXJEYXNoYm9hcmRcIjtcbi8vIGltcG9ydCBGb3JtaWtGb3JtIGZyb20gXCIuL0Zvcm1pa0Zvcm1cIjtcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q29udGFpbmVyRGVmYXVsdCB0aXRsZT0nRmlsZSBNYW5hZ2UnPlxuICAgICAgICA8SGVhZGVyRGFzaGJvYXJkIHRpdGxlPSdGaWxlIE1hbmFnZW1lbnQnIGRlc2NyaXB0aW9uPSdGaWxlIExpc3RpbmcgJyAvPlxuICAgICAgPC9Db250YWluZXJEZWZhdWx0PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG5cbi8vID8gb25seSBzdG9yZSBmYWtlUGF0aCBvZiBmaWxlXG5cbi8vIGltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgQ29udGFpbmVyRGVmYXVsdCBmcm9tIFwifi9jb21wb25lbnRzL2xheW91dHMvQ29udGFpbmVyRGVmYXVsdFwiO1xuLy8gaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuLy8gaW1wb3J0IEhlYWRlckRhc2hib2FyZCBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9oZWFkZXJzL0hlYWRlckRhc2hib2FyZFwiO1xuLy8gaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLm1vZHVsZS5jc3NcIjtcbi8vIC8vIGltcG9ydCB7XG4vLyAvLyAgIGNvbGxlY3Rpb24sXG4vLyAvLyAgIGFkZERvYyxcbi8vIC8vICAgZ2V0RG9jcyxcbi8vIC8vICAgZGVsZXRlRG9jLFxuLy8gLy8gICBkb2MsXG4vLyAvLyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbi8vIC8vIGltcG9ydCB7IGRhdGFiYXNlIH0gZnJvbSBcIn4vZmlyZWJhc2VDb25maWdcIjtcbi8vIC8vIGNvbnN0IGVtcGxveWVlSW5zdGFuY2UgPSBjb2xsZWN0aW9uKGRhdGFiYXNlLCBcImVtcGxveWVlXCIpO1xuXG4vLyBjb25zdCBEaXNwbGF5VXNlcnMgPSAoeyBJRCB9KSA9PiB7XG4vLyAgIGNvbnN0IFt1c2Vycywgc2V0VXNlcl0gPSB1c2VTdGF0ZShbXSk7XG4vLyAgIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgbG9hZFVzZXJzKCk7XG4vLyAgIH0sIFtdKTtcblxuLy8gICBjb25zdCBsb2FkVXNlcnMgPSBhc3luYyAoKSA9PiB7XG4vLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3VzZXJzXCIpO1xuLy8gICAgIC8vIGxldCBlbXBsb3llZXMgPSBbXTtcbi8vICAgICAvLyBnZXREb2NzKGVtcGxveWVlSW5zdGFuY2UpLnRoZW4oKGRhdGEpID0+IHtcbi8vICAgICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5kb2NzLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgLy8gICAgIGNvbnN0IGl0ZW0gPSBkYXRhLmRvY3NbaV07XG4vLyAgICAgLy8gICAgIGVtcGxveWVlcy5wdXNoKHsgLi4uaXRlbS5kYXRhKCksIGlkOiBpdGVtLmlkIH0pO1xuLy8gICAgIC8vICAgICBjb25zb2xlLmxvZyhpdGVtLmRhdGEoKSk7XG4vLyAgICAgLy8gICB9XG4vLyAgICAgLy8gICBzZXRVc2VyKGVtcGxveWVlcyk7XG4vLyAgICAgLy8gICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgICAvLyB9KTtcbi8vICAgICBzZXRVc2VyKHJlc3VsdC5kYXRhKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuLy8gICB9O1xuXG4vLyAgIC8vICAgY29uc3QgZGVsZXRlVXNlciA9IGFzeW5jIChpZCkgPT4ge1xuLy8gICAvLyAgICAgLy8gYXdhaXQgQXhpb3MuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvdXNlcnMvJHtpZH1gKTtcbi8vICAgLy8gICAgIGNvbnN0IGRlbGV0ZVVzZXIgPSBkb2MoZGF0YWJhc2UsIFwiZW1wbG95ZWVcIiwgaWQpO1xuLy8gICAvLyAgICAgYXdhaXQgZGVsZXRlRG9jKGRlbGV0ZVVzZXIpO1xuLy8gICAvLyAgICAgbG9hZFVzZXJzKCk7XG4vLyAgIC8vICAgfTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxDb250YWluZXJEZWZhdWx0IHRpdGxlPSdFbXBsb3llZXMgTWFuYWdlJz5cbi8vICAgICAgIDxIZWFkZXJEYXNoYm9hcmRcbi8vICAgICAgICAgdGl0bGU9J0VtcGxveWVlcyBNYW5hZ2VtZW50J1xuLy8gICAgICAgICBkZXNjcmlwdGlvbj0nRW1wbG95ZWVzIExpc3RpbmcgJ1xuLy8gICAgICAgLz5cbi8vICAgICAgIDxkaXY+XG4vLyAgICAgICAgIDxoMT5FbXBsb3llZXMgRGV0YWlsczwvaDE+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNic+XG4vLyAgICAgICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5pbnB1dH1cbi8vICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbi8vICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1NlYXJjaCBFbXBsb3llZS4uLidcbi8vICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgIHNldFNlYXJjaFRlcm0oZXZlbnQudGFyZ2V0LnZhbHVlKTtcbi8vICAgICAgICAgICAgICAgfX1cbi8vICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02Jz5cbi8vICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9maWxlLW1hbmFnZW1lbnQvQWRkRmlsZSc+XG4vLyAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuYnRufT5BZGQgRW1wbG95ZWU8L2J1dHRvbj4gKi99XG4vLyAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9e3N0eWxlLmNzc2J1dHRvbnN9PlxuLy8gICAgICAgICAgICAgICAgIDxzdmdcbi8vICAgICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zydcbi8vICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbi8vICAgICAgICAgICAgICAgICAgIHdpZHRoPScyNCdcbi8vICAgICAgICAgICAgICAgICAgIGhlaWdodD0nMjQnXG4vLyAgICAgICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD0nbm9uZScgZD0nTTAgMGgyNHYyNEgweic+PC9wYXRoPlxuLy8gICAgICAgICAgICAgICAgICAgPHBhdGhcbi8vICAgICAgICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xuLy8gICAgICAgICAgICAgICAgICAgICBkPSdNMTEgMTFWNWgydjZoNnYyaC02djZoLTJ2LTZINXYtMnonXG4vLyAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuLy8gICAgICAgICAgICAgICAgIDwvc3ZnPlxuLy8gICAgICAgICAgICAgICAgIDxzcGFuPkFkZCBFbXBsb3llZTwvc3Bhbj5cbi8vICAgICAgICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgICAgICA8L0xpbms+XG4vLyAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDwvZGl2PlxuXG4vLyAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlIGJvcmRlciBzaGFkb3cgbXQtNCc+XG4vLyAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT0ndGhlYWQtZGFyayAnPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICA8dGggc2NvcGU9J2NvbCc+IzwvdGg+XG4vLyAgICAgICAgICAgICAgIDx0aCBzY29wZT0nY29sJz5OYW1lPC90aD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgPC90aGVhZD5cbi8vICAgICAgICAgICA8dGJvZHk+XG4vLyAgICAgICAgICAgICB7dXNlcnNcbi8vICAgICAgICAgICAgICAgLmZpbHRlcigodXNlcikgPT4ge1xuLy8gICAgICAgICAgICAgICAgIGlmIChzZWFyY2hUZXJtID09IFwiXCIpIHtcbi8vICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4vLyAgICAgICAgICAgICAgICAgICB1c2VyLmNuaWNOb1xuLy8gICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuLy8gICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSB8fFxuLy8gICAgICAgICAgICAgICAgICAgdXNlci5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSB8fFxuLy8gICAgICAgICAgICAgICAgICAgdXNlci5waG9uZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkgfHxcbi8vICAgICAgICAgICAgICAgICAgIHVzZXIuZW1haWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXG4vLyAgICAgICAgICAgICAgICAgKSB7XG4vLyAgICAgICAgICAgICAgICAgICByZXR1cm4gdXNlcjtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAgIC5tYXAoKHVzZXIsIGluZGV4KSA9PiAoXG4vLyAgICAgICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPSdyb3cnPiB7aW5kZXggKyAxfSA8L3RoPlxuLy8gICAgICAgICAgICAgICAgICAgPHRkPiB7dXNlci5uYW1lfSA8L3RkPlxuXG4vLyAgICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4vLyAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9lbXBsb3llZXMtbWFuYWdlbWVudC91c2Vycy92aWV3VXNlci9gICsgdXNlci5pZH1cbi8vICAgICAgICAgICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnkgbXItMic+VmlldzwvYnV0dG9uPlxuLy8gICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4vLyAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGlua1xuLy8gICAgICAgICAgICAgICAgICAgICBocmVmPScvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvRWRpdFVzZXIvW2lkXSdcbi8vICAgICAgICAgICAgICAgICAgICAgYXM9e2AvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvRWRpdFVzZXIvJHt1c2VyPy5pZH1gfVxuLy8gICAgICAgICAgICAgICAgICAgPiAqL31cbi8vICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9lbXBsb3llZXMtbWFuYWdlbWVudC91c2Vycy9gICsgdXNlci5pZH0+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tb3V0bGluZS1wcmltYXJ5IG1yLTInPlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxuLy8gICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4vLyAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPScjJz4gKi99XG4vLyAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbi8vICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tZGFuZ2VyIG1yLTInXG4vLyAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlVXNlcih1c2VyLmlkKX1cbi8vICAgICAgICAgICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuLy8gICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgICAgICAgICAgICAgey8qIDwvTGluaz4gKi99XG4vLyAgICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICAgICkpfVxuLy8gICAgICAgICAgIDwvdGJvZHk+XG4vLyAgICAgICAgIDwvdGFibGU+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICA8L0NvbnRhaW5lckRlZmF1bHQ+XG4vLyAgICk7XG4vLyB9O1xuLy8gZXhwb3J0IGRlZmF1bHQgRGlzcGxheVVzZXJzO1xuXG4vLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IENvbnRhaW5lckRlZmF1bHQgZnJvbSBcIn4vY29tcG9uZW50cy9sYXlvdXRzL0NvbnRhaW5lckRlZmF1bHRcIjtcbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbi8vIGltcG9ydCBIZWFkZXJEYXNoYm9hcmQgZnJvbSBcIn4vY29tcG9uZW50cy9zaGFyZWQvaGVhZGVycy9IZWFkZXJEYXNoYm9hcmRcIjtcbi8vIGltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5tb2R1bGUuY3NzXCI7XG4vLyBpbXBvcnQgRHJhZ0ZpbGUgZnJvbSBcIi4vY29tcG9uZW50cy9kcm9wLWZpbGUvRHJhZ0ZpbGVcIjtcbi8vIGNvbnN0IEZpbGVNYW5hZ2VyID0gKCkgPT4ge1xuLy8gICBjb25zdCBvbkZpbGVDaGFuZ2UgPSAoZmlsZSkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKGZpbGUpO1xuLy8gICB9O1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxDb250YWluZXJEZWZhdWx0IHRpdGxlPSdFbXBsb3llZXMgTWFuYWdlJz5cbi8vICAgICAgIDxIZWFkZXJEYXNoYm9hcmRcbi8vICAgICAgICAgdGl0bGU9J0VtcGxveWVlcyBNYW5hZ2VtZW50J1xuLy8gICAgICAgICBkZXNjcmlwdGlvbj0nRW1wbG95ZWVzIExpc3RpbmcgJ1xuLy8gICAgICAgLz5cbi8vICAgICAgIDxkaXY+XG4vLyAgICAgICAgIDxoMT5GaWxlIERldGFpbHM8L2gxPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4vLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xMic+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYm94fT5cbi8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhlYWRlcn0+ZHJhZyB5b3VyIGZpbGUgaGVyZSAhPC9kaXY+XG4vLyAgICAgICAgICAgICAgIDxEcmFnRmlsZSBvbkZpbGVDaGFuZ2U9eyhmaWxlKSA9PiBvbkZpbGVDaGFuZ2UoZmlsZSl9IC8+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICA8L0NvbnRhaW5lckRlZmF1bHQ+XG4vLyAgICk7XG4vLyB9O1xuLy8gZXhwb3J0IGRlZmF1bHQgRmlsZU1hbmFnZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9