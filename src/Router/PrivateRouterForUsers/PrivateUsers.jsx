/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { ApiContext } from '../../Shared/DataContext/DataContext';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';

const PrivateUsers = ({ children }) => {
    const { user, loading } = useContext(ApiContext);
    const location = useLocation();

    if (loading) {
        return <Loader></Loader>
    }
    if (user) {
        return children;
    }
    return <Navigate to={'/institute/login'} state={{ from: location }} replace></Navigate>
};

export default PrivateUsers;