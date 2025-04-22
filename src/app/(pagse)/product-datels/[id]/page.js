"use client";

import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footart from "../../.././../components/Footar/Footar";
import Laoding from "../../.././../components/Laoding";
import ThemeContexttt from "../../../../context/page";

import Link from "next/link";

import { useContext, useEffect } from "react";
import { useParams } from "next/navigation";

// async function getData(id) {
//   const res = await fetch(`http://localhost:4000/products/${id}`);
//   return res.json();
// }
// const objData = await getData(params.id);

export default function page() {
  const params = useParams();

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
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_KEY}/${params.id}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await res.json();
        setprodat(data.product);
        setloading(false);

        setTimeout(() => {
          setlaod(false);
        }, 500);
      } catch (error) {
        console.error("Error fetching product:", error);
        setloading(false);
        setlaod(false);
      }
    };

    if (params.id) {
      fetchData();
    }
  }, [params.id]);

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
                  className="w-75 h-50 mx-md-5 rounded "
                  alt={prodat.name}
                />
              ) : (
                <p>No image available</p>
              )}
            </div>
            <div className="col-md-6">
              <div className="product-details  px-5">
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

                    <div className="mt-3">
                      <p className="text-muted mb-1">
                        <strong>Created At:</strong>{" "}
                        {new Date(prodat.createdAt).toLocaleString()}
                      </p>
                      <p className="text-muted">
                        <strong>Updated At:</strong>{" "}
                        {new Date(prodat.updatedAt).toLocaleString()}
                      </p>
                    </div>
                  </>
                ) : (
                  "Loading..."
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
                  className="btn btn-primary ms-3"
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
