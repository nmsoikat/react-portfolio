import { animated, useSpring } from "@react-spring/web";
import React, { useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Navbar = () => {
  const [subMenu, setSubMenu] = useState(true);
  const props = useSpring({
    to: { opacity: 1, visibility: "visible", height: "auto" },
    from: { opacity: 0, visibility: "hidden", height: 0 },
    config: { duration: 200 },
  });

  return (
    <ul className="sidebar">
      <li>
        <NavLink activeClassName="navLinkActive" exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="navLinkActive" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="navLinkActive" to="/resume">
          Resume
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="navLinkActive" to="/blogs">
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => setSubMenu(!subMenu)}
          to="/projects/all"
        >
          Projects
          <span className={subMenu && 'active-sub-menu'}>
            <FaCaretRight />
          </span>
        </NavLink>
        {subMenu && (
          <animated.ul style={{ ...props }} className="subMenu">
            <li>
              <NavLink activeClassName="navLinkActive" to="/projects/all">
                All
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="navLinkActive" to="/projects/mern">
                MERN
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="navLinkActive" to="/projects/frontend">
                Frontend
              </NavLink>
            </li>
          </animated.ul>
        )}
      </li>

    </ul>
  );
};

export default Navbar;
