"use client";
import ThemeContexttt from "context/page";
import { useContext } from "react";

export default function page({ params }) {
  const { addprodat, RemoveProduct, handleChange } = useContext(ThemeContexttt);
  let totle = 0;

  return (
    <>
      {addprodat.map((item) => {
        totle += Number(item.price) * Number(item.amount);
        return (
          <main key={item._id} className="text-center mx-sm-5 my-5 ">
            <section className="cart">
              <article className="d-flex align-items-center justify-content-between mb-4  border rounded shadow-sm">
                <button
                  onClick={() => {
                    RemoveProduct(item._id);
                  }}
                  className="btn btn-danger ms-sm-2"
                >
                  Delete
                </button>

                <p className="mx-2 my-0 name">${item.price}</p>

                <div className="d-flex align-items-center">
                  <button
                    onClick={() => {
                      handleChange(item, -1);
                    }}
                    className="btn btn-info  "
                  >
                    -
                  </button>
                  <div className="quantity mx-1 fw-bold">{item.amount}</div>
                  <button
                    onClick={() => {
                      handleChange(item, +1);
                    }}
                    className="btn btn-info "
                  >
                    +
                  </button>
                </div>

                <p className="my-0 name">{item.name.slice(0, 5)}..</p>
                <img
                loading="lazy"
                  className="rounded me-2 py-1"
                  width={50}
                  height={50}
                  alt=".."
                  src={item.mainImage.secure_url}
                />
              </article>
            </section>
          </main>
        );
      })}

      <section
        style={{ width: "200px", marginTop: "50px", marginBottom: "50px" }}
        className="summary border p-4 rounded shadow-sm container"
      >
        <h1 className="h4">Cart Summary</h1>
        <div className="d-flex justify-content-between">
          <p className="Subtotal mb-0"> Total</p>
          <p className="mb-0 text-danger fw-bold">${totle}</p>
        </div>
      </section>
    </>
  );
}
