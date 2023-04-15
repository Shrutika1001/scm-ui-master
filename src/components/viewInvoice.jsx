import React from "react";
import { NavBar } from "./navBar";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import './inventory.css';

const columns = [
  { field: "id", headerName: "Invoice ID", width: 120 },
  { field: "oid", headerName: "Order ID", width: 100 },
  {
    field: "dop",
    headerName: "Date of Payment",
    width: 250,
    editable: true,
  },
  {
    field: "mop",
    headerName: "Mode of Payment",
    width: 200,
    editable: true,
  },
  {
    field: "amtdue",
    headerName: "Amount Due",
    width: 200,
    editable: true,
  },
  {
    field: "amtpaid",
    headerName: "Amount Paid",
    width: 200,
    editable: true,
  },
  {
    field: "sid",
    headerName: "Supplier ID",
    width: 200,
    editable: true,
  },
  
];

const rows = [
  { id: 1, oid: 1, sid: 1, dop: "2023-3-14", mop: "Cash", amtdue: "40000.00", amtpaid: "60000.00", product: "Snow", category: "Jon", availibility: 35, required: 1, selected: false },
  { id: 2, oid: 1, sid: 1, dop: "2023-3-14", mop: "Cash", amtdue: "40000.00", amtpaid: "60000.00", product: "Lannister", category: "Cersei", availibility: 42, required: 1, selected: false },
  { id: 3, oid: 1, sid: 1, dop: "2023-3-14", mop: "Cash", amtdue: "40000.00", amtpaid: "60000.00", product: "Lannister", category: "Jaime", availibility: 45, required: 1, selected: false },
  { id: 4, oid: 1, sid: 1, dop: "2023-3-14", mop: "Cash", amtdue: "40000.00", amtpaid: "60000.00", product: "Stark", category: "Arya", availibility: 16, required: 1, selected: false },
  { id: 5, oid: 1, sid: 1, dop: "2023-3-14", mop: "Cash", amtdue: "40000.00", amtpaid: "60000.00", product: "Targaryen", category: "Daenerys", availibility: null, required: 1, selected: false },
  { id: 6, oid: 1, sid: 1, dop: "2023-3-14", mop: "Cash", amtdue: "40000.00", amtpaid: "60000.00", product: "Melisandre", category: null, availibility: 150, required: 1, selected: false },
  { id: 7, oid: 1, sid: 1, dop: "2023-3-14", mop: "Cash", amtdue: "40000.00", amtpaid: "60000.00", product: "Clifford", category: "Ferrara", availibility: 44, required: 1, selected: false },
  { id: 8, oid: 1, sid: 1, dop: "2023-3-14", mop: "Cash", amtdue: "40000.00", amtpaid: "60000.00", product: "Frances", category: "Rossini", availibility: 36, required: 1, selected: false },
  { id: 9, oid: 1, sid: 1, dop: "2023-3-14", mop: "Cash", amtdue: "40000.00", amtpaid: "60000.00", product: "Roxie", category: "Harvey", availibility: 65, required: 1, selected: false },
];

export const ViewInvoice = (props) => {
  return (
    <>
      <NavBar />
      <div className="inventoryTable">
      <h2 className="tabletext">View Invoice</h2>
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
