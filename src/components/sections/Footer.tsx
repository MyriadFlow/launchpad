import Logo from '@/public/logo.png'
import Discord from '@/public/discord-icon.png'
import Twitter from "@/public/twitter-icon.png"
import Telegram from "@/public/send-icon.png"
import React from "react";
const linktext = 'font-light text-[16px] leading-6'
const links = [
    { text: 'Signature Series', url: '/signature-series' },
    { text: 'Fusion Series', url: '/fusion-series' },
    { text: 'Instagen', url: '/instagen' },
    { text: 'Etherum Pass', url: '/etherum-pass' },
    { text: 'Eternal Soul', url: '/eternal-soul' },
    { text: 'Access Control', url: '/access-control' },
    { text: 'TradeHub', url: '/tradehub' },
  ];
const paragraph = 'MyriadFlow is an innovative platform to explore & launch NFT Experiences. Dive intothe next generation of Utility NFTs through our Revolutionary App Store Explore.'

export default function Footer() {
  return (
    <main className="page xl:h-[400px] h-[300px] xl:p-6 p-[18px] flex flex-col justify-between bg-[#f6f6f6fa]">
        <div className='border-t-2 w-full h-full items-center justify-between flex xl:px-36 px-[6.75rem]'>
            <div className='flex flex-col xl:gap-y-4 gap-y-3'>
                <img src={Logo.src} className='xl:w-[5rem] w-[60px] xl:h-[5rem] h-[60px]'/>
                <h1 className='xl:text-[32px] text-[24px] font-normal'>MYRAIDFLOW</h1>
                <p className='xl:text-[16px] text-[12px] font-poppins font-normal w-[340px] xl:leading-6 leading-5'>{paragraph}</p>
            </div>

            <div className='flex justify-end xl:gap-x-20 gap-x-16'>
                <div className='flex flex-col xl:gap-y-2 gap-y-[6px]'>
                    <h1 className='font-semibold xl:text-[24px] text-[18px]'>Explore</h1>
                    <div className='flex flex-col xl:gap-y-1 gap-y-[2px]'>
                        {links.map((link, index) => (
                            <p className='font-light font-poppins xl:text-[1rem] text-[12px]' key={index}>{link.text}</p>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col xl:gap-y-4 gap-y-3 items-center'>
                    <h1 className='font-semibold xl:text-[24px] text-[18px]'>Contact Us</h1>
                    <div className='flex xl:gap-x-6 gap-x-[18px]'>
                        <button className='p-1 border h-fit border-black rounded-md'>
                            <img src={Discord.src} alt="discord-icon" className='xl:w-[44px] w-[34px] xl:h-[42px] h-[32px]' />
                        </button>
                        <button className='p-1 border h-fit border-black rounded-md'>
                            <img src={Twitter.src} alt="discord-icon" className='xl:w-[44px] w-[34px] xl:h-[42px] h-[32px]' />
                        </button>
                        <button className='p-1 border h-fit border-black rounded-md'>
                            <img src={Telegram.src} alt="discord-icon" className='xl:w-[44px] w-[34px] xl:h-[42px] h-[32px]' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
                            
        <div className='border-t-2 w-full flex items-end justify-center h-16 font-bold xl:text-[24px] lg:text-[18px]'>
            <p>MyriadFlow | Copyright © 2023 Lazarus Network Inc. All Rights Reserved.</p>
        </div>
    </main>
  );
}
