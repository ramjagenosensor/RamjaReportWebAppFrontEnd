// Dashboard component
import React from 'react';
import DashboardCard from './DashboardCard';
import BackgroundImage from '../assets/BackgroundImg.jpg';
import Header from './Header';

const Dashboard = () => {
  return (
    <>
    <Header/>
     <div className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url(${BackgroundImage})` }}>
     
     <div className="flex justify-center items-center">
       <DashboardCard />
     </div>
     

   </div>
   
    </>
   
  );
};

export default Dashboard;
