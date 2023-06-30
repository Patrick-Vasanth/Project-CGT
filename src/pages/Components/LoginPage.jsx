import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "./Assest/StyleLogin.css";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  const access = location.state.name;
  console.log(access);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  // login
  const sumbitLogin = async (access) => {
    if (access === "ref") {
      const response = await axios.get(
        "https://6479821ca455e257fa6342c7.mockapi.io/refinfo"
      );
      const users = response.data;
      console.log(users);
      const foundUser = users.find(
        (user) =>
          user.input1.email === email && user.input1.password === password
      );
      if (foundUser) {
        alert("success");
        navigate("/home", { state: { access } });
      } else {
        alert("faliure");
        navigate("/login");
      }
    } else {
      if (email === "patrickvasanth.j@gmail.com" && password === "12345") {
        alert("Login Successful");
        navigate("/home", { state: { access } });
        setError("");
      } else if (email !== "patrickvasanth.j@gmail.com") {
        setError("Incorrect username");
      } else {
        setError("Incorrect Password");
      }
    }
  };

  return (
    <>
      <div className="bg-color">
        <div className="container">
          <div className="main-page">
            <div className="crd">
              <div>
                {access === "admin" ? (
                  <div className="heading">
                    <span> ADMIN LOGIN</span>
                  </div>
                ) : (
                  <div className="heading">
                    <span> REFERRAL LOGIN</span>
                  </div>
                )}
                <div className="input">
                  {access === "admin" ? (
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Username"
                      id="input-name"
                      onChange={handleEmailChange}
                      pattern="[\-a-zA-Z0-9~!$%\^&amp;*_=+}{\'?]+(\.[\-a-zA-Z0-9~!$%\^&amp;*_=+}{\'?]+)*@([a-zA-Z0-9_][\-a-zA-Z0-9_]*(\.[\-a-zA-Z0-9_]+)*\.([cC][oO][mM]))(:[0-9]{1,5})?$"
                      required
                    ></input>
                  ) : (
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email or Mobile Number"
                      id="input-name"
                      autoComplete="new-password"
                      onChange={handleEmailChange}
                      pattern="[\-a-zA-Z0-9~!$%\^&amp;*_=+}{\'?]+(\.[\-a-zA-Z0-9~!$%\^&amp;*_=+}{\'?]+)*@([a-zA-Z0-9_][\-a-zA-Z0-9_]*(\.[\-a-zA-Z0-9_]+)*\.([cC][oO][mM]))(:[0-9]{1,5})?$"
                      required
                    ></input>
                  )}
                </div>
                <div className="input">
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    id="input-pwd"
                    autoComplete="new-password"
                    onChange={handlePasswordChange}
                    required
                  ></input>
                </div>
                {access === "admin" ? null : (
                  <div className="forgot-pwd">
                    <Link>Forget Password?</Link>
                  </div>
                )}

                <div className="lgn-btn">
                  {error && <div id="login-error">{error}</div>}
                  {/* {successMessage && <div id="login-success">{successMessage}</div>} */}

                  <button id="btn-lgn" onClick={() => sumbitLogin(access)}>
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
