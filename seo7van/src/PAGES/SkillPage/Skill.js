import React from "react";
import "./Skill.css";

const Skill = () => {
  return (
  <div className="skill-container">

    <img  
      src="/images/SkillImages/Skill_main2.png"
      className="skill_main_image"
      alt="메인 배경 이미지"
    />

    <img  
      src="/images/SkillImages/seojin.png"
      className="seojin_image hover-effect"
      alt="서진"
    />

    <img  
      src="/images/SkillImages/Activities&Awards.png"
      className="Activities_Awards_image hover-effect"
      alt="이력"
    />

    <img  
      src="/images/SkillImages/Education.png"
      className="Education_image hover-effect"
      alt="학력"
    />     

    <img  
      src="/images/SkillImages/그외Skill.png"
      className="but_skill_image hover-effect"
      alt="그외스킬"
    />   

    <img  
      src="/images/SkillImages/Backend.png"
      className="backend_image hover-effect"
      alt="백엔드 제목"
    />       
      
    <img  
      src="/images/SkillImages/Frontend.png"
      className="frontend_image hover-effect"
      alt="프론트엔드 제목"
    />  

    <img  
      src="/images/SkillImages/Datevase.png"
      className="datevase_image hover-effect"
      alt="데이터베이스 제목"
    />  

    <img  
      src="/images/SkillImages/ETC.png"
      className="etc_image hover-effect"
      alt="ETC 제목"
      />  

    
    <div className="backend-section">
      <div className="skill-items">
        <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white" alt="Java" />
        <img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"  alt="SpringBoot" />
        <img src="https://img.shields.io/badge/SpringSecurity-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white"  alt="SpringSecurity" />
        <img src="https://img.shields.io/badge/jpa-6DB33F?style=for-the-badge&logo=jpa&logoColor=white"  alt="JPA" />
        <img src="https://img.shields.io/badge/json%20web%20tokens-%23000000.svg?&style=for-the-badge&logo=json%20web%20tokens&logoColor=white"  alt="JWT" />
        <img src="https://img.shields.io/badge/node.js-%23339933.svg?&style=for-the-badge&logo=node.js&logoColor=white"  alt="Node.js" />
        <img src="https://img.shields.io/badge/Redis-%23DC382D.svg?&style=for-the-badge&logo=redis&logoColor=white"  alt="Redis" />
      </div>

    </div>

    <div className="frontend-section">
      <div className="skill-items">
        <img src="https://img.shields.io/badge/react-%2361DAFB.svg?&style=for-the-badge&logo=react&logoColor=black"  alt="React" />
        <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"  alt="HTML5" />
        <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"  alt="CSS3" />
        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"  alt="JavaScript" />
        <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jQuery&logoColor=white"  alt="jQuery" />
        <img src="https://img.shields.io/badge/bootstrap-%237952B3.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"  alt="Bootstrap" />
      </div>

    </div>

    <div className="datevase-section">
      <div className="skill-items">
        <img src="https://img.shields.io/badge/Oracle%20SQL-F80000?style=for-the-badge&logo=Oracle&logoColor=white"  alt="Oracle SQL" />
        <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"  alt="MySQL" />
      </div>

    </div>

    <div className="etc-section">
      <div className="skill-items">
        <img src="https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white"  alt="GitHub Actions" />
        <img src="https://img.shields.io/badge/git-%23F05032.svg?&style=for-the-badge&logo=git&logoColor=white"  alt="Git" />
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"  alt="GitHub" />
        <img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=VisualStudioCode&logoColor=white"  alt="VSCode" />
        <img src="https://img.shields.io/badge/Tomcat-F8DC75?style=for-the-badge&logo=ApacheTomcat&logoColor=white"  alt="Tomcat" />
        <img src="https://img.shields.io/badge/amazon%20aws-%23232F3E.svg?&style=for-the-badge&logo=amazon%20aws&logoColor=white"  alt="AWS" />
      </div>

    </div>

  </div>
  );
};

export default Skill;
