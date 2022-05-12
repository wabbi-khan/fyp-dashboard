webpackHotUpdate_N_E("pages/file-management",{

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/helpers/validator.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./node_modules/axios/package.json":
false,

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./pages/file-management/style.module.css":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/process/browser.js":
false,

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: "index"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 10
  }, _this);
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

/***/ }),

/***/ "./pages/file-management/style.module.css":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlsZS1tYW5hZ2VtZW50L2luZGV4LmpzeCJdLCJuYW1lcyI6WyJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2xCLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQUZEOztBQUllQSxvRUFBZixFLENBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9maWxlLW1hbmFnZW1lbnQuODBhMmY2ZThiYjY5MzEzOTNhOWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRhaW5lckRlZmF1bHQgZnJvbSBcIn4vY29tcG9uZW50cy9sYXlvdXRzL0NvbnRhaW5lckRlZmF1bHRcIjtcbmltcG9ydCBIZWFkZXJEYXNoYm9hcmQgZnJvbSBcIn4vY29tcG9uZW50cy9zaGFyZWQvaGVhZGVycy9IZWFkZXJEYXNoYm9hcmRcIjtcbi8vIGltcG9ydCBGb3JtaWtGb3JtIGZyb20gXCIuL0Zvcm1pa0Zvcm1cIjtcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICByZXR1cm4gPGRpdj5pbmRleDwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuXG4vLyA/IG9ubHkgc3RvcmUgZmFrZVBhdGggb2YgZmlsZVxuXG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IENvbnRhaW5lckRlZmF1bHQgZnJvbSBcIn4vY29tcG9uZW50cy9sYXlvdXRzL0NvbnRhaW5lckRlZmF1bHRcIjtcbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbi8vIGltcG9ydCBIZWFkZXJEYXNoYm9hcmQgZnJvbSBcIn4vY29tcG9uZW50cy9zaGFyZWQvaGVhZGVycy9IZWFkZXJEYXNoYm9hcmRcIjtcbi8vIGltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcbi8vIGltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5tb2R1bGUuY3NzXCI7XG4vLyAvLyBpbXBvcnQge1xuLy8gLy8gICBjb2xsZWN0aW9uLFxuLy8gLy8gICBhZGREb2MsXG4vLyAvLyAgIGdldERvY3MsXG4vLyAvLyAgIGRlbGV0ZURvYyxcbi8vIC8vICAgZG9jLFxuLy8gLy8gfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG4vLyAvLyBpbXBvcnQgeyBkYXRhYmFzZSB9IGZyb20gXCJ+L2ZpcmViYXNlQ29uZmlnXCI7XG4vLyAvLyBjb25zdCBlbXBsb3llZUluc3RhbmNlID0gY29sbGVjdGlvbihkYXRhYmFzZSwgXCJlbXBsb3llZVwiKTtcblxuLy8gY29uc3QgRGlzcGxheVVzZXJzID0gKHsgSUQgfSkgPT4ge1xuLy8gICBjb25zdCBbdXNlcnMsIHNldFVzZXJdID0gdXNlU3RhdGUoW10pO1xuLy8gICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgIGxvYWRVc2VycygpO1xuLy8gICB9LCBbXSk7XG5cbi8vICAgY29uc3QgbG9hZFVzZXJzID0gYXN5bmMgKCkgPT4ge1xuLy8gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91c2Vyc1wiKTtcbi8vICAgICAvLyBsZXQgZW1wbG95ZWVzID0gW107XG4vLyAgICAgLy8gZ2V0RG9jcyhlbXBsb3llZUluc3RhbmNlKS50aGVuKChkYXRhKSA9PiB7XG4vLyAgICAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuZG9jcy5sZW5ndGg7IGkrKykge1xuLy8gICAgIC8vICAgICBjb25zdCBpdGVtID0gZGF0YS5kb2NzW2ldO1xuLy8gICAgIC8vICAgICBlbXBsb3llZXMucHVzaCh7IC4uLml0ZW0uZGF0YSgpLCBpZDogaXRlbS5pZCB9KTtcbi8vICAgICAvLyAgICAgY29uc29sZS5sb2coaXRlbS5kYXRhKCkpO1xuLy8gICAgIC8vICAgfVxuLy8gICAgIC8vICAgc2V0VXNlcihlbXBsb3llZXMpO1xuLy8gICAgIC8vICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4vLyAgICAgLy8gfSk7XG4vLyAgICAgc2V0VXNlcihyZXN1bHQuZGF0YSk7XG4vLyAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcbi8vICAgfTtcblxuLy8gICAvLyAgIGNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAoaWQpID0+IHtcbi8vICAgLy8gICAgIC8vIGF3YWl0IEF4aW9zLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDozMDAxL3VzZXJzLyR7aWR9YCk7XG4vLyAgIC8vICAgICBjb25zdCBkZWxldGVVc2VyID0gZG9jKGRhdGFiYXNlLCBcImVtcGxveWVlXCIsIGlkKTtcbi8vICAgLy8gICAgIGF3YWl0IGRlbGV0ZURvYyhkZWxldGVVc2VyKTtcbi8vICAgLy8gICAgIGxvYWRVc2VycygpO1xuLy8gICAvLyAgIH07XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8Q29udGFpbmVyRGVmYXVsdCB0aXRsZT0nRW1wbG95ZWVzIE1hbmFnZSc+XG4vLyAgICAgICA8SGVhZGVyRGFzaGJvYXJkXG4vLyAgICAgICAgIHRpdGxlPSdFbXBsb3llZXMgTWFuYWdlbWVudCdcbi8vICAgICAgICAgZGVzY3JpcHRpb249J0VtcGxveWVlcyBMaXN0aW5nICdcbi8vICAgICAgIC8+XG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8aDE+RW1wbG95ZWVzIERldGFpbHM8L2gxPlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbi8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTYnPlxuLy8gICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuaW5wdXR9XG4vLyAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4vLyAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2ggRW1wbG95ZWUuLi4nXG4vLyAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbi8vICAgICAgICAgICAgICAgICBzZXRTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4vLyAgICAgICAgICAgICAgIH19XG4vLyAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNic+XG4vLyAgICAgICAgICAgICA8TGluayBocmVmPScvZmlsZS1tYW5hZ2VtZW50L0FkZEZpbGUnPlxuLy8gICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLmJ0bn0+QWRkIEVtcGxveWVlPC9idXR0b24+ICovfVxuLy8gICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPXtzdHlsZS5jc3NidXR0b25zfT5cbi8vICAgICAgICAgICAgICAgICA8c3ZnXG4vLyAgICAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4vLyAgICAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4vLyAgICAgICAgICAgICAgICAgICB3aWR0aD0nMjQnXG4vLyAgICAgICAgICAgICAgICAgICBoZWlnaHQ9JzI0J1xuLy8gICAgICAgICAgICAgICAgID5cbi8vICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9J25vbmUnIGQ9J00wIDBoMjR2MjRIMHonPjwvcGF0aD5cbi8vICAgICAgICAgICAgICAgICAgIDxwYXRoXG4vLyAgICAgICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcbi8vICAgICAgICAgICAgICAgICAgICAgZD0nTTExIDExVjVoMnY2aDZ2MmgtNnY2aC0ydi02SDV2LTJ6J1xuLy8gICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cbi8vICAgICAgICAgICAgICAgICA8L3N2Zz5cbi8vICAgICAgICAgICAgICAgICA8c3Bhbj5BZGQgRW1wbG95ZWU8L3NwYW4+XG4vLyAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgICAgICAgPC9MaW5rPlxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8L2Rpdj5cblxuLy8gICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSBib3JkZXIgc2hhZG93IG10LTQnPlxuLy8gICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9J3RoZWFkLWRhcmsgJz5cbi8vICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgPHRoIHNjb3BlPSdjb2wnPiM8L3RoPlxuLy8gICAgICAgICAgICAgICA8dGggc2NvcGU9J2NvbCc+TmFtZTwvdGg+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgIDwvdGhlYWQ+XG4vLyAgICAgICAgICAgPHRib2R5PlxuLy8gICAgICAgICAgICAge3VzZXJzXG4vLyAgICAgICAgICAgICAgIC5maWx0ZXIoKHVzZXIpID0+IHtcbi8vICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoVGVybSA9PSBcIlwiKSB7XG4vLyAgICAgICAgICAgICAgICAgICByZXR1cm4gdXNlcjtcbi8vICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuLy8gICAgICAgICAgICAgICAgICAgdXNlci5jbmljTm9cbi8vICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbi8vICAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkgfHxcbi8vICAgICAgICAgICAgICAgICAgIHVzZXIubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkgfHxcbi8vICAgICAgICAgICAgICAgICAgIHVzZXIucGhvbmUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpIHx8XG4vLyAgICAgICAgICAgICAgICAgICB1c2VyLmVtYWlsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKVxuLy8gICAgICAgICAgICAgICAgICkge1xuLy8gICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgICAgICAubWFwKCh1c2VyLCBpbmRleCkgPT4gKFxuLy8gICAgICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT0ncm93Jz4ge2luZGV4ICsgMX0gPC90aD5cbi8vICAgICAgICAgICAgICAgICAgIDx0ZD4ge3VzZXIubmFtZX0gPC90ZD5cblxuLy8gICAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8TGlua1xuLy8gICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvdmlld1VzZXIvYCArIHVzZXIuaWR9XG4vLyAgICAgICAgICAgICAgICAgICAgID5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5IG1yLTInPlZpZXc8L2J1dHRvbj5cbi8vICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuLy8gICAgICAgICAgICAgICAgICAgICB7LyogPExpbmtcbi8vICAgICAgICAgICAgICAgICAgICAgaHJlZj0nL2VtcGxveWVlcy1tYW5hZ2VtZW50L3VzZXJzL0VkaXRVc2VyL1tpZF0nXG4vLyAgICAgICAgICAgICAgICAgICAgIGFzPXtgL2VtcGxveWVlcy1tYW5hZ2VtZW50L3VzZXJzL0VkaXRVc2VyLyR7dXNlcj8uaWR9YH1cbi8vICAgICAgICAgICAgICAgICAgID4gKi99XG4vLyAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvYCArIHVzZXIuaWR9PlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBtci0yJz5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRcbi8vICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuLy8gICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj0nIyc+ICovfVxuLy8gICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4vLyAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLWRhbmdlciBtci0yJ1xuLy8gICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVVzZXIodXNlci5pZCl9XG4vLyAgICAgICAgICAgICAgICAgICAgID5cbi8vICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcbi8vICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgICAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxuLy8gICAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgICA8L3Rib2R5PlxuLy8gICAgICAgICA8L3RhYmxlPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgPC9Db250YWluZXJEZWZhdWx0PlxuLy8gICApO1xuLy8gfTtcbi8vIGV4cG9ydCBkZWZhdWx0IERpc3BsYXlVc2VycztcblxuLy8gaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBDb250YWluZXJEZWZhdWx0IGZyb20gXCJ+L2NvbXBvbmVudHMvbGF5b3V0cy9Db250YWluZXJEZWZhdWx0XCI7XG4vLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG4vLyBpbXBvcnQgSGVhZGVyRGFzaGJvYXJkIGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlcnMvSGVhZGVyRGFzaGJvYXJkXCI7XG4vLyBpbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUubW9kdWxlLmNzc1wiO1xuLy8gaW1wb3J0IERyYWdGaWxlIGZyb20gXCIuL2NvbXBvbmVudHMvZHJvcC1maWxlL0RyYWdGaWxlXCI7XG4vLyBjb25zdCBGaWxlTWFuYWdlciA9ICgpID0+IHtcbi8vICAgY29uc3Qgb25GaWxlQ2hhbmdlID0gKGZpbGUpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhmaWxlKTtcbi8vICAgfTtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8Q29udGFpbmVyRGVmYXVsdCB0aXRsZT0nRW1wbG95ZWVzIE1hbmFnZSc+XG4vLyAgICAgICA8SGVhZGVyRGFzaGJvYXJkXG4vLyAgICAgICAgIHRpdGxlPSdFbXBsb3llZXMgTWFuYWdlbWVudCdcbi8vICAgICAgICAgZGVzY3JpcHRpb249J0VtcGxveWVlcyBMaXN0aW5nICdcbi8vICAgICAgIC8+XG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8aDE+RmlsZSBEZXRhaWxzPC9oMT5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTInPlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJveH0+XG4vLyAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5oZWFkZXJ9PmRyYWcgeW91ciBmaWxlIGhlcmUgITwvZGl2PlxuLy8gICAgICAgICAgICAgICA8RHJhZ0ZpbGUgb25GaWxlQ2hhbmdlPXsoZmlsZSkgPT4gb25GaWxlQ2hhbmdlKGZpbGUpfSAvPlxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgPC9Db250YWluZXJEZWZhdWx0PlxuLy8gICApO1xuLy8gfTtcbi8vIGV4cG9ydCBkZWZhdWx0IEZpbGVNYW5hZ2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==