// @ts-nocheck
"use client";

import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { toast } from "react-toastify";

import { auth } from "../../../../Firebase/Firebaseconfig";
import ThemeContexttt from "../../../../context/page";
import Header from "../../../../components/Headar/Header";

export default function SignUpPage() {
  const router = useRouter();
  const { setname } = useContext(ThemeContexttt);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const currentUser = userCredential.user;

      await updateProfile(currentUser, { displayName: data.userName });
      await sendEmailVerification(currentUser);

      setname(data.userName);  

      toast.success("Account created! Please verify your email to continue...");
      reset(); 
      router.push("/");
    } catch (error) {
      console.error(error.code);
      let message = "";

      switch (error.code) {
        case "auth/email-already-in-use":
          message = "Email already in use.";
          break;
        case "auth/invalid-email":
          message = "Invalid email address.";
          break;
        case "auth/weak-password":
          message = "Password should be at least 6 characters.";
          break;
        default:
          message = "Something went wrong. Please try again.";
      }

      toast.error(message);
    }
  };

  return (
    <>
    
    <Header/>

      <form onSubmit={handleSubmit(onSubmit)} className="w-50 m-auto my-5">
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            User Name
          </label>
          <input
            id="userName"
            type="text"
            className="form-control"
            {...register("userName", { required: "User Name is required" })}
          />
          {errors.userName && (
            <div className="text-danger mt-1">{errors.userName.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            id="email"
            type="email"
            className="form-control"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <div className="text-danger mt-1">{errors.email.message}</div>
          )}

          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="form-control"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <div className="text-danger mt-1">{errors.password.message}</div>
          )}
        </div>

        {isSubmitting ? (
          <div
            className="spinner-border text-primary"
            style={{ width: "1.5rem", height: "1.5rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <button type="submit" className="btn btn-primary">
            Sign Up{" "}
            <FontAwesomeIcon icon={faUserPlus} style={{ marginLeft: "8px" }} />
          </button>
        )}

        <p className="account mt-3">
          Already have an account? <a href="/Register/SigneIn">Sign in</a>
        </p>
      </form>

 
    </>
  );
}
