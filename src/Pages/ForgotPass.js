import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../Action";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ForgotPass = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.items)
  let { state } = useLocation();
  console.log("hello",state);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 

  const handleForgotPassword = () => {
    const userIndex = data.findIndex((user) => user.email === state);
    // console.log(userIndex);
    if (userIndex !== -1) {
      const user = data[userIndex];
      if (oldPassword === user.password) {
        const updatedUser = { ...user,password: newPassword };
        const newData = [...data];
        newData[userIndex] = updatedUser;
        dispatch(userRegister(newData));
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
        alert("Password updated successfully");
      } else {
        user.password = newPassword;
        const newData = [...data];
        newData[userIndex] = user;
        dispatch(userRegister(newData));;
        alert("Password updated successfully");
      }
    } else {
      alert("Email not found. Password not updated.");
    }
  };
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid",
        height: "600px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "2px solid",
          width: "400px",
          height: "400px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Forgot Password</h2>
        <input
          style={{ width: "300px", margin: "10px" }}
          type="password"
          placeholder="Old Password..."
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <input
          style={{ width: "300px", margin: "10px" }}
          type="password"
          placeholder="New Password..."
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          style={{ width: "300px", margin: "10px" }}
          type="password"
          placeholder="Confirm Password..."
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div
          style={{ display: "flex", justifyContent: "center", margin: "10px" }}
        >
          <button
            style={{
              width: "100px",
              display: "flex",
              justifyContent: "center",
            }}
            onClick={handleForgotPassword}
          >
            Save
          </button>
        </div>
        <div className="form__signupLink mb-3">
          <p>
            <Link to="/"> Back To Login </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
