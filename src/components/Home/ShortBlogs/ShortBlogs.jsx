/* eslint-disable no-unused-vars */
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './ShortBlogs.css';

import slide1 from '../../../assets/home3-blog-01.png';
import slide2 from '../../../assets/home3-blog-02.png';
import slide3 from '../../../assets/home3-blog-03.png';

import { FreeMode, Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const ShortBlogs = () => {
    const slider = [
        {
            id: 1,
            title: "Donec Finibus Laoreet Exte Eu Pellentesque",
            category: "Web Development",
            img: slide1,
            date: "May 20, 2023"
        },
        {
            id: 2,
            title: "Feugiat Varius Mattis Mass Enim Est Egestas",
            category: "Web Design",
            img: slide2,
            date: "Oct 20, 2023"
        },
        {
            id: 3,
            title: "Navigating The Journey Off Cloud Solution",
            category: "Authentication",
            img: slide3,
            date: "May 10, 2023"
        },
        {
            id: 4,
            title: "Donec Finibus Laoreet Exte Eu Pellentesque",
            category: "Web Development",
            img: slide1,
            date: "May 20, 2023"
        },
        {
            id: 5,
            title: "Feugiat Varius Mattis Mass Enim Est Egestas",
            category: "Web Design",
            img: slide2,
            date: "Oct 20, 2023"
        },
        {
            id: 6,
            title: "Navigating The Journey Off Cloud Solution",
            category: "Authentication",
            img: slide3,
            date: "May 10, 2023"
        },
    ];

    const NextButton = () => {
        const button = document.querySelector(".short-blog .swiper-button-next");
        button.click()
    }
    const PrevButton = () => {
        const button = document.querySelector(".short-blog .swiper-button-prev");
        button.click()
    }
    return (
        <div className='short-blog'>
            <div className="container">
                <div className="services-title-home">
                    <span>Blogs</span>
                    <h1 className='text-white font-primary f-bold-x text-center'>Our Blogs</h1>
                </div>
                <div className="blog-slider">
                    <div className="sliderButtons">
                        <button onClick={PrevButton} className="prev-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <button onClick={NextButton} className='next-btn'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                        </button>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={1}
                        loop={true}
                        rewind={true}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            waitForTransition: true
                        }}
                        speed={1000}
                        freeMode={true}
                        navigation={{
                            clickable: true,
                        }}
                        breakpoints={{
                            576: {
                                slidesPerView: 1,
                                spaceBetween: 3
                            },
                            992: {
                                slidesPerView: 2,
                                spaceBetween: 3,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 5,
                            },
                            1400: {
                                slidesPerView: 3,
                                spaceBetween: 5,
                            },
                        }}
                        modules={[FreeMode, Pagination, Autoplay, Navigation]}
                        className="blogSwiper"
                    >
                        {
                            slider.map((slide, i) => <div key={i}>
                                <SwiperSlide key={i}>
                                    <Link to={'/blogs'} className='blog-slide'>
                                        <div className="blog-img">
                                            <img className='w-100' src={slide?.img} alt="Web Developers" />
                                            <div className="blog-tag">
                                                <h4>{slide?.category}</h4>
                                            </div>
                                        </div>
                                        <div className="blog-content">
                                            <ul>
                                                <li>{slide?.date}</li>
                                                <li>comment (3)</li>
                                            </ul>
                                            <h4>{slide?.title}</h4>
                                            <div className="blog-footer">
                                                <Link>Read More <svg width="12" height="12" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 1H12M12 1V13M12 1L0.5 12"></path>
                                                </svg></Link>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            </div>)
                        }
                    </Swiper>
                </div>
                <div className="flex item-center justify-center">
                    <Link to={'/blogs'} className='btn-primary blog-btn'>View All Blogs</Link>
                </div>
            </div>
        </div>
    );
};

export default ShortBlogs;