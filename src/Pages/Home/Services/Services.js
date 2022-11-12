import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            title: 'Fluoride Treatment',
            image: fluoride,
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 2,
            title: 'Cavity Filling',
            image: cavity,
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 3,
            title: 'Teeth Whitening',
            image: whitening,
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
    ];
    return (
        <div>
            <div className='text-center mt-20'>
                <h3 className='text-primary font-bold'>OUR SERVICES</h3>
                <h2 className='text-2xl font-bold'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 px-5 my-10'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;