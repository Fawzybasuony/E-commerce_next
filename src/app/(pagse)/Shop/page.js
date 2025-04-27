import Header from "../../../components/Headar/Header";
 
import Producttt from "../../../components/productProo/producttt";
import Heder_info from "../../../helpers/Heder_info";
import "./shop.css";
export const metadata = {
  title: "Shop | Your Store Shop easily",
  description: "Browse our latest products and amazing deals.",
};

export default function page() {
  return (
    <>
    <Header isShopPage = {true}/>
      <section className="page-add cart-page-add">
        <div className="container">
          {/* sec_top */}
        <Heder_info title={"Product"}/>
        </div>
      </section>

      <Producttt />

  
    </>
  );
}
