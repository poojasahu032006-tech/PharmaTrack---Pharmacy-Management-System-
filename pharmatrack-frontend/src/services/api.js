import axios from "axios";

// ✅ Use environment variable for flexibility
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api";

// ✅ Create Axios instance
const API = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// ✅ Request Interceptor (Attach Token + Debug)
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log("➡️ Request:", config.method?.toUpperCase(), config.baseURL + config.url);
    return config;
  },
  (error) => {
    console.error("❌ Request error:", error);
    return Promise.reject(error);
  }
);

// ✅ Response Interceptor (Handle Errors Globally)
API.interceptors.response.use(
  (response) => {
    console.log("✅ Response:", response.status, response.config.url);
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("❌ Server responded with:", error.response.status, error.response.data);
    } else if (error.code === "ECONNABORTED") {
      console.error("⚠️ Request timed out");
    } else if (error.code === "ERR_NETWORK" || error.message.includes("Network Error")) {
      console.error("🚫 Backend server not reachable");
    } else {
      console.error("⚠️ Unexpected error:", error.message);
    }

    return Promise.reject(error);
  }
);

//
// ✅ AUTHENTICATION API
//
export const login = async (credentials) => {
  try {
    const response = await API.post("/auth/login", credentials);
    return response;
  } catch (error) {
    console.warn("⚠️ Login API failed, attempting fallback...");

    // Offline/demo fallback login
    if (credentials.username === "admin" && credentials.password === "admin123") {
      return {
        data: {
          success: true,
          token: "fallback-token",
          message: "Offline demo login successful",
        },
      };
    }

    // If not fallback, throw the original error
    throw error;
  }
};

//
// ✅ MEDICINE CRUD OPERATIONS
//
export const getMedicines = () => API.get("/medicines");
export const getMedicine = (id) => API.get(`/medicines/${id}`);
export const addMedicine = (data) => API.post("/medicines", data);
export const updateMedicine = (id, data) => API.put(`/medicines/${id}`, data);
export const deleteMedicine = (id) => API.delete(`/medicines/${id}`);

export default API;
