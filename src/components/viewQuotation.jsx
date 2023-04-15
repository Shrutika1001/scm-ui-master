import React, { useState } from "react";
import { NavBar } from "./navBar";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "./inventory.css";
import writeXlsxFile from "write-excel-file";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const columns = [
  { field: "id", headerName: "Quotation ID", width: 150 },
  { field: "sid", headerName: "Supplier ID", width: 150 },
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
    field: "timeofarrival",
    headerName: "Expected time of Arrival",
    width: 240,
    editable: true,
  },
  {
    field: "createddate",
    headerName: "Created Date",
    width: 250,
    editable: true,
  },
  {
    field: "status",
    headerName: "Quotation Status",
    width: 200,
    editable: true,
  },
  {
    field: "price",
    headerName: "Price Per Unit",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    width: 210,
    /* valueGetter: (params) =>
      `${params.row.category || ""} ${params.row.product || ""}`, */
  },
  { field: "pid", headerName: "Product ID", width: 150 },
  { field: "delete", headerName: "Delete", width: 90, valueGetter: () => "⭕️"},
];

const samplerows = [
  {
    id: 1,
    sid: 1,
    product: "Coal",
    category: "Bituminious",
    availibility: 35,
    pid: "1",
    status: "Confirmed",
  },
  {
    id: 2,
    sid: 1,
    product: "CP coke",
    category: "honeycomb coke",
    price: 100.0,
    availibility: 42,
    pid: "1",
  },
  {
    id: 3,
    sid: 1,
    product: "Pitch",
    category: "Pitch",
    timeofarrival: "4",
    createddate: "2023-3-14 2:21:00",
    status: "Pending",
  },
  {
    id: 4,
    sid: 1,
    product: "Coal",
    category: "Anthracite",
    status: "Pending",
    availibility: 16,
    price: 100.0,
  },
  {
    id: 5,
    sid: 1,
    product: "Pitch",
    category: "pitch",
    availibility: null,
    status: "Pending",
    pid: "1",
  },
  {
    id: 6,
    sid: 1,
    product: "Wire rods",
    category: "Primary aluminium",
    status: "Pending",
    availibility: 150,
    pid: "1",
  },
  {
    id: 7,
    sid: 1,
    product: "Billets",
    category: "Primary aluminium",
    availibility: 44,
    pid: "1",
    selected: false,
  },
  {
    id: 8,
    sid: 1,
    product: "Coal",
    category: "Anthracite",
    status: "Pending",
    availibility: 36,
    price: 100.0,
  },
  {
    id: 9,
    sid: 1,
    product: "Ingots",
    category: "primary aluminium",
    status: "Pending",
    availibility: 65,
    pid: "1"
   },
];

export const ViewQuotations = (props) => {
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
            type: Number,
            value: row.sid,
            width: 20 
          },
          {
            type: String,
            value: row.product,
            width: 20 
          },
          {
            type: String,
            value: row.category,
            width: 20 
          },
          {
            type: Number,
            value: row.timeofarrival,
            width: 20 
          },
          {
            type: Number,
            value: row.availibility,
            width: 20 
          },
          {
            type: String,
            value: row.createddate,
            width: 20 
          },
          {
            type: String,
            value: row.status,
            width: 20 
          },
          {
            type: Number,
            value: row.price,
            width: 20 
          },
          {
            type: Number,
            value: row.pid,
            width: 20 
          },
        ]);
      })  
      const data = [
        HEADER_ROW,
        ...ROWS,
      ];
      console.log('====================================');
      console.log(data);
      console.log('====================================');
      writeXlsxFile(data, {
        fileName: 'quotations.xlsx'
      });
    }

    const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div className="inventoryTable">
        <h2 className="tabletext">View Quotations</h2>
        <button onClick={exportToExcel} className="grid">Export to Excel</button>
        <button onClick={() => navigate("/addquo")} className="grid">Add Quotation</button>
        <button onClick={() => {
        axios.post("http://localhost:8080/send/file", {number: "6398877055", fileName:"quotations.xlsx"});
      }}>Send To WhatsApp</button>
        <Box sx={{ height: "100%", width: "100%" }}>
          <DataGrid
            sx={{ fontSize: 20 }}
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
