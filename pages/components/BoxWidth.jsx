import Image from "next/image";
import React, { useState } from "react";
import girlImg from "../../public/assets/webp/girl_img.webp";

const BoxWidth = () => {
  const [activeImg, setActiveImg] = useState(0);

  const handleImgClick = (index) => {
    setActiveImg(index);
  };

  const calculateWidth = (index) => {
    if (activeImg === null || activeImg === index) {
      return 40;
    } else {
      return 23;
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        <div className="xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 md:px-5 xl:px-0">
          <div className="flex items-center justify-between gap-4">
            {[0, 1, 2, 3].map((index) => (
              //   <div
              //     key={index}
              //     onClick={() => handleImgClick(index)}
              //     className={`max-w-[${calculateWidth(
              //       index
              //     )}%] cursor-pointer rounded-lg`}
              //   >
              <div
                key={index}
                onClick={() => handleImgClick(index)}
                style={{
                  width: `${calculateWidth(index)}%`,
                  transition: "width 0.3s ease-in-out",
                }}
                className="cursor-pointer rounded-lg"
              >
                <div className="bg-[blue] text-white h-[300px] w-full p-2 rounded-lg">
                  <Image
                    className="h-full w-full object-cover"
                    src={girlImg}
                    alt={`girl-img`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BoxWidth;
