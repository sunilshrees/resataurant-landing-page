import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

function Navbar() {
    const [openNav, setOpenNav] = useState(false);
    const [nav, setNav] = useState(false);

    const scrollHandler = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false);
        }
    };
    const clickHandler = () => {
        setNav(true);
        setOpenNav(!openNav);
    };
    window.addEventListener('scroll', scrollHandler);
    return (
        <nav className={nav ? 'nav active ' : 'nav'}>
            <div className='logo'>
                <h3>prime</h3>
            </div>
            <ul
                className={openNav ? 'menu open' : 'menu'}
                onClick={() => setOpenNav(false)}>
                <li>Home</li>
                <li>services</li>
                <li>menu</li>
                <li>explore</li>
                <li>booking</li>
                <li>contact us</li>
            </ul>
            <div className='toggle' onClick={clickHandler}>
                {!openNav ? (
                    <FaBars className='icon' />
                ) : (
                    <AiOutlineClose className='icon' />
                )}
            </div>
        </nav>
    );
}

export default Navbar;
