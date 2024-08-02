"use client";
import "./productt.css";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeContexttt from "context/page";
import Link from "next/link";
import { useContext, useEffect } from "react";
import Laoding from "../Laoding";
// async function getData() {
// await new Promise((resolve) => setTimeout(resolve, 1000));
//   const res = await fetch("http://localhost:4000/products", {
//     next: { revalidate: 0 },
//   });
//   return res.json();
// }
// const prodat = await getData();
export default function producttt() {
  const { name, Addproduct, ID, setprodat, prodat, laod } =
    useContext(ThemeContexttt);

  useEffect(() => {
    fetch("https://data-murex-nu.vercel.app/db.json", { next: { revalidate: 0 } })
      .then((res) => res.json())
      .then((json) => setprodat(json));
  }, []);

  return (
    <>
      {laod ? (
        <Laoding />
      ) : (
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
              {prodat && prodat.length > 0 && (
                <div className="container pro">
                  <div className="row">
                    {prodat.map((item, index) => {
                      return (
                        <div
                          key={index}
                          title={item.title}
                          className="col-sm-6 col-md-4 col-lg-3 mb-4"
                        >
                          <div className="card h-100">
                            <Link href={`/product-datels/${item.id}`}>
                              {prodat && (
                                <img
                                  src={
                                    item.productImg
                                      ? `/${item.productImg}`
                                      : `/${item.img}`
                                  }
                                  className="card-img-top"
                                  alt="Product Image"
                                  style={{ height: "200px", width: "100%" }}
                                />
                              )}
                            </Link>
                            <div className="card-body d-flex flex-column">
                              <h4 className="card-title me-auto text-danger">
                                ${item.price}
                              </h4>

                              <h5
                                className="card-title  me-auto"
                                style={{ height: "30px" }}
                              >
                                {item.title.slice(0, 15)}
                              </h5>

                              <p
                                className="me-5 mb-4"
                                style={{ height: "30px" }}
                              >
                                {item.description.slice(0, 30)} . . .
                              </p>

                              {ID.includes(item.id) ? (
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
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
