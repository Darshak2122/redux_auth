import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { userlogin, List } from "../Action";

const LoginPage = () => {
  const users = useSelector((state) => {
    return state.user.items;
  });
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function login(user) {
    toast.success("Login Success");
    navigate("/users");
    navigate("/forgot");

    dispatch(userlogin(true));
    dispatch(List(user));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < users.length; i++) {
      if (email === users[i].email && password === users[i].password) {
        return login(users[i]);
      }
    }
    toast.error("Invalid Email OR password");
  };
  return (
    <>
      <div className="form__container d-flex felx-column align-items-center justify-content-center">
        <form autoComplete="off">
          <h4 className="form__heading">User Management System </h4>
          <hr />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="exampleInputEmail1" 
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="exampleInputPassword1"
            />
          </div>
          <div className="form__signupLink mb-3">
            <p>
              Don't Have An Account? <Link to="/register"> Signup ! </Link>
            </p>
          </div>
          <button
            type="submit"
            className="glow-on-hover"
            onClick={handleSubmit}
          >
            Login
          </button>
          <div className="form__signupLink mb-3">
            <p>
            <Link to="/forgot" state={email}> Forgot Password? </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
