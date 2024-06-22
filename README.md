# Customer Team - Home Assignment Backend

Welcome to the backend application built with Express and TypeScript for handling loan submissions and lender offers.

## Objective

Develop a tool that allows users to submit their personal and loan-related details through RESTful API endpoints. The server will process this information and provide loan offers from multiple lenders based on the submitted details.

## Backend Requirements

### Technology Stack

- Express
- TypeScript
- Nodemon
- Jest

## Installation

1. Clone the [repository](https://github.com/santos16426/driva-assignment-backend.git)
2. Navigate into the project directory
```
cd <project_folder>
```
3. Install dependencies: `npm install`

## Usage

1. Start the development server: `npm start`
2. Open [localhost:3001](http://localhost:3001)

## Testing

- Use Jest: `npm test`

## Back-End Architecture
- **Technology Stack**: Express with TypeScript.
- **Server Setup**: Configured an Express server using TypeScript for type safety and maintainability.
- **Data Handling**: Utilizes in-memory storage temporary data management.
## Endpoints:

- **GET** `/`: Test
- **GET** `/offers`: Retrieves a list of lenders.
- **POST** `/submit/:id`: Submits the loan application and returns lender offers.

- **Data Validation and Security**: Implemented using middleware:
  - **Validation**: express-validator ensures the correctness of incoming data.
  - **Sanitization**: Middleware sanitizes inputs to prevent injection attacks.
  - **Security**: Basic security practices such as input validation and sanitization are implemented to secure the application.
