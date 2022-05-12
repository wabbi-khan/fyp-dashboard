import React, { useState, useEffect } from "react";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
import { storage } from "~/firebaseConfig";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
const index = () => {
  const [fileUpload, setFileUpload] = useState(null);
  const [fileList, setFileList] = useState([]);
  const fileListRef = ref(storage, "files/");
  const uploadFile = () => {
    if (fileUpload == null) return;
    const fileRef = ref(storage, `files/${fileUpload.name + v4()}`);
    uploadBytes(fileRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setFileList((prev) => [...prev, url]);
      });
      //   alert("File Uploaded");
    });
  };

  useEffect(() => {
    listAll(fileListRef).then((res) => {
      console.log(res);
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setFileList((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  return (
    <>
      <ContainerDefault title='File Manage'>
        <HeaderDashboard title='File Management' description='File Listing ' />

        <div>
          <input
            type='file'
            onChange={(e) => {
              setFileUpload(e.target.files[0]);
            }}
          />
          <button onClick={uploadFile}>Upload File</button>
        </div>
        <div>
          {fileList.map((name) => {
            return <p> {name} </p>;
          })}
        </div>
      </ContainerDefault>
    </>
  );
};

export default index;

// ? only store fakePath of file

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
