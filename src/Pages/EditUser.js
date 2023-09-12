import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";
import { userUpdate } from "../Action";


const EditUser = () => {

    const data = useSelector((state)=>{
        return state.user.items
      })
     
      const {id} = useParams()
      const Intid = parseInt(id)
      const currentUser = data.find((data) => data.id === Intid)

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [inputField, setInputField] = useState({
      id:Intid,
      name: currentUser.name,
      // email: currentUser.email,
      // password:currentUser.password,
      age:currentUser.age,
      phoneno:currentUser.phoneno,
    });

    const inputHandler = (e) => {
      setInputField({ ...inputField, [e.target.name]: e.target.value });
      // setInputField(e.target.value)
    };
  
    const submitButton = async () => {
      if (inputField.name === "") {
        toast.error("Name Is Required");
      // } else if (inputField.email === "") {
      //   toast.error("Email Is Required");
      // } else if (inputField.password === "") {
      //   toast.error("Password is Required");
      } else {
        dispatch(userUpdate(inputField));
        navigate("/users");
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
                <Link className="nav-link " to="/users">
                  users
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
            {/* <div className="mb-3">
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
            </div> */}
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
              className="btn btn-primary"
              onClick={submitButton}
            >
              Submit
            </button>
            
            <button
            onClick={()=>{navigate("/users")}}
              type="submit"
              className="btn btn-danger"
              
            >
              Cancle
            </button>
          </div>
          {/* col-md-6 ends */}
        </div>
      </form>
    </>
  );
};

export default EditUser;
