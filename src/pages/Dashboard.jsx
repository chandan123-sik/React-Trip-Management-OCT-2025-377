import { useState, useEffect } from 'react';
import { tripsData } from '../data/trips';
import SearchFilter from '../components/SearchFilter';
import Pagination from '../components/Pagination';
import TripList from '../components/TripList';

export default function Dashboard() {
  const [trips, setTrips] = useState(tripsData);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('');
  const tripsPerPage = 4;

  // Filter + Sort logic
  let filteredTrips = trips
    .filter(t => t.destination.toLowerCase().includes(search.toLowerCase()))
    .filter(t => (filter ? t.status === filter : true));

  if (sortOption === 'price-asc') filteredTrips.sort((a, b) => a.price - b.price);
  else if (sortOption === 'price-desc') filteredTrips.sort((a, b) => b.price - a.price);
  else if (sortOption === 'startDate-asc') filteredTrips.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  else if (sortOption === 'startDate-desc') filteredTrips.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

  // Pagination logic
  const totalPages = Math.ceil(filteredTrips.length / tripsPerPage);
  const paginatedTrips = filteredTrips.slice(
    (currentPage - 1) * tripsPerPage,
    currentPage * tripsPerPage
  );

  const handleDelete = (id) => setTrips(trips.filter(t => t.id !== id));

  // Animated gradient background (diagonal motion)
  const [bgPos, setBgPos] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setBgPos(prev => (prev + 0.5) % 360);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  // Summary section
  const totalTrips = trips.length;
  const avgPrice = Math.round(trips.reduce((a, b) => a + b.price, 0) / trips.length);

  return (
    <div
      className="min-h-screen p-6 flex flex-col"
      style={{
        background: `linear-gradient(${bgPos}deg, #a1c4fd, #c2e9fb, #667eea, #764ba2)`,
        backgroundSize: '400% 400%',
        transition: 'background 0.5s ease',
        animation: 'gradientFlow 10s ease infinite',
      }}
    >
      {/* Gradient animation keyframes */}
      <style>
        {`
          @keyframes gradientFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800 drop-shadow-lg">
        Dashboard
      </h1>

      {/* Summary Widgets */}
      <div className="flex flex-wrap gap-6 justify-center mb-8">
        <div className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-lg w-48 text-center hover:scale-105 transition-transform duration-300">
          <p className="text-gray-500 font-medium">Total Trips</p>
          <p className="text-3xl font-bold text-blue-600">{totalTrips}</p>
        </div>
        <div className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-lg w-48 text-center hover:scale-105 transition-transform duration-300">
          <p className="text-gray-500 font-medium">Average Price</p>
          <p className="text-3xl font-bold text-green-600">{avgPrice} Rs.</p>
        </div>
      </div>

      {/* Search + Filter + Sort */}
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />

      {/* Trip List */}
      <TripList trips={paginatedTrips} handleDelete={handleDelete} />

      {/* Pagination */}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
}
