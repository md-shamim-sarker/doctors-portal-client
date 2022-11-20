import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import login from '../../assets/images/login.png';
import {AuthContext} from '../../contexts/UserContext';

const Login = () => {
    const {loginWithGoogle, loginUser} = useContext(AuthContext);

    const loginWithGoogleHandler = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result.user);
                console.log('Login with google');
            })
            .catch(error => console.log(error));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        loginUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(err => console.log(err));
    };
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={login} alt="..." className='w-96' />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={onSubmitHandler} className="card-body">
                        <h2 className='text-center text-2xl font-bold'>Login Form</h2>
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
                            <label className="label">
                                <Link to={"/"} className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <button type='submit' className="btn btn-primary">Login</button>
                    </form>
                    <div className='card-body -mt-16'>
                        <button onClick={loginWithGoogleHandler} className="btn btn-primary mt-4">Login with Google</button>
                        <div className='flex gap-1'>
                            <span>You don't have account? Please</span>
                            <Link to={"/register"} className='underline'>Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;