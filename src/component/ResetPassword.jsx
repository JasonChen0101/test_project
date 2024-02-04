// TODO reset 畫面
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPasswordPage = () => {
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isSame, setIsSame] = useState(true);

  const checkPasswordFormat = (val) => {
    // TODO 檢查密碼格式

    setNewPassword(val)
  }

  const checkComfirmPasswordFormat = (val) => {
    // TODO 檢查密碼格式
    setIsSame(true);
    if (val.length > newPassword.length) {
        setIsSame(false)
        console.log('diff')
    }
    if (val != newPassword.slice(0, val.length))
    {
        console.log('diff')
        setIsSame(false);
    }

    setConfirmPassword(val)
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    // 驗證新密碼與確認密碼是否相符
    if (newPassword === confirmPassword) {
      // TODO: 在此處處理送出成功的邏輯，例如呼叫 API 來更新密碼

      // 重設密碼成功後導向至指定頁面（例如成功頁面）
      navigate('/resetPasswordSuccess');
    } else {
      setError('新密碼與確認密碼不相符');
    }
  };

  useEffect(() => {
    // TODO: 在此處添加其他初始化邏輯（如果有需要的話）
  }, []);

  return (
    <div className='h-[75vh] flex justify-center p-10'>
      <form onSubmit={handleSubmit}  className='w-[75%] flex flex-col'>
      <h2>重設密碼</h2>
        <label className='flex flex-col items-start'>
            Member Account:
            <input className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' 
            type="password" value={newPassword} onChange={(e) => checkPasswordFormat(e.target.value)} required/>
        </label>
        <br />
        <label className='flex flex-col items-start'>
            再次輸入密碼：
            {!isSame && (
                <span className="inline-block text-red-600"> 密碼不相同</span>
            )}
            <input                 
            className={`block w-full rounded-md py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                !isSame ? 'border border-red-600' : ''
            }`}
            type="password" value={confirmPassword} onChange={(e) => checkComfirmPasswordFormat(e.target.value)} required/>
        </label>
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <button className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' 
          type="submit">送出</button>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
