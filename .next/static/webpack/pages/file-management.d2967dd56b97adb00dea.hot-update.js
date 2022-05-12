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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");




var _jsxFileName = "E:\\FYP\\admin-dashboard\\martfury-admin-react\\pages\\file-management\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();








var index = function index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      fileUpload = _useState[0],
      setFileUpload = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      fileList = _useState2[0],
      setFileList = _useState2[1];

  var fileListRef = Object(firebase_storage__WEBPACK_IMPORTED_MODULE_6__["ref"])(_firebaseConfig__WEBPACK_IMPORTED_MODULE_5__["storage"], "files/");

  var uploadFile = function uploadFile() {
    if (fileUpload == null) return;
    var fileRef = Object(firebase_storage__WEBPACK_IMPORTED_MODULE_6__["ref"])(_firebaseConfig__WEBPACK_IMPORTED_MODULE_5__["storage"], "files/".concat(fileUpload.name + Object(uuid__WEBPACK_IMPORTED_MODULE_7__["v4"])()));
    Object(firebase_storage__WEBPACK_IMPORTED_MODULE_6__["uploadBytes"])(fileRef, fileUpload).then(function () {
      alert("File Uploaded");
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Object(firebase_storage__WEBPACK_IMPORTED_MODULE_6__["listAll"])(fileListRef).then(function (res) {
      //   console.log(res);
      res.items.forEach(function (item) {
        Object(firebase_storage__WEBPACK_IMPORTED_MODULE_6__["getDownloadURL"])(item).then(function (url) {
          setFileList(function (prev) {
            return [].concat(Object(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prev), [url]);
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
        lineNumber: 32,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "file",
          onChange: function onChange(e) {
            setFileUpload(e.target.files[0]);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: uploadFile,
          children: "Upload File"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: fileList.map(function (name) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [" ", name, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 20
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(index, "kOA6nU3au9o9uO8X+N2pTCp/NeA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlsZS1tYW5hZ2VtZW50L2luZGV4LmpzeCJdLCJuYW1lcyI6WyJpbmRleCIsInVzZVN0YXRlIiwiZmlsZVVwbG9hZCIsInNldEZpbGVVcGxvYWQiLCJmaWxlTGlzdCIsInNldEZpbGVMaXN0IiwiZmlsZUxpc3RSZWYiLCJyZWYiLCJzdG9yYWdlIiwidXBsb2FkRmlsZSIsImZpbGVSZWYiLCJuYW1lIiwidjQiLCJ1cGxvYWRCeXRlcyIsInRoZW4iLCJhbGVydCIsInVzZUVmZmVjdCIsImxpc3RBbGwiLCJyZXMiLCJpdGVtcyIsImZvckVhY2giLCJpdGVtIiwiZ2V0RG93bmxvYWRVUkwiLCJ1cmwiLCJwcmV2IiwiZSIsInRhcmdldCIsImZpbGVzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ2tCQyxzREFBUSxDQUFDLElBQUQsQ0FEMUI7QUFBQSxNQUNYQyxVQURXO0FBQUEsTUFDQ0MsYUFERDs7QUFBQSxtQkFFY0Ysc0RBQVEsQ0FBQyxFQUFELENBRnRCO0FBQUEsTUFFWEcsUUFGVztBQUFBLE1BRURDLFdBRkM7O0FBR2xCLE1BQU1DLFdBQVcsR0FBR0MsNERBQUcsQ0FBQ0MsdURBQUQsRUFBVSxRQUFWLENBQXZCOztBQUNBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsUUFBSVAsVUFBVSxJQUFJLElBQWxCLEVBQXdCO0FBQ3hCLFFBQU1RLE9BQU8sR0FBR0gsNERBQUcsQ0FBQ0MsdURBQUQsa0JBQW1CTixVQUFVLENBQUNTLElBQVgsR0FBa0JDLCtDQUFFLEVBQXZDLEVBQW5CO0FBQ0FDLHdFQUFXLENBQUNILE9BQUQsRUFBVVIsVUFBVixDQUFYLENBQWlDWSxJQUFqQyxDQUFzQyxZQUFNO0FBQzFDQyxXQUFLLENBQUMsZUFBRCxDQUFMO0FBQ0QsS0FGRDtBQUdELEdBTkQ7O0FBUUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxvRUFBTyxDQUFDWCxXQUFELENBQVAsQ0FBcUJRLElBQXJCLENBQTBCLFVBQUNJLEdBQUQsRUFBUztBQUNqQztBQUNBQSxTQUFHLENBQUNDLEtBQUosQ0FBVUMsT0FBVixDQUFrQixVQUFDQyxJQUFELEVBQVU7QUFDMUJDLCtFQUFjLENBQUNELElBQUQsQ0FBZCxDQUFxQlAsSUFBckIsQ0FBMEIsVUFBQ1MsR0FBRCxFQUFTO0FBQ2pDbEIscUJBQVcsQ0FBQyxVQUFDbUIsSUFBRDtBQUFBLG1NQUFjQSxJQUFkLElBQW9CRCxHQUFwQjtBQUFBLFdBQUQsQ0FBWDtBQUNELFNBRkQ7QUFHRCxPQUpEO0FBS0QsS0FQRDtBQVFELEdBVFEsRUFTTixFQVRNLENBQVQ7QUFVQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLDRFQUFEO0FBQWtCLFdBQUssRUFBQyxhQUF4QjtBQUFBLDhCQUNFLHFFQUFDLGtGQUFEO0FBQWlCLGFBQUssRUFBQyxpQkFBdkI7QUFBeUMsbUJBQVcsRUFBQztBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFHRTtBQUFBLGdDQUNFO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxrQkFBUSxFQUFFLGtCQUFDRSxDQUFELEVBQU87QUFDZnRCLHlCQUFhLENBQUNzQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlLENBQWYsQ0FBRCxDQUFiO0FBQ0Q7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBT0U7QUFBUSxpQkFBTyxFQUFFbEIsVUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFZRTtBQUFBLGtCQUNHTCxRQUFRLENBQUN3QixHQUFULENBQWEsVUFBQ2pCLElBQUQsRUFBVTtBQUN0Qiw4QkFBTztBQUFBLDRCQUFLQSxJQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNELFNBRkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFzQkQsQ0E1Q0Q7O0dBQU1YLEs7O0FBOENTQSxvRUFBZixFLENBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZpbGUtbWFuYWdlbWVudC5kMjk2N2RkNTZiOTdhZGIwMGRlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb250YWluZXJEZWZhdWx0IGZyb20gXCJ+L2NvbXBvbmVudHMvbGF5b3V0cy9Db250YWluZXJEZWZhdWx0XCI7XG5pbXBvcnQgSGVhZGVyRGFzaGJvYXJkIGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlcnMvSGVhZGVyRGFzaGJvYXJkXCI7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSBcIn4vZmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCB7IHJlZiwgdXBsb2FkQnl0ZXMsIGxpc3RBbGwsIGdldERvd25sb2FkVVJMIH0gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIjtcbmltcG9ydCB7IHY0IH0gZnJvbSBcInV1aWRcIjtcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbZmlsZVVwbG9hZCwgc2V0RmlsZVVwbG9hZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2ZpbGVMaXN0LCBzZXRGaWxlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IGZpbGVMaXN0UmVmID0gcmVmKHN0b3JhZ2UsIFwiZmlsZXMvXCIpO1xuICBjb25zdCB1cGxvYWRGaWxlID0gKCkgPT4ge1xuICAgIGlmIChmaWxlVXBsb2FkID09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCBmaWxlUmVmID0gcmVmKHN0b3JhZ2UsIGBmaWxlcy8ke2ZpbGVVcGxvYWQubmFtZSArIHY0KCl9YCk7XG4gICAgdXBsb2FkQnl0ZXMoZmlsZVJlZiwgZmlsZVVwbG9hZCkudGhlbigoKSA9PiB7XG4gICAgICBhbGVydChcIkZpbGUgVXBsb2FkZWRcIik7XG4gICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsaXN0QWxsKGZpbGVMaXN0UmVmKS50aGVuKChyZXMpID0+IHtcbiAgICAgIC8vICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIHJlcy5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGdldERvd25sb2FkVVJMKGl0ZW0pLnRoZW4oKHVybCkgPT4ge1xuICAgICAgICAgIHNldEZpbGVMaXN0KChwcmV2KSA9PiBbLi4ucHJldiwgdXJsXSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvbnRhaW5lckRlZmF1bHQgdGl0bGU9J0ZpbGUgTWFuYWdlJz5cbiAgICAgICAgPEhlYWRlckRhc2hib2FyZCB0aXRsZT0nRmlsZSBNYW5hZ2VtZW50JyBkZXNjcmlwdGlvbj0nRmlsZSBMaXN0aW5nICcgLz5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0nZmlsZSdcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRGaWxlVXBsb2FkKGUudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3VwbG9hZEZpbGV9PlVwbG9hZCBGaWxlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtmaWxlTGlzdC5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8cD4ge25hbWV9IDwvcD47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXJEZWZhdWx0PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG5cbi8vID8gb25seSBzdG9yZSBmYWtlUGF0aCBvZiBmaWxlXG5cbi8vIGltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgQ29udGFpbmVyRGVmYXVsdCBmcm9tIFwifi9jb21wb25lbnRzL2xheW91dHMvQ29udGFpbmVyRGVmYXVsdFwiO1xuLy8gaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuLy8gaW1wb3J0IEhlYWRlckRhc2hib2FyZCBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9oZWFkZXJzL0hlYWRlckRhc2hib2FyZFwiO1xuLy8gaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLm1vZHVsZS5jc3NcIjtcbi8vIC8vIGltcG9ydCB7XG4vLyAvLyAgIGNvbGxlY3Rpb24sXG4vLyAvLyAgIGFkZERvYyxcbi8vIC8vICAgZ2V0RG9jcyxcbi8vIC8vICAgZGVsZXRlRG9jLFxuLy8gLy8gICBkb2MsXG4vLyAvLyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbi8vIC8vIGltcG9ydCB7IGRhdGFiYXNlIH0gZnJvbSBcIn4vZmlyZWJhc2VDb25maWdcIjtcbi8vIC8vIGNvbnN0IGVtcGxveWVlSW5zdGFuY2UgPSBjb2xsZWN0aW9uKGRhdGFiYXNlLCBcImVtcGxveWVlXCIpO1xuXG4vLyBjb25zdCBEaXNwbGF5VXNlcnMgPSAoeyBJRCB9KSA9PiB7XG4vLyAgIGNvbnN0IFt1c2Vycywgc2V0VXNlcl0gPSB1c2VTdGF0ZShbXSk7XG4vLyAgIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgbG9hZFVzZXJzKCk7XG4vLyAgIH0sIFtdKTtcblxuLy8gICBjb25zdCBsb2FkVXNlcnMgPSBhc3luYyAoKSA9PiB7XG4vLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3VzZXJzXCIpO1xuLy8gICAgIC8vIGxldCBlbXBsb3llZXMgPSBbXTtcbi8vICAgICAvLyBnZXREb2NzKGVtcGxveWVlSW5zdGFuY2UpLnRoZW4oKGRhdGEpID0+IHtcbi8vICAgICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5kb2NzLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgLy8gICAgIGNvbnN0IGl0ZW0gPSBkYXRhLmRvY3NbaV07XG4vLyAgICAgLy8gICAgIGVtcGxveWVlcy5wdXNoKHsgLi4uaXRlbS5kYXRhKCksIGlkOiBpdGVtLmlkIH0pO1xuLy8gICAgIC8vICAgICBjb25zb2xlLmxvZyhpdGVtLmRhdGEoKSk7XG4vLyAgICAgLy8gICB9XG4vLyAgICAgLy8gICBzZXRVc2VyKGVtcGxveWVlcyk7XG4vLyAgICAgLy8gICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgICAvLyB9KTtcbi8vICAgICBzZXRVc2VyKHJlc3VsdC5kYXRhKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuLy8gICB9O1xuXG4vLyAgIC8vICAgY29uc3QgZGVsZXRlVXNlciA9IGFzeW5jIChpZCkgPT4ge1xuLy8gICAvLyAgICAgLy8gYXdhaXQgQXhpb3MuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvdXNlcnMvJHtpZH1gKTtcbi8vICAgLy8gICAgIGNvbnN0IGRlbGV0ZVVzZXIgPSBkb2MoZGF0YWJhc2UsIFwiZW1wbG95ZWVcIiwgaWQpO1xuLy8gICAvLyAgICAgYXdhaXQgZGVsZXRlRG9jKGRlbGV0ZVVzZXIpO1xuLy8gICAvLyAgICAgbG9hZFVzZXJzKCk7XG4vLyAgIC8vICAgfTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxDb250YWluZXJEZWZhdWx0IHRpdGxlPSdFbXBsb3llZXMgTWFuYWdlJz5cbi8vICAgICAgIDxIZWFkZXJEYXNoYm9hcmRcbi8vICAgICAgICAgdGl0bGU9J0VtcGxveWVlcyBNYW5hZ2VtZW50J1xuLy8gICAgICAgICBkZXNjcmlwdGlvbj0nRW1wbG95ZWVzIExpc3RpbmcgJ1xuLy8gICAgICAgLz5cbi8vICAgICAgIDxkaXY+XG4vLyAgICAgICAgIDxoMT5FbXBsb3llZXMgRGV0YWlsczwvaDE+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNic+XG4vLyAgICAgICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5pbnB1dH1cbi8vICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbi8vICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1NlYXJjaCBFbXBsb3llZS4uLidcbi8vICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgIHNldFNlYXJjaFRlcm0oZXZlbnQudGFyZ2V0LnZhbHVlKTtcbi8vICAgICAgICAgICAgICAgfX1cbi8vICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02Jz5cbi8vICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9maWxlLW1hbmFnZW1lbnQvQWRkRmlsZSc+XG4vLyAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuYnRufT5BZGQgRW1wbG95ZWU8L2J1dHRvbj4gKi99XG4vLyAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9e3N0eWxlLmNzc2J1dHRvbnN9PlxuLy8gICAgICAgICAgICAgICAgIDxzdmdcbi8vICAgICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zydcbi8vICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbi8vICAgICAgICAgICAgICAgICAgIHdpZHRoPScyNCdcbi8vICAgICAgICAgICAgICAgICAgIGhlaWdodD0nMjQnXG4vLyAgICAgICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD0nbm9uZScgZD0nTTAgMGgyNHYyNEgweic+PC9wYXRoPlxuLy8gICAgICAgICAgICAgICAgICAgPHBhdGhcbi8vICAgICAgICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xuLy8gICAgICAgICAgICAgICAgICAgICBkPSdNMTEgMTFWNWgydjZoNnYyaC02djZoLTJ2LTZINXYtMnonXG4vLyAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuLy8gICAgICAgICAgICAgICAgIDwvc3ZnPlxuLy8gICAgICAgICAgICAgICAgIDxzcGFuPkFkZCBFbXBsb3llZTwvc3Bhbj5cbi8vICAgICAgICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgICAgICA8L0xpbms+XG4vLyAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDwvZGl2PlxuXG4vLyAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlIGJvcmRlciBzaGFkb3cgbXQtNCc+XG4vLyAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT0ndGhlYWQtZGFyayAnPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICA8dGggc2NvcGU9J2NvbCc+IzwvdGg+XG4vLyAgICAgICAgICAgICAgIDx0aCBzY29wZT0nY29sJz5OYW1lPC90aD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgPC90aGVhZD5cbi8vICAgICAgICAgICA8dGJvZHk+XG4vLyAgICAgICAgICAgICB7dXNlcnNcbi8vICAgICAgICAgICAgICAgLmZpbHRlcigodXNlcikgPT4ge1xuLy8gICAgICAgICAgICAgICAgIGlmIChzZWFyY2hUZXJtID09IFwiXCIpIHtcbi8vICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4vLyAgICAgICAgICAgICAgICAgICB1c2VyLmNuaWNOb1xuLy8gICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuLy8gICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSB8fFxuLy8gICAgICAgICAgICAgICAgICAgdXNlci5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSB8fFxuLy8gICAgICAgICAgICAgICAgICAgdXNlci5waG9uZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkgfHxcbi8vICAgICAgICAgICAgICAgICAgIHVzZXIuZW1haWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXG4vLyAgICAgICAgICAgICAgICAgKSB7XG4vLyAgICAgICAgICAgICAgICAgICByZXR1cm4gdXNlcjtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAgIC5tYXAoKHVzZXIsIGluZGV4KSA9PiAoXG4vLyAgICAgICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPSdyb3cnPiB7aW5kZXggKyAxfSA8L3RoPlxuLy8gICAgICAgICAgICAgICAgICAgPHRkPiB7dXNlci5uYW1lfSA8L3RkPlxuXG4vLyAgICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4vLyAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9lbXBsb3llZXMtbWFuYWdlbWVudC91c2Vycy92aWV3VXNlci9gICsgdXNlci5pZH1cbi8vICAgICAgICAgICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnkgbXItMic+VmlldzwvYnV0dG9uPlxuLy8gICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4vLyAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGlua1xuLy8gICAgICAgICAgICAgICAgICAgICBocmVmPScvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvRWRpdFVzZXIvW2lkXSdcbi8vICAgICAgICAgICAgICAgICAgICAgYXM9e2AvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvRWRpdFVzZXIvJHt1c2VyPy5pZH1gfVxuLy8gICAgICAgICAgICAgICAgICAgPiAqL31cbi8vICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9lbXBsb3llZXMtbWFuYWdlbWVudC91c2Vycy9gICsgdXNlci5pZH0+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tb3V0bGluZS1wcmltYXJ5IG1yLTInPlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxuLy8gICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4vLyAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPScjJz4gKi99XG4vLyAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbi8vICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tZGFuZ2VyIG1yLTInXG4vLyAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlVXNlcih1c2VyLmlkKX1cbi8vICAgICAgICAgICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuLy8gICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgICAgICAgICAgICAgey8qIDwvTGluaz4gKi99XG4vLyAgICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICAgICkpfVxuLy8gICAgICAgICAgIDwvdGJvZHk+XG4vLyAgICAgICAgIDwvdGFibGU+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICA8L0NvbnRhaW5lckRlZmF1bHQ+XG4vLyAgICk7XG4vLyB9O1xuLy8gZXhwb3J0IGRlZmF1bHQgRGlzcGxheVVzZXJzO1xuXG4vLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IENvbnRhaW5lckRlZmF1bHQgZnJvbSBcIn4vY29tcG9uZW50cy9sYXlvdXRzL0NvbnRhaW5lckRlZmF1bHRcIjtcbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbi8vIGltcG9ydCBIZWFkZXJEYXNoYm9hcmQgZnJvbSBcIn4vY29tcG9uZW50cy9zaGFyZWQvaGVhZGVycy9IZWFkZXJEYXNoYm9hcmRcIjtcbi8vIGltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5tb2R1bGUuY3NzXCI7XG4vLyBpbXBvcnQgRHJhZ0ZpbGUgZnJvbSBcIi4vY29tcG9uZW50cy9kcm9wLWZpbGUvRHJhZ0ZpbGVcIjtcbi8vIGNvbnN0IEZpbGVNYW5hZ2VyID0gKCkgPT4ge1xuLy8gICBjb25zdCBvbkZpbGVDaGFuZ2UgPSAoZmlsZSkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKGZpbGUpO1xuLy8gICB9O1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxDb250YWluZXJEZWZhdWx0IHRpdGxlPSdFbXBsb3llZXMgTWFuYWdlJz5cbi8vICAgICAgIDxIZWFkZXJEYXNoYm9hcmRcbi8vICAgICAgICAgdGl0bGU9J0VtcGxveWVlcyBNYW5hZ2VtZW50J1xuLy8gICAgICAgICBkZXNjcmlwdGlvbj0nRW1wbG95ZWVzIExpc3RpbmcgJ1xuLy8gICAgICAgLz5cbi8vICAgICAgIDxkaXY+XG4vLyAgICAgICAgIDxoMT5GaWxlIERldGFpbHM8L2gxPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4vLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xMic+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYm94fT5cbi8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhlYWRlcn0+ZHJhZyB5b3VyIGZpbGUgaGVyZSAhPC9kaXY+XG4vLyAgICAgICAgICAgICAgIDxEcmFnRmlsZSBvbkZpbGVDaGFuZ2U9eyhmaWxlKSA9PiBvbkZpbGVDaGFuZ2UoZmlsZSl9IC8+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICA8L0NvbnRhaW5lckRlZmF1bHQ+XG4vLyAgICk7XG4vLyB9O1xuLy8gZXhwb3J0IGRlZmF1bHQgRmlsZU1hbmFnZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9