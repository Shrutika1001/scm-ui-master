import React from "react";
import { NavBar } from "./navBar";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "./inventory.css";

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
];

const rows = [
  {
    id: 1,
    sid: 1,
    product: "Snow",
    category: "Jon",
    availibility: 35,
    pid: "1",
    status: "Confirmed",
    price: 100.0,
    selected: false,
    timeofarrival: "4",
    createddate: "2023-3-14 2:21:00",
  },
  {
    id: 2,
    sid: 1,
    product: "Lannister",
    category: "Cersei",
    price: 100.0,
    availibility: 42,
    pid: "1",
    timeofarrival: "4",
    createddate: "2023-3-14 2:21:00",
    status: "Confirmed",
    selected: false,
  },
  {
    id: 3,
    sid: 1,
    product: "Lannister",
    category: "Jaime",
    timeofarrival: "4",
    createddate: "2023-3-14 2:21:00",
    status: "Pending",
    price: 100.0,
    availibility: 45,
    pid: "1",
    selected: false,
  },
  {
    id: 4,
    sid: 1,
    product: "Stark",
    category: "Arya",
    status: "Pending",
    availibility: 16,
    price: 100.0,
    pid: "1",
    selected: false,
    timeofarrival: "4",
    createddate: "2023-3-14 2:21:00",
  },
  {
    id: 5,
    sid: 1,
    product: "Targaryen",
    category: "Daenerys",
    availibility: null,
    status: "Pending",
    pid: "1",
    price: 100.0,
    selected: false,
    timeofarrival: "4",
    createddate: "2023-3-14 2:21:00",
  },
  {
    id: 6,
    sid: 1,
    product: "Melisandre",
    category: null,
    status: "Pending",
    availibility: 150,
    pid: "1",
    price: 100.0,
    selected: false,
    timeofarrival: "4",
    createddate: "2023-3-14 2:21:00",
  },
  {
    id: 7,
    sid: 1,
    product: "Clifford",
    category: "Ferrara",
    availibility: 44,
    pid: "1",
    selected: false,
    price: 100.0,
    status: "Pending",
    timeofarrival: "4",
    createddate: "2023-3-14 2:21:00",
  },
  {
    id: 8,
    sid: 1,
    product: "Frances",
    category: "Rossini",
    status: "Pending",
    availibility: 36,
    price: 100.0,
    pid: "1",
    selected: false,
    timeofarrival: "4",
    createddate: "2023-3-14 2:21:00",
  },
  {
    id: 9,
    sid: 1,
    product: "Roxie",
    category: "Harvey",
    status: "Pending",
    availibility: 65,
    pid: "1",
    price: 100.0,
    selected: false,
    timeofarrival: "4",
    createddate: "2023-3-14 2:21:00",
  },
];

export const ViewQuotations = (props) => {
  return (
    <>
      <NavBar />
      <div className="inventoryTable">
        <h2 className="tabletext">View Quotations</h2>
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
          />
        </Box>
      </div>
    </>
  );
};
