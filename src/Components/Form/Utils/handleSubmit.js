import axios from "../../../config/axiosConfig";

const handleSubmit = (values) => {
  console.log(values);

  const payload = {
    name: values.fullName,
    email: values.email,
    phone: values.contactNumber,
    skills: values.technicalSkills,
    jobTitle: values.jobTitle,
    experience: values.experience,
  };

  axios
    .post("/users/application-form", payload)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default handleSubmit;
