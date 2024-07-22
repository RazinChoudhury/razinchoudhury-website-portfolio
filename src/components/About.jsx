import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#383c42] text-gray-200'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p style={{borderColor: '#61AFEF'}} className='text-4xl font-bold inline border-b-4'>About</p>
                    </div>
                    <div></div>
                    </div>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hello nice to meet you. Please enjoy your look around! </p>
                    </div>
                    <div>
                        <p>My passion for computers goes back to high school. After 
                            creating my first project that helped the 
                            students in the special education department 
                            learn simple math equations, I knew this was what
                            I wanted to pursue. Ever since then I have been determined
                            to create and build software that can make meaningful impact around me.
                            This website here  showcases my hard work and displays 
                            what I have learned on my journey.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
