import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Acasa from './pages/Acasa';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';

import Aplicatie from './pages/Aplicatie';
import Elearning from './pages/Elearning';
import Intranet from './pages/Intranet';
import Mail from './pages/Mail';
import Ticket from './pages/Ticket';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Acasa />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Aplicatie",
    element: <Aplicatie />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Elearning",
    element: <Elearning />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Intranet",
    element: <Intranet />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Mail",
    element: <Mail />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Ticket",
    element: <Ticket />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();