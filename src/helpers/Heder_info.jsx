import Link from "next/link";
import React from "react";
import  "./Heder_.css";
export default function Heder_info({ title }) {
  return (
    <>
      <div className="row mx-0">
        {/* photo */}
        <img className="col-12 " src="/images/add.jpg" alt="decwont" />
        {/* title */}
        <div className="col-12 page-breadcrumb ">
          <h2>
            {title}
            <span>.</span>
          </h2>
          <Link href="#">Home</Link>
          <Link href="#">Dresses</Link>
          <Link className="active" href="#">
            Night Dresses
          </Link>
        </div>
      </div>
    </>
  );
}
