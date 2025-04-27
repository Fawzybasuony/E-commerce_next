"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/Firebaseconfig";

export default function ModelSigneOut({ Showmodel_, setShowmodel_ }) {
  const [signOut] = useSignOut(auth);
  const router = useRouter();

  const handleSignOut = async () => {
    const success = await signOut();
    if (success) {
      setShowmodel_(false);
      router.push("/");
      toast.success("You are signed out!");
    }
  };

  return (
    <>
      {Showmodel_ && (
        <>
          <div className="parent-of-model"></div>
          <div className="modal fade show d-block">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Confirm Sign Out</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => {
                      setShowmodel_(false);
                    }}
                  ></button>
                </div>

                <div className="modal-body">
                  <p>Are you sure you want to sign out?</p>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setShowmodel_(false);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
