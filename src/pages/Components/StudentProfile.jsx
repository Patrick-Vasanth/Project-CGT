import "./Assest/Profile.css";
import Prof from "../Images/user.png";
import NavBar from "./NavBar";
import React, { useState } from "react";

export default function StudentProfile(props) {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const onToggle = () => setIsToggleOn(!isToggleOn);

  const [textState, setTextState] = useState("Not Placed");
  const toggleText = () =>
    setTextState((state) => (state === "Not Placed" ? "Placed" : "Not Placed"));

  const userInfo2 = JSON.parse(localStorage.getItem("input"));
  console.log(userInfo2);

  return (
    <>
      <div className="navBar">
        <NavBar />
      </div>
      <div className="main-content">
        <div className="container">
          <div className="cards">
            <div className="row row1">
              <div className="col-7 student">
                <div className="title-card">
                  <div className="title">
                    <h5>{userInfo2.fullname}</h5>
                  </div>
                  <div className="student-card">
                    <div id="profile-img">
                      <img src={Prof} alt="profile" id="img"></img>
                    </div>
                    <div className="student-details">
                      <div className="details-label">
                        <div>Course &nbsp;:&nbsp; Front End Developement</div>
                        <div>Email &nbsp;:&nbsp; Qwerty@gmail.com</div>
                        <div>Contact Number &nbsp;:&nbsp; 7894561234</div>
                        <div>Year of Passed Out &nbsp;:&nbsp; 2021</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-5 referral">
                <div className="referral-card ">
                  <div className="title-card1">
                    <div className="title1">
                      <h5>Referral Details</h5>
                    </div>
                    <div className="referral-cards1">
                      <div className="referral-details">
                        <div className="details-label1">
                          <div>Referral Name &nbsp;:&nbsp; John</div>
                          <div>Contact Number &nbsp;:&nbsp; 7894561237</div>
                          <div>Company Name &nbsp;:&nbsp; TCS</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row2">
              <div className="col-7 referral1">
                <div className="title-card2">
                  <div className="title1">
                    <h5>Fees and Course Details</h5>
                  </div>
                  <div className="referral-cards2">
                    <div className="details-label1">
                      <div>Fee Paid &nbsp;:&nbsp; 10000</div>
                      <div>Balance Fees &nbsp;:&nbsp; 30000</div>
                      <div>Date of Joining &nbsp;:&nbsp; 23/04/2023</div>
                      <div>End Date &nbsp;:&nbsp; 23/07/2023</div>
                      <div className="radioBtn">
                        Referral Eligibility &nbsp;:
                        <label>
                          <input
                            type="radio"
                            value="Yes"
                            className="radioBtnYes"
                            checked={isToggleOn}
                            onChange={() => setIsToggleOn(true)}
                          />
                          Yes
                        </label>
                        <label>
                          <input
                            type="radio"
                            value="No"
                            className="radioBtnNo"
                            checked={!isToggleOn}
                            onChange={() => setIsToggleOn(false)}
                          />
                          No
                        </label>
                        <label className="toggle-switch">
                          <input
                            type="checkbox"
                            checked={isToggleOn}
                            onChange={onToggle}
                          />

                          <span className="switch" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-5 referral2">
                <div className="referral-card3 ">
                  <div className="title-card3">
                    <div className="title1">
                      <h5>Course Progress </h5>
                    </div>
                    <div className="referral-cards3">
                      <div className="referral-details1">
                        <div className="details-label2">
                          <div>Current Topics &nbsp;:&nbsp; JavaScript</div>
                          <div className="checkList">
                            <div>Progress </div>

                            <div className="clickable">
                              <div>
                                <input
                                  type="checkbox"
                                  id="Html"
                                  name="Html"
                                  value="Html"
                                ></input>
                                &nbsp; HTML
                              </div>
                              <div>
                                <input
                                  type="checkbox"
                                  name="Css"
                                  id="Css"
                                  value="Css"
                                ></input>
                                &nbsp; CSS
                              </div>
                              <div>
                                <input
                                  type="checkbox"
                                  name="Javascript"
                                  id="Javascript"
                                  value="Javascript"
                                ></input>
                                &nbsp; JAVASCRIPT
                              </div>
                              <div>
                                <input
                                  type="checkbox"
                                  name="React"
                                  id="React"
                                  value="React"
                                ></input>
                                &nbsp; REACT
                              </div>
                            </div>
                          </div>
                          <div className="toggle">
                            Placed &nbsp;:&nbsp;
                            <label className="toggle-switch">
                              <input type="checkbox" onChange={toggleText} />
                              <span className="switch" />
                            </label>
                            <div className="place-text">
                              <h6>{textState}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
