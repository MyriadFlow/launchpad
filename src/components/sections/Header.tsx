'use client'
import React, { useState, useEffect } from 'react'
import Logo from '@/public/logo.png'
import Profile from '@/public/profile.png'
const linkButton = 'text-[18px] font-primary font-medium'
import AuthModal from '@/components/sections/AuthModal'
import axios from 'axios';
import { ConnectKitButton } from 'connectkit'

const Header: React.FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <main className='page lg:h-[4rem] md:h-[3rem] sm:h-[2.5rem] h-[2.5rem] bg-[#f6f6f6fa] fixed z-50 top-0 left-0'>
      <div className='container flex flex-row items-center justify-between h-full px-12 gap-x-2'>
        <div className='flex flex-row items-center'>
          <img src={Logo.src} className='w-[4rem] h-[4rem]' />
          <p className='text-[32px]'>MYRAIDFLOW</p>
        </div>

        <div className='flex flex-row items-center lg:gap-x-12 md:gap-x-10 sm:gap-x-8 gap-x-8'>
          <button className={linkButton}>Launch</button>
          <button className={linkButton}>Dashboard</button>
          <button className='w-fit h-fit'><ConnectKitButton /></button>
          <button><img src={Profile.src} alt='profile-icon' className='w-10 h-10' /></button>
        </div>
      </div>
    </main>
  );
};

export default Header;
