import React, { useState } from 'react';
import { TbClipboardText } from 'react-icons/tb';
import { PiImagesBold, PiCertificateBold } from 'react-icons/pi';
import EthernumIcon from '@/public/ethernum-icon-custom';

// Import your image files
import SignatureSeriesImage from '@/public/signature-series.png';
import FusionSeriesImage from '@/public/fussion-series.png';
import InstagenImage from '@/public/instagen.png';
import EthernumPassImage from '@/public/etherum-pass.png';
import EternalSoulImage from '@/public/eternal-soul.png';
import PhygitalImage from '@/public/phygital.png'

interface ContractLaunchProps {
  onLaunch: () => void
}

const linkButton = 'flex font-normal xl:text-[25px] text-[18px] text-[#bdbef7] gap-x-3 xl:gap-x-4 items-center cursor-pointer';

const selectedLinkButton = 'flex font-normal xl:text-[25px] text-[18px] text-white gap-x-3 xl:gap-x-4 items-center font-semibold cursor-pointer';

const ContractLaunch: React.FC<ContractLaunchProps> = ({onLaunch}) => {
  const [selectedButton, setSelectedButton] = useState<'signature' | 'fussion' | 'instagen' | 'ethernum' | 'eternal' | 'phygital'>('signature');

  // Initialize dynamicContent state with values for 'signature'
  const [dynamicContent, setDynamicContent] = useState<{ header: string; paragraph: string; image: string } | null>({
    header: 'Launch Signature Series',
    paragraph: 'Deploy your own ERC-721 contract & launch Signature Series of assets',
    image: SignatureSeriesImage.src,
  });

  const handleButtonClick = (buttonType: 'signature' | 'fussion' | 'instagen' | 'ethernum' | 'eternal' | 'phygital') => {
    // Set the selected button
    setSelectedButton(buttonType);

    // Set dynamic content based on the selected button
    switch (buttonType) {
      case 'signature':
        setDynamicContent({ header: 'Launch Signature Series', paragraph: 'Deploy your own ERC-721 contract & launch Signature Series of assets', image: SignatureSeriesImage.src });
        break;
      case 'fussion':
        setDynamicContent({ header: 'Launch Fusion Series', paragraph: 'Deploy your own ERC-1155 contract & Launch Fusion series of assets', image: FusionSeriesImage.src });
        break;
      case 'instagen':
        setDynamicContent({ header: 'Launch Instagen', paragraph: 'Description for Instagen', image: InstagenImage.src });
        break;
      case 'ethernum':
        setDynamicContent({ header: 'Launch Ethernum Pass', paragraph: 'Description for Ethernum', image: EthernumPassImage.src });
        break;
      case 'eternal':
        setDynamicContent({ header: 'Launch Eternal Soul', paragraph: 'Description for Eternal Soul', image: EternalSoulImage.src });
        break;
      case 'phygital':
        setDynamicContent({ header: 'Launch Phygital Collection', paragraph: 'Description for Phygital', image: PhygitalImage.src });
        break;
      default:
        setDynamicContent(null);
        break;
    }
  };

  return (
    <div className="w-full h-screen fixed top-0 right-0 bg-white inset-0 flex items-center justify-center z-50">
      <div className="xl:w-[990px] xl:h-[640px] w-[743px] h-[480px] rounded-xl flex items-center justify-center gap-y-9 xl:gap-y-12 relative">
        {/* Left Section */}
        <div className="h-full flex-grow bg-[#515fef] rounded-l-xl xl:pt-[6.6rem] pt-[5rem] xl:pl-12 pl-8">
          <div className="flex flex-col gap-y-10">
            <h1 className="text-white xl:text-[30px] text-[23px] font-semibold">Create As</h1>
            <div className="flex flex-col gap-y-3 xl:gap-y-4">
              {/* Button for Signature Series */}
              <div
                className={selectedButton === 'signature' ? selectedLinkButton : linkButton}
                onClick={() => handleButtonClick('signature')}
              >
                <TbClipboardText />
                <p>Signature Series</p>
              </div>
              {/* Button for Fusion Series */}
              <div
                className={selectedButton === 'fussion' ? selectedLinkButton : linkButton}
                onClick={() => handleButtonClick('fussion')}
              >
                <PiImagesBold />
                <p>Fusion Series</p>
              </div>
              {/* Button for Instagen */}
              <div
                className={selectedButton === 'instagen' ? selectedLinkButton : linkButton}
                onClick={() => handleButtonClick('instagen')}
              >
                <TbClipboardText />
                <p>Instagen</p>
              </div>
              {/* Button for Ethernum */}
              <div
                className={selectedButton === 'ethernum' ? selectedLinkButton : linkButton}
                onClick={() => handleButtonClick('ethernum')}
              >
                <EthernumIcon fill={selectedButton === 'ethernum' ? '#ffffff' : '#bdbef7'} />
                <p>Ethernum Pass</p>
              </div>
              {/* Button for Eternal Soul */}
              <div
                className={selectedButton === 'eternal' ? selectedLinkButton : linkButton}
                onClick={() => handleButtonClick('eternal')}
              >
                <PiCertificateBold />
                <p>Eternal Soul</p>
              </div>
              <div
                className={selectedButton === 'phygital' ? selectedLinkButton : linkButton}
                onClick={() => handleButtonClick('phygital')}
              >
                <PiImagesBold />
                <p>Phygital Collection</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full xl:w-[660px] w-[495px] bg-[#c4d1fc] rounded-r-xl xl:px-16 flex flex-col justify-center items-center px-12">
          {dynamicContent && (
            <div className='w-full flex flex-col items-center'>
              <img src={dynamicContent.image} alt="Dynamic Content" className="xl:w-[380px] w-[285px] xl:h-[380px] h-[285px]" />
              <div className='w-full items-center flex justify-center'>
                <div className="w-full flex-grow xl:mt-8 mt-6">
                    <h2 className="xl:text-[32px] text-[24px] font-semibold">{dynamicContent.header}</h2>
                    <p className="mt-2 xl:w-[340px] w-[255px] font-normal xl:text-[20px] text-[15px]">{dynamicContent.paragraph}</p>
                </div>
                <div className='h-full flex items-center justify-center'>
                    <button className='bg-[#5347e7] xl:w-[140] w-[105px] text-white rounded-full xl:h-[32px] h-[24px] xl:text-[18px] text-[14px] items-center flex justify-center my-auto' onClick={onLaunch}>Launch</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContractLaunch;
