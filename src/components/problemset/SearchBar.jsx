import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search query:", query);
    // later: trigger search API or navigation
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full max-w-md bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-1 focus-within:ring-2 focus-within:ring-blue-500"
    >
      <Search className="text-gray-500 dark:text-gray-400 w-5 h-5 mr-2" />
      <input
        type="text"
        placeholder="Search problems..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 bg-transparent outline-none text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400"
      />
    </form>
  );
}
