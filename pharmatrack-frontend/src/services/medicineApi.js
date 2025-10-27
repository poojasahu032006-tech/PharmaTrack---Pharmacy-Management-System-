import API from "./api";

// Medicine API - communicates with Spring Boot backend
// Base path resolves to: http://localhost:8080/api

// GET /api/medicines - Fetch all medicines
export const fetchAllMedicines = () => API.get("/medicines");

// POST /api/medicines - Add new medicine
export const createMedicine = (data) => API.post("/medicines", data);

// PUT /api/medicines/{id} - Update existing medicine
export const updateMedicineById = (id, data) => API.put(`/medicines/${id}`, data);

// DELETE /api/medicines/{id} - Delete medicine
export const deleteMedicineById = (id) => API.delete(`/medicines/${id}`);

export default {
  fetchAllMedicines,
  createMedicine,
  updateMedicineById,
  deleteMedicineById,
};

