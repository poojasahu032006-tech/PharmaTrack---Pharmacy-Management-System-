import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white shadow-xl fixed top-0 w-full z-50 border-b-4 border-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition duration-300 transform hover:scale-105">
              <div className="bg-white rounded-full p-2 shadow-lg">
                <span className="text-2xl text-blue-600">💊</span>
              </div>
              <div>
                <h1 className="font-bold text-2xl bg-gradient-to-r from-white to-blue-100 bg-clip-text ">
                  PharmaTrack
                </h1>
                {/* <p className="text-xs text-blue-100 -mt-1">Pharmacy Management System</p> */}
              </div>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <Link 
                to="/" 
                className="text-white hover:bg-white hover:bg-opacity-20 px-4 py-3 rounded-lg text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2"
              >
                <span>🏠</span>
                <span>Dashboard</span>
              </Link>
              <Link 
                to="/medicines" 
                className="text-white hover:bg-white hover:bg-opacity-20 px-4 py-3 rounded-lg text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2"
              >
                <span>📋</span>
                <span>Medicines</span>
              </Link>
              <Link 
                to="/add-medicine" 
                className="text-white hover:bg-white hover:bg-opacity-20 px-4 py-3 rounded-lg text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2"
              >
                <span>➕</span>
                <span>Add Medicine</span>
              </Link>
              <Link 
                to="/expiry-report" 
                className="text-white hover:bg-white hover:bg-opacity-20 px-4 py-3 rounded-lg text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2"
              >
                <span>📅</span>
                <span>Expiry Report</span>
              </Link>
            </div>
          </div>
          
          <div className="flex items-center">
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition duration-300 ease-in-out transform hover:scale-100 shadow-lg flex items-center space-x-2"
            >
              <span>🚪</span>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}