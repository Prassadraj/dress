"use client";
import React, { useState } from "react";

function CartModel({ open, setOpen }) {
  return (
    <div
      className={`h-screen w-80 fixed  top-0 bg-white text-black z-30 transition-all ease-in-out duration-700
    ${open ? "right-0 rounded-l-none " : "-right-80 rounded-l-[45%]"}`}
    >
      <div className={`transition-all ease-in-out duration-1000 h-full p-4 `}>
        <div className="h-full flex flex-col">
          <div className="flex  items-center justify-between">
            <p>Shopping cart</p>
            <p className="" onClick={() => setOpen(false)}>
              X
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModel;
