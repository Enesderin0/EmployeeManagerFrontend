// import axios from "axios";
import "./App.css";

import React from "react";
import EmployeeDetail from "./components/EmployeeDetail";
import Header from "./components/Header";
import AddEmployee from "./components/AddEmployee";
import ListEmployees from "./components/ListEmployees";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Header />} />
        <Route
          path="employees"
          element={<ListEmployees/>}
        />
        <Route
          path='employees/:id'
          element={<EmployeeDetail/>}
        />
        <Route path="add-employee" element={<AddEmployee />} />
      </Routes>
      {
        //>
      }
    </BrowserRouter>
  );
}

export default App;
