/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import './Header.css'
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [menuMaintain, setMenuMaintain] = useState("left-m-100");
    const [close, setClose] = useState("d-none");
    const [menuBar, setMenuBar] = useState('flex');
    const menuRef = useRef(null);
    const [scrollClass, setScrollClass] = useState('trans-0 border-main-trans-0');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 50) {
                setScrollClass('border-main');
            } else {
                setScrollClass('trans-0 border-main-trans-0');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuMaintain("left-m-100");
                setClose("d-none");
                setMenuBar("flex");
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuMaintain]);

    const menuChange = () => {
        setMenuMaintain((prevMenu) => (prevMenu === "left-0" ? "left-m-100" : "left-0"));
        setMenuBar("d-none");
        setClose("flex");
    }

    const menuChange2 = () => {
        if (menuMaintain == "left-0") {
            setMenuMaintain("left-m-100");
            setClose("d-none");
            setMenuBar("flex");
        } else {
            setClose("d-none");
            setMenuBar("flex");
        }
    }

    return (
        <header className={`bg-black ${scrollClass} fixed top-0 right-0 left-0`}>
            <div className="relative">
                <div className="header-container">
                    <nav className='flex item-center justify-between'>
                        <Link to={'/'}><div className="logo flex gap-0 item-center">
                            <div className="w-30">
                                <img className='w-100' src={logo} alt="web developers" />
                            </div>
                            <span className='font-primary text-md text-white f-bold-x text'>
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
                        <div ref={menuRef} className={`menu-control ${menuMaintain}`}>
                            <Link to={'/'}><div className="logo flex gap-10 item-center">
                                <div className="w-30">
                                    <img className='w-100' src={logo} alt="web developers" />
                                </div>
                                <span className='font-primary text-md text-white w-70 f-bold-x'>Web <span className='text-primary'>Dev</span> IT</span>
                            </div></Link>
                            <div className="menu">
                                <div className="main-menu">
                                    <ul className='item-center font-secondary f-semibold'>
                                        <li><NavLink onClick={menuChange2} className={"text-white"} to={'/'}>Home</NavLink></li>
                                        <li><NavLink onClick={menuChange2} className={"text-white"} to={'/about'}>About</NavLink></li>
                                        <li><NavLink onClick={menuChange2} className={"text-white"} to={'/services'}>Services</NavLink></li>
                                        <li><NavLink onClick={menuChange2} className={"text-white"} to={'/projects'}>Projects</NavLink></li>
                                        <li><NavLink onClick={menuChange2} className={"text-white"} to={'/blogs'}>Blogs</NavLink></li>

                                    </ul>
                                </div>
                            </div>
                            <div className={`short-contact gap-5`}>
                                <div className="short-contact-contact">
                                    <div className="w-55">
                                        <span className='flex item-center gap-10 text-sm text-white font-secondary'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className='w-15' strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                                        </svg> WhatsApp :
                                        </span>
                                        <span className='text-white w-100 font-secondary text-sm block f-semibold-x'><a className='text-white w-100 font-secondary text-sm block f-semibold-x' href="https://wa.me/qr/S7MPHI5QCGTAP1" target='_blank' rel="noreferrer">+880 1796 491068</a></span>
                                    </div>
                                    <div className="w-45 flex item-center">
                                        <Link to='/contact' className='w-100 btn-secondary'>Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`menu-bar`}>
                            <button onClick={menuChange} className={`menu-bar-button ${menuBar}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(234, 241, 245)">
                                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                                </svg>

                            </button>
                            <button onClick={menuChange2} className={`menu-bar-button ${close}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(234, 241, 245)">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;