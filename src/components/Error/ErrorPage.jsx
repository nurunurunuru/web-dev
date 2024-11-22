import React from 'react';
import './ErrorPage.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='error-page'>
            <div className="flex justify-center item-center flex-col font-secondary h-100 w-100">
                <h1>404</h1>
                <p>Page Not Found</p>
                <Link className='btn-primary font-secondary' to={'/'}>Back to home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;