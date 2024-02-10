import { getToken } from "../utils/auth";
import baseUrl from "./baseUrl";


export async function login(userData) {
  const response = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
    credentials: "include",
  });

  if (!response.ok) {
    const error = new Error("An error occurred while logging in.");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  const { user, token } = await response.json();
  return { user, token };
}

export async function signup(userData) {
  const response = await fetch(`${baseUrl}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
    credentials: "include",
  });

  if (!response.ok) {
    const error = new Error("An error occurred while Sign-up.");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return await response.json();
}

export async function logout() {
  const response = await fetch(`${baseUrl}/auth/logout`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    },
    credentials: "include",
  });

  if (!response.ok) {
    const error = new Error("An error occurred while Logging-out.");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return await response.json();
}

export async function getProfile() {
  const response = await fetch(`${baseUrl}/auth/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    },
    credentials: "include",
  });

  if (!response.ok) {
    const error = new Error("Could fetch user data");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { user } = await response.json();

  return user;
}

export async function getRefreshToken() {
  const response = await fetch(`${baseUrl}/auth/refresh-token`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    const error = new Error("Could get refresh token");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const {token} = await response.json();
    localStorage.setItem("token", token);
  
  return token;
}
