import React from "react";
import { NavBar } from "./navBar";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import './inventory.css';

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
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 210,
    valueGetter: (params) =>
      `${params.row.category || ""} ${params.row.product || ""}`,
  },
];

const rows = [
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

export const OrderHistory = (props) => {
  return (
    <>
      <NavBar />
      <div className="inventoryTable">
      <h2 className="tabletext">Order History</h2>
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
        />
      </Box>
      </div>
    </>
  );
};
