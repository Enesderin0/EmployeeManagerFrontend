import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

function ListEmployees({setActiveEmployeeId}) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("http://localhost:8081/employees")
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
                return <li key={e.id}>
                  <Link to={`${e.id}`} state={e} style={{display:"inline"}}>{e.name} {e.surname}  </Link>
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
