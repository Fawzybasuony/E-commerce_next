import { useState } from "react";
import "./LatestProducts.css";

const products = [
  {
    id: 1,
    category: ["All", "headphones"],
    image: "/main_lest/(1).jpg",
    link: "/main_lest/(1).jpg",
    status: "new",
    title: "Green Dress with details",
    price: "$22.90",
  },
  {
    id: 2,
    category: ["All", "headphones"],
    image: "/main_lest/(6).jpg",
    link: "/main_lest/(6).jpg",
    status: "sale",
    title: "Yellow Maxi Dress",
    price: "$25.90",
  },
  {
    id: 3,
    category: ["All", "T shirts"],
    image: "/main_lest/8.png",
    link: "/main_lest/8.png",
    status: "popular",
    title: "One piece bodysuit",
    price: "$19.90",
  },
  {
    id: 4,
    category: ["All", "headphones"],
    image: "/main_lest/(2).jpg",
    link: "/images/(2).jpg",
    status: "popular",
    title: "Blue Dress with details",
    price: "$35.50",
  },
  {
    id: 5,
    category: ["All", "T shirts"],
    image: "/main_lest/(3).jpg",
    link: "/main_lest/(3).jpg",
    status: "sale",
    title: "Yellow Maxi Dress",
    price: "$25.90",
  },
  {
    id: 6,
    category: ["All", "T shirts", "Shoes"],
    image: "/main_lest/(6).jpg",
    link: "/main_lest/(4).jpg",
    status: "new",
    title: "One piece bodysuit",
    price: "$19.90",
  },
  {
    id: 7,
    category: ["All", "Shoes"],
    image: "/main_lest/(5).jpg",
    link: "/main_lest/(5).jpg",
    status: "popular",
    title: "Blue Dress with details",
    price: "$35.50",
  },
  {
    id: 8,
    category: ["All", "Shoes"],
    image: "/main_lest/4.webp",
    link: "/main_lest/4.webp",
    status: "new",
    title: "Green Dress with details",
    price: "$22.90",
  },
  {
    id: 9,
    category: ["headphones"],
    image: "/main_lest/(5).jpg",
    link: "/main_lest/(5).jpg",
    status: "popular",
    title: "Blue Dress with details",
    price: "$35.50",
  },
];

export default function LatestProducts() {
  const [changa, setChanga] = useState("All");

  const filteredProducts = products.filter((product) =>
    product.category.includes(changa)
  );

  return (
    <section className="latest-products spad">
      <div className="container">
        <div className="product-filter">
          <div className="row">
            <div className="col-lg-12 text-center">
              {/* title */}
              <strong className="section-title">Latest Products</strong>

              <ul className="product-controls p-0">
                {["All", "T shirts", "headphones", "Shoes"].map((category) => (
                  <li
                    key={category}
                    onClick={() => setChanga(category)}
                    className={
                      changa === category ? "active text-danger fw-bold" : " "
                    }
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row" id="product-list">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="col-lg-4 col-sm-6 mix all dresses bags"
            >
              <div className="single-product-item">
                <figure>
                  <a href={product.link}>
                    <img
                      loading="lazy"
                      className="img_0"
                      src={product.image}
                      alt={product.title}
                    />
                  </a>
                  <div className={`p-status ${product.status}`}>
                    {product.status}
                  </div>
                </figure>
                <div className="product-text">
                  <h6>{product.title}</h6>
                  <p>{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
