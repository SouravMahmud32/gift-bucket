import React from 'react';
import Clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './infoCard';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: "Opening Hours",
            description: "Open @ 9am to 7pm",
            icon: Clock,
            bgClass: "bg-gradient-to-r from-primary to-secondary" 
        },
        {
            id: 2,
            name: "Visit our location",
            description: "Brooklyn, NY 10036, United States",
            icon: marker,
            bgClass: "bg-accent" 
        },
        {
            id: 3,
            name: "Contact us now",
            description: "+000 123 456789",
            icon: phone,
            bgClass: "bg-gradient-to-r from-primary to-secondary" 
        },
    ]
    return (
        <div className='grid mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                cardData.map(card => <InfoCard 
                key={card.id} 
                card={card}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;