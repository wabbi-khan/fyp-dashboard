import React from "react";
// import { useField } from "formik";
const FormFields = ({ label, placeholder, ...props }) => {
  // const [field, meta] = useField(props);
  return (
    <>
      {/* <div className='row'>
        <div className='col-md-12'> */}
      <div className='mb-2'>
        {/* htmlFor={field.name} */}
        <label> {label} </label>
        <input
          placeholder={placeholder}
          className='form-control shandow-none'
          autoComplete='off'
          // {...field}
          {...props}
        />
      </div>
      {/* </div>
      </div> */}
    </>
  );
};

export default FormFields;
