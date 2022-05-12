import React, { useState } from "react";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
// import FormikForm from "./FormikForm";
import { useRouter } from "next/router";
import Axios from "axios";
import style from "./style.module.css";
// import { collection, addDoc, getDocs } from "firebase/firestore";
// import { database } from "~/firebaseConfig";
// const employeeInstance = collection(database, "employee");

const AddUser = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
  });
  const { name } = user;
  const onInputChange = (e) => {
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:3001/users", user);
    // addDoc(employeeInstance, user).then(() => {
    router.push("/file-management");
    // });
  };
  return (
    <>
      <ContainerDefault title='Employees Manage'>
        <HeaderDashboard
          title='Employees Management'
          description='Employees Listing '
        />
        <h3>Add a new Employee</h3>

        <form onSubmit={(e) => onSubmit(e)}>
          <div class='form-row'>
            <div class='form-group col-md-6'>
              <label>Full Name</label>
              <input
                type='file'
                class='form-control'
                name='name'
                value={name}
                onChange={(e) => onInputChange(e)}
                required
                placeholder='Employee Full Name'
              />
            </div>
          </div>
          <button type='submit' class={style.btn}>
            Add New Employee
          </button>
        </form>
      </ContainerDefault>
    </>
  );
};

export default AddUser;
