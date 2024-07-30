import { useState } from "react";
import "./LatestProducts.css";
export default function Lest_Products() {
  const [changa, setchanga] = useState("All");

  return (
    <>
      <section className="latest-products spad">
        <div className="container">
          <div className="product-filter">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section-title">
                  <h3>Latest Products</h3>
                </div>
                <ul className="product-controls">
                  <li
                    onClick={() => {
                      setchanga("All");
                    }}
                  >
                    All
                  </li>
                  <li
                    onClick={() => {
                      setchanga("T shirts");
                    }}
                  >
                    T shirts
                  </li>
                  <li
                    onClick={() => {
                      setchanga("headphones");
                    }}
                  >
                    headphones
                  </li>
                  <li
                    onClick={() => {
                      setchanga("Shoes");
                    }}
                  >
                    Shoes
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row" id="product-list">
            {changa === "All" && (
              <>
                <div className="col-lg-3 col-sm-6 mix all dresses bags">
                  <div className="single-product-item">
                    <figure>
                      <a href="#">
                        <img className="img_0" src="/images/(1).jpg" alt="." />
                      </a>
                      <div className="p-status">new</div>
                    </figure>
                    <div className="product-text">
                      <h6>Green Dress with details</h6>
                      <p>$22.90</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6 mix all accesories bags">
                  <div className="single-product-item">
                    <figure>
                      <a href="/images/(6).jpg">
                        <img className="img_0" src="/images/(6).jpg" alt="." />
                      </a>
                      <div className="p-status sale">sale</div>
                    </figure>
                    <div className="product-text">
                      <h6>Yellow Maxi Dress</h6>
                      <p>$25.90</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6 mix all dresses bags">
                  <div className="single-product-item">
                    <figure>
                      <a href="/images/8.png">
                        <img className="img_0" src="/images/8.png" alt="." />
                      </a>
                    </figure>
                    <div className="product-text">
                      <h6>One piece bodysuit</h6>
                      <p>$19.90</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6 mix all accesories bags">
                  <div className="single-product-item">
                    <figure>
                      <a href="/images/(2).jpg">
                        <img className="img_0" src="/images/(2).jpg" alt="." />
                      </a>
                      <div className="p-status popular">popular</div>
                    </figure>
                    <div className="product-text">
                      <h6>Blue Dress with details</h6>
                      <p>$35.50</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6 mix all dresses bags">
                  <div className="single-product-item">
                    <figure>
                      <a href="/images/(3).jpg">
                        <img className="img_0" src="/images/(3).jpg" alt="." />
                      </a>
                      <div className="p-status sale">sale</div>
                    </figure>
                    <div className="product-text">
                      <h6>Yellow Maxi Dress</h6>
                      <p>$25.90</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6 mix all shoes accesories">
                  <div className="single-product-item">
                    <figure>
                      <a href="/images/(4).jpg">
                        <img className="img_0" src="/images/(4).jpg" alt="." />
                      </a>
                      <div className="p-status">new</div>
                    </figure>
                    <div className="product-text">
                      <h6>One piece bodysuit</h6>
                      <p>$19.90</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 mix all shoes accesories">
                  <div className="single-product-item">
                    <figure>
                      <a href="/images/(5).jpg">
                        <img className="img_0" src="/images/(5).jpg" alt="." />
                      </a>
                      <div className="p-status popular">popular</div>
                    </figure>
                    <div className="product-text">
                      <h6>Blue Dress with details</h6>
                      <p>$35.50</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6 mix all dresses shoes">
                  <div className="single-product-item">
                    <figure>
                      <a href="/images/4.webp">
                        <img className="img_0" src="/images/4.webp" alt="." />
                      </a>
                      <div className="p-status">new</div>
                    </figure>
                    <div className="product-text">
                      <h6>Green Dress with details</h6>
                      <p>$22.90</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {changa === "T shirts" && (
              <>
                <div className="col-lg-3 col-sm-6 mix all shoes accesories">
                  <div className="single-product-item">
                    <figure>
                      <a href="/images/(4).jpg">
                        <img className="img_0" src="/images/(4).jpg" alt="." />
                      </a>
                      <div className="p-status">new</div>
                    </figure>
                    <div className="product-text">
                      <h6>One piece bodysuit</h6>
                      <p>$19.90</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6 mix all dresses bags">
                  <div className="single-product-item">
                    <figure>
                      <a href="/images/8.png">
                        <img className="img_0" src="/images/8.png" alt="." />
                      </a>
                    </figure>
                    <div className="product-text">
                      <h6>One piece bodysuit</h6>
                      <p>$19.90</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 mix all dresses bags">
                  <div className="single-product-item">
                    <figure>
                      <a href="/images/(3).jpg">
                        <img className="img_0" src="/images/(3).jpg" alt="." />
                      </a>
                      <div className="p-status sale">sale</div>
                    </figure>
                    <div className="product-text">
                      <h6>Yellow Maxi Dress</h6>
                      <p>$25.90</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {changa === "headphones" && (
              <>
                <div className="col-lg-3 col-sm-6 mix all dresses bags">
                  <div className="single-product-item">
                    <figure>
                      <a href="/images/(1).jpg">
                        <img className="img_0" src="/images/(1).jpg" alt="." />
                      </a>
                      <div className="p-status">new</div>
                    </figure>
                    <div className="product-text">
                      <h6>Green Dress with details</h6>
                      <p>$22.90</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 mix all accesories bags">
                  <div className="single-product-item">
                    <figure>
                      <a href="/images/(2).jpg">
                        <img className="img_0" src="/images/(2).jpg" alt="." />
                      </a>
                      <div className="p-status popular">popular</div>
                    </figure>
                    <div className="product-text">
                      <h6>Blue Dress with details</h6>
                      <p>$35.50</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 mix all accesories bags">
                  <div className="single-product-item">
                    <figure>
                      <a href="/images/Apple_Watch_Series_9_GPS_45mm_Starlight.webp">
                        <img
                          className="img_0"
                          src="/images/Apple_Watch_Series_9_GPS_45mm_Starlight.webp"
                          alt="."
                        />
                      </a>
                      <div className="p-status popular">popular</div>
                    </figure>
                    <div className="product-text">
                      <h6>Blue Dress with details</h6>
                      <p>$35.50</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {changa === "Shoes" && (
              <>
                <div className="col-lg-3 col-sm-6 mix all shoes accesories">
                  <div className="single-product-item">
                    <figure>
                      <a href="/images/(5).jpg">
                        <img className="img_0" src="/images/(5).jpg" alt="." />
                      </a>
                      <div className="p-status popular">popular</div>
                    </figure>
                    <div className="product-text">
                      <h6>Blue Dress with details</h6>
                      <p>$35.50</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6 mix all dresses shoes">
                  <div className="single-product-item">
                    <figure>
                      <a href="/images/(6).jpg">
                        <img className="img_0" src="/images/(6).jpg" alt="." />
                      </a>
                      <div className="p-status">new</div>
                    </figure>
                    <div className="product-text">
                      <h6>Green Dress with details</h6>
                      <p>$22.90</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6 mix all dresses shoes">
                  <div className="single-product-item">
                    <figure>
                      <a href="/images/4.webp">
                        <img className="img_0" src="/images/4.webp" alt="." />
                      </a>
                      <div className="p-status">new</div>
                    </figure>
                    <div className="product-text">
                      <h6>Green Dress with details</h6>
                      <p>$22.90</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
