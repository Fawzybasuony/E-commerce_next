"use client";
import "./product.css";

import Slidar from "components/logoslidar/Slidarrr";
import Lest_Products from "components/Latest Products/Lest_Products";
import { useContext } from "react";
import ThemeContexttt from "context/page";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Product() {
  const { name, data } = useContext(ThemeContexttt);

  return (
    <>
      {!name ? (
        <h1>
          Please add the account
          <FontAwesomeIcon
            style={{ width: "22px", height: "20px", marginBottom: "5px" }}
            icon={faLock}
          />
        </h1>
      ) : (
        <>
          <section className="features-section spad">
            <div className="features-ads">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="single-features-ads first">
                      <img src="img/icons/f-delivery.png" alt="" />
                      <h4>Free shipping</h4>
                      <p>
                        Fusce urna quam, euismod sit amet mollis quis,
                        vestibulum quis velit. Vesti bulum mal esuada aliquet
                        libero viverra cursus.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-features-ads second">
                      <img src="img/icons/coin.png" alt="" />
                      <h4>100% Money back </h4>
                      <p>
                        Urna quam, euismod sit amet mollis quis, vestibulum quis
                        velit. Vesti bulum mal esuada aliquet libero viverra
                        cursus.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-features-ads">
                      <img src="img/icons/chat.png" alt="" />
                      <h4>Online support 24/7</h4>
                      <p>
                        Urna quam, euismod sit amet mollis quis, vestibulum quis
                        velit. Vesti bulum mal esuada aliquet libero viverra
                        cursus.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* END */}

          <Lest_Products />

          {/* END */}

          <section className="lookbok-section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-4 offset-lg-1">
                  <div className="lookbok-left">
                    <div className="section-title">
                      <h2>
                        2024
                        <br /> <br />
                        #lookbook
                      </h2>
                    </div>
                    <p>
                      Fusce urna quam, euismod sit amet mollis quis, vestibulum
                      quis velit. Vestibulum malesuada aliquet libero viverra
                      cursus. Aliquam erat volutpat. Morbi id dictum quam, ut
                      commodo lorem. In at nisi nec arcu porttitor aliquet vitae
                      at dui. Sed sollicitudin nulla non leo viverra
                      scelerisque. Phasellus facilisis lobortis metus, sit amet
                      viverra lectus finibus ac. Aenean non felis dapibus,
                      placerat libero auctor, ornare ante. Morbi quis ex
                      eleifend, sodales nulla vitae, scelerisque ante. Nunc id
                      vulputate dui. Suspendisse consectetur rutrum metus nec
                      scelerisque. s
                    </p>
                    <a href="#" className="primary-btn look-btn">
                      See More
                    </a>
                  </div>
                </div>
                <div className="col-lg-5 offset-lg-1">
                  <div className="lookbok-pic">
                    <img src="img/f-box-3.jpg" alt="" />
                    <div className="pic-text">fashion</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* END */}

          <Slidar />

          {/* proooductttt  Herrrr */}
        </>
      )}
    </>
  );
}
