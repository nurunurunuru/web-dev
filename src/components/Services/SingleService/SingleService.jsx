/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './SingleService.css';
import aboutbnr1 from '../../../assets/abouthead.png';
import aboutbnr2 from '../../../assets/abouthead1.png';
import icon from '../../../assets/btn.png';
import HowWeWork from './HowWeWork/HowWeWork';
import ShortPostForService from './ShortPostForService/ShortPostForService';
import ShortStep from './ShortStep/ShortStep';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const SingleService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const service = useLoaderData();
    return (
        <div className='service-details'>
            <Helmet>
                <title>DevZone IT | {service?.title}</title>
                <meta name="description"
                    content={service?.fDesc} />
                <meta name="author" content="DevZone IT" />
                <meta name="robots"
                    content="web developer agency, web designer,devzone it, devzone it team member, devzone it web service, best web solution agency, bug fixing expert, web agency, frontend developer, backend developer, react developer, full stack web developer, web app, mern, node js, react js, express js, shopify, ecommerce, wordpress, landing design, web software company, digital marketing, graphics design, web developer team, web developer experts, best web agency, web service" />
                <meta name="keywords"
                    content="devzoneit.com, devzoneit,web developer, web designer,devzone it, devzone it team member, devzone it web service, best web solution agency, bug fixing expert, web agency, frontend developer, backend developer, react developer, full stack web developer, web app, mern, node js, react js, express js, shopify, ecommerce, wordpress, landing design, web software company, digital marketing, graphics design, web developer team, web developer experts, best web agency, web service, best web service and solution" />
            </Helmet>
            <div className="service-head relative">
                <div className="container">
                    <p className='font-secondary'>Service Details</p>
                    <h3 className='text-white-secondary f-bold font-secondary text-center'>{service?.title}</h3>
                </div>
                <img className='serviceh1' src={aboutbnr1} alt="web developer, web designer,devzone it, devzone it team member, devzone it web service, best web solution agency, bug fixing expert, web agency, frontend developer, backend developer, react developer, full stack web developer, web app, mern, node js, react js, express js, shopify, ecommerce, wordpress, landing design, web software company, digital marketing, graphics design, web developer team, web developer experts, best web agency, web service" />
                <img className='serviceh2' src={aboutbnr2} alt="web developer, web designer,devzone it, devzone it team member, devzone it web service, best web solution agency, bug fixing expert, web agency, frontend developer, backend developer, react developer, full stack web developer, web app, mern, node js, react js, express js, shopify, ecommerce, wordpress, landing design, web software company, digital marketing, graphics design, web developer team, web developer experts, best web agency, web service" />
            </div>

            <div className="service-desc bg-black">
                <div className="container">
                    <div className="flex item-start justify-center gap-15 reverse">
                        <div className="w-50 desc-content">
                            <h2 className='text-white-secondary font-secondary'>{service?.title}</h2>
                            <p className='text-white-secondary font-secondary'>{service?.fDesc}</p>
                            <div className="flex justify-center no-wrap gap-5">
                                <ul className='text-white-secondary font-secondary feature'>
                                    {
                                        service?.feature.map((feat, i) => <li key={i} className='flex gap-10 item-center'><img className='w-5' src={icon} alt="web developer, web designer,devzone it, devzone it team member, devzone it web service, best web solution agency, bug fixing expert, web agency, frontend developer, backend developer, react developer, full stack web developer, web app, mern, node js, react js, express js, shopify, ecommerce, wordpress, landing design, web software company, digital marketing, graphics design, web developer team, web developer experts, best web agency, web service" /> {feat}</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="w-50 desc-img text-center">
                            <img className='w-90 mx-auto' src={service?.photo} alt="web developer, web designer,devzone it, devzone it team member, devzone it web service, best web solution agency, bug fixing expert, web agency, frontend developer, backend developer, react developer, full stack web developer, web app, mern, node js, react js, express js, shopify, ecommerce, wordpress, landing design, web software company, digital marketing, graphics design, web developer team, web developer experts, best web agency, web service" />
                        </div>
                    </div>
                </div>
            </div>

            <HowWeWork></HowWeWork>
            <ShortPostForService service={service}></ShortPostForService>
            <ShortStep service={service}></ShortStep>
        </div>
    );
};

export default SingleService;