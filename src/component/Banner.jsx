import React, { useState, useEffect } from 'react';

const BannerComponent = () => {
  const [banners, setBanners] = useState([]);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const getBannerData = async () => {
    try {
      const response = await fetch('https://beauty.kinglyrobot.tk/api/banner');
      const data = await response.json();

      console.log("getBannerData", data);

      setBanners(data.banners);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getBannerData();
  }, []);


  var bannerSwitchTimer = null;
  useEffect(() => {
    // Set up a timer to switch banners every 5 seconds
    bannerSwitchTimer = setInterval(() => {
      setCurrentBannerIndex(prevIndex => (prevIndex + 1) % banners.length);
    }, 5000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(bannerSwitchTimer);
  }, [banners]);

  const handleDotClick = (index) => {
    setCurrentBannerIndex(index);
  };

  return (
    <div className='max-w-6xl'>
      {/* Render your banner content using the current banner */}
      {banners.length > 0 && (
        <div className='relative flex flex-col items-center'>
          <a href={banners[currentBannerIndex].btyb_link} target="_blank" rel="noopener noreferrer">
            <img className='rounded-2xl  max-h-120' 
            src={'https://beauty.kinglyrobot.tk/media/beauty_advertise_banner_image/' + banners[currentBannerIndex].name} 
            alt={banners[currentBannerIndex].cname}
            title={banners[currentBannerIndex].cname} />
          </a>
          
          {/* Black semi-transparent background behind white dots */}
          <div className='absolute bottom-5 space-x-2 items-center'>
            <div className='flex rounded-full bg-black bg-opacity-70 p-1'>
              {banners.map((banner, index) => (
                <div
                  key={index}
                  onClick={() => handleDotClick(index)} // Handle click on white dot
                  className={`w-4 h-4 rounded-full bg-white ${currentBannerIndex === index ? 'opacity-100' : 'opacity-50'} mx-1 cursor-pointer`}
                />
              ))}
            </div>
          </div>
          {/* <p>{banners[currentBannerIndex].cname}</p> */}
        </div>
      )}
    </div>
  );
};

export default BannerComponent;
