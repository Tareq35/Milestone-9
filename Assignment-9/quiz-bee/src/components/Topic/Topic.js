import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    console.log(topic);
    const { id, logo, name, total } = topic;
    return (
        <div className="transition hover:scale-110 duration-300 ease-in-out card card-compact bg-base-300 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="flex p-4 justify-between">
                <div className='text-left'>
                    <h2 className='text-xl font-semibold'>{name}</h2>
                    <p>Total Questions: {total}</p>
                </div>
                <div>
                    <Link to={`/quiz/${id}`}>
                        <button className="btn bg-green-600 hover:bg-green-700 border-none flex-nowrap">Practice <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Topic;