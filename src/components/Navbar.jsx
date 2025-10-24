import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold tracking-wide">Trip Manager</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-300 transition">Dashboard</Link>
        <Link to="/add" className="hover:text-yellow-300 transition">Add Trip</Link>
      </div>
    </nav>
  );
}
