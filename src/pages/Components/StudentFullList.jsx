import "./Assest/Style.css";
import React from "react";
import NavBar from "./NavBar";
import Form from "react-bootstrap/Form";
import { FiSearch } from "react-icons/fi";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const columns = [
  { id: "id", label: "ID", minWidth: 170, align: "center" },
  { id: "stdname", label: "Student Name", minWidth: 100, align: "center" },
  {
    id: "course",
    label: "Course",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "refname",
    label: "Referral Name",
    minWidth: 170,
    align: "center",

    format: (value) => value.toLocaleString("en-US"),
  },

  {
    id: "amtpending",
    label: "Amount Pending",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
];

export default function StudentFullList(props) {
  const createStudent = (e) => {
    e.preventDefault();
    navigate("/studentcreation");
  };

  const navigate = useNavigate();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [apiStudData, setApiStudData] = useState([]);

  const callApiData = async (e) => {
    const studData = await axios.get(
      "https://6479821ca455e257fa6342c7.mockapi.io/studinfo"
    );
    setApiStudData(studData.data);
  };

  useEffect(() => {
    callApiData();
  }, []);

  return (
    <>
      <NavBar />
      <div className="admin-referral">
        <div className="bodyBar1">
          <h3 className="bodyBarTitle">Students List</h3>
          <div className="content">
            <button className="student-button" onClick={createStudent}>
              Create Student
            </button>
            <Form className="search-input">
              <Form.Control
                type="search"
                placeholder="Student Search"
                className=" search"
              />
              <FiSearch className="searchIcon" />
            </Form>
          </div>
        </div>
        <div className="studentTableData">
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 540 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          minWidth: column.minWidth,
                          backgroundColor: "#1f4068",
                          color: "#ffffff",
                        }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {apiStudData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((apiStudData) => {
                      return (
                        <TableRow
                          key={apiStudData.id}
                          hover
                          role="checkbox"
                          sx={
                            {
                              // backgroundColor: "#11243A",
                              // color: "#2b2b2b",
                            }
                          }
                        >
                          <TableCell
                            align="center"
                            style={{ fontSize: 18, color: "#2b2b2b" }}
                          >
                            {apiStudData.id}
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ fontSize: 18, color: "#2b2b2b" }}
                          >
                            {apiStudData.input.fullname}
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ fontSize: 18, color: "#2b2b2b" }}
                          >
                            {apiStudData.input.course}
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ fontSize: 18, color: "#2b2b2b" }}
                          >
                            {apiStudData.input.referralname}
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ fontSize: 18, color: "#2b2b2b" }}
                          >
                            {apiStudData.input.amount}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={apiStudData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </div>
    </>
  );
}
