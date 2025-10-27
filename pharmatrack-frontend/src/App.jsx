import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MedicineList from "./pages/MedicineList";
import AddMedicine from "./pages/AddMedicine";
import EditMedicine from "./pages/EditMedicine";
import ExpiryReport from "./pages/ExpiryReport";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      {/* Main Layout Wrapper */}
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        
        {/* Define Routes */}
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Navbar />
                <main className="flex-grow pt-20 pb-20">
                  <Dashboard />
                </main>
                <Footer />
              </ProtectedRoute>
            }
          />

          <Route
            path="/medicines"
            element={
              <ProtectedRoute>
                <Navbar />
                <main className="flex-grow pt-20 pb-20">
                  <MedicineList />
                </main>
                <Footer />
              </ProtectedRoute>
            }
          />

          <Route
            path="/add-medicine"
            element={
              <ProtectedRoute>
                <Navbar />
                <main className="flex-grow pt-20 pb-20">
                  <AddMedicine />
                </main>
                <Footer />
              </ProtectedRoute>
            }
          />

          <Route
            path="/edit-medicine/:id"
            element={
              <ProtectedRoute>
                <Navbar />
                <main className="flex-grow pt-20 pb-20">
                  <EditMedicine />
                </main>
                <Footer />
              </ProtectedRoute>
            }
          />

          <Route
            path="/expiry-report"
            element={
              <ProtectedRoute>
                <Navbar />
                <main className="flex-grow pt-20 pb-20">
                  <ExpiryReport />
                </main>
                <Footer />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
