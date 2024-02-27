import React, { useState, useEffect } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import Switch from '@/components/ui/Switch/Switch'

const Storefront: React.FC = () => {
  const [isMainnet, setIsMainnet] = useState(false);
  const containerClasses = `mx-auto bg-${isMainnet ? '[#5FDBA7]' : '[#ff0000]'} xl:h-36 h-27 xl:w-160 w-120`;
  // console.log(containerClasses)

  const textClasses = 'text-white text-center'; // You can customize text color and alignment

  return (
    <main className='page min-h-screen flex-col justify-between bg-[#f6f6f6fa]'>
        <div className='w-full min-h-screen'>
            <Header />
            {/* --- */}
            <div className='page h-[180px] bg-dotLineGradient flex-col justify-between p-4'>
                <div className='flex items-end flex-grow w-full'>
                    <p className='text-white font-poppins font-semibold xl:text-[40px] text-[30px]'>Storefronts</p>
                </div>
                <div className='xl:h-[70px] h-[53px] w-full gap-x-4 flex items-end justify-center'>
                    <div className='flex gap-x-8 items-center justify-center'>
                        <p className='xl:text-[28px] text-[21px] font-medium text-white'>Testnet</p>
                        <Switch onClose={() => setIsMainnet((prev) => !prev)} />
                        <p className='xl:text-[28px] text-[21px] font-medium text-white'>Mainnet</p>
                    </div>
                </div>
                <div className='xl:h-[40px] h-[30px] w-full flex items-end justify-end'>
                  <div className='flex gap-x-4'>
                    <button className='xl:h-[40px] h-[30px] xl:w-[150px] w-[112.5px] bg-white rounded-full font-semibold text-[15px]'>Launch</button>
                    <button className='xl:h-[40px] h-[30px] xl:w-[150px] w-[112.5px] bg-transparent text-white border-white border rounded-full font-semibold text-[15px]'>Upgrade</button>
                  </div>
                </div>
            </div>
            {/* --- */}
            <div className={`xl:h-[36px] h-[27px] w-[120px] xl:w-[160px] mx-auto flex items-center justify-center font-medium ${isMainnet ? 'bg-[#5FDBA7] text-white' : 'bg-[#ff0000] text-white'}`}>
              {isMainnet ? 'Mainnet' : 'Testnet'}
            </div>
        </div>
        <Footer />
    </main>
  );
};

export default Storefront;
