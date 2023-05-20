import React, { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react';
import './Accordion.css';

const Accordion = () => {

  const questions = [
    {
      id: 1,
      question: 'How to download a book?',
      answer: 'To download a book click on download button where you can preview and download a book.'
    },
    {
      id: 2,
      question: 'Can you buy a book without logging in?',
      answer: 'You can download a book without signing in but in order to buy a book you must login.'
    },
    {
      id: 3,
      question: 'What is an eBook?',
      answer: 'The term eBook stands for electronic book. It is just a book in digital form. This book can be read on electronic book reading devices, as well as tablets, smartphones, laptops, and desktop computers.'
    },
    {
      id: 4,
      question: 'What are benefits of using eBook?',
      answer: 'Store many books in one device. Read books anywhere anytime. Save storage space. Travel Light. Carry the world of books with you. Quick to download. Instantly available worldwide.'
    },
  ]

  const [parent, enableAnimations] = useAutoAnimate()

  const MyAccordion = ({ question, answer }) => {
    const [show, setShow] = useState(false);
    return (
      <>
        <div className="main-heading">
          <p onClick={() => setShow(!show)}> {show ? "➖" : "➕"} </p>
          <h3>{question}</h3>
        </div>
        {show && <p className="answers"> {answer} </p>}

      </>
    )
  }

  const [data] = useState(questions);

  return (
    <>
      <section className='main-div'>
        <h1 className='accordion__heading'>Frequently Asked Questions</h1>

        {data.map((curElem) => {
          return (
            <MyAccordion
              key={curElem.id}
              question={curElem.question}
              answer={curElem.answer}
            />
          );
        })}
      </section>
    </>
  )
}

export default Accordion;