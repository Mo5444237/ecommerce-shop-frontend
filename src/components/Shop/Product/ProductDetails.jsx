import classes from './ProductDetails.module.css';

import ProductForm from "./ProductForm";
import RelatedProducts from './RelatedProducts';

const ProductDetails = ({product, ...props}) => {
    return (
        <div className={classes.container}>
            <ProductForm product={product} />
            <RelatedProducts category={product.category} subCategory={product.subCategory}/>
        </div>
    );
}

export default ProductDetails;