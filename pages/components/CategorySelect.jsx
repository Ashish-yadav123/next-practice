import Image from "next/image";
import React, { useState } from "react";

const CategorySelect = () => {
  const [selectedSizes, setSelectedSizes] = useState([]);

  const categories = [
    {
      name: "chair-size",
      sizes: [
        "chair-size-100",
        "chair-size-200",
        "chair-size-300",
        "chair-size-400",
      ],
    },
    {
      name: "table-size",
      sizes: [
        "table-size-100",
        "table-size-200",
        "table-size-300",
        "table-size-400",
        "table-size-500",
      ],
    },
    {
      name: "bed-sheet-cover",
      sizes: ["sheet-cover-600", "sheet-cover-700", "sheet-cover-800"],
    },
  ];

  const handleRemoveSize = (size) => {
    setSelectedSizes((prevSizes) =>
      prevSizes.filter((selectedSize) => selectedSize !== size)
    );
  };

  const handleSizeClick = (size) => {
    setSelectedSizes((prevSizes) => {
      // Check if the size is already selected
      if (prevSizes.includes(size)) {
        // If already selected, return the previous sizes without removing it
        return prevSizes;
      } else {
        // If not selected, add it to the selected sizes
        return [...prevSizes, size];
      }
    });
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4">
        {categories.map((obj, index) => (
          <div key={index}>
            <h2 className="text-black text-3xl text-center pb-4">{obj.name}</h2>
            <div className="w-[800px] h-[100px] bg-green-700 rounded-xl flex items-center justify-between px-3">
              {obj.sizes.map((val, i) => (
                <button
                  onClick={() => handleSizeClick(val)}
                  key={i}
                  className={`px-5 py-2 text-white bg-red-600 rounded-xl ${
                    selectedSizes.includes(val) ? "" : ""
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-[800px] mx-auto py-16">
        <div className="flex flex-wrap items-center justify-between gap-12 selected_btn_parent">
          {/* Render selected sizes */}
          {selectedSizes.map((size, index) => (
            <div className="relative">
              <button
                key={index}
                className="px-5 py-2 text-white bg-red-600 rounded-xl"
              >
                {size}
              </button>
              <Image
                height={20}
                width={20}
                className="cross_icon absolute top-1/2 -translate-y-1/2 -right-[25px] cursor-pointer"
                src="/assets/png/cross_icon.png"
                alt="cross-icon"
                onClick={() => handleRemoveSize(size)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySelect;
