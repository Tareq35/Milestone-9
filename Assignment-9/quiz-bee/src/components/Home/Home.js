import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const { data: topics } = useLoaderData();
    // console.log(topics);
    return (
        <div className='bg-orange-100 py-5'>
            <div className='mb-10'>
                <div className='banner-img'>

                </div>
                <div className='banner-text rounded-lg'>
                    <h1 className='text-white text-xl md:text-4xl font-bold mb-3'>Lets Start The <span className='text-orange-200'>Quiz</span><span className='text-green-600'>Buzz</span></h1>

                    <p className='text-white text-sm md:text-base'>Check out our online computer programming quizzes to enhance your knowledge, learn new things or prepare for an upcoming test. Made up of well-researched and interesting quiz questions, each and every quiz here can test your awareness and grasp of the subject.</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-20 w-10/12 mx-auto'>
                {
                    topics.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;