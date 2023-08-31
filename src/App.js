// import axios from "axios";
import "./App.css";

import React, { useState } from "react";
import EmployeeDetail from "./components/EmployeeDetail";
import Header from "./components/Header";
import AddEmployee from "./components/AddEmployee";
import ListEmployees from "./components/ListEmployees";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [activeEmployeeId, setActiveEmployeeId] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Header />} />
        <Route
          path="employees"
          element={<ListEmployees setActiveEmployeeId={setActiveEmployeeId} />}
        />
        <Route
          path="employee"
          element={<EmployeeDetail activeEmployeeId={activeEmployeeId} />}
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
