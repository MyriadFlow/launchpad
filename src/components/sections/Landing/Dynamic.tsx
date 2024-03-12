import Image from '@/public/dynamic-realm.png'
import React from "react";
import Button from "@/components/ui/Buttons/GeneralButton"
const header = 'Dynamic Realms'
const paragraph = 'Dynamic NFTs that provide dynamic features, changes in a dNFT smart contract are based on conditions'

export default function Dynamic() {
  return (
    <main className="page h-screen bg-[#f6f6f6fa]">
      <div className='container flex px-12 justify-between'>
        <div className="flex-1 w-full items-center flex">
          <div className='flex flex-col'>
            <h1 className='font-bold text-[50px]'>{header}</h1>
            <p className='mt-10 font-normal text-[25px] leading-8 w-[520px]'>{paragraph}</p>
            <Button text='Launch'/>
          </div>
        </div>

        <div className="flex-1 flex w-full justify-end">
          <img src={Image.src} className='xl:w-[580px] xl:h-[540px] w-[450px] h-[420px]' />
        </div>
      </div>
    </main>
  );
}
