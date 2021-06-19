import "./AddProject.css";
import React, { useContext, useEffect, useState } from "react";
import AdminPageTitle from "../Shared/AdminPageTitle/AdminPageTitle";
import AdminSidebar from "../Shared/AdminSidebar/AdminSidebar";
import { UserContent } from "../../../App";
import secureToken from "../../../config/api.token";
import { useHistory, useParams } from "react-router";

const AddProject = () => {
  const [project, setProject] = useState({});
  const history = useHistory();
  const [loggedInUser, setLoggedInUser] = useContext(UserContent);
  const { id } = useParams();

  // console.log(id);

  if (loggedInUser.email === "") {
    history.replace({ pathname: "/login" });
  }

  useEffect(() => {
    if (id) {
      fetch(`https://tranquil-earth-86948.herokuapp.com/project/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProject(data);
        });
    }
  }, []);

  // console.log(project);


  const onChangeHandler = (e) => {
    const newProject = { ...project };
    newProject[e.target.name] = e.target.value;
    setProject(newProject);
  };

  const checkboxOnChangeHandler = (e) => {
    const newProject = { ...project };
    newProject[e.target.name] = e.target.checked;
    setProject(newProject);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(project.showOnAbout)
    const imgUrl = uploadImageGetUrl(e.target.image.files[0]); //promise
    imgUrl
      .then((dataImgURL) => {
        const createdProject = {
          url: project.url,
          title: project.title,
          desc: project.desc,
          category: project.category,
          showOnAbout: project.showOnAbout || false,
          imgUrl: dataImgURL,
        };

        // console.log(createdProject);

        if (project._id) {
          fetch(`https://tranquil-earth-86948.herokuapp.com/projectUpdateById/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              admin: `${secureToken} ${loggedInUser.email}`,
            },
            body: JSON.stringify(createdProject),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result) {
                alert("Update successfully");
                e.target.reset();
                setProject({})
              } else {
                alert("Update failed!");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          fetch("http://localhost:4000/addProject", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              admin: `${secureToken} ${loggedInUser.email}`,
            },
            body: JSON.stringify(createdProject),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data) {
                alert("Project add successfully");
                e.target.reset();
                setProject({})
              } else {
                alert("Project add failed!");
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
    <div className="admin-section-container addProject-container">
      <div className="content-wrap">
        <div className="admin-sidebar-container">
          <AdminSidebar />
        </div>
        <div className="main-content-container addProject-content">
          <AdminPageTitle title={project._id ? "Update Project" : "Add Your Project"} />

          <div className="main-portion__content shadow-sm border p-3">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="url">Live URL</label>
                <input
                  onChange={onChangeHandler}
                  id="url"
                  type="text"
                  className="form-control"
                  placeholder="Project live url"
                  name="url"
                  value={project.url}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="title">Project Title</label>
                <input
                  onChange={onChangeHandler}
                  type="text"
                  id="title"
                  className="form-control"
                  placeholder="Project title"
                  name="title"
                  value={project.title}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="desc">Short Description</label>
                <textarea
                  onChange={onChangeHandler}
                  id="desc"
                  className="form-control"
                  placeholder="Type project feature"
                  cols="30"
                  rows="5"
                  name="desc"
                  value={project.desc}
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
                    <option value="frontend" selected={project.category}>
                      Frontend
                    </option>
                    <option value="mern" selected={project.category}>
                      MERN
                    </option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="image">Project Image</label>
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
                  checked={project.showOnAbout}
                />
                <label class="form-check-label" for="showOnAbout">
                  Show on about page
                </label>
              </div>

              <input
                type="submit"
                className="btn btn-info"
                value={project._id ? "Update Project" : "Create Project"}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
