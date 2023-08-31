import React from "react";
import { Link } from "react-router-dom";

function Header() {
 

  return (
    <div>
      <h1>Employee Manager System</h1>
      <ul>
        <li><Link to={"/employees"}>List Employee</Link></li>
        <li><Link to={"/add-employee"}>Add Employee</Link></li>
      </ul>
    </div>
  );
}

export default Header;
