"use client";
import "./productt.css";
import { faHeart, faL, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeContexttt from "context/page";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Laoding from "../Laoding";

export default function Producttt() {
  const [hart, sethart] = useState([]);
  const { name, Addproduct, ID, setprodat, prodat, loading, setloading } =
    useContext(ThemeContexttt);

  useEffect(() => {
    setloading(true);
    fetch("https://product-simpledashboard-nodejs.onrender.com/products")
      .then((res) => res.json())
      .then((data) => {
        setloading(false);
        setprodat(data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setloading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Laoding />
      ) : (
        <>
          {!name ? (
            <h1>
              You must be signed in to view the protected content on this page
              <FontAwesomeIcon
                style={{ width: "22px", height: "20px", marginBottom: "5px" }}
                icon={faLock}
              />
            </h1>
          ) : (
            <>
              {prodat && prodat.length > 0 ? (
                <div className="container pro">
                  <div className="row">
                    {prodat.map((item, index) => {
                      return (
                        <div
                          key={item._id}
                          title={item.name}
                          className="col-sm-6 col-md-4 col-lg-3 mb-4"
                        >
                          <div className="card h-100">
                            <Link href={`/product-datels/${item._id}`}>
                              <img
                                src={item.mainImage.secure_url}
                                className="card-img-top"
                                alt={item.name || "Product Image"}
                                style={{ height: "200px", width: "100%" }}
                              />
                            </Link>
                            <div className="card-body d-flex flex-column">
                              <h4 className="card-title me-auto text-danger w-100">
                                ${item.price}
                                <FontAwesomeIcon
                                  style={{
                                    float: "right",
                                    color: hart[item._id] ? "red" : "black",
                                  }}
                                  onClick={() => {
                                    sethart((ID) => ({ ...ID, [item._id]: !ID[item._id],}));
                                  }}
                                  icon={faHeart}
                                />
                              </h4>

                              <h5
                                className="card-title  me-auto"
                                style={{ height: "30px" }}
                              >
                                {item.name.slice(0, 10)}...
                              </h5>

                              <p
                                className="me-5 mb-4"
                                style={{ height: "30px" }}
                              >
                                {item.description.slice(0, 30)}...
                              </p>
                              {ID.includes(item._id) ? (
                                <button className="btn btn-danger">
                                  Added
                                </button>
                              ) : (
                                <button
                                  onClick={(eo) => {
                                    eo.preventDefault();
                                    Addproduct(item);
                                  }}
                                  className="btn btn-primary mt-auto"
                                >
                                  Add Cart
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <h2 >No products found !</h2>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
