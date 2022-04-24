import React, { useEffect, useState } from "react";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import Link from "next/link";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
import Axios from "axios";
import style from "./style.module.css";
const DisplayUsers = () => {
  const [users, setUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
        <h1>File Details</h1>
      </div>
    </ContainerDefault>
  );
};
export default DisplayUsers;
