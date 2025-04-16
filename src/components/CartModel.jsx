"use client";
import React, { useEffect, useState } from "react";
import { Newsreader, Montserrat } from "next/font/google";
import Image from "next/image";
import "./cart.css";
import { FaTrash } from "react-icons/fa";

const news = Newsreader({ subsets: ["latin"], weight: ["800"] });
const mont = Montserrat({ subsets: ["latin"], weight: ["500"] });
const montLight = Montserrat({ subsets: ["latin"], weight: ["400"] });
function CartModel({ open, setOpen }) {
  const [quantity, setQuantity] = useState(1);
  // temp
  const stock = 10;
  // data
  const [data, setData] = useState([
    {
      id: 1,
      image: "/slider/slide1.webp",
      title: "Name",
      size: "S",
      color: "red",
      originalPrice: 599,
      salePrice: 499,
      stock: 5,
      quantity: 1,
    },
    {
      id: 2,
      image: "/slider/slide3.webp",
      title: "Name",
      size: "S",
      color: "red",
      originalPrice: 699,
      salePrice: 399,
      stock: 5,
      quantity: 1,
    },
    {
      id: 3,
      image: "/slider/slide2.webp",
      title: "Name",
      size: "S",
      color: "red",
      originalPrice: 699,
      salePrice: 399,
      stock: 5,
      quantity: 1,
    },
    // Add more items if needed
  ]);
  const handleRemove = (index) => {
    setData((prev) => prev.filter((_, i) => i !== index));
  };
  const subTotal = data.reduce(
    (acc, item) => acc + item.salePrice * item.quantity,
    0
  );
  return (
    <div
      className={`h-screen w-[450px] ${
        mont.className
      } fixed  top-0 bg-white right-0 text-black z-30 transition-all ease-in cartmenu  duration-[0.3s]
    ${open ? "open" : ""}`}
    >
      <div className={`transition-all ease-in-out duration-1000 h-full p-4 `}>
        <div className="h-full flex flex-col tablet:gap-4 ">
          {/* first div  */}
          <div className="flex  items-center justify-between ">
            <p className="text-xl">Shopping cart</p>
            <p
              className="cursor-pointer font-medium text-2xl"
              onClick={() => setOpen(false)}
            >
              X
            </p>
          </div>
          {/* sec div for show all cart info  */}
          <div
            className="w-full h-[70vh] overflow-y-scroll flex flex-col border-b-2 shadow-sm shadow-black/50 py-2 
           gap-4"
          >
            {data.map((item, index) => (
              <div key={item.id} className="flex h-52 w-full">
                <div className="w-1/2">
                  <Image
                    src={item.image}
                    width={900}
                    height={900}
                    className="object-contain w-full h-full"
                    alt={`Image of ${item.title}`}
                  />
                </div>
                <div className="flex flex-col w-1/2 items-start gap-2">
                  <p>
                    <span>Title :</span> {item.title}
                  </p>
                  <p>
                    <span>Size :</span> {item.size}
                  </p>
                  <p>
                    <span>Color :</span> {item.color}
                  </p>
                  <div className="flex gap-2 font-medium">
                    <p className="line-through">Rs {item.originalPrice}.00</p>
                    <p>Rs {item.salePrice}.00</p>
                  </div>

                  {/* Quantity */}
                  <div className="w-full flex items-center gap-2">
                    <div className="px-1 flex border border-gray-400 rounded-md justify-between items-center w-24 ">
                      <p
                        className={`p-1 text-xl cursor-pointer ${
                          item.stock === item.quantity
                            ? "pointer-events-none opacity-20 font-bold"
                            : ""
                        }`}
                        onClick={() =>
                          setData((prev) =>
                            prev.map((val) =>
                              val.id == item.id && val.quantity < val.stock
                                ? { ...val, quantity: val.quantity + 1 }
                                : val
                            )
                          )
                        }
                      >
                        +
                      </p>
                      <p className="p-1">{item.quantity}</p>
                      <p
                        className={`p-1 text-xl font-bold cursor-pointer ${
                          item.quantity === 1
                            ? "pointer-events-none opacity-20"
                            : ""
                        }`}
                        onClick={() =>
                          setData((prev) =>
                            prev.map((val) =>
                              val.id == item.id && val.quantity > 1
                                ? { ...val, quantity: val.quantity - 1 }
                                : val
                            )
                          )
                        }
                      >
                        -
                      </p>
                    </div>
                    {/* trash icon */}
                    <div
                      className="hover:text-red-700 cursor-pointer"
                      onClick={() => handleRemove(index)}
                    >
                      <FaTrash />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>Rs.{subTotal}.00</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-full bg-black/80 text-white py-2">Check Out</div>
            <div className="w-full h-max bg-gray-300 py-2">Cart View</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModel;
