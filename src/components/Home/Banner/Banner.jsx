/* eslint-disable no-unused-vars */
import React from 'react';
import './Banner.css';
import logo from '../../../assets/logo.png'
import { Typewriter } from 'react-simple-typewriter';
import banner1 from '../../../assets/banner-img-1.png';
import banner2 from '../../../assets/banner-img-2.png';
import banner3 from '../../../assets/banner-img-3.png';
import banner4 from '../../../assets/banner-img-4.png';
import banner5 from '../../../assets/banner-img-5.png';

const Banner = () => {
    return (
        <div className='banner'>
            <div className="container h-100">
                <div className="flex flex-col justify-start item-center h-100 relative">
                    <div className="flex flex-col justify-center item-center banner-heading">
                        <br />
                        <div className="banner-content">
                            <h1 className='text-center font-primary f-bold-x'>Web Service and Solution</h1>
                            <h1 className='text-center font-primary f-bold-x'><span className='text-primary'><Typewriter
                                words={['Web Development', 'Web Design', 'PSD to React JS', 'PSD to Next JS', 'Figma to React JS', 'Figma to Next JS']}
                                loop={false}
                                cursor
                                cursorStyle='|'
                                typeSpeed={150}
                                deleteSpeed={150}
                                delaySpeed={1000}
                            /></span></h1>
                        </div>
                    </div>
                    <div className="banner-2">
                        <img className='w-100' src={banner2} alt="web developers" />
                    </div>
                    <div className="banner-3">
                        <img className='w-100' src={banner3} alt="web developers" />
                    </div>
                    <div className="banner-4">
                        <img className='w-100' src={banner4} alt="web developers" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;