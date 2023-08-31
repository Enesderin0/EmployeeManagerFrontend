import React, { useEffect, useState } from "react";
import axios from "axios";
function EmployeeDetail({ activeEmployeeId }) {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios(`http://localhost:8081/employee/${activeEmployeeId}`)
      .then((res) => setEmployee(res.data))
      .catch((error) => console.log(error));
  }, [activeEmployeeId]);

  return (
    <div>
      <h3>Employee Details</h3>
      {activeEmployeeId && (
        <>
          <div>{employee.name}</div>
          <div>{employee.surname}</div>
          <div>{employee.price}</div>
          <div>{employee.department}</div>
        </>
      )}
    </div>
  );
}

export default EmployeeDetail;
