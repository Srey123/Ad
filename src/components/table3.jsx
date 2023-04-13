import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import './table3.css';

function createData(Product, Problem,Reciever,contact) {
  return { Product, Problem, Reciever, contact };
}

const rows = [
  createData("T-shirt", "Problem1", "Printila", "0088456891"),
  createData("Track-suit ","Problem2" , "Printila", "0088456891"),
  createData("Shirt", "Problem3", "Printila", "0088456891"),
  createData("Flags", "Problem4", "Printila", "0088456891"),
];





export default function BasicTable() {
  return (
      <div className="Table">
      <h3>Latest Queries</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029",backgroundColor:"#FFE7C7", }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="left">Problem</TableCell>
                <TableCell align="left">Reciever</TableCell>
                <TableCell align="left">Contact</TableCell>
                <TableCell align="left">View</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.Product}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.Product}
                  </TableCell>
                  <TableCell align="left">{row.Problem}</TableCell>
                  <TableCell align="left">{row.Reciever}</TableCell>
                  <TableCell align="left">
                    <span className="status">{row.contact}</span>
                  </TableCell>
                  <TableCell align="left" className="Details"><a href="#" style={{textDecoration:"none"}}><span style={{color:"Black"}}>See more</span></a></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
