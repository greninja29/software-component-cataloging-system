import React from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../config/fire-config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Reset() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  function emailHandler(event) {
    setEmail(event.target.value);
  }

  async function resetHandler() {
    const Email = email;

    console.log(Email);

    try {
      if (Email != "") {
        await sendPasswordResetEmail(auth, Email);
        alert("We have sent a mail with a link to get back into your account.");
      }
    } catch (error) {
      console.log(`There was an error: ${error}`);
      alert(error.message + " Try again.");
    }
  }

  return (
    <div>
      <div className=" mt-32 flex flex-col gap-5 items-center">
        <p className="font-bold text-xl">Find Your Account</p>
        <p>Please enter your email address to search for your account.</p>
        <div>
          <label htmlFor="email">Email:    </label>
          <input
            type="email"
            id="email"
            className="border-2 border-black rounded w-80"
            value={email}
            onChange={emailHandler}
          />
        </div>
        <button
          className="bg-blue-700 p-2 text-white font-bold text-1xl rounded "
          onClick={resetHandler}
        >
          Reset Password
        </button>
        <button
          className="bg-blue-700 p-2 text-white font-bold text-1xl rounded "
          onClick={() => navigate("/")}
        >
          Back to login
        </button>
      </div>
    </div>
  );
}

export default Reset;
