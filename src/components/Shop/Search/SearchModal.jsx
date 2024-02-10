import Modal from "../../UI/Modal";

import classes from "./Search.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../../services/products";
import { useState } from "react";
import SearchIcon from "./SearchIcon";
import Spinner from "../../UI/Spinner";
import { Link } from "react-router-dom";
import baseUrl from "../../../services/baseUrl";

const SearchModal = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = (e) => {
    setSearchTerm((prev) => e.target.value);
  };

  const { data, isError, error, isPending } = useQuery({
    queryKey: ["products", { searchTerm }],
    queryFn: ({ signal }) =>
      fetchProducts({ signal, filters: "searchBy=" + searchTerm }),
  });

  let content;

  if (data) {
    content = data.products.map((product) => (
      <li key={product._id}>
        <img src={`${baseUrl}/${product.images[0]}`} alt="" />
        <Link to={`/products/${product._id}`} onClick={props.onHideSearch}>{product.name}</Link>
      </li>
    ));
  }

  if (isError) {
    content = <p>{error.info?.message || "Something went wrong!"}</p>;
  }

  return (
    <Modal className={classes.modal} onClose={props.onHideSearch}>
      <div className="container">
        <div
          className={`${classes["search-bar"]} ${
            searchTerm !== "" ? classes.active : ""
          }`}
        >
          <form action="">
            <input
              type="text"
              name="search"
              placeholder="Search products"
              onChange={searchHandler}
            />
            <button type="button">
              <SearchIcon />
            </button>
          </form>
        </div>
        <div className={classes.products}>
          {content?.length > 0 && searchTerm !== '' ? (
            <ul>{content}</ul>
          ) : (
            <div className={classes.center}>
              {isPending && <Spinner />}
              {!isPending && searchTerm === '' && "Enter a product name."}
              {!isPending && searchTerm !== '' && "No products matched."}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default SearchModal;
