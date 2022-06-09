import React, { useState, useEffect } from "react";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
import { storage } from "~/firebaseConfig";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
// import cloudicon from "~/public/img/cloudicon.png";
import Spinner from "~/components/spinner/index";

import style from "./style.module.css";
const index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [fileUpload, setFileUpload] = useState(null);
  const [fileList, setFileList] = useState([]);
  const fileListRef = ref(storage, "file/");
  const [loading, setLoading] = useState(false);

  //Upload File
  const uploadFile = () => {
    if (fileUpload == null) return;
    const fileRef = ref(storage, `file/${fileUpload.name}`);

    uploadBytes(fileRef, fileUpload).then((snapshot) => {
      // console.log(snapshot);
      getDownloadURL(snapshot.ref).then((url) => {
        setFileList((prev) => [...prev, url]);
      });
      alert("File Uploaded");
    });
  };
  // Delete file
  const deleteFile = (fileName) => {
    const desertRef = ref(storage, `file/${fileName}`);
    // Delete the file
    deleteObject(desertRef)
      .then(() => {
        // File deleted successfully
        console.log("woww file delete");
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
        console.log(error);
      });
  };

  useEffect(() => {
    //   const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
    //     console.log("Current data: ", doc.data());
    // });
    listAll(fileListRef).then((res) => {
      // console.log(res);
      res.items.forEach((item) => {
        // console.log(item.name);
        getDownloadURL(item).then((url) => {
          setFileList((prev) => [...prev, { url, name: item.name }]);
          setLoading(true);
        });
      });
    });
  }, []);

  return (
    <>
      <ContainerDefault title='File Manage'>
        <HeaderDashboard title='File Management' description='File Listing ' />

        <div className='p-4'>
          <input
            type='file'
            className={style.field}
            onChange={(e) => {
              setFileUpload(e.target.files[0]);
            }}
          />
          <button onClick={uploadFile} className={style.btn}>
            Upload File
          </button>
        </div>
        <div>
          <div className='col-6'>
            <input
              className={style.input}
              type='text'
              placeholder='Search Employee...'
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>

          <table className='table border shadow mt-4'>
            <thead className='thead-dark '>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>File Name</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                fileList
                  .filter((file) => {
                    if (searchTerm == "") {
                      return file;
                    } else if (
                      file.name.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return file;
                    }
                  })
                  .map((item, index) => {
                    return (
                      <tr>
                        <td> {index + 1}</td>
                        <a href={item.url} target='_blank'>
                          <td>{item.name}</td>

                          {/* {JSON.stringify(item, 0, 1)} */}
                        </a>
                        <td>
                          <button
                            className={style.delete}
                            onClick={(e) => deleteFile(item.name)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
              ) : (
                <Spinner />
              )}
            </tbody>
          </table>
        </div>
      </ContainerDefault>
    </>
  );
};

export default index;
