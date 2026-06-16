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
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-lg bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-600 focus:ring focus:outline-none sm:w-65 sm:focus:w-70"
      />
    </form>
  );
}

export default SearchOrder;
