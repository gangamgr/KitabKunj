import axios from "axios";

const instance = axios.create({
  //   baseURL: "http://<103.156.27.13>:<3000>/localhost",
  baseURL: process.env.REACT_APP_BASE_URL,
});
export default instance;
