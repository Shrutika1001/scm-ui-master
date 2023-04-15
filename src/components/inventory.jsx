import React from "react";
import { NavBar } from "./navBar";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "./inventory.css";
import { useState } from "react";
import writeXlsxFile from 'write-excel-file'
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "product",
    headerName: "Product",
    width: 200,
    editable: true,
  },
  {
    field: "supplier",
    headerName: "Supplier",
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
    width: 110,
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
  { field: "delete", headerName: "Delete", width: 90, valueGetter: () => "⭕️"},
  { field: "edit", headerName: "Edit", width: 90, valueGetter: () => "✏️"},
];


const rowData = [
  {
    id: 1,
    product: "Snow",
    supplier: "Snow",
    category: "Jon",
    price: 100.0,
    availibility: 35,
    required: 1,
    selected: false,
  },
  {
    id: 2,
    product: "Lannister",
    supplier: "Snow",
    price: 100.0,
    category: "Cersei",
    availibility: 42,
    required: 1,
    selected: false,
  },
  {
    id: 3,
    product: "Lannister",
    supplier: "Snow",
    price: 100.0,
    category: "Jaime",
    availibility: 45,
    required: 1,
    selected: false,
  },
  {
    id: 4,
    product: "Stark",
    supplier: "Snow",
    category: "Arya",
    availibility: 16,
    required: 1,
    selected: false,
  },
  {
    id: 5,
    product: "Targaryen",
    supplier: "Snow",
    price: 100.0,
    category: "Daenerys",
    availibility: null,
    required: 1,
    selected: false,
  },
  {
    id: 6,
    product: "Melisandre",
    supplier: "Snow",
    category: null,
    availibility: 150,
    price: 100.0,
    required: 1,
    selected: false,
  },
  {
    id: 7,
    product: "Clifford",
    supplier: "Snow",
    category: "Ferrara",
    availibility: 44,
    price: 100.0,
    required: 1,
    selected: false,
  },
  {
    id: 8,
    product: "Frances",
    supplier: "Snow",
    category: "Rossini",
    availibility: 36,
    price: 100.0,
    required: 1,
    selected: false,
  },
  {
    id: 9,
    product: "Roxie",
    supplier: "Snow",
    category: "Harvey",
    availibility: 65,
    price: 100.0,
    required: 1,
    selected: false,
  },
];
function exportToExcel() {
  let HEADER_ROW = [];
  columns.forEach((col) => {
      if(col.headerName !== 'delete') {
        HEADER_ROW.push({
          value: col.headerName,
          fontWeight: 'bold'
        })
      }
    });
  
  let ROWS = [];
  rowData.forEach((row) => {
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
    fileName: 'inventory.xlsx'
  });
}

export const Inventory = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [rows, setrows] = useState(rowData);
  return (
    <>
      <NavBar />
      <div className="inventoryTable">
      <h2 className="grid">Inventory</h2>
      <button onClick={exportToExcel} className="grid">Export to Excel</button>
        <Box sx={{ height: "100%", width: "100%", backgroundColor: "#b5b3ae" }}>
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
