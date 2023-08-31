import React from 'react'
import {Row,Col} from "antd"
function AddEmployee() {
  return (
    <div>
        <h3>Add Employee</h3>
        <Row>
            <Col>
                <input placeholder='Enter name'/>
                <input placeholder='Enter surname'/>
                <input placeholder='Enter e-mail'/>
                <input placeholder='Enter salary'/>
                <input placeholder='Enter departmant'/>
            </Col>
        </Row>
    </div>
  )
}

export default AddEmployee