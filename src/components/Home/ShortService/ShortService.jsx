/* eslint-disable no-unused-vars */
import React from "react";
import "./ShortService.css";

import slide1 from "../../../assets/web-dev.png";
import slide2 from "../../../assets/soft-dev.png";
import slide3 from "../../../assets/cloud-sol.png";
import slide4 from "../../../assets/auth-sol.jpg";

import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const ShortService = () => {
  const { data: slider = [] } = useQuery({
    queryKey: ["slider"],
    queryFn: async () => {
      const res = await fetch("https://devzoneit-xi.vercel.app/services");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="short-service">
      <div className="container">
        <div className="services-title-home">
          <span>services</span>
          <h1 className="text-white font-primary f-bold-x text-center">
            Our Services
          </h1>
        </div>
        <div className="service-slider">
          {slider.map((slide, i) => (
            <Link
              key={i}
              to={`/services/${slide._id}`}
              className="service-slide"
            >
              <div className="slider-box">
                <div className="slide-img">
                  <img src={slide?.photo} alt="web developers it" />
                </div>
                <div className="service-content">
                  <h4 className="text-white font-secondary f-bold-x">
                    {i < 9 ? <span>{`0${i + 1}`}</span> : i + 1}
                  </h4>
                  <h5 className="text-white f-bold-x font-secondary">
                    {slide?.title}
                  </h5>
                  <p className="text-sm text-white-secondary font-primary">
                    {slide?.fDesc.substring(0, 50)}
                  </p>
                </div>
                <div className="slide-icon flex item-start justify-between">
                  <Link
                    className="font-secondary f-bold"
                    to={`/services/${slide._id}`}
                  >
                    Learn More{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <div className="slider-icons">
                    {slide?.category == "graphics" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#06d889"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
                        />
                      </svg>
                    ) : slide?.category == "marketing" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#06d889"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                        />
                      </svg>
                    ) : (
                      <svg
                        fill="#06d889"
                        viewBox="0 0 60 60"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23.6731 41.5094C23.438 41.5095 23.2106 41.4256 23.0318 41.2728L16.6219 35.8148C16.5126 35.7218 16.4249 35.6062 16.3648 35.476C16.3046 35.3458 16.2734 35.204 16.2734 35.0606C16.2734 34.9171 16.3046 34.7754 16.3648 34.6452C16.4249 34.5149 16.5126 34.3993 16.6219 34.3063L23.0318 28.8483C23.2318 28.678 23.4912 28.594 23.7531 28.6149C24.0149 28.6358 24.2577 28.7599 24.4281 28.9598C24.7824 29.3767 24.7326 30.0018 24.3159 30.3561L18.7921 35.0603L24.3159 39.7643C24.4704 39.8957 24.5808 40.0714 24.6322 40.2676C24.6837 40.4637 24.6737 40.671 24.6036 40.8613C24.5335 41.0516 24.4066 41.2158 24.2402 41.3317C24.0738 41.4476 23.876 41.5097 23.6731 41.5094ZM36.3269 41.5094C36.0467 41.5094 35.7682 41.3911 35.5725 41.1606C35.4022 40.9606 35.3183 40.7012 35.3392 40.4394C35.3602 40.1775 35.4842 39.9347 35.6842 39.7643L41.208 35.0603L35.6842 30.3561C35.4914 30.1838 35.3736 29.9429 35.356 29.6848C35.3384 29.4268 35.4224 29.1722 35.5901 28.9753C35.7577 28.7784 35.9958 28.6549 36.2533 28.6311C36.5108 28.6074 36.7674 28.6853 36.9682 28.8482L43.3782 34.3062C43.4874 34.3992 43.5751 34.5148 43.6353 34.645C43.6955 34.7752 43.7266 34.917 43.7266 35.0604C43.7266 35.2039 43.6955 35.3456 43.6353 35.4759C43.5751 35.6061 43.4874 35.7217 43.3782 35.8147L36.9682 41.2727C36.7895 41.4255 36.5622 41.5094 36.3271 41.5094H36.3269ZM27.7309 45.6033C27.5834 45.6035 27.4377 45.5707 27.3044 45.5074C27.1711 45.444 27.0537 45.3517 26.9607 45.2372C26.8676 45.1227 26.8014 44.9888 26.7667 44.8454C26.732 44.702 26.7298 44.5526 26.7602 44.4083L30.755 25.4409C30.8092 25.1838 30.9632 24.9588 31.1833 24.8153C31.4034 24.6718 31.6715 24.6217 31.9286 24.6758C32.1857 24.73 32.4107 24.8841 32.5542 25.1042C32.6977 25.3243 32.7478 25.5924 32.6937 25.8494L28.6989 44.8167C28.6521 45.0388 28.5304 45.2382 28.3542 45.3814C28.178 45.5246 27.958 45.603 27.7309 45.6033Z"></path>
                        <path d="M53.3491 55.9367H6.65094C2.98387 55.9367 0 52.9534 0 49.2858V9.65094C0 5.98387 2.98387 3 6.65094 3H53.3491C57.0161 3 60 5.98387 60 9.65094V49.2858C60 52.9534 57.0161 55.9367 53.3491 55.9367ZM6.65094 4.98113C4.07618 4.98113 1.98113 7.07618 1.98113 9.65094V49.2858C1.98113 51.8605 4.07618 53.9556 6.65094 53.9556H53.3491C55.9238 53.9556 58.0189 51.8605 58.0189 49.2858V9.65094C58.0189 7.07618 55.9238 4.98113 53.3491 4.98113H6.65094Z"></path>
                        <path d="M59.0094 18.8618H0.990565C0.73075 18.8574 0.483062 18.7511 0.300878 18.5658C0.118694 18.3805 0.0166016 18.1311 0.0166016 17.8712C0.0166016 17.6114 0.118694 17.3619 0.300878 17.1766C0.483062 16.9913 0.73075 16.885 0.990565 16.8806H59.0094C59.2692 16.885 59.5169 16.9913 59.6991 17.1766C59.8813 17.3619 59.9834 17.6114 59.9834 17.8712C59.9834 18.1311 59.8813 18.3805 59.6991 18.5658C59.5169 18.7511 59.2692 18.8574 59.0094 18.8618ZM16.9248 14.1218C15.1968 14.1218 13.79 12.7149 13.79 10.9869C13.79 9.25852 15.1968 7.8522 16.9248 7.8522C18.6532 7.8522 20.0595 9.25852 20.0595 10.9869C20.0595 12.7149 18.6532 14.1218 16.9248 14.1218ZM16.9248 9.83333C16.289 9.83333 15.7711 10.3507 15.7711 10.9869C15.7711 11.6231 16.289 12.1406 16.9248 12.1406C17.561 12.1406 18.0784 11.6233 18.0784 10.9869C18.0784 10.3506 17.561 9.83333 16.9248 9.83333ZM7.2934 14.0914C5.56472 14.0914 4.15854 12.685 4.15854 10.9566C4.15854 9.2281 5.56472 7.82178 7.29325 7.82178C9.02179 7.82178 10.428 9.2281 10.428 10.9566C10.428 12.685 9.02193 14.0914 7.2934 14.0914ZM7.2934 9.80291C6.65759 9.80291 6.13967 10.3208 6.13967 10.9566C6.13967 11.5929 6.65759 12.1102 7.29325 12.1102C7.92948 12.1102 8.44684 11.5929 8.44684 10.9566C8.44684 10.3208 7.92962 9.80291 7.2934 9.80291ZM26.5562 14.1516C24.8284 14.1516 23.4221 12.7453 23.4221 11.0168C23.4221 9.28895 24.8283 7.88263 26.5562 7.88263C28.2848 7.88263 29.6909 9.28881 29.6909 11.0168C29.6909 12.7453 28.2848 14.1516 26.5562 14.1516ZM26.5562 9.86319C25.9206 9.86319 25.4032 10.3806 25.4032 11.0168C25.4032 11.653 25.9206 12.1705 26.5562 12.1705C27.1925 12.1705 27.7098 11.653 27.7098 11.0168C27.7098 10.3806 27.1925 9.86319 26.5562 9.86319Z"></path>
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}{" "}
          ``
        </div>
      </div>
    </div>
  );
};

export default ShortService;
