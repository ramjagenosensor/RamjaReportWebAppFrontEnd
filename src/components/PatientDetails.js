import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link

const PatientDetails = () => {
  const [Name, setName] = useState("");
  const [Uhid, setUhid] = useState("");
  const [Age, setAge] = useState("");
  const [Hospital, setHospital] = useState("");
  const [Date, setDate] = useState("");

  //using loacal storage to save these values & will be accesed further in another logic

  useEffect(()=>{
    localStorage.setItem("Name" ,Name);
    localStorage.setItem("Uhid", Uhid);
    localStorage.setItem("Age", Age);
    localStorage.setItem("Hospital", Hospital);
    localStorage.setItem("Date", Date);
  }, [Name, Uhid, Age, Hospital, Date])

  return (
    <>
      <form className="bg-gray-400 shadow-black shadow-2xl h-[550px] p-5 opacity-75 flex flex-col justify-center items-center rounded-2xl">
        <h1 className="font-bold text-2xl my-2">Enter Patient Details</h1>
        <div className="flex flex-col my-1">
          <div className="flex items-center">
            <h2 className="mr-3 p-2 font-bold w-24">Name:</h2>
            <input
              className="p-2 rounded-2xl w-56"
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </div>
          <br />
          <div className="flex items-center">
            <h2 className="mr-3 p-2 font-bold w-24">UH ID:</h2>
            <input
              className="p-2 rounded-2xl w-56"
              onChange={(e) => setUhid(e.target.value)}
              type="text"
            />
          </div>
          <br />
          <div className="flex items-center">
            <h2 className="mr-3 p-2 font-bold w-24">Age:</h2>
            <input
              className="p-2 rounded-2xl w-56"
              onChange={(e) => setAge(e.target.value)}
              type="text"
            />
          </div>
          <br />
          <div className="flex items-center">
            <h2 className="mr-3 p-2 font-bold w-24">Hospital:</h2>
            <input
              className="p-2 rounded-2xl w-56"
              onChange={(e) => setHospital(e.target.value)}
              type="text"
            />
          </div>
          <br />
          <div className="flex items-center">
            <h2 className="mr-3 p-2 font-bold w-24">Date:</h2>
            <input
              className="p-2 rounded-2xl w-56"
              onChange={(e) => setDate(e.target.value)}
              type="text"
            />
          </div>
        </div>
        {/* Use Link to redirect to /dashboard */}
        <Link
          to="/dashboard"
          className="bg-[#46a1cf] hover:bg-slate-500 hover:text-white p-4 rounded-full my-5 mx-2 transition-colors duration-500 font-bold"
        >
          Next
        </Link>
      </form>
    </>
  );
};

export default PatientDetails;
