import React, { useState } from 'react'
import { questions } from './api'
import './Accordion.css';
import MyAccordion from './MyAccordion';

const Accordion = () => {
    const [data, setData] = useState(questions);
  return (
    <>
        <section className='main-div'>
        <h1 className='accordion__heading'>Frequently Asked Questions</h1>
        
       {
        data.map((curElem) => {
            return <MyAccordion key={curElem.id} {...curElem}/>
        })
       }
       </section>
    </>
  )
}

export default Accordion