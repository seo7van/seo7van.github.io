import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import AboutMe from '../AboutMePage/AboutMe';
import './Main.css';


const Main = ({ aboutRef }) => {
  const [animate, setAnimate] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // 스크롤 플래그가 있으면 스크롤 실행
    const shouldScroll = localStorage.getItem('scrollToAbout');
    if (shouldScroll === 'true' && aboutRef?.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      localStorage.removeItem('scrollToAbout'); // 한 번만 실행
    }
  }, [aboutRef]);
  
  //Main페이지 로드시 애니메이션 실행
  useEffect(() => {
    setAnimate(true); 
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo === 'about') {
      // 페이지 이동 후 스크롤 이동 (지연 실행)
      setTimeout(() => {
        const topOffset = aboutRef.current.getBoundingClientRect().top + window.pageYOffset + 40;
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
      }, 100); // 0.1초 지연 (렌더 완료 후)
    }
  }, [location, aboutRef] );

  return (
    <>
      <div className='main_container'> 
        <img  
          src="/images/main.png"
          className={`main_image ${animate ? 'animate' : ''}`}
          alt="Main"
        />
      </div>

      <div className="overlay_text">
        <img  
          src="/images/main_text_1.png"
          alt="텍스트1" 
          className={`overlay_image_1 ${animate ? 'animate' : ''}`}
        />
        <img  
          src="/images/main_text_2.png"
          alt="텍스트2" 
          className={`overlay_image_2 ${animate ? 'animate' : ''}`}
        />
      </div>
      {/* 어바웃미 섹션 */}
      <AboutMe ref={aboutRef} />
    </>
  );
}

export default Main;