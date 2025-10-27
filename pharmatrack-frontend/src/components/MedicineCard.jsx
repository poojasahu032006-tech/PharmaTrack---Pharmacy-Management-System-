export default function MedicineCard({ medicine, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{medicine.name}</h3>
        <span className="text-sm text-gray-500">ID: {medicine.id}</span>
      </div>
      
      <div className="space-y-2 text-sm text-gray-600">
        <p><span className="font-medium">Category:</span> {medicine.category}</p>
        <p><span className="font-medium">Manufacturer:</span> {medicine.manufacturer}</p>
        <p><span className="font-medium">Price:</span> ₹{medicine.price}</p>
        <p><span className="font-medium">Expiry Date:</span> {medicine.expiryDate}</p>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          medicine.stock > 10 
            ? 'bg-green-100 text-green-800' 
            : medicine.stock > 0 
            ? 'bg-yellow-100 text-yellow-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          Stock: {medicine.stock || 0}
        </span>
        
        <div className="flex space-x-2">
          <button 
            onClick={onEdit}
            className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors"
          >
            Edit
          </button>
          <button 
            onClick={onDelete}
            className="px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
