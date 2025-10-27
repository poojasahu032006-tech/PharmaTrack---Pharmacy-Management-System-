// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { login } from "../services/api";
// import { Eye, EyeOff, Lock, User } from "lucide-react";

// export default function Login() {
//   const [credentials, setCredentials] = useState({ username: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await login(credentials);

//       if (response.data.success) {
//         localStorage.setItem("isAuthenticated", "true");
//         localStorage.setItem("token", response.data.token);

//         if (rememberMe) {
//           localStorage.setItem("username", credentials.username);
//         } else {
//           localStorage.removeItem("username");
//         }

//         navigate("/");
//       } else {
//         setError(response.data.message || "Invalid username or password");
//       }
//     } catch (err) {
//       console.error("Login error:", err);

//       // Fallback demo login
//       if (credentials.username === "admin" && credentials.password === "admin123") {
//         localStorage.setItem("isAuthenticated", "true");
//         localStorage.setItem("token", "fallback-token");
//         navigate("/");
//       } else {
//         setError("Login failed. Please check credentials or try again later.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 px-4">
//       {/* Center Login Card */}
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
//         {/* Header */}
//         <div className="flex flex-col items-center mb-8">
//           <div className="flex items-center gap-2">
//             <Lock className="w-7 h-7 text-blue-600" />
//             <h2 className="text-2xl font-bold text-blue-700">PharmaTrack Login</h2>
//           </div>
//           <p className="text-sm text-gray-500 mt-1">Sign in to your account</p>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Username Box */}
//           <div className="border border-gray-300 bg-gray-50 rounded-xl p-4 hover:bg-white transition-all duration-200">
//             <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
//               Username
//             </label>
//             <div className="relative">
//               <User className="absolute left-3 top-2.5 text-gray-400" size={18} />
//               <input
//                 id="username"
//                 name="username"
//                 type="text"
//                 required
//                 value={credentials.username}
//                 onChange={handleChange}
//                 placeholder="Enter your username"
//                 className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           {/* Password Box */}
//           <div className="border border-gray-300 bg-gray-50 rounded-xl p-4 hover:bg-white transition-all duration-200">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 id="password"
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 required
//                 value={credentials.password}
//                 onChange={handleChange}
//                 placeholder="Enter your password"
//                 className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
//               >
//                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>
//           </div>

//           {/* Remember Me */}
//           <div className="flex items-center justify-between">
//             <label className="flex items-center gap-2 text-sm text-gray-600">
//               <input
//                 type="checkbox"
//                 checked={rememberMe}
//                 onChange={() => setRememberMe(!rememberMe)}
//                 className="text-blue-600 focus:ring-blue-500 rounded"
//               />
//               Remember Me
//             </label>
//           </div>

//           {/* Error Message */}
//           {error && (
//             <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg p-3 text-center">
//               {error}
//             </div>
//           )}

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full flex justify-center items-center py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-all duration-150 disabled:opacity-60"
//           >
//             {loading ? (
//               <>
//                 <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                 Signing In...
//               </>
//             ) : (
//               "Log In"
//             )}
//           </button>

//           {/* Demo Credentials */}
//           <div className="text-center text-xs text-gray-500 bg-gray-50 rounded-md p-3 mt-4">
//             <p className="font-semibold">Demo Credentials</p>
//             <p>Username: <span className="font-mono">admin</span></p>
//             <p>Password: <span className="font-mono">admin123</span></p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { login } from "../services/api";
// import { Eye, EyeOff, Lock, User } from "lucide-react";

// export default function Login() {
//   const [credentials, setCredentials] = useState({ username: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await login(credentials);

//       if (response.data.success) {
//         localStorage.setItem("isAuthenticated", "true");
//         localStorage.setItem("token", response.data.token);

//         if (rememberMe) {
//           localStorage.setItem("username", credentials.username);
//         } else {
//           localStorage.removeItem("username");
//         }

//         navigate("/");
//       } else {
//         setError(response.data.message || "Invalid username or password");
//       }
//     } catch (err) {
//       console.error("Login error:", err);

//       // Fallback for demo use
//       if (credentials.username === "admin" && credentials.password === "admin123") {
//         localStorage.setItem("isAuthenticated", "true");
//         localStorage.setItem("token", "fallback-token");
//         navigate("/");
//       } else {
//         setError("Login failed. Please check credentials or try again later.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-blue-100 to-green-200 px-4">
//       <div className="w-full max-w-md backdrop-blur-lg bg-white/80 rounded-3xl shadow-2xl border border-blue-100 p-8 transition-all duration-300 hover:shadow-blue-200">
//         {/* Header */}
//         <div className="flex flex-col items-center mb-8">
//           <div className="flex items-center gap-2">
//             <Lock className="w-8 h-8 text-blue-600" />
//             <h2 className="text-3xl font-bold text-blue-700">PharmaTrack</h2>
//           </div>
//           <p className="text-sm text-gray-600 mt-2">Secure Login Portal</p>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Username Box */}
//           <div className="border border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-4 hover:shadow-md hover:shadow-blue-200 transition-all duration-300">
//             <label htmlFor="username" className="block text-sm font-semibold text-blue-700 mb-1">
//               Username
//             </label>
//             <div className="relative">
//               <User className="absolute left-3 top-2.5 text-blue-500" size={18} />
//               <input
//                 id="username"
//                 name="username"
//                 type="text"
//                 required
//                 value={credentials.username}
//                 onChange={handleChange}
//                 placeholder="Enter your username"
//                 className="w-full pl-10 pr-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/70"
//               />
//             </div>
//           </div>

