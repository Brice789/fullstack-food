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

      <div
        className="absolute top-0 left-0 w-[27%] h-full bg-gray-100 opacity-60"
        style={{ zIndex: "10" }}
      ></div>


      <div className="flex items-center justify-start gap-4 w-full">

        <img src ={avatar} className="w-8" alt =""></img>
      </div>



        {/* <div
        className="flex flex-col items-center bg-gray-400 w-[80%] md:w-508 h-full z-10 
        backdrop-blur-md p-4 px-4 py-12"

        
      ></div> */}

   {/* <div
  className="flex flex-col items-center bg-gray-400 w-[80%] md:w-508 h-full z-10 
  backdrop-blur-md p-4 px-4 py-12"
   ></div> */}

    </div>
  );
};

export default Login;
