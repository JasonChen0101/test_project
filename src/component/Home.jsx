// Home.js

import React, { useState, useEffect } from 'react';
import Banner from './Banner'

const Home = () => {
  const [hotContent, sethotContents] = useState([]);
  const list = [0,0,0,0,0,0,0,0,0,0]

  const gethotContentData = async () => {
    try {
      const response = await fetch('https://beauty.kinglyrobot.tk/api/hotContent');
      const data = await response.json();

      console.log("gethotContent", data);

      sethotContents(data.contents);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    gethotContentData();
  }, []);

  return (
    <div className='flex flex-col items-center p-10'>
      {/* Your home content */}
      {/* <div className='w-[100%]'></div> */}
      <Banner />
      <br></br>
      <div className='w-[100%] flex items-start'><h1>熱門文章</h1></div>
      <div className='flex flex-wrap justify-between text-left'>
      {hotContent.map((item, index)  => (
        <div key={index} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-0 my-3">
          <a href="#">
            <img src={ 'https://beauty.kinglyrobot.tk/media/beauty_content_banner_image/' + item.name }></img>
          </a>
          <div className='font-bold line-clamp-1 mb-1'>{ item.bp_subsection_title }</div>
          <p className="text-sm line-clamp-3">{ item.bp_subsection_intro }</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      ))}
    </div>
      


      <h2>Welcome to the Home Page</h2>
      <div className='flex flex-wrap justify-between'>
      {list.map((item, index)  => (
        <div key={index} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-0 my-3">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      ))}
    </div>


    </div>
  );
};

export default Home;
