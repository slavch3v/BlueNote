import './Welcome.css';
import { Link } from 'react-router-dom';
import React from 'react';


const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-message">
        <h1>Registration Successful!</h1>
        <p>Welcome to our awesome application. Let’s get started!</p>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
  
      </div>
    </div>
  );
};

export default Welcome;
