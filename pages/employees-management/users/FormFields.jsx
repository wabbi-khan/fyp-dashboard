import React from "react";
import { ErrorMessage, useField } from "formik";
const FormFields = ({ label, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {/* <div className='row'>
        <div className='col-md-12'> */}
      <div className='mb-2'>
        {/* htmlFor={field.name} */}
        <label> {label} </label>
        <input
          placeholder={placeholder}
          className={`form-control shandow-none ${
            meta.touched && meta.error && "is-invalid"
          }`}
          autoComplete='off'
          {...field}
          {...props}
        />
        <div style={{ color: "red", fontSize: "12px" }}>
          <ErrorMessage name={field.name} />
        </div>
      </div>
      {/* </div>
      </div> */}
    </>
  );
};

export default FormFields;
