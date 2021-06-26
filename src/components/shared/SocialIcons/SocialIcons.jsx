import React from "react";
import "./SocialIcons.css";
import { FaGithub, FaHackerrank, FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <article className="social-icons">
      <a
        href="https://www.linkedin.com/in/nur-mohammad-soikat-b4b9b4150/?trk=public-profile-join-page"
        target="_blank"
        className="social-icons__item linkedIn"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://github.com/saykat1"
        target="_blank"
        className="social-icons__item github"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.hackerrank.com/nurcse5"
        target="_blank"
        className="social-icons__item hackerRank"
      >
        <FaHackerrank />
      </a>
    </article>
  );
};

export default SocialIcons;
