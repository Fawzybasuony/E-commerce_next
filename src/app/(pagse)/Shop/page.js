import Footar from "../../../components/Footar/Footar";
import Producttt from "../../../components/productProo/producttt";
import Heder_info from "../../../helpers/Heder_info";
import "./shop.css";
 
export default function page() {
  return (
    <>
      <section className="page-add cart-page-add">
        <div className="container">
          {/* sec_top */}
        <Heder_info title={"Product"}/>
        </div>
      </section>

      <Producttt />

      <Footar />
    </>
  );
}
