import React, { useState } from 'react';
import Input from '@/components/ui/Input';
import { IoAddSharp } from 'react-icons/io5';
import { inputLabel, secondInputLabel } from '../../../lib/launchSeries';

interface LaunchSeriesProps {
  contractType: 'signature' | 'fusion' | 'eternal' | 'phygital' | 'eternum' | 'instagen';
  onContinue: () => void;
}

const ExtraLaunch: React.FC = () => {
  const [contractType, setContractType] = useState<'signature' | 'phygital' | 'fusion' | 'eternum' | 'eternal' | 'instagen'>('fusion');
  const caseTexts: Record<string, string[]> = {
    signature: ['Add another Signature Series', 'Choose another contract'],
    fusion: ['Add another Fusion Series', 'Choose another contract'],
    eternal: ['Add another Eternal Soul', 'Choose another contract'],
  };
  const [text1, text2] = caseTexts[contractType];

  return (
    <div>
      <div className='flex gap-x-6 xl:gap-x-8 mt-12'>
        <div>
          <p className='xl:text-[26px] text-[20px] font-semibold'>{text1}</p>
          <button className='xl:w-[580px] w-[435px] xl:h-[160px] h-[120px] rounded-xl border-black border-2 flex items-center justify-center xl:text-[32px] text-[24px] font-bold'><IoAddSharp /></button>
        </div>
        <div>
          <p className='xl:text-[26px] text-[20px] font-semibold'>{text2}</p>
          <button className='xl:w-[580px] w-[435px] xl:h-[160px] h-[120px] rounded-xl border-black border-2 flex items-center justify-center xl:text-[32px] text-[24px] font-bold'><IoAddSharp /></button>
        </div>
      </div>
    </div>
  );
};

const LaunchSeries: React.FC<LaunchSeriesProps> = ({ contractType, onContinue }) => {
  const [contractName, setContractName] = useState('');
  const [contractSymbol, setContractSymbol] = useState('');
  const [extraLaunch, setExtraLaunch] = useState(false);

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

  const handleDeployClick = () => {
    if (['signature', 'fusion', 'eternal'].includes(contractType)) {
      // Render a simple text 'Hello' if contractType is 'signature', 'fusion', or 'eternal'
      setExtraLaunch(true);
    } else {
      // Call the onContinue function if contractType is not 'signature', 'fusion', or 'eternal'
      onContinue();
    }
  };

  return (
    <div className={`${extraLaunch ? null : 'bg-[#AECDFE]'} xl:w-[1120px] w-[850px] xl:h-[920px] rounded-lg xl:py-12 py-8 xl:px-28 px-20 flex flex-col items-center xl:gap-x-8 gap-x-6 xl:mb-16 my-12`}>
      {extraLaunch ? <ExtraLaunch /> : commonSection}
      <button
        className='xl:w-[216px] w-[162px] xl:h-12 h-9 border-none rounded-full font-semibold xl:text-[18px] text-[14px] bg-buttonGradient xl:mt-16 mt-12 text-white'
        onClick={handleDeployClick}
      >
        Deploy Contract
      </button>
    </div>
  );
};

export default LaunchSeries;
