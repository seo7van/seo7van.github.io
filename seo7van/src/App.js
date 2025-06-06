import { Routes, Route } from 'react-router-dom';
import { useRef } from "react";

import './App.css';
import "./index.css";

/* 컴포넌트 IMPORT */
import Header from './PAGES/MainPage/Header'; //Header항상 상단에 고정
import Main from './PAGES/MainPage/Main';

function App() {
  const aboutRef = useRef(null); // ✅ ref 생성

  return (
    <div className="App">
      <Header aboutRef={aboutRef} />
      <div claaName="pages">
        <Routes>
          {/* <Route path='/' element={<Main />} /> */}
          <Route path="/" element={<Main aboutRef={aboutRef} />} />
        </Routes>  
      </div>
    </div>
  );
}

export default App;