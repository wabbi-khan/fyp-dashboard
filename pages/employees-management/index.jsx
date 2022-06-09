import React, { useEffect, useState } from "react";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import Link from "next/link";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
// import Axios from "axios";
import style from "./style.module.css";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { database } from "~/firebaseConfig";
const employeeInstance = collection(database, "employee");
import Spinner from "~/components/spinner/index";

const DisplayUsers = ({ ID }) => {
  const [users, setUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    // const result = await Axios.get("http://localhost:3001/users");
    let employees = [];

    getDocs(employeeInstance).then((data) => {
      for (let i = 0; i < data.docs.length; i++) {
        const item = data.docs[i];
        employees.push({ ...item.data(), id: item.id });
        console.log(item.data());
      }
      setUser(employees);
      setLoading(true);

      // console.log(data);
    });
    // setUser(result.data);

    // console.log(result);
  };

  const deleteUser = async (id) => {
    // await Axios.delete(`http://localhost:3001/users/${id}`);
    const deleteUser = doc(database, "employee", id);
    await deleteDoc(deleteUser);
    loadUsers();
  };

  return (
    <ContainerDefault title='Employees Manage'>
      <HeaderDashboard
        title='Employees Management'
        description='Employees Listing '
      />
      <div>
        <h1>Employees Details</h1>
        <div className='row'>
          <div className='col-6'>
            <input
              className={style.input}
              type='text'
              placeholder='Search Employee...'
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
          <div className='col-6'>
            <Link href='/employees-management/users/AddUser'>
              {/* <button className={style.btn}>Add Employee</button> */}
              <button class={style.cssbuttons}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='24'
                  height='24'
                >
                  <path fill='none' d='M0 0h24v24H0z'></path>
                  <path
                    fill='currentColor'
                    d='M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z'
                  ></path>
                </svg>
                <span>Add Employee</span>
              </button>
            </Link>
          </div>
        </div>

        <table className='table border shadow mt-4'>
          <thead className='thead-dark '>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Mobile No</th>
              <th scope='col'>CNIC</th>
              <th scope='col'>Email</th>
              <th scope='col'>Status</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              users
                .filter((user) => {
                  if (searchTerm == "") {
                    return user;
                  } else if (
                    user.cnicNo
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    user.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    user.phone
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    user.email.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return user;
                  }
                })
                .map((user, index) => (
                  <tr>
                    <th scope='row'> {index + 1} </th>
                    <td> {user.name} </td>
                    <td> {user.phone} </td>
                    <td> {user.cnicNo} </td>
                    <td> {user.email} </td>
                    <td> {user.status} </td>
                    <td>
                      <Link
                        href={`/employees-management/users/viewUser/` + user.id}
                      >
                        <button className='btn btn-primary mr-2'>View</button>
                      </Link>
                      {/* <Link
                    href='/employees-management/users/EditUser/[id]'
                    as={`/employees-management/users/EditUser/${user?.id}`}
                  > */}
                      <Link href={`/employees-management/users/` + user.id}>
                        <button className='btn btn-outline-primary mr-2'>
                          Edit
                        </button>
                      </Link>
                      {/* <Link href='#'> */}
                      <button
                        className='btn btn-danger mr-2'
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </button>
                      {/* </Link> */}
                    </td>
                  </tr>
                ))
            ) : (
              <Spinner />
            )}
          </tbody>
        </table>
      </div>
    </ContainerDefault>
  );
};
export default DisplayUsers;
