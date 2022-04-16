import React from "react";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
import FormikForm from "./FormikForm";
const AddUser = () => {
  return (
    <>
      <ContainerDefault title='Employees Manage'>
        <HeaderDashboard
          title='Employees Management'
          description='Employees Listing '
        />
        <FormikForm />
        {/* <form>
          <div class='form-row'>
            <div class='form-group col-md-6'>
              <label>Full Name</label>
              <input type='email' class='form-control' />
            </div>
            <div class='form-group col-md-6'>
              <label>User Name</label>
              <input type='password' class='form-control' />
            </div>
          </div>
          <div class='form-row'>
            <div class='form-group col-md-6'>
              <label>Mobile No</label>
              <input type='tel' class='form-control' />
            </div>
            <div class='form-group col-md-6'>
              <label>CNIC No</label>
              <input type='tel' class='form-control' />
            </div>
          </div>
          <div class='form-row'>
            <div class='form-group col-md-6'>
              <label>Email</label>
              <input type='email' class='form-control' />
            </div>
            <div class='form-group col-md-6'>
              <label>Country</label>
              <input type='text' class='form-control' />
              <select id='inputState' class='form-control'>
                <option>Pakistan</option>
                <option>India</option>
                <option>U.S.A</option>
              </select>
            </div>
          </div>
          <div class='form-group'>
            <label for='inputAddress'>Address</label>
            <input
              type='text'
              class='form-control'
              id='inputAddress'
              placeholder='1234 Main St'
            />
          </div>
          <div class='form-group'>
            <label>Address 2</label>
            <input
              type='text'
              class='form-control'
              id='inputAddress2'
              placeholder='Apartment, studio, or floor'
            />
          </div>
          <div class='form-row'>
            <div class='form-group col-md-6'>
              <label for='inputCity'>City</label>
              <input type='text' class='form-control' id='inputCity' />
            </div>
            <div class='form-group col-md-4'>
              <label for='inputState'>Province</label>
              <select id='inputState' class='form-control'>
                <option selected>Sindh</option>
                <option>Punjab</option>
                <option>Balochistan</option>
                <option>KPK</option>
              </select>
            </div>
            <div class='form-group col-md-2'>
              <label for='inputZip'>Zip</label>
              <input type='text' class='form-control' id='inputZip' />
            </div>
          </div>
          <div class='form-group'>
            <div class='form-check'>
              <input class='form-check-input' type='checkbox' id='gridCheck' />
              <label class='form-check-label' for='gridCheck'>
                Check me out
              </label>
            </div>
          </div>
          <button type='submit' class='btn btn-primary'>
            Sign in
          </button>
        </form> */}
      </ContainerDefault>
    </>
  );
};

export default AddUser;
