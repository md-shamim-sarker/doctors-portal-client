import React from 'react';
import banner from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';

const Banner = () => {
    return (
        <div className="hero bg-base-200 py-5 lg:py-32"
            style={{
                background: `url(${bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom left',
            }}
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="w-full lg:w-1/2 rounded-lg shadow-2xl" alt='...' />
                <div className='w-full lg:w-1/2'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;