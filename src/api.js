import axios from "axios";

// This points to where your teammate's backend WILL be. 
const API = axios.create({
  baseURL: "http://localhost:5000/api", 
});

// This automatically attaches a security badge (JWT token) to every request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("userToken");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;