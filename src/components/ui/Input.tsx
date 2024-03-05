import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  rounded?: boolean; // Optional 'rounded' prop with default value false
}

const Input: React.FC<InputProps> = ({ rounded = false, ...props }) => {
  const borderClass = rounded ? 'rounded-lg' : ''; // Conditionally apply 'rounded-lg' class

  return (
    <input
      {...props}
      className={`px-4 border-0 outline-none w-full bg-[#5347E780] xl:h-[42px] h-[34px] xl:text-[16px] text-[14px] ${borderClass}`}
    />
  );
};

export default Input;
