import React, { useState, useEffect } from 'react'
import { AiFillEye , AiFillGithub} from "react-icons/ai"
import { client, urlFor} from "../../client";
import { AppWrap } from "../../wrapper"
import { motion } from "framer-motion"

import "./Work.scss"


const Work = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1})

    const [works, setWorks] = useState([]);
    const [filterWork, setFilterWork] = useState([]);


    const handleWorkFilter = (items) =>{
        setActiveFilter(items);
        setAnimateCard({y:100, opacity: 0});

        setTimeout(() => {
            setAnimateCard({y:0, opacity: 1});

            if(items === 'All'){
                setFilterWork(works);
            }
            else{
                setFilterWork(works.filter((works)=>works.tags.includes(items)))
            }
        }, 500);
            
        


    }

    useEffect(()=>{
        const query = '*[_type == "works"]';

        client.fetch(query)
         .then((data)=>{
            setWorks(data);
            setFilterWork(data);
         }) 

    },[])
    

    return (
        <>
            
                <h2 className="head-text">
                    My Crative 
                    <span> Portfolio </span>
                    
                    Section
                </h2>
            
            <div className="app__work-filter">
                {['UI/UX', 'Web App', 'React Js', 'All'].map((items, index)=>(
                    <div
                        key = {index}
                        onClick = {()=>handleWorkFilter(items)}
                        className ={`app__work-filter-items app__flex p-text ${activeFilter === items? 'item-active': ''}`}
                    >
                        {items}
                    </div>

                ))}
            </div>

            <motion.div
                animate = {animateCard}
                transition = {{duration: 0.5 , delayChildren: 0.5}}
                className= "app__work-portfolio"
            >
                {filterWork.map((work, item)=>(
                    <div className="app__work-item app__flex"
                    key = {item}>
                        <div 
                            className="app__work-img app__flex"
                        >
                            <img src={urlFor(work.imgUrl)} alt={work.name} />

                            <motion.div
                                whileHover = {{opacity: [0, 1]} }
                                transition = {{ duration: 0.25, staggerChildren: 0.5, ease: 'easeInOut'}}
                                className = "app__work-hover app__flex"

                            >
                                <a 
                                    href={work.projectLink}
                                    target = "_blank"
                                    rel = 'noreferrer'
                                >
                                    <motion.div
                                        whileInView = {{scale: [0,1]}}
                                        whileHover = {{scale: [1, 0.9], }}
                                        transition = {{ duration: 0.25}}
                                        className = "app__flex"
                                    >
                                        <AiFillEye/>
                                    </motion.div>

                                </a>
                                <a 
                                    href={work.codeLink}
                                    target = "_blank"
                                    rel = 'noreferrer'
                                >
                                    <motion.div
                                        whileInView = {{scale: [0,1]}}
                                        whileHover = {{scale: [1, 0.9], }}
                                        transition = {{ duration: 0.25}}
                                        className = "app__flex"
                                    >
                                        <AiFillGithub/>
                                    </motion.div>

                                </a>

                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">{work.title}</h4>
                            <p className="p-text" style = {{marginTop: 10}}>{work.description}</p>

                            <div className="app__work-tag app__flex">
                                <p className="p-text">
                                    {work.tags[0]}
                                </p>
                            </div>

                        </div>



                    </div>
                ))}
            </motion.div>
            
        </>

        
    )
}

export default AppWrap(Work, 'work');