import React, { useEffect, useState } from "react";
import CardSaleReport from "~/components/shared/cards/CardSaleReport";
import ContainerDashboard from "~/components/layouts/ContainerDashboard";
import { getDocs, collection, query } from "firebase/firestore";
import { database } from "~/firebaseConfig";
const usersInstance = collection(database, "users");
import Link from "next/link";
import style from "./style.module.css";
import { storage } from "~/firebaseConfig";
import {
  ref,
  list,
} from "firebase/storage";
const Index = () => {
  const employeeInstance = collection(database, "employee");
  const allMeeting = query(collection(database, "events"));
  const files = ref(storage, "file/");

  // const fileListRef = ref(storage, "file/");

  const [countUsers, setCountUsers] = useState([]);
  const [allMeetings, setAllMeetings] = useState([]);
  const [allfiles, setAllFiles] = useState([]);

  //? count all employess

  getDocs(employeeInstance).then((snap) => {
    const size = snap.size; // will return the collection size
    setCountUsers(size);
    // console.log(size);
  });
  //? count all file

  list(files).then((snap) => {
    const size = snap.items.length;
    setAllFiles(size); // will return the collection size
    console.log(size);
  });

  //? count all meetings

  getDocs(allMeeting).then((snap) => {
    const size = snap.size; // will return the collection size
    setAllMeetings(size);
  });
  const getAllUsers = async () => {
    getDocs(usersInstance).then((data) => {
      data.docs.map((item) => {
        console.log(item.data());
      });
    });
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <ContainerDashboard title='Dashboard'>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <div className={style.img1}></div>
            <div className={style.content}>
              <h2 className={style.text}> {countUsers} </h2>
              <h4 style={{ color: "red", cursor: "pointer" }}>
                Employee Hired
              </h4>
              <Link href='/employees-management'>
                <button className={style.btn}>Click Me</button>
              </Link>
            </div>
          </div>
          <div className='col-4'>
            <div className={style.img2}></div>
            <div className={style.content}>
              <h2 className={style.text}> {allfiles} </h2>
              <h4 style={{ color: "red", cursor: "pointer" }}>
                Files are Stored
              </h4>
              <Link href='/file-management'>
                <button className={style.btn}>Click Me</button>
              </Link>
            </div>
          </div>
          <div className='col-4'>
            <div className={style.img3}></div>
            <div className={style.content}>
              <h2 className={style.text}>{allMeetings}</h2>
              <h4 style={{ color: "red", cursor: "pointer" }}>
                Meetings Scheduled
              </h4>
              <Link href='/meeting-scheduler'>
                <button className={style.btn}>Click Me</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={style.box}>
          <div className='row'>
            <div className='col-4'>
              <div className={style.box1}>
                <div className={style.weather}></div>
                <div className={style.date}></div>
              </div>
            </div>
            <div className='col-8'>
              <div className={style.card}>
                <CardSaleReport />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-8'>
              <div className={style.team}></div>
            </div>{" "}
            <div className='col-4'>
              <div className={style.storage}></div>
            </div>
          </div>
        </div>
      </div>
    </ContainerDashboard>
  );
};

export default Index;
