import React from 'react'
import photo from '../assets/NewImage.jpg'
import { Icon } from '@iconify/react';
import { TypeAnimation } from 'react-type-animation';
import details from './Details'
const navabar = () => {

    return (
        <>

            <div className='flex flex-row justify-between '>
                <div>
                    <h1 className='font-semibold text-base sm:text-2xl'>Abhishek Hosamani</h1>
                </div>
                <div className='flex flex-row items-center'>
                    <div className='mx-2'><a href='https://github.com/Abhishek-Hosamani' target='_blank'><Icon icon="fe:github" className='w-4 h-4 sm:w-8 sm:h-8 ' /></a></div>
                    <div className='mx-2'><a href='mailto:abhihosamani17@gmail.com' target='_blank'><Icon icon="clarity:email-solid" className='w-4 h-4 sm:w-8 sm:h-8 ' /></a></div>
                    <div className='mx-2'><a href='https://www.linkedin.com/in/abhishekhosamani04' target='_blank'><Icon icon="ant-design:linkedin-filled" className='w-4 h-4 sm:w-8 sm:h-8 ' /></a></div>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row jusitfy-around p-2 sm:p-4 mt-4 bg-[#3a3942] rounded-md sm:w-11/12 mx-auto'>

                <div className=' flex items-center justify-center sm:justify-around sm:w-3/4'>
                    <div className='px-4 '>
                        <img src={photo} alt="Abhishek Hosamani" className='object-cover border-4 rounded-full w-24 h-22 sm:w-36 sm:h-36' />
                    </div>
                    <div className='w-1/2'>
                        <p>
                            <TypeAnimation
                                sequence={[
                                    "I'm a Full Stack Web Developer",
                                    1000,
                                    "I'm Building the future one line of code at a time", 2000,
                                    "Tech-driven problem solver", 1000,

                                ]}
                                speed={50}
                                repeat={Infinity}
                                className='font-semibold text-xs sm:text-3xl '
                            />
                        </p>
                    </div>
                </div>
                <div className='text-xs sm:text-xl flex flex-col items-center justify-center mx-3 sm:mt-0 mt-2 sm:border-l-2' >
                    <span className='mb-4 font-semibold'>Work  <Icon icon="fa-solid:laptop-code" color="orange" className='inline' /></span>
                    <p className='text-center font-semibold'>{details.work}</p>
                </div>
            </div>

        </>
    )
}

export default navabar