 
import Heder_info from "../../../helpers/Heder_info";
import Prices from "./prices";
import "./Blog.css";
import Header from "../../../components/Headar/Header";
export const metadata = {
  title: "Blog | Your Store Shop easily",
  description: "Read our latest articles, tips, and news about our products.",
};

export default function page() {
  return (
    <>
         <Header isBlogPage={true}/>
      <div>
        <section className="page-add">
          <div className="container">
            {/* sec_info */}
            <Heder_info title={"Checkout"} />
          </div>
        </section>
        <section className="cart-total-page spad">
          <div className="container">
            <form action="#" className="checkout-form">
              <div className="row">
                <div className="col-lg-12">
                  <h3>Your Information</h3>
                </div>
                <div className="col-lg-9">
                  <div className="row">
                    <div className="col-lg-2">
                      <p className="in-name">Name*</p>
                    </div>
                    <div className="col-lg-5">
                      <input type="text" placeholder="First Name" />
                    </div>
                    <div className="col-lg-5">
                      <input type="text" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2">
                      <p className="in-name">Street Address*</p>
                    </div>
                    <div className="col-lg-10">
                      <input type="text" />
                      <input type="text" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2">
                      <p className="in-name">Country*</p>
                    </div>
                    <div className="col-lg-10">
                      <select className="cart-select country-usa">
                        <option>USA</option>
                        <option>EG</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2">
                      <p className="in-name">City*</p>
                    </div>
                    <div className="col-lg-10">
                      <input type="text" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2">
                      <p className="in-name">Country</p>
                    </div>
                    <div className="col-lg-10">
                      <input type="text" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2">
                      <p className="in-name">Post Code/ZIP*</p>
                    </div>
                    <div className="col-lg-10">
                      <input type="text" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2">
                      <p className="in-name">Phone*</p>
                    </div>
                    <div className="col-lg-10">
                      <input type="text" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 text-right">
                      <div className="diff-addr">
                        <input type="radio" id="one" />
                        <label htmlFor="one">Ship to different address</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  {/* Prices */}
                  <Prices />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="payment-method">
                    <h3>Payment</h3>
                    <ul>
                      <li>
                        Paypal <img src="/images/paypal.jpg" alt="." />
                      </li>
                      <li>
                        Credit / Debit card{" "}
                        <img src="/images/mastercard.jpg" alt="." />
                      </li>
                      <li>
                        <label htmlFor="two">
                          Pay when you get the package
                        </label>
                        <input type="radio" id="two" />
                      </li>
                    </ul>
                    <button type="submit">Place your order</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>

 
    </>
  );
}
