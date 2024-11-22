/* eslint-disable no-unused-vars */
import React from 'react';
import './vistChart.css';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const Visitor = () => {
    const visitorData = [
        {
            id: 1,
            counter: 200,
            date: "12 Jan, 2023",
            lastYear: 800
        },
        {
            id: 2,
            counter: 150,
            date: "12 Feb, 2023",
            lastYear: 700
        },
        {
            id: 3,
            counter: 500,
            date: "12 March, 2023",
            lastYear: 900
        },
        {
            id: 4,
            counter: 400,
            date: "12 April, 2023",
            lastYear: 500
        },
    ]
    return (
        <div className='visit-chart'>
            <div className="visit-chart-head">
                <div className="left">
                    <p className="font-secondary text-normal">Online Visitor</p>
                    <h4 className='text-black font-secondary'>{visitorData.map((data, i) => {
                        if (data.date == "12 April, 2023") {
                            return data.counter
                        }
                    })}</h4>
                    <h6 className='text-dark font-secondary'>Todays Visitors</h6>
                </div>
                <div className="right">
                    <p className='text-primary f-bold text-md font-secondary m-0 flex item-center gap-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.9} stroke="currentColor" width={18}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                        </svg>
                        12%</p>
                    <p className='text-gray font-secondary text-normal m-0'>Last Week</p>
                </div>
            </div>
            <Line
                data={{
                    labels: visitorData.map((data, i) => `${data.lastYear}`),
                    datasets: [{
                        label: "This Year",
                        data: visitorData.map((data, i) => data.counter),
                    },
                    {
                        label: "Last Year",
                        data: visitorData.map((data, i) => data.lastYear)
                    }]
                }} options={{ indexAxis: 'x' }} />
        </div>
    );
};

export default Visitor;