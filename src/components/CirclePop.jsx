"use client";
import React, { useState } from "react";
import "./cart.css";
import Image from "next/image";

function CirclePop() {
  const [img, setImg] = useState(0);
  const slides = [
    {
      img: "/slider/slide2.webp",
    },
    {
      img: "https://www.hindustantimes.com/ht-img/img/2024/10/27/550x309/PTI10-27-2024-000249A-0_1730068001741_1730068031651.jpg",
    },
    {
      img: "/slider/slide1.webp",
    },
  ];

  return (
    <>
      <div className="relative h-screen w-full">
        {slides.map(
          (val, i) =>
            i == img && (
              <div
                key={i}
                className="w-full h-full bg-gradient-to-tr from-purple-400 to-red-300 "
              >
                <Image
                  src={val.img}
                  width={900}
                  height={900}
                  alt="Slide"
                  className="object-contain w-full h-full easycodingwithme"
                />
              </div>
            )
        )}
        <div
          className="absolute top-1/2 left-20"
          onClick={() =>
            setImg((prev) =>
              prev < slides.length - 1 ? setImg(img + 1) : setImg(0)
            )
          }
        >
          Left
        </div>
        <div
          className="absolute top-1/2 right-20"
          onClick={() =>
            setImg((prev) =>
              prev < slides.length - 1 ? setImg(img + 1) : setImg(0)
            )
          }
        >
          Right
        </div>{" "}
      </div>
      {/* <div className="h-max w-full overflow-hidden flex mask">
        <div className="unique flex  w-max">
          <div className="w-[200px] h-40 bg-red-600 shrink-0 mx-2">1</div>
          <div className="w-[200px] h-40 bg-red-600 shrink-0 mx-2">2</div>
          <div className="w-[200px] h-40 bg-red-600 shrink-0 mx-2">3</div>
          <div className="w-[200px] h-40 bg-red-600 shrink-0 mx-2">4</div>
          <div className="w-[200px] h-40 bg-red-600 shrink-0 mx-2">5</div>
          <div className="w-[200px] h-40 bg-red-600 shrink-0 mx-2">6</div>
          <div className="w-[200px] h-40 bg-red-600 shrink-0 mx-2">7</div>
          <div className="w-[200px] h-40 bg-red-600 shrink-0 mx-2">8</div>
          <div className="w-[200px] h-40 bg-red-600 shrink-0 mx-2">1</div>
          <div className="w-[200px] h-40 bg-red-600 shrink-0 mx-2">2</div>
          <div className="w-[200px] h-40 bg-red-600 shrink-0 mx-2">3</div>
          <div className="w-[200px] h-40 bg-red-600 shrink-0 mx-2">4</div>
          <div className="w-[200px] h-40 bg-red-600 shrink-0 mx-2">5</div>
          <div className="w-[200px] h-40 bg-red-600 shrink-0 mx-2">6</div>
          <div className="w-[200px] h-40 bg-red-600 shrink-0 mx-2">7</div>
          <div className="w-[200px] h-40 bg-red-600 shrink-0 mx-2">8</div>
        </div> */}
      {/* </div> */}
    </>
    // <>
    //   <div className="relative w-full h-screen class">
    //     <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-purple-400 to-red-300 ">
    //       {slides.map((val, i) => (
    //         <Image
    //           key={i}
    //           src={val.img}
    //           width={900}
    //           height={900}
    //           alt="Slide"
    //           className={`object-contain img img-${
    //             i + 1
    //           } w-full h-full easycodingwithme`}
    //         />
    //       ))}
    //     </div>
    //     <div
    //       className="absolute top-20
    //      left-20"
    //     >
    //       <input type="radio" name="comman" id="one" />
    //       <input type="radio" name="comman" id="two" />
    //       <input type="radio" name="comman" id="three" />
    //       <input type="radio" name="comman" id="four" />
    //       {/* <select name="select" id="id">
    //         <option value="20">20%</option>
    //         <option value="60">60%</option>
    //       </select> */}
    //     </div>
    //   </div>
    // </>
  );
}

export default CirclePop;
