import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

function EmployeeDetail() {
  const { id } = useParams();
  const location=useLocation();
  const [employee, setEmployee] = useState([location.state]);

  useEffect(() => {

    if(!employee?.id){
      axios(`http://localhost:8081/employees/${id}`)
      .then((res) => setEmployee(res.data))
      .catch((error) => console.log(error));
    }
  }, [id,employee]);
  console.log(location.state)

  return (
    <div>
      <h3>Employee Details</h3>

      <div>{employee.name}</div>
      <div>{employee.surname}</div>
      <div>{employee.price}</div>
      <div>{employee.department}</div>
      {/* <Link to={`/employees/${Number(id)+1}`}> bir sonraki </Link> */}
    </div>
  );
}

export default EmployeeDetail;
