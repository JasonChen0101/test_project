// src/components/RegisterSuccess.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';

const RegisterSuccessPage = () => {
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

  return (
    <div className='h-[75vh] flex justify-center p-10'>
      <p>會員註冊成功</p>
      <p>請至信箱收取認證信件，完成認證開通帳號</p>
      <p>...{count}秒後導向至首頁</p>
    </div>
  );
}

export default RegisterSuccessPage;