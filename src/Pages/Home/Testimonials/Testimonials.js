import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const testimonialsData = [
        {
            id: 1,
            name: 'Winson Herry',
            image: people1,
            location: 'California',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id: 2,
            name: 'Black Widow',
            image: people2,
            location: 'California',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id: 3,
            name: 'Winson Herry',
            image: people3,
            location: 'California',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        }
    ];
    return (
        <>
            <div className="w-full hero">
                <div className="w-full px-3 lg:px-5 hero-content justify-between items-center">
                    <div>
                        <h3 className='text-primary font-bold'>Testimonial</h3>
                        <h1 className="text-4xl lg:text-5xl font-bold">What Our Patients Says</h1>
                    </div>
                    <img src={quote} className="w-24 lg:w-32" alt='...' />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 px-3 my-8 lg:px-10 mb-10'>
                {
                    testimonialsData.map(testimonial => <Testimonial
                        key={testimonial.id}
                        testimonial={testimonial}
                    ></Testimonial>)
                }
            </div>
        </>
    );
};

export default Testimonials;