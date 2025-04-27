"use client";

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
        <div className="modal-overlay" onClick={() => setShowmodel_(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h5>Confirm Sign Out</h5>
              <button
                className="btn-close"
                onClick={() => setShowmodel_(false)}
              ></button>
            </div>

            <div className="modal-body">
              <p>Are you sure you want to sign out?</p>
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                onClick={() => setShowmodel_(false)}
              >
                Cancel
              </button>
              <button className="btn btn-danger" onClick={handleSignOut}>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
