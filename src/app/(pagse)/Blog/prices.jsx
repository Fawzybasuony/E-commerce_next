"use client";
import { useContext } from "react";
import ThemeContexttt from "../../../context/page";
import "./Blog.css";

export default function Prices() {
  const { addprodat, totle } = useContext(ThemeContexttt);

  return (
    <>
      <div className="order-table">
        <div className="cart-item">
          <span>Product</span>
          <p className="product-name">Your purchases</p>
        </div>

        <div className="cart-item">
          <span>Quantity</span>
          <p>{addprodat.length}</p>
        </div>
        <div className="cart-item">
          <span>Shipping</span>
          <p> {addprodat.length}</p>
        </div>
        <div className="cart-total mt-0">
          <span>Total</span>
          <p>$ {totle}</p>
        </div>
      </div>
    </>
  );
}
