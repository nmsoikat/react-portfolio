import "./AddBlog.css";
import React, { useContext, useEffect, useState } from "react";
import AdminPageTitle from "../Shared/AdminPageTitle/AdminPageTitle";
import AdminSidebar from "../Shared/AdminSidebar/AdminSidebar";
import { UserContent } from "../../../App";
import { useHistory, useParams } from "react-router-dom";
import secureToken from "../../../config/api.token";

const AddBlog = () => {
  const [blog, setBlog] = useState({});
  const history = useHistory();
  const [loggedInUser, setLoggedInUser] = useContext(UserContent);
  const { id } = useParams()

  console.log(id);


  if (loggedInUser.email === "") {
    history.replace({ pathname: "/login" });
  }

  useEffect(() => {
    if(id){

      fetch(`https://tranquil-earth-86948.herokuapp.com/blog/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setBlog(data);
        });
    }
  }, []);

  const onChangeHandler = (e) => {
    const newBlog = { ...blog };
    newBlog[e.target.name] = e.target.value;
    setBlog(newBlog);
  };

  const checkboxOnChangeHandler = (e) => {
    const newBlog = { ...blog };
    newBlog[e.target.name] = e.target.checked;
    setBlog(newBlog);
  };

  const onSubmit = (e) => {
    e.preventDefault();
console.log(blog.showOnAbout)
    const imgUrl = uploadImageGetUrl(e.target.image.files[0]); //promise
    imgUrl
      .then((dataImgURL) => {
        const createdBlog = {
          url: blog.url,
          title: blog.title,
          desc: blog.desc,
          category: blog.category,
          showOnAbout: blog.showOnAbout || false,
          imgUrl: dataImgURL,
        };

        if(blog._id){
          fetch(`https://tranquil-earth-86948.herokuapp.com/blogUpdateById/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              admin: `${secureToken} ${loggedInUser.email}`,
            },
            body: JSON.stringify(createdBlog),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result) {
                alert("Update successfully");
                e.target.reset();
                setBlog({})
              } else {
                alert("Update failed!");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          fetch("https://tranquil-earth-86948.herokuapp.com/addBlog", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              admin: `${secureToken} ${loggedInUser.email}`,
            },
            body: JSON.stringify(createdBlog),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data) {
                alert("Blog add successfully");
                e.target.reset();
                setBlog({})
              } else {
                alert("Blog add failed!");
              }
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const uploadImageGetUrl = (imgFile) => {
    const imgData = new FormData();
    imgData.set("key", "d1ffbc07a56ad18e3f092e591781c067");
    imgData.append("image", imgFile);

    return fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: imgData,
    })
      .then((res) => res.json())
      .then((result) => {
        return result.data.display_url || null;
      })
      .catch((err) => console.log(err));

    // this function return promise
  };
  return (
    <div className="admin-section-container addBlog-container">
      <div className="content-wrap">
        <div className="admin-sidebar-container">
          <AdminSidebar />
        </div>
        <div className="main-content-container addBlog-content">
          <AdminPageTitle title={blog._id ? "Update Blog" : "Create New Blog"} />

          <div className="main-portion__content shadow-sm border p-3">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="url">Live URL</label>
                <input
                  onChange={onChangeHandler}
                  id="url"
                  type="text"
                  className="form-control"
                  placeholder="Blog live url"
                  name="url"
                  value={blog.url}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="blog">Blog Title</label>
                <input
                  onChange={onChangeHandler}
                  type="text"
                  id="blog"
                  className="form-control"
                  placeholder="Blog title"
                  name="title"
                  value={blog.title}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="desc">Short Description</label>
                <textarea
                  onChange={onChangeHandler}
                  id="desc"
                  className="form-control"
                  placeholder="Type blog content"
                  cols="30"
                  rows="5"
                  name="desc"
                  value={blog.desc}
                  required
                ></textarea>
              </div>
              <div className="form-group row">
                <div className="col-md-6">
                  <label htmlFor="category">Select Category</label>
                  <select
                    onChange={onChangeHandler}
                    name="category"
                    id="category"
                    className="form-control"
                    required
                  >
                    <option value="" selected>
                      --Category--
                    </option>
                    <option value="technology" selected={blog.category}>Technology</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="image">Blog Image</label>
                  <input
                    type="file"
                    id="image"
                    className="form-control btn btn-success"
                    name="image"
                    required
                  />
                </div>
              </div>
              <div class="form-check">
                <input
                onChange={checkboxOnChangeHandler}
                  type="checkbox"
                  class="form-check-input"
                  id="showOnAbout"
                  name="showOnAbout"
                  checked={blog.showOnAbout}
                />
                <label class="form-check-label" for="showOnAbout">
                  Show on about page
                </label>
              </div>

              <input
                type="submit"
                className="btn btn-info"
                value={blog._id ? "Update Blog": "Create Blog"}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
