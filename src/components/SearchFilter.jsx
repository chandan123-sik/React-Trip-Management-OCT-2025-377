export default function SearchFilter({
  search,
  setSearch,
  filter,
  setFilter,
  sortOption,
  setSortOption,
}) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mb-6 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition w-full max-w-5xl mx-auto">
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by destination..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded flex-1 focus:ring-2 focus:ring-blue-400 focus:outline-none transition h-12"
      />

      {/* Status Dropdown */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2 rounded w-full md:w-1/4 focus:ring-2 focus:ring-blue-400 focus:outline-none transition h-12"
      >
        <option value="">All Status</option>
        <option value="PLANNED">Planned</option>
        <option value="ONGOING">Ongoing</option>
        <option value="COMPLETED">Completed</option>
      </select>

      {/* Sort Dropdown */}
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="border p-2 rounded w-full md:w-1/4 focus:ring-2 focus:ring-blue-400 focus:outline-none transition h-12"
      >
        <option value="">Sort by</option>
        <option value="price-asc">Price ↑</option>
        <option value="price-desc">Price ↓</option>
        <option value="startDate-asc">Start Date ↑</option>
        <option value="startDate-desc">Start Date ↓</option>
      </select>
    </div>
  );
}
