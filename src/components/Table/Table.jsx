import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import { grey } from "@mui/material/colors";

function createData(Product, name,location,contact) {
  return { Product, name, location, contact };
}

const rows = [
  
  createData("T-shirt", "Sahil", "Bhopal", "0088456891"),
  createData("Track-suit ","Ayush" , "Uttar pradesh", "0088456891"),
  createData("Shirt", "Manohar", "Hyderabad", "0088456891"),
  createData("Flags", "Pratham", "Rajasthan", "0088456891"),
];






export default function BasicTable() {
  return (
      <div className="Table">
      <h3>Latest sellers</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029",backgroundColor:"#CAF1DE" }}
        >
          <Table sx={{ minWidth:1000 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Location</TableCell>
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
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.location}</TableCell>
                  <TableCell align="left">
                    <span className="status">{row.contact}</span>
                  </TableCell>
                  <TableCell align="left" className="Details"><a href="#" style={{textDecoration:"none"}}><span style={{color:"black"}}>See more</span></a></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
