import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin,} from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo1 from '../assets/Logo1.png'
import {Link} from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#383c42] text-gray-200 z-50'>
            <div>
                <img src={Logo1} alt="Logo Image" style={{height: '90px', width: '90px', objectFit: 'contain'}}/>
            </div>
            
            {/* menu */}
                <ul className='hidden md:flex'>
                    <li>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                    </li>
                    <li>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                    </li>
                    <li>
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                    </li>
                    <li>
                    <Link to='projects' smooth={true} duration={500}>
                        Projects
                    </Link>
                    </li>
                    <li>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                    </li>
                </ul>
 

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#383c42] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://docs.google.com/document/d/1pulzk_tgFlbS1i61mG6pfHA9DLrZmnoI/edit?usp=sharing&ouid=103204180585849395489&rtpof=true&sd=true" target="_blank">
                            Resume <BsFillPersonLinesFill size={25}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#08851b]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                         href="mailto:razinchoudhury@gmail.com">
                            Email <HiOutlineMail size={25}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://github.com/RazinChoudhury" target="_blank">
                            GitHub <FaGithub size={25}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077b5]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://www.linkedin.com/in/razin-choudhury-928651278/" target="_blank">
                            LinkedIn <FaLinkedin size={25}/>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
