import React, {useState, useEffect} from 'react'
import { motion } from "framer-motion"
import "./About.scss";
import { AppWrap , MotionWrap} from "../../wrapper"
import { images } from "../../constants"
import { client, urlFor} from "../../client";


const About = () => {
    // const abouts = [

    //     {title:"Web Development" ,description: "I am full stack web developer", imgURL: images.about01},
    //     { title: "UI/UX Designer", description: "I am Good UI/UX designer", imgURL: images.about02},
    //     { title: "UI/UX Designer", description: "I am Good UI/UX designer", imgURL: images.about03},
    //     { title: "UI/UX Designer", description: "I am Good UI/UX designer", imgURL: images.about04},
        
        
    // ]

    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
      const query = '*[_type == "abouts"]';

      client.fetch(query)
        .then((data)=>setAbouts(data));
    }, [ ])
    
    return (
        <>
            <h2 className = "head-text">
                I Know that
                <span> Good apps </span>
                <br/>
                means
                <span> Good Business</span>
            </h2>
            <div className="app__profiles">
                {abouts.map((abouts, item)=>(
                    <motion.div
                    whileInView={{opacity: 1}}
                    whileHover = {{scale: 1.1}}
                    transition = {{duration: 0.5, type : "tween"}}
                    className  = "app__profile-item"
                    key = {abouts.title+item}
                    >
                        <img src={urlFor(abouts.imgUrl)} alt={abouts.title} />
                        {/* <img src={abouts.imgURL} alt={abouts.title} /> */}

                        <h1 className='bold-text' style = {{marginTop:  20}}>{abouts.title}</h1>
                        <p className='p-text' style = {{marginTop:  20}}>{abouts.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(About, "app__abouts"),
    'about',
    "app__whitebg");