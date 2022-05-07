import React, { useState, useEffect } from "react";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
import { useRouter } from "next/router";
import Axios from "axios";
import style from "../style.module.css";
import {
  collection,
  addDoc,
  getDocs,
  docs,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { database } from "~/firebaseConfig";
const employeeInstance = collection(database, "employee");

const EditUser = () => {
  const router = useRouter();
  const { id } = router.query;
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
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const updateUser = doc(database, "employee", id);
    await updateDoc(updateUser, user);
    router.push("/employees-management");

    // await Axios.put(`http://localhost:3001/users/${id}`, user);
    // router.push("/employees-management");
  };

  // useEffect(() => {
  //   const LoadUser = async () => {
  //     try {
  //       let employees = [];

  //       getDocs(employeeInstance).then((data) => {
  //         for (let i = 0; i < data.docs.length; i++) {
  //           const item = data.docs[i];

  //           setUser({ ...item.data(), id: item.id });
  //           // console.log(item.id);
  //           console.log(item.data());
  //           // console.log(item.data());
  //         }
  //         setUser(employees);
  //         // console.log(data);
  //       });
  //       // console.log(data);

  //       // const data = await Axios.get(`http://localhost:3001/users/` + id);
  //       // setUser(data.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   LoadUser();
  // }, []);

  const getSingleUserData = async () => {
    const singleNote = doc(database, "employee", id);
    const data = await getDoc(singleNote);
    setUser({ ...data.data(), id: data.id });
  };
  useEffect(() => {
    getSingleUserData();
  }, []);
  return (
    <>
      <ContainerDefault title='Employees Manage'>
        <HeaderDashboard
          title='Employees Management'
          description='Employees Listing '
        />
        <h3>Editing {user.name} Profile</h3>
        {/* <FormikForm /> */}
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
          </div>
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
              {/* <input
                type='text'
                class='form-control'
                name='status'
                value={status}
                onChange={(e) => onInputChange(e)}
                required
                placeholder='Hire / Not Hire'
              /> */}
              <select
                class='form-control'
                onChange={(e) => onInputChange(e)}
                required
                name='status'
                value={status}
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

          <button type='submit' className={style.btn}>
            Edit Employee
          </button>
        </form>
      </ContainerDefault>
    </>
  );
};

export default EditUser;
