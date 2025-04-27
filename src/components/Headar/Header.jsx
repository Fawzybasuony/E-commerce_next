"use client";
import "./Header.css";

import {
  faCartShopping,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import ThemeContexttt from "../../context/page";
import Header_info from "./Header-info";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/Firebaseconfig";

import ModelSigneOut from "./ModelSigneOut";

export default function Header({
  isBlogPage = false,
  isContactPage = false,
  isShopPage = false,
  isHomePage = false,
  isAddProductPage = false,
  iscartPage = false,
}) {
  const { addprodat } = useContext(ThemeContexttt);
  const [Showmodel, setShowmodel] = useState(false);
  const [user] = useAuthState(auth);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            <img
              src="/icon_header/logo.png"
              alt="logo"
              style={{ width: "100px" }}
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {user && user.emailVerified && (
              <>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-2">
                  <li className="nav-item">
                    <Link
                      href="/"
                      className={`nav-link mx-lg-3 sign-in ${
                        isHomePage ? "fs-6 fw-bold text-danger" : "text-black"
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/Shop"
                      className={`nav-link mx-lg-3 sign-in ${
                        isShopPage ? "fs-6 fw-bold text-danger" : "text-black"
                      }`}
                    >
                      Shop
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/Blog"
                      className={`nav-link mx-lg-3 sign-in ${
                        isBlogPage ? "fs-6 fw-bold text-danger" : "text-black"
                      }`}
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/contact"
                      className={`nav-link mx-lg-3 sign-in ${
                        isContactPage
                          ? "fs-6 fw-bold text-danger"
                          : "text-black"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/Addproduct"
                      className={`btn btn-outline-secondary mx-lg-3 ${
                        isAddProductPage
                          ? "fs-6 fw-bold text-danger btn-outline-danger"
                          : "text-black"
                      }`}
                    >
                      Add Product <FontAwesomeIcon icon={faUser} />
                    </Link>
                  </li>
                </ul>

                <div className="d-flex align-items-center">
                  <Link href={"/cart"} className="  position-relative">
                    <FontAwesomeIcon
                      style={{ width: "20px", height: "15px" }}
                      icon={faCartShopping}
                      className={`me-3 ${
                        iscartPage ? " fw-bold text-danger " : "text-black"
                      }`}
                    />
                    <span
                      style={{
                        left: " 30%",
                        bottom: "43%",
                        fontSize: "10px",
                      }}
                      className="position-absolute translate-middle text-white badge rounded-pill bg-secondary"
                    >
                      {addprodat.length}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </Link>

                  <button
                    onClick={() => {
                      setShowmodel(true);
                    }}
                    className="btn btn-outline-danger text-secondary p-1"
                  >
                    Sign Out <FontAwesomeIcon icon={faRightToBracket} />
                  </button>

                  {/* {user.email == "fijotey488@mongrec.com" && */}
                  <h5 className="pt-2 ps-2 text-secondary fs-6">
                    Welcome: <span>Admin ♥</span>
                  </h5>
                  {/* } */}
                </div>
              </>
            )}

            {!user?.emailVerified && (
              <div className="d-flex ms-auto mt-2">
                <ul className="navbar-nav flex-row">
                  <li className="nav-item me-3">
                    <Link
                      href="/Register/SigneUp"
                      className="btn btn-outline-primary"
                    >
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/Register/SigneIn"
                      className="btn btn-outline-success"
                    >
                      Sign In
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* ---- Header Info Component ---- */}
      <Header_info />

      {Showmodel && (
        <ModelSigneOut Showmodel_={Showmodel} setShowmodel_={setShowmodel} />
      )}
    </>
  );
}
