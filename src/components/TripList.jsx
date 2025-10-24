import { Link } from 'react-router-dom';

export default function TripList({ trips, handleDelete }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {trips.map(trip => (
        <div
          key={trip.id}
          className="bg-white p-5 rounded-2xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 relative border-4 border-transparent hover:border-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-yellow-400 animate-fadeIn"
        >
          <h2 className="text-xl font-semibold mb-2">{trip.destination}</h2>
          <p className="text-gray-600">Start: {trip.startDate}</p>
          <p className="text-gray-600">End: {trip.endDate}</p>
          <p className="text-gray-800 font-medium mt-1">Price: {trip.price} Rs.</p>

          <span
            className={`absolute top-3 right-3 px-2 py-1 text-xs font-semibold rounded-full ${
              trip.status === "PLANNED"
                ? "bg-yellow-200 text-yellow-800"
                : trip.status === "ONGOING"
                ? "bg-green-200 text-green-800"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {trip.status}
          </span>

          <div className="flex justify-between mt-4">
            <Link
              to={`/edit/${trip.id}`}
              className="bg-yellow-400 px-4 py-1 rounded-lg text-white hover:bg-yellow-500 transition shadow-md hover:shadow-lg"
            >
              Edit
            </Link>
            <button
              onClick={() => handleDelete(trip.id)}
              className="bg-red-500 px-4 py-1 rounded-lg text-white hover:bg-red-600 transition shadow-md hover:shadow-lg"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
