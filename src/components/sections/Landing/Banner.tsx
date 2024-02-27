import Header from "@/components/sections/Header";
import React from "react";

export default function Banner() {
  return (
    <main className="w-full absolute flex flex-col items-center bg-[#f6f6f6fa]">
      <div className="z-50 inset-0 absolute top-0 left-0"><Header /></div>
      <img src="/main-background.png" alt="background" className="h-screen w-full " />
      <div className='absolute inset-0 flex items-center justify-center'>
        <h1 className="font-bold text-[52px] text-center align-middle text-white">Embark on Your NFT Journey <br />with Seamless Ease</h1>
      </div>
    </main>
  );
}
