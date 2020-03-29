import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333" // url do server do backk!
});

export default api;
