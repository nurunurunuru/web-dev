/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './ShortPostForService.css';

const ShortPostForService = ({ service }) => {
    return (
        <div className='shortPost'>
            <div className="container">
                <div className="short-post-banner">
                    <img className='w-100' src={service?.midImg} alt="web developers" />
                </div>
                <div className="short-post-content flex item-start justify-between gap-15">
                    <p className="text-white font-secondary">
                        {service?.sDesc}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ShortPostForService;