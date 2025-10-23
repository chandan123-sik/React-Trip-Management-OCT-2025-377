export default function SearchFilter({ search, setSearch, filter, setFilter }) {
return (
<div className="flex flex-col md:flex-row gap-4 mb-4">
<input
type="text"
placeholder="Search by destination..."
value={search}
onChange={(e) => setSearch(e.target.value)}
className="border p-2 rounded w-full md:w-1/2"
/>
<select
value={filter}
onChange={(e) => setFilter(e.target.value)}
className="border p-2 rounded w-full md:w-1/4"
>
<option value="">All Status</option>
<option value="PLANNED">Planned</option>
<option value="ONGOING">Ongoing</option>
<option value="COMPLETED">Completed</option>
</select>
</div>
);
}