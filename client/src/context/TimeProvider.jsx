import React, { useState, createContext, useEffect } from 'react';

const TimeContext = createContext();

const TimeProvider = ({ children }) => {
  const getInitialSpeed = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('speed') ? parseInt(params.get('speed')) : 1000;
  };

  const getInitialRemainingTime = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('remainingTime') ? parseInt(params.get('remainingTime')) : 7200000;
  };

  const [speed, setSpeed] = useState(getInitialSpeed);
  const [remainingTime, setRemainingTime] = useState(getInitialRemainingTime);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has('speed')) {
      setSpeed(parseInt(params.get('speed')));
    }
    if (params.has('remainingTime')) {
      setRemainingTime(parseInt(params.get('remainingTime')));
    }
  }, []);

  const generateShareUrl = () => {
    const url = `${window.location.origin}${window.location.pathname}?speed=${speed}&remainingTime=${remainingTime}`;
    navigator.clipboard.writeText(url).then(() => {
      alert('URL copied to clipboard');
    });
  };

  return (
    <TimeContext.Provider value={{ speed, setSpeed, remainingTime, setRemainingTime, generateShareUrl }}>
      {children}
    </TimeContext.Provider>
  );
};

export { TimeProvider, TimeContext };
