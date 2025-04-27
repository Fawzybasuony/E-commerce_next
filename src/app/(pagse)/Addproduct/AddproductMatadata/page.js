// @ts-nocheck
"use client";

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import ThemeContexttt from "../../../../context/page";
import { useForm } from "react-hook-form";

export default function page() {
  const { setloading, loading } = useContext(ThemeContexttt);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    if (!data.img[0]) {
      toast.error("Please upload a product image.");
      return;
    }

    setloading(true);

    try {
      const formData = new FormData();
      formData.append("mainImage", data.img[0]);
      formData.append("name", data.title);
      formData.append("price", data.price);
      formData.append("description", data.description);
      formData.append("discount", data.discount);

      const res = await fetch(process.env.NEXT_PUBLIC_API_KEY, {
        method: "POST",
        body: formData,
      });

      const resData = await res.json();

      if (resData.message !== "success") {
        if (resData.Error?.includes("name")) {
          setError("title", {
            type: "manual",
            message: "Title already exists.",
          });
        }
        toast.error(`Error: ${resData.message}`);
      } else {
        toast.success("Product created successfully!");
        reset();
        setTimeout(() => {
          router.push("/Shop");
        }, 1000);
      }
    } catch (err) {
      console.error(err);
      toast.error("An unexpected error occurred.");
    } finally {
      setloading(false);
    }
  };

  return (
    <section className="container py-5">
      <form onSubmit={handleSubmit(onSubmit)} className="ms-auto me-auto w-75">
        {/* Image Upload */}
        <div className="mb-4">
          <label htmlFor="img" className="form-label">
            Product Image:
          </label>
          <input
            type="file"
            id="img"
            className="form-control"
            {...register("img", { required: "Image is required" })}
          />
          {errors.img && (
            <p className="text-danger mt-2">{errors.img.message}</p>
          )}
        </div>

        {/* Title Input */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            id="title"
            className="form-control"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className="text-danger mt-2">{errors.title.message}</p>
          )}
        </div>

        {/* Price Input */}
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price:
          </label>
          <input
            type="number"
            id="price"
            className="form-control"
            {...register("price", { required: "Price is required" })}
          />
          {errors.price && (
            <p className="text-danger mt-2">{errors.price.message}</p>
          )}
        </div>

        {/* Discount Input */}
        <div className="mb-3">
          <label htmlFor="discount" className="form-label">
            Discount:
          </label>
          <input
            type="number"
            id="discount"
            className="form-control"
            {...register("discount", { required: "Discount is required" })}
          />
          {errors.discount && (
            <p className="text-danger mt-2">{errors.discount.message}</p>
          )}
        </div>

        {/* Description Input */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea
            id="description"
            className="form-control"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <p className="text-danger mt-2">{errors.description.message}</p>
          )}
        </div>

        {/* Submit Button or Loader */}
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
            Create Product
          </button>
        )}
      </form>
    </section>
  );
}
