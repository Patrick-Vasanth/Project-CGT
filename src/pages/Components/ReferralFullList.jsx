import "./Assest/Style.css";
import NavBar from "./NavBar";
import Form from "react-bootstrap/Form";
import React from "react";
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
  { id: "name", label: "Name", minWidth: 100, align: "center" },
  {
    id: "contact",
    label: "Contact",
    minWidth: 170,
    align: "center",

    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "noofreferral",
    label: "No Of Referrals",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
];

// const rows = [];

export default function ReferralFullList() {
  const referralCreate = (e) => {
    e.preventDefault();
    navigate("/referralcreation");
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

  const [apiData, setApiData] = useState([]);

  const callApiData = async (e) => {
    const refData = await axios.get(
      "https://6479821ca455e257fa6342c7.mockapi.io/refinfo"
    );
    setApiData(refData.data);
  };

  useEffect(() => {
    callApiData();
  }, []);

  return (
    <>
      <NavBar />
      <div className="admin-referral">
        <div className="bodyBar1">
          <h3 className="bodyBarTitle">Referrals List</h3>
          <div className="content">
            <button className="referral-button" onClick={referralCreate}>
              Create Referral
            </button>
            <Form className="search-input">
              <Form.Control
                type="search"
                placeholder="Referral Search"
                className=" search"
              />

              <FiSearch className="searchIcon" />
            </Form>
          </div>
        </div>
        <div className="tableData">
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 540 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow sx={{ backgroundColor: "lightblue" }}>
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
                  {apiData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((apiData) => {
                      return (
                        <TableRow key={apiData.id} hover role="checkbox">
                          <TableCell align="center" style={{ fontSize: 18 }}>
                            {apiData.id}
                          </TableCell>
                          <TableCell align="center" style={{ fontSize: 18 }}>
                            {apiData.input1.fullname}
                          </TableCell>
                          <TableCell align="center" style={{ fontSize: 18 }}>
                            {apiData.input1.mobilenumber}
                          </TableCell>
                          <TableCell align="center" style={{ fontSize: 18 }}>
                            12
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
              count={apiData.length}
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
