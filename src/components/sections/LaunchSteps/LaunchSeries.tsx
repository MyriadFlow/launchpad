import React, { useState } from 'react';
import Input from '@/components/ui/Input';
import InstagenComponent from '@/components/sections/LaunchSteps/InstagenLaunch'; // Import your Instagen component
import EternumComponent from '@/components/sections/LaunchSteps/EthernumLaunch'; // Import your Eternum component
import { IoAddSharp } from 'react-icons/io5';
import { inputLabel, secondInputLabel } from '../../../lib/launchSeries';

interface LaunchSeriesProps {
  contractType: 'signature' | 'fusion' | 'eternal' | 'phygital' | 'eternum' | 'instagen';
}

const LaunchSeries: React.FC<LaunchSeriesProps> = ({ contractType }) => {
  const [contractName, setContractName] = useState('');
  const [contractSymbol, setContractSymbol] = useState('');

  const commonSection = (
    <div className='w-full flex flex-col xl:gap-y-16 gap-y-12'>
      <div className='w-full'>
        <p className='xl:text-[26px] text-[20px] font-medium mb-2'>{inputLabel(contractType)}</p>
        <Input placeholder='' rounded={true} value={contractName} onChange={(e) => setContractName(e.target.value)} />
      </div>

      <div className='w-full'>
        <p className='xl:text-[26px] text-[20px] font-medium mb-2'>{secondInputLabel(contractType)}</p>
        <Input placeholder='' rounded={true} value={contractSymbol} onChange={(e) => setContractSymbol(e.target.value)} />
      </div>

      <div className='w-full flex gap-x-12'>
        <button className='w-full xl:h-[190px] h-[150px] rounded-xl border-black border flex items-center justify-center text-[22px] gap-x-2'>
          <IoAddSharp /> Thumbnail
        </button>
        <button className='w-full xl:h-[190px] h-[150px] rounded-xl border-black border flex items-center justify-center text-[22px] gap-x-2'>
          <IoAddSharp /> Cover Image
        </button>
      </div>
    </div>
  );

  // Render specific components for 'instagen' and 'eternum'
  switch (contractType) {
    case 'instagen':
      return <InstagenComponent />;
    case 'eternum':
      return <EternumComponent />;
    default:
      return (
        <div className='bg-[#AECDFE] xl:w-[1120px] w-[850px] xl:h-[920px] rounded-lg xl:py-12 py-8 xl:px-28 px-20 flex flex-col items-center xl:gap-x-8 gap-x-6 xl:mb-16 my-12'>
          {commonSection}
          <button className='xl:w-[216px] w-[162px] xl:h-12 h-9 border-none rounded-full font-semibold xl:text-[18px] text-[14px] bg-buttonGradient xl:mt-16 mt-12 text-white'>Deploy Contract</button>
        </div>
      );
  }
};

export default LaunchSeries;
