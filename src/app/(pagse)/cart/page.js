import Header from "../../../components/Headar/Header";
import MetaDataCart from "./MetaDataCart/page";

export const metadata = {
  title: "Your Cart | Your Store Shop easily",
  description: "View and manage the products you added to your cart.",
};
export default function page() {
  return (
    <>
      <Header iscartPage={true} />
      <MetaDataCart />
    </>
  );
}
