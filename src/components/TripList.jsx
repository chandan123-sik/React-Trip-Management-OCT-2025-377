import { Link } from 'react-router-dom';


export default function TripList({ trips, handleDelete }) {
return (
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
{trips.map((trip) => (
<div key={trip.id} className="bg-white p-4 rounded shadow">
<h2 className="text-xl font-semibold">{trip.destination}</h2>
<p>Start: {trip.startDate}</p>
<p>End: {trip.endDate}</p>
<p>Price: {trip.price} Rs.</p>
<p>Status: {trip.status}</p>
<div className="flex justify-between mt-3">
<Link
to={`/edit/${trip.id}`}
className="bg-yellow-400 px-3 py-1 rounded text-white"
>
Edit
</Link>
<button
onClick={() => handleDelete(trip.id)}
className="bg-red-500 px-3 py-1 rounded text-white"
>
Delete
</button>
</div>
</div>
))}
</div>
);
}