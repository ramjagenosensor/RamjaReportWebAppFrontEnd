import { saveAs } from "file-saver";
const xlsx = require("xlsx");


const downloadExcel = (data) => {
  if (!data) {
    alert("No data available to download.");
    return;
  }

  const workbook = {
    Sheets: {
      data: xlsx.utils.json_to_sheet(Object.values(data)),
    },
    SheetNames: ["data"],
  };

  const excelBuffer = xlsx.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  saveAs(
    new Blob([excelBuffer], { type: "application/octet-stream" }),
    "data.xlsx"
  );
};

export default downloadExcel;
