import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa";
import Form1 from './Form1';

const FormButton: React.FC<{
  selected: boolean;
  stepNumber: number;
  stepText: string;
  paragraphText: string;
  wasSelected: () => boolean;
}> = ({ selected, stepNumber, stepText, paragraphText, wasSelected }) => {
  return (
    <div className='flex items-center gap-x-1'>
      <div className={`h-1 w-[32px] rounded-r-full ${selected ? 'bg-[#5347E7]' : ''}`}></div>
      <button className={`w-[180px] h-[60px] rounded-lg px-4 flex items-center justify-start gap-x-3 ${selected ? 'bg-[#AECDFE]' : 'bg-transparent'}`}>
        {wasSelected() ? (
          <div className='w-4 h-4 rounded-full bg-[#5347E7] border-black flex justify-center items-center'>
            <FaCheck className='text-[8px] text-white font-semibold' />
          </div>
        ) : (
          <div className='w-4 h-4 rounded-full border border-black'></div>
        )}
        <div className='flex flex-col items-start font-normal'>
          <p className='text-[12px] font-semibold'>{`Step ${stepNumber}`}</p>
          <p className='text-[10px]'>{paragraphText}</p>
        </div>
      </button>
    </div>
  );
};

const StoreFrontForm: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<number>(2);
  return (
    <div className='page'>
      <div className='container flex justify-between'>
        <div className='h-32 xl:w-[320px] w-[240px] flex flex-col gap-y-3'>
          <FormButton
            selected={selectedButton === 0}
            stepNumber={1}
            stepText="Storefront Details"
            paragraphText="Storefront details"
            wasSelected={() => selectedButton >= 0}
          />
          {/* --- */}
          <FormButton
            selected={selectedButton === 1}
            stepNumber={2}
            stepText="Personal Information"
            paragraphText="Personal information"
            wasSelected={() => selectedButton >= 1}
          />
          {/* --- */}
          <FormButton
            selected={selectedButton === 2}
            stepNumber={3}
            stepText="Contact Details"
            paragraphText="Contact details"
            wasSelected={() => selectedButton >= 2}
          />
        </div>
        <div className='xl:w-[850px] w-[700px] border'>
          <Form3 />
        </div>
        <div className='border h-32 xl:w-[320px] w-[240px]'></div>
      </div>
    </div>
  );
};

export default StoreFrontForm;
