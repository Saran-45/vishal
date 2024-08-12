import React, { useContext } from 'react';
import './Home.css';
import { Context } from './GlobeData';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { loggedIn } = useContext(Context);
  const navigate = useNavigate();

  const onGetStarted = (e) => {
    e.preventDefault();
    if (loggedIn) {
      navigate('/Product');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="homepage-container">
      <div className="header">
        <h1>Invenzen</h1>
      </div>
      <div className="content">
        <div className="text-section">
          <h1>Manage less.<br />Sell more.<br />Connect everything.</h1>
          <p>
            Product businesses need more than inventory management to grow. <strong>Connected Inventory Performance</strong> automatically creates a real-time picture of everything you make and sell, everywhere you need it – across systems, channels, marketplaces, and regions.
          </p>
        </div>
        <div className="image-section"></div>
      </div>
      <div className="replenishment-section">
        <h2>Flawless Replenishments</h2>
        <p>
          Never run out-of-stock with smart replenishment strategies like min-max rules, MTO, or the master production schedule. Let Invenzen propose, or trigger purchase orders automatically. Then automate vendor follow-ups to minimize communication risks: PO acknowledgment, receipt schedule confirmation a few days before, etc.
        </p>
        <div className="replenishment-steps">
          <div className="step step-replenishment">
            <div className="step-icon"></div>
            <p>Replenishment</p>
          </div>
          <div className="step step-quality-control">
            <div className="step-icon"></div>
            <p>Quality Control</p>
          </div>
          <div className="step step-storage">
            <div className="step-icon"></div>
            <p>Storage</p>
          </div>
        </div>
      </div>
      <div className="features-section">
        <h2>Why Choose Invenzen?</h2>
        <div className="features">
          <div className="feature">
            <h3>Real-Time Tracking</h3>
            <p>
              Monitor your inventory levels in real-time to avoid stockouts and overstocking. Stay informed about your stock status anytime, anywhere.
            </p>
          </div>
          <div className="feature">
            <h3>Automated Replenishments</h3>
            <p>
              Set up automated replenishment rules to ensure your inventory is always at optimal levels. Invenzen takes care of the rest.
            </p>
          </div>
          <div className="feature">
            <h3>Comprehensive Reporting</h3>
            <p>
              Generate detailed reports to gain insights into your inventory performance. Make data-driven decisions to improve your business operations.
            </p>
          </div>
          <div className="feature">
            <h3>Easy Integration</h3>
            <p>
              Seamlessly integrate Invenzen with your existing systems. Our API allows for easy integration with various platforms and tools.
            </p>
          </div>
        </div>
      </div>
      <div className="cta-section">
        <h2>Get Started with Invenzen Today!</h2>
        <p>
          Experience the benefits of efficient inventory management. Sign up now and take your business to the next level with Invenzen.
        </p>
        <a href="/" className="cta-button" onClick={onGetStarted}>Get Started</a>
      </div>
    </div>
  );
}

export default HomePage;
