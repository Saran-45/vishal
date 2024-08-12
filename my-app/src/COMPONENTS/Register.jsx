import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postData, getData } from '../Json/Db';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('USER');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await getData();
      setData(res.data);
    };
    fetch();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setNameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    if (!name) {
      setNameError('Name is required');
      return;
    }

    if (!email) {
      setEmailError('Email is required');
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email address');
      return;
    }

    if (!password) {
      setPasswordError('Password is required');
      return;
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Confirm password is required');
      return;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }

    if (email && password && name && confirmPassword) {
      const un = data ? data.findIndex(({ uname }) => uname === name) : -1;
      if (un !== -1) {
        alert('Username already exists');
        return;
      } else {
        const emails = data.map((item) => item.email);
        if (emails.includes(email)) {
          alert('Email already exists');
          return;
        } else {
          postData(name, email, password, role);
          navigate('/');
          alert('Successfully Registered');
          return;
        }
      }
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
          <h2>Register</h2>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="ADMIN">Admin🔒</option>
            <option value="USER">User🔑</option>
          </select>
        </div>
        <div className="input-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          {nameError && <p className="error name-error">{nameError}</p>}
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          {emailError && <p className="error email-error">{emailError}</p>}
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {passwordError && <p className="error password-error">{passwordError}</p>}
        </div>
        <div className="input-group">
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          {confirmPasswordError && <p className="error confirm-password-error">{confirmPasswordError}</p>}
        </div>
        <button type="submit">Register</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default Register;
