import React, { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  rounded?: boolean; // Optional 'rounded' prop with default value false
}

const Select: React.FC<SelectProps> = ({ options, rounded = false, ...props }) => {
  const borderClass = rounded ? 'rounded-lg' : ''; // Conditionally apply 'rounded-lg' class

  return (
    <select
      {...props}
      className={`px-2 border-0 outline-none w-full bg-[#5347E780] xl:h-[42px] h-[32px] ${borderClass}`}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
