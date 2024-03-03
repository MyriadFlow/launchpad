import React, { useState, useEffect } from 'react'
import Select from '@/components/ui/Select'
import Input from '@/components/ui/Input';
import { IoCloseOutline, IoAddSharp } from "react-icons/io5";
import { HiOutlineExclamationCircle } from "react-icons/hi";

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

const Instagen: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
        <div className='bg-[#AECDFE] xl:mt-8 mt-6 xl:w-[1120px] w-[850px] xl:h-[920px] rounded-lg xl:px-28 px-20 xl:py-12 py-8 flex xl:gap-x-8 gap-x-6 xl:mb-16 mb-12'>
            {/* <div className='xl:w-[270px] w-[200px] xl:h-[270px] h-[200px] border border-dashed border-black rounded-xl'></div> */}
            <div className='flex-grow h-full xl:gap-y-8 gap-y-6 flex flex-col'>
                <div>
                    <div className='xl:h-12 h-8 w-full relative'>
                        <p className='xl:text-[26px] text-[20px] font-normal'>Enter Instagen name:</p>
                    </div>
                    <Input placeholder='Ex:TOKEN NAME' rounded={true} />
                </div>

                <div>
                    <div className='xl:h-12 h-8 w-full relative'>
                        <p className='xl:text-[26px] text-[20px] font-normal'>Instagen Symbol:</p>
                    </div>
                    <Input placeholder='Ex: NFT bAZAAR {NBT} ' rounded={true} />
                </div>

                <div>
                    <div className='xl:h-12 h-8 w-full relative'>
                        <p className='xl:text-[26px] text-[20px] font-normal'>Sale Price:</p>
                        <HiOutlineExclamationCircle className='absolute bottom-0 right-0' />
                    </div>
                    <Input placeholder='Matic' rounded={true} />
                </div>

                <div>
                    <div className='xl:h-12 h-8 w-full relative'>
                        <p className='xl:text-[26px] text-[20px] font-normal'>Pre-Sale Price:</p>
                        <HiOutlineExclamationCircle className='absolute bottom-0 right-0' />
                    </div>
                    <Input placeholder='Matic' rounded={true} />
                </div>

                <div>
                    <div className='xl:h-12 h-8 w-full relative'>
                        <p className='xl:text-[26px] text-[20px] font-normal'>Countdown Time:</p>
                    </div>
                    <Input placeholder='Ex: 3/07/23' rounded={true} />
                </div>

                <div>
                    <div className='xl:h-12 h-8 w-full relative'>
                        <p className='xl:text-[26px] text-[20px] font-normal'>Max. Supply</p>
                    </div>
                    <Input placeholder='Ex: $3000' rounded={true} />
                </div>

                <div>
                    <div className='xl:h-12 h-8 w-full relative'>
                        <p className='xl:text-[26px] text-[20px] font-normal'>Royalty BPS</p>
                    </div>
                    <Input placeholder='Ex: 50%' rounded={true} />
                </div>

                <div className='flex flex-col gap-y-3 xl:gap-y-4'>
                    <div className='w-full flex gap-x-12 mt-8 xl:mt-12'>
                        <button className='w-full xl:h-[190px] h-[150px] rounded-xl border-black border flex items-center justify-center text-[22px] gap-x-2'>
                            <IoAddSharp /> Thumbnail
                        </button>
                        <button className='w-full xl:h-[190px] h-[150px] rounded-xl border-black border flex items-center justify-center text-[22px] gap-x-2'>
                            <IoAddSharp /> Cover Image
                        </button>
                    </div>
                    <p className='xl:text-[26px] text-[20px] font-normal'>Upload File</p>
                    <div className='w-full gap-x-12'>
                        <button className='w-full xl:h-[190px] h-[150px] rounded-xl border-black border border-dashed flex items-center justify-center text-[22px] gap-x-2'>
                            <button className='bg-[#5347E7] xl:text-[18px] text-[14px] text-white px-6 py-1'>Choose File</button>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Instagen;
