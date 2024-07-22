import React from 'react';
import { motion } from 'framer-motion';
import html from '../assets/html.png';
import css from '../assets/css.png';
import java from '../assets/java.webp';
import python from '../assets/python.png';
import tailwind from '../assets/tailwind.png';
import reactImg from '../assets/react.png';
import javascript from '../assets/javascript.png';
import arduino from '../assets/arduino.png';
import pandas from '../assets/pandas.ico';

const Skills = () => {
    const skillVariants = {
        initial: {
            scale: 1,
            boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
        },
        hover: {
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(255, 255, 255)",
            transition: { duration: 0.3 }
        }
    };

    return (
        <div name='skills' className='bg-[#383c42] text-gray-200 w-full h-screen'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#61AFEF]'>Skills</p>
                    <p className='py-4'>// Here are languages and technologies I am comfortable with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    {/* Skill Item */}
                    <SkillItem img={html} title="HTML" variants={skillVariants} />
                    <SkillItem img={css} title="CSS" variants={skillVariants} />
                    <SkillItem img={javascript} title="Javascript" variants={skillVariants} />
                    <SkillItem img={java} title="Java" variants={skillVariants} />
                    <SkillItem img={python} title="Python" variants={skillVariants} />
                    <SkillItem img={reactImg} title="React" variants={skillVariants} />
                    <SkillItem img={pandas} title="Pandas" variants={skillVariants} />
                    <ArduinoSkillItem img={arduino} title="Arduino" variants={skillVariants} />
                    {/* End Skill Items */}
                </div>
            </div>
        </div>
    );
}

const SkillItem = ({ img, title, variants }) => (
    <motion.div
        className='p-4 border-2 border-dotted border-[#61AFEF] rounded-lg'
        variants={variants}
        whileHover="hover"
        initial="initial"
    >
        <img className='w-20 mx-auto' src={img} alt={title} />
        <p className='my-4'>{title}</p>
    </motion.div>
);

const ArduinoSkillItem = ({ img, title, variants }) => (
    <motion.div
        className='p-4 border-2 border-dotted border-[#61AFEF] rounded-lg'
        variants={variants}
        whileHover="hover"
        initial="initial"
        style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            height: '100%',
            alignItems: 'center', 
        }}
    >
        <img 
            className='w-20' 
            src={img} 
            alt={title} 
            style={{ 
                marginBottom: '1rem'
            }} 
        />
        <p 
            className='my-4'
            style={{
                marginTop: '-1 rem',
                marginBottom: '0'
            }}
        >
            {title}
        </p>
    </motion.div>
);



export default Skills;