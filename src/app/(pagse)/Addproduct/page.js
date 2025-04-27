import AddproductMatadata from "./AddproductMatadata/page";
import Header from "../../../components/Headar/Header";

export const metadata = {
  title: "Add Product | Your Store Shop easily",
  description: "Add new products to your store easily and quickly.",
};

export default function page() {
  return (
    <>
      <Header isAddProductPage={true} />
      <h1 className="d-flex justify-content-center my-4">Add Product</h1>
      <AddproductMatadata />
    </>
  );
}
