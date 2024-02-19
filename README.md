# User Profile Management and Aggregation API

## Overview

This project is a RESTful API developed using Node.js and Express, designed to manage user profiles and perform sophisticated data aggregation using MongoDB. It enables CRUD operations on user profiles and aggregates data to provide insights such as the total number of users, the average age of users, and a breakdown of users by country.

## Features

- CRUD Operations: Supports creating, reading, updating, and deleting user profiles.

- Data Aggregation: Leverages MongoDB's aggregation framework to compile statistics on users, including total counts, average age, and country-based metrics.

- Secure Password Storage: Implements bcryptjs for hashing passwords before storing them in the database, ensuring user security.

- Request Logging: Includes middleware for logging details of every API request, aiding in monitoring and debugging.

## Getting Started

### Prerequisites

Before you begin, ensure you have installed:

- Node.js
- npm (Node Package Manager)
- MongoDB (locally or a cloud-based instance like MongoDB Atlas)

## Installation

1. Clone the repository

```bash
git clone https://github.com/Rajkumar-Khatua/Mongo-Aggregations.git
cd Mongo-Aggregations
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

Create a `.env` file in the root directory and define the following variables:

```bash
  PORT=3000
MONGO_CONNECTION=your_mongodb_connection_string
```

4. Start the application

```bash
npm start
```

The server will start running on http://localhost:3000.

## API Endpoints

User Profiles

- GET `/users:` Fetch all user profiles.
- POST ` /users`: Create a new user profile.
- GET `/users/:id`: Fetch a user profile by ID.
- PUT `/users/:id`: Update a user profile by ID.
- DELETE `/users/:id`: Delete a user profile by ID.

Data Aggregation

- GET `/users/stats`: Retrieve aggregated user data, including total users, average age, and a breakdown by country.

## Sample Requests

```bash
POST /users
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "age": 28,
  "country": "USA",
  "password": "password123"
}
```

To get aggregated user statistics:

```bash
GET /users/stats
```

### Sample Response

```bash
  [
    {
        "totalUsers": 18,
        "averageAgeOverall": 29.294117647058822,
        "countries": [
            {
                "country": "France",
                "users": 1,
                "averageAge": 32
            },
            {
                "country": "India",
                "users": 1,
                "averageAge": 24
            },
            {
                "country": "Brazil",
                "users": 1,
                "averageAge": 27
            },
            {
                "country": "United Arab Emirates",
                "users": 1,
                "averageAge": 29
            }
        ]
    }
]
```

## Contributing

Contributions are welcome! If you have suggestions for improving the application, please fork the repo and create a pull request or open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

## Acknowledgement

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [MDN Web Docs](https://developer.mozilla.org/en-US/): A resource for web developers.
- [Stack Overflow](https://stackoverflow.com/): A community of developers helping each other.
