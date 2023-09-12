import React from "react";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./Pages/HomePage";
import UsersList from "./Pages/UsersList";
import LoginPage from "./Pages/LoginPage";
import { Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import EditUser from "./Pages/EditUser";
import ForgotPass from './Pages/ForgotPass'
function App() {

  const visiterdata = useSelector((state)=>{
    return state.user.auth[0]
  })

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes>
        {!visiterdata && (<>
            <Route exact path="/" element={<LoginPage  />} />
            <Route exact path="/register" element={<HomePage />} />
            <Route exact path="/forgot" element={<ForgotPass />} />
            <Route exact path="*" element={<Navigate to={"/"} />} />
        </>)}
        {visiterdata && (<>
            <Route exact path="/users" element={<UsersList />} />
            <Route exact path="*" element={<Navigate to={"/users"} />} />
            <Route exact path="/register" element={<HomePage />} />
            <Route exact path="/edituser/:id" element={<EditUser />} />
        </>)}
       
      </Routes>
    </>
  );
}

export default App;


