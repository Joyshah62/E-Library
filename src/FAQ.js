import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [questions] = useState([
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.'
    },
    {
      question: 'What are the benefits of using React?',
      answer: 'React allows for building reusable UI components, efficient updates and rendering, and a strong developer community.'
    },
    {
      question: 'How do I get started with React?',
      answer: 'You can start by reading the React documentation and experimenting with small projects.'
    }
  ]);

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      {questions.map((question, index) => (
        <div className="faq-question" key={index}>
          <h3 className="question-title">{question.question}</h3>
          <p className="question-answer">{question.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
