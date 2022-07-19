import React from 'react'
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF} from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
          <a href = "https://twitter.com/Shoaib11221515" target = "_blank">
            <BsTwitter/>
          </a>
        </div>
        <div>
          <a href = "https://web.facebook.com/profile.php?id=100055250374694" target = "_blank">
            <FaFacebookF/>
          </a>
        </div>
        <div>
          <a href = "https://www.instagram.com/m_shoaib_nazir/" target = "_blank">
            <BsInstagram/>
          </a>
        </div>
    </div>
  )
}

export default SocialMedia