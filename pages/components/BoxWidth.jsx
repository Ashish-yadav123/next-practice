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
      return 30;
    } else {
      return 20;
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        <div className="xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 md:px-5 xl:px-0">
          <div className="flex items-center justify-between gap-4">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                onClick={() => handleImgClick(index)}
                className={`max-w-[${calculateWidth(
                  index
                )}%] overflow-hidden cursor-pointer`}
              >
                <div className="flex justify-between gap-5 bg-[blue] text-white h-[300px] w-full p-5">
                  <Image
                    className="max-w-[200px] w-full object-cover"
                    src={girlImg}
                    alt={`girl-img`}
                  />
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa quibusdam sapiente possimus, cumque delectus amet
                    aspernatur. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit.
                  </p>
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
