import * as Yup from "yup";
const Schema=Yup.object().shape({
  name: Yup.string().required(),
  surname: Yup.string().required(),
  email: Yup.string().email().required(),
  salary: Yup.number().min(11400.0).required(),
  department: Yup.string().required(),
});

export default Schema;

