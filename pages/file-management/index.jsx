import React, { useEffect, useState } from "react";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import Link from "next/link";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
import style from "./style.module.css";
import DragFile from "./components/drop-file/DragFile";
const FileManager = () => {
  const onFileChange = (file) => {
    console.log(file);
  };
  return (
    <ContainerDefault title='Employees Manage'>
      <HeaderDashboard
        title='Employees Management'
        description='Employees Listing '
      />
      <div>
        <h1>File Details</h1>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className={style.box}>
              <div className={style.header}>drag your file here !</div>
              <DragFile onFileChange={(file) => onFileChange(file)} />
            </div>
          </div>
        </div>
      </div>
    </ContainerDefault>
  );
};
export default FileManager;
