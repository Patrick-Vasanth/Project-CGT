import React from "react";
import NavBar from "./NavBar";
import "./Assest/StyleLogin.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// function setStoragevalues() {
//   const storeVal = localStorage.getItem("input1");
//   if (!storeVal)
//     return {

//     };
//   return JSON.parse(storeVal);
// }

export default function ReferralCreation() {
  const navigate = useNavigate();

  const [input1, setInput] = useState({
    fullname: "",
    mobilenumber: "",
    email: "",
    companyname: "",
    password: "",
    confirmpwd: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setInput({ ...input1, [e.target.name]: e.target.value });
  };

  const validation = (input1) => {
    let error = {};
    if (input1.password !== input1.confirmpwd) {
      error.confirmpwd = "Password should be same";

      return error;
    } else {
      return (error.confirmpwd = "");
    }
  };

  const sumbitReferral = async (e) => {
    e.preventDefault();
    setErrors(validation(input1));
    // console.log(input1);
    e.target.reset();
    navigate("/adminreferral");
    await axios.post("https://6479821ca455e257fa6342c7.mockapi.io/refinfo", {
      input1,
    });
  };
  // useEffect(() => {
  //   localStorage.setItem("input1", JSON.stringify(input1));
  // }, [input1]);

  return (
    <>
      <div className="bg-color">
        <NavBar />
        <div className="container">
          <div className="main-page">
            <div className="crd-ref">
              <form onSubmit={sumbitReferral}>
                <div className="heading-ref">
                  <span>Referal Creation</span>
                </div>
                <div className="input">
                  <input
                    type="text"
                    id="input-name"
                    name="fullname"
                    placeholder="Fullname"
                    autoComplete="new-password"
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="input">
                  <input
                    type="tel"
                    id="input-tele"
                    name="mobilenumber"
                    placeholder="Mobile Number"
                    pattern="[6789][0-9]{9}"
                    autoComplete="new-password"
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="input">
                  <input
                    type="email"
                    id="input-email"
                    name="email"
                    placeholder="Email Address"
                    pattern="[\-a-zA-Z0-9~!$%\^&amp;*_=+}{\'?]+(\.[\-a-zA-Z0-9~!$%\^&amp;*_=+}{\'?]+)*@([a-zA-Z0-9_][\-a-zA-Z0-9_]*(\.[\-a-zA-Z0-9_]+)*\.([cC][oO][mM]))(:[0-9]{1,5})?$"
                    required
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="input">
                  <input
                    type="text"
                    id="input-comp"
                    name="companyname"
                    placeholder="Company Name"
                    autoComplete="off"
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="input">
                  <input
                    type="Password"
                    id="input-pwd"
                    name="password"
                    placeholder="Password"
                    autoComplete="off"
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="input">
                  <input
                    type="Password"
                    id="input-conpwd"
                    name="confirmpwd"
                    placeholder="Confirm Password"
                    autoComplete="off"
                    onChange={handleChange}
                    required
                  ></input>
                  {errors.confirmpwd && (
                    <p style={{ color: "red", textAlign: "center" }}>
                      {errors.confirmpwd}
                    </p>
                  )}
                </div>
                <div className="ref-btn">
                  <button id="btn-ref">Create Account</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
