import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userlogout } from "../Action";
import { useNavigate } from "react-router-dom";
import { userDelete } from "../Action";

const UersList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.user.items;
  });

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <span className="navbar-brand">User Management System</span>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " to="/users">
                  Users
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link "
                  to="/"
                  onClick={() => {
                    dispatch(userlogout());
                  }}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="container content">
        <div className="border mt-4 p-4">
          <h3 className="text-center bg-info p-2 mb-3">
            Welcome To User Management System
          </h3>
          {data.map((userData) => (
            <div className="row" key={userData.id}>
              <div className="col-md-6 d-flex align-items-center">
                <div className="ms-4">
                  <h5>Name : {userData.name}</h5>
                  <h5>Email : {userData.email}</h5>
                  <h5>Age : {userData.age}</h5>
                  <h5>Phone no : {userData.phoneno}</h5>
                  <div className="buttoons">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        navigate(`/edituser/${userData.id}`);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        dispatch(userDelete(userData.id));
                      }}
                    >
                      Delete
                    </button>
                  </div>
                  <hr style={{ height: "3px" }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UersList;
