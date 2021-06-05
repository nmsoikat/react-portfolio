import "./Blogs.css";
import React, { useEffect, useState } from "react";
import ProfileImage from "../shared/ProfileImage/ProfileImage";
import Sidebar from "../shared/Sidebar/Sidebar";
import BlogItem from "./BlogItem/BlogItem";

const Blogs = () => {
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
  
  useEffect(() => {
    fetch("https://tranquil-earth-86948.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="section-container blogs-container">
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
        <div className="blogs-content">
          {blogs.map((blog) => (
            <BlogItem key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Blogs;
