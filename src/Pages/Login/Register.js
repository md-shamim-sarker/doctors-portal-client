import React from 'react';
import {Link} from 'react-router-dom';
import login from '../../assets/images/login.png';

const Register = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    };
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={login} alt="..." className='w-96' />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={onSubmitHandler} className="card-body">
                        <h2 className='text-center text-2xl font-bold'>Registration Form</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input name='fullName' type="text" placeholder="Full Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <button type='submit' className="btn btn-primary">Register</button>
                    </form>
                    <div className='card-body -mt-16'>
                        <div className='flex gap-1'>
                            <span>You already have account? Please</span>
                            <Link to={"/login"} className='underline'>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;