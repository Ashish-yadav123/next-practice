import Image from "next/image";
import React, { useState, useEffect } from "react";
import girlImg from "../../public/assets/webp/girl_img.webp";

const BoxWidth = () => {
  const [activeImg, setActiveImg] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // HANDLE RESIZE WIDTH
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial window width
    setWindowWidth(window.innerWidth);

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // HANDLE RESIZE HEIGHT
  useEffect(() => {
    const handleResizeHeight = () => {
      setWindowHeight(window.innerHeight);
    };

    // Initial window Height
    setWindowHeight(window.innerHeight);

    // Add event listener for window resize
    window.addEventListener("resize", handleResizeHeight);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResizeHeight);
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
        return "100%";
      }
    } else if (activeImg === null || activeImg === index) {
      return "40%";
    } else {
      return "23%";
    }
  };
  const calculateHeight = (index) => {
    if (windowHeight < 1023.98) {
      if (activeImg === null || activeImg === index) {
        return "100%";
      } else {
        return "50%";
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-full min-h-screen py-20">
        <div className="xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 md:px-5 xl:px-0">
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-start lg:justify-between gap-4">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                onClick={() => handleImgClick(index)}
                style={{
                  width: calculateWidth(index),
                  transition: "width 0.3s ease-in-out",
                  height: calculateHeight(index),
                }}
                className="cursor-pointer rounded-lg mb-4"
              >
                <div className="bg-[blue] text-white lg:h-[300px] w-[500px] mx-auto lg:w-full p-2 rounded-lg">
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
