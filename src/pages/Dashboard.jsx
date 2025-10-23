import { useState } from 'react';
import { tripsData } from '../data/trips';
import SearchFilter from '../components/SearchFilter';
import Pagination from '../components/Pagination';
import TripList from '../components/TripList';


export default function Dashboard() {
const [trips, setTrips] = useState(tripsData);
const [search, setSearch] = useState('');
const [filter, setFilter] = useState('');
const [currentPage, setCurrentPage] = useState(1);
const tripsPerPage = 4;


const filteredTrips = trips
.filter(t => t.destination.toLowerCase().includes(search.toLowerCase()))
.filter(t => (filter ? t.status === filter : true));


const totalPages = Math.ceil(filteredTrips.length / tripsPerPage);
const paginatedTrips = filteredTrips.slice(
(currentPage - 1) * tripsPerPage,
currentPage * tripsPerPage
);


const handleDelete = (id) => setTrips(trips.filter(t => t.id !== id));


return (
<div>
<h1 className="text-2xl font-bold mb-4">Dashboard</h1>
<SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />
<TripList trips={paginatedTrips} handleDelete={handleDelete} />
<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
</div>
);
}