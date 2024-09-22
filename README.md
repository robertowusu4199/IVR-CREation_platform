# IVR Creation Platform (NestJS, TypeScript)

This project implements the backend of an IVR (Interactive Voice Response) creation platform, allowing users to create, update, delete, retrieve, and simulate IVR flows. The platform is built using **NestJS**, **TypeScript**, and **Prisma** with **PostgreSQL** as the database.

## Features
- Create IVR flows with dynamic steps (Play Message, Menu, Transfer Call, Record Voicemail).
- Update, retrieve, and delete IVR flows.
- Simulate IVR flows, logging each step.
- Support for conditional logic (e.g., menu options).
- Flow versioning (multiple versions of the same IVR flow).
- JWT authentication to secure endpoints.
- Pagination and filtering when retrieving IVR flows.
- Unit tests for services and controllers using Jest.

---

## Requirements

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (version 14.x, 16.x, or 18.x)
- [PostgreSQL](https://www.postgresql.org/download/) (running locally or on a server)
- [Prisma CLI](https://www.prisma.io/docs/getting-started)

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ivr-platform.git
cd ivr-platform


#Install Dependencies
Install the required packages by running:
npm install


#Configure the Environment
You need to configure the connection to your PostgreSQL database. Create a .env file in the root directory based on the provided .env.example file: 
cp .env.example .env

Open the .env file and configure your PostgreSQL connection details:
DATABASE_URL="postgresql://<USERNAME>:<PASSWORD>@localhost:5432/<DATABASE_NAME>"
JWT_SECRET="secret_code_key"

Replace the following placeholders:
<USERNAME>: Your PostgreSQL username.
<PASSWORD>: Your PostgreSQL password.
<DATABASE_NAME>: The name of your database.


#Set Up the Database
After configuring the .env file, run Prisma to set up your database schema and generate the Prisma client:
npx prisma migrate dev --name init
npx prisma generate

This will create the necessary tables in your PostgreSQL database and generate the Prisma client to interact with the database.


#Running the Application
To start the application in development mode:
npm run start:dev
The API will be available at http://localhost:3000.


#TestingUnit tests are implemented using Jest. To run the tests, use the following command:
npm run test
You can also run tests in watch mode for continuous testing:
npm run test:watch


#API Endpoints
Here is a summary of the available API endpoints:

Create IVR Flow
POST /api/ivr-flows
Request Body:
{
  "flowName": "Customer Service Flow",
  "steps": [
    { "type": "PlayMessage", "message": "Welcome to our service" },
    { "type": "Menu", "options": { "1": "Sales", "2": "Support" } }
  ]
}

Retrieve IVR Flow
GET /api/ivr-flows/:id

Update IVR Flow
PUT /api/ivr-flows/:id

Delete IVR Flow
DELETE /api/ivr-flows/:id

Simulate IVR Flow
POST /api/ivr-flows/:id/simulate

Retrieve All IVR Flows with Pagination and Filtering
GET /api/ivr-flows?page=1&limit=10&name=Customer%20Service


#Authentication 
All endpoints are secured using JWT authentication. You need to authenticate and provide a token in the Authorization header for requests.

Example of an Authorization Header:
Authorization: Bearer <your_token>


Folder StructureThe project is structured as follows:
src/
 ├── auth/ # Authentication module (JWT strategy)
 ├── ivr-flow/ # IVR flow module (DTOs, controller, service)
 │ ├── dto/ # Data transfer objects for creating/updating flows
 │ ├── entities/ # Entities representing IVR flows
 ├── prisma/ # Prisma service to interact with the database
 ├── app.module.ts # Main application module
 ├── main.ts # Main entry point for the NestJS application
 
 
 Advanced Features
 
 Conditional Logic
 
 The IVR flows support conditional logic for menu options. For example:
 
 If the user selects option "1", it will log the respective action.
 
 Menu options are simulated in the /simulate endpoint.
 
 Flow Versioning
 The application supports multiple versions of the same IVR flow. Each new flow creation increments the version number.
 
 Pagination and FilteringWhen retrieving IVR flows, pagination and filtering are supported via query parameters (e.g., page, limit, and name).
 
 Contributing
 If you would like to contribute to this project, please submit a pull request with clear documentation of your changes.
 
 License
 This project is licensed under the MIT License.
 ---

### Instructions:
1. **Copy** this content.
2. **Create** a file called `README.md` in the root directory of your project.
3. **Paste** the copied content into the file.
4. **Save** the file.

With this approach, the full `README.md` includes setup instructions, API details, folder structure, advanced features, and contribution guidelines all in one file. Let me know if you need anything else!