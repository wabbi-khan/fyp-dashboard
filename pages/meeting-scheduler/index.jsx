import React from "react";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
import {
  Agenda,
  Day,
  Inject,
  Month,
  ScheduleComponent,
  Week,
  WorkWeek,
} from "@syncfusion/ej2-react-schedule";
import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
// import { database } from "./firebase.config";
import { database } from "~/firebaseConfig";
import moment from "moment";
// import "./style.module.css";

const CustomersPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const q = query(collection(database, "events"));
    const unsub = onSnapshot(q, (doc) => {
      const tempEvents = [];
      doc.forEach((el) => {
        console.log("CBM", el.data());

        tempEvents.push({
          ...el.data(),
          EndTime: new Date(el.data().EndTime),
          StartTime: new Date(el.data().StartTime),
        });
      });

      setData(tempEvents);
    });

    return () => unsub();
  }, []);

  function createEvent(values) {
    addDoc(collection(database, "events"), values);
  }
  return (
    <ContainerDefault title='Meeting Scheduler'>
      <HeaderDashboard title='Meeting Scheduler' description='Meeting List' />
      <div>
        <h1>Meeting Details</h1>
      </div>
      <div>
        <ScheduleComponent
          height='550px'
          // selectedDate={new Date(2022, 1, 15)}
          eventSettings={{ dataSource: data }}
          actionComplete={(args) => {
            if (args.requestType === "eventCreated") {
              createEvent({
                ...args.data[0],
                EndTime: moment(args.data[0].EndTime).format(),
                StartTime: moment(args.data[0].StartTime).format(),
              });
            }
          }}
        >
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </div>
    </ContainerDefault>
  );
};
export default CustomersPage;
// export default connect((state) => state.app)(CustomersPage);
