import Producttt from "components/productProo/producttt";
import "./shop.css";
import Footart from "components/Footar/Footart";
import Link from "next/link";

export default function page() {
  return (
    <>

      <section className="page-add cart-page-add">
        <div className="container">
          <div className="row mx-0">
            <div className="col-lg-4">
              <div className="page-breadcrumb">
                <h2>
                  Product<span>.</span>
                </h2>
                <Link href="#">Home</Link>
                <Link href="#">Dresses</Link>
                <Link className="active" href="#">
                  Night Dresses
                </Link>
              </div>
            </div>
            <div className="col-lg-8 xc">
              <img src="img/add.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <Producttt />

      <Footart />
    </>
  );
}
