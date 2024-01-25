import React, { useState } from 'react';
// import './App.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate=useNavigate();

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validateForm = () => {
    let newErrors = {};

    if (!formData.email) {
      newErrors = { ...newErrors, email: 'Email is required' };
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors = { ...newErrors, email: 'Invalid email address' };
    }

    if (!formData.password) {
      newErrors = { ...newErrors, password: 'Password is required' };
    } else if (formData.password.length < 6) {
      newErrors = { ...newErrors, password: 'Password must be at least 6 characters long' };
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Submitted data:', formData);
      navigate('/home')
    }
  };

  return (
    <div className="App">
      <h1>Signin/Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <br />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <br />
        <button type="submit">LOGIN</button>
      </form>
      <p>Dont have an account?<Link to="/">Signup</Link></p>
    </div>
  );
};

export default Signin;
