import { Link } from 'react-router-dom';


export default function Navbar() {
return (
<nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
<h1 className="text-2xl font-bold">Trip Manager</h1>
<div className="space-x-4">
<Link to="/" className="hover:underline">Dashboard</Link>
<Link to="/add" className="hover:underline">Add Trip</Link>
</div>
</nav>
);
}