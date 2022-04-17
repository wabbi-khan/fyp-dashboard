import React, { useState } from "react";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
// import FormikForm from "./FormikForm";
import { useRouter } from "next/router";
import Axios from "axios";
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
  } = user;
  const onInputChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:3001/users", user);
    router.push("/");
  };
  return (
    <>
      <ContainerDefault title='Employees Manage'>
        <HeaderDashboard
          title='Employees Management'
          description='Employees Listing '
        />
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
              />
            </div>
            <div class='form-group col-md-6'>
              <label>Country</label>
              <input
                type='text'
                class='form-control'
                name='country'
                value={country}
                onChange={(e) => onInputChange(e)}
                required
              />
              {/* <select id='inputState' class='form-control'>
                <option>Pakistan</option>
                <option>India</option>
                <option>U.S.A</option>
              </select> */}
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
            <div class='form-group col-md-6'>
              <label for='inputCity'>City</label>
              <input
                type='text'
                class='form-control'
                id='inputCity'
                name='city'
                value={city}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div class='form-group col-md-4'>
              <label for='inputState'>Province</label>
              <input
                type='text'
                class='form-control'
                placeholder='Sindh'
                name='province'
                value={province}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div class='form-group col-md-2'>
              <label for='inputZip'>Zip</label>
              <input
                type='tel'
                class='form-control'
                id='inputZip'
                name='zip'
                value={zip}
                onChange={(e) => onInputChange(e)}
                required
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
              />
            </div>
            <div class='form-group col-md-4'>
              <label for='inputState'>Status</label>
              <input
                type='text'
                class='form-control'
                placeholder='Sindh'
                name='status'
                value={status}
                onChange={(e) => onInputChange(e)}
                required
              />
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
              />
            </div>
          </div>

          <button type='submit' class='btn btn-primary'>
            Sign in
          </button>
        </form>
      </ContainerDefault>
    </>
  );
};

export default AddUser;
