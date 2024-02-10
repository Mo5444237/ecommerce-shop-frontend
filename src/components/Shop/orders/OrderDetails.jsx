import classes from "./OrderDetials.module.css";

import baseUrl from "../../../services/baseUrl";

const OrderDetails = ({ order }) => {
  const items = order.items.map((item) => (
    <div key={item._id} className={classes["item-card"]}>
      <div className={classes.img}>
        <img
          src={`${baseUrl}/` + item.productId.images[0]}
          alt="product image"
        />
      </div>
      <div className={classes.item}>
        <p>{item.productId.name}</p>
        <div className={classes.flex}>
          <p>Quantity:</p>
          <p>{item.quantity}</p>
        </div>
        <div className={classes.flex}>
          <p>Size:</p>
          <p>{item.size}</p>
        </div>
        <div className={classes.flex}>
          <p>Color:</p>
          <p>{item.color.name}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className={classes["order-details"]}>
      <div className={classes["shipping-data"]}>
        <p className={classes.title}>Shipping Info</p>
        <div className={classes.flex}>
          <p>Address-1:</p>
          <p>{order.shippingAddress?.address1}</p>
        </div>
        <div className={classes.flex}>
          <p>Address-2:</p>
          <p>{order.shippingAddress?.address2 || "none"}</p>
        </div>
        <div className={classes.flex}>
          <p>City:</p>
          <p>{order.shippingAddress?.city}</p>
        </div>
        <div className={classes.flex}>
          <p>PostalCode:</p>
          <p>{order.shippingAddress?.postalCode}</p>
        </div>
      </div>
      <div className={classes.items}>
        <p className={classes.title}>Items</p>
        {items}
      </div>
      <div className={classes.total}>
        <p className={classes.title}>Payment</p>
        <div className={classes.flex}>
          <p>Total Price:</p>
          <p>{order.totalPrice}</p>
        </div>
        <div className={classes.flex}>
          <p>Status: </p>
          <p>{order.isPaid ? "Paid" : "Unpaid"}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
