"use client";
import "./productt.css";
import {
  faHeart,
  faL,
  faLock,
  faShareAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeContexttt from "../../context/page";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Laoding from "../Laoding";
export default function Producttt() {
  const [hart, sethart] = useState([]);
  const [rating, setRating] = useState(2);
  const { name, Addproduct, ID, setprodat, prodat, loading, setloading } =
    useContext(ThemeContexttt);

  useEffect(() => {
    const getData = async () => {
      try {
        setloading(true);
        const res = await fetch(process.env.NEXT_PUBLIC_API_KEY);
        const data = await res.json();
        setprodat(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setloading(false);
      }
    };

    getData();
  }, []);

  return (
    <>
      {/* {name ? (
            <h1>
              You must be signed in to view the protected content on this page
              <FontAwesomeIcon
                style={{ width: "22px", height: "20px", marginBottom: "5px" }}
                icon={faLock}
              />
            </h1>
          ) : ( */}
      <>
        {prodat && prodat.length > 0 ? (
          <>
            <div className="container ">
              <div className="row">
                {prodat.map((item) => {
                  return (
                    <div
                      key={item._id}
                      className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex"
                    >
                      <div className="card h-100 w-100 d-flex flex-column">
                        {/* img */}
                        <div className="card-image-container">
                          <Link href={`/product-datels/${item._id}`}>
                            <img
                              loading="lazy"
                              src={item.mainImage.secure_url}
                              className="card-img-top product-image"
                              alt={item.name || "Product Image"}
                            />
                          </Link>
                        </div>

                        {/* card body */}
                        <div className="card-body flex-grow-1 d-flex flex-column justify-content-between">
                          <div>
                            <div className="d-flex justify-content-between w-100 mb-2">
                              <h4 className="text-primary fs-5">
                                ${item.price}
                              </h4>
                              <div className="star-group">
                                {[1, 2, 3, 4, 5].map((_, index) => (
                                  <input
                                    key={index}
                                    value={rating}
                                    type="radio"
                                    className="star"
                                    id={`star-${item._id}-${index}`}
                                    name={`star_rating-${item._id}`}
                                  />
                                ))}
                              </div>
                            </div>

                            <h5 className="mb-1">
                              {item.name.slice(0, 15)}...
                            </h5>
                            <p className="card-subtitle text-muted">
                              {item.description.slice(0, 40)}...
                            </p>
                          </div>
                        </div>

                        {/* bottom card */}
                        <div className="card-footer d-flex justify-content-between">
                          <button className="btn btn-link p-0">
                            <FontAwesomeIcon
                              style={{
                                color: hart[item._id] ? "red" : "blue",
                              }}
                              onClick={() => {
                                sethart((ID) => ({
                                  ...ID,
                                  [item._id]: !ID[item._id],
                                }));
                              }}
                              icon={faHeart}
                            />
                          </button>

                          <button className="btn btn-link p-0">
                            <FontAwesomeIcon icon={faShareAlt} />
                          </button>

                          {ID.includes(item._id) ? (
                            <button className="btn btn-danger btn-sm">
                              Added
                            </button>
                          ) : (
                            <button
                              onClick={(eo) => {
                                eo.preventDefault();
                                Addproduct(item);
                              }}
                              className="btn btn-primary btn-sm"
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
          </>
        ) : (
          <Laoding />
        )}
      </>
      {/* )} */}
    </>
  );
}
