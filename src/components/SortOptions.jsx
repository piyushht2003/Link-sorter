export default function SortOptions({ onSort }) {
  return (
    <div className="mt-4 flex gap-3">
      <button
        onClick={() => onSort("alphabetical")}
        className="bg-green-600 px-4 py-2 rounded-lg text-white hover:bg-green-300"
      >
        Sort A–Z
      </button>
      <button
        onClick={() => onSort("domain")}
        className="bg-green-600 px-4 py-2 rounded-lg text-white hover:bg-green-300"
      >
        Sort by Domain
      </button>
    </div>
  );
}
