import { useState } from "react";
import classes from "./Search.module.css";
import SearchIcon from "./SearchIcon";
import { useNavigate, useSearchParams } from "react-router-dom";
import CancelIcon from "../../UI/CancelIcon";

const SearchBar = ({ isSearching, ...props }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const [params] = useSearchParams();
  const navigate = useNavigate();

  
  const searchHandler = (e) => {
    e.preventDefault();

    if (searchTerm === '') {
      params.delete("searchBy");
    } else {
      params.delete('page');
      params.set("searchBy", searchTerm);
    }
    navigate(`/shop?${params.toString()}`);
  };

  return (
    <div
      className={`${classes["search-bar"]} ${
        isSearching ? classes.appeared : undefined
      }`}
    >
      <form action="">
        <input
          type="text"
          name="search"
          placeholder="Search products"
          onChange={(e) => setSearchTerm((prev) => e.target.value)}
        />
        <button onClick={searchHandler}>
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
