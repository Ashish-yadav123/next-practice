import Image from "next/image";
import React, { useState, useEffect } from "react";
import girlImg from "../../public/assets/webp/girl_img.webp";

const BoxWidth = () => {
  const [activeImg, setActiveImg] = useState(0);
  const [windowSize, setWindowSize] = useState(0);

  // HANDLE RESIZE
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleImgClick = (index) => {
    setActiveImg(index);
  };

  const calculateWidth = (index) => {
    if (windowSize < 1024) {
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

  const calculateHeight = (index) => {
    if (windowSize < 1024) {
      if (activeImg === null || activeImg === index) {
        return "650px";
      } else {
        return "200px";
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-full min-h-screen py-20">
        <div className="xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 md:px-5 xl:px-0">
          <div className="md:hidden">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                onClick={() => handleImgClick(index)}
                style={{
                  transition: "height 0.3s ease-in-out",
                  height: calculateHeight(index),
                }}
                className="cursor-pointer rounded-lg mb-4 overflow-hidden"
              >
                <div className="bg-[blue] text-white max-w-[500px] mx-auto p-2 rounded-lg h-full">
                  <Image
                    className="h-full max-h-[300px] w-full object-cover"
                    src={girlImg}
                    alt={`girl-img`}
                  />
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae atque distinctio quae eos, quidem architecto
                    laudantium mollitia. Reiciendis facere optio fugiat
                    temporibus dignissimos labore ex suscipit alias veritatis
                    necessitatibus! Nulla!
                  </p>
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae atque distinctio quae eos, quidem architecto
                    laudantium mollitia. Reiciendis facere optio fugiat
                    temporibus dignissimos labore ex suscipit alias veritatis
                    necessitatibus! Nulla!
                  </p>
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae atque distinctio quae eos, quidem architecto
                    laudantium mollitia. Reiciendis facere optio fugiat
                    temporibus dignissimos labore ex suscipit alias veritatis
                    necessitatibus! Nulla!
                  </p>
                </div>
              </div>
            ))}
          </div>
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
