import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";
import React from "react";

const SinglePage = async ({ params }) => {
  const id = params.slug;
  const wixClient = await wixClientServer();
  const products = await wixClient.products
    .queryProducts()
    .eq("slug", id)
    .find();
  if (!products.items[0]) {
    return notFound();
  }
  const product = products.items[0];
  return (
    <div className="tablet:p-10">
      SinglePage{" "}
      <p>
        {id}
        {product.description}
      </p>
    </div>
  );
};

export default SinglePage;
