import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-container">
      <header className="faq-header">
        <h1>Frequently Asked Questions</h1>
      </header>
      <main className="faq-content">
        <section className="faq-item">
          <h2 className="question">What is Invenzen?</h2>
          <p className="answer">Invenzen is a comprehensive inventory management system designed to help you efficiently track and manage your inventory.</p>
        </section>
        <section className="faq-item">
          <h2 className="question">How do I create an account?</h2>
          <p className="answer">To create an account, click on the 'Register' button on the homepage and fill out the required information.</p>
        </section>
        <section className="faq-item">
          <h2 className="question">Can I track my inventory in real-time?</h2>
          <p className="answer">Yes, Invenzen allows you to track your inventory in real-time with our easy-to-use dashboard.</p>
        </section>
      </main>
    </div>
  );
}

export default FAQ;
