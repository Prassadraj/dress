"use client";
import React from "react";

function Product({ params }) {
  const { id } = params;
  return <div>Product {id}</div>;
}

export default Product;
