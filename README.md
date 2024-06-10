# Expense Management System

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Expense Management System is a web application designed to help users track and manage their expenses. Users can add, view, edit, and delete expense entries, making it easy to keep an eye on their spending habits and financial status.

## Features

- Add new expenses with description, amount, and date.
- View a list of all expenses.
- Edit existing expenses.
- Delete expenses.
- Responsive design for mobile and desktop use.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MySQL
- **Others**: Axios, Cors, Body-Parser, Dotenv

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js (https://nodejs.org/)
- MySQL (https://www.mysql.com/downloads/)
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/CodinJack/Expensify.git
   cd Expensify
   ```

2. **Backend setup:**
   ```sh
   cd backend
   npm install
   ```

3. **Frontend setup:**
   ```sh
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Configure Environment Variables:**

   Create a `.env` file in the `backend` directory and add the following:
   ```env
   DB_HOST=localhost
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_NAME=expense_db
   PORT=5000
   ```

2. **Start the MySQL server and create the database:**
   ```sql
   CREATE DATABASE expense_db;
   USE expense_db;

   CREATE TABLE expenses (
     id INT AUTO_INCREMENT PRIMARY KEY,
     description VARCHAR(255) NOT NULL,
     amount DECIMAL(10, 2) NOT NULL,
     date DATE NOT NULL
   );
   ```

3. **Run the backend server:**
   ```sh
   cd backend
   npm run dev
   ```

4. **Run the frontend development server:**
   ```sh
   cd ../frontend
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
expense-management-system/
├── backend/
│   ├── app.js
│   ├── config/
│   │   └── db.config.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
├── .gitignore
├── README.md
└── package.json
```

## API Endpoints

- **GET /expenses**: Retrieve all expenses
- **POST /expenses**: Add a new expense
  - Request body: `{ "description": "string", "amount": "number", "date": "YYYY-MM-DD" }`
- **PUT /expenses/:id**: Update an expense
  - Request body: `{ "description": "string", "amount": "number", "date": "YYYY-MM-DD" }`
- **DELETE /expenses/:id**: Delete an expense

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or new features to add.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/YourFeature`)
3. Commit your Changes (`git commit -m 'Add some feature'`)
4. Push to the Branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
