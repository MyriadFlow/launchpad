import React, { useState, useEffect } from 'react'
import Image from '@/public/tradehub.png'
import Button from '../../ui/Buttons/StoreFrontButton'

const Storefront: React.FC = () => {

  return (
    <div className='xl:w-[1100px] w-[825px] flex flex-col justify-center items-center xl:gap-y-8 gap-y-6'>
        <div className='w-full bg-[#5347E7E5] xl:h-[240px] h-[180px] xl:p-4 p-3 rounded-md flex justify-between items-center'>
            <div className='flex xl:gap-x-8 gap-x-6 items-center justify-center'>
                <img className='xl:w-[160px] xl:h-[160px] h-[120px] w-[120px] xl:ml-8 ml-6' src={Image.src} />
                <div className='flex flex-col'>
                  <h1 className='xl:text-[28px] text-[21px] font-bold text-white'>My first marketplace</h1>
                  <div>
                    <p className='font-normal text-white xl:text-[22px] text-[17px]'>Headline:</p>
                    <p className='font-normal text-white xl:text-[22px] text-[17px]'>Blockchain:</p>
                  </div>
                </div>
            </div>

            <div className='flex xl:gap-x-8 gap-x-6'>
                <div className='flex flex-col xl:gap-y-4 gap-y-3'>
                    <Button text='View' />
                    <Button text='Manage' />
                </div>
                <div className='flex justify-between xl:w-[56px] w-[42px]'>
                    <div className='xl:w-[20px] w-[15px] h-[15px] xl:h-[20px] bg-[#5FDBA7] rounded-full'></div>
                    <div className='xl:w-[20px] w-[15px] h-[15px] xl:h-[20px] border-black border rounded-full'></div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Storefront;
