import Image from '@/public/tradehub.png'
import Button from "@/components/ui/Buttons/GeneralButton"
import React from "react";

const header = 'TradeHub'
const paragraph = 'A leading NFT marketplace for peer-to-peer buying, selling, and trading of non-fungible tokens (NFTs)'

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
