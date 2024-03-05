'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Update import statement for 'useRouter'
import Header from '@/components/sections/Header';
import { IoAddSharp } from "react-icons/io5";
import Step0 from '@/components/sections/LaunchSteps/Step0';
import Step1 from '@/components/sections/LaunchSteps/Step1';
import LaunchSeries from '@/components/sections/LaunchSteps/LaunchSeries';
import Step3 from '@/components/sections/LaunchSteps/Step3';
import ContractLaunch from '@/components/sections/LaunchSteps/ContractLaunch';
import StoreFrontForm from '@/components/sections/LaunchSteps/StoreFrontForm';

const Launch: React.FC = () => {
  const router = useRouter();
  const [steps, setSteps] = useState<number>(() => 0); // Initialize with a function
  const [isExtraLaunch, setExtraLaunch] = useState(false)
  const [contractType, setContractType] = useState<'signature' | 'phygital' | 'fusion' | 'eternum' | 'eternal' | 'instagen'>('fusion');

  const handleBack = () => {
    if (steps === 0) {
      router.push('/storefront');
    } else {
      setSteps(steps - 1);
    }
  };

  const handleContinue = () => {
    setSteps(steps + 1);
  };

  const handleExtraLaunch = () => {
    setExtraLaunch(true)
  };

  const renderButtons = () => {
    if (steps === 0) {
      return null;
    } else if (steps === 1) {
      return (
        <div className="flex justify-end mx-auto">
          <button onClick={handleBack} className='xl:w-[160px] w-[120px] xl:h-12 h-9 border-black border-none rounded-full font-semibold xl:text-[20px] text-[16px] bg-buttonGradient xl:my-16 my-12 text-white'>Back</button>
        </div>
      );
    } else if (steps === 2) {
      if (contractType === 'eternum' || contractType === 'instagen') {
        return (
          <div className="flex justify-between mx-auto xl:gap-x-32 gap-x-24">
            <button onClick={handleBack} className='xl:w-[160px] w-[120px] xl:h-12 h-9 border-black border-none rounded-full font-semibold xl:text-[20px] text-[16px] bg-buttonGradient xl:my-16 my-12 text-white'>Back</button>
            <button onClick={handleContinue} className='xl:w-[160px] w-[120px] xl:h-12 h-9 border-black border-none rounded-full font-semibold xl:text-[20px] text-[16px] bg-buttonGradient xl:my-16 my-12 text-white'>Continue</button>
          </div>
        );
      } else {
        return (
          <div className="flex justify-end mx-auto">
            <button onClick={handleBack} className='xl:w-[160px] w-[120px] xl:h-12 h-9 border-black border-none rounded-full font-semibold xl:text-[20px] text-[16px] bg-buttonGradient xl:my-16 my-12 text-white'>Back</button>
          </div>
        );
      }
    } else if (steps === 3) {
      return null;
    }
  };

  return (
    <main className='page min-h-screen bg-[#f6f6f6fa]'>
      <div className='w-full min-h-screen flex-col flex items-center'>
        <div className='z-50 top-0 left-0 lg:h-[4rem] md:h-[3rem] sm:h-[2.5rem] h-[2.5rem]'>
          <Header />
        </div>

        {steps <= 3 ? 
          <div className='container px-12 py-12 border-b-2'>
            <p className='font-semibold font-poppins xl:text-[40px] text-[30px]'>Add Storefront details</p>
          </div> :
          <div className='flex flex-col items-center xl:my-12 my-8 xl:gap-y-12 gap-y-8'>
            <p className='xl:text-[50px] text-[38px] font-bold'>Make Your Storefront Shine</p>
            <p className='xl:text-[26px] text-[20px] font-semibold'>Storefront Details</p>
          </div>}

        {steps === 0 && <Step0 onContinue={handleContinue} />}
        {steps === 1 && <Step1 onContinue={handleContinue} />}
        {steps === 2 && <LaunchSeries onBack={handleBack} onContinue={handleContinue} contractType={contractType}  onExtra={handleExtraLaunch} />}
        {steps == 3 && <Step3 onContinue={handleContinue} />}
        {steps > 3 && <StoreFrontForm />}

        {!isExtraLaunch && renderButtons()}
      </div>
    </main>
  );
};

export default Launch;
