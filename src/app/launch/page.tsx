'use client'

import React, { useState, useEffect } from 'react';
import Header from '@/components/sections/Header';
import { useRouter } from 'next/navigation';
import { IoAddSharp } from "react-icons/io5";
import Select from '@/components/ui/Select';
import Input from '@/components/ui/Input';
import Step0 from '@/components/sections/LaunchSteps/Step0';
import Step1 from '@/components/sections/LaunchSteps/Step1';
import ContractLaunch from '@/components/sections/LaunchSteps/ContractLaunch';
import LaunchSeries from '@/components/sections/LaunchSteps/LaunchSeries';

interface LaunchProps {
  // Assuming other props might be passed to Launch component
}

const currentContractType = 'eternal';

const ExtraLaunch: React.FC = () => {
  // Define texts for each case
  const caseTexts: Record<string, string[]> = {
    signature: ['Add another Signature Series', 'Choose another contract'],
    fusion: ['Add another Fusion Series', 'Choose another contract'],
    eternal: ['Add another Eternal Soul', 'Choose another contract'],
  };

  // Choose the current contract type (for example, 'signature')
  

  // Access the texts based on the contract type
  const [text1, text2] = caseTexts[currentContractType];

  return (
    <div>
      <div className='flex gap-x-6 xl:gap-x-8 mt-12'>
        <div>
          <p className='xl:text-[26px] text-[20px] font-semibold'>{text1}</p>
          <button className='xl:w-[580px] w-[435px] xl:h-[160px] h-[120px] rounded-xl border-black border-2 flex items-center justify-center xl:text-[32px] text-[24px] font-bold'><IoAddSharp />
          </button>
        </div>
        <div>
          <p className='xl:text-[26px] text-[20px] font-semibold'>{text2}</p>
          <button className='xl:w-[580px] w-[435px] xl:h-[160px] h-[120px] rounded-xl border-black border-2 flex items-center justify-center xl:text-[32px] text-[24px] font-bold'><IoAddSharp /></button>
        </div>
      </div>
      <div className="flex justify-between xl:gap-x-32 gap-x-24">
        <button className='xl:w-[160px] w-[120px] xl:h-12 h-9 border-black border-none rounded-full font-semibold xl:text-[20px] text-[16px] bg-buttonGradient xl:my-16 my-12 text-white'>Back</button>
        <button className='xl:w-[160px] w-[120px] xl:h-12 h-9 border-black border-none rounded-full font-semibold xl:text-[20px] text-[16px] bg-buttonGradient xl:my-16 my-12 text-white'>skip</button>
      </div>
    </div>
  );
};


const contractType = 'fusion'

const Launch: React.FC<LaunchProps> = () => {
  const [ extraLaunch, setExtraLaunch] = useState(true)
  const router = useRouter();
  const launchId = '2345';

  const handleLaunchClick = () => {
    router.push(`/launch?launchId=${launchId}`);
  };

  const renderButtons = () => {
    return (
      <div className="flex justify-between xl:gap-x-32 gap-x-24">
        <button className='xl:w-[160px] w-[120px] xl:h-12 h-9 border-black border-none rounded-full font-semibold xl:text-[20px] text-[16px] bg-buttonGradient xl:my-16 my-12 text-white'>Back</button>
        {['instagen', 'eternum'].includes(contractType) && (
          <button className='xl:w-[160px] w-[120px] xl:h-12 h-9 border-black border-none rounded-full font-semibold xl:text-[20px] text-[16px] bg-buttonGradient xl:my-16 my-12 text-white'>Continue</button>
        )}
      </div>
    );
  };

  return (
    <main className='page min-h-screen bg-[#f6f6f6fa]'>
      <div className='w-full min-h-screen flex-col flex items-center'>
        <div className='z-50 top-0 left-0 lg:h-[4rem] md:h-[3rem] sm:h-[2.5rem] h-[2.5rem]'>
          <Header />
        </div>

        <div className='container px-12 py-12 border-b-2'>
          <p className='font-semibold font-poppins xl:text-[40px] text-[30px]'>Add Storefront details</p>
        </div>

        {/* <LaunchSeries contractType={currentContractType} />  */}
        <ExtraLaunch />

        {!extraLaunch && renderButtons()}
      </div>
    </main>
  );
};

export default Launch;
