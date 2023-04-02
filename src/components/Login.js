import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/fire-config";
import { NavLink } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailLog, setEmailLog] = useState("");
  const [passLog, setPassLog] = useState("");

  const Navigate = useNavigate();

  function emailHandler(event) {
    setEmail(event.target.value);
  }
  function passHandler(event) {
    setPass(event.target.value);
  }
  function emailLogHandler(event) {
    setEmailLog(event.target.value);
  }
  function passLogHandler(event) {
    setPassLog(event.target.value);
  }

  async function signUpHandler(event) {
    event.preventDefault();

    const Email = email;
    const Password = pass;
    console.log(Email);
    try {
      await createUserWithEmailAndPassword(auth, Email, Password);
      alert("Signed Up");
      console.log("signed up");
      Navigate("/home");
    } catch (error) {
      console.log(`There was an error: ${error}`);
      alert(error.message + " Try again.");
    }
    setEmail("");
    setPass("");
  }
  async function signInHandler(event) {
    event.preventDefault();

    const Email = emailLog;
    const Password = passLog;
    console.log(Email);
    try {
      await signInWithEmailAndPassword(auth, Email, Password);
      alert("Signed In");
      console.log("Signed In as " + Email);
      Navigate("/home");
    } catch (error) {
      console.log(`There was an error: ${error}`);
      alert(error.message + " Try again.");
    }
    setEmailLog("");
    setPassLog("");
  }

  return (
    <div>
      <p className="text-center font-bold text-4xl">Software Component Cataloguing Software  </p>
      <form
        onSubmit={signUpHandler}
        className="mt-32 flex items-center justify-center gap-4"
      >
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className="border-2 border-black rounded"
          value={email}
          onChange={emailHandler}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          className="border-2 border-black rounded"
          value={pass}
          onChange={passHandler}
        />
        <button className="bg-blue-700 p-2 text-white font-bold text-1xl rounded ">
          Sign up
        </button>
      </form>
      {/* ----------------------------------------------------------------------------------------- */}
      <form
        onSubmit={signInHandler}
        className="mt-32 flex items-center justify-center gap-4"
      >
        <label htmlFor="em">Email:</label>
        <input
          type="email"
          id="em"
          className="border-2 border-black rounded"
          value={emailLog}
          onChange={emailLogHandler}
        />
        <label htmlFor="pass">Password:</label>
        <input
          type="password"
          id="pass"
          className="border-2 border-black rounded"
          value={passLog}
          onChange={passLogHandler}
        />
        <button className="bg-blue-700 p-2 text-white font-bold text-1xl rounded ">
          Sign in
        </button>
      </form>
      <div className="text-center mt-10">
        <NavLink to="/reset" className="underline text-blue-500">Forgot Password</NavLink>
      </div>
    </div>
  );
}
