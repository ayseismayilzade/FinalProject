import React from 'react';
import FAQ from './FAQ';

function FAQ2() {
 
  const faqs = [
   
      {
        question: "What questions should I ask a guitarist?",
        answer: "You can ask about their inspiration, technique, gear, songwriting process, and memorable performances."
      },
      {
        question: "Which credit card do you accept?",
        answer: "We accept Visa, MasterCard, American Express, and Discover."
      },
      {
        question: "How long will it be before I get a refund?",
        answer: "Refunds typically take 5-7 business days to process, depending on your payment method."
      },
      {
        question: "How Many Types of guitars are there?",
        answer: "There are several types of guitars including acoustic, electric, bass, classical, and resonator guitars."
      }
    
    
  ];

  return (
    <div className='div-faq'>
      {faqs.map((faq, index) => (
        <FAQ key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

export default FAQ2;
