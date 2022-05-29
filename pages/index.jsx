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
import Link from "next/link";

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
        <h3>Team Members:</h3>
      </div>
      <ol>
        <li>
          <h4>Wahab khan (A18BSIT037)</h4>
        </li>
        <li>
          <h4>Syed Saif Uddin (A18BSIT032)</h4>
        </li>
        <li>
          <h4>Rushda khan (A18BSIT015)</h4>
        </li>
      </ol>
      {/* <div>
        <h3>Wahab khan (A18BSIT037)</h3>
      </div>
      <div>
        <h3>Syed Saif Uddin (A18BSIT032)</h3>
      </div>
      <div>
        <h3>Rushda khan (A18BSIT015)</h3>
      </div> */}
      <div className='container pt-4'>
        <div className='row'>
          <div className='col-6'>
            <div class='card'>
              <img class='card-img-top' src='/img/1.png' alt='Card image cap' />
              <div class='card-body'>
                <h5 class='card-title'>Employees Management</h5>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link href='/employees-management'>
                  <a class='btn btn-primary' style={{ fontSize: "15px" }}>
                    Click Me
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div class='card'>
              <img class='card-img-top' src='/img/4.png' alt='Card image cap' />
              <div class='card-body'>
                <h5 class='card-title'>Files Management</h5>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link href='/file-management'>
                  <a class='btn btn-primary' style={{ fontSize: "15px" }}>
                    Click Me
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='row pt-4'>
          <div className='col-6'>
            <div class='card'>
              <img class='card-img-top' src='/img/3.png' alt='Card image cap' />
              <div class='card-body'>
                <h5 class='card-title'>Meeting Scheduler</h5>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link href='/meeting-scheduler'>
                  <a class='btn btn-primary' style={{ fontSize: "15px" }}>
                    Click Me
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <h1>Some Company Details On Dashboard</h1>
      </div> */}
      {/* <section className='ps-dashboard' id='homepage'>
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
      </section> */}
    </ContainerDashboard>
  );
};

export default Index;
