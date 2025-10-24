import { useForm } from 'react-hook-form';

export default function TripForm({ onSubmit, defaultValues }) {
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition"
    >
      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-1">Destination</label>
        <input
          {...register('destination', { required: 'Destination required' })}
          className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        {errors.destination && <p className="text-red-500 text-sm mt-1">{errors.destination.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-1">Start Date</label>
        <input type="date" {...register('startDate', { required: true })} 
               className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"/>
      </div>

      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-1">End Date</label>
        <input type="date" {...register('endDate', { required: true })} 
               className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"/>
      </div>

      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-1">Price</label>
        <input type="number" {...register('price', { required: true, min: 1 })} 
               className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"/>
      </div>

      <div className="mb-6">
        <label className="block font-medium text-gray-700 mb-1">Status</label>
        <select {...register('status', { required: true })} 
                className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-400 focus:outline-none">
          <option value="PLANNED">Planned</option>
          <option value="ONGOING">Ongoing</option>
          <option value="COMPLETED">Completed</option>
        </select>
      </div>

      <button 
        type="submit" 
        className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full hover:bg-blue-700 transition shadow-md hover:shadow-lg"
      >
        Submit
      </button>
    </form>
  );
}
