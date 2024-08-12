// src/COMPONENTS/Login.jsx
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getData } from '../Json/Db';
import './Login.css';
import { Context } from './GlobeData';

const Login = () => {
  const [uemail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [role,setRole] = useState("USER")
  const [loginError, setLoginError] = useState('');
  const { LogIn } = useContext(Context);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      const res = await getData();
      setData(res.data);
    };
    fetch();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailError('');
    setPasswordError('');
    setLoginError('');
    let hasError = false;

    if (!uemail) {
      setEmailError('Email is required');
      hasError = true;
    }

    if (!password) {
      setPasswordError('Password is required');
      hasError = true;
    }

    if (hasError) return;

    try {
      const uindex = data.findIndex((item) => item.email === uemail);
      const emails = data.map((item) => item.email);
      if (!emails.includes(uemail)) {
        setLoginError('Invalid email address');
      } else if (data[uindex].password !== password) {
        setLoginError('Incorrect password');
      } else {
        LogIn(data[uindex]);
        console.log(uindex)
        console.log(emails)

        localStorage.setItem('authToken', 'your_auth_token'); // Set auth token
        alert('Login successful');
        navigate('/');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoginError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-image">
        {/* Image background is set in CSS */}
      </div>
      <form onSubmit={handleSubmit}>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",}}>
            <h2>Login</h2>
              {/* <select  value={role} onChange={(e)=>setRole(e.targetvalue)}>
                  <option  value="ADMIN">Admin🔒</option>
                  <option value="USER">User🔑</option>
              </select> */}
        </div>
       
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={uemail}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="error email-error">{emailError}</p>}
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="error password-error">{passwordError}</p>}
        </div>
        {loginError && <p className="error login-error">{loginError}</p>}
        <button type="submit">Login</button>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </form>
    </div>
  );
};

export default Login;
