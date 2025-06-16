import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Project.css';

function Project() {
  const navigate = useNavigate();

  return (
    <section className="project-section" >

        <img  
          src="/images/ProjectImages/프로젝트1.png"
          className="project_main_image" 
          alt="Main"
        />
      
      <div className="project_overlay_images">

          <img  
            src="/images/ProjectImages/팝스팟.png"
            alt="팝스팟" 
            className="project_overlay_image_1" style={{ cursor: 'pointer' }} onClick={() => navigate('/popspot')}
          />
        
        <img  
          src="/images/ProjectImages/메디파스.png"
          alt="메디파스스" 
          className="project_overlay_image_2" style={{ cursor: 'pointer' }} onClick={() => navigate('/madipacs')}
        />        

        <img  
          src="/images/ProjectImages/디코벳.png"
          alt="디코벳" 
          className="project_overlay_image_3" style={{ cursor: 'pointer' }} onClick={() => navigate('/decobet')}
        />

      </div>
    </section>        
  );
}

export default Project;