import React, { useState, useEffect } from 'react'
import { client, urlFor } from "../../client";
import { AppWrap } from "../../wrapper"
import ReactToolTip from "react-tooltip";
import { motion } from "framer-motion"

import "./Skills.scss";

const Skills = () => {
    
    const [skills, setSkills] = useState([]);
    const [experiences, setExperience] = useState([]);

    useEffect(()=>{
        const skillsQuery = '*[_type == "skills"]';
        const query = '*[_type == "experiences"]';

            client.fetch(query)
                .then((data)=>{
                    setExperience(data);
                    console.log(data);
            })
            client.fetch(skillsQuery)
                .then((data)=>{
                    setSkills(data);
            })

    },[])

    return (
            
        <>

            <h2 className="head-text">
                Skills & Experience
            </h2>

            <div className="app__skills-container">
                <motion.div className='app__skills-list'>
                    {skills.map((skill)=>(
                        <motion.div 
                            whileInView={{opacity: [0, 1]}}
                            transition= {{duraiton : 0.5}}
                            className="app__skills-item app__flex"
                            key={skill.name}
                        >
                            <div className="app__flex" style = {{backgroundColor: skill.bgColor}}>
                                <img src={urlFor(skill.icon)} alt={skill.name} />

                            </div>
                            <p className="p-text">
                                {skill.name}
                            </p>
                        </motion.div>

                    ))}

                </motion.div>
                <motion.div className = "app__skill-exp">
                    {experiences.map((experience)=>(
                            <motion.div
                                className = "app__skills-exp-item"
                                key = {experience.name}
                            >
                                <div className="app__skills-exp-year">

                                    <p className="bold-text">
                                        {experience.year}
                                    </p>
                                </div>
                                <motion.div
                                    className = "app__skills-exp-works"
                                >
                                    {experience.works.map((work)=>(

                                        <>
                                                <motion.div
                                                    whileInView={{ opacity: [0, 1] }}
                                                    transition={{ duraiton: 0.5 }}
                                                    className="app__skills-exp-work app__flex"
                                                    data-tip
                                                    data-for = {work.name}
                                                    key={work.name}
                                                >
                                                    <h4 className="bold-text">
                                                        {work.name}
                                                    </h4>

                                                    <p className="p-text">
                                                        {work.company}
                                                    </p>

                                                </motion.div>


                                                <ReactToolTip
                                                    id = {work.name}
                                                    effect = 'solid'
                                                    arrowColor = "#fff"
                                                    className = "skills-toolTip"
                                                >
                                                    {work.desc}
                                                </ReactToolTip>
                                        </>
                                    ))}

                                </motion.div>

                            </motion.div>

                    ))}
                    
                </motion.div>
                
            </div>

        </>
    )
}

export default AppWrap(Skills, "skills")