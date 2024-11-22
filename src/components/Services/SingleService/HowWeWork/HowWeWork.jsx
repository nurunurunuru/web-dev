/* eslint-disable no-unused-vars */
import React from 'react';
import './HowWeWork.css';
import work1 from '../../../../assets/work-icon-01.svg';
import work2 from '../../../../assets/work-icon-02.svg';
import work3 from '../../../../assets/work-icon-03.svg';
import work4 from '../../../../assets/work-icon-04.svg';
import work5 from '../../../../assets/work-icon-05.svg';

const HowWeWork = () => {
    return (
        <div className='howWork'>
            <div className="container">
                <h3 className='font-secondary'>How We Work</h3>
                <div className="flex item-start justify-center">
                    <div className="workSystem">
                        <div className="icon">
                            <img src={work1} alt="web developers" />
                        </div>
                        <div className="title">
                            <h5>Requirements <br /> Gathering</h5>
                        </div>
                        <div className="details">
                            <p>1st we are collecting the requirements of clients about website and make summary with them and discussing about requirements</p>
                        </div>
                    </div>
                    <div className="workSystem">
                        <div className="icon">
                            <img src={work2} alt="web developers" />
                        </div>
                        <div className="title">
                            <h5>Analysis & <br /> Planning</h5>
                        </div>
                        <div className="details">
                            <p>2nd we analyzing about contents and planning how we make this. And which way will be better. Also Choosing Design by ourself or clients, and if they give figma, psd or else then we planing only on that</p>
                        </div>
                    </div>
                    <div className="workSystem">
                        <div className="icon">
                            <img src={work3} alt="web developers" />
                        </div>
                        <div className="title">
                            <h5>Design & <br /> Development</h5>
                        </div>
                        <div className="details">
                            <p>3rd we start working through the plan and requirements</p>
                        </div>
                    </div>
                    <div className="workSystem">
                        <div className="icon">
                            <img src={work4} alt="web developers" />
                        </div>
                        <div className="title">
                            <h5>Testing Device & <br /> Deliver</h5>
                        </div>
                        <div className="details">
                            <p>Then we are testing on all devices for checking that is proper or not, about checking we check on computer, laptop, tablet, android phone, iPhone for safari and more. Then we release the web application for domain</p>
                        </div>
                    </div>
                    <div className="workSystem">
                        <div className="icon">
                            <img src={work5} alt="web developers" />
                        </div>
                        <div className="title">
                            <h5>Maintenance & <br /> Support</h5>
                        </div>
                        <div className="details">
                            <p>Then we give support for long time, and maintain if got any new error or need change anythings</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowWeWork;