import { useEffect, useState } from 'react';
import { getScreenWidth } from '../../../lib/screenUtils';
import Toggle from 'react-styled-toggle';

const Switch = ({onClose}) => {
  const screenWidth = getScreenWidth();
  const switchProps = {
    slider: screenWidth >= 1440 ? 35 : 35 * 0.75,
    toggleWidth: screenWidth >= 1440 ? 70 : 60,
    toggleHeight: screenWidth >= 1440 ? 40 : 30,
  };

  useEffect(() => {
    const handleResize = () => {
      const newScreenWidth = getScreenWidth();
      const newSwitchProps = {
        slider: screenWidth >= 1440 ? 35 : 35 * 0.75,
        toggleWidth: screenWidth >= 1440 ? 70 : 60,
        toggleHeight: screenWidth >= 1440 ? 40 : 30,
      };
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Toggle backgroundColorChecked='#5FDBA7' backgroundColorUnchecked='#ff0000' width={switchProps.toggleWidth} height={switchProps.toggleHeight} sliderHeight={switchProps.slider} sliderWidth={switchProps.slider} onChange={onClose} />
  );
};

export default Switch;
