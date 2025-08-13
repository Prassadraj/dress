import { wixClientServer } from "@/lib/wixClientServer";
import { Montserrat, Newsreader } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const news = Newsreader({ subsets: ["latin"], weight: ["800"] });
const mont = Montserrat({ subsets: ["latin"], weight: ["700"] });
const montMedium = Montserrat({ subsets: ["latin"], weight: ["700"] });
const montLight = Montserrat({ subsets: ["latin"], weight: ["400"] });
async function NewArrivals() {
  const wixClient = await wixClientServer();
  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", process.env.OVERSIZED_ID)
    .find();
  console.log(res);
  return (
    <div
      className={`w-full tablet:p-10 flex flex-col gap-10  ${news.className}`}
    >
      <div className="text-center">
        <h1 className="text-6xl bg-grey-gradient text-transparent bg-clip-text font-bold ">
          New
        </h1>
      </div>
      <div className="grid w-full gap-4 tablet:gap-10 tablet:py-10 grid-cols-3 tablet:grid-cols-4 laptop:grid-cols-5">
        {res?._items.map((data, i) => (
          <Link href={"/" + data.slug}>
            <div key={i} className="flex flex-col gap-2 ">
              <div className="h-[250px] w-full">
                <Image
                  width={900}
                  height={900}
                  src={
                    data?.media?.mainMedia?.image?.url || "/slider/slide1.webp"
                  }
                  className="object-cover w-full h-full rounded-md"
                  alt={`Product ${i + 1}`}
                />
              </div>
              <h1 className="text-center text-sm font-semibold line-clamp-2 px-2">
                {data.name}
              </h1>
              <div
                className={`flex gap-2 items-center justify-center text-sm ${montMedium.className}`}
              >
                <p className="text-gray-500">Rs.{data.price.price}.00</p>
                <p className="line-through text-red-500">
                  Rs.{data?.price?.discountedPrice}.00
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NewArrivals;
