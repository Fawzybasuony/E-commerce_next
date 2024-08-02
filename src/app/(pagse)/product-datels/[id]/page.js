"use client";

import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Laoding from "components/Laoding";
import ThemeContexttt from "context/page";
import Image from "next/image.js";
import Link from "next/link";
import { useContext, useEffect } from "react";

// async function getData(id) {
//   const res = await fetch(`http://localhost:4000/products/${id}`);
//   return res.json();
// }
// const objData = await getData(params.id);

export default function page({ params }) {
  const { loading, prodat, setprodat, deleteProduct, laod, setlaod } =
    useContext(ThemeContexttt);

  useEffect(() => {
    const getData = (id) => {
      fetch(`https://data-murex-nu.vercel.app/db.json/${params.id}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setprodat(data);
        });
    };

    getData(params.id);
  }, [params.id]);

  setTimeout(() => {
    setlaod(false);
  }, 500);

  return (
    <>
      {laod ? (
        <Laoding />
      ) : (
        <div
          className="container my-5"
          style={{ boxShadow: " #00075 1px 1px 5px 0px " }}
        >
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              {prodat && prodat.productImg ? (
                <Image
                  src={`/${prodat.productImg}`}
                  alt="Product Image"
                  width={200}
                  height={200}
                  priority
                />
              ) : (
                <p>No image available</p>
              )}
            </div>
            <div className="col-md-6">
              <div className="product-details">
                <br />
                <h2>{prodat.title}</h2>
                <p className="price text-danger fw-bold">${prodat.price}</p>
                <p className="description">{prodat.description}</p>

                {loading ? (
                  <div
                    style={{ width: "1.5rem", height: "1.5rem" }}
                    className="spinner-border"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      deleteProduct(prodat.id);
                    }}
                    type="button"
                    className="btn btn-danger"
                  >
                    <FontAwesomeIcon icon={faTrash} /> Delete Product
                  </button>
                )}

                <Link
                  href={`/Updete/${prodat.id}`}
                  type="button"
                  className="btn btn-primary ms-3"
                >
                  <FontAwesomeIcon icon={faPen} /> Updete
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
