import React, { useState } from 'react';
import { MdOutlineEmail, MdOutlinePersonOutline } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        if (!name || !email || !message) {
            event.preventDefault();
            setErrorMessage('Please fill out all fields'); 
        } else {
            setErrorMessage('');
        }
    };

    return (
        <div name='contact' className='w-full h-screen bg-[#383c42] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/06cb57e0-7a6e-4647-a63b-8c27dfd9b4d3" onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full gap-4'>
                <div className='pb-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#61AFEF] text-gray-300'>Contact me</p>
                    <p className='text-gray-300 py-4'>Have a question or want to work together? Submit the form or email me @razinchoudhury@gmail.com</p>
                </div>
                <div className='relative'>
                    <MdOutlinePersonOutline className='absolute text-[#61AFEF] text-lg top-3 left-3'/>
                    <input type="text" placeholder='Enter your name' name='name' value={name} onChange={(e) => setName(e.target.value)} className='pl-10 bg-[#ccd6f6] p-2 w-full rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#61AFEF]' />
                </div>
                <div className='relative'>
                    <MdOutlineEmail className='absolute text-[#61AFEF] text-lg top-3 left-3'/>
                    <input type="email" placeholder='Enter your email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='pl-10 bg-[#ccd6f6] p-2 w-full rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#61AFEF]' />
                </div>
                <div className='relative'>
                    <textarea placeholder='Your message' name='message' value={message} onChange={(e) => setMessage(e.target.value)} className='bg-[#ccd6f6] p-2 w-full rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#61AFEF]' rows="5"></textarea>
                </div>
                {errorMessage && <div className='text-red-500 text-sm mb-3'>{errorMessage}</div>}
                <button type='submit' className='w-full text-white border-2 bg-[#61AFEF] px-6 py-3 my-2 flex items-center justify-center rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105'>
                    Send Message
                    <RiSendPlaneFill className='ml-2'/>
                </button>
            </form>
        </div>
    );
};

export default Contact;
