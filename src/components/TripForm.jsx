import { useForm } from 'react-hook-form';


export default function TripForm({ onSubmit, defaultValues }) {
const { register, handleSubmit, formState: { errors } } = useForm({
defaultValues,
});


return (
<form
onSubmit={handleSubmit(onSubmit)}
className="max-w-lg mx-auto bg-white p-6 rounded shadow"
>
<div className="mb-3">
<label className="block font-medium">Destination</label>
<input
{...register('destination', { required: 'Destination required' })}
className="border p-2 rounded w-full"
/>
{errors.destination && <p className="text-red-500 text-sm">{errors.destination.message}</p>}
</div>
<div className="mb-3">
<label className="block font-medium">Start Date</label>
<input type="date" {...register('startDate', { required: true })} className="border p-2 rounded w-full" />
</div>
<div className="mb-3">
<label className="block font-medium">End Date</label>
<input type="date" {...register('endDate', { required: true })} className="border p-2 rounded w-full" />
</div>
<div className="mb-3">
<label className="block font-medium">Price</label>
<input type="number" {...register('price', { required: true, min: 1 })} className="border p-2 rounded w-full" />
</div>
<div className="mb-3">
<label className="block font-medium">Status</label>
<select {...register('status', { required: true })} className="border p-2 rounded w-full">
<option value="PLANNED">Planned</option>
<option value="ONGOING">Ongoing</option>
<option value="COMPLETED">Completed</option>
</select>
</div>
<button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Submit</button>
</form>
);
}