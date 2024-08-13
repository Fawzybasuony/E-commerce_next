"use client";
import "./Hedar.css";

import {
  faCartShopping,
  faRightToBracket,
  faSignInAlt,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeContexttt from "context/page";
import Link from "next/link";
import { useContext, useEffect } from "react";

export default function header() {
  const { name, data, addprodat } = useContext(ThemeContexttt);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
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
            <div className="logo mt-3">
              <Link href="/">
                <img src="img/logo.png" alt="." />
              </Link>
            </div>

            {!data ? (
              <>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-2">
                  <li className="nav-item"></li>
                  {/* //////////// */}
                  <li className="nav-item">
                    <Link href="/" className={`text-black mt-2 m-lg-0 mx-lg-5`}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/Shop"
                      className={`text-black mt-2 m-lg-0 mx-lg-5`}
                    >
                      Shop
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/Blog"
                      className={`text-black mt-2 m-lg-0 mx-lg-5`}
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item text-black">
                    <Link
                      href="/contact"
                      className={`text-black mt-2 m-lg-0 mx-lg-5`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>

                <Link
                  href={"/cart"}
                  className="me-2 mb-2 mb-lg-0  btn btn-light position-relative"
                >
                  <FontAwesomeIcon
                    style={{ width: "20px", height: "15px" }}
                    icon={faCartShopping}
                  />
                  <span
                    style={{
                      left: " 53%",
                      top: "5px",
                      borderRadius: "80%",
                      color: "black",
                    }}
                    className="position-absolute  translate-middle badge rounded-pill"
                  >
                    {addprodat.length}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </Link>

                <li className="nav-item  mt-1">
                  <Link
                    href="/Addproduct"
                    className={`text-black m-lg-0 mx-lg-5 p-1`}
                    style={{
                      border: "solid 3px #B0BCC2",
                      borderRadius: "20px",
                    }}
                  >
                    Add product
                    <FontAwesomeIcon
                      style={{ width: "20px", height: "15px" }}
                      icon={faUser}
                    />
                  </Link>
                </li>
              </>
            ) : (
              ""
            )}
            {data ? (
              <>
                <li className="nav-item  mt-1 me-2">
                  <Link
                    href={""}
                    onClick={() => {
                      window.location.href = "/";
                    }}
                    className={`text-body-secondary  p-1 pe-3 ps-2`}
                    style={{
                      border: "solid 3px #B0BCC2",
                      borderRadius: "20px",
                
                    }}
                  >
                    Signe Out
                    <FontAwesomeIcon
                      style={{ width: "20px", height: "15px" }}
                      icon={faRightToBracket}
                    />
                  </Link>
                </li>

                <h5 className="ms-lg-2 mt-3 text-secondary">
                  Welcome :<span> Admin</span>
                </h5>
              </>
            ) : (
              <>
                {/* <div className="d-flex float-end">
                  <li className="nav-item  mt-2 me-2">
                    <Link
                      className={`nav-link p-1`}
                      style={{
                        border: "solid 3px #B0BCC2",
                        borderRadius: "20px",
                      }}
                      href="/Register"
                    >
                      Register{" "}
                      <FontAwesomeIcon
                        style={{ width: "20px", height: "15px" }}
                        icon={faUserPlus}
                      />
                    </Link>
                  </li>


                  <li className="nav-item mt-2 me-2">
                      <Link
                        className={`nav-link p-1`}
                        style={{
                          border: "solid 3px #B0BCC2",
                          borderRadius: "20px",
                        }}
                        href="/signeIn"
                      >
                        signe In{" "}
                        <FontAwesomeIcon
                          style={{ width: "20px", height: "15px" }}
                          icon={faSignInAlt}
                        />
                      </Link>
                  </li>
                </div> */}
                <div className="container mt-2">
                  <div className="row">
                    <div className="col-12 d-flex justify-content-end align-items-center">
                      <ul className="navbar-nav d-flex flex-column flex-sm-row">
                        <li className="nav-item mb-3 mb-sm-0 me-sm-3">
                          <Link
                            className="nav-link p-1"
                            style={{
                              border: "solid 3px #B0BCC2",
                              borderRadius: "20px",
                            }}
                            href="/Register"
                          >
                            Register{" "}
                            <FontAwesomeIcon
                              style={{ width: "20px", height: "15px" }}
                              icon={faUserPlus}
                            />
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link p-1"
                            style={{
                              border: "solid 3px #B0BCC2",
                              borderRadius: "20px",
                            }}
                            href="/signeIn"
                          >
                            signe In{" "}
                            <FontAwesomeIcon
                              style={{ width: "20px", height: "15px" }}
                              icon={faSignInAlt}
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
      {/* /////// */}
      <div className="header-info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 p-1">
              <div className="header-item">
                <img src="img/icons/delivery.png" alt="." />
                <p>Free shipping on orders over $30 in USA</p>
              </div>
            </div>
            <div className="col-md-4 p-2 text-left text-lg-center">
              <div className="header-item">
                <img src="img/icons/voucher.png" alt="." />
                <p>20% Student Discount</p>
              </div>
            </div>
            <div className="col-md-4 p-1 text-left text-xl-right">
              <div className="header-item">
                <img src="img/icons/sales.png" alt="." />
                <p>30% off on dresses. Use code: 30OFF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
