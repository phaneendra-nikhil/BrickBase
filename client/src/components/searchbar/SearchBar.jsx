import { useState } from "react";
import "./SearchBar.scss";

const types = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 10000000,
  });
  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="Enter City" />
        <input
          type="number"
          placeholder="Min Price"
          min={0}
          max={10000000}
          name="minPrice"
        />
        <input
          type="number"
          placeholder="Max Price"
          min={0}
          max={10000000}
          name="maxPrice"
        />
        <button>
          <img src="/search.png" alt="Search" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
