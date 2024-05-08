import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";

const PatientDetails = () => {
  const [Name, setName] = useState("");
  const [Uhid, setUhid] = useState("");
  const [Age, setAge] = useState("");
  const [Hospital, setHospital] = useState("");
  const [Date, setDate] = useState("");
  const [testType, setTestType] = useState("select");
  const [isTestTypeSelected, setIsTestTypeSelected] = useState(false);
  
  const navigate=useNavigate();

  //using loacal storage to save these values & will be accesed further in another logic

  useEffect(()=>{
    localStorage.setItem("Name" ,Name);
    localStorage.setItem("Uhid", Uhid);
    localStorage.setItem("Age", Age);
    localStorage.setItem("Hospital", Hospital);
    localStorage.setItem("TestType", testType);
  }, [Name, Uhid, Age, Hospital, Date, testType]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (testType !== "select") {
      // Test Type is selected, proceed to next page
      
      navigate('/dashboard');
      
    } else {
      // Test Type is not selected, display error message or prevent submission
      setIsTestTypeSelected(true);
    }
  };


  return (
    <>
      <form  onSubmit={handleSubmit}  className="bg-gray-400 shadow-white shadow-xl h-[550px] p-5 opacity-75 flex flex-col justify-center items-center rounded-2xl">
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
              type="date"
            />
            

          </div>
          <br />
           <div className="flex items-center">
            <h2 className="mr-3 p-2 font-bold w-24">Test Type:</h2>
            <select
              className="p-2 rounded-2xl w-56"
              onChange={(e) => setTestType(e.target.value)}
              value={testType} 
            >
              <option value="select">Select</option>
              <option value="UTI">UTI</option>
              <option value="Sepsis">Sepsis</option>
            </select>
          </div>
          {isTestTypeSelected === true &&
            <p className="text-red-600 font-bold mx-auto mt-2">Select test type !</p>
}
        </div>
        {/* Use Link to redirect to /dashboard */}
        <button
         type="submit"
          className="bg-[#1276a7] hover:bg-slate-500 hover:text-white p-4 rounded-full my-5 mx-2 w-28  transition-colors duration-500 font-bold"
        >
          Next
        </button>
      </form>
    </>
  );
};

export default PatientDetails;
