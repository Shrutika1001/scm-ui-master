import React, { useState } from "react";
import { NavBar } from "./navBar";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import './inventory.css';
import writeXlsxFile from "write-excel-file";
import { useNavigate } from "react-router-dom";

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
  { field: "delete", headerName: "Delete", width: 90, valueGetter: () => "⭕️"},
  { field: "edit", headerName: "Edit", width: 90, valueGetter: () => "✏️"},
];

const samplerows = [
  { id: 1, product: "Snow", category: "Jon", availibility: 35, required: 1, selected: false },
  { id: 2, product: "Lannister", category: "Cersei", availibility: 42, required: 1, selected: false },
  { id: 3, product: "Lannister", category: "Jaime", availibility: 45, required: 1, selected: false },
  { id: 4, product: "Stark", category: "Arya", availibility: 16, required: 1, selected: false },
  { id: 5, product: "Targaryen", category: "Daenerys", availibility: null, required: 1, selected: false },
  { id: 6, product: "Melisandre", category: null, availibility: 150, required: 1, selected: false },
  { id: 7, product: "Clifford", category: "Ferrara", availibility: 44, required: 1, selected: false },
  { id: 8, product: "Frances", category: "Rossini", availibility: 36, required: 1, selected: false },
  { id: 9, product: "Roxie", category: "Harvey", availibility: 65, required: 1, selected: false },
];

export const ViewRequirement = (props) => {
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
            value: row.category
          },
          {
            type: Number,
            value: row.required,
            width: 20 
          },
        ]);
      })  
      const data = [
        HEADER_ROW,
        ...ROWS,
      ];
      writeXlsxFile(data, {
        fileName: 'requirement.xlsx'
      });
    }
    const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div className="inventoryTable">
      <h2 className="tabletext">Create Requirement</h2>
      <button onClick={exportToExcel} className="grid">Export to Excel</button>
      <button onClick={() => navigate("/addreq")} className="grid">Add Requirement</button>
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
