import React, { useContext } from 'react';
import { TimeContext } from '../context/TimeProvider';

const ShareButton = () => {
  const { generateShareUrl } = useContext(TimeContext);

  return (
    <button onClick={generateShareUrl} className="mt-4 px-4 py-2 bg-orange-500 text-white rounded">
      Share URL
    </button>
  );
};

export default ShareButton;
