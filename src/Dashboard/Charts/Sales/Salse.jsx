/* eslint-disable no-unused-vars */
import React from 'react';
import './Salse.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const Salse = () => {
    const salesData = [
        {
            id: 1,
            sales: 800,
            income: 12000,
            month: "Jan"
        },
        {
            id: 2,
            sales: 300,
            income: 8000,
            month: "Feb"
        },
        {
            id: 3,
            sales: 340,
            income: 11000,
            month: "Mar"
        },
        {
            id: 4,
            sales: 140,
            income: 5000,
            month: "Apr"
        }
    ]
    return (
        <div className='sales-chart'>
            <div className="sales-chart-head">
                <div className="left">
                    <p className="font-secondary text-normal">Sales</p>
                    <h4 className='text-black font-secondary'>{salesData.map((data, i) => {
                        if (data.month == "Apr") {
                            return data.income
                        }
                    })} Income</h4>
                    <h6 className='text-dark font-secondary'>This Month</h6>
                </div>
                <div className="right">
                    <p className='text-down f-bold text-md font-secondary m-0 flex item-center gap-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={18}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                        </svg>
                        42%</p>
                    <p className='text-gray font-secondary text-normal m-0'>Last Month</p>
                </div>
            </div>
            <Bar
                data={{
                    labels: salesData.map((data, i) => `${data.month}`),
                    datasets: [{
                        label: "Income",
                        data: salesData.map((data, i) => data.income),
                    },
                    {
                        label: "Sales",
                        data: salesData.map((data, i) => data.sales)
                    }]
                }} options={{ indexAxis: 'x' }} />
        </div>
    );
};

export default Salse;