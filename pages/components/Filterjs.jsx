import React, { useEffect, useState } from "react";

const Filterjs = () => {
  const filterbtn = [
    { btnnn: "all" },
    { btnnn: "green" },
    { btnnn: "red" },
    { btnnn: "blue" },
  ];

  const [filterData, setFilterData] = useState("");

  //   useEffect = {
  //     setFilterDat(filterData)
  //   };
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex items-center gap-3 my-6">
        {filterbtn.map((obj, index) => {
          return (
            <button
              onClick={() => setFilterData()}
              key={index}
              className={`bg-black px-8 py-2 text-white rounded-xl ${
                index === 1 ? "!bg-green-600" : ""
              }${index === 2 ? "!bg-red-600" : ""}${
                index === 3 ? "!bg-blue-600" : ""
              }`}
            >
              {obj.btnnn}
            </button>
          );
        })}
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4 green_box">
          <div className="w-[150px] h-[150px] bg-green-600"></div>
          <div className="w-[150px] h-[150px] bg-green-600"></div>
          <div className="w-[150px] h-[150px] bg-green-600"></div>
        </div>
        <div className="flex items-center gap-4 red_box">
          <div className="w-[150px] h-[150px] bg-red-600"></div>
          <div className="w-[150px] h-[150px] bg-red-600"></div>
          <div className="w-[150px] h-[150px] bg-red-600"></div>
        </div>
        <div className="flex items-center gap-4 blue_box">
          <div className="w-[150px] h-[150px] bg-blue-600"></div>
          <div className="w-[150px] h-[150px] bg-blue-600"></div>
          <div className="w-[150px] h-[150px] bg-blue-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Filterjs;
