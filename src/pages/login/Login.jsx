import React, { useState } from "react";
import assets from "../../../assets/assets.js";

function Login() {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <div
      className={`min-h-dvh bg-[url(/background.png)] bg-no-repeat bg-cover flex justify-evenly items-center`}
    >
      <img src={assets.logo_big} alt="" className="w-[max(20vw,200px)]" />
      <form className="bg-white p-8 rounded-lg flex flex-col gap-4 min-w-[300px] min-h-[400px] shadow-lg">
        <h2 className="text-2xl font-medium">{currentState}</h2>
        {currentState === "Sign Up" ? (
          <input
            className="px-2 py-2.5 border-2 border-solid border-blue-50 rounded-lg outline-blue-200"
            type="text"
            placeholder="username"
            required
          />
        ) : null}

        <input
          className="px-2 py-2.5 border-2 border-solid border-blue-50 rounded-lg outline-blue-200"
          type="email"
          placeholder="email"
          required
        />
        <input
          className="px-2 py-2.5 border-2 border-solid border-blue-50 rounded-lg outline-blue-200"
          type="password"
          placeholder="Password"
          required
        />
        <button
          className="p-2.5 bg-blue-600 text-white text-lg font-normal rounded-sm cursor-pointer"
          type="submit"
        >
          {currentState === "Sign Up" ? "Create Account" : "Login Now"}
        </button>
        <div className="flex gap-1 text-md accent-blue-600">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="flex flex-col gap-1">
          {currentState === "Sign Up" ? (
            <p className="text-md">
              Already have an account{" "}
              <span
                className="font-medium text-blue-600 cursor-pointer transition-all  hover:text-blue-800"
                onClick={() => setCurrentState("Login")}
              >
                Login 
              </span>
            </p>
          ) : (
            <p className="text-md">
              Create an account{" "}
              <span
                className="font-medium text-blue-600 cursor-pointer transition-all  hover:text-blue-800"
                onClick={() => setCurrentState("Sign Up")}
              >
                Sign Up
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default Login;
