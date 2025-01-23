# TodoApp

A simple task management application built with **React**, **Node.js**, and **MongoDB**. Users can add tasks, mark them as done, and delete them.

---

## Features

- Add new tasks.
- View all tasks.
- Mark tasks as done.
- Delete tasks.

---

## Prerequisites

Make sure you have the following installed:

1. **Node.js**: [Download Node.js](https://nodejs.org)
2. **MongoDB**: [Download MongoDB](https://www.mongodb.com/try/download/community) and ensure it's running locally or use a cloud database (e.g., MongoDB Atlas).
3. **Git**: [Download Git](https://git-scm.com)

---

## Installation Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/alibouajila/Todoapp.git
   cd Todoapp
   ```

2. **Install Backend Dependencies**

   ```bash
   cd server
   npm install
   ```

3. **Install Frontend Dependencies**

   ```bash
   cd ../client
   npm install
   ```

---

## Configuration

1. **Set Up MongoDB**

   - Ensure MongoDB is running locally, or replace the connection string in `server/server.js` with your MongoDB connection string.

   Example for a local database:

   ```javascript
   mongoose.connect("mongodb://localhost:27017/taskmanager");
   ```

   Example for MongoDB Atlas:

   ```javascript
   mongoose.connect("your-mongodb-atlas-connection-string");
   ```

2. **Start the Backend Server**

   ```bash
   cd server
   npm start
   ```

   The backend server will run on `http://localhost:3001`.

3. **Start the Frontend**

   ```bash
   cd ../client
   npm start
   ```

   The frontend will run on `http://localhost:3000`.

---

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Add tasks using the input field and "Add" button.
3. Mark tasks as done using the ✅ icon.
4. Delete tasks using the 🗑️ icon.

---

## Folder Structure

```
Todoapp/
├── client/           # Frontend code (React)
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
├── server/           # Backend code (Node.js)
│   ├── models/
│   ├── server.js
│   ├── package.json
│   └── ...
├── README.md
└── ...
```
---

## Screenshots

![image](https://github.com/user-attachments/assets/dcee54a3-77e9-47a6-b88c-d59f6e3534a4)


## License

This project is licensed under the MIT License.
