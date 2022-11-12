import React from 'react';

const Testimonial = ({testimonial}) => {
    const {name, image, review, location} = testimonial;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <div>
                    <p>{review}</p>
                </div>
                <div className='flex items-center gap-3 my-5'>
                    <img src={image} alt="..." className='w-16 h-16 rounded-full border-2 border-primary' />
                    <div>
                        <h2 className='text-xl font-bold'>{name}</h2>
                        <h3>{location}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;