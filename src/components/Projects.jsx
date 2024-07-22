import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { Link } from 'react-scroll';
import laligaImg from '../assets/laliga.png';
import portfolioImg from '../assets/portfolio.png';

const projectData = [
  {
    title: 'La Liga 2024-2025 Preedictor',
    description: 'This project uses web scraping and machine learning to predict season standings.',
    githubLink: 'https://github.com/RazinChoudhury/laliga-predictor-webpage',
    demoLink: 'https://razinchoudhury.github.io/laliga-predictor-webpage/',
    image: laligaImg
  },
  {
    title: 'Website Portfolio',
    description: 'Here you can find the code of how this webpade was made.',
    githubLink: 'https://github.com/RazinChoudhury/razinchoudhury-website-portfolio',
    demoLink: <Link to='home' smooth={true} duration={500}>Home</Link>,
    image: portfolioImg
  },
];

const Projects = ({ isMenuOpen }) => {
  const [current, setCurrent] = useState(0);
  const length = projectData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(projectData) || projectData.length <= 0) {
    return null;
  }

  return (
    <div name='projects' className={`w-full h-screen bg-[#383c42] text-white ${isMenuOpen ? 'opacity-0 z-0' : 'opacity-100 z-10'}`}>
      <div className={`max-w-[1240px] mx-auto px-8 pt-32 flex flex-col justify-start h-full ${isMenuOpen ? 'pointer-events-none' : ''}`}>
        <h2 className='text-4xl font-bold inline border-b-4 border-[#61AFEF] mb-8'>
          Projects
        </h2>
        <div className='relative flex justify-center items-start mt-16'>
          <FaArrowCircleLeft onClick={prevSlide} className='absolute top-[50%] left-[30px] text-3xl text-[#61AFEF] cursor-pointer z-10' />
          <FaArrowCircleRight onClick={nextSlide} className='absolute top-[50%] right-[30px] text-3xl text-[#61AFEF] cursor-pointer z-10' />
          {projectData.map((slide, index) => {
            return (
              <div
                className={`absolute transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'} ${isMenuOpen ? 'hidden' : 'block'}`}
                key={index}
                style={{ width: '100%' }}
              >
                {index === current && (
                  <div className='flex flex-col items-center justify-center'>
                    <h3 className='text-3xl text-[#61AFEF] font-bold'>{slide.title}</h3>
                    <img src={slide.image} alt={slide.title} className='w-1/2 my-4' />
                    <p className='text-lg text-[#b9c6eb] mb-4'>{slide.description}</p>
                    <div className='flex gap-4'>
                      <a href={slide.demoLink} className='px-6 py-2 border rounded-full text-lg font-medium hover:bg-[#61AFEF] hover:border-transparent transition-colors duration-300'>
                        Demo
                      </a>
                      <a href={slide.githubLink} className='px-6 py-2 border rounded-full text-lg font-medium hover:bg-[#61AFEF] hover:border-transparent transition-colors duration-300'>
                        Code
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
