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

    <div className="backend-section skill-items">
      <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white" className="skill-items" alt="Java" />
      <img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" className="skill-items" alt="SpringBoot" />
      <img src="https://img.shields.io/badge/SpringSecurity-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white" className="skill-items" alt="SpringSecurity" />
      <img src="https://img.shields.io/badge/jpa-6DB33F?style=for-the-badge&logo=jpa&logoColor=white" className="skill-items" alt="JPA" />
      <img src="https://img.shields.io/badge/json%20web%20tokens-%23000000.svg?&style=for-the-badge&logo=json%20web%20tokens&logoColor=white" className="skill-items" alt="JWT" />
      <img src="https://img.shields.io/badge/node.js-%23339933.svg?&style=for-the-badge&logo=node.js&logoColor=white" className="skill-items" alt="Node.js" />
      <img src="https://img.shields.io/badge/Redis-%23DC382D.svg?&style=for-the-badge&logo=redis&logoColor=white" className="skill-items" alt="Redis" />
    </div>

    <div className="frontend-section skill-items">
      <img src="https://img.shields.io/badge/react-%2361DAFB.svg?&style=for-the-badge&logo=react&logoColor=black" className="skill-items" alt="React" />
      <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white" className="skill-items" alt="HTML5" />
      <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white" className="skill-items" alt="CSS3" />
      <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" className="skill-items" alt="JavaScript" />
      <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jQuery&logoColor=white" className="skill-items" alt="jQuery" />
      <img src="https://img.shields.io/badge/bootstrap-%237952B3.svg?&style=for-the-badge&logo=bootstrap&logoColor=white" className="skill-items" alt="Bootstrap" />
    </div>

    <div className="datevase-section skill-items">
      <img src="https://img.shields.io/badge/Oracle%20SQL-F80000?style=for-the-badge&logo=Oracle&logoColor=white" className="skill-items" alt="Oracle SQL" />
      <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white" className="skill-items" alt="MySQL" />
    </div>



    <div className="etc-section skill-items">
      <img src="https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" className="skill-items" alt="GitHub Actions" />
      <img src="https://img.shields.io/badge/git-%23F05032.svg?&style=for-the-badge&logo=git&logoColor=white" className="skill-items" alt="Git" />
      <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white" className="skill-items" alt="GitHub" />
      <img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=VisualStudioCode&logoColor=white" className="skill-items" alt="VSCode" />
      <img src="https://img.shields.io/badge/Tomcat-F8DC75?style=for-the-badge&logo=ApacheTomcat&logoColor=white" className="skill-items" alt="Tomcat" />
      <img src="https://img.shields.io/badge/amazon%20aws-%23232F3E.svg?&style=for-the-badge&logo=amazon%20aws&logoColor=white" className="skill-items" alt="AWS" />
    </div>

  </div>
  );
};

export default Skill;
