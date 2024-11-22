/* eslint-disable no-unused-vars */
import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import './Services.css';
import aboutbnr1 from '../../assets/abouthead.png';
import aboutbnr2 from '../../assets/abouthead1.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import react from '../../assets/react.png';
import next from '../../assets/nextjs.png';
import angular from '../../assets/angular.png';
import typescript from '../../assets/typescript.png';
import html from '../../assets/html.png';
import php from '../../assets/php.png';
import laravel from '../../assets/laravel.png';
import nodejs from '../../assets/nodejs.png';
import python from '../../assets/python.png';
import express from '../../assets/express.png';
import mysql from '../../assets/mysql.png';
import mongodb from '../../assets/mongodb.png';
import mssql from '../../assets/mssqul.png';
import firebase from '../../assets/firebase.png';
import nosql from '../../assets/nosqul.png';
import shopify from '../../assets/shopify.png';
import wordpress from '../../assets/wordpress.png';
import youcan from '../../assets/youcan.png';
import android from '../../assets/android.png';
import apple from '../../assets/apple.png';
import flutter from '../../assets/flutter.png';
import googlecloud from '../../assets/googlecloud.png';
import aws from '../../assets/aws.png';
import cloudinary from '../../assets/cloudinary.png';
import ContentLoader from '../../Shared/Loader/ContentLoader/ContentLoader';
import { useQuery } from '@tanstack/react-query';

