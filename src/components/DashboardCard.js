import React, { useState } from "react";
import axios from "axios";

const DashboardCard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

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
      const response = await axios.post("http://localhost:8000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Zip file uploaded successfully!");
      setData(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/data");
      setData(response.data);
    } catch (err) {
      alert("Please upload zip file");
    }
  };

  console.log(data);

  return (
    <div className="bg-slate-400 shadow-black shadow-2xl h-2/3 w-3/4 opacity-75 rounded-2xl">
      <form
        className="flex justify-center items-center m-8"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <input type="file" name="fileUpload" id="fileUpload" onChange={handleFileChange} accept=".zip" />
        <button
          type="submit"
          className="bg-red-700 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
        >
          Upload
        </button>
      </form>

      <div className="flex justify-evenly">
        <div className="m-4 max-h-80 overflow-y-auto">
          <table>
            <thead className="sticky top-0 bg-white">
              <tr>
                <th className="p-2">Species</th>
                <th className="p-2">Voltage</th>
                <th className="p-2">Current</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                Object.keys(data).map((item) => {
                  const species = data[item];
                  return (
                    <tr key={item}>
                      <td className="p-2 text-center">{item}</td>
                      <td className="p-2 text-center">{species.voltage.toFixed(2)}</td>
                      <td className="p-2 text-center">{species.current.toFixed(2)}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <button
          className="bg-[#87B2C8] hover:bg-slate-500 hover:text-white p-4 rounded-full my-5 transition-colors duration-500 font-bold"
          onClick={getData}
        >
          Read Parameters
        </button>
      </div>
    </div>
  );
};

export default DashboardCard;
