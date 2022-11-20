import React from 'react';
import banner from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import {DayPicker} from 'react-day-picker';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    return (
        <div className="hero bg-base-200 py-5 lg:py-32"
            style={{
                background: `url(${bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom left',
            }}
        >
            <div className="hero-content flex-col lg:flex-row-reverse gap-x-10">
                <img src={banner} className="w-full lg:w-1/2 rounded-lg shadow-2xl" alt='...' />
                <div className='w-full lg:w-1/2 flex items-center lg:items-end flex-col'>
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    ></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;