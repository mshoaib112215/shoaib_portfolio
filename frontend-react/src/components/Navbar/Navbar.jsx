import React, { useState } from 'react'
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import "./Navbar.scss"

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (

        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={images.logo} alt="Logo" />
            </div>
            <ul className='app__navbar-link'>
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                    <li key={`link-${item}`} className="app__flex p_text" >
                        <div />
                        <a href={item}> {item}</a>
                    </li>
                ))};

            </ul>
            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {toggle && (<motion.div
                    whileInView={{ x: [300, 0] }}
                    transition={{ duration: 0.50, ease: "easeOut" }}
                >
                    <HiX onClick={() => setToggle(false)} />
                    <ul>
                        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                            <li key={item}>
                                <a href={`#${item}`} onClick={() => setToggle(false)}> {item}</a>
                            </li>
                        ))};

                    </ul>
                </motion.div>)
                }



            </div>
        </nav >
    )
}

export default Navbar