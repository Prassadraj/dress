import { wixClientServer } from "@/lib/wixClientServer";
import NavIcons from "./NavIcons";

const Nav = async () => {
  // const wixClient = useWixClient();
  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       const res = await wixClient.products.queryProducts().find();
  //       console.log("Products:", res);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };
  //   getProduct();
  // }, [wixClient]);
  const wixClient = await wixClientServer();
  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", process.env.OVERSIZED_ID)
    .find();
  console.log(res._items[0]);
  return (
    <div className="flex justify-between items-center tablet:px-20 tablet:py-10 w-full h-20">
      <div className="">LOGO</div>
      <div className=" flex items-center gap-2">
        <p>Home</p>
        <p>Oversized</p>
      </div>
      <div className=" flex text-center gap-2">
        <NavIcons />
      </div>
    </div>
  );
};

export default Nav;
