/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './Login.css';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const allowedEmail = "admin@devzoneit.com";
    const allowedPass = "devZonAdmin$129";
    const navigate = useNavigate();

    const loginAdmin = (e) => {
        e.preventDefault();
        const form = e.target;
        const formEmail = form.email.value;
        const formPass = form.pass.value;

        if (formEmail === allowedEmail && formPass === allowedPass) {
            setEmail(formEmail);
            setPass(formPass);
            navigate('/dashboard');
        } else {
            toast.error("Information Incorrect");
        }
    }

    return (
        <div>
            {
                email != allowedEmail && pass != allowedPass ?
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} className='login w-100 h-100vh bg-dark'>
                        <div className="logo">
                            <img src={logo} alt="web developer" />
                            <h4>Dev<span className='text-primary'>Zone</span> IT</h4>
                        </div>
                        <div className="login-form">
                            <h4 className='font-secondary text-center'>Login Admin Panel</h4>
                            <form onSubmit={loginAdmin}>
                                <input type="email" name="email" required placeholder='Email' />
                                <input type="password" name="pass" required placeholder='Password' />
                                <button type="submit" className='btn-primary'>Login</button>
                            </form>
                        </div>
                    </div>
                    : (
                        children
                    )
            }
        </div>
    );
};

export default PrivateRouter;