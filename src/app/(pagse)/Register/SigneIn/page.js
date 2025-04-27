// @ts-nocheck
"use client";

import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

import ThemeContexttt from "../../../../context/page";
import { auth } from "../../../../Firebase/Firebaseconfig";

import Header from "../../../../components/Headar/Header";

export default function Product() {
  const { setloading, loading } = useContext(ThemeContexttt);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setloading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      toast.success("Welcome! You are signed in now!");
      router.push("/");
    } catch (error) {
      const errorCode = error.code;
      let message = "Please check your email & password";

      switch (errorCode) {
        case "auth/invalid-email":
        case "auth/user-not-found":
          message = "Wrong Email";
          break;
        case "auth/wrong-password":
          message = "Wrong Password";
          break;
        case "auth/too-many-requests":
          message = "Too many requests, please try again later";
          break;
      }
      toast.error(message);
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      <Header />
      <form className="w-50 m-auto my-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email address
          </label>
          <input
            id="emailInput"
            type="email"
            className="form-control"
            {...register("email", { required: "Email is required" })}
            aria-describedby="emailHelp"
          />
          {errors.email && (
            <div className="text-danger mt-1">{errors.email.message}</div>
          )}
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">
            Password
          </label>
          <input
            id="passwordInput"
            type="password"
            className="form-control"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <div className="text-danger mt-1">{errors.password.message}</div>
          )}
        </div>

        {loading ? (
          <div
            className="spinner-border text-primary"
            role="status"
            style={{ width: "1.5rem", height: "1.5rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <button type="submit" className="btn btn-primary">
            Sign In
            <FontAwesomeIcon
              icon={faSignInAlt}
              className="ms-2"
              style={{ width: "20px", height: "15px" }}
            />
          </button>
        )}
      </form>
    </>
  );
}
