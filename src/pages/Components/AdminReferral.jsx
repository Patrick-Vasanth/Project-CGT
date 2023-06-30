// import "./Assest/Style.css";
// import NavBar from "./NavBar";
// import Form from "react-bootstrap/Form";
// import { FiSearch } from "react-icons/fi";

// export default function AdminReferral({ navigate }) {
//   const referralCreate = (e) => {
//     e.preventDefault();
//     navigate("/referralcreation");
//   };

//   const viewList = (e) => {
//     e.preventDefault();
//     navigate("/referralfulllist");
//   };

//   const referralInfo = JSON.parse(localStorage.getItem("input1"));
//   return (
//     <>
//       <NavBar />
//       <div className="admin-referral">
//         <div className="main">
//           <div className="referral-title">
//             <h3>Referrals</h3>
//           </div>
//           <div className="create-btn">
//             <div className="container">
//               <div className="buttons">
//                 <div className="btn1">
//                   <button className="button" onClick={referralCreate}>
//                     Create Referral
//                   </button>
//                 </div>
//                 <div className="btn2">
//                   <button className="button" onClick={viewList}>
//                     View full list
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="bodyBar">
//           <h3 className="bodyBarTitle">Referrals List</h3>
//           <Form className="search-input">
//             <Form.Control
//               type="search"
//               placeholder="Referral Search"
//               className=" search"
//             />
//             <FiSearch className="searchIcon" />
//           </Form>
//         </div>
//         <div className="tableData">
//           <table className="table table-striped">
//             <thead className="tableHeading">
//               <tr className="heading">
//                 <th className="head">ID</th>
//                 <th className="head">Name</th>
//                 <th className="head">Contact</th>
//                 <th className="head">Number of Referrals</th>
//               </tr>
//             </thead>
//             <tbody className="tableBody">
//               {/* <tr>
//                 <td className="body">{referralInfo.id}</td>
//                 <td className="body">{referralInfo.fullname}</td>
//                 <td className="body">{referralInfo.mobilenumber} </td>
//                 <td className="body">{referralInfo.id}</td>
//               </tr> */}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }
