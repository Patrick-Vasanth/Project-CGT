// import "./Assest/Style.css";
// import NavBar from "./NavBar";
// import Form from "react-bootstrap/Form";
// import { FiSearch } from "react-icons/fi";

// export default function AdminStudent({ navigate }, props) {
//   const createStudent = (e) => {
//     e.preventDefault();
//     navigate("/studentcreation");
//   };

//   const viewStudentList = (e) => {
//     e.preventDefault();
//     navigate("/studentfulllist");
//   };
//   const userInfo = JSON.parse(localStorage.getItem("input"));
//   console.log(userInfo);

//   return (
//     <>
//       <NavBar />
//       <div className="admin-referral">
//         <div className="main">
//           <div className="student-title">
//             <h3>Students</h3>
//           </div>
//           <div className="create-btn">
//             <div className="container">
//               <div className="buttons">
//                 <div className="btn1">
//                   <button className="button" onClick={createStudent}>
//                     Create Student
//                   </button>
//                 </div>
//                 <div className="btn2">
//                   <button className="button" onClick={viewStudentList}>
//                     View full list
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="bodyBar">
//           <h3 className="bodyBarTitle">Students List</h3>
//           <Form className="search-input">
//             <Form.Control
//               type="search"
//               placeholder="Referral Search"
//               className=" search"
//             />
//             <FiSearch className="searchIcon" />
//           </Form>
//         </div>
//         <div className="studentTableData">
//           <table className="studentTable table-striped">
//             <thead className="studentTableHeading">
//               <tr className="studentHeading">
//                 <th className="studentHead">ID</th>
//                 <th className="studentHead">Student Name</th>
//                 <th className="studentHead">Course</th>
//                 <th className="studentHead">Referral Name</th>
//                 <th className="studentHead">Amount Pending</th>
//               </tr>
//             </thead>
//             <tbody className="tableBody">
//               {/* {props.input.map((studentInformation, index2) => (
//                 <tr key={index2}>
//                   <td className="student-body">{studentInformation.id}</td>
//                   <td className="student-body">
//                     {studentInformation.fullname}
//                   </td>
//                   <td className="student-body">{studentInformation.course}</td>
//                   <td className="student-body">
//                     {studentInformation.referralname}
//                   </td>
//                   <td className="student-body">{studentInformation.amount}</td>
//                 </tr>
//               ))} */}
//               {/* <tr>
//                 <td className="student-body">{userInfo.id}</td>
//                 <td className="student-body">{userInfo.fullname}</td>
//                 <td className="student-body">{userInfo.course}</td>
//                 <td className="student-body">{userInfo.referralname}</td>
//                 <td className="student-body">{userInfo.amount}</td>
//               </tr> */}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }
