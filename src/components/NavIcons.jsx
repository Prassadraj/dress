"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import CartModel from "./CartModel";

function NavIcons() {
  const [profile, setProfile] = useState(false);
  const [cart, setCart] = useState(false);
  //   temp login
  const Logined = true;
  const router = useRouter();
  const handleProfile = () => {
    if (!Logined) {
      router.push("/login");
    } else {
      setProfile((prev) => !prev);
    }
  };
  return (
    <div className="flex items-center tablet:gap-4 relative">
      <div className="cursor-pointer" onClick={handleProfile}>
        <FiUser />
      </div>
      {profile && (
        <div
          className="absolute top-12 left-0 p-2 rounded-md  bg-white text-black z-20
         shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        >
          <Link href="/"> Profile</Link>
          <div className="cursor-pointer mt-2">Logout</div>
        </div>
      )}
      <div>
        <IoMdNotifications />
      </div>
      <div className="" onClick={() => setCart((prev) => !prev)}>
        <TiShoppingCart />
      </div>
      <div className="cursor-pointer">
        <CartModel open={cart} setOpen={setCart} />
      </div>
    </div>
  );
}

export default NavIcons;
