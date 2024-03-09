import React from "react";

const CategorySelect = () => {
  const categories = [
    {
      name: "chair-size",
      sizes: [100, 200, 300, 400],
    },
    {
      name: "table-size",
      sizes: [100, 200, 300, 400, 500],
    },
    {
      name: "bed-sheet-cover",
      sizes: [600, 700, 800],
    },
  ];
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4">
        {categories.map((obj, index) => (
          <div key={index}>
            <h2 className="text-black text-3xl text-center pb-4">{obj.name}</h2>
            <div className="w-[500px] h-[100px] bg-green-700 rounded-xl flex items-center justify-between px-3">
              {obj.sizes.map((val, i) => (
                <button
                  key={i}
                  className="px-5 py-2 text-white bg-red-600 rounded-xl"
                >
                  {val} {/* Displaying each size separately */}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelect;
