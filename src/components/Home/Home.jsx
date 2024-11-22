/* eslint-disable no-unused-vars */
import React, { useEffect, lazy, Suspense, useState } from 'react';
import Banner from './Banner/Banner';
import Loader from '../../Shared/Loader/Loader';

const Consultancy = lazy(() => import('./Consultancy/Consultancy'));
const WhyChoose = lazy(() => import('./WhyChoose/WhyChoose'));
const ShortService = lazy(() => import('./ShortService/ShortService'));
const ShortContact = lazy(() => import('./ShortContact/ShortContact'));
const ShortBlogs = lazy(() => import('./ShortBlogs/ShortBlogs'));
const Brands = lazy(() => import('./Brands/Brands'));
const HomeReviews = lazy(() => import('./Reviews/HomeReviews'));
const HomeReviewslide = lazy(() => import('./Reviews/HomeReviewSlide/HomeReviewslide'));
const WhatWeDo = lazy(() => import('./WhatWeDo/WhatWeDo'));
const PricingPlan = lazy(() => import('../PricingPlan/PricingPlan'));

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "DevZone IT";
    }, []);

    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<Loader></Loader>}>
                <Consultancy></Consultancy>
                <HomeReviews></HomeReviews>
                <WhyChoose></WhyChoose>
                <ShortService></ShortService>
                <Brands></Brands>
                <ShortBlogs></ShortBlogs>
                <HomeReviewslide></HomeReviewslide>
                <WhatWeDo></WhatWeDo>
                <PricingPlan></PricingPlan>
                <ShortContact></ShortContact>
            </Suspense>
        </div>
    );
};

export default Home;
