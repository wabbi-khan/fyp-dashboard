import React, { useEffect, useState } from "react";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import Link from "next/link";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
import Axios from "axios";
// import Pagination from "~/components/elements/basic/Pagination";
// import TableProjectItems from "~/components/shared/tables/TableProjectItems";
// import { Select } from "antd";
// import { connect, useDispatch } from "react-redux";
// import { toggleDrawerMenu } from "~/store/app/action";
// const { Option } = Select;
const DisplayUsers = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await Axios.get("http://localhost:3001/users");
    setUser(result.data);
  };

  const deleteUser = async (id) => {
    await Axios.delete(`http://localhost:3001/users/${id}`);
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
        <Link href='/employees-management/users/AddUser'>
          <button className='btn btn-primary ' style={{ fontSize: "15px" }}>
            Add Employee
          </button>
        </Link>
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
            {users.map((user, index) => (
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
            ))}
          </tbody>
        </table>
      </div>
    </ContainerDefault>
  );
};
export default DisplayUsers;
