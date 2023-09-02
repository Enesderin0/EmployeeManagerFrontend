import React from "react";
import { Formik, Field, Form } from "formik";
import Schema from "../config/Validation";


function AddEmployee() {
  return (
    <div>
      <h3>Add Employee</h3>
      <div>
        <Formik
          initialValues={{
            name: "",
            surname: "",
            email: "",
            salary: Number(),
            department: ""
          }}
          validationSchema={Schema}
          onSubmit={async (values,bag) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
            bag.resetForm();
          }}
        >
         {({isSubmitting,errors,touched})=>(
           <Form className="form">
           <label htmlFor="name">First Name</label>
           <Field id="name" name="name" placeholder="Jane"/>
           
            {errors.name && touched.name?(
              <div>{errors.name}</div>
            ):null}

           <label htmlFor="surname">Last Name</label>
           <Field id="surname" name="surname" placeholder="Doe" />
             {errors.surname && touched.surname?(
              <div>{errors.surname}</div>
            ):null}

           <label htmlFor="email">Email</label>
           <Field
             id="email"
             name="email"
             placeholder="jane@acme.com"
             type="email"
           />
             {errors.email && touched.email?(
              <div>{errors.email}</div>
            ):null}

           <label htmlFor="salary">Salary</label>
           <Field
             id="salary"
             name="salary"
             placeholder="15000.0"
             type="number"
           />
             {errors.salary && touched.salary?(
              <div>{errors.salary}</div>
            ):null}

           <label htmlFor="department">Department</label>
           <Field id="department" name="department" placeholder="Software" /><br/>
            {errors.department && touched.department?(
              <div>{errors.department}</div>
            ):null}

           <button disabled={isSubmitting} type="submit">Submit</button>
         </Form>
         )}
        </Formik>
      </div>
    </div>
  );
}

export default AddEmployee;
