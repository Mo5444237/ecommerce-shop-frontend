import Slider from "../UI/ProductSlider";
import classes from "./NewArrivals.module.css";

import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../services/products";
import { Link } from "react-router-dom";

import Product from "./Product/Product";
import Button from "../UI/Button";


const NewArrivals = () => {
  const { data } = useQuery({
    queryKey: ["products", { tags: "new-arrivals" }],
    queryFn: ({ signal }) =>
      fetchProducts({ signal, filters: "&tags=new-arrivals" }),
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

  return (
    <section className={classes.container}>
      <h1 className={classes.title}>New Arrivals</h1>
      <div className={classes["slider-container"]}>
        <Slider className={classes.slider}>{content}</Slider>
      </div>
      <div className={classes.actions}>
        <Link to={'/shop'}>
          <Button title="Discover all" />
        </Link>
      </div>
    </section>
  );
};

export default NewArrivals;
