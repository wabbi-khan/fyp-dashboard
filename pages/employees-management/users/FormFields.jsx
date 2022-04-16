import React from "react";
import useField from "formik";
const FormFields = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {/* <div className='row'>
        <div className='col-md-12'> */}
      <div className='mb-2'>
        <label htmlFor={field.name}> {label} </label>
        <input
          className='form-control shandow-none'
          autoComplete='off'
          {...field}
          {...props}
        />
      </div>
      {/* </div>
      </div> */}
    </>
  );
};

export default FormFields;
