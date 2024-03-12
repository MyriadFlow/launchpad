import Image from '@/public/etherum-pass.png'
import React from "react";
import Button from "@/components/ui/Buttons/GeneralButton"
const header = 'Eternum Pass'
const paragraph = 'Eternum pass offers a unique subscription model through its NFTs, enabling users to access premium content and services for a set duration, benefiting content creators and providers'

export default function FusionSeries() {
  return (
    <main className="page h-screen bg-[#f6f6f6fa]">
      <div className='container flex px-12 justify-between'>
        <div className="flex-1 flex w-full">
          <img src={Image.src} className='xl:w-[580px] xl:h-[540px] w-[450px] h-[420px]' />
        </div>

        <div className="flex-1 w-full items-center justify-end flex">
          <div className='flex justify-end items-end text-end flex-col'>
            <h1 className='font-bold text-[50px]'>{header}</h1>
            <p className='mt-10 font-normal text-[25px] leading-8 w-[520px]'>{paragraph}</p>
            <Button text='Launch'/>
          </div>
        </div>
      </div>
    </main>
  );
}
