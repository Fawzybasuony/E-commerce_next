"use client";

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import ThemeContexttt from "context/page";
import Footart from "components/Footar/Footart";

export default function page() {
  const { setloading, loading } = useContext(ThemeContexttt);
  const [img, setImg] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [discount, setDiscount] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleFileChange = (e) => {
    setImg(e.target.files[0]);
  };

  const handleAddProduct = async (eo) => {
    eo.preventDefault();
    setloading(true);

    try {
      if (!img) {
        throw new Error("Image file is missing");
      }

      const formData = new FormData();
      formData.append("mainImage", img);
      formData.append("name", title || "Default Title");
      // @ts-ignore
      formData.append("price", price || 0);
      formData.append("description", description || "Default Description");
      // @ts-ignore
      formData.append("discount", discount || 0);
      
      const resAddProduct = await fetch(
        "https://product-simpledashboard-nodejs.onrender.com/products",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await resAddProduct.json();

      if (data.message !== "success") {
        console.error("Failed to add product", data.Error);
        setError(data.Error);
        toast.error(`Failed to add product: ${data.message}`);
        setloading(false);
        return;
      }

      toast.success("Product created successfully");
      setTimeout(() => {
        router.push("/Shop");
        setloading(false);
      }, 1000);
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("An error occurred while adding the product");
      setloading(false);
    }
  };

  return (
    <>
      <h1 className="d-flex justify-content-center my-4">Add Product</h1>
      <section className="container">
        <form onSubmit={handleAddProduct} className="ms-auto me-auto w-50">
          <div className="mb-4">
            <label htmlFor="productImage" className="form-label">
              Product Image:
            </label>
            <input
              onChange={handleFileChange}
              required
              type="file"
              className="form-control"
              id="productImage"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="productTitle" className="form-label">
              Title:
            </label>
            <input
              onChange={(eo) => setTitle(eo.target.value)}
              required
              type="text"
              className="form-control"
              id="productTitle"
            />
            {error && error.includes("name") ? (
              <p className="alert alert-danger mt-2">
                title product already exist
              </p>
            ) : (
              ""
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">
              Price:
            </label>
            <input
              onChange={(eo) => setPrice(eo.target.value)}
              required
              type="text"
              className="form-control"
              id="productPrice"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="productDiscount" className="form-label">
              Discount:
            </label>
            <input
              onChange={(eo) => setDiscount(eo.target.value)}
              required
              type="text"
              className="form-control"
              id="productDiscount"
            />
          </div>

         

          <div className="mb-3">
            <label htmlFor="productDescription" className="form-label">
              Description:
            </label>
            <textarea
              id="productDescription"
              className="form-control"
              onChange={(eo) => setDescription(eo.target.value)}
              required
            />
          </div>

          {loading ? (
            <div
              style={{ width: "1.5rem", height: "1.5rem" }}
              className="spinner-border"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <button type="submit" className="btn btn-primary">
              Create Product
            </button>
          )}
        </form>
      </section>

      <Footart/>
    </>
  );
}
