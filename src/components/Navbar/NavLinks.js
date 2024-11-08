import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-white hover:text-grey" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-4 font-extrabold text-white hover:text-grey" smooth to="/#services">
                Services
            </HashLink>
            <HashLink className="px-4 font-extrabold text-white hover:text-grey" to="/">
                Portfolio
            </HashLink>
            <HashLink className="px-4 font-extrabold text-white hover:text-grey" to="/contact#contact">
                Contact Us
            </HashLink>
        </>
    )
}

export default NavLinks;
