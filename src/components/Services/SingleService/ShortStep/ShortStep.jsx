/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './ShortStep.css';
import img from '../../../../assets/service3.png';
import Accordion from '../../../Accordion/Accordion';

const ShortStep = ({ service }) => {
    return (
        <div className='short-step'>
            <div className="container">
                <div className="flex step-sec">
                    <div className='child'>
                        <img src={img} alt="web developers" />
                    </div>
                    <div className='child'>
                        <h4>We Are Working With Creative Team</h4>
                        <Accordion items={service?.teams}></Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShortStep;