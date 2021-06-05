import "./ManageBlog.css";
import React, { useContext, useEffect, useState } from "react";
import AdminPageTitle from "../Shared/AdminPageTitle/AdminPageTitle";
import AdminSidebar from "../Shared/AdminSidebar/AdminSidebar";
import { UserContent } from "../../../App";
import secureToken from "../../../config/api.token";
import { Link } from "react-router-dom";

const ManageBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const [loggedInUser, setLoggedInUser] = useContext(UserContent);

  useEffect(() => {
    fetch("https://tranquil-earth-86948.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  const deleteHandler = (id) => {
    fetch(`https://tranquil-earth-86948.herokuapp.com/blogDeleteById/${id}`, {
      method: "DELETE",
      headers: {
        admin: `${secureToken} ${loggedInUser.email}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          const modifiedBlogs = [...blogs];
          setBlogs(modifiedBlogs.filter((blog) => blog._id !== id));
        }
      });
  };

  const checkboxOnChangeHandler = (e, id) => {
    const modifiedBlogs = [...blogs];

    //findIndex, selectObjectByIndex and replace properties, setState;
    const index = modifiedBlogs.findIndex((blog) => blog._id === id);
    modifiedBlogs[index].showOnAbout = e.target.checked;
    setBlogs(modifiedBlogs);

    fetch(`https://tranquil-earth-86948.herokuapp.com/blogUpdateById/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        admin: `${secureToken} ${loggedInUser.email}`,
      },
      body: JSON.stringify({ showOnAbout: modifiedBlogs[index].showOnAbout }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Update successfully");
        } else {
          alert("Update failed!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="admin-section-container manageBlog-container">
      <div className="content-wrap">
        <div className="admin-sidebar-container">
          <AdminSidebar />
        </div>
        <div className="main-content-container manageBlog-content">
          <AdminPageTitle title={"All Blogs"} />

          <div className="main-portion__content shadow-sm border p-3">
            <div className="table-responsive">
              <table className="table table-bordered">
                <tr>
                  <th>SL</th>
                  <th>Visible On About</th>
                  <th>Title</th>
                  <th>Action</th>
                </tr>
                {blogs.map((blog, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <input
                        onChange={(e) => checkboxOnChangeHandler(e, blog._id)}
                        type="checkbox"
                        checked={blog.showOnAbout}
                        id="showOnAbout"
                        name="showOnAbout"
                      />
                    </td>
                    <td>{blog.title}</td>
                    <td style={{ minWidth: "135px", textAlign: "center" }}>
                      <Link
                        className="btn btn-warning btn-sm mr-1"
                        to={`/admin/addBlog/${blog._id}`}
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteHandler(blog._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBlog;
