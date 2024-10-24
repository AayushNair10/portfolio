import { motion } from "framer-motion";
import * as React from "react";
import myPic from "../../assets/mypic.jpeg";
import resume from "../../assets/resume.pdf";
import "./About.scss";
export default function About() {
  return (
    <div id="home" className="about-container">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="about"
      >
        <h1 className="intro-heading">Hi, I am Aayush Nair! </h1>
        <p className="intro-description">
        A passionate computer science student with experience in web development and software engineering. I enjoy building innovative solutions and continually expanding my technical skills.
        </p>
        <a href={resume} className="resume" download="Aayush_Nair_Resume.pdf">
          Download my Resume
        </a>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="image-container"
      >
        <img src={myPic} alt="userimage" />
      </motion.div>
    </div>
  );
}
