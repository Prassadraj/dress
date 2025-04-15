"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(1);

  const slides = [
    {
      id: 0,
      title: "Title1",
      desc: "Our oversized hooded t-shirts for men are perfect for those cool summer evenings. They're as comfy as a hug from Baymax and will make you look as cool as ...",
      img: "/slider/slide1.webp",
      bg: "bg-gradient-to-r from-pink-500 to-gray-700",
    },
    {
      id: 1,
      title: "Title2",
      desc: "Available from sizes S to XXXL, our oversized t shirt are designed to hang just right. No weird bulges, no awkward fits—just a clean silhouette that flatters ...",
      img: "/slider/slide2.webp",
      bg: "bg-gradient-to-r from-pink-200 to-gray-700",
    },
    {
      id: 2,
      title: "Title3",
      desc: "Available from sizes S to XXXL, our oversized t shirt are designed to hang just right. No weird bulges, no awkward fits—just a clean silhouette that flatters ...",
      img: "/slider/slide3.webp",
      bg: "bg-gradient-to-r from-pink-900 to-gray-700",
    },
  ];
  const [circle, setCircle] = useState(true);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => (prev == slides.length - 1 ? 0 : prev + 1));
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, []);
  function slider(i) {
    setCircle(false);
    setTimeout(() => {
      setCurrentIndex(i);
      setCircle(true);
    }, 1000);
  }
  function circleSlide(currentId) {
    let prev = activeIndex;
    setPrevIndex(prev);
    setActiveIndex(currentId);
    console.log(prevIndex + "prev");
    console.log(activeIndex + "active");
  }

  return (
    <>
      <div
        className="h-[calc(100vh-80px)] 
       overflow-hidden transition-all duration-[1s] ease-in-out relative"
      >
        {/* <div className="absolute top-0 left-0 h-full w-full inset-0  z-50 screen">
          <div className="h-1/2  w-full bg-black/80"></div>
          <div className="h-1/2 w-full bg-black/80"></div>
        </div> */}
        <div className="w-max grid col-start-1 row-start-1 !h-full   ">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`w-screen h-full  flex col-start-1 row-start-1 row-end-2 col-end-2 flex-col tablet:flex-row ${
                slide.bg
              }  ${
                activeIndex == i
                  ? "z-20  currentSlide"
                  : prevIndex == i
                  ? "z-10"
                  : "z-0"
              }`}
            >
              {/* text  */}
              <div className="tablet:w-1/2 h-1/2 tablet:!h-full  flex flex-col items-center justify-center tablet:gap-4 text-center tablet:px-20">
                <h1 className="tablet:text-4xl laptop:text-6xl">
                  {slide.title}
                </h1>
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
        {/* btns  */}
        <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 flex gap-3">
          {slides.map((slide, i) => (
            <div
              onClick={() => circleSlide(i)}
              key={i}
              className={`
        h-3 w-3 rounded-full ring-1 ring-pink-400 bg-yellow-600
        transition-transform duration-300 transform justify-center items-center flex
        ${activeIndex === i ? "scale-150 " : ""}
      `}
            >
              {activeIndex === i && (
                <div className="w-[4px] h-[4px] rounded-full bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Slider;
