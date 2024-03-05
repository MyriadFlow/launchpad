import React, { useState, useEffect } from 'react'
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import { IoAddSharp } from 'react-icons/io5';

const CategoryOption = ['Music', 'Retail', 'Personal Brand', 'Sports', 'Others']

const Form1: React.FC = () => {
  return (
    <div className='w-full bg-[#AECDFE] flex flex-col xl:gap-y-8 gap-y-6 xl:p-8 p-6 rounded-lg'>
      <div className='xl:p-8 p-6 w-full bg-[#C2D9FE] rounded-lg flex flex-col xl:gap-y-8 gap-y-6'>
        <div>
          <p className='xl:text-[26px] text-[20px] font-normal mb-2'>Enter storefront name</p>
          <Input placeholder='Eg: My first marketplace ' rounded={true} />
        </div>
        <div>
          <p className='xl:text-[26px] text-[20px] font-normal mb-2'>Description</p>
          <textarea rows={4} className='w-full bg-[#5347E780] outline-none border-none p-2 xl:h-[90px] h-[68px] rounded-lg' placeholder='Eg: Unlock a new era of ownership and creativity with the power of NFTs on our platform.'></textarea>
        </div>
        <div>
          <p className='xl:text-[26px] text-[20px] font-normal mb-2'>Headline</p>
          <Input placeholder='Eg: Embark on a Journey of Creativity and Connection' rounded={true} />
        </div>

        <div className='w-full flex xl:gap-x-8 gap-x-6'>
          <div className='flex-1'>
            <p className='xl:text-[26px] text-[20px] font-normal mb-2'>Region</p>
            <Input placeholder='us01' rounded={true} />
          </div>
          <div className='flex-1'>
            <p className='xl:text-[26px] text-[20px] font-normal mb-2'>Type</p>
            <Select options={CategoryOption} rounded={true} />
          </div>
        </div>
        <div className='w-full flex xl:gap-x-8 gap-x-6'>
          <div className='flex-1'>
            <p className='xl:text-[26px] text-[20px] font-normal mb-2'>Category</p>
            <Select options={CategoryOption} rounded={true} />
          </div>
          <div className='flex-1'>
            <p className='xl:text-[26px] text-[20px] font-normal mb-2'>Tags</p>
            <Select options={CategoryOption} rounded={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form3;
