/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './About.css';
import aboutbnr1 from '../../assets/abouthead.png';
import aboutbnr2 from '../../assets/abouthead1.png';
import approach1 from '../../assets/approach.png';
import approach2 from '../../assets/approach2.png';
import approach3 from '../../assets/approach3.png';
import WhyChoose from '../Home/WhyChoose/WhyChoose';
import HomeReviews from '../Home/Reviews/HomeReviews';
import HomeReviewslide from '../Home/Reviews/HomeReviewSlide/HomeReviewslide';
import Team from './Team/Team';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "DevZone IT | About"
    }, [])
    return (
        <div className='about-page'>
            <div className="about-head relative">
                <div className="container">
                    <p className='font-secondary'>About</p>
                    <h3 className='text-white-secondary f-bold font-secondary text-center'>Get To Know About Web Dev IT</h3>
                </div>
                <img className='abouth1' src={aboutbnr1} alt="web developers" />
                <img className='abouth2' src={aboutbnr2} alt="web developers" />
            </div>

            <div className="approach">
                <div className="container">
                    <div className="flex item-start approach-main-section">
                        <div className="w-75 approach-main">
                            <div className="approach-main-head">
                                <h3 className='font-primary f-bold-x'>Our Approach</h3>
                                <p className='font-secondary text-white-secondary'>Services are professional offerings provided by businesses to meet specific needs or solve problems for their customers. Services can range from your budget</p>
                            </div>
                            <div className="flex justify-center item-start gap-25 approach-content-main">
                                <div className="w-45 main-img">
                                    <div className="main-image w-100">
                                        <img className='w-100' src={approach1} alt="web developers" />
                                    </div>
                                </div>
                                <div className="w-55 main-content">
                                    <h4 className='font-primary'>Unlock The Potential Of Your Business</h4>
                                    <p className='font-secondary text-white-secondary'>We believe in delivering tailored solutions that are designed to address your unique requirements. We take the time to understand your business and provide personalized services that align with your goals</p>
                                    <div className="w-100 bg-white relative line">
                                        <div className="ball1"></div>
                                        <div className="ball2"></div>
                                    </div>
                                    <ul className="about-feature">
                                        <li>
                                            <h5>Customized Solutions</h5>
                                            <p>Tailored Web and Software Solutions: Precision, Perfection, Performance.</p>
                                        </li>
                                        <li>
                                            <h5>Quality Reliability</h5>
                                            <p>Reliable Quality Solutions: Consistency, Assurance, Excellence.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-25 approach-add">
                            <img className='w-90 mx-auto photo-approach2' src={approach2} alt="web developers" />
                            <div className="ex relative bg-primary flex item-center justify-center flex-col">
                                <img className='ex-title' src={approach3} alt="web developers" />
                                <h4>4</h4>
                                <p>Years</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Team></Team>
            <WhyChoose></WhyChoose>
            <HomeReviews></HomeReviews>
            <HomeReviewslide></HomeReviewslide>
        </div>
    );
};

export default About;