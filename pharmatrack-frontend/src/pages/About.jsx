export default function About() {
  const features = [
    { title: "Medicine Management", description: "Create, read, update, and delete medicines with search and filters." },
    { title: "Sales Tracking", description: "View detailed sales history with totals and formatted dates." },
    { title: "Stock Monitoring", description: "Track stock levels with visual indicators and alerts." },
    { title: "Expiry Report", description: "Identify medicines expiring soon with clear status labels." },
    { title: "Authentication", description: "Secure login with protected routes and logout." },
    { title: "Printing", description: "Print professional transaction receipts for customers." },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-3xl">💊</div>
          <h1 className="mt-4 text-4xl font-bold text-gray-900">About PharmaTrack</h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            PharmaTrack is a modern pharmacy management system that helps you manage medicines, sales, stock,
            and expiry reports with an intuitive and responsive UI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-900">Technology</h2>
          <p className="mt-2 text-blue-800">
            Built with React, Vite, Tailwind CSS, and a Spring Boot backend. The interface is designed for speed,
            accessibility, and responsiveness across devices.
          </p>
        </div>
      </div>
    </div>
  );
}

