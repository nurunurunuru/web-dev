/* eslint-disable no-unused-vars */
import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Footer = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        console.log(email);
        e.target.reset();
    }
    return (
        <footer>
            <div className="footerHead">
                <div className="container">
                    <div className="flex foot-head">
                        <div className="logo">
                            <Link to={'/'}><div className="logo flex gap-5 item-center">
                                <div className="w-30">
                                    <img className='w-80' src={logo} alt="web developers" />
                                </div>
                                <span className='font-primary text-md text-white w-70 f-bold-x text'>
                                    <span>D</span>
                                    <span>e</span>
                                    <span>v</span>
                                    <span className='text-primary'>Z</span>
                                    <span className='text-primary'>o</span>
                                    <span className='text-primary'>n</span>
                                    <span className='text-primary'>e</span>
                                    <span className='space'>I</span>
                                    <span>T</span>
                                </span>
                            </div></Link>
                        </div>
                        <div className="foot-contact">
                            <div className="flex item-center gap-10">
                                <div className="foot-contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#06d889">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                                    </svg>
                                </div>
                                <div className="foot-contact-content">
                                    <span className='flex item-center gap-10 text-white font-secondary'>For Support:
                                    </span>
                                    <span className='text-white w-100 font-secondary block f-semibold number'><a className='text-white w-100 font-secondary block f-semibold number' href="tel:+8801796491068">+880 1796 491068</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerContent">
                <div className="container">
                    <div className="flex item-start justify-between gap-5">
                        <div className="location">
                            <div className="footer-mb-40">
                                <h5 className='text-white f-semibold-x font-secondary flex item-center gap-5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#06d889">
                                        <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                    </svg>

                                    Address
                                </h5>
                                <p className='font-secondary'>House-06, Road-01, Sector-04, Uttara, Dhaka-1230</p>
                            </div>
                            <div className="footer-mb-40">
                                <h5 className="text-white f-semibold-x font-secondary flex item-center gap-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#06d889">
                                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                    </svg>
                                    Send Email
                                </h5>
                                <p className='font-secondary flex flex-col'>
                                    <span><a className='font-secondary' href="mailto:support@devzoneit.com">support@devzoneit.com</a></span>
                                </p>
                            </div>
                            <div className="footer-mb-40">
                                <h5 className="flex text-white f-semibold-x font-secondary item-center gap-5">
                                    Contact Later
                                </h5>
                                <form onSubmit={sendEmail}>
                                    <div className="group">
                                        <input name='email' type="email" placeholder='Enter Your Email' required className='text-sm font-secondary' />
                                        <button className='btn-primary'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
                                        </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="solution">
                            <h5 className="text-white font-secondary f-semibold-x">
                                Our Services
                            </h5>
                            <ul className='font-secondary'>
                                <li>Web Development</li>
                                <li>Web Design</li>
                                <li>Web Solution</li>
                                <li>Database Maintain</li>
                            </ul>
                        </div>
                        <div className="foot-menu">
                            <h5 className="text-white font-secondary f-semibold-x">
                                Company
                            </h5>
                            <ul className='font-secondary'>
                                <li><Link to={'/about'}>About Us</Link></li>
                                <li><Link to={'/services'}>Services</Link></li>
                                <li><Link to="/services" state={{ scrollToTechnology: true }}>Specialty</Link></li>
                                <li><Link to={'/projects'}>Projects</Link></li>
                                <li><Link to={'/blogs'}>Blogs</Link></li>
                                <li><Link to={'/contact'}>Contact</Link></li>
                            </ul>
                        </div>
                        <div className="resource">
                            <h5 className="text-white font-secondary f-semibold-x">
                                Resource
                            </h5>
                            <ul className='font-secondary'>
                                <li><Link to={'/contact'}>Contact Us</Link></li>
                                <li><Link>Privacy Policy</Link></li>
                                <li><Link>Terms & Condition</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerEnd">
                <div className="container">
                    <div className="flex item-center justify-between">
                        <p className='text-sm font-secondary'>
                            Copyright 2024 <b className='text-primary'>DevZone IT</b>
                        </p>
                        <div className="flex foot-social item-center">
                            <a target='_blank' href='https://www.facebook.com/devzoneit' rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
                            </a>
                            <a href='https://www.linkedin.com/groups/14437457/' target='_blank' rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg>
                            </a>
                            <a href='https://wa.me/qr/S7MPHI5QCGTAP1' target='_blank' rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;