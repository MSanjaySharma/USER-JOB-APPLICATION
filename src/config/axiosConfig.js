import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://dct-application-form.herokuapp.com",
});

export default axios;
