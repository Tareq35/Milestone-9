import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const { data: quiz } = useLoaderData();
    // console.log(quiz);
    return (
        <div>
            <h1>Quiz of {quiz.name}</h1>
            <div>
                {
                    quiz.questions.map((question,index) => <Question
                        key={question.id}
                        question={question}
                        index= {index}
                    ></Question>)
                }
            </div>
        </div>
    );
};

export default Quiz;