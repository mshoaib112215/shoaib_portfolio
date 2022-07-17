import React from 'react'

import { images } from "../../constants";
import { client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";


const Footer = () => {
    return (
        <>
            <h2 className="head-text">Take a Cofee & Chat with me</h2>
            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="Email" />
                    <a href = "mailto: mshoaib112215@gmail.com" className = "p-text">mshoaib112215@gmail</a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="Mobile" />
                    <a href="tel: +923043979727" className="p-text">+923043979727</a>
                </div>
            </div>
        </>
    )
}

export default Footer