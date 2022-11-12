import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';

const Navbar = () => {
    const [open, setOpen] = useState(true);

    const toggleMenuHandler = (event) => {
        event.preventDefault();
        setOpen(!open);
    };

    const menuItems = <>
        <li><NavLink to={"/"} activeclassname="bg-primary">Home</NavLink></li>
        <li><NavLink to={"/about"} activeclassname="bg-primary">About</NavLink></li>
        <li><NavLink to={"/appointment"} activeclassname="bg-primary">Apointment</NavLink></li>
        <li><NavLink to={"/reviews"} activeclassname="bg-primary">Reviews</NavLink></li>
        <li><NavLink to={"/contact-us"} activeclassname="bg-primary">Contact Us</NavLink></li>
        <li><NavLink to={"/login"} activeclassname="bg-primary">Login</NavLink></li>
    </>;

    return (
        <div className="navbar justify-between">
            <div className="navbar-start">
                <div className="dropdown block lg:hidden">
                    <label className="btn btn-circle btn-ghost swap swap-rotate">
                        <button onClick={toggleMenuHandler}>
                            <GiHamburgerMenu className='w-5 h-5'></GiHamburgerMenu>
                        </button>
                    </label>

                    <ul tabIndex={0} className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${open ? "block" : "hidden"}`} onClick={toggleMenuHandler}>
                        {menuItems}
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost normal-case text-xl">Doctor's Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;