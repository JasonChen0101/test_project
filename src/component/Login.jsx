// src/components/LoginPage.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, loginError, selectAuth } from '../store/authSlice';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginError: error } = useSelector(selectAuth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Here you would typically make an API call to validate the login
    // For simplicity, let's assume the login is successful if the username and password are not empty
    if (email && password) {
      const response = await dispatch(loginAction({email, password}));
      
      console.log(response)
      if (response.ok) {
        // Redirect to a different page upon successful login
        // history.push('/dashboard');
        alert("Login success")
        navigate('/')
      } else {
        // Handle login error
        console.error('Login failed');
      }
    } else {
      dispatch(loginError('Invalid username or password'));
    }
  };


  const forgotPassword = () => {
    const email = prompt('Enter your email:');
    
    if (email) {
      // Do something with the email (e.g., send it to the server or update state)
      console.log('Entered email:', email);
        // TODO
        //後端接收到重設密碼的 request，發送 email 驗證

    } else {
      // User clicked Cancel or entered an empty string
      console.log('Cancelled or empty input');
    }
  };


  return (
    <div className='h-[75vh] flex justify-center p-10'>
        <div className='w-[75%]'>
            <label className='flex flex-col items-start'>
                Member Account:
                <br></br>
                <input className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' 
                type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label className='flex flex-col items-start'>
                Password:
                <br></br>
                <input className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            onClick={handleLogin}>Submit</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <br />
            <div className='w-[100%] flex justify-end'>
              <a onClick={ forgotPassword }>Forgot Password?</a>
            </div>
        </div>
    </div>
  );
};

export default LoginPage;
