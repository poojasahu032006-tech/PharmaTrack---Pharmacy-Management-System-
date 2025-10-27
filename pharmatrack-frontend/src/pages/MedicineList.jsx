import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMedicines, deleteMedicine } from "../services/api";

export default function MedicineList() {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterExpiry, setFilterExpiry] = useState("all");

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
      // Fallback to localStorage
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
        alert("Medicine deleted successfully!");
      } catch (error) {
        console.error("Error deleting medicine:", error);
        // Fallback to localStorage
        const localMedicines = JSON.parse(localStorage.getItem('medicines') || '[]');
        const updatedMedicines = localMedicines.filter(med => med.id !== id);
        localStorage.setItem('medicines', JSON.stringify(updatedMedicines));
        setMedicines(updatedMedicines);
        alert("Medicine deleted successfully! (Updated locally)");
      }
    }
  };

  const getExpiryStatus = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const thirtyDaysFromNow = new Date(today.getTime() + (30 * 24 * 60 * 60 * 1000));
    
    if (expiry < today) {
      return { status: 'expired', color: 'bg-red-100 text-red-800', icon: '❌' };
    } else if (expiry <= thirtyDaysFromNow) {
      return { status: 'expiring', color: 'bg-orange-100 text-orange-800', icon: '⏰' };
    } else {
      return { status: 'valid', color: 'bg-green-100 text-green-800', icon: '✅' };
    }
  };

  const filteredMedicines = medicines.filter(medicine => {
    const matchesSearch = medicine.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         medicine.batchNo?.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesExpiry = true;
    if (filterExpiry !== "all") {
      const expiryStatus = getExpiryStatus(medicine.expiryDate);
      matchesExpiry = expiryStatus.status === filterExpiry;
    }
    
    return matchesSearch && matchesExpiry;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading medicines...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-4">
            <span className="text-3xl text-white">📋</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text">
            Medicines Inventory
          </h1>
          <p className="mt-2 text-gray-600 text-lg">Manage your medicine inventory with full CRUD operations</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 border border-blue-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                🔍 Search Medicines
              </label>
              <input
                type="text"
                placeholder="Search by name or batch number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                📅 Filter by Expiry
              </label>
              <select
                value={filterExpiry}
                onChange={(e) => setFilterExpiry(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 focus:bg-white"
              >
                <option value="all">All Medicines</option>
                <option value="expired">Expired</option>
                <option value="expiring">Expiring Soon</option>
                <option value="valid">Valid</option>
              </select>
            </div>
            <div className="flex items-end">
              <div className="text-sm text-gray-600 bg-blue-50 px-4 py-3 rounded-lg w-full">
                Showing {filteredMedicines.length} of {medicines.length} medicines
              </div>
            </div>
          </div>
        </div>

        {/* Add Medicine Button */}
        <div className="mb-6 text-center">
          <Link
            to="/add-medicine"
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
              {searchTerm || filterExpiry !== "all"
                ? "Try adjusting your search or filter criteria." 
                : "Get started by adding your first medicine."}
            </p>
            <Link
              to="/add-medicine"
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
                    📅 Expiry Date
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
                {filteredMedicines.map((medicine) => {
                  const expiryStatus = getExpiryStatus(medicine.expiryDate);
                  return (
                    <tr key={medicine.id} className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 transition duration-200">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900">{medicine.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full inline-block">
                          {medicine.batchNo}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">{medicine.expiryDate}</span>
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${expiryStatus.color}`}>
                            {expiryStatus.icon}
                          </span>
                        </div>
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
                          <Link
                            to={`/edit-medicine/${medicine.id}`}
                            className="text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-lg transition duration-200"
                          >
                            ✏️ Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(medicine.id)}
                            className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-lg transition duration-200"
                          >
                            🗑️ Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
