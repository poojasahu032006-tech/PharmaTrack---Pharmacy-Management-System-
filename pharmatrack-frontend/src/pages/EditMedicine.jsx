import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMedicine, updateMedicine } from "../services/api";

export default function EditMedicine() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    batchNo: "",
    expiryDate: "",
    quantity: "",
    price: "",
  });
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadMedicineData();
  }, [id]);

  const loadMedicineData = async () => {
    try {
      setLoadingData(true);
      const res = await getMedicine(id);
      const medicine = res.data;
      
      setForm({
        name: medicine.name || "",
        batchNo: medicine.batchNo || "",
        expiryDate: medicine.expiryDate || "",
        quantity: medicine.quantity || "",
        price: medicine.price || "",
      });
    } catch (error) {
      console.error("Error loading medicine:", error);
      // Fallback to localStorage
      const localMedicines = JSON.parse(localStorage.getItem('medicines') || '[]');
      const medicine = localMedicines.find(med => med.id === parseInt(id));
      
      if (medicine) {
        setForm({
          name: medicine.name || "",
          batchNo: medicine.batchNo || "",
          expiryDate: medicine.expiryDate || "",
          quantity: medicine.quantity || "",
          price: medicine.price || "",
        });
      } else {
        setError("Medicine not found");
      }
    } finally {
      setLoadingData(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Validate form
      if (!form.name || !form.batchNo || !form.expiryDate || !form.quantity || !form.price) {
        throw new Error("All fields are required");
      }

      if (parseFloat(form.price) <= 0) {
        throw new Error("Price must be greater than 0");
      }

      if (parseInt(form.quantity) < 0) {
        throw new Error("Quantity cannot be negative");
      }

      const medicineData = {
        ...form,
        price: parseFloat(form.price),
        quantity: parseInt(form.quantity)
      };

      try {
        await updateMedicine(id, medicineData);
        alert("Medicine updated successfully!");
        navigate("/medicines");
      } catch (apiError) {
        console.error("API Error:", apiError);
        
        // Fallback: Update in localStorage if API fails
        const localMedicines = JSON.parse(localStorage.getItem('medicines') || '[]');
        const updatedMedicines = localMedicines.map(med => 
          med.id === parseInt(id) 
            ? { ...med, ...medicineData, updatedAt: new Date().toISOString() }
            : med
        );
        
        localStorage.setItem('medicines', JSON.stringify(updatedMedicines));
        
        alert("Medicine updated successfully! (Updated locally - backend connection issue)");
        navigate("/medicines");
      }
    } catch (error) {
      console.error("Error updating medicine:", error);
      setError(error.message || "Error updating medicine. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading medicine data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-blue-100">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-4">
              <span className="text-3xl text-white">✏️</span>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text ">
              Edit Medicine
            </h1>
            <p className="mt-2 text-gray-600 text-lg">Update the details of the medicine</p>
          </div>

          {error && (
            <div className="mb-6 bg-red-50 border-l-4 border-red-400 rounded-md p-4">
              <div className="flex">
                <div className="text-red-400 text-xl">⚠️</div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Error</h3>
                  <p className="mt-1 text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Medicine Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter medicine name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 focus:bg-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Batch No. *
                </label>
                <input
                  type="text"
                  name="batchNo"
                  value={form.batchNo}
                  onChange={handleChange}
                  placeholder="Enter batch number"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 focus:bg-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Expiry Date *
                </label>
                <input
                  type="date"
                  name="expiryDate"
                  value={form.expiryDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 focus:bg-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Quantity *
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={form.quantity}
                  onChange={handleChange}
                  placeholder="0"
                  min="0"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 focus:bg-white"
                  required
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Price (₹) *
                </label>
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 focus:bg-white"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-8">
              <button
                type="button"
                onClick={() => navigate("/medicines")}
                className="px-8 py-3 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 shadow-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 rounded-lg transition duration-200 ease-in-out disabled:opacity-50 flex items-center transform hover:scale-105 shadow-lg"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Updating Medicine...
                  </>
                ) : (
                  <>
                    <span className="mr-2">✏️</span>
                    Update Medicine
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
