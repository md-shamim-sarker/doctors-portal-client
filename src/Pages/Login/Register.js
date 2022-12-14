import React, {useContext, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import login from '../../assets/images/login.png';
import {AuthContext} from '../../contexts/UserContext';
import useToken from '../../hooks/useToken';

const Register = () => {
    const {createUser, updateUser} = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token) {
        navigate("/");
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(fullName, email, password);
        createUser(email, password)
            .then((result) => {
                updateUser(fullName)
                    .then(() => {
                        console.log(result.user);
                        form.reset();
                        saveUser(fullName, email);
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    };

    const saveUser = (name, email) => {
        const user = {name, email};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            }).catch(err => {
                console.log(err);
            });
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