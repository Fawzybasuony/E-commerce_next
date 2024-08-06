"use client";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeContexttt from "context/page";

import { useContext } from "react";

export default function Product() {
  const { setemail, setpassword, error, loading, admin } =
    useContext(ThemeContexttt);

  return (
    <>
      <form className="w-50  m-auto mt-5">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={(eo) => {
              setemail(eo.target.value);
            }}
            required
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={(eo) => {
              setpassword(eo.target.value);
            }}
            required
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        {loading ? (
          <div
            style={{ width: "1.5rem", height: "1.5rem" }}
            className="spinner-border text-primary"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <button
            onClick={() => {
              admin();
            }}
            type="button"
            className="btn btn-primary"
          >
            SigneIn{" "}
            <FontAwesomeIcon
              style={{ width: "20px", height: "15px" }}
              icon={faSignInAlt}
            />
          </button>
        )}
        <p className="text-danger mt-2"> {error} </p>
      </form>
    </>
  );
}
