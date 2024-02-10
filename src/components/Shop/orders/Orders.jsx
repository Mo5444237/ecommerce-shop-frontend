import classes from "./Orders.module.css";

import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../../services/order";
import { useState } from "react";

import Spinner from "../../UI/Spinner";
import OrderDetails from "./OrderDetails";

const Orders = () => {
  const [isActive, setIsActive] = useState("");

  const setAciveHandler = (id) => {
    if (id === isActive) {
      setIsActive('');
      return;
    }
    
    setIsActive(id);
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  let content;

  if (data) {
    content = data.orders.map((order) => {
      const date = new Date(order.orderedAt);
      const details = <OrderDetails order={order}/>
      return (
        <li
          className={`${classes.order} ${
            isActive === order._id ? classes.active : ""
            }`}
          key={order._id}
        >
          <div
            className={classes.head}
            onClick={setAciveHandler.bind(null, order._id)}
          >
            <p className={classes.id}>#{order._id}</p>
            <p>{date.toLocaleDateString()}</p>
            <p>{order.totalPrice}$</p>
          </div>
          {isActive === order._id && details }
        </li>
      );
    });
  }

  if (isError) {
    content = (
      <p className={classes.error}>
        {error.info?.message || "Something went wrong!"}
      </p>
    );
  }

  return (
    <div className={classes.container}>
      {content?.length > 0 ? (
        <ul className={classes.orders}>{content}</ul>
      ) : (
        <div className={classes.center}>
          {isPending ? <Spinner /> : "No Orders Yet."}
        </div>
      )}
    </div>
  );
};

export default Orders;
