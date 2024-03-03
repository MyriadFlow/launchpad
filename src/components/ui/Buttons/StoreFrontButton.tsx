import React from "react";

interface FusionSeriesProps {
  text: string;
}

export default function FusionSeries(props: FusionSeriesProps) {
  const { text } = props;

  return (
    <div>
      <button className='bg-[#f6f6f6fa] xl:w-[140px] w-[105px] xl:h-[44px] h-[33px] font-normal xl:text-[24px] text-[18px] rounded-sm justify-center items-center'>
        {text}
      </button>
    </div>
  );
}
