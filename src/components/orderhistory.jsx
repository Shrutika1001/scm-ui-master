import React, { useState } from "react";
import { NavBar } from "./navBar";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import './inventory.css';
import writeXlsxFile from "write-excel-file";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "product",
    headerName: "Product",
    width: 200,
    editable: true,
  },
  {
    field: "category",
    headerName: "Category",
    width: 200,
    editable: false,
  },
  {
    field: "required",
    headerName: "Quanitity Required",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 210,
  },
  {
    field: "availibility",
    headerName: "Availibility",
    type: "number",
    width: 110,
    editable: true,
  },
  { field: "delete", headerName: "Delete", width: 90, valueGetter: () => "⭕️"},
];

const samplerows = [
  { id: 1, product: "Coal", category: "Coal", availibility: 35, required: 1, selected: false },
   { id: 2, product: "Pitch", category: "pitch", availibility: 42, required: 1, selected: false },
   { id: 3, product: "Coal", category: "Bitumnius", availibility: 45, required: 1, selected: false },
   { id: 4, product: "Ingots", category: "primary aluminium", availibility: 16, required: 1, selected: false },
   { id: 5, product: "wire rods", category: "Primary aluminum", availibility: null, required: 1, selected: false },
   { id: 6, product: "Billets", category:"Primary aluminium", availibility: 150, required: 1, selected: false },
   { id: 7, product: "chromium", category: "chemical", availibility: 44, required: 1, selected: false },
   { id: 8, product: "Mn Flake", category: "chemical", availibility: 36, required: 1, selected: false },
   { id: 9, product: "Pet Coke", category: "Coke", availibility: 65, required: 1, selected: false },
 ];

export const OrderHistory = (props) => {
  const [rows, setrows] = useState(samplerows);
  
  function exportToExcel() {
    let HEADER_ROW = [];
    columns.forEach((col) => {
        if(col.headerName !== 'delete' && col.headerName !== 'edit') {
          HEADER_ROW.push({
            value: col.headerName,
            fontWeight: 'bold'
          })
        }
      });
      let ROWS = [];
      rows.forEach((row) => {
        ROWS.push([
          {
            type: Number,
            value: row.id,
            width: 20 
          },
          {
            type: String,
            value: row.product,
            width: 20 
          },
          {
            type: String,
            value: row.supplier,
            width: 20 
          },
          {
            type: String,
            value: row.category,
            width: 20 
          },
          {
            type: Number,
            value: row.required,
            width: 20 
          },
          {
            type: Number,
            value: row.availibility,
            width: 20 
          },
          {
            type: Number,
            value: row.price,
            width: 20 
          },
        ]);
      })  
      const data = [
        HEADER_ROW,
        ...ROWS,
      ];
      writeXlsxFile(data, {
        fileName: 'orderHistory.xlsx'
      });
    }
  return (
    <>
      <NavBar />
      <div className="inventoryTable">
      <h2 className="tabletext">Order History</h2>
      <button onClick={exportToExcel} className="grid">Export to Excel</button>
      <input
            type="text"
            class="form-control"
            id="pname"
            placeholder="WhatsApp Number"
          />
      <button onClick={() => {
        console.log();
        axios.post("http://localhost:8080/send/file", {number: document.getElementById("pname").value, fileName:"inventory.xlsx"});
      }}>Send To WhatsApp</button>
      <Box sx={{ height: "100%", width: "100%" }}>
        <DataGrid sx={{fontSize: 20}}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pavailibilitySize: 5,
              },
            },
          }}
          pavailibilitySizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          onCellClick={(cell) => {
              if(cell.field === 'delete') {
                setrows(rows.filter((r) => r.id !== cell.id));
              } if(cell.field === 'edit') {
                // edit page
                // setrows(rows.filter((r) => r.id !== cell.id));
              }
            }}
        />
      </Box>
      </div>
    </>
  );
};
