import { useState } from "react";
import cgtlogo1 from "../Images/Logo1.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";
import "./Assest/NavBar.css";
import axios from "axios";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function NavBar() {
  // const [logbtn, setLogbtn] = useState(false);

  const [showSidebar, setShowSidebar] = useState(false);
  const [showBars, setShowbars] = useState(true);

  // const location = useLocation();
  // const access = location.state.name;
  // console.log(access);

  const HandleOpen = () => {
    setShowSidebar(true);
    setShowbars(false);
  };
  const HandleClose = () => {
    setShowSidebar(false);
    setShowbars(true);
  };

  // const logOut = (e) => {
  //   e.preventDefault();
  //   console.log("Hai");
  // };

  return (
    <>
      <div className="nav2">
        <div className="logo-nav2">
          <img className="nav2-img" src={cgtlogo1} alt=""></img>
        </div>
        <div className="list-nav2">
          <div className="listItem-nav2">
            <ul>
              <li>
                <Link href="#home" to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#refProfile" to="/referralprofile">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
          <div className="btn-nav2">
            <Link to="/" id="log-btn2">
              Logout
            </Link>
          </div>
          <div className="burger">
            <input type="checkbox" id="check" hidden></input>
            <label
              htmlFor="check"
              className="burger-icon"
              onClick={HandleOpen}
              style={{ display: showBars ? "block" : "none" }}
            >
              <FaBars />
            </label>
          </div>
        </div>
      </div>
      {showSidebar && (
        <div className="dropdwn" id="drop">
          <div className="cls-btn">
            <input type="checkbox" id="close" hidden></input>
            <label htmlFor="close" className="close-icon" onClick={HandleClose}>
              <FaTimes />
            </label>
          </div>
          <div className="listItem-nav2dwn">
            <ul>
              <li>
                <Link href="#home" to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#refProfile" to="/referralprofile">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
          <div className="btn-nav2dwn">
            <Link to="/" id="log-btn2dwn">
              Logout
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
