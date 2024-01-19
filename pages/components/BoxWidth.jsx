import Image from "next/image";
import React, { useState, useEffect } from "react";
import girlImg from "../../public/assets/webp/girl_img.webp";
import MobileBoxWidth from "./MobileBoxWidth";

const BoxWidth = () => {
  const [activeImg, setActiveImg] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  // HANDLE RESIZE WIDTH
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleImgClick = (index) => {
    setActiveImg(index);
  };

  const calculateWidth = (index) => {
    if (windowWidth < 1024) {
      if (activeImg === null || activeImg === index) {
        return "100%";
      } else {
        return "60%";
      }
    } else if (activeImg === null || activeImg === index) {
      return "40%";
    } else {
      return "23%";
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-full min-h-screen py-20">
        <div className="xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 md:px-5 xl:px-0">
          <MobileBoxWidth />
          <div className="hidden md:flex flex-wrap lg:flex-nowrap items-center justify-start lg:justify-between gap-4">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                onClick={() => handleImgClick(index)}
                style={{
                  width: calculateWidth(index),
                  transition: "width 0.3s ease-in-out",
                }}
                className="cursor-pointer rounded-lg mb-4"
              >
                <div className="bg-[blue] text-white md:h-[300px] w-[500px] mx-auto md:w-full p-2 rounded-lg">
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
