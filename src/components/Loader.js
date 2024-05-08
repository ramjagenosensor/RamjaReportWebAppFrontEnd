import React from "react";

const Loader = () => {
  return (
    <>
  <div className=" mt-24 flex flex-col items-center">
    <div className="relative">
     
      <div className="absolute top-0 left-0 border-t-4 border-gray-500 rounded-full h-12 w-12 animate-spin "></div>
    </div>
    <div className="mt-16 ml-10 text-lg font-bold text-gray-700">
    Sit Back & Relax...
  </div>
    
  </div>
  
</>

    
  );
};

export default Loader;
