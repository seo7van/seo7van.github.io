import { Routes, Route } from 'react-router-dom';
import { useRef, useState } from "react";

import './App.css';
import "./index.css";

/* 컴포넌트 IMPORT */
import Header from './PAGES/MainPage/Header'; //Header항상 상단에 고정
import Main from './PAGES/MainPage/Main';
import Project from './PAGES/ProjectPage/Project';
import PopspotPDF from './PAGES/ProjectPage/PopspotPDF';
import MadipacsPDF from './PAGES/ProjectPage/MadipacsPDF';
import DecobetPDF from './PAGES/ProjectPage/DecobetPDF';
import CoverLetter from './PAGES/CoverLetterPage/CoverLetter';
import PortPoilo from './PAGES/PortPoiloPage/PortPoilo';

function App() {
  const aboutRef = useRef(null); //ref 생성
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Header aboutRef={aboutRef} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Main aboutRef={aboutRef} menuOpen={menuOpen}/>} />

          <Route path="/project" element={<Project />} />
            <Route path="/popspot" element={<PopspotPDF />} />
            <Route path="/madipacs" element={<MadipacsPDF/>} />
            <Route path="/decobet" element={<DecobetPDF/>} />

          <Route path="/CoverLetter" element={<CoverLetter/>} />

          <Route path="/PortPoilo" element={<PortPoilo/>} />          
        </Routes>  
      </div>
    </div>
  );
}

export default App;