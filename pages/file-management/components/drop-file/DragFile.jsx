import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";
import { ImageConfig } from "../../config/ImageConfig";
import uploadImg from "~/public/assets/cloud-upload-regular-240.png";
const DragFile = (props) => {
  const wrapperRef = useRef(null);
  const [fileList, setFileList] = useState([]);
  const onDragEnter = () => {
    wrapperRef.current.classList.add("dragover");
  };
  console.log(onDragEnter);
  const onDragLeave = () => {
    wrapperRef.current.classList.remove("dragover");
  };
  const onDrag = () => {
    wrapperRef.current.classList.remove("dragover");
  };

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updateList = [...fileList, newFile];
      setFileList(updateList);
      props.onFileChange(updateList);
    }
  };
  return (
    <>
      <div
        ref={wrapperRef}
        className={style.drop_file_input}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrag={onDrag}
      >
        <div className='drop-file-input__label'>
          <img className={style.img} src={uploadImg} alt='img' />
          <p>Drag & Drop your file here</p>
        </div>
        <input
          className={style.input}
          type='file'
          value=''
          onChange={onFileDrop}
        />
      </div>
      {fileList.length > 0 ? (
        <div className={style.drop_file}>
          <p className={style.drop_file_title}>Ready to uplaod</p>
          {fileList.map((item, index) => (
            <div key={index} className={style.drop_file_item}>
              <img
                src={
                  ImageConfig[item.type.split("/")[1] || ImageConfig["default"]]
                }
                alt=''
              />
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

DragFile.propTypes = {
  onFileChange: PropTypes.func,
};

export default DragFile;
