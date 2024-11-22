/* eslint-disable no-unused-vars */
import React from 'react';
import './Brands.css';
import brand1 from '../../../assets/home6-partner-01.svg';
import brand2 from '../../../assets/home6-partner-02.svg';
import brand3 from '../../../assets/home6-partner-03.svg';
import brand4 from '../../../assets/home6-partner-04.svg';
import brand5 from '../../../assets/home6-partner-05.svg';
import brand6 from '../../../assets/home6-partner-06.svg';
import brand7 from '../../../assets/home6-partner-07.svg';

const Brands = () => {
    const logos = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];
    return (
        <div className="brands bg-dark">
            <div>
                <div className="container">
                    <div className="brands-heading">
                        <span>Our Partner</span>
                        <h5>We Worked With Global Largest Brands</h5>
                    </div>
                </div>
                <div className="heading">
                    <div className="headline">
                        <div className="logos">
                            {logos.map((logo, index) => (
                                <div className="partner-logo" key={index}>
                                    <img src={logo} alt={`web-developers`} />
                                </div>
                            ))}
                            {logos.map((logo, index) => (
                                <div className="partner-logo" key={index + logos.length}>
                                    <img src={logo} alt={`web-developers`} />
                                </div>
                            ))}
                            {logos.map((logo, index) => (
                                <div className="partner-logo" key={index + logos.length}>
                                    <img src={logo} alt={`web-developers`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;