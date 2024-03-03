'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Update import statement for 'useRouter'
import Header from '@/components/sections/Header';
import { IoAddSharp } from "react-icons/io5";
import Step0 from '@/components/sections/LaunchSteps/Step0';
import Step1 from '@/components/sections/LaunchSteps/Step1';
import LaunchSeries from '@/components/sections/LaunchSteps/LaunchSeries';
import Step3 from '@/components/sections/LaunchSteps/Step3';

const Launch: React.FC = () => {
  const router = useRouter();
  const [steps, setSteps] = useState<number>(() => 2); // Initialize with a function

  // Move contractType inside the component function and set it only once when mounted
  const [contractType, setContractType] = useState<'signature' | 'phygital' | 'fusion' | 'eternum' | 'eternal' | 'instagen'>('fusion');

  const handleBack = () => {
    if (steps === 0) {
      router.push('/storefront');
    } else {
      setSteps(steps - 1);
    }
  };

  const handleContinue = () => {
    if (steps == 2 && contractType == 'signature' || contractType == 'eternal' || contractType == 'fusion') {
      return null
    } else {
      setSteps(steps + 1);
    }
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

        <div className='container px-12 py-12 border-b-2'>
          <p className='font-semibold font-poppins xl:text-[40px] text-[30px]'>Add Storefront details</p>
        </div>

        {steps === 0 && <Step0 onContinue={handleContinue} />}
        {steps === 1 && <Step1 />}
        {steps === 2 && <LaunchSeries onContinue={handleContinue} contractType={contractType} />}
        {steps > 2 && <Step3 />}

        {renderButtons()}
      </div>
    </main>
  );
};

export default Launch;


// 'use client'
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Header from '@/components/sections/Header';
// import { IoAddSharp } from "react-icons/io5";
// import Step0 from '@/components/sections/LaunchSteps/Step0';
// import Step1 from '@/components/sections/LaunchSteps/Step1';
// import LaunchSeries from '@/components/sections/LaunchSteps/LaunchSeries';
// import Step3 from '@/components/sections/LaunchSteps/Step3';

// const [contractType, setContractType] = useState<'signature' | 'phygital' | 'fusion' | 'eternum' | 'eternal' | 'instagen'>('signature')

// const ExtraLaunch: React.FC = () => {
//   const caseTexts: Record<string, string[]> = {
//     signature: ['Add another Signature Series', 'Choose another contract'],
//     fusion: ['Add another Fusion Series', 'Choose another contract'],
//     eternal: ['Add another Eternal Soul', 'Choose another contract'],
//   };
//   const [text1, text2] = caseTexts[contractType];

//   return (
//     <div>
//       <div className='flex gap-x-6 xl:gap-x-8 mt-12'>
//         <div>
//           <p className='xl:text-[26px] text-[20px] font-semibold'>{text1}</p>
//           <button className='xl:w-[580px] w-[435px] xl:h-[160px] h-[120px] rounded-xl border-black border-2 flex items-center justify-center xl:text-[32px] text-[24px] font-bold'><IoAddSharp /></button>
//         </div>
//         <div>
//           <p className='xl:text-[26px] text-[20px] font-semibold'>{text2}</p>
//           <button className='xl:w-[580px] w-[435px] xl:h-[160px] h-[120px] rounded-xl border-black border-2 flex items-center justify-center xl:text-[32px] text-[24px] font-bold'><IoAddSharp /></button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Launch: React.FC = () => {
//   const router = useRouter();
//   const [steps, setSteps] = useState<number>(2);

//   const handleBack = () => {
//     if (steps === 0) {
//       router.push('/storefront');
//     } else {
//       setSteps(steps - 1);
//     }
//   };

//   const handleContinue = () => {
//     setSteps(steps + 1);
//   };



//   return (
//     <main className='page min-h-screen bg-[#f6f6f6fa]'>
//       <div className='w-full min-h-screen flex-col flex items-center'>
//         <div className='z-50 top-0 left-0 lg:h-[4rem] md:h-[3rem] sm:h-[2.5rem] h-[2.5rem]'>
//           <Header />
//         </div>

//         <div className='container px-12 py-12 border-b-2'>
//           <p className='font-semibold font-poppins xl:text-[40px] text-[30px]'>Add Storefront details</p>
//         </div>

//         {steps === 0 && <Step0 onContinue={handleContinue} />}
//         {steps === 1 && <Step1 />}
//         {steps === 2 && <LaunchSeries contractType={contractType} />}
//         {steps > 2 && <Step3 />}

//         {renderButtons()}
//       </div>
//     </main>
//   );
// };

// export default Launch;
