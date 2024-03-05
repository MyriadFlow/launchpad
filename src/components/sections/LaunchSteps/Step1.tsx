import React, { useState, useEffect } from 'react'
import Input from '@/components/ui/Input'
import { IoCloseOutline } from "react-icons/io5";
import ContractLaunch from './ContractLaunch';

const paragraph ='Your Contract has been successfully deployed'

interface Step1Props {
    onContinue: () => void
}

interface LaunchSuccessModalProps {
    onContinue: () => void
}

const LaunchSuccessModal: React.FC<LaunchSuccessModalProps> = ({onContinue}) => {
    return(
        <div className='w-full h-screen fixed top-0 right-0 bg-transparent inset-0 z-50 flex items-center justify-center'>
            <div className='xl:w-[710px] xl:h-[510px] w-[533px] h-[383px] bg-[#eeeded] rounded-md flex flex-col items-center justify-center gap-y-9 xl:gap-y-12 relative'>
                <p className='font-semibold text-black xl:text-[32px] text-[24px]'>Congrats!</p>
                <p className='font-normal xl:text-[28px] text-[21px] text-black text-center xl:w-[590px] w-[443px]'>{paragraph}</p>
                <button className='absolute top-0 right-0 p-4'><IoCloseOutline className='text-[24px] text-[#00000080]' onClick={onContinue} /></button>
            </div>
        </div>
    );
}

const Step1: React.FC<Step1Props> = ({onContinue}) => {
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [selectContract, setSelectContract] = useState(false);

    const handleContinue = () => {
        setIsSuccessful(true);
    };

    const handleModalClick = () => {
        setSelectContract(true);
    };
    return (
        <div className='bg-[#AECDFE] xl:w-[1120px] w-[850px] rounded-lg xl:px-8 xl:py-12 py-8 px-6 flex flex-col items-center justify-center xl:gap-x-8 gap-x-6 xl:mb-16 my-12'>
            <div className='w-full flex gap-x-6'>
                <div className='w-full'>
                    <p className='xl:text-[26px] text-[20px] font-medium mb-2'>Enter TradeHub Name</p>
                    <Input placeholder='Ex: My marketplace' rounded={true} />
                </div>

                <div className='w-full'>
                    <p className='xl:text-[26px] text-[20px] font-medium mb-2'>Enter TradeHub fee</p>
                    <Input placeholder='Ex: 3% ' rounded={true} />
                    <p className='text-[#ff0000] xl:text-[10px] text-[8px]'>(Fee must be in percentage)</p>
                </div>
            </div>

            <button className='xl:w-[216px] w-[162px] xl:h-12 h-9 border-black border-none rounded-full font-semibold xl:text-[18px] text-[14px] bg-buttonGradient xl:mt-16 mt-12 text-white' onClick={handleContinue}>Deploy TradeHub</button>
            {isSuccessful && <LaunchSuccessModal onContinue={handleModalClick} />}
            {selectContract && <ContractLaunch onLaunch={onContinue} />}
        </div>
    );
};

export default Step1;