const Services = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        document.title = "DevZone IT | Services";
    }, []);

    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (location.state && location.state.scrollToTechnology) {
            setTimeout(() => {
                const technologySection = document.getElementById('specialty');
                if (technologySection) {
                    technologySection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 1000);
        }
    }, [location.state]);

    const { data: services = [] } = useQuery({
        queryKey: ["services"],
        queryFn: async () => {
            const res = await fetch("https://devzoneit-xi.vercel.app/services");
            const data = await res.json();
            return data;
        }
    })

    const technology = [
        {
            id: 1,
            category: "frontend",
            name: "React JS",
            icon: react,
            desc: "React.js is a JavaScript library for building user interfaces, developed by Facebook. It enables efficient creation of interactive and dynamic UI components through a declarative and component-based approach. React simplifies the development of single-page applications, enhancing performance and facilitating the management of complex UI states."
        },
        {
            id: 4,
            category: "frontend",
            name: "Next JS",
            icon: next,
            desc: "Next.js is a powerful React framework for building modern web applications. It simplifies the development process by offering a seamless and efficient way to create server-rendered React applications. With features like automatic code splitting, server-side rendering, and a straightforward API, Next.js enables developers to build performant and scalable web applications. Its flexibility and extensibility make it a popular choice for building dynamic and responsive user interfaces, while its seamless integration with React allows for a smooth development experience."
        },
        {
            id: 2,
            category: "frontend",
            name: "Typescript",
            icon: typescript,
            desc: "TypeScript is a superset of JavaScript that adds static typing and other advanced features to enhance development. Developed by Microsoft, it improves code reliability and maintainability by allowing developers to specify variable types. TypeScript compiles to JavaScript, making it compatible with existing web ecosystems while providing modern language features."
        },
        {
            id: 3,
            category: "frontend",
            name: "Angular JS",
            icon: angular,
            desc: "AngularJS is a robust JavaScript framework maintained by Google, designed for building dynamic web applications. Its two-way data binding and modular architecture simplify the development process. AngularJS supports the creation of reusable components, providing a powerful toolset for building scalable and maintainable single-page applications with enhanced testability."
        },
        {
            id: 5,
            category: "frontend",
            name: "HTML & CSS",
            icon: html,
            desc: "HTML (Hypertext Markup Language) is the standard markup language for creating and structuring web content. It uses tags to define elements such as headings, paragraphs, links, and images. HTML forms the backbone of web pages, providing a basic structure for browsers to interpret and display content on the internet."
        },
        {
            id: 6,
            category: "backend",
            name: "Node JS",
            icon: nodejs,
            desc: "Node.js is a JavaScript runtime built on the V8 JavaScript engine. It allows developers to execute JavaScript code on the server side, enabling the development of scalable and high-performance applications. Node.js is event-driven and non-blocking, making it well-suited for building real-time applications, APIs, and server-side applications with efficient asynchronous I/O operations."
        },
        {
            id: 10,
            category: "backend",
            name: "Express JS",
            icon: express,
            desc: "Express.js is a minimalist and flexible Node.js web application framework that simplifies server-side development. With a robust set of features and a lightweight structure, it facilitates the creation of scalable and efficient web applications. Express.js is renowned for its simplicity and versatility, allowing developers to quickly build APIs, handle routing, and manage middleware effortlessly. Its vibrant ecosystem and ease of integration make it a preferred choice for building fast and modular web applications, providing a solid foundation for developers to create reliable and scalable server-side solutions."
        },
        {
            id: 7,
            category: "backend",
            name: "Python",
            icon: python,
            desc: "Python is a versatile, high-level programming language known for its readability and simplicity. It supports multiple programming paradigms and excels in web development, data science, artificial intelligence, and automation. Python's extensive standard library and vibrant community contribute to its popularity, making it a preferred choice for diverse applications."
        },
        {
            id: 8,
            category: "backend",
            name: "PHP",
            icon: php,
            desc: "PHP(Hypertext Preprocessor) is a server- side scripting language designed for web development.It is embedded within HTML code and executed on the server, generating dynamic content.PHP is widely used to build dynamic websites, process forms, interact with databases, and perform various server - side tasks, contributing to the functionality of web applications."
        },
        {
            id: 9,
            category: "backend",
            name: "Laravel",
            icon: laravel,
            desc: "Laravel is a PHP web application framework known for its elegant syntax and developer-friendly features. It follows the Model-View-Controller (MVC) architectural pattern, offering tools for routing, templating, and database interaction. Laravel simplifies common tasks, promotes code organization, and provides built-in features like Eloquent ORM and Blade templating for efficient and expressive web development."
        },
        {
            id: 11,
            category: "database",
            name: "MongoDB",
            icon: mongodb,
            desc: "MongoDB is a NoSQL, document-oriented database that provides high performance, scalability, and flexibility. It stores data in flexible, JSON-like BSON documents, allowing for dynamic and schema-less data structures. MongoDB is suitable for a variety of applications, offering features like horizontal scaling, indexing, and robust querying, making it a popular choice for modern, data-intensive projects."
        },
        {
            id: 12,
            category: "database",
            name: "NoSQL",
            icon: nosql,
            desc: 'NoSQL, or "Not Only SQL," refers to a category of database systems that diverge from traditional relational databases. NoSQL databases are designed to handle diverse and unstructured data types, offering flexibility and scalability. They include various types like document-oriented (MongoDB), key-value stores (Redis), column-family stores (Cassandra), and graph databases (Neo4j). These databases are suitable for handling large volumes of distributed and dynamic data, making them popular for modern, data-intensive applications.'
        },
        {
            id: 13,
            category: "database",
            name: "Firebase",
            icon: firebase,
            desc: "Firebase is a comprehensive mobile and web application development platform by Google. It provides a variety of services, including real-time database, authentication, hosting, and cloud functions. Firebase's real-time database enables developers to build responsive and collaborative applications, while other services simplify backend tasks, allowing for rapid development and easy integration with both web and mobile platforms."
        },
        {
            id: 14,
            category: "database",
            name: "MySQL",
            icon: mysql,
            desc: "MySQL is an open- source relational database management system(RDBMS).It is widely used for storing and managing structured data in various applications.Developed by Oracle, MySQL supports SQL queries and provides high performance, scalability, and reliability.It is a popular choice for web applications, content management systems, and other data - intensive projects."
        },
        {
            id: 15,
            category: "database",
            name: "MsSQL",
            icon: mssql,
            desc: "Microsoft SQL Server (MS SQL) is a relational database management system developed by Microsoft. It is widely used for storing and retrieving data in various applications. MS SQL supports Transact-SQL (T-SQL) for querying and managing data. It is known for its scalability, security features, and integration with Microsoft's ecosystem, making it a preferred choice for enterprise-level database solutions."
        },
        {
            id: 16,
            category: "cms",
            name: "Shopify",
            icon: shopify,
            desc: "Shopify is an e-commerce platform that enables businesses to create and manage online stores. Founded in 2006, it provides a user-friendly interface, customizable templates, and a range of features for selling products, managing inventory, and processing payments. Shopify is known for its ease of use, scalability, and the ability to streamline the entire e-commerce process for businesses of all sizes."
        },
        {
            id: 17,
            category: "cms",
            name: "WordPress",
            icon: wordpress,
            desc: "WordPress is a popular open- source content management system(CMS) used for creating websites and blogs.Launched in 2003, it offers a user - friendly interface, a vast ecosystem of plugins and themes, and robust community support.WordPress is highly customizable, making it suitable for various website types, from personal blogs to complex business sites."
        },
        {
            id: 18,
            category: "cms",
            name: "YouCan",
            icon: youcan,
            desc: `YouCan is an e-commerce platform, built by ecommerce entrepreneurs for aspiring ecommerce solopreneurs and businesses alike, to create online stores in a few clicks and without the need for any technical skills. Whether you have your own brand or you're selling different generic products, we offer you all the tools you need to grow your business at no cost, until you succeed. Our services are free until you reach $10,000 in sales with no time restriction. No Sales. No Charge`
        },
        {
            id: 21,
            category: "mobile",
            name: "Android",
            icon: android,
            desc: "Android is an open-source mobile operating system developed by Google. It powers a vast majority of smartphones and tablets globally. Based on the Linux kernel, Android offers a customizable and user-friendly interface. It supports a wide range of applications from the Google Play Store and is widely used for mobile app development due to its broad user base and flexibility."
        },
        {
            id: 22,
            category: "mobile",
            name: "IOS",
            icon: apple,
            desc: "iOS is the mobile operating system developed by Apple for its range of mobile devices, including the iPhone, iPad, and iPod Touch. Known for its sleek design, security features, and seamless integration with Apple's ecosystem, iOS provides a stable and consistent user experience. The App Store offers a diverse array of high-quality applications developed specifically for iOS devices."
        },
        {
            id: 23,
            category: "mobile",
            name: "React Native",
            icon: react,
            desc: "React Native is an open-source framework developed by Facebook for building cross-platform mobile applications. It allows developers to use React, a JavaScript library, to create native-like experiences for both iOS and Android platforms. React Native enables code reusability, faster development cycles, and the ability to deploy on multiple platforms with a single codebase, making it a popular choice for mobile app development."
        },
        {
            id: 24,
            category: "mobile",
            name: "Flutter",
            icon: flutter,
            desc: "Flutter is an open-source UI software development toolkit created by Google for building natively compiled applications for mobile, web, and desktop from a single codebase. It uses the Dart programming language and provides a rich set of pre-designed widgets for building aesthetically pleasing and performant user interfaces. Flutter is known for its hot-reload feature, facilitating rapid development and experimentation."
        },
        {
            id: 27,
            category: "dev",
            name: "Google Cloud",
            icon: googlecloud,
            desc: "Google Cloud Platform (GCP) is a suite of cloud computing services provided by Google. It offers a wide range of services, including computing, storage, machine learning, databases, analytics, and more. GCP enables businesses to build, deploy, and scale applications effectively in the cloud. It is known for its robust infrastructure, global reach, and advanced technologies to support various cloud-based solutions."
        },
        {
            id: 28,
            category: "dev",
            name: "AWS",
            icon: aws,
            desc: "Amazon Web Services (AWS) is a comprehensive cloud computing platform offered by Amazon. It provides a vast array of services, including computing power, storage, databases, machine learning, analytics, and more. AWS enables businesses to scale, deploy, and manage applications efficiently in the cloud. It is widely utilized for its reliability, flexibility, and global infrastructure, serving as a foundation for various cloud-based solutions."
        },
        {
            id: 29,
            category: "dev",
            name: "Cloudinary",
            icon: cloudinary,
            desc: "Cloudinary is a cloud-based media management platform, offering services for storing, optimizing, and delivering digital assets like images and videos. With dynamic manipulation, format selection, and responsive delivery, it simplifies media workflows. Developers integrate Cloudinary via APIs and SDKs to enhance performance, ensuring a seamless and efficient user experience. This platform is widely utilized for its versatility in managing and delivering media assets across various applications and websites."
        }
    ];

    const [categoryData, setCategory] = useState("frontend");
    const memoizedCategoryData = useMemo(() => categoryData, [categoryData]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 1100);

        return () => clearTimeout(timeoutId);
    }, [categoryData]);


    return (
        <div className='main-service-page'>
            <div className="service-head relative">
                <div className="container">
                    <p className='font-secondary'>Services</p>
                    <h3 className='text-white-secondary f-bold font-secondary text-center'>Our Providing Services</h3>
                </div>
                <img className='serviceh1' src={aboutbnr1} alt="web developer, web designer,devzone it, devzone it team member, devzone it web service, best web solution agency, bug fixing expert, web agency, frontend developer, backend developer, react developer, full stack web developer, web app, mern, node js, react js, express js, shopify, ecommerce, wordpress, landing design, web software company, digital marketing, graphics design, web developer team, web developer experts, best web agency, web service" />
                <img className='serviceh2' src={aboutbnr2} alt="web developer, web designer,devzone it, devzone it team member, devzone it web service, best web solution agency, bug fixing expert, web agency, frontend developer, backend developer, react developer, full stack web developer, web app, mern, node js, react js, express js, shopify, ecommerce, wordpress, landing design, web software company, digital marketing, graphics design, web developer team, web developer experts, best web agency, web service" />
            </div>
            <div className="services-card">
                <div className="container">
                    <div className="service-slider">
                        {
                            !services.length ? <ContentLoader></ContentLoader> : services.map((service, i) =>
                                <Link key={i} to={`/services/${service._id}`} className='service-slide'>
                                    <div className="slider-box">
                                        <div className="slide-img">
                                            <img src={service?.photo} alt="web developers it" />
                                        </div>
                                        <div className="service-content">
                                            <h4 className='text-white font-secondary f-bold-x'>{
                                                i < 9 ? <span>{`0${i + 1}`}</span> : i + 1
                                            }</h4>
                                            <h5 className='text-white f-bold-x font-secondary'>{service?.title}</h5>
                                            <p className='text-sm text-white-secondary font-primary'>{service?.fDesc.substring(0, 100)} ....</p>
                                        </div>
                                        <div className="slide-icon flex item-start justify-between">
                                            <Link className='font-secondary f-bold' to={`/services/${service._id}`}>Learn More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                            </svg></Link>
                                            <div className="slider-icons">
                                                {
                                                    service?.category == "graphics" ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#06d889" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                                                    </svg> : service?.category == "marketing" ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#06d889" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                                                    </svg>
                                                        :
                                                        <svg fill='#06d889' viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23.6731 41.5094C23.438 41.5095 23.2106 41.4256 23.0318 41.2728L16.6219 35.8148C16.5126 35.7218 16.4249 35.6062 16.3648 35.476C16.3046 35.3458 16.2734 35.204 16.2734 35.0606C16.2734 34.9171 16.3046 34.7754 16.3648 34.6452C16.4249 34.5149 16.5126 34.3993 16.6219 34.3063L23.0318 28.8483C23.2318 28.678 23.4912 28.594 23.7531 28.6149C24.0149 28.6358 24.2577 28.7599 24.4281 28.9598C24.7824 29.3767 24.7326 30.0018 24.3159 30.3561L18.7921 35.0603L24.3159 39.7643C24.4704 39.8957 24.5808 40.0714 24.6322 40.2676C24.6837 40.4637 24.6737 40.671 24.6036 40.8613C24.5335 41.0516 24.4066 41.2158 24.2402 41.3317C24.0738 41.4476 23.876 41.5097 23.6731 41.5094ZM36.3269 41.5094C36.0467 41.5094 35.7682 41.3911 35.5725 41.1606C35.4022 40.9606 35.3183 40.7012 35.3392 40.4394C35.3602 40.1775 35.4842 39.9347 35.6842 39.7643L41.208 35.0603L35.6842 30.3561C35.4914 30.1838 35.3736 29.9429 35.356 29.6848C35.3384 29.4268 35.4224 29.1722 35.5901 28.9753C35.7577 28.7784 35.9958 28.6549 36.2533 28.6311C36.5108 28.6074 36.7674 28.6853 36.9682 28.8482L43.3782 34.3062C43.4874 34.3992 43.5751 34.5148 43.6353 34.645C43.6955 34.7752 43.7266 34.917 43.7266 35.0604C43.7266 35.2039 43.6955 35.3456 43.6353 35.4759C43.5751 35.6061 43.4874 35.7217 43.3782 35.8147L36.9682 41.2727C36.7895 41.4255 36.5622 41.5094 36.3271 41.5094H36.3269ZM27.7309 45.6033C27.5834 45.6035 27.4377 45.5707 27.3044 45.5074C27.1711 45.444 27.0537 45.3517 26.9607 45.2372C26.8676 45.1227 26.8014 44.9888 26.7667 44.8454C26.732 44.702 26.7298 44.5526 26.7602 44.4083L30.755 25.4409C30.8092 25.1838 30.9632 24.9588 31.1833 24.8153C31.4034 24.6718 31.6715 24.6217 31.9286 24.6758C32.1857 24.73 32.4107 24.8841 32.5542 25.1042C32.6977 25.3243 32.7478 25.5924 32.6937 25.8494L28.6989 44.8167C28.6521 45.0388 28.5304 45.2382 28.3542 45.3814C28.178 45.5246 27.958 45.603 27.7309 45.6033Z"></path>
                                                            <path d="M53.3491 55.9367H6.65094C2.98387 55.9367 0 52.9534 0 49.2858V9.65094C0 5.98387 2.98387 3 6.65094 3H53.3491C57.0161 3 60 5.98387 60 9.65094V49.2858C60 52.9534 57.0161 55.9367 53.3491 55.9367ZM6.65094 4.98113C4.07618 4.98113 1.98113 7.07618 1.98113 9.65094V49.2858C1.98113 51.8605 4.07618 53.9556 6.65094 53.9556H53.3491C55.9238 53.9556 58.0189 51.8605 58.0189 49.2858V9.65094C58.0189 7.07618 55.9238 4.98113 53.3491 4.98113H6.65094Z"></path>
                                                            <path d="M59.0094 18.8618H0.990565C0.73075 18.8574 0.483062 18.7511 0.300878 18.5658C0.118694 18.3805 0.0166016 18.1311 0.0166016 17.8712C0.0166016 17.6114 0.118694 17.3619 0.300878 17.1766C0.483062 16.9913 0.73075 16.885 0.990565 16.8806H59.0094C59.2692 16.885 59.5169 16.9913 59.6991 17.1766C59.8813 17.3619 59.9834 17.6114 59.9834 17.8712C59.9834 18.1311 59.8813 18.3805 59.6991 18.5658C59.5169 18.7511 59.2692 18.8574 59.0094 18.8618ZM16.9248 14.1218C15.1968 14.1218 13.79 12.7149 13.79 10.9869C13.79 9.25852 15.1968 7.8522 16.9248 7.8522C18.6532 7.8522 20.0595 9.25852 20.0595 10.9869C20.0595 12.7149 18.6532 14.1218 16.9248 14.1218ZM16.9248 9.83333C16.289 9.83333 15.7711 10.3507 15.7711 10.9869C15.7711 11.6231 16.289 12.1406 16.9248 12.1406C17.561 12.1406 18.0784 11.6233 18.0784 10.9869C18.0784 10.3506 17.561 9.83333 16.9248 9.83333ZM7.2934 14.0914C5.56472 14.0914 4.15854 12.685 4.15854 10.9566C4.15854 9.2281 5.56472 7.82178 7.29325 7.82178C9.02179 7.82178 10.428 9.2281 10.428 10.9566C10.428 12.685 9.02193 14.0914 7.2934 14.0914ZM7.2934 9.80291C6.65759 9.80291 6.13967 10.3208 6.13967 10.9566C6.13967 11.5929 6.65759 12.1102 7.29325 12.1102C7.92948 12.1102 8.44684 11.5929 8.44684 10.9566C8.44684 10.3208 7.92962 9.80291 7.2934 9.80291ZM26.5562 14.1516C24.8284 14.1516 23.4221 12.7453 23.4221 11.0168C23.4221 9.28895 24.8283 7.88263 26.5562 7.88263C28.2848 7.88263 29.6909 9.28881 29.6909 11.0168C29.6909 12.7453 28.2848 14.1516 26.5562 14.1516ZM26.5562 9.86319C25.9206 9.86319 25.4032 10.3806 25.4032 11.0168C25.4032 11.653 25.9206 12.1705 26.5562 12.1705C27.1925 12.1705 27.7098 11.653 27.7098 11.0168C27.7098 10.3806 27.1925 9.86319 26.5562 9.86319Z"></path>
                                                        </svg>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    </div>

                    <div className='specialty' id="specialty">
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

                    <div className="technology">
                        <div className="tech-head">
                            <span>Technology</span>
                            <h3>Our Technology</h3>
                        </div>
                        <div className="tech-content">
                            <div className="tabs">
                                <button onClick={() => setCategory("frontend")} className={memoizedCategoryData === "frontend" ? "active btn-primary" : "btn-secondary"}>Frontend</button>
                                <button onClick={() => setCategory("backend")} className={memoizedCategoryData === "backend" ? "active btn-primary" : "btn-secondary"}>Backend</button>
                                <button onClick={() => setCategory("database")} className={memoizedCategoryData === "database" ? "active btn-primary" : "btn-secondary"}>Database</button>
                                <button onClick={() => setCategory("cms")} className={memoizedCategoryData === "cms" ? "active btn-primary" : "btn-secondary"}>CMS</button>
                                <button onClick={() => setCategory("mobile")} className={memoizedCategoryData === "mobile" ? "active btn-primary" : "btn-secondary"}>Mobile App</button>
                                <button onClick={() => setCategory("dev")} className={memoizedCategoryData === "dev" ? "active btn-primary" : "btn-secondary"}>DevOps</button>
                            </div>

                            {
                                !loading ? <>
                                    <div className="tech-brands">
                                        {technology.map((tech, i) => (
                                            tech.category === categoryData && (
                                                <div className='tech-cards' key={i}>
                                                    <img src={tech.icon} alt="web developer" />
                                                    <h4>{tech.name}</h4>
                                                </div>
                                            )
                                        ))}
                                    </div>

                                    <div className="tech-details">
                                        {technology.map((tech, i) => (
                                            tech.category === categoryData && (
                                                <div className='tech-details-list' key={i}>
                                                    <div className="w-10">
                                                        <img src={tech.icon} alt="web developer" />
                                                        <h5>{tech.name}</h5>
                                                    </div>
                                                    <div className="w-90">
                                                        <p>{tech.desc}</p>
                                                    </div>
                                                </div>
                                            )
                                        ))}
                                    </div>
                                </> : <ContentLoader></ContentLoader>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;