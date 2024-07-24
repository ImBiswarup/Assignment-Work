import React from 'react';
import AnalogClock from '../components/AnalogClock';
import Slider from '../components/Slider';
import ShareButton from '../components/ShareButton';

const ClockPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <AnalogClock />
      <Slider />
      <ShareButton />
    </div>
  );
};

export default ClockPage;
