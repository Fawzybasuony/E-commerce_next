"use client";

import ThemeContexttt from "context/page";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

export default function page() {
  const {
    setname,
    setemail,
    setpassword,
    setloading,
    seterror,
    error,
    loading,
    name,
    email,
    password,
    data,
    setdata,
    prodat,
    setprodat,
    deleteProduct,
  } = useContext(ThemeContexttt);

  const [img, setimg] = useState(null);
  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  const [description, setdescription] = useState(null);
  const router = useRouter();

  // jsone serverطريقه تانيه لاضافه  ف
  // const xxxx = async (eo) => {
  //   eo.preventDefault();

  //   // تحويل الصورة إلى base64 string
  //   const toBase64 = (file) => new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = error => reject(error);
  //   });

  //   const imgBase64 = await toBase64(img);

  //   // إرسال البيانات إلى json-server
  //   const productData = {
  //     productImg: imgBase64,
  //     title: title,
  //     price: price,
  //     description: description,
  //   };

  //   const resAddProduct = await fetch("http://localhost:4000/products", {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(productData),
  //   });

  //   const data = await resAddProduct.json();
  //   console.log(data);
  //   router.push('/');
  // };

  const xxxx = async (eo) => {
    eo.preventDefault();
    setloading(true);

    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

    // مسار الصورة
    const imagePath = `images/${img.name}`; // استبدل هذا بالمسار الفعلي للصورة على الخادم

    // إرسال البيانات إلى json-server
    const productData = {
      productImg: imagePath,
      title: title,
      price: price,
      description: description,
    };

    const resAddProduct = await fetch("http://192.168.1.4:4000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    const data = await resAddProduct.json();
    toast.success("Product Create successfully");
    setTimeout(() => {
      router.push("/Shop");
      setloading(false);
    }, 1000);
  };

  return (
    <>

      <h1 className="d-flex justify-content-center my-4">Add product</h1>
      <form onSubmit={xxxx} className="ms-auto me-auto w-50">
        <div className="mb-4">
          <label htmlFor="username" className="form-label">
            Product Image :
          </label>
          <input
            onChange={(eo) => {
              setimg(eo.target.files[0]);
            }}
            required  
            type="file"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            onChange={(eo) => {
              setTitle(eo.target.value);
            }}
            required
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            price
          </label>
          <input
            onChange={(eo) => {
              setPrice(`${eo.target.value}`);
            }}
            required
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            className="form-control"
            onChange={(eo) => {
              setdescription(eo.target.value);
            }}
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
            Create product
          </button>
        )}
      </form>
    </>
  );
}
