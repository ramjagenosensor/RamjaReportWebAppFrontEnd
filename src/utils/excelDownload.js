import { saveAs } from "file-saver";
const xlsx = require("xlsx");

const downloadExcel = (data) => {
  if (!data) {
    alert("No data available to download.");
    return;
  }

  // Retrieve patient details from local storage
  const Name = localStorage.getItem("Name");
  const Uhid = localStorage.getItem("Uhid");
  const Age = localStorage.getItem("Age");
  const Hospital = localStorage.getItem("Hospital");
  const Date = localStorage.getItem("Date");

  // Combine patient details into an object
  const patientDetails = {
    Name,
    Uhid,
    Age,
    Hospital,
    Date,
  };

  // Create an array of objects with patient details as the first entry
  const excelData = [patientDetails, ...Object.entries(data).map(([species, details]) => ({
    species,
    ...details,
  }))];

  const worksheet = xlsx.utils.json_to_sheet(excelData);

  // Set the first column header to "Name", "UH ID", "Age", "Hospital", "Date" for patient details
  Object.keys(patientDetails).forEach((key, index) => {
    console.log(key, "-" , index)
    worksheet[String.fromCharCode(65 + index) + "1"].v = key;
  });

//console.log(worksheet);
  const workbook = {
    Sheets: { data: worksheet },
    SheetNames: ["data"],
  };

//console.log(workbook);
  const excelBuffer = xlsx.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  saveAs(
    new Blob([excelBuffer], { type: "application/octet-stream" }),
    `Data - ${worksheet.A2.v} - ${worksheet.B2.v}.xlsx`
  );
};

export default downloadExcel;
