import React, { useEffect } from "react";
import CardRecentOrders from "~/components/shared/cards/CardRecentOrders";
import CardSaleReport from "~/components/shared/cards/CardSaleReport";
import CardEarning from "~/components/shared/cards/CardEarning";
import CardStatics from "~/components/shared/cards/CardStatics";
import ContainerDashboard from "~/components/layouts/ContainerDashboard";
import { getDocs, collection } from "firebase/firestore";
// import { useDispatch } from "react-redux";
// import { toggleDrawerMenu } from "~/store/app/action";
import CardTopCountries from "~/components/shared/cards/CardTopCountries";
import { database } from "~/firebaseConfig";
const usersInstance = collection(database, "users");

const Index = () => {
  // const dispatch = useDispatch();
  const getAllUsers = async () => {
    getDocs(usersInstance).then((data) => {
      // console.log(data);
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
      <div>
        <h1>Some Company Details On Dashboard</h1>
      </div>
      <section className='ps-dashboard' id='homepage'>
        <div className='ps-section__left'>
          <div className='row'>
            <div className='col-xl-8 col-12'>
              <CardSaleReport />
            </div>
            <div className='col-xl-4 col-12'>
              <CardEarning />
            </div>
          </div>
          <CardRecentOrders />
        </div>
        <div className='ps-section__right'>
          <CardStatics />
          <CardTopCountries />
        </div>
      </section>
    </ContainerDashboard>
  );
};

export default Index;
