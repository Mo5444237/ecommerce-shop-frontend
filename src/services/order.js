import { getToken } from "../utils/auth";
import baseUrl from "./baseUrl";


export async function checkout({ shippingAddress }) {
  const response = await fetch(`${baseUrl}/shop/checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    },
    body: JSON.stringify({shippingAddress}),
    credentials: "include",
  });

  if (!response.ok) {
    const error = new Error("An error occurred during checkout");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { url } = await response.json();
  return { url };
}

export async function getOrders() {
  const response = await fetch(`${baseUrl}/shop/orders`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    },
    credentials: "include",
  });

  if (!response.ok) {
    const error = new Error("An error occurred fetching orders");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { orders } = await response.json();
  return { orders };
}

export async function getOrderDetails({ signal, orderId }) {
  const response = await fetch(`${baseUrl}/shop/orders/${orderId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    },
    credentials: "include",
  });

  if (!response.ok) {
    const error = new Error("An error occurred fetching order details");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { order } = await response.json();
  return { order };
}
