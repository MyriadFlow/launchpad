import React, { useState, useEffect } from 'react'
import Select from '@/components/ui/Select'
import Input from '@/components/ui/Input';
import { IoCloseOutline } from "react-icons/io5";

const blockchainOptions = ['Mumbai', 'Sepolia']
const paragraph ='You have assumed the role of administrator. The deployment of Flow access master has been completed successfully.'

const LaunchSuccessModal: React.FC = () => {
    return(
        <div className='w-full h-screen fixed top-0 right-0 bg-transparent inset-0 z-50 flex items-center justify-center'>
            <div className='xl:w-[710px] xl:h-[510px] w-[533px] h-[383px] bg-[#6459e9] rounded-md flex flex-col items-center justify-center gap-y-9 xl:gap-y-12 relative'>
                <p className='font-semibold text-white xl:text-[32px] text-[24px]'>Well Done!</p>
                <p className='font-normal xl:text-[28px] text-[21px] text-white text-center xl:w-[590px] w-[443px]'>{paragraph}</p>
                <button className='absolute top-0 right-0 p-4'><IoCloseOutline className='text-[24px] text-[#FFFFFF99]' /></button>
            </div>
        </div>
    );
}

const Step0: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
        <p className='font-semibold my-6 font-poppins xl:text-[30px] text-[23px]'>Enter storefront Details in testnet</p>
        <div className='bg-[#AECDFE] xl:w-[1120px] w-[850px] xl:h-[920px] rounded-lg xl:px-8 xl:py-12 py-8 px-6 flex xl:gap-x-8 gap-x-6 xl:mb-16 mb-12'>
            <div className='xl:w-[270px] w-[200px] xl:h-[270px] h-[200px] border border-dashed border-black rounded-xl'></div>
            <div className='flex-grow h-full xl:gap-y-8 gap-y-6 flex flex-col'>
                <div>
                    <p className='xl:text-[26px] text-[20px] font-medium'>Name:</p>
                    <Input placeholder='Name should be unique and more than 5 letters.' />
                    <p className='text-[#ff0000] xl:text-[10px] text-[8px]'>Once entered, the storefront name cannot be changed. Choose carefully.</p>
                </div>

                <div>
                    <p className='xl:text-[26px] text-[20px] font-medium'>Blockchain:</p>
                    <Select options={blockchainOptions} />
                </div>

                <div>
                    <p className='xl:text-[26px] text-[20px] font-medium'>Headline:</p>
                    <Input placeholder='Max: 25 words' />
                </div>

                <div>
                    <p className='xl:text-[26px] text-[20px] font-medium'>Headline:</p>
                    <textarea rows={4} className='w-full bg-[#5347E780] outline-none border-none p-2 xl:h-[80px] h-[60px]' placeholder='Max: 100 words'></textarea>
                </div>

                <div className='flex gap-x-4'>
                    <button className='xl:w-[10rem] w-[7.5rem] xl:h-12 h-9 border-black border rounded-full font-semibold'>Cancel</button>
                    <button className='xl:w-[10rem] w-[7.5rem] xl:h-12 h-9 border-none rounded-full font-semibold bg-buttonGradient text-white'>Continue</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Step0;
