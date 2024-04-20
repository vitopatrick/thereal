import LoginForm from "@/components/login-form/LoginForm";
import { outfit } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

export default function LoginPage() {
  return (
    <div
      className={cn(outfit.className, "md:h-[120vh] h-screen text-white relative")}
      style={{
        background: `url('/loginbg.jpg')`,
        backgroundPosition: "center center",
      }}
    >
      {/* Overlay */}
      <div className="absolute top-0 bottom-0 bg-black/70 w-full h-full  flex items-center flex-col gap-5 pt-3">
        <div className="space-y-6 hidden md:block" >
            {/* globel  and write up*/}
            <img src="/globe.png" alt="globe picture" className="w-1/2 mx-auto" />
            <h3 className={cn(outfit.className,'font-bold text-3xl uppercase text-center')}>The real world</h3>
        </div>
        {/* form container */}
        <div className="mx-auto w-full md:w-1/2 p-3">
         <LoginForm/>
        </div>
      </div>
    </div>
  );
}
