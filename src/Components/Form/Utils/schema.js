import * as Yup from "yup";

const schema = Yup.object().shape({
  firstName: Yup.string("First Name must be a String").required(
    "First Name is Required"
  ),
  lastName: Yup.string("Last Name must be a String").required(
    "Last Name is Required"
  ),
  fullName: Yup.string("Full Name must be a String").required(
    "FullName is Required"
  ),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is Required"),
  contactNumber: Yup.string("Enter valid contact Number")
    .length(10, "Enter a 10 digit mobile number")
    .required("Mobile Number is Required"),
  jobTitle: Yup.string().required("Job Title is Required"),
  experience: Yup.string().required("Experience is Required"),
  technicalSkills: Yup.string().required("Technical Skills is Required"),
});

export default schema;
