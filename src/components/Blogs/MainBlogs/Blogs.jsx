/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Blogs.css';
import aboutbnr1 from '../../../assets/abouthead.png';
import aboutbnr2 from '../../../assets/abouthead1.png';
import slide1 from '../../../assets/home3-blog-01.png';
import slide2 from '../../../assets/home3-blog-02.png';
import slide3 from '../../../assets/home3-blog-03.png';
import { Link } from 'react-router-dom';

const Blogs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "DevZone IT | Blogs"
    }, []);

    const blogs = [
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

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='blogs'>
            <div className="blogs-head relative">
                <div className="container">
                    <p className='font-secondary'>Blogs</p>
                    <h3 className='text-white-secondary f-bold font-secondary text-center'>Exploring The Devzone IT Blog</h3>
                </div>
                <img className='abouth1' src={aboutbnr1} alt="web developers" />
                <img className='abouth2' src={aboutbnr2} alt="web developers" />
            </div>
            <div className="blog-page">
                <div className="container">
                    <div className="blog-contents">
                        {
                            currentItems.map((blog, i) => <div key={i}>
                                <div key={i}>
                                    <Link to={`/blog/${blog.id}`} className='blog-slide'>
                                        <div className="blog-img">
                                            <img className='w-100' src={blog?.img} alt="Web Developers" />
                                            <div className="blog-tag">
                                                <h4>{blog?.category}</h4>
                                            </div>
                                        </div>
                                        <div className="blog-content">
                                            <ul>
                                                <li>{blog?.date}</li>
                                                <li>comment (3)</li>
                                            </ul>
                                            <h4>{blog?.title}</h4>
                                            <div className="blog-footer">
                                                <Link>Read More <svg width="12" height="12" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 1H12M12 1V13M12 1L0.5 12"></path>
                                                </svg></Link>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>)
                        }
                    </div>
                    {blogs.length > itemsPerPage && (
                        <div className="pagination">
                            {Array.from({ length: Math.ceil(blogs.length / itemsPerPage) }).map((_, index) => (
                                <button className={currentPage === index + 1 ? "active" : ""} key={index} onClick={() => paginate(index + 1)}>
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    )}

                    <div className='specialty'>
                        <h4>Web Specialty</h4>
                        <div className='specialty-section'>
                            <div className="special-line"></div>
                            <div className="special-contents">
                                <div className="tech">
                                    <h5 className='text-primary'>Technologies</h5>
                                    <ul className='flex flex-col'>
                                        <li className='text-white text-normal'>React JS</li>
                                        <li className='text-white text-normal'>Next JS</li>
                                        <li className='text-white text-normal'>Node JS</li>
                                        <li className='text-white text-normal'>Express JS</li>
                                        <li className='text-white text-normal'>Mongo DB</li>
                                        <li className='text-white text-normal'>Angular JS</li>
                                    </ul>
                                </div>
                                <div className="tech">
                                    <h5 className='text-primary'>Languages</h5>
                                    <ul className='flex flex-col'>
                                        <li className='text-white text-normal'>JavaScript</li>
                                        <li className='text-white text-normal'>TypeScript</li>
                                        <li className='text-white text-normal'>PHP</li>
                                        <li className='text-white text-normal'>C++</li>
                                        <li className='text-white text-normal'>Python</li>
                                    </ul>
                                </div>
                                <div className="tech">
                                    <h5 className='text-primary'>CMS</h5>
                                    <ul className='flex flex-col'>
                                        <li className='text-white text-normal'>Shopify</li>
                                        <li className='text-white text-normal'>WordPress</li>
                                        <li className='text-white text-normal'>YouCan</li>
                                        <li className='text-white text-normal'>Wix</li>
                                        <li className='text-white text-normal'>Drupal</li>
                                        <li className='text-white text-normal'>Other</li>
                                    </ul>
                                </div>
                                <div className="tech">
                                    <h5 className='text-primary'>Style & Animations</h5>
                                    <ul className='flex flex-col'>
                                        <li className='text-white text-normal'>Tailwind Css</li>
                                        <li className='text-white text-normal'>Bootstrap</li>
                                        <li className='text-white text-normal'>Material UI</li>
                                        <li className='text-white text-normal'>Animate Css</li>
                                        <li className='text-white text-normal'>AOS</li>
                                        <li className='text-white text-normal'>jQuery</li>
                                    </ul>
                                </div>
                                <div className="tech">
                                    <h5 className='text-primary'>Solutions</h5>
                                    <ul className='flex flex-col'>
                                        <li className='text-white text-normal'>Web Design</li>
                                        <li className='text-white text-normal'>Web Development</li>
                                        <li className='text-white text-normal'>Bug Fixing</li>
                                        <li className='text-white text-normal'>Mobile App Developments</li>
                                        <li className='text-white text-normal'>Software Developments</li>
                                        <li className='text-white text-normal'>Responsive Solution</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;