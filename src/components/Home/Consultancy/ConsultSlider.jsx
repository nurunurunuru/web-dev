/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './consultancy.css'
import { EffectFade, Autoplay } from 'swiper/modules';

import slide1 from '../../../assets/sl-1.png';
import slide3 from '../../../assets/sl-3.png';

const ConsultSlider = () => {
    return (
        <div className='w-100 consultSlider'>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={false}
                modules={[EffectFade, Autoplay]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="sliderDiv">
                        <img src={slide1} alt="web developers" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sliderDiv">
                        <img src={slide3} alt="web developers" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ConsultSlider;