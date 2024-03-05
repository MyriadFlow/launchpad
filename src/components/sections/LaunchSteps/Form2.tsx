import React, { useState, useEffect } from 'react'
import Input from '@/components/ui/Input';

const Form2: React.FC = () => {
  return (
    <div className='w-full bg-[#AECDFE] flex flex-col xl:gap-y-8 gap-y-6 xl:p-8 p-6 rounded-lg'>
      <div className='xl:h-[340px] h-[255px] xl:p-8 p-6 w-full bg-[#C2D9FE] rounded-lg flex flex-col justify-between'>
        <div>
          <p className='xl:text-[26px] text-[20px] font-normal mb-2'>Enter Tagline</p>
          <Input placeholder='Eg: Experience the Power of NFTs ' rounded={true} />
        </div>
        <div>
          <p className='xl:text-[26px] text-[20px] font-normal mb-2'>Description</p>
          <textarea rows={4} className='w-full bg-[#5347E780] outline-none border-none p-2 xl:h-[90px] h-[68px] rounded-lg' placeholder='Eg: Unlock a new era of ownership and creativity with the power of NFTs on our platform.'></textarea>
        </div>
      </div>
      {/* --- */}
      <div className='xl:h-[340px] h-[255px] xl:p-8 p-6 w-full bg-[#C2D9FE] rounded-lg flex justify-center items-center'>
        <div className='xl:w-[660px] w-[495px] xl:h-[210px] h-[156px] border border-black border-dashed rounded-lg flex justify-center items-center'>
          <p>+ Add relevant image</p>
        </div>
      </div>
    </div>
  );
};

export default Form2;
