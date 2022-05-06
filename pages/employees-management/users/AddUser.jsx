import React, { useState } from "react";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
// import FormikForm from "./FormikForm";
import { useRouter } from "next/router";
import Axios from "axios";
import style from "../style.module.css";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { database } from "~/firebaseConfig";
const employeeInstance = collection(database, "employee");

const AddUser = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: "",
    phone: "",
    cnicNo: "",
    city: "",
    address: "",
    country: "",
    province: "",
    zip: "",
    depart: "",
    status: "",
    salary: "",
    dob: "",
    doh: "",
  });
  const {
    name,
    email,
    phone,
    cnicNo,
    city,
    address,
    userName,
    country,
    province,
    zip,
    depart,
    status,
    salary,
    dob,
    doh,
  } = user;
  const onInputChange = (e) => {
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    // await Axios.post("http://localhost:3001/users", user);
    addDoc(employeeInstance, user).then(() => {
      router.push("/employees-management");
    });
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
                type='text'
                class='form-control'
                name='name'
                value={name}
                onChange={(e) => onInputChange(e)}
                required
                placeholder='Employee Full Name'
              />
            </div>
            <div class='form-group col-md-6'>
              <label>User Name</label>
              <input
                type='text'
                class='form-control'
                name='userName'
                value={userName}
                onChange={(e) => onInputChange(e)}
                required
                placeholder='Employee User Name'
              />
            </div>
          </div>
          <div class='form-row'>
            <div class='form-group col-md-6'>
              <label>Mobile No</label>
              <input
                type='tel'
                class='form-control'
                name='phone'
                value={phone}
                onChange={(e) => onInputChange(e)}
                required
                placeholder='Employee Mobile No'
              />
            </div>
            <div class='form-group col-md-6'>
              <label>CNIC No</label>
              <input
                type='tel'
                class='form-control'
                name='cnicNo'
                value={cnicNo}
                onChange={(e) => onInputChange(e)}
                required
                placeholder='Employee Cnic No'
              />
            </div>
          </div>
          <div class='form-row'>
            <div class='form-group col-md-6'>
              <label>Email</label>
              <input
                type='email'
                class='form-control'
                name='email'
                value={email}
                onChange={(e) => onInputChange(e)}
                required
                placeholder='Employee Email address'
              />
            </div>
            <div class='form-group col-md-6'>
              <label>Country</label>
              {/* <input
                type='text'
                class='form-control'
                name='country'
                value={country}
                onChange={(e) => onInputChange(e)}
                required
                placeholder='Employee Country'
              /> */}
              <select
                class='form-control'
                onChange={(e) => onInputChange(e)}
                required
                name='country'
                value={country}
              >
                <option>Choose...</option>
                <option>Pakistan</option>
                <option>India</option>
                <option>U.S.A</option>
              </select>
            </div>
          </div>{" "}
          <div class='form-row'>
            <div class='form-group col-md-6'>
              <label>Date of birth</label>
              <input
                type='date'
                class='form-control'
                name='dob'
                value={dob}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div class='form-group col-md-6'>
              <label>Date of hiring</label>
              <input
                type='date'
                class='form-control'
                name='doh'
                value={doh}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div class='form-group'>
            <label for='inputAddress'>Address</label>
            <input
              type='text'
              class='form-control'
              id='inputAddress'
              placeholder='1234 Main St'
              name='address'
              value={address}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div class='form-row'>
            <div class='form-group col-md-5'>
              <label for='inputCity'>City</label>
              <input
                type='text'
                class='form-control'
                id='inputCity'
                name='city'
                value={city}
                onChange={(e) => onInputChange(e)}
                required
                placeholder='Employee City'
              />
            </div>
            <div class='form-group col-md-3'>
              <label for='inputState'>Province</label>
              {/* <input
                type='text'
                class='form-control'
                placeholder='Sindh'
                name='province'
                value={province}
                onChange={(e) => onInputChange(e)}
                required
              /> */}
              <select
                class='form-control'
                onChange={(e) => onInputChange(e)}
                required
                name='province'
                value={province}
              >
                <option>Choose...</option>
                <option>Sindh</option>
                <option>Punjab</option>
                <option>Balochistan</option>
                <option>Khyber Pakhtunkhwa</option>
              </select>
            </div>
            <div class='form-group col-md-4'>
              <label for='inputZip'>Zip</label>
              <input
                type='tel'
                class='form-control'
                id='inputZip'
                name='zip'
                value={zip}
                onChange={(e) => onInputChange(e)}
                required
                placeholder='Employee Zip code'
              />
            </div>
          </div>
          <div class='form-row'>
            <div class='form-group col-md-4'>
              <label for='inputCity'>Department</label>
              <input
                type='text'
                class='form-control'
                id='inputCity'
                name='depart'
                value={depart}
                onChange={(e) => onInputChange(e)}
                required
                placeholder='Employee Department'
              />
            </div>
            <div class='form-group col-md-4'>
              <label for='inputState'>Status</label>

              <select
                class='form-control'
                onChange={(e) => onInputChange(e)}
                name='status'
                value={status}
                required
              >
                <option>Choose...</option>
                <option>Hire</option>
                <option>Not Hire</option>
                <option>Pending</option>
              </select>
            </div>
            <div class='form-group col-md-4'>
              <label for='inputZip'>Salary</label>
              <input
                type='tel'
                class='form-control'
                id='inputZip'
                name='salary'
                value={salary}
                onChange={(e) => onInputChange(e)}
                required
                placeholder='Employee Salary'
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
