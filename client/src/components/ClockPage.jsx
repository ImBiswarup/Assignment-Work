import React, { useState } from 'react';
import AnalogClock from './AnalogClock'
import Slider from './Slider';
import ShareButton from './ShareButton';

const ClockPage = () => {
    const [speed, setSpeed] = useState(1000);

    const generateShareUrl = () => {
        const currentUrl = window.location.href;
        const shareUrl = `${currentUrl}?speed=${speed}`;
        alert(`Share this URL: ${shareUrl}`);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen h-screen bg-gray-900 text-white">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <AnalogClock speed={speed} />
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
                <Slider speed={speed} setSpeed={setSpeed} />
            </div>
            <div className="mt-4">
                <ShareButton generateShareUrl={generateShareUrl} />
            </div>
        </div>
    );
};

export default ClockPage;
