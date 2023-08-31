import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import axios from "axios";

function ListEmployees({setActiveEmployeeId}) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("http://localhost:8081/employee")
      .then((res) => setData(res.data))
      .catch((error) => {
        console.log("Error : " + error);
      })
      .finally(setLoading(false));
  }, [data]);

  return (
    <div orientation="left">
      <Row>
        <Col>
          <h3>List Employees</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            {loading && <div>Yükleniyor...</div>}

            <ul>
              {data.map((e) => {
                return <li key={e.id}onClick={()=>setActiveEmployeeId(e.id)}>
                  <h3 style={{display:"inline"}}>{e.name} {e.surname}  </h3>
                  <span>{e.department}</span>
                </li>;
              })}
            </ul>

            {/* {data.map((e) => (
          <div key={e.name}>
            <b>{e.name}</b>
            <b>{e.surname}</b>
            <div>{e.department}</div>
          </div>
        ))} */}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ListEmployees;
