import NewArrivals from "@/components/NewArrivals";
import Slider from "@/components/Slider";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Slider />
      <Suspense fallback={"loading"}>
        <NewArrivals />
      </Suspense>
    </>
  );
}
