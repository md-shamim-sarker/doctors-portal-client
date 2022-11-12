import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const infoCardsData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Visit Our Location',
            description: 'Brooklyn, NY 10036, United States',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us now',
            description: '+000 123 456789',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        }
    ];
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-5'>
            {
                infoCardsData.map(infoCard => <InfoCard
                    key={infoCard.id}
                    infoCard={infoCard}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;