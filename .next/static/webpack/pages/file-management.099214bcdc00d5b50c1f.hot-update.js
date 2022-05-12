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
        children: fileList.map(function (url) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [" ", url, " "]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlsZS1tYW5hZ2VtZW50L2luZGV4LmpzeCJdLCJuYW1lcyI6WyJpbmRleCIsInVzZVN0YXRlIiwiZmlsZVVwbG9hZCIsInNldEZpbGVVcGxvYWQiLCJmaWxlTGlzdCIsInNldEZpbGVMaXN0IiwiZmlsZUxpc3RSZWYiLCJyZWYiLCJzdG9yYWdlIiwidXBsb2FkRmlsZSIsImZpbGVSZWYiLCJuYW1lIiwidjQiLCJ1cGxvYWRCeXRlcyIsInRoZW4iLCJhbGVydCIsInVzZUVmZmVjdCIsImxpc3RBbGwiLCJyZXMiLCJpdGVtcyIsImZvckVhY2giLCJpdGVtIiwiZ2V0RG93bmxvYWRVUkwiLCJ1cmwiLCJwcmV2IiwiZSIsInRhcmdldCIsImZpbGVzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ2tCQyxzREFBUSxDQUFDLElBQUQsQ0FEMUI7QUFBQSxNQUNYQyxVQURXO0FBQUEsTUFDQ0MsYUFERDs7QUFBQSxtQkFFY0Ysc0RBQVEsQ0FBQyxFQUFELENBRnRCO0FBQUEsTUFFWEcsUUFGVztBQUFBLE1BRURDLFdBRkM7O0FBR2xCLE1BQU1DLFdBQVcsR0FBR0MsNERBQUcsQ0FBQ0MsdURBQUQsRUFBVSxRQUFWLENBQXZCOztBQUNBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsUUFBSVAsVUFBVSxJQUFJLElBQWxCLEVBQXdCO0FBQ3hCLFFBQU1RLE9BQU8sR0FBR0gsNERBQUcsQ0FBQ0MsdURBQUQsa0JBQW1CTixVQUFVLENBQUNTLElBQVgsR0FBa0JDLCtDQUFFLEVBQXZDLEVBQW5CO0FBQ0FDLHdFQUFXLENBQUNILE9BQUQsRUFBVVIsVUFBVixDQUFYLENBQWlDWSxJQUFqQyxDQUFzQyxZQUFNO0FBQzFDQyxXQUFLLENBQUMsZUFBRCxDQUFMO0FBQ0QsS0FGRDtBQUdELEdBTkQ7O0FBUUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxvRUFBTyxDQUFDWCxXQUFELENBQVAsQ0FBcUJRLElBQXJCLENBQTBCLFVBQUNJLEdBQUQsRUFBUztBQUNqQztBQUNBQSxTQUFHLENBQUNDLEtBQUosQ0FBVUMsT0FBVixDQUFrQixVQUFDQyxJQUFELEVBQVU7QUFDMUJDLCtFQUFjLENBQUNELElBQUQsQ0FBZCxDQUFxQlAsSUFBckIsQ0FBMEIsVUFBQ1MsR0FBRCxFQUFTO0FBQ2pDbEIscUJBQVcsQ0FBQyxVQUFDbUIsSUFBRDtBQUFBLG1NQUFjQSxJQUFkLElBQW9CRCxHQUFwQjtBQUFBLFdBQUQsQ0FBWDtBQUNELFNBRkQ7QUFHRCxPQUpEO0FBS0QsS0FQRDtBQVFELEdBVFEsRUFTTixFQVRNLENBQVQ7QUFVQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLDRFQUFEO0FBQWtCLFdBQUssRUFBQyxhQUF4QjtBQUFBLDhCQUNFLHFFQUFDLGtGQUFEO0FBQWlCLGFBQUssRUFBQyxpQkFBdkI7QUFBeUMsbUJBQVcsRUFBQztBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFHRTtBQUFBLGdDQUNFO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxrQkFBUSxFQUFFLGtCQUFDRSxDQUFELEVBQU87QUFDZnRCLHlCQUFhLENBQUNzQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlLENBQWYsQ0FBRCxDQUFiO0FBQ0Q7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBT0U7QUFBUSxpQkFBTyxFQUFFbEIsVUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFZRTtBQUFBLGtCQUNHTCxRQUFRLENBQUN3QixHQUFULENBQWEsVUFBQ0wsR0FBRCxFQUFTO0FBQ3JCLDhCQUFPO0FBQUEsNEJBQUtBLEdBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBQ0QsU0FGQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXNCRCxDQTVDRDs7R0FBTXZCLEs7O0FBOENTQSxvRUFBZixFLENBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZpbGUtbWFuYWdlbWVudC4wOTkyMTRiY2RjMDBkNWI1MGMxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb250YWluZXJEZWZhdWx0IGZyb20gXCJ+L2NvbXBvbmVudHMvbGF5b3V0cy9Db250YWluZXJEZWZhdWx0XCI7XG5pbXBvcnQgSGVhZGVyRGFzaGJvYXJkIGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlcnMvSGVhZGVyRGFzaGJvYXJkXCI7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSBcIn4vZmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCB7IHJlZiwgdXBsb2FkQnl0ZXMsIGxpc3RBbGwsIGdldERvd25sb2FkVVJMIH0gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIjtcbmltcG9ydCB7IHY0IH0gZnJvbSBcInV1aWRcIjtcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbZmlsZVVwbG9hZCwgc2V0RmlsZVVwbG9hZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2ZpbGVMaXN0LCBzZXRGaWxlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IGZpbGVMaXN0UmVmID0gcmVmKHN0b3JhZ2UsIFwiZmlsZXMvXCIpO1xuICBjb25zdCB1cGxvYWRGaWxlID0gKCkgPT4ge1xuICAgIGlmIChmaWxlVXBsb2FkID09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCBmaWxlUmVmID0gcmVmKHN0b3JhZ2UsIGBmaWxlcy8ke2ZpbGVVcGxvYWQubmFtZSArIHY0KCl9YCk7XG4gICAgdXBsb2FkQnl0ZXMoZmlsZVJlZiwgZmlsZVVwbG9hZCkudGhlbigoKSA9PiB7XG4gICAgICBhbGVydChcIkZpbGUgVXBsb2FkZWRcIik7XG4gICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsaXN0QWxsKGZpbGVMaXN0UmVmKS50aGVuKChyZXMpID0+IHtcbiAgICAgIC8vICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIHJlcy5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGdldERvd25sb2FkVVJMKGl0ZW0pLnRoZW4oKHVybCkgPT4ge1xuICAgICAgICAgIHNldEZpbGVMaXN0KChwcmV2KSA9PiBbLi4ucHJldiwgdXJsXSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvbnRhaW5lckRlZmF1bHQgdGl0bGU9J0ZpbGUgTWFuYWdlJz5cbiAgICAgICAgPEhlYWRlckRhc2hib2FyZCB0aXRsZT0nRmlsZSBNYW5hZ2VtZW50JyBkZXNjcmlwdGlvbj0nRmlsZSBMaXN0aW5nICcgLz5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0nZmlsZSdcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRGaWxlVXBsb2FkKGUudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3VwbG9hZEZpbGV9PlVwbG9hZCBGaWxlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtmaWxlTGlzdC5tYXAoKHVybCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxwPiB7dXJsfSA8L3A+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyRGVmYXVsdD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuXG4vLyA/IG9ubHkgc3RvcmUgZmFrZVBhdGggb2YgZmlsZVxuXG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IENvbnRhaW5lckRlZmF1bHQgZnJvbSBcIn4vY29tcG9uZW50cy9sYXlvdXRzL0NvbnRhaW5lckRlZmF1bHRcIjtcbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbi8vIGltcG9ydCBIZWFkZXJEYXNoYm9hcmQgZnJvbSBcIn4vY29tcG9uZW50cy9zaGFyZWQvaGVhZGVycy9IZWFkZXJEYXNoYm9hcmRcIjtcbi8vIGltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcbi8vIGltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5tb2R1bGUuY3NzXCI7XG4vLyAvLyBpbXBvcnQge1xuLy8gLy8gICBjb2xsZWN0aW9uLFxuLy8gLy8gICBhZGREb2MsXG4vLyAvLyAgIGdldERvY3MsXG4vLyAvLyAgIGRlbGV0ZURvYyxcbi8vIC8vICAgZG9jLFxuLy8gLy8gfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG4vLyAvLyBpbXBvcnQgeyBkYXRhYmFzZSB9IGZyb20gXCJ+L2ZpcmViYXNlQ29uZmlnXCI7XG4vLyAvLyBjb25zdCBlbXBsb3llZUluc3RhbmNlID0gY29sbGVjdGlvbihkYXRhYmFzZSwgXCJlbXBsb3llZVwiKTtcblxuLy8gY29uc3QgRGlzcGxheVVzZXJzID0gKHsgSUQgfSkgPT4ge1xuLy8gICBjb25zdCBbdXNlcnMsIHNldFVzZXJdID0gdXNlU3RhdGUoW10pO1xuLy8gICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgIGxvYWRVc2VycygpO1xuLy8gICB9LCBbXSk7XG5cbi8vICAgY29uc3QgbG9hZFVzZXJzID0gYXN5bmMgKCkgPT4ge1xuLy8gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91c2Vyc1wiKTtcbi8vICAgICAvLyBsZXQgZW1wbG95ZWVzID0gW107XG4vLyAgICAgLy8gZ2V0RG9jcyhlbXBsb3llZUluc3RhbmNlKS50aGVuKChkYXRhKSA9PiB7XG4vLyAgICAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuZG9jcy5sZW5ndGg7IGkrKykge1xuLy8gICAgIC8vICAgICBjb25zdCBpdGVtID0gZGF0YS5kb2NzW2ldO1xuLy8gICAgIC8vICAgICBlbXBsb3llZXMucHVzaCh7IC4uLml0ZW0uZGF0YSgpLCBpZDogaXRlbS5pZCB9KTtcbi8vICAgICAvLyAgICAgY29uc29sZS5sb2coaXRlbS5kYXRhKCkpO1xuLy8gICAgIC8vICAgfVxuLy8gICAgIC8vICAgc2V0VXNlcihlbXBsb3llZXMpO1xuLy8gICAgIC8vICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4vLyAgICAgLy8gfSk7XG4vLyAgICAgc2V0VXNlcihyZXN1bHQuZGF0YSk7XG4vLyAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcbi8vICAgfTtcblxuLy8gICAvLyAgIGNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAoaWQpID0+IHtcbi8vICAgLy8gICAgIC8vIGF3YWl0IEF4aW9zLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDozMDAxL3VzZXJzLyR7aWR9YCk7XG4vLyAgIC8vICAgICBjb25zdCBkZWxldGVVc2VyID0gZG9jKGRhdGFiYXNlLCBcImVtcGxveWVlXCIsIGlkKTtcbi8vICAgLy8gICAgIGF3YWl0IGRlbGV0ZURvYyhkZWxldGVVc2VyKTtcbi8vICAgLy8gICAgIGxvYWRVc2VycygpO1xuLy8gICAvLyAgIH07XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8Q29udGFpbmVyRGVmYXVsdCB0aXRsZT0nRW1wbG95ZWVzIE1hbmFnZSc+XG4vLyAgICAgICA8SGVhZGVyRGFzaGJvYXJkXG4vLyAgICAgICAgIHRpdGxlPSdFbXBsb3llZXMgTWFuYWdlbWVudCdcbi8vICAgICAgICAgZGVzY3JpcHRpb249J0VtcGxveWVlcyBMaXN0aW5nICdcbi8vICAgICAgIC8+XG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8aDE+RW1wbG95ZWVzIERldGFpbHM8L2gxPlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbi8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTYnPlxuLy8gICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuaW5wdXR9XG4vLyAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4vLyAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2ggRW1wbG95ZWUuLi4nXG4vLyAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbi8vICAgICAgICAgICAgICAgICBzZXRTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4vLyAgICAgICAgICAgICAgIH19XG4vLyAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNic+XG4vLyAgICAgICAgICAgICA8TGluayBocmVmPScvZmlsZS1tYW5hZ2VtZW50L0FkZEZpbGUnPlxuLy8gICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLmJ0bn0+QWRkIEVtcGxveWVlPC9idXR0b24+ICovfVxuLy8gICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPXtzdHlsZS5jc3NidXR0b25zfT5cbi8vICAgICAgICAgICAgICAgICA8c3ZnXG4vLyAgICAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4vLyAgICAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4vLyAgICAgICAgICAgICAgICAgICB3aWR0aD0nMjQnXG4vLyAgICAgICAgICAgICAgICAgICBoZWlnaHQ9JzI0J1xuLy8gICAgICAgICAgICAgICAgID5cbi8vICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9J25vbmUnIGQ9J00wIDBoMjR2MjRIMHonPjwvcGF0aD5cbi8vICAgICAgICAgICAgICAgICAgIDxwYXRoXG4vLyAgICAgICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcbi8vICAgICAgICAgICAgICAgICAgICAgZD0nTTExIDExVjVoMnY2aDZ2MmgtNnY2aC0ydi02SDV2LTJ6J1xuLy8gICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cbi8vICAgICAgICAgICAgICAgICA8L3N2Zz5cbi8vICAgICAgICAgICAgICAgICA8c3Bhbj5BZGQgRW1wbG95ZWU8L3NwYW4+XG4vLyAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgICAgICAgPC9MaW5rPlxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8L2Rpdj5cblxuLy8gICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSBib3JkZXIgc2hhZG93IG10LTQnPlxuLy8gICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9J3RoZWFkLWRhcmsgJz5cbi8vICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgPHRoIHNjb3BlPSdjb2wnPiM8L3RoPlxuLy8gICAgICAgICAgICAgICA8dGggc2NvcGU9J2NvbCc+TmFtZTwvdGg+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgIDwvdGhlYWQ+XG4vLyAgICAgICAgICAgPHRib2R5PlxuLy8gICAgICAgICAgICAge3VzZXJzXG4vLyAgICAgICAgICAgICAgIC5maWx0ZXIoKHVzZXIpID0+IHtcbi8vICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoVGVybSA9PSBcIlwiKSB7XG4vLyAgICAgICAgICAgICAgICAgICByZXR1cm4gdXNlcjtcbi8vICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuLy8gICAgICAgICAgICAgICAgICAgdXNlci5jbmljTm9cbi8vICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbi8vICAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkgfHxcbi8vICAgICAgICAgICAgICAgICAgIHVzZXIubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkgfHxcbi8vICAgICAgICAgICAgICAgICAgIHVzZXIucGhvbmUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpIHx8XG4vLyAgICAgICAgICAgICAgICAgICB1c2VyLmVtYWlsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKVxuLy8gICAgICAgICAgICAgICAgICkge1xuLy8gICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgICAgICAubWFwKCh1c2VyLCBpbmRleCkgPT4gKFxuLy8gICAgICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT0ncm93Jz4ge2luZGV4ICsgMX0gPC90aD5cbi8vICAgICAgICAgICAgICAgICAgIDx0ZD4ge3VzZXIubmFtZX0gPC90ZD5cblxuLy8gICAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8TGlua1xuLy8gICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvdmlld1VzZXIvYCArIHVzZXIuaWR9XG4vLyAgICAgICAgICAgICAgICAgICAgID5cbi8vICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5IG1yLTInPlZpZXc8L2J1dHRvbj5cbi8vICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuLy8gICAgICAgICAgICAgICAgICAgICB7LyogPExpbmtcbi8vICAgICAgICAgICAgICAgICAgICAgaHJlZj0nL2VtcGxveWVlcy1tYW5hZ2VtZW50L3VzZXJzL0VkaXRVc2VyL1tpZF0nXG4vLyAgICAgICAgICAgICAgICAgICAgIGFzPXtgL2VtcGxveWVlcy1tYW5hZ2VtZW50L3VzZXJzL0VkaXRVc2VyLyR7dXNlcj8uaWR9YH1cbi8vICAgICAgICAgICAgICAgICAgID4gKi99XG4vLyAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvYCArIHVzZXIuaWR9PlxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBtci0yJz5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRcbi8vICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuLy8gICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj0nIyc+ICovfVxuLy8gICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4vLyAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLWRhbmdlciBtci0yJ1xuLy8gICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVVzZXIodXNlci5pZCl9XG4vLyAgICAgICAgICAgICAgICAgICAgID5cbi8vICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcbi8vICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgICAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxuLy8gICAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgICA8L3Rib2R5PlxuLy8gICAgICAgICA8L3RhYmxlPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgPC9Db250YWluZXJEZWZhdWx0PlxuLy8gICApO1xuLy8gfTtcbi8vIGV4cG9ydCBkZWZhdWx0IERpc3BsYXlVc2VycztcblxuLy8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBDb250YWluZXJEZWZhdWx0IGZyb20gXCJ+L2NvbXBvbmVudHMvbGF5b3V0cy9Db250YWluZXJEZWZhdWx0XCI7XG4vLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG4vLyBpbXBvcnQgSGVhZGVyRGFzaGJvYXJkIGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlcnMvSGVhZGVyRGFzaGJvYXJkXCI7XG4vLyBpbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUubW9kdWxlLmNzc1wiO1xuLy8gaW1wb3J0IERyYWdGaWxlIGZyb20gXCIuL2NvbXBvbmVudHMvZHJvcC1maWxlL0RyYWdGaWxlXCI7XG4vLyBjb25zdCBGaWxlTWFuYWdlciA9ICgpID0+IHtcbi8vICAgY29uc3Qgb25GaWxlQ2hhbmdlID0gKGZpbGUpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhmaWxlKTtcbi8vICAgfTtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8Q29udGFpbmVyRGVmYXVsdCB0aXRsZT0nRW1wbG95ZWVzIE1hbmFnZSc+XG4vLyAgICAgICA8SGVhZGVyRGFzaGJvYXJkXG4vLyAgICAgICAgIHRpdGxlPSdFbXBsb3llZXMgTWFuYWdlbWVudCdcbi8vICAgICAgICAgZGVzY3JpcHRpb249J0VtcGxveWVlcyBMaXN0aW5nICdcbi8vICAgICAgIC8+XG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8aDE+RmlsZSBEZXRhaWxzPC9oMT5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTInPlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJveH0+XG4vLyAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5oZWFkZXJ9PmRyYWcgeW91ciBmaWxlIGhlcmUgITwvZGl2PlxuLy8gICAgICAgICAgICAgICA8RHJhZ0ZpbGUgb25GaWxlQ2hhbmdlPXsoZmlsZSkgPT4gb25GaWxlQ2hhbmdlKGZpbGUpfSAvPlxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgPC9Db250YWluZXJEZWZhdWx0PlxuLy8gICApO1xuLy8gfTtcbi8vIGV4cG9ydCBkZWZhdWx0IEZpbGVNYW5hZ2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==