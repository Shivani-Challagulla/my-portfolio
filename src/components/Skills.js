import React from 'react';
import { FaJava, FaReact, FaAngular, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs } from 'react-icons/fa';
import { SiSpring, SiHibernate, SiMongodb, SiMysql, SiPostgresql, SiAmazon, SiExpress, SiSpringboot, SiApachekafka, SiDocker} from 'react-icons/si';
import { BiLogoGit } from "react-icons/bi";
import '../styles/Skills.css';

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <h2>Skills</h2>
      <div className="skills-icons">
        <div className="skill"><FaJava className="icon java" /><p>Java</p></div>
        <div className="skill"><SiSpring className="icon spring" /><p>Spring</p></div>
        <div className="skill"><SiSpringboot className="icon springboot" /><p>Spring Boot</p></div>
        <div className="skill"><SiHibernate className="icon hibernate" /><p>Hibernate</p></div>

        <div className="skill"><FaHtml5 className="icon html" /><p>HTML</p></div>
        <div className="skill"><FaCss3Alt className="icon css" /><p>CSS</p></div>
        <div className="skill"><FaJsSquare className="icon js" /><p>JavaScript</p></div>
        <div className="skill"><FaReact className="icon react" /><p>React</p></div>
        <div className="skill"><FaAngular className="icon angular" /><p>Angular</p></div>
        <div className="skill"><FaNodeJs className="icon node" /><p>Node.js</p></div>
        <div className="skill"><SiExpress className="icon express" /><p>Express.js</p></div>

        <div className="skill"><SiMysql className="icon mysql" /><p>MySQL</p></div>
        <div className="skill"><SiMongodb className="icon mongodb" /><p>MongoDB</p></div>
        <div className="skill"><SiPostgresql className="icon postgres" /><p>PostgreSQL</p></div>
        
        <div className="skill"><SiApachekafka className="icon kafka" /><p>Kafka</p></div>
        <div className="skill"><SiDocker className="icon docker" /><p>Docker</p></div>
        <div className="skill"><SiAmazon className="icon aws" /><p>AWS</p></div>
        <div className="skill"><BiLogoGit className="icon git" /><p>Git</p></div>
      </div>
    </div>
  );
};

export default Skills;
