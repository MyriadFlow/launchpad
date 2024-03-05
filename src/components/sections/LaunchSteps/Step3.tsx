import { IoCloseOutline } from "react-icons/io5";
import React from "react";

interface Step3Props {
    onContinue: () => void
}

const Step3: React.FC<Step3Props> = ({onContinue}) => {
    return(
        <div className='w-full h-screen fixed top-0 right-0 bg-white inset-0 flex items-center justify-center'>
            <div className='xl:w-[710px] xl:h-[510px] w-[533px] h-[383px] bg-[#6459e9] rounded-md flex flex-col items-center justify-center gap-y-9 xl:gap-y-12 relative'>
                <p className='font-semibold text-white xl:text-[32px] text-[24px]'>Well Done!</p>
                <p className='font-normal xl:text-[28px] text-[21px] text-white text-center xl:w-[590px] w-[443px]'></p>
                <button className='absolute top-0 right-0 p-4'><IoCloseOutline className='text-[24px] text-[#FFFFFF99]' onClick={onContinue}/></button>
            </div>
        </div>
    );
}

export default Step3;