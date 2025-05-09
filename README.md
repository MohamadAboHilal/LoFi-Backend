# LoFi-Backend

A Node.js backend service for managing LoFi music content, built with Express.js and MongoDB.

## Features

- **RESTful API**: Provides endpoints for managing LoFi tracks and related data.
- **Modular Architecture**: Organized using controllers, models, routes, and middlewares for scalability and maintainability.
- **MongoDB Integration**: Utilizes Mongoose for seamless interaction with the MongoDB database.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MohamadAboHilal/LoFi-Backend.git
   cd LoFi-Backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Start the server:**

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`.

## Project Structure

```
LoFi-Backend/
├── controllers/    # Handle request logic
├── middlewares/    # Custom middleware functions
├── models/         # Mongoose schemas and models
├── routes/         # API route definitions
├── server.js       # Entry point of the application
├── package.json    # Project metadata and scripts
└── .gitignore      # Files and directories to ignore in Git
```

## API Endpoints

- `GET /tracks` - Retrieve all LoFi tracks
- `POST /tracks` - Add a new LoFi track
- `GET /tracks/:id` - Retrieve a specific track by ID
- `PUT /tracks/:id` - Update a track by ID
- `DELETE /tracks/:id` - Delete a track by ID

> *(Note: Replace `/tracks` with the actual route if different.)*

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.
