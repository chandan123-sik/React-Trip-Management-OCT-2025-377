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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Add New Trip</h1>
      <TripForm onSubmit={handleAdd} />
    </div>
  );
}
