import React, { useContext } from 'react';
import { TimeContext } from '../context/TimeProvider';

const Slider = () => {
  const { speed, setSpeed } = useContext(TimeContext);

  return (
    <div className="slider-container flex flex-col items-center">
      <input
        type="range"
        min="100"
        max="2000"
        value={speed}
        onChange={(e) => setSpeed(parseInt(e.target.value))}
        className="slider w-64 accent-orange-500"
      />
      <div className="speed-value mt-2 text-white text-lg">{speed} ms</div>
    </div>
  );
};

export default Slider;
