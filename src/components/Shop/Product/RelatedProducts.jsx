import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../../services/products";
import { Link, useNavigate, useParams } from "react-router-dom";

import classes from "./RelatedProducts.module.css";
import baseUrl from "../../../services/baseUrl";

const RelatedProducts = ({ category, subCategory, ...props }) => {
  const params = useParams();
  const navigate = useNavigate();

  const { data, error, isError, isPending } = useQuery({
    queryKey: [
      "products",
      { filter: `category=${category}&subCategory=${subCategory}` },
    ],
    queryFn: ({ signal }) =>
      fetchProducts({
        signal,
        filters: `category=${category}&subCategory=${subCategory}`,
      }),
  });

  let content;

  if (data) {
    content = data.products.map(
      (product) =>
        product._id !== params.productId && (
          <div className={classes.product} key={product._id}>
            <div className={classes["product-img"]}>
              <img
                src={`${baseUrl}/${product.images[0]}`}
                alt={product.name + " - image"}
              />
            </div>
            <div className={classes["product-details"]}>
              <Link to={`/products/${product._id}`} reloadDocument>
                {product.name}
              </Link>
              <p>{product.description}</p>
              <p>{product.price} $</p>
            </div>
          </div>
        )
    );
  }

  if (isError) {
    content = <p className={classes.center}>{error.info?.message}</p>;
    console.log(error)
  }

  return (
    <div className={classes["products-container"]}>
      <h2 className={classes.title}>Related items</h2>
      <div className={classes.products}>{content}</div>
      {content?.length === 1 && <p className={classes.center}>No products found</p>}
    </div>
  );
};

export default RelatedProducts;
