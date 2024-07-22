import React from 'react'
import ProfilePicture from '../profile/ProfilePicture.jpg'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#383c42] flex items-center justify-center'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={ProfilePicture} alt="Razin Choudhury" className='mb-4 w-40 h-auto rounded-full' />
                    <h1 className='text-5xl sm:text-7xl font-bold text-[#61AFEF] text-center'>Razin Choudhury</h1>
                    <h2 className='text-2xl sm:text-4xl font-bold text-[#2799f7] text-center mt-2'>Welcome to my website!</h2>
                </div>
                <p className='text-[#b9c6eb] py-4 max-w-[700px] text-center'>I am an undergraduate student at Stony Brook University studying computer science. Looking to become a future software engineer and continuing to grow my coding experience.</p>
            </div>
        </div>
    )
}

export default Home
