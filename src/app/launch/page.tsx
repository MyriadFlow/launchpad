'use client'
import React, { useState, useEffect } from 'react'
import Header from '@/components/sections/Header';
import { useRouter } from 'next/navigation'
import Select from '@/components/ui/Select'
import Input from '@/components/ui/Input';
import Step0 from '@/components/sections/LaunchSteps/Step0'
import Step1 from '@/components/sections/LaunchSteps/Step1';
import ContractLaunch from '@/components/sections/LaunchSteps/ContractLaunch';

const blockchainOptions = ['Mumbai', 'Sepolia']

const Launch: React.FC = () => {

  const router = useRouter()
  const launchId = '2345'

  const handleLaunchClick = () => {
    router.push(`/launch?launchId=${launchId}`)
  }

  return (
    <main className='page min-h-screen bg-[#f6f6f6fa]'>
        <div className='w-full min-h-screen flex-col flex items-center'>
          <div className='z-50 top-0 left-0 lg:h-[4rem] md:h-[3rem] sm:h-[2.5rem] h-[2.5rem]'>
            <Header />
          </div>

          <div className='container px-12 py-12 border-b-2'>
            <p className='font-semibold font-poppins xl:text-[40px] text-[30px]'>Add Storefront details</p>
          </div>

          <ContractLaunch />
        </div>
    </main>
  );
};

export default Launch;
