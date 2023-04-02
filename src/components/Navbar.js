import React from "react";
import { Link, NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/fire-config";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const Navigate = useNavigate();

  async function signOutHandler() {
    try {
      await signOut(auth);
      alert("Signed Out");
      console.log("Signed Out ");
      Navigate("/");
    } catch (error) {
      console.log(`There was an error: ${error}`);
      alert(error.message + " Try again.");
    }
  }

  return (
    <div className="p-4 bg-gray-400">
      <nav>
        <div className="flex justify-between">
          <div className="text-2xl">
            <NavLink to="/home" className="underline">
              SCCS
            </NavLink>
          </div>
          <div className="flex justify-end gap-6">
            <div>
              <NavLink to="/addcomponent" className="underline">
                Add Component
              </NavLink>
            </div>
            <div>
              <NavLink to="/admin" className="underline">
                Admin
              </NavLink>
            </div>
            <div>
              <button
                className="border-2 border-black bg-red-700 rounded w-20"
                onClick={signOutHandler}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
