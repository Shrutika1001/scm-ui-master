import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound } from './components/notfound';
import { Inventory } from './components/inventory';
import { OrderHistory } from './components/orderhistory';
import { ViewQuotations } from './components/viewQuotation';
import { ViewInvoice } from './components/viewInvoice';
import { ViewRequirement } from './components/viewRequirement';
import { Login } from './components/login';
import { AddProduct } from './components/addProduct';
import { AddRequirement } from './components/addRequirement';
import { AddQuotation } from './components/addQuotation';
import { AddInvoice } from './components/addInvoice';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/addproduct",
    element: <AddProduct />,
  },
  {
    path: "/addreq",
    element: <AddRequirement />,
  },
  {
    path: "/addinvoice",
    element: <AddInvoice />,
  },
  {
    path: "/addquo",
    element: <AddQuotation />,
  },
  {
    path: "/inventory",
    // element: <Inventory />,
    element: <Inventory />,
  },
  {
    path: "/login",
    // element: <Inventory />,
    element: <Login />,
  },
  {
    path: "/orderHistory",
    element: <OrderHistory />,
  },
  {
    path: "/quotations",
    element: <ViewQuotations />,
  },
  {
    path: "/invoices",
    element: <ViewInvoice />,
  },
  {
    path: "/requirement",
    element: <ViewRequirement />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
