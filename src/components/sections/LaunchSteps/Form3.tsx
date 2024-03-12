import React, { useState, useEffect } from 'react'
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import { IoAddSharp } from 'react-icons/io5';

const CategoryOption = ['Music', 'Retail', 'Personal Brand', 'Sports', 'Others']

const Form3: React.FC = () => {
  return (
    <div className='w-full bg-[#AECDFE] flex flex-col xl:gap-y-8 gap-y-6 xl:p-8 p-6 rounded-lg'>
      <div className='xl:p-8 p-6 w-full bg-[#C2D9FE] rounded-lg flex flex-col xl:gap-y-8 gap-y-6'>
        <div>
          <p className='xl:text-[26px] text-[20px] font-normal mb-2'>Enter Email ID</p>
          <Input placeholder='Eg: abcd@gmail.com' rounded={true} />
        </div>
        <p className='xl:text-[26px] text-[20px] font-normal mb-2'>Social links</p>
        <div>
          <p className='xl:text-[20px] text-[15px] font-normal mb-2'>Twitter:</p>
          <Input placeholder='Eg: https://' rounded={true} />
        </div>

        <div>
          <p className='xl:text-[20px] text-[15px] font-normal mb-2'>Discord:</p>
          <Input placeholder='Eg: https://' rounded={true} />
        </div>

        <div>
          <p className='xl:text-[20px] text-[15px] font-normal mb-2'>Instagram:</p>
          <Input placeholder='Eg: https://' rounded={true} />
        </div>
      </div>
    </div>
  );
};

export default Form3;
