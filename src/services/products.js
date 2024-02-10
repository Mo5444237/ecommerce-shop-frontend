import { QueryClient } from '@tanstack/react-query'
import baseUrl from './baseUrl';


export const queryClient = new QueryClient();

export async function fetchProducts({ signal, filters }) {
  let url = `${baseUrl}/shop/products?${filters}`;

  const response = await fetch(url, { signal });

  if (!response.ok) {
    const error = new Error("An error occurred while fetching products");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { products, totalNumberOfProducts, numberOfPages, currentPage } = await response.json();

  return { products, totalNumberOfProducts, numberOfPages, currentPage };
}

export async function fetchProduct({ signal, productId }) {
  let url = `${baseUrl}/shop/product/${productId}`;

  const response = await fetch(url, { signal });

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the product");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { product } = await response.json();
  return {product};
}
