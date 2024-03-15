// Card.tsx
import React, { useState } from 'react';

interface CardProps {
    location: string;
    ip: string;
    imageSrc: string;
    altText: string;
}

const Card: React.FC<CardProps> = ({ location, ip, imageSrc, altText }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [isDone, setIsDone] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const handleClose = () => {
        setIsClicked(false);
    };

    const handleMarkAsDone = () => {
        setIsDone(true);
        setTimeout(() => setIsClicked(false), 500); // Close the pop-up after animation
    };

    return (
        <div className={`bg-white shadow-md rounded-lg my-4 mx-2 w-full max-w-screen-lg relative ${isClicked ? 'bg-blue-200' : ''}`}>
            <div className="flex items-center justify-between px-6 py-4" onClick={handleClick}>
                <div style={{ maxWidth: '500px', maxHeight: '500px', overflow: 'hidden' }}>
                    <img className="mr-4" src={imageSrc} alt={altText} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </div>
                <div className="ml-4 flex flex-col justify-center">
                    <div className="text-gray-700 text-base text-center mb-2">Location: {location}</div>
                    <div className="text-gray-700 text-base text-center">IP: {ip}</div>
                </div>
            </div>
            {isClicked && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg p-8 flex flex-col items-center">
                        <div className="mt-4 flex items-center">
                            <img src={imageSrc} alt="Additional Image" className="h-24 w-24" />
                            <p className="ml-4">Your additional text here...</p>
                        </div>
                        <p>Additional information can go here...</p>
                        <div className="mt-4 flex items-center space-x-4">
                            <button className={`bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded ${isDone ? 'animate-pulse' : ''}`} onClick={handleMarkAsDone}>
                                {isDone ? 'Marked as Done' : 'Mark as Done'}
                            </button>
                            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded" onClick={handleClose}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
