import React  from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './Header.css';

function Header({ aboutRef, menuOpen, setMenuOpen }) {
  const navigate = useNavigate();
  const location = useLocation(); //현재 경로 확인

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };  

  const handleLogoClick = () => {
    if (location.pathname === '/') { //현재 홈이면 → 부드러운 스크롤 맨 위로
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {

      navigate('/'); //다른 페이지면 → 홈으로 이동
    }
  };  

  const handleMenuClick = (action) => {
    setMenuOpen(false); 
    action();
  }  

  return (
    <div className="header-wrapper">
      <header className="header-all">

        <div className="logo-wrapper" >
          <img
            src="https://capsule-render.vercel.app/api?type=venom&color=0:FF69B4,100:FA7000&height=200&animation=twinkling"
            className="logo-background"
            alt="logo-background"
          />
          <p
            className="logo-text"
            onClick={handleLogoClick}
            style={{ cursor: 'pointer' }}
          >
            HELLO SEOJIN WORLD!
          </p>
        </div>
     

        <div className={`header-nav-menu ${menuOpen ? "open" : ""}`}>
          <div className="nav-menu-container">
            <div className="nav-menu-content" onClick={() => handleMenuClick(() => {
              if (location.pathname === '/') {
                const topOffset = aboutRef.current.getBoundingClientRect().top + window.pageYOffset +40;
                window.scrollTo({ top: topOffset, behavior: 'smooth' });
              } else {
                navigate('/', { state: { scrollTo: 'about' } });
              }
            })}>About ME</div>    
            <div className="nav-menu-content" onClick={() => { navigate('/Skill') }} >보유스킬</div>
            <div className="nav-menu-content" onClick={() => { navigate('/Project') }} >프로젝트</div>
            <div className="nav-menu-content" onClick={() => { navigate('/CoverLetter') }} >자기소개서</div>
            <div className="nav-menu-content" onClick={() => { navigate('/PortPoilo') }} >포트폴리오</div>
          </div>            
        </div>
        <div className="menu-icon" onClick={handleMenuToggle}>
          &#9776; {/* 햄버거 메뉴 아이콘 (유니코드) */}
        </div> 
      </header>
    </div>  
  );
}

export default Header;