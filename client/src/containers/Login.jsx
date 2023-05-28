import React from "react";
import { firstpage } from "../assets";

const Login = () => {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      {/* background image */}
      <img
        src={firstpage}
        className="w-full h-full object-cover"
        alt=""
        style={{ width: "100%", height: "100%" }}
      />

      {/* rest of your code */}
    </div>
  );
};

export default Login;