//           {/* Password Box */}
//           <div className="border border-green-200 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-4 hover:shadow-md hover:shadow-green-200 transition-all duration-300">
//             <label htmlFor="password" className="block text-sm font-semibold text-green-700 mb-1">
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 id="password"
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 required
//                 value={credentials.password}
//                 onChange={handleChange}
//                 placeholder="Enter your password"
//                 className="w-full pl-3 pr-10 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/70"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-2.5 text-gray-500 hover:text-green-600"
//               >
//                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>
//           </div>

//           {/* Remember Me */}
//           <div className="flex items-center justify-between">
//             <label className="flex items-center gap-2 text-sm text-gray-600">
//               <input
//                 type="checkbox"
//                 checked={rememberMe}
//                 onChange={() => setRememberMe(!rememberMe)}
//                 className="text-blue-600 focus:ring-blue-500 rounded"
//               />
//               Remember Me
//             </label>
//           </div>

//           {/* Error Message */}
//           {error && (
//             <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg p-3 text-center animate-pulse">
//               {error}
//             </div>
//           )}

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full flex justify-center items-center py-3 px-4 bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-green-200 disabled:opacity-60"
//           >
//             {loading ? (
//               <>
//                 <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                 Signing In...
//               </>
//             ) : (
//               "Log In"
//             )}
//           </button>

//           {/* Demo Credentials */}
//           <div className="text-center text-xs text-gray-600 bg-gradient-to-r from-gray-50 to-gray-100 rounded-md p-3 mt-4 border border-gray-200">
//             <p className="font-semibold text-blue-700">Demo Credentials</p>
//             <p>
//               Username: <span className="font-mono text-gray-700">admin</span>
//             </p>
//             <p>
//               Password: <span className="font-mono text-gray-700">admin123</span>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";
import { Eye, EyeOff, Lock, User } from "lucide-react";

export default function Login() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await login(credentials);

      if (response.data.success) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("token", response.data.token);

        if (rememberMe) {
          localStorage.setItem("username", credentials.username);
        } else {
          localStorage.removeItem("username");
        }

        navigate("/");
      } else {
        setError(response.data.message || "Invalid username or password");
      }
    } catch (err) {
      console.error("Login error:", err);

      // Fallback for demo use
      if (credentials.username === "admin" && credentials.password === "admin123") {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("token", "fallback-token");
        navigate("/");
      } else {
        setError("Login failed. Please check credentials or try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-blue-100 to-green-200 px-4">
      <div className="w-full max-w-md backdrop-blur-lg bg-white/80 rounded-3xl shadow-2xl border border-blue-100 p-10 transition-all duration-300 hover:shadow-blue-200">
        {/* Header */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-2">
            <Lock className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-blue-700">PharmaTrack</h2>
          </div>
          <p className="text-sm text-gray-600 mt-2">Secure Login Portal</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Username Box */}
          <div className="border border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-5 hover:shadow-md hover:shadow-blue-200 transition-all duration-300">
            <label htmlFor="username" className="block text-sm font-semibold text-blue-700 mb-2">
              Username
            </label>
            <div className="relative">
              <User className="absolute left-4 top-3 text-blue-500" size={20} />
              <input
                id="username"
                name="username"
                type="text"
                required
                value={credentials.username}
                onChange={handleChange}
                placeholder="Enter your username"
                className="w-full pl-12 pr-4 py-3.5 text-base border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/70"
              />
            </div>
          </div>

          {/* Password Box */}
          <div className="border border-green-200 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-5 hover:shadow-md hover:shadow-green-200 transition-all duration-300">
            <label htmlFor="password" className="block text-sm font-semibold text-green-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={credentials.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full pl-4 pr-12 py-3.5 text-base border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/70"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-gray-500 hover:text-green-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="text-blue-600 focus:ring-blue-500 rounded"
              />
              Remember Me
            </label>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg p-3 text-center animate-pulse">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center py-3.5 px-4 bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-green-200 disabled:opacity-60"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Signing In...
              </>
            ) : (
              "Log In"
            )}
          </button>

          {/* Demo Credentials */}
          <div className="text-center text-xs text-gray-600 bg-gradient-to-r from-gray-50 to-gray-100 rounded-md p-3 mt-4 border border-gray-200">
            <p className="font-semibold text-blue-700">Demo Credentials</p>
            <p>
              Username: <span className="font-mono text-gray-1500">admin</span>
            </p>
            <p>
              Password: <span className="font-mono text-gray-1500">admin123</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

