import React , {useState} from 'react'

import { images } from "../../constants";
import { client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";


const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: ''});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loding, setLoding] = useState(false);
    
    const { name, email, message} = formData;

    const handleOnChange = (e)=>{
        const {name, value} = e.target;

        setFormData({...formData, [name]: value});
    }
    const handleSubmit = (e)=>{
        setLoding(true);

        const contact = {
            _type : 'contact',
            name: name,
            email: email,
            message: message,
        }

        client.create(contact)
            .then(()=>{
                setLoding(false);
                setIsFormSubmitted(true);
            })
    }
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
            {!isFormSubmitted? 
            <div className="app__footer-form app__flex">
                <div className="app__flex">
                    <input type="text" className="p-text" placeholder='Your Name' value = {name} onChange = {handleOnChange} name = "name"/>
                </div>
                <div className="app__flex">
                    <input type="email" className="p-text" placeholder='Your Email' value = {email} onChange = {handleOnChange} name = "email"/>
                </div>
                <div>
                    <textarea
                        className='p-text'
                        placeholder = "Your Messages"
                        value = {message}
                        name = "message"
                        onChange={handleOnChange}


                    />
                </div>
                <button type = "button" className = "p-text" onClick={handleSubmit}>{loding? "Sending..." : "Send Message"}</button>

            </div>
            : <div className="head-text">Thank You for Getting in touch!</div>
            }
        </>
    )
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    "app__whitebg")