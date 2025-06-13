import React, { forwardRef, useEffect, useRef, useState } from 'react';
import './AboutMe.css';

const AboutMe = forwardRef((props, ref) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const container = containerRef.current; // 🔥 ref.current 값을 변수에 저장
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      }, { threshold: 0.3 }
    );
    if (container) observer.observe(container);
    return () => {
      if (container) observer.unobserve(container); // 🔥 변수 사용
    };
  }, []);

  return (
    <section className="aboutme-section" ref={ref}>
      
      <img  
        src="/images/AboutMeImages/AboutMe_main.png"
        className="AboutMe_main_image"
        alt="Main"
      />

      <div className="AboutMe_overlay_text" ref={containerRef}>

        <img  
          src="/images/AboutMeImages/네박자 개발자.png"
          alt="중간 텍스트" 
          className="AboutMe_overlay_image_1" 
        />

        <img  
          src="/images/AboutMeImages/인내와 집념.png"
          alt="부가 텍스트1" 
          className={`AboutMe_overlay_image_2 ${isVisible ? 'reveal-right-1' : ''}`}
        />

        <img  
          src="/images/AboutMeImages/깔끔은 기본.png"
          alt="부가 텍스트3" 
          className={`AboutMe_overlay_image_4 ${isVisible ? 'reveal-right-2' : ''}`}
        />        

        <img  
          src="/images/AboutMeImages/도전은 재미.png"
          alt="부가 텍스트2" 
          className={`AboutMe_overlay_image_3 ${isVisible ? 'reveal-left-1' : ''}`}
        />

        <img  
          src="/images/AboutMeImages/감각 개발자.png"
          alt="부가 텍스트4" 
          className={`AboutMe_overlay_image_5 ${isVisible ? 'reveal-left-2' : ''}`}
        />
        
      </div>        
  
    </section>
  );
});

export default AboutMe;