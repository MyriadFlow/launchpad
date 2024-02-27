import React from 'react';
import LoaderIcon from '@/public/ph_hexagon-bold.png'
import Metamask from '@/public/metamask.png';
import CoinbaseIcon from '@/public/coinbase.png';
import WalletConnectIcon from '@/public/wallet-connect.png';
import { IoCloseOutline } from "react-icons/io5";

const buttonStyle = 'h-[56px] flex w-full items-center font-poppins text-white font-medium text-[20px] gap-x-8';

interface AuthModalProps {
    onClose: () => void
}

const Loader: React.FC = () => {
    return (
        <main className='page h-screen bg-[#ffffff] inset-0 fixed z-50 flex flex-col justify-center items-center'>
            <img src={LoaderIcon.src} />
            <p className='text-[#cdcdcd]'>Loading....</p>
        </main>
    )
}

const AuthModal: React.FC<AuthModalProps> = ({onClose}) => {
  return (
    <main className='page h-screen bg-[#fffffff8] inset-0 fixed z-50 flex justify-center items-center'>
      <div className='w-[570px] h-[400px] bg-[#1d59f6] rounded-lg p-4 flex flex-col justify-center items-center relative'>
        <h1 className='font-primary text-white text-[32px] font-semibold'>Connect your Wallet</h1>
        <p className='text-[#FFFFFF99] w-[340px] text-center'>
          If you don't have a wallet, you can select a provider and create one now.
        </p>
        <div className='border-t border-[#FFFFFF33] w-full h-1 mt-4 flex-grow flex-col flex justify-between items-center py-8 px-12'>
          <button className={buttonStyle}>
            <img src={Metamask.src} className='w-[55px] h-[53px]' />
            <p>MetaMask</p>
          </button>
          <button className={buttonStyle}>
            <img src={CoinbaseIcon.src} className='w-[42px] h-[42px]' />
            <p>Coinbase Wallet</p>
          </button>
          <button className={buttonStyle}>
            <img src={WalletConnectIcon.src} className='w-[47px] h-[43px]' />
            <p>Wallet connect</p>
          </button>
        </div>
        <button className='absolute top-0 right-0 p-4' onClick={onClose}><IoCloseOutline className='text-[24px] text-[#FFFFFF99]' /></button>
      </div>
    </main>
  );
};

export default AuthModal;
