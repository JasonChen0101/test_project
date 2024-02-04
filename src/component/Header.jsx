import { useEffect } from 'react';
import React from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectChapters, fetchChapters } from '../store/chaptersSlice'
import { selectAuth, login, logout } from '../store/authSlice';

import Search from './Search'
import reactLogo from '../assets/react.svg'


// TODO 限制章節最多6個
// TODO 搜尋框動畫
// TODO 搜尋框結果
const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const chapters = useSelector(selectChapters);
  
  const { isLoggedIn, email, token } = useSelector(selectAuth);

  useEffect(() => {
    dispatch(fetchChapters());
  }, []);

  function goTo(dest) {
    navigate(dest)
  }

  const handleLogin = () => {
    goTo('/login')
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  var a = "v"

  const HomeButton = () => {
    return (
      <button type="button" onClick={ () => goTo('/') }>
        Go home
      </button>
    );
  }
  
  const AboutButton = () => {
    return (
      <button type="button" onClick={ () => goTo('/about') }>
        Go about
      </button>
    );
  }
  
  const RegisterComfirmButton = () => {
    return (
      <button type="button" onClick={ () => goTo('/registerComfirm') }>
        Go registerComfirm
      </button>
    );
  }

  const ResetPasswordButton = () => {
    return (
      <button type="button" onClick={ () => goTo('/resetPasswordPage') }>
        Go resetPasswordPage
      </button>
    );
  }

  return (
    <header>
      {/* <HomeButton /> */}
      {/* <AboutButton /> */}
      {/* <RegisterComfirmButton /> */}
      {/* <ResetPasswordButton /> */}
      <div className='flex flex-row items-center'>
      <img src={reactLogo} alt="React Logo" onClick={ () => goTo('/') }/>
        {chapters.map(chapter => (
          <div className='flex-1' key={chapter.bp_chapter_id}>
            <h2>{chapter.bp_chapter_name}</h2>
          </div>
        ))}
        {chapters.map(chapter => (
          <div className='flex-1' key={chapter.bp_chapter_id}>
            <h2>{chapter.bp_chapter_name}</h2>
          </div>
        ))}
        <Search />
        <div>
          {isLoggedIn ? (
            <div className='flex flex-row items-center'>
              {token}
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div>
              <button onClick={handleLogin}>Login</button>
              <button onClick={ () => goTo('/register') }>Register</button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header;