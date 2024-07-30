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
          <>
            <main className="text-center container my-5 ">
              <section className="cart">
                <article className="d-flex align-items-center justify-content-between mb-4 p-3 border rounded shadow-sm">
                  <button
                    onClick={() => {
                      RemoveProduct(item.id);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>

                  <p className="mx-2 my-0">${item.price}</p>

                  <div className="d-flex align-items-center">
                    <button
                      onClick={() => {
                        handleChange(item, -1);
                      }}
                      className="btn btn-info px-3"
                    >
                      -
                    </button>
                    <div className="quantity mx-1 fw-bold">{item.amount}</div>
                    <button
                      onClick={() => {
                        handleChange(item, +1);
                      }}
                      className="btn btn-info px-3"
                    >
                      +
                    </button>
                  </div>

                  <p className="my-0 name">{item.title.slice(0, 5)} . .</p>
                  <img
                    className="rounded"
                    width={70}
                    height={70}
                    alt=".."
                    src={item.productImg}
                  />
                </article>
              </section>
            </main>
          </>
        );
      })}

      <section
        style={{ width: "200px", marginTop: "50px" }}
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
