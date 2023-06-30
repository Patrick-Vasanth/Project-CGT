import "./Assest/Profile.css";
import ReferralNavBar from "./ReferralNavBar";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";

const columns = [
  { id: "id", label: "ID", minWidth: 170, align: "center" },
  {
    id: "nameofstudent",
    label: "Name of Student",
    minWidth: 100,
    align: "center",
  },
  {
    id: "course",
    label: "Course",
    minWidth: 170,
    align: "center",

    format: (value) => value.toLocaleString("en-US"),
  },
];

const rows = [];

export default function ReferralProfile() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <ReferralNavBar />
      <div className="main-content">
        <div className="container">
          <div className="cards">
            <div className="row row1">
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
                <div className="referral-card3 ">
                  <div className="title-card4">
                    <div className="title1">
                      <h5>Course Progress </h5>
                    </div>
                    <div className="referral-cards3 referral-progress">
                      <div className="referral-details1">
                        <div className="details-label2">
                          <div>Number of Referrals &nbsp;:&nbsp; 12</div>
                          <div>No. of Active Referrals &nbsp;:&nbsp; 8</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-7 referral-table">
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
                                backgroundColor: "#ffffff",
                                color: "#2b2b2b",
                                borderTop: "2px solid #2b2b2b",
                                borderBottom: "2px solid #2b2b2b",
                              }}
                            >
                              {column.label}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.code}
                              >
                                {columns.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      {column.format &&
                                      typeof value === "number"
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </Paper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
