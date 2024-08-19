"use client";

import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footart from "components/Footar/Footart";
import Laoding from "components/Laoding";
import ThemeContexttt from "context/page";

import Link from "next/link";

import { useContext, useEffect } from "react";

// async function getData(id) {
//   const res = await fetch(`http://localhost:4000/products/${id}`);
//   return res.json();
// }
// const objData = await getData(params.id);

export default function page({ params }) {
  const {
    loading,
    setloading,
    prodat,
    setprodat,
    deleteProduct,
    laod,
    setlaod,
  } = useContext(ThemeContexttt);

  useEffect(() => {
    fetch(
      `https://product-simpledashboard-nodejs.onrender.com/products/${params.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setprodat(data.product);
        setloading(false);
      });
  }, [params.id]);

  // useEffect(() => {
  //   const getData = async (id) => {
  //     try {
  //       const res = await fetch(`https://product-simpledashboard-nodejs.onrender.com/products`);
  //       const data = await res.json();
  //       const product = data.products.find((item) => item.id === id);
  //       setprodat( product);
  //       console.log(data)
  //     } catch (error) {
  //       console.error("Error fetching product:", error);
  //     }
  //   };

  //   if (params.id) {
  //     getData(params.id);
  //   }
  // }, [params.id]);
  //  useEffect(() => {
  //     const getData = async (id) => {
  //     fetch(`https://product-simpledashboard-nodejs.onrender.com/products/${params.id}`)
  //       .then((res) => res.json())
  //       .then((prodact) => {
  //         setprodat(prodact);
  //       });
  //     }
  //     getData(params.id)
  //     }, [params.id]);

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
              {prodat.mainImage ? (
                <img
                  src={prodat.mainImage.secure_url}
                  className="w-50 h-50"
                  alt="."
                />
              ) : (
                <p>No image available</p>
              )}
            </div>
            <div className="col-md-6">
              <div className="product-details">
                <br />
                {prodat ? (
                  <>
                    <h2>{prodat.name}</h2>
                    <div className="d-flex justify-content-start align-items-center mb-2">
                      <p className="price text-muted fw-bold pe-2 text-decoration-line-through mb-0">
                        ${prodat.price}
                      </p>
                      <span className="badge bg-success me-2">Discount</span>
                      <p className="price text-danger fw-bold mb-0">
                        ${prodat.discount}
                      </p>
                    </div>

                    <p className="description">{prodat.description}</p>
                  </>
                ) : (
                  "xxxx"
                )}
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
                      deleteProduct(prodat._id);
                    }}
                    type="button"
                    className="btn btn-danger"
                  >
                    <FontAwesomeIcon icon={faTrash} /> Delete Product
                  </button>
                )}

                <Link
                  href={`/Updete/${prodat._id}`}
                  type="button"
                  className="btn btn-primary ms-3 my-2 "
                >
                  <FontAwesomeIcon icon={faPen} /> Updete
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footart />
    </>
  );
}
