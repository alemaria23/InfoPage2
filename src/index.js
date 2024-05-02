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


import Home from '../src/Home/Home';
import Contact from '../src/Contact/Contact';
import ErrorPage from '../src/ErrorPage/ErrorPage';

import App from '../src/App';
import Elearning from '../src/Elearning/Elearning';
import Intranet from '../src/Intranet/Intranet';
import Mail from '../src/Mail/Mail';
import Ticket from '../src/Ticket/Ticket';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/App",
    element: <App />,
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