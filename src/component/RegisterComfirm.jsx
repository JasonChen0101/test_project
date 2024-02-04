// src/components/RegisterSuccess.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';

const RegisterComfirmPage = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    // Redirect to the homepage when countdown reaches 0
    if (count === 0) {
      clearInterval(countdownInterval);
      navigate('/');
    }

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(countdownInterval);
  }, [count, navigate]);

  const handleLogin = () => {
    navigate('/login');
  }

  return (
    <div className='h-[75vh] flex justify-center p-10'>
      <p>會員驗證成功</p>
      <p>...{count}秒後導向至首頁，若未自動跳轉請點<a onClick={handleLogin}>這裡</a></p>
    </div>
  );
}

export default RegisterComfirmPage;