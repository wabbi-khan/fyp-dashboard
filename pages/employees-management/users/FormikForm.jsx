import React from "react";
import { Formik, Form } from "formik";
import FormFields from "./FormFields";
// import * as Yup from "yup";
const index = () => {
  // const validate = Yup.object({
  //   fullName: Yup.string()
  //     .max(15, "Must be 15 character or less")
  //     .required("Required"),
  //   email: Yup.string().email("Email is invalid").required("Required"),
  // });
  return (
    <>
      {/* initialValues={{
          fullName: "",
          email: "",
          mobileNo: "",
          cnicNo: "",
          city: "",
          status: "",
          address: "",
        }} */}
      <Formik>
        {(formik) => (
          <div>
            <h2 className='my-4 font-weight-bold-display-4'>
              Add New Employee
              {console.log(formik.values)}
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
                    name='monbileNo'
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
