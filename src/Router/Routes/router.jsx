/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../Layout/Layout';
import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import SingleService from '../../components/Services/SingleService/SingleService';
import Contact from '../../components/Contact/Contact';
import Projects from '../../components/Projects/ProjectsPage/Projects';
import Blogs from '../../components/Blogs/MainBlogs/Blogs';
import ProjectDetails from '../../components/Projects/ProjectDetails/ProjectDetails';
import SingleBlog from '../../components/Blogs/SingleBlog/SingleBlog';
import DashboardLayout from '../../Layout/DashboardLayOut/DashboardLayout';
import DashboardHome from '../../Dashboard/Home/DashboardHome';
import Team from '../../Dashboard/DashTeam/Team';
import PrivateRouter from '../PrivateRouter/PrivateRouter';
import DashService from '../../Dashboard/DashService/DashService';
import DashReview from '../../Dashboard/DashReview/DashReview';
import ErrorPage from '../../components/Error/ErrorPage';
import DashFAQ from '../../Dashboard/DashFAQ/DashFAQ';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`https://devzoneit-xi.vercel.app/services/${params.id}`),
                element: <SingleService></SingleService>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/project/:id',
                element: <ProjectDetails></ProjectDetails>
            },
            {
                path: '/blog/:id',
                element: <SingleBlog></SingleBlog>
            },
        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRouter><DashboardLayout></DashboardLayout></PrivateRouter>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: '/dashboard/dashboard',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: '/dashboard/team',
                element: <Team></Team>,
            },
            {
                path: '/dashboard/service',
                element: <DashService></DashService>,
            },
            {
                path: '/dashboard/review',
                element: <DashReview></DashReview>,
            },
            {
                path: '/dashboard/faq',
                element: <DashFAQ></DashFAQ>,
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
])
export default router;