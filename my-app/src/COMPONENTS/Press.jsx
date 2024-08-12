import React from 'react';
import './Press.css';

const Press = () => {
  return (
    <div className="press-container">
      <header className="press-header">
        <h1>Press & Media</h1>
      </header>
      <main className="press-content">
        <section className="press-release">
          <h2 className="release-title">Press Release Title 1</h2>
          <p className="release-date">July 30, 2024</p>
          <div className="release-content">
            <p>Details of the first press release. Highlight major announcements, product launches, or significant achievements here.</p>
          </div>
        </section>
        <section className="press-release">
          <h2 className="release-title">Press Release Title 2</h2>
          <p className="release-date">July 29, 2024</p>
          <div className="release-content">
            <p>Details of the second press release. Share important news and updates with the media.</p>
          </div>
        </section>
        {/* Add more press releases as needed */}
      </main>
    </div>
  );
}

export default Press;
