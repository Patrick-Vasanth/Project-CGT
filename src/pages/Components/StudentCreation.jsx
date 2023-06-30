import React from "react";
import NavBar from "./NavBar";
import "./Assest/StyleLogin.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";

import axios from "axios";

// function setStoragevalues() {
//   const storeVal = localStorage.setItem("input");
//   if (!storeVal)
//     return {
//       fullname: "",
//       mobilenumber: "",
//       emailaddress: "",
//       referralname: "",
//       passedoutyear: "",
//       collegename: "",
//       course: "",
//       startdate: "",
//       endddate: "",
//       imageUpload: "",
//       amount: "",
//     };
//   return JSON.parse(storeVal);
// }

export default function StudentCreation() {
  const [input, setInput] = useState({
    fullname: "",
    mobilenumber: "",
    email: "",
    yearofpassedout: "",
    collegename: "",
    amount: "",
    referralname: "",
    course: "",
    startdate: "",
    enddate: "",
    profilePicture: null,
  });

  const navigate = useNavigate();

  const [refList, setRefList] = useState([
    {
      id: 1,
      name: "Tamizh",
    },
    {
      id: 2,
      name: "Karthik",
    },
    {
      id: 3,
      name: "Patrick",
    },
  ]);

  const [courseList, setCourseList] = useState([
    {
      id: 1,
      course: "Front End Dvelopement",
    },
    {
      id: 2,
      course: "Testing",
    },
    {
      id: 3,
      course: "Aws",
    },
    {
      id: 4,
      course: "UI&UX design",
    },
    {
      id: 5,
      course: "Python",
    },
  ]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    // handleStartDateChange({ [e.target.startdate]: e.target.value });
  };

  // const [input, setInput] = useState(setStoragevalues);

  // const handleChange = (e) => {
  //   setInput({ ...input, [e.target.name]: e.target.value });
  // };

  //For DropDown Selected value to store in local storage

  // const [selectedValue, setSelectedValue] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("selectedValue", selectedValue);
  // }, [selectedValue]);

  //For End Date Automatically Changes to 3 months
  const [startDate, setStartDate] = useState([]);
  const [endDate, setEndDate] = useState([]);

  const handleStartDateChange = (e) => {
    const selectedStartDate = new Date(e.target.value);
    const selectedEndDate = new Date(selectedStartDate);
    selectedEndDate.setMonth(selectedStartDate.getMonth() + 3);
    const sDate = e.target.value;
    setStartDate(sDate);
    const eDate = selectedEndDate.toISOString().substr(0, 10);
    setEndDate(eDate);
    setInput({ ...input, startdate: sDate, enddate: eDate });
  };

  //for Image upload
  const [image, setImage] = useState(null);
  const [label, setLabel] = useState("Upload Image");

  //Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    localStorage.setItem("input", JSON.stringify(input));
    e.target.reset();
    setEndDate("");
    setImage(null);
    navigate("/adminstudent");
    await axios.post("https://6479821ca455e257fa6342c7.mockapi.io/studinfo", {
      input,
    });

    // const input1 = document.getElementById("img");

    // input1.addEventListener("change", (event) => {
    //   const images = event.target.files;

    //   for (const image of images) {
    //     const reader = new FileReader();

    //     reader.readAsDataURL(image);

    //     reader.addEventListener("load", () => {
    //       const imagesArray = localStorage.getItem("images");
    //       let images = [];

    //       if (imagesArray) {
    //         images = [...JSON.parse(imagesArray)];
    //         images.push(reader.result);
    //       } else {
    //         images.push(reader.result);
    //       }

    //       localStorage.setItem("images", JSON.stringify(images));
    //     });
    //   }
    // });
  };

  const [userImage, setUserImage] = useState();

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setLabel("Image Uploaded");
    let file = e.target.files[0];
    let base64Img = "";
    let reader = new FileReader();
    reader.addEventListener("load", function (evt) {
      base64Img = evt.target.result;
      setInput({ ...input, profilePicture: base64Img });
    });
    reader.readAsDataURL(file);

    // console.log(img);
    setUserImage(file);
  };

  return (
    <>
      <div className="main">
        <NavBar />
        {/* Form */}

        <div className="cd">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="frm">
                <h3>Student Profile</h3>

                <div className="cd-main">
                  {/*frst half */}
                  <div className="cd-one">
                    <div>
                      <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        placeholder="Fullname"
                        required
                        onChange={handleChange}
                      ></input>
                    </div>
                    <div>
                      <input
                        type="tele"
                        id="number"
                        name="mobilenumber"
                        placeholder="Mobile Number"
                        pattern="[6789][0-9]{9}"
                        required
                        onChange={handleChange}
                      ></input>
                    </div>
                    <div>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email Address"
                        pattern="[\-a-zA-Z0-9~!$%\^&amp;*_=+}{\'?]+(\.[\-a-zA-Z0-9~!$%\^&amp;*_=+}{\'?]+)*@([a-zA-Z0-9_][\-a-zA-Z0-9_]*(\.[\-a-zA-Z0-9_]+)*\.([cC][oO][mM]))(:[0-9]{1,5})?$"
                        required
                        onChange={handleChange}
                      ></input>
                    </div>
                    <div>
                      <select
                        id="referralName"
                        name="referralname"
                        // value={selectedOption}
                        // onChange={handleInputChange}
                        className="referal"
                        required
                        onChange={handleChange}
                        // value={selectedValue}
                        // onChange={(e) => setSelectedValue(e.target.value)}
                      >
                        <option value="Referral name">Referral name</option>
                        {refList.map((data, index) => (
                          <option key={index.id} value={index.name}>
                            {data.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <input
                        type="number"
                        id="passedout"
                        name="yearofpassedout"
                        placeholder="Year of  Passed Out"
                        required
                        onChange={handleChange}
                      ></input>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="collegename"
                        id="colname"
                        placeholder="College Name"
                        required
                        onChange={handleChange}
                      ></input>
                    </div>
                  </div>

                  {/*second half */}
                  <div className="cd-two">
                    <div>
                      <select
                        id="courseName"
                        name="course"
                        className="crs-name"
                        // value={selectedOption}
                        // onChange={handleInputChange}
                        required
                        onChange={handleChange}
                      >
                        <option value="Course">Course</option>
                        {courseList.map((courseData, index1) => (
                          <option key={index1} value={courseData.name}>
                            {courseData.course}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        id="strt"
                        htmlFor="startdate"
                        className="text-muted"
                        name="startdate"
                      >
                        Start date
                      </label>
                      <input
                        type="date"
                        id="startdate"
                        placeholder="Start date"
                        value={input.startDate}
                        onChange={handleStartDateChange}
                        required
                      />
                    </div>
                    <div>
                      <label id="end" className="text-muted">
                        End date
                      </label>
                      <input
                        type="date"
                        id="enddate"
                        name="enddate"
                        placeholder="End date"
                        value={endDate}
                        readOnly
                        disabled
                        // onChange={handleChange}
                      />
                    </div>
                    <div className="file">
                      {image === "" || image === null ? (
                        <label htmlFor="img" id="img-icon">
                          <FaCloudUploadAlt />
                        </label>
                      ) : (
                        <img id="img-small" src={image} required alt="" />
                      )}
                      <label id="img-lbl" htmlFor="img">
                        {label}
                      </label>
                      <input
                        id="img"
                        type="file"
                        // name="imageUpload"
                        onChange={handleImageChange}
                        accept="image/*"
                        hidden
                        required
                      ></input>
                    </div>
                    <div>
                      <input
                        type="text"
                        id="amount"
                        placeholder="Amount Paid"
                        required
                        name="amount"
                        onChange={handleChange}
                      ></input>
                    </div>
                  </div>
                </div>
                {/* button */}
                <div className="sub-btn">
                  <button id="btn-sub">Create Profile</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
