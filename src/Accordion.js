import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
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

  const MyAccordion = ({ question, answer }) => {
    const [show, setShow] = useState(false);
    return (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="main-heading"
        >

          <motion.p
            onClick={() => setShow(!show)}
          >
            {show ? "➖" : "➕"}
          </motion.p>
          <h3>{question}</h3>

        </motion.div>

        <AnimatePresence>

          {show && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.4 }}
              style={{ overflow: "hidden" }}
              className="answers"
            >

              <motion.p
                transition={{ duration: 0.5 }}
                style={{ padding: "30px 10px 30px 20px" }}
              >
                {answer}
              </motion.p>

            </motion.div>
          )}

        </AnimatePresence>

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