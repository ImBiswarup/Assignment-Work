import React, { useEffect, useRef, useState } from 'react';

const AnalogClock = ({ speed }) => {
    const [time, setTime] = useState(new Date());
    const [remainingTime, setRemainingTime] = useState(7200000); // 120 minutes in milliseconds
    const intervalRef = useRef(null);

    useEffect(() => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setTime(prevTime => {
                const newTime = new Date(prevTime.getTime() - 1000);
                setRemainingTime(prevRemainingTime => prevRemainingTime - speed);
                return newTime;
            });
        }, speed);
        return () => clearInterval(intervalRef.current);
    }, [speed]);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const hourStyle = {
        transform: `rotate(-${(hours % 12) * 30 + minutes / 2}deg)`,
    };
    const minuteStyle = {
        transform: `rotate(-${minutes * 6}deg)`,
    };
    const secondStyle = {
        transform: `rotate(-${seconds * 6}deg)`,
    };

    const formatRemainingTime = (milliseconds) => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${hours}h ${minutes}m ${seconds}s`;
    };

    return (
        <div className="flex flex-col items-center">
            <div className="clock bg-gray-800 text-white w-72 h-72 rounded-full flex items-center justify-center relative">
                <div className="clock-face w-full h-full rounded-full border-4 border-gray-400 flex items-center justify-center relative">
                    <div className="hand hour w-1/12 h-1/3 bg-gray-400 absolute" style={hourStyle} />
                    <div className="hand minute w-1/12 h-1/2 bg-gray-400 absolute" style={minuteStyle} />
                    <div className="hand second w-1/24 h-2/3 bg-red-500 absolute" style={secondStyle} />
                    <div className="center bg-gray-400 w-4 h-4 rounded-full absolute" />
                </div>
            </div>
            <div className="mt-4 text-lg">
                Remaining Time: {formatRemainingTime(remainingTime)}
            </div>
        </div>
    );
};

export default AnalogClock;
