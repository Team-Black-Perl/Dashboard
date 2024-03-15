// Alerts.tsx
import React from 'react';
import fight1 from '../assets/fight1.jpeg';
import Header from '../components/header';
import Card from '../components/Card';

const Alerts: React.FC = () => {
    return (
        <div className='h-screen w-screen flex flex-col'>
            <div className="flex-grow bg-gray-100 rounded-lg overflow-hidden">
                <div className="h-full flex flex-col justify-center items-center">
                    <Card
                        location="Variable Location 1"
                        ip="Variable IP 1"
                        imageSrc={fight1}
                        altText="fight.png"
                    />
                    <Card
                        location="Variable Location 2"
                        ip="Variable IP 2"
                        imageSrc={fight1}
                        altText="fight.png"
                    />
                </div>
            </div>
        </div>
    );
};

export default Alerts;
