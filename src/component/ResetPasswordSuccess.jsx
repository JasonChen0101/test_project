
// TODO reset 成功畫面 5s 後跳轉 home 
// src/components/RegisterSuccess.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';

const ResetPasswordSuccessPage = () => {
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

  const handleNavigate = () => {
    navigate('/');
  }

  return (
    <div className='h-[75vh] flex justify-center p-10'>
      <p>密碼重設成功</p>
      <p>...{count}秒後導向至首頁，若未自動跳轉請點<a onClick={handleNavigate}>這裡</a></p>
    </div>
  );
}

export default ResetPasswordSuccessPage;