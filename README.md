# ecommerce-shop-frontend
## Overview

This project is a React application created with Vite, featuring Redux toolkit to efficiently manage app wide states, Tanstack Query (React Query) for efficiently sending of http requests.

## Live Version 
For live version [Click Here](https://store-five-iota.vercel.app/shop)

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
  - [Src File](#src)
- [External Services](#external-services)
  - [React Router](#react-router-dom)
  - [Redux / Redux Toolkit](#redux-toolkit)
  - [Tanstack (React) Query](#tanstack-query)
  - [Stripe Integration](#stripe-integration)
- [Features](#features)
- [Contact](#contact)

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mo5444237/ecommerce-shop-frontend.git
   ```
2. Navigate to the project folder:

    ```bash
   cd ecommerce-shop-frontend
   ```
3. Install dependencies:

   ```bash
   npm install
   ```
4. Set up your environment variables:

    Make sure to set-up baseUrl inside `./services/baseUrl` file before starting the server.
    For a smooth run of this application feel free to use my backend implementation, mainly developed 
    for this project, you will find all details right [here](https://github.com/Mo5444237/ecommerce-shop-backend).
   
5. Start the application:

   ```bash
   npm run dev
   ```

## Project Structure
  
  ### src

- **assets**: Includes images used in the project.
- **components**: All the application components along with css modules.
- **hooks**: Includes custom hooks (use-input).
- **pages**: Includes the routes elements.
- **services**: Includes the logic for sending diffierent http requests.
- **store**: Includes the logic of redux (slices and actions) and thuck functions.
- **BrowserRouter**: Includes the routes for react-router provider.


## External Services

### React router dom


React Router DOM is a popular library for React applications that provides routing capabilities. 
It allows you to create single-page applications with multiple views by managing the application's URL 
and rendering different components based on the URL. 
React Router DOM is specifically designed for web applications using React.

For more please visit:

```
https://reactrouter.com/en/main
```

### Redux toolkit

Redux toolkit is utilized for store setup, creating reducers, immutable update logic, and more. 
For more informations check the official website:

```
https://redux-toolkit.js.org/
```

### Tanstack Query 

Is a library for managing, caching, synchronizing, and updating server state in React applications.
It provides hooks for fetching and updating data in a declarative way, and it offers features like 
caching, polling, and pagination out of the box. 
React Query is particularly useful for handling data fetching and synchronization in complex React applications.

For more informations check the official website:

```
https://tanstack.com/query/latest/docs/framework/react/overview
```

### Stripe Integration

Application integrates with Stripe for payment processing. 
To use this feature, make sure to set up your Stripe account and add your Stripe secret key and Stripe webhook secret key to the `.env` file in the backend repo.

## Features

- **Single Page Application (SPA)**
- **Redux and Redux toolkit for wide state managment**
- **Tanstack query capalities**
- **Stripe payement with websockets**
- **JWT authentication**
- **Resposive design**
- **Custom hooks usage**
- **Efficient cart management with redux**
- **Efficient order managment**
- **UI notifications using redux**
- **User personal data managment**
- **Search for products functionality**
- **Filtering of products functionality**
- **Smooth Pagination**
- **Smooth Usage of Modals**
- **Related items recommendations**


## Contact

Have questions or feedback? Reach out to us at:

- Email: [mo5444237@gmail.com](mailto:mo5444237@gmail.com)
- GitHub Issues: [Open an Issue](https://github.com/Mo5444237/ecommerce-shop-frontend/issues)
