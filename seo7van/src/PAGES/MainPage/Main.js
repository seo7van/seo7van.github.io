import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import AboutMe from '../AboutMePage/AboutMe';
import './Main.css';


const Main = ({ aboutRef, menuOpen }) => {
  const [animate, setAnimate] = useState(false);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);  

  //Main페이지 로드시 애니메이션 실행
  useEffect(() => {
    setAnimate(true); 
  }, []);

  //About Me 스크롤 이동
  useEffect(() => {
    if (location.state?.scrollTo === 'about' && aboutRef?.current) {
      setTimeout(() => { //페이지 이동 후 스크롤 이동 (지연 실행)
        const topOffset = aboutRef.current.getBoundingClientRect().top + window.pageYOffset + 40;
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
      }, 100); //0.1초 지연 (렌더 완료 후)
    }
  }, [location, aboutRef] );

  //화면 사이즈 감지해서 모바일인지 여부 업데이트
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);  

  return (
    <>
      <div className='main_container' style={{ position: 'relative' }}> 
        <img  
          src="/images/MainImages/main.png"
          className={`main_image ${animate ? 'animate' : ''}`}
          alt="Main"
        />

        {!(menuOpen && isMobile) && (
          <div className="overlay_text" style={{ display: (menuOpen && isMobile) ? 'none' : 'block' }}>
            <img  
              src="/images/MainImages/main_text_1.png"
              alt="텍스트1" 
              className={`overlay_image_1 ${animate ? 'animate' : ''}`}
            />
            <img  
              src="/images/MainImages/main_text_2.png"
              alt="텍스트2" 
              className={`overlay_image_2 ${animate ? 'animate' : ''}`}
            />
          </div>
          )}
  
      </div>
      {/* 어바웃미 섹션 */}
      <AboutMe ref={aboutRef} />
      
      {/* 우측 하단 깃허브 및 스크롤 */}
      <div className="social-sidebar">
        <a href="https://github.com/seo7van" target="_blank" rel="noopener noreferrer">
          <img src="/images/MainImages/깃허브로고.png" alt="GitHub" />
        </a>
        <div className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ▲
        </div>   
      </div>
    </>
  );
}

export default Main;