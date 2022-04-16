import React from "react";
import { Formik, Form } from "formik";
import FormFields from "./FormFields";
import * as Yup from "yup";
const index = () => {
  const validate = Yup.object({
    fullName: Yup.string()
      .max(15, "Must be 15 character or less")
      .required("Name is required"),
    email: Yup.string().email("Email is invalid").required("Emai is required"),
    mobileNo: Yup.string()
      .max(15, "Mobile no is invalid")
      .required("Mobile no is required"),
    cnicNo: Yup.string()
      .max(20, "CNIC no is invalid")
      .required("CNIC ni is required"),
    city: Yup.string()
      .max(20, "CNIC no is invalid")
      .required("City is required"),
    status: Yup.string()
      .max(20, "CNIC no is invalid")
      .required("Status is required"),
    address: Yup.string()
      .max(50, "CNIC no is invalid")
      .required("Address is required"),
  });
  return (
    <>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          mobileNo: "",
          cnicNo: "",
          city: "",
          status: "",
          address: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <div>
            <h2 className='my-4 font-weight-bold-display-4'>
              Add New Employee
            </h2>
            <Form>
              <div className='row'>
                <div className='col-6'>
                  <FormFields
                    label='Full Name'
                    placeholder='Wahab Khan '
                    name='fullName'
                    type='text'
                  />
                </div>
                <div className='col-6'>
                  <FormFields
                    label='Email'
                    placeholder='wahab@gmail.com'
                    name='email'
                    type='email'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-6'>
                  <FormFields
                    label='Mobile no'
                    placeholder='123123'
                    name='mobileNo'
                    type='tel'
                  />
                </div>
                <div className='col-6'>
                  <FormFields
                    label='CNIC no'
                    placeholder='234545'
                    name='cnicNo'
                    type='tel'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-6'>
                  <FormFields
                    label='City'
                    placeholder='Hyderabad'
                    name='city'
                    type='text'
                  />
                </div>
                <div className='col-6'>
                  <FormFields
                    label='Status'
                    placeholder='Hire/Not Hire'
                    name='status'
                    type='text'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <FormFields
                    label='Address'
                    placeholder='house no 234'
                    name='address'
                    type='text'
                  />
                  <button
                    type='submit'
                    className='btn btn-primary'
                    style={{
                      padding: "10px 20px",
                      fontSize: "15px",
                      marginTop: "20px",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default index;
