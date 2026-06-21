import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="order-3 w-full sm:order-0 sm:w-auto"
    >
      <input
        placeholder="Search order..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-full border border-stone-200 bg-stone-100/80 px-4 py-2.5 text-sm font-medium text-stone-900 shadow-inner shadow-stone-200/50 transition-all duration-200 placeholder:text-stone-500 hover:bg-white focus:w-full focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-200/70 focus:outline-none sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
