// "use client";

// import ThemeContexttt from "context/page";
// import { useContext, useState, useEffect } from "react";
// import { toast } from "react-toastify";

// export default function page() {
//   const { setloading, seterror, error, loading } = useContext(ThemeContexttt);

//   const [img, setImg] = useState(null);
//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setdescription] = useState("");

//   // const uploadImageToCloudinary = async (img) => {
//   //   if (!img) {
//   //     throw new Error("No image provided");
//   //   }

//   //   const formData = new FormData();
//   //   formData.append("file", img);
//   //   formData.append("upload_preset", "FAWZYYY");

//   //   const res = await fetch(
//   //     "https://api.cloudinary.com/v1_1/dn1lcimr5/image/upload",
//   //     {
//   //       method: "POST",
//   //       body: formData,
//   //     }
//   //   );

//   //   if (!res.ok) {
//   //     const errorData = await res.json();
//   //     console.log("Upload Error:", errorData);
//   //     throw new Error(`Failed to upload image: ${errorData.error.message}`);
//   //   }

//   //   const data = await res.json();
//   //   return data.secure_url;
//   // };

//   // const handleSubmit = async (eo) => {
//   //   eo.preventDefault();
//   //   setloading(true);
//   //   seterror(null);

//   //   if (!title || !price || !description) {
//   //     seterror("All input must be filled");
//   //     setloading(false);
//   //     return;
//   //   }

//   //   try {
//   //     const imageUrl = await uploadImageToCloudinary(img);

//   //     const formData = {
//   //       mainImage: imageUrl,
//   //       title: title,
//   //       price: price,
//   //       description: description,
//   //     };

//   //     console.log(formData);

//   //     const resAddProduct = await fetch(
//   //       "https://product-simpledashboard-nodejs.onrender.com/products",
//   //       {
//   //         method: "POST",
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //         },
//   //         body: JSON.stringify(formData),
//   //       }
//   //     );

//   //     const data = await resAddProduct.json();

//   //     if (resAddProduct.ok) {
//   //       eo.target.reset();
//   //       toast.success(data.message);
//   //     } else {
//   //       setloading(false);
//   //       seterror("Failed to add Product, Please try again");
//   //     }
//   //   } catch (error) {
//   //     setloading(false);
//   //     seterror("Failed to upload image, Please try again");
//   //   }

//   //   setloading(false);
//   // };

//   const handleSubmit = async (eo) => {
//     eo.preventDefault();
//     setloading(true);
//     seterror(null);

//     if (!title || !price || !description) {
//       seterror("All input must be filled");
//       setloading(false);
//       return;
//     }

//     try {
//       const imageUrl = await uploadImageToCloudinary(img);

//       const formData = {
//         mainImage: imageUrl,
//         name: title,
//         price: price,
//         description: description,
//       };

//       console.log("Form data:", formData);

//       const resAddProduct = await fetch("https://product-simpledashboard-nodejs.onrender.com/products", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await resAddProduct.json();
//       console.log("Server response:", data);

//       if (resAddProduct.ok) {
//         eo.target.reset();
//         toast.success(data.message);
//       } else {
//         setloading(false);
//         seterror("Failed to add Product, Please try again");
//       }

//     } catch (error) {
//       setloading(false);
//       seterror(`Error: ${error.message}`);
//     }

//     setloading(false);
//   };

//   const uploadImageToCloudinary = async (img) => {
//     if (!img) {
//       throw new Error("No image provided");
//     }

//     const formData = new FormData();
//     formData.append("file", img);
//     formData.append("upload_preset", "FAWZYYY"); // Ensure this is correct

//     const res = await fetch("https://api.cloudinary.com/v1_1/dn1lcimr5/image/upload", {
//       method: "POST",
//       body: formData,
//     });

//     if (!res.ok) {
//       const errorData = await res.json();
//       console.log("Upload Error:", errorData);
//       throw new Error(`Failed to upload image: ${errorData.error.message}`);
//     }

//     const data = await res.json();
//     return data.secure_url;
//   };

//   return (
//     <>
//       <h1 className="d-flex justify-content-center my-4">Add product</h1>
//       <form onSubmit={handleSubmit} className="ms-auto me-auto w-50">
//         <div className="mb-4">
//           <label htmlFor="username" className="form-label">
//             Product Image :
//           </label>
//           <input
//             onChange={(eo) => {
//               setImg(eo.target.files[0]);
//             }}
//             required
//             type="file"
//             className="form-control"
//             id="username"
//             aria-describedby="emailHelp"
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">
//             Title
//           </label>
//           <input
//             onChange={(eo) => {
//               setTitle(eo.target.value);
//             }}
//             required
//             type="text"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">
//             price
//           </label>
//           <input
//             onChange={(eo) => {
//               setPrice(eo.target.value);
//             }}
//             required
//             type="text"
//             className="form-control"
//             id="exampleInputPassword1"
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="description" className="form-label">
//             Description
//           </label>
//           <textarea
//             id="description"
//             className="form-control"
//             onChange={(eo) => {
//               setdescription(eo.target.value);
//             }}
//           />
//         </div>

//         {loading ? (
//           <div
//             style={{ width: "1.5rem", height: "1.5rem" }}
//             className="spinner-border"
//             role="status"
//           >
//             <span className="visually-hidden">Loading...</span>
//           </div>
//         ) : (
//           <button type="submit" className="btn btn-primary">
//             Create product
//           </button>
//         )}
//       </form>
//     </>
//   );
// }
// function uploadImageToCloudinary(img) {
//   throw new Error("Function not implemented.");
// }

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
