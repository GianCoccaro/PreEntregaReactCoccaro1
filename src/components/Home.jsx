import React from 'react';
import bannerPic from "../img/banner-pic.jpeg";

const Home = () => {
  return (
    <div className='banner'>
      <img src={bannerPic} alt="imagen banner perro" />
      <div className="bannerWelcome">
        <h1>Welcome to my website, I´m Hugo!</h1>
      </div>
    </div>
  );
}

export default Home;
