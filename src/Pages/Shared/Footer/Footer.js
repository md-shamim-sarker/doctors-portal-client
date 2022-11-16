import React from 'react';
import {Link} from 'react-router-dom';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer
            style={{
                background: `url(${footer})`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom'
            }}>
            <div className="footer p-10 grid grid-cols-2 lg:grid-cols-3 justify-items-center">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to={"/"} className="link link-hover">Branding</Link>
                    <Link to={"/"} className="link link-hover">Design</Link>
                    <Link to={"/"} className="link link-hover">Marketing</Link>
                    <Link to={"/"} className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to={"/"} className="link link-hover">Branding</Link>
                    <Link to={"/"} className="link link-hover">Design</Link>
                    <Link to={"/"} className="link link-hover">Marketing</Link>
                    <Link to={"/"} className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to={"/"} className="link link-hover">Branding</Link>
                    <Link to={"/"} className="link link-hover">Design</Link>
                    <Link to={"/"} className="link link-hover">Marketing</Link>
                    <Link to={"/"} className="link link-hover">Advertisement</Link>
                </div>
            </div>
            <div className='text-center my-10'>
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;