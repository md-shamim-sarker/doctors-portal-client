import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import doctor from '../../../assets/images/doctor.png';

const MakeAppointment = () => {
    return (
        <div className="hero my-5 lg:mt-40" style={{backgroundImage: `url(${appointment})`}}>
            <div className="hero-content flex-col lg:flex-row">
                <img src={doctor} className="hidden lg:block w-1/2 -mb-4 -mt-40" alt='...' />
                <div className='text-white w-full lg:w-1/2'>
                    <h3 className='text-primary font-bold'>Appointment</h3>
                    <h1 className="text-5xl font-bold">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;