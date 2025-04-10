"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      id: 0,
      title: "Title1",
      desc: "Our oversized hooded t-shirts for men are perfect for those cool summer evenings. They're as comfy as a hug from Baymax and will make you look as cool as ...",
      img: "/slider/slide1.webp",
      bg: "bg-gradient-to-r from-orange-50 to-red-50",
    },
    {
      id: 1,
      title: "Title2",
      desc: "Available from sizes S to XXXL, our oversized t shirt are designed to hang just right. No weird bulges, no awkward fits—just a clean silhouette that flatters ...",
      img: "/slider/slide2.webp",
      bg: "bg-gradient-to-r from-pink-900 to-gray-700",
    },
    {
      id: 2,
      title: "Title3",
      desc: "Available from sizes S to XXXL, our oversized t shirt are designed to hang just right. No weird bulges, no awkward fits—just a clean silhouette that flatters ...",
      img: "/slider/slide3.webp",
      bg: "bg-gradient-to-r from-pink-900 to-gray-700",
    },
  ];
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => (prev == slides.length - 1 ? 0 : prev + 1));
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden ">
      <div
        className="w-max flex !h-full  transition-all duration-1000 ease-in-out "
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`w-screen h-full flex flex-col tablet:flex-row ${slide.bg} `}
          >
            {/* text  */}
            <div className="tablet:w-1/2 h-1/2 tablet:!h-full  flex flex-col items-center justify-center tablet:gap-4 text-center tablet:px-20">
              <h1 className="tablet:text-4xl laptop:text-6xl">{slide.title}</h1>
              <h3 className="tablet:text-xl ">{slide.desc}</h3>
              <p className="px-2 py-1 bg-yellow-900 text-white rounded-lg">
                Shop
              </p>
            </div>
            {/* img  */}
            <div className="tablet:w-1/2  h-1/2 tablet:h-full  relative ">
              <Image
                src={slide.img}
                sizes="100%"
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((slide, i) => (
          <div
            onClick={() => setCurrentIndex(i)}
            key={i}
            className={`
        h-3 w-3 rounded-full ring-1 ring-pink-400 bg-yellow-600
        transition-transform duration-300 transform justify-center items-center flex
        ${currentIndex === i ? "scale-150" : ""}
      `}
          >
            {currentIndex === i && (
              <div className="w-[4px] h-[4px] rounded-full bg-gray-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
