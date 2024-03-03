import React, { useState, useEffect } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import Switch from '@/components/ui/Switch/Switch'
import Fronts from './Fronts'
import { useRouter } from 'next/navigation'


const Storefront: React.FC = () => {
  const [isMainnet, setIsMainnet] = useState(false);
  const router = useRouter()
  const launchId = '2345'

  const handleLaunchClick = () => {
    router.push(`/launch?launchId=${launchId}`)
  }

  return (
    <main className='page min-h-screen flex-col justify-between bg-[#f6f6f6fa]'>
        <div className='w-full min-h-screen flex-col flex items-center justify-center'>
          <div className='z-50 top-0 left-0 lg:h-[4rem] md:h-[3rem] sm:h-[2.5rem] h-[2.5rem]'>
            <Header />
          </div>
          {/* --- */}
          <div className='page h-[180px] bg-dotLineGradient flex-col justify-between p-4'>
                <div className='container flex items-end flex-grow w-full'>
                    <p className='text-white font-poppins font-semibold xl:text-[40px] text-[30px]'>Storefronts</p>
                </div>
                <div className='container xl:h-[70px] h-[53px] w-full gap-x-4 flex items-end justify-center'>
                    <div className='flex gap-x-8 items-center justify-center'>
                        <p className='xl:text-[28px] text-[21px] font-medium text-white'>Testnet</p>
                        <Switch onClose={() => setIsMainnet((prev) => !prev)} />
                        <p className='xl:text-[28px] text-[21px] font-medium text-white'>Mainnet</p>
                    </div>
                </div>
                <div className='container xl:h-[40px] h-[30px] w-full flex items-end justify-end'>
                  <div className='flex gap-x-4'>
                    <button 
                      className='xl:h-[40px] h-[30px] xl:w-[150px] w-[112.5px] bg-white rounded-full font-semibold text-[15px]' onClick={handleLaunchClick}>Launch</button>
                    <button className='xl:h-[40px] h-[30px] xl:w-[150px] w-[112.5px] bg-transparent text-white border-white border rounded-full font-semibold text-[15px]'>Upgrade</button>
                  </div>
                </div>
          </div>
          {/* --- */}
          <div className={`xl:h-[36px] h-[27px] w-[120px] xl:w-[160px] mx-auto flex items-center justify-center font-medium ${isMainnet ? 'bg-[#5FDBA7] text-white' : 'bg-[#ff0000] text-white'}`}>
            {isMainnet ? 'Mainnet' : 'Testnet'}
          </div>
          {/* --- */}
          <h1 className='font-semibold font-poppins xl:text-[45px] text-[34px] mx-auto xl:my-16 my-12'>Your storefronts in {isMainnet ? 'mainnet' : 'testnet'}</h1>
          {/* --- */}
          <div className='flex flex-col xl:gap-y-8 gap-y-6 mb-8'>
            <Fronts />
            <Fronts />
            <Fronts />
          </div>
        </div>
        <Footer />
    </main>
  );
};

export default Storefront;
