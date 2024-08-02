"use client";

import ThemeContexttt from "context/page";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image.js";
import Laoding from "components/Laoding";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export default function Page({ params }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState([]);

  const router = useRouter();

  const { setloading, prodat, setprodat, laod, setlaod,loading } =
    useContext(ThemeContexttt);

  useEffect(() => {
    const getData = async (id) => {
      try {
        const res = await fetch(`https://data-murex-nu.vercel.app/db.json/${params.id}`);
        const data = await res.json();
        setprodat(data);
        setTitle(data.title);
        setPrice(data.price);
        setDescription(data.description);
        setImg(data.img);
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
      title,
      price,
      description,
      img,
    };

    try {
      const res = await fetch(`https://data-murex-nu.vercel.app/db.json/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      setprodat(data);
      toast.success("Product updated successfully");
      setTimeout(() => {
        router.push("/");
        setloading(false);
      }, 1000);
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Error updating product: " + error.message);
    }
  };

  setTimeout(() => {
    setlaod(false);
  }, 500);

  return (
    <>
      {laod ? (
        <Laoding />
      ) : (
        <form onSubmit={handleEdit} className="my-5 w-75 m-auto">
          {prodat && (
            <Image
              priority
              width={200}
              height={200}
              quality={100}
              alt="Product Image"
              src={!`/${img}` ? `/${prodat.img}` : `/${prodat.productImg}`}
            />
          )}
          <div className="mb-3 mt-4">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              id="title"
              type="text"
              className="form-control"
              defaultValue={prodat.title}
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
