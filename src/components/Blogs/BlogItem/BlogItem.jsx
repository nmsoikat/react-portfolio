import "./BlogItem.css";
import blog1 from "../../../images/blogs/blog-1.jpg";
import React from "react";

const BlogItem = ({ blog }) => {
  return (
    <div className="blog-item">
      <div className="blog-item__photo">
        <img src={blog.imgUrl} alt="" className="img-fluid" />
      </div>
      <div className="blog-item__content">
        <h2 className="blog-item__title"><a href={blog.url} target="_blank">{blog.title}</a></h2>
        <p className="blog-item__body">
          {blog.desc.length < 200
            ? blog.desc
            : blog.desc.substr(0, 200) + "..."}
            <a className="see-more" href={blog.url} target="_blank">see more</a>
        </p>
        
      </div>
    </div>
  );
};

export default BlogItem;
