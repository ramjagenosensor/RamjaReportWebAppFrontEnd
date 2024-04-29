import React, { useState } from "react";
import axios from "axios";
import excelDownload from "../utils/excelDownload";
import DownloadIcon from "../assets/DownloadIcon.png";
import TickIcon from "../assets/TickIcon.png"
import {useNavigate} from "react-router-dom"




const DashboardCard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDownload, setIsDownload] = useState(false)
  const navigate = useNavigate();
  // console.log(navigate);

  const handleDownload = () => {
    excelDownload(data); 
    if(data){
      setIsDownload(true);
      setTimeout(()=>{
        setIsDownload(false);
        navigate('/');
       
      },3000)
    }
   
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
    
      await axios.post("https://ramjareportwebappbackend.onrender.com/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      //alert("Zip file uploaded successfully!");
      //setData(response.data);
    } catch (err) {
      setError(err.message);
      console.log(error)
    }
  };

  const getData = async () => {
    if (!selectedFile) {
      alert("Please upload a zip file first.");
      return;
    }

    try {
      const response = await axios.get("https://ramjareportwebappbackend.onrender.com/");
      // console.log(response);
      setData(response.data);
    } catch (err) {
      alert("Error fetching data. Please try again later.");
    }
  };

  function getStatusCodeColor(status) {
    switch (status) {
      case "Positive":
        return "bg-red-500 font-bold";
      case "W-Positive":
        return "bg-yellow-500 font-bold";
      case "Negative":
        return "bg-green-500 font-bold";
      default:
        return "";
    }
  }

  return (
    <div className="bg-gray-400 shadow-black shadow-2xl h-[550px] w-[400px] opacity-75 rounded-2xl">
      <form
        className="flex justify-center items-center m-8 border-2 border-red-950 rounded-full  "
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <input
          type="file"
          name="fileUpload"
          id="fileUpload"
          onChange={handleFileChange}
          accept=".zip"
          className=" px-5"
        />
        <button
          type="submit"
          className="bg-red-700 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
        >
          Upload
        </button>
      </form>

      <div className="flex justify-evenly">
        <div className="m-4  h-80 overflow-y-auto">
          <table>
            <thead className="sticky top-0 bg-white">
              <tr>
                <th className="p-2">Species</th>
                <th className="p-2">Voltage</th>
                <th className="p-2">Current</th>
                <th className="p-2">Result</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                Object.keys(data).map((item) => {
                  const species = data[item];
                  return (
                    <tr key={item}>
                      <td className="p-2 text-center">{item}</td>
                      <td className="p-2 text-center">
                        {species.voltage.toFixed(2)}
                      </td>
                      <td className="p-2 text-center">
                        {species.current.toFixed(2)}
                      </td>
                      <td className={`p-2 text-center ${getStatusCodeColor(species.status)}`} >{species.status}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-[#46a1cf] hover:bg-slate-500 hover:text-white p-4 rounded-full my-5 mx-2 transition-colors duration-500 font-bold"
          onClick={getData}
        >
          Read Parameters
        </button>
        <button

          className="bg-[#46a1cf] hover:bg-slate-500 hover:text-white mx-2 p-4 rounded-full my-5 transition-colors duration-500 font-bold border-2"
          onClick={handleDownload}
          
        >
          {isDownload ?<img src={TickIcon} alt="Downloaded" className="h-6 w-6" />:
          <img src={DownloadIcon} alt="Download" className="h-6 w-6" />}
        </button>
      </div>
    </div>
  );
};

export default DashboardCard;
