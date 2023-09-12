import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../Action";

const HomePage = () => {
  const data = useSelector((state)=>{
    return state.user.items
  })
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputField, setInputField] = useState({
    name: "",
    email: "",
    password: "",
    age:"",
    phoneno:"",
  });

  const inputHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
    // setInputField(e.target.value)
  };

  const submitButton = async () => {
    if (inputField.name === "") {
      toast.error("Name Is Required");
    } else if (inputField.email === "") {
      toast.error("Email Is Required");
    } else if (inputField.password === "") {
      toast.error("Password is Required");
    } else {
      let id = data[data.length - 1].id + 1
      Object.assign(inputField,{id:id})
      dispatch(userRegister(inputField));
      navigate("/");
      toast.success("User Saved!");
    }
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <span className="navbar-brand"> 
               User Management System
            </span>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  LogIn
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <form className="container content mt-4" autoComplete="off">
        <h5> Apply for Registration...</h5>
        <div className="row border p-4">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                User Name
              </label>
              <input
                type="text"
                name="name"
                value={inputField.name}
                onChange={inputHandler}
                className="form-control"
                id="exampleInputName"
                aria-describedby="emailHelp"
                required="true"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={inputField.email}
                onChange={inputHandler}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required="true"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={inputField.password}
                onChange={inputHandler}
                className="form-control"
                id="exampleInputPassword1"
                required="true"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Age
              </label>
              <input
                type="text"
                name="age"
                value={inputField.age}
                onChange={inputHandler}
                className="form-control"
                id="exampleInputPassword1"
                required="true"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                phono No
              </label>
              <input
                type="text"
                name="phoneno"
                value={inputField.phoneno}
                onChange={inputHandler}
                className="form-control"
                id="exampleInputPassword1"
                required="true"
              />
            </div>

            <button
              type="submit"
              className="form__submit-btn"
              onClick={submitButton}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default HomePage;
