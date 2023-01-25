import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [questions] = useState([
    {
      question: 'How to download a book?',
      answer: 'To download a book you have to click on the add button and to MyBooks page where you can preview and download the book.'
    },
    {
      question: 'Can you download a book without signing in?',
      answer: 'No, You must sign in in order to download a book.'
    },
  
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
