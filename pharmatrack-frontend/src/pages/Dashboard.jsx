import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMedicines } from "../services/api";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalMedicines: 0,
    lowStockMedicines: 0,
    expiringSoon: 0,
    expiredMedicines: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      const res = await getMedicines();
      const medicines = res.data || [];
      
      const today = new Date();
      const thirtyDaysFromNow = new Date(today.getTime() + (30 * 24 * 60 * 60 * 1000));
      
      const lowStock = medicines.filter(m => (m.quantity || 0) <= 10).length;
      const expiringSoon = medicines.filter(m => {
        const expiryDate = new Date(m.expiryDate);
        return expiryDate <= thirtyDaysFromNow && expiryDate >= today;
      }).length;
      const expired = medicines.filter(m => {
        const expiryDate = new Date(m.expiryDate);
        return expiryDate < today;
      }).length;
      
      setStats({
        totalMedicines: medicines.length,
        lowStockMedicines: lowStock,
        expiringSoon: expiringSoon,
        expiredMedicines: expired
      });
    } catch (error) {
      console.error("Error loading dashboard data:", error);
      // Fallback to localStorage
      const localMedicines = JSON.parse(localStorage.getItem('medicines') || '[]');
      const today = new Date();
      const thirtyDaysFromNow = new Date(today.getTime() + (30 * 24 * 60 * 60 * 1000));
      
      const lowStock = localMedicines.filter(m => (m.quantity || 0) <= 10).length;
      const expiringSoon = localMedicines.filter(m => {
        const expiryDate = new Date(m.expiryDate);
        return expiryDate <= thirtyDaysFromNow && expiryDate >= today;
      }).length;
      const expired = localMedicines.filter(m => {
        const expiryDate = new Date(m.expiryDate);
        return expiryDate < today;
      }).length;
      
      setStats({
        totalMedicines: localMedicines.length,
        lowStockMedicines: lowStock,
        expiringSoon: expiringSoon,
        expiredMedicines: expired
      });
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: "Total Medicines",
      value: stats.totalMedicines,
      icon: "💊",
      color: "bg-blue-500",
      textColor: "text-blue-600"
    },
    {
      title: "Low Stock Alert",
      value: stats.lowStockMedicines,
      icon: "⚠️",
      color: "bg-yellow-500",
      textColor: "text-yellow-600"
    },
    {
      title: "Expiring Soon",
      value: stats.expiringSoon,
      icon: "⏰",
      color: "bg-orange-500",
      textColor: "text-orange-600"
    },
    {
      title: "Expired Medicines",
      value: stats.expiredMedicines,
      icon: "❌",
      color: "bg-red-500",
      textColor: "text-red-600"
    }
  ];

  const quickActions = [
    {
      title: "Add New Medicine",
      description: "Add a new medicine to your inventory",
      link: "/add-medicine",
      icon: "➕",
      color: "bg-blue-50 hover:bg-blue-100 border-blue-200"
    },
    {
      title: "View All Medicines",
      description: "Browse and manage your medicine inventory",
      link: "/medicines",
      icon: "📋",
      color: "bg-green-50 hover:bg-green-100 border-green-200"
    },
    {
      title: "Expiry Report",
      description: "Check medicines expiring soon",
      link: "/expiry-report",
      icon: "📅",
      color: "bg-orange-50 hover:bg-orange-100 border-orange-200"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
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
            <span className="text-3xl text-white">🏠</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text ">
            Dashboard
          </h1>
          <p className="mt-2 text-gray-600 text-lg">Welcome to PharmaTrack! Manage your pharmacy operations efficiently.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-6 border border-blue-100 transform hover:scale-105 transition duration-300">
              <div className="flex items-center">
                <div className={`${stat.color} rounded-full p-4 mr-4 shadow-lg`}>
                  <span className="text-3xl">{stat.icon}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600">{stat.title}</p>
                  <p className={`text-3xl font-bold ${stat.textColor}`}>{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.link}
                className={`${action.color} border-2 rounded-2xl p-6 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg`}
              >
                <div className="text-center">
                  <div className="text-5xl mb-4">{action.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{action.title}</h3>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">System Status</h2>
          <div className="space-y-4">
            <div className="flex items-center p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-blue-100">
              <div className="text-3xl mr-4">💊</div>
              <div>
                <p className="font-bold text-gray-900 text-lg">System Ready</p>
                <p className="text-gray-600">PharmaTrack is ready to manage your pharmacy operations</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-100">
              <div className="text-3xl mr-4">✅</div>
              <div>
                <p className="font-bold text-gray-900 text-lg">Authentication Complete</p>
                <p className="text-gray-600">Successfully logged in to the system</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}