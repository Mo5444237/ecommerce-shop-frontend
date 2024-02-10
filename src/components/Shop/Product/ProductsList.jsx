import classes from "./ProductsList.module.css";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { fetchProducts } from "../../../services/products";

import Product from "./Product";
import Spinner from "../../UI/Spinner";
import Pagination from "../Pagination/Pagination";
import ShopControllers from "../ShopControllers";

const ProductsList = (props) => {
  const [params] = useSearchParams();

  let filters = params.toString();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products", { filters }],
    queryFn: ({ signal }) => fetchProducts({ signal, filters }),
  });

  let content;

  if (data) {
    content = data.products.map((product) => (
      <Product
        className={classes["image-container"]}
        key={product._id}
        product={{ ...product }}
      />
    ));
  }

  if (isError) {
    content = <p>{error.info?.message || "Something went wrong!"}</p>;
  }

  return (
    <div className={classes.container}>
      <div>
        <ShopControllers />
      </div>

      {content?.length > 0 ? (
        <div className={classes.products}>{content}</div>
      ) : (
        <div className={classes.center}>
          {isPending ? <Spinner /> : "No products found."}
        </div>
      )}

      <Pagination currentPage={data?.currentPage} numberOfPages={data?.numberOfPages}/>
    </div>
  );
};

export default ProductsList;
