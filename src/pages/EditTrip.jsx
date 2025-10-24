import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import TripForm from '../components/TripForm';
import { tripsData } from '../data/trips';

export default function EditTrip() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [trips, setTrips] = useState(tripsData);
  const trip = trips.find((t) => t.id === parseInt(id));

  const handleEdit = (data) => {
    const updated = trips.map((t) => (t.id === trip.id ? { ...t, ...data } : t));
    setTrips(updated);
    alert('Trip updated!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Edit Trip</h1>
      <TripForm onSubmit={handleEdit} defaultValues={trip} />
    </div>
  );
}
