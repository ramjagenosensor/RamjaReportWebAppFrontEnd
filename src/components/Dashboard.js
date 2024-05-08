// Dashboard component
import React from "react";
import DashboardCard from "./DashboardCard";
import BackgroundImage from "../assets/BackgroundImg.jpg";
import Header from "./Header";
import PatientDetails from "./PatientDetails";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loader from "./Loader";

const DashboardRouter = createBrowserRouter([
  {
    path: "/",
    //element: <Loader/>
    element:<PatientDetails />
  },
  {
    path: "/dashboard",
    element: <DashboardCard />
  }
]);

const Dashboard = () => {
  return (
    <>
      <Header />
      <div
        className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="flex justify-center items-center">
          <RouterProvider router={DashboardRouter}/>
          {/* <DashboardCard /> */}
           
          
        </div>
      </div>
    </>
  );
};

export default Dashboard;
