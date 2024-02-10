import classes from '../components/Shop/Product/ProductDetails.module.css';

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../services/products";


import ProductDetails from "../components/Shop/Product/ProductDetails";
import Spinner from "../components/UI/Spinner";


const ProductDetailsPage = () => {
  const params = useParams();

  const { data, isError, error, isPending } = useQuery({
    queryKey: ["product", { productId: params.productId }],
    queryFn: ({ signal }) =>
      fetchProduct({ signal, productId: params.productId }),
  });

  let content;

  if (data) {
    content = <ProductDetails product={data.product} />;
  }

  if (isError) {
    throw error;
  }

  return (
    <>
      {isPending ? (
        <div className={classes.spinner}>
          <Spinner />
        </div>
      ) : (
        content
      )}
    </>
  );
};

export default ProductDetailsPage;