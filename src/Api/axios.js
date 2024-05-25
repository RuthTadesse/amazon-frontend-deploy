import axios from "axios";

const axiosInstance = axios.create({
  //this is the localhost instance
  // baseURL: "http://127.0.0.1:5000"
  baseURL: "https://amazon-api-deploy-4anv.onrender.com"
});

export { axiosInstance };
