"use client";

import { WixClientContext } from "@/context/wixContext";
import React, { useContext, useEffect } from "react";

function Nav() {
  const wixClient = useContext(WixClientContext);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await wixClient.products.queryProducts().find();
        console.log("Products:", res);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProduct();
  }, [wixClient]);

  return <div>Nav</div>;
}

export default Nav;
