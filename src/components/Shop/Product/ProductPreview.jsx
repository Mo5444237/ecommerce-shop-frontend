import classes from "./ProductPreview.module.css";

import { Link } from "react-router-dom";

import Modal from "../../UI/Modal";
import ProductForm from "./ProductForm";
import CancelIcon from "../../UI/CancelIcon";

const ProductPreview = ({ product, ...props }) => {
  return (
    <Modal className={classes.modal} onClose={props.onHideProduct}>
      <ProductForm product={product}>
        <CancelIcon onClick={props.onHideProduct} className={classes.cancel} />
        <Link to={`/products/${product._id}`}>View full details</Link>
      </ProductForm>
    </Modal>
  );
};

export default ProductPreview;
