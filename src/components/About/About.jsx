import "./About.css";
import React, { useEffect, useState } from "react";
import Sidebar from "../shared/Sidebar/Sidebar";
import ProfileImage from "../shared/ProfileImage/ProfileImage";
import { useSpring, animated, config } from "react-spring";
import SocialIcons from "../shared/SocialIcons/SocialIcons";
import { FaGithub, FaHackerrank, FaLinkedin } from "react-icons/fa";
import ProjectCard from "./../Projects/ProjectCard/ProjectCard";
import Footer from "../shared/Footer/Footer";
import BlogItem from "../Blogs/BlogItem/BlogItem";

const About = () => {
  // const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [expand, setExpand] = useState(false);

  const menuBtn = (event) => {
    const mBtn = event.target;
    if (mBtn.classList.contains("mBtn")) {
      mBtn.classList.toggle("open");
    } else if (mBtn.parentElement.classList.contains("mBtn")) {
      mBtn.parentElement.classList.toggle("open");
    }

    if (
      mBtn.classList.contains("open") ||
      mBtn.parentElement.classList.contains("open")
    ) {
      setExpand(true);
    } else {
      setExpand(false);
    }
  };

  // useEffect(() => {
  //   fetch("https://tranquil-earth-86948.herokuapp.com/projects/all?showOnAbout=" + true)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProjects(data);
  //     });
  // }, []);

  useEffect(() => {
    fetch(
      "https://tranquil-earth-86948.herokuapp.com/blogs?showOnAbout=" + true
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  return (
    <animated.div style={props} className="section-container about-container">
      <div
        className={expand ? "sidebar-container expand" : "sidebar-container"}
      >
        <button className="mBtn" onClick={(event) => menuBtn(event)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Sidebar />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-content">
              <div className="profile-image-wrap">
                <ProfileImage />
              </div>
              <div className="about-info">
                <h1 className="about-info__name">
                  <span className="hi">Hi, </span>
                  This Is <span className="highlight-text">Nur</span>
                </h1>
                <p className="about-info__designation">MERN Stack Developer</p>
                <p className="about-info__description">
                I build web applications. I have 1.6 years of experience in frontend development.
                </p>
                {/* <p className="skills strongAt">
                  <strong>Strong Skills: </strong> HTML, CSS, Bootstrap, Javascript, React, Redux
                </p>
                <p className="skills familiar">
                  <strong>Familiar Skills:</strong> Express, NodeJS, MongoDB, Mongoose, SQL
                </p> */}
                {/* <a
                  href="#"
                  target="_blank"
                  className="button btn-resume mt-4"
                >
                  View Resume
                </a> */}
                {/* <a
                  href="/file/Nur__Front-End.pdf"
                  className="button btn-resume mt-4"
                >
                  Download Resume
                </a> */}
              </div>
            </div>
          </div>
        </div>

        <div className="skills-area">
          <h2 className="skill-title">Skill Set</h2>

          <div className="skills-wrap">
            <span className="skill html">HTML</span>
            <span className="skill css">CSS</span>
            <span className="skill bootstrap">Bootstrap</span>
            <span className="skill js">Javascript</span>
            <span className="skill react">React</span>
            <span className="skill redux">Redux</span>
            <span className="skill nodejs">NodeJS</span>
            <span className="skill express">Express</span>
            <span className="skill mongodb">MongoDB</span>
            <span className="skill mongoose">Mongoose</span>
            <span className="skill sql">SQL</span>
          </div>
        </div>

        <div className="contact-area mt-5">
          <h2 className="skill-title">Contact</h2>

          <div className="contact-wrap mb-2">
            <Footer />
          </div>
        </div>

      </div>
    </animated.div>
  );
};

export default About;
