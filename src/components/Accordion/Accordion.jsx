/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <div key={index} className={`accordion-item ${index === activeIndex ? 'active' : ''}`}>
                    <div className="accordion-title" onClick={() => handleClick(index)}>
                        {item.name || item.title}
                        <span className='text-md text-primary'>{index === activeIndex ? '-' : '+'}</span>
                    </div>
                    <div className="accordion-content">
                        {index === activeIndex && <p className='font-secondary'>{item.description || item.content}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;

