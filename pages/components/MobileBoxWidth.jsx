import Image from "next/image";
import React, { useState, useEffect } from "react";
import girlImg from "../../public/assets/webp/girl_img.webp";

const MobileBoxWidth = () => {
  const [activeImg, setActiveImg] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  // HANDLE RESIZE HEIGHT
  useEffect(() => {
    const handleResizeHeight = () => {
      setWindowHeight(window.innerHeight);
    };
    setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResizeHeight);
    return () => {
      window.removeEventListener("resize", handleResizeHeight);
    };
  }, []);

  const handleImgClick = (index) => {
    setActiveImg(index);
  };

  const calculateHeight = (index) => {
    if (windowHeight < 1024) {
      if (activeImg === null || activeImg === index) {
        return "650px";
      } else {
        return "200px";
      }
    }
  };

  return (
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
              Recusandae atque distinctio quae eos, quidem architecto laudantium
              mollitia. Reiciendis facere optio fugiat temporibus dignissimos
              labore ex suscipit alias veritatis necessitatibus! Nulla!
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae atque distinctio quae eos, quidem architecto laudantium
              mollitia. Reiciendis facere optio fugiat temporibus dignissimos
              labore ex suscipit alias veritatis necessitatibus! Nulla!
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae atque distinctio quae eos, quidem architecto laudantium
              mollitia. Reiciendis facere optio fugiat temporibus dignissimos
              labore ex suscipit alias veritatis necessitatibus! Nulla!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileBoxWidth;
