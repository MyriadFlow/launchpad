import React from "react";

interface FusionSeriesProps {
  text: string;
}

export default function FusionSeries(props: FusionSeriesProps) {
  const { text } = props;

  return (
    <div>
      <button className='bg-[#6e42e7] w-fit h-[48px] px-8 py-[4px] font-semibold text-[20px] text-white rounded-full mt-12'>
        {text}
      </button>
    </div>
  );
}
