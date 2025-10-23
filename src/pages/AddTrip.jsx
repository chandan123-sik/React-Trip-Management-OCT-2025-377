import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import TripForm from '../components/TripForm';
import { tripsData } from '../data/trips';


export default function AddTrip() {
const navigate = useNavigate();
const [trips, setTrips] = useState(tripsData);


const handleAdd = (data) => {
const newTrip = { ...data, id: Date.now() };
setTrips([...trips, newTrip]);
alert('Trip added!');
navigate('/');
};


return (
<div>
<h1 className="text-2xl font-bold mb-4 text-center">Add New Trip</h1>
<TripForm onSubmit={handleAdd} />
</div>
);
}