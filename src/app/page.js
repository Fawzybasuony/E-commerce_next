"use client";

import { Suspense } from "react";
import Laoding from "../components/Laoding";
import Product from "../components/product/Product";
import Slider_Heder from "../components/Slider_Heder/Slider_Heder";
import { auth } from "../Firebase/Firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "../components/Headar/Header";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <Laoding />;
  if (error)
    return (
      <h1 className="text-danger text-center mt-5">Something went wrong 💥</h1>
    );

  if (!user) {
    return (
      <>
        <Header />
        <Slider_Heder />
        <p className="d-flex justify-content-center w-full fs-3 fw-bold my-5 text-danger">
          Please sign in to continue...
        </p>
      </>
    );
  }

  if (!user.emailVerified) {
    return (
      <>
        <Header />

        <Slider_Heder />
        <p className="text-center mt-4 fs-4">
          Welcome, <strong>{user.displayName}</strong> 🧡
        </p>
        <p className="d-flex justify-content-center w-full fs-3 fw-bold my-3 text-warning">
          Please verify your email to continue ✋
        </p>
      </>
    );
  }

  return (
    <>
      <Header isHomePage={true} />
      <center>
        <Suspense fallback={<Laoding /> }>
          <Slider_Heder />
          <Product />
        </Suspense>
      </center>
    </>
  );
}
