"use client";

import ThemeContexttt from "context/page";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Laoding from "components/Laoding";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export default function Page({ params }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState([]);

  const router = useRouter();

  const { setloading, prodat, setprodat, laod, setlaod, loading } =
    useContext(ThemeContexttt);

  // useEffect(() => {
  //   const getData = async (id) => {
  //     try {
  //       const res = await fetch(
  //         `https://product-simpledashboard-nodejs.onrender.com/products/${params.id}`
  //       );
  //       if (!res.ok) {
  //         throw new Error("Product not found");
  //       }
  //       const data = await res.json();
  //       // console.log("Fetched product data:", data); // عرض البيانات في الكونسول للتأكد

  //       setprodat(data);
  //       setTitle(data.name);
  //       setPrice(data.price);
  //       setDescription(data.description);
  //       setImg(data.mainImage.secure_url); // تأكد من `mainImage` و `secure_url`
  //     } catch (error) {
  //       console.error("Error fetching product:", error);
  //     }
  //   };

  //   if (params.id) {
  //     getData(params.id);
  //   }
  // }, [params.id]);

  useEffect(() => {
    const getData = async (id) => {
      try {
        const res = await fetch(
          `https://product-simpledashboard-nodejs.onrender.com/products/${params.id}`
        );
        if (!res.ok) {
          throw new Error("Product not found");
        }
        const data = await res.json();
        // Check if mainImage and secure_url exist
        if (data.mainImage && data.mainImage.secure_url) {
          setprodat(data);
          setImg(data.mainImage.secure_url); // Assuming setImg is your state for image URL
        } else {
          console.error("mainImage or secure_url is missing");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (params.id) {
      getData(params.id);
    }
  }, [params.id]);

  const handleEdit = async (e) => {
    e.preventDefault();
    setloading(true);
    const updatedProduct = {
      ...prodat,
      name: title,
      price,
      description,
      img,
    };

    try {
      const res = await fetch(
        `https://product-simpledashboard-nodejs.onrender.com/products/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to update product.");
      }

      const data = await res.json();
      toast.success("Product has been deleted successfully");
      setTimeout(() => {
        setloading(false);
        router.push("/Shop");
      }, 500);
    } catch (error) {
      console.error("Error updating product:");
    }
  };

  const imageUrl =
    prodat.mainImage && prodat.mainImage.secure_url
      ? prodat.mainImage.secure_url
      : "default-image-url";

  return (
    <>
      {laod ? (
        <Laoding />
      ) : (
        <form onSubmit={handleEdit} className="my-5 w-75 m-auto">
          {prodat && imageUrl && (
            <img src={imageUrl} className="w-25 h-25" alt="Product Image" />
          )}
          {!imageUrl && <p>No image available</p>}

          <div className="mb-3 mt-4">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              id="title"
              type="text"
              className="form-control"
              defaultValue={prodat.name}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              id="price"
              type="text"
              className="form-control"
              defaultValue={prodat.price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              className="form-control"
              defaultValue={prodat.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {loading ? (
            <div
              style={{ width: "1.5rem", height: "1.5rem" }}
              className="spinner-border text-primary"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <button type="submit" className="btn btn-primary">
              <FontAwesomeIcon icon={faPen} /> Update
            </button>
          )}
        </form>
      )}
    </>
  );
}
