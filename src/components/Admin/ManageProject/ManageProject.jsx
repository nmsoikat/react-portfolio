import "./ManageProject.css";
import React, { useContext, useEffect, useState } from "react";
import AdminPageTitle from "../Shared/AdminPageTitle/AdminPageTitle";
import AdminSidebar from "../Shared/AdminSidebar/AdminSidebar";
import { UserContent } from "../../../App";
import secureToken from "../../../config/api.token";
import { Link } from "react-router-dom";

const ManageProject = () => {
  const [projects, setProjects] = useState([]);

  const [loggedInUser, setLoggedInUser] = useContext(UserContent);

  useEffect(() => {
    fetch("http://localhost:4000/projects/all")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  const deleteHandler = (id) => {
    fetch(`http://localhost:4000/projectDeleteById/${id}`, {
      method: "DELETE",
      headers: {
        admin: `${secureToken} ${loggedInUser.email}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          const modifiedProjects = [...projects];
          setProjects(modifiedProjects.filter((project) => project._id !== id));
        }
      });
  };

  const checkboxOnChangeHandler = (e, id) => {
    const modifiedProjects = [...projects];

    // update FRONTEND
    //findIndex, selectObjectByIndex and replace properties, setState;
    const index = modifiedProjects.findIndex((project) => project._id === id);
    modifiedProjects[index].showOnAbout = e.target.checked;
    setProjects(modifiedProjects);

    // update BACKEND
    fetch(`http://localhost:4000/projectUpdateById/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        admin: `${secureToken} ${loggedInUser.email}`,
      },
      body: JSON.stringify({
        showOnAbout: modifiedProjects[index].showOnAbout,
      }),
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
    <div className="section-container manageProject-container">
      <div className="content-wrap">
        <div className="admin-sidebar-container">
          <AdminSidebar />
        </div>
        <div className="main-content-container manageProject-content">
          <AdminPageTitle title={"All Projects"} />

          <div className="main-portion__content shadow-sm border p-3">
            <div className="table-responsive">
              <table className="table table-bordered">
                <tr>
                  <th>SL</th>
                  <th>Visible On About</th>
                  <th>Title</th>
                  <th>Action</th>
                </tr>
                {projects.map((project, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <input
                        onChange={(e) =>
                          checkboxOnChangeHandler(e, project._id)
                        }
                        type="checkbox"
                        checked={project.showOnAbout}
                        id="showOnAbout"
                        name="showOnAbout"
                      />
                    </td>
                    <td>{project.title}</td>
                    <td style={{ minWidth: "135px", textAlign: "center" }}>
                    <Link
                        className="btn btn-warning btn-sm mr-1"
                        to={`/admin/addProject/${project._id}`}
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteHandler(project._id)}
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

export default ManageProject;
