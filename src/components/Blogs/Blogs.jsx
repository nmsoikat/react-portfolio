import "./Blogs.css";
import React, { useEffect, useState } from "react";
import ProfileImage from "../shared/ProfileImage/ProfileImage";
import Sidebar from "../shared/Sidebar/Sidebar";
import BlogItem from "./BlogItem/BlogItem";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="section-container blogs-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="container">
        <div className="blogs-content">
          <h3 className="text-center text-white">Up-coming...</h3>
          {blogs.map((blog) => (
            <BlogItem key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Blogs;
