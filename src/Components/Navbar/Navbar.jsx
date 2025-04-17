import React from "react";
import { Link } from "react-router";

const Navbar = () => {

    const handleClosing = () => {
        document.activeElement.blur();
    }

    const link = <>
        <Link to='/'><button className="ml-2 btn btn-ghost">Home</button></Link>
        <Link to='/readList'><button className="ml-2 btn btn-ghost">Read/Wish List</button></Link>
        <Link to='/about'><button className="ml-2 btn btn-ghost">About</button></Link>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-xs md:btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {" "}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>{" "}
                </svg>
            </div>
            <ul onClick={handleClosing} tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {link}
            </ul>
            </div>
            <Link to="/"><a className="btn btn-ghost md:text-lg text-sm">Boi-Poka</a></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {link}
            </ul>
        </div>
        <div className="navbar-end flex gap-5">
            <button className="btn md:btn-sm btn-xs btn-primary text-white">Sign In</button>
            <button className="btn md:btn-sm btn-xs btn-secondary text-white">Sign Up</button>
        </div>
        </div>
    );
};

export default Navbar;
