import "./Assest/StyleLogin.css";
// import React, { createContext, useState } from "react";
import User from "../Images/user.png";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ReferralFullList from "./ReferralFullList";
import StudentFullList from "./StudentFullList";
import StudentProfile from "./StudentProfile";
import ReferralProfile from "./ReferralProfile";
import ReferralCreation from "./ReferralCreation";
import StudentCreation from "./StudentCreation";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";

import ForgetPassword from "./ForgetPassword";

export default function LoginCredentials() {
  const admin = {
    id: 1,
    name: "admin",
  };

  const ref = {
    id: 2,
    name: "ref",
  };

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>

        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/adminreferral" element={<ReferralFullList />}></Route>
        <Route path="/adminstudent" element={<StudentFullList />}></Route>
        <Route path="/referralcreation" element={<ReferralCreation />}></Route>
        <Route path="/studentcreation" element={<StudentCreation />}></Route>
        <Route path="/studentprofile" element={<StudentProfile />}></Route>
        <Route path="/referralprofile" element={<ReferralProfile />}></Route>
        <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
      </Routes>
      <div className="bg-color">
        <div className="container">
          <div className="main-page">
            <div className="crd1">
              <div className="box1">
                <Link to="/login" state={admin}>
                  <div>
                    <img src={User} alt="Login Logo" className="User-logo" />
                  </div>
                  <div className="admin">
                    <h3>ADMIN LOGIN</h3>
                  </div>
                </Link>
              </div>
              <div className="box2">
                <Link to="/login" state={ref}>
                  <div>
                    <img src={User} alt="Login Logo" className="User-logo" />
                  </div>
                  <div className="referral">
                    <h3>REFERRAL LOGIN</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
