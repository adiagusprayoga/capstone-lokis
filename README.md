Certainly! Here's a basic documentation for your Express.js application:

---

# Location API Documentation

## Overview

The Location API provides information about different locations, including details such as city, category, rating, price, and name. The data is stored in a JSON file named `data.json`.

## Base URL

```
http://localhost:3000
```

## Endpoints

### 1. Get All Locations

#### Endpoint

```
GET /location
```

#### Description

Retrieve information about all locations.

#### Response

```json
[
  {
    "city": "City1",
    "category": "Category1",
    "rating": 4,
    "price": 50,
    "name": "Location1"
  },
  // ... (more locations)
]
```

### 2. Get Locations by City

#### Endpoint

```
GET /location/city=:city
```

#### Parameters

- `city` (string): The name of the city.

#### Description

Retrieve locations based on the specified city.

#### Response

```json
[
  {
    "city": "City1",
    "category": "Category1",
    "rating": 4,
    "price": 50,
    "name": "Location1"
  },
  // ... (more locations)
]
```

### 3. Get Locations by Category

#### Endpoint

```
GET /location/category=:category
```

#### Parameters

- `category` (string): The category of the location.

#### Description

Retrieve locations based on the specified category.

#### Response

```json
[
  {
    "city": "City1",
    "category": "Category1",
    "rating": 4,
    "price": 50,
    "name": "Location1"
  },
  // ... (more locations)
]
```

### 4. Get Locations by Rating

#### Endpoint

```
GET /location/rating=:rating
```

#### Parameters

- `rating` (number): The rating of the location.

#### Description

Retrieve locations based on the specified rating.

#### Response

```json
[
  {
    "city": "City1",
    "category": "Category1",
    "rating": 4,
    "price": 50,
    "name": "Location1"
  },
  // ... (more locations)
]
```

### 5. Get Locations by Price

#### Endpoint

```
GET /location/price=:price
```

#### Parameters

- `price` (number): The price of the location.

#### Description

Retrieve locations based on the specified price.

#### Response

```json
[
  {
    "city": "City1",
    "category": "Category1",
    "rating": 4,
    "price": 50,
    "name": "Location1"
  },
  // ... (more locations)
]
```

### 6. Get Locations by Name

#### Endpoint

```
GET /location/name=:name
```

#### Parameters

- `name` (string): The name of the location.

#### Description

Retrieve locations based on the specified name.

#### Response

```json
[
  {
    "city": "City1",
    "category": "Category1",
    "rating": 4,
    "price": 50,
    "name": "Location1"
  }
]
```

### 7. Get Locations by City and Rating

#### Endpoint

```
GET /location/city=:city&rating=:rating
```

#### Parameters

- `city` (string): The name of the city.
- `rating` (number): The rating of the location.

#### Description

Retrieve locations based on the specified city and rating.

#### Response

```json
[
  {
    "city": "City1",
    "category": "Category1",
    "rating": 4,
    "price": 50,
    "name": "Location1"
  }
]
```

### 8. Get Locations by City and Category

#### Endpoint

```
GET /location/city=:city&category=:category
```

#### Parameters

- `city` (string): The name of the city.
- `category` (string): The category of the location.

#### Description

Retrieve locations based on the specified city and category.

#### Response

```json
[
  {
    "city": "City1",
    "category": "Category1",
    "rating": 4,
    "price": 50,
    "name": "Location1"
  }
]
```

## Running the Server

To run the server, execute the following command:

```bash
node your-app-file.js
```

Replace `your-app-file.js` with the filename where your Express.js application is defined.

The server will be running on port 3000, and you can access the API using the specified endpoints.
