import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const Contact = () => {
    return (
        <div className="hero my-5 lg:mt-40" style={{backgroundImage: `url(${appointment})`}}>
            <div className="hero-content">
                <div className='text-white w-full'>
                    <h3 className='text-primary font-bold text-center'>Contact Us</h3>
                    <h1 className="text-3xl font-bold text-center">Stay connected with us</h1>
                    <form className='flex flex-col items-center'>
                        <input type="text" placeholder="Email Address" className="input w-full text-slate-800 my-3" />
                        <input type="text" placeholder="Subject" className="input w-full text-slate-800 my-3" />
                        <textarea className="block textarea my-3 w-full text-slate-800" placeholder="Your message"></textarea>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;