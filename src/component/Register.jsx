// src/components/Register.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { registerAction, emailExistAction, registError, registState } from '../store/registerSlice';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSame, setIsSame] = useState(true);
  const [comfirmPassword, setComfirmPassword] = useState('');
  const { registerSuccess, registerError } = useSelector(registState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkPasswordFormat = (val) => {
    // TODO 檢查密碼格式

    setPassword(val)
  }

  const checkComfirmPasswordFormat = (val) => {
    // TODO 檢查密碼格式
    setIsSame(true);
    if (val.length > password.length) {
        setIsSame(false)
        console.log('diff')
    }
    if (val != password.slice(0, val.length))
    {
        console.log('diff')
        setIsSame(false);
    }

    setComfirmPassword(val)
  }

  const handleRegister = async () => {
    if (email && password && comfirmPassword)
    {
        if (password != comfirmPassword) {
            alert("確認密碼與密碼不一致")
        }
        else {        
            const response = await dispatch(registerAction({email, password, comfirmPassword}));
            console.log(response)

            if (response.ok)
            {
                alert("註冊成功")
                navigate('/registerSuccess')
            }
        }
    } else {
        dispatch(registError('Invalid username or password'));
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
                type="password" value={password} onChange={(e) => checkPasswordFormat(e.target.value)} />
            </label>
            <br />
            <label className='flex flex-col items-start'>
                Comfirm Password: 
                {!isSame && (
                    <span className="inline-block text-red-600"> 密碼不相同</span>
                )}
                <br></br>
                <input 
                className={`block w-full rounded-md py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                    !isSame ? 'border border-red-600' : ''
                }`}
                type="password" value={comfirmPassword} onChange={(e) => checkComfirmPasswordFormat(e.target.value)} />
            </label>
            <br />
            <button className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            onClick={handleRegister}>Submit</button>
            {!registerSuccess && <p style={{ color: 'red' }}>{registerError}</p>}
        </div>
    </div>
  );
};

export default RegisterPage;
