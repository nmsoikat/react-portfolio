import React from "react";
import "./AdminSidebar.css";
import {
  FaBloggerB,
  FaThList,
  FaProjectDiagram,
  FaClipboardList,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const userLogoutHandler = () => {};
  return (
    <div className="sidebar-wrap">
      <h2 className="sidebar__item sidebar-title">
        <NavLink to="/">NM Soikat</NavLink>
      </h2>
      <ul className="sidebar">
        <li className="sidebar__item">
          <NavLink to="/admin/projects">
            <span className="icon">
              <FaClipboardList />
            </span>
            Projects
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/admin/addProject">
            <span className="icon">
              <FaProjectDiagram />
            </span>
            Add Project
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/admin/blogs">
            <span className="icon">
              <FaThList />
            </span>
            Blogs
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/admin/addBlog">
            <span className="icon">
              <FaBloggerB />
            </span>
            Add Blog
          </NavLink>
        </li>
      </ul>

      <div className="logout-btn-wrap">
        <button
          className="logout btn btn-secondary w-100 mr-1"
          onClick={userLogoutHandler}
        >
          <span className="icon">
            <FaSignOutAlt />
          </span>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
