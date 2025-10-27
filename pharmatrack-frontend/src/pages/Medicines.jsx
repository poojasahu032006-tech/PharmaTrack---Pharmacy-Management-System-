import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMedicines, deleteMedicine } from "../services/api";
import EditMedicineModal from "../components/EditMedicineModal";
import MedicineCard from "../components/MedicineCard";

export default function Medicines() {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // grid or table
  const [editingMedicine, setEditingMedicine] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    loadMedicines();
  }, []);

  const loadMedicines = async () => {
    try {
      setLoading(true);
      const res = await getMedicines();
      setMedicines(res.data || []);
    } catch (error) {
      console.error("Error loading medicines:", error);
      
      // Fallback: Load from localStorage if API fails
      const localMedicines = JSON.parse(localStorage.getItem('medicines') || '[]');
      setMedicines(localMedicines);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this medicine?")) {
      try {
        await deleteMedicine(id);
        loadMedicines();
      } catch (error) {
        console.error("Error deleting medicine:", error);
        
        // Fallback: Delete from localStorage if API fails
        const localMedicines = JSON.parse(localStorage.getItem('medicines') || '[]');
        const updatedMedicines = localMedicines.filter(med => med.id !== id);
        localStorage.setItem('medicines', JSON.stringify(updatedMedicines));
        setMedicines(updatedMedicines);
        
        alert("Medicine deleted successfully! (Updated locally - backend connection issue)");
      }
    }
  };

  const handleEdit = (medicine) => {
    setEditingMedicine(medicine);
    setShowEditModal(true);
  };

  const handleUpdate = () => {
    loadMedicines();
  };

  const filteredMedicines = medicines.filter(medicine => {
    const matchesSearch = medicine.name?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const categories = [...new Set(medicines.map(m => m.category).filter(Boolean))];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading medicines...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-4">
            <span className="text-3xl text-white">📋</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Medicines Inventory
          </h1>
          <p className="mt-2 text-gray-600 text-lg">Manage your medicine inventory with full CRUD operations</p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 border border-blue-100">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                🔍 Search Medicines
              </label>
              <input
                type="text"
                placeholder="Search by medicine name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 focus:bg-white"
              />
            </div>
            <div className="text-sm text-gray-600 bg-blue-50 px-4 py-2 rounded-lg">
              Showing {filteredMedicines.length} of {medicines.length} medicines
            </div>
          </div>
        </div>

        {/* Add Medicine Button */}
        <div className="mb-6 text-center">
          <Link
            to="/add"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            <span className="mr-2">➕</span>
            Add New Medicine
          </Link>
        </div>

        {/* Medicines Display */}
        {filteredMedicines.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center border border-blue-100">
            <div className="text-8xl mb-6">💊</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">No medicines found</h3>
            <p className="text-gray-600 mb-6 text-lg">
              {searchTerm 
                ? "Try adjusting your search criteria." 
                : "Get started by adding your first medicine."}
            </p>
            <Link
              to="/add"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              <span className="mr-2">💊</span>
              Add Medicine
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-blue-500 to-green-500">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                    💊 Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                    🏷️ Batch No.
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                    📅 Expiry
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                    📦 Quantity
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                    💰 Price
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                    ⚙️ Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredMedicines.map((medicine) => (
                  <tr key={medicine.id} className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 transition duration-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900">{medicine.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full inline-block">
                        {medicine.batchNo}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {medicine.expiryDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                        (medicine.quantity || 0) > 10 
                          ? 'bg-green-100 text-green-800' 
                          : (medicine.quantity || 0) > 0 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {medicine.quantity || 0}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900">₹{medicine.price}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(medicine)}
                          className="text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-lg transition duration-200"
                        >
                          ✏️ Edit
                        </button>
                        <button
                          onClick={() => handleDelete(medicine.id)}
                          className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-lg transition duration-200"
                        >
                          🗑️ Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Edit Modal */}
        <EditMedicineModal
          isOpen={showEditModal}
          onClose={() => setShowEditModal(false)}
          medicine={editingMedicine}
          onUpdate={handleUpdate}
        />
      </div>
    </div>
  );
}
