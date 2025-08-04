# 📦 Order Management System

A full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** based **Order Management System** that allows users to register, log in, create orders with invoice PDFs, and receive confirmation emails — all through a clean Bootstrap interface and responsive.

---

## 📌 Key Features

### 🔐 Authentication
- Secure Sign Up & Sign In
- JWT-based user sessions
- Toast notifications for actions

### 📋 Order Handling
- Create new orders with:
  - Customer Name
  - Email (pre-filled from logged-in user)
  - Delivery Address
  - Order Amount
  - Invoice file (PDF only)
- View list of orders (only of logged-in user)
- Search for an order by ID
- Uploads stored securely in Cloudinary
- Confirmation email sent automatically


### 🎨 Modern UI
- Bootstrap layout
- Sidebar-based navigation
- Toastify notifications
- Responsiveness

---

## 🛠️ Tech Stack

| Layer       | Technologies                         |
|-------------|--------------------------------------|
| Frontend    | React.js, React Router, Bootstrap, Axios, Toastify |
| Backend     | Node.js, Express.js, Mongoose        |
| Database    | MongoDB Atlas                        |
| File Upload | Cloudinary (for PDF invoices)        |
| Email       | Nodemailer with Gmail SMTP           |
| Auth        | JSON Web Token (JWT)                 |

---

## 📂 Project Structure

Order-Management-System/
├── order-frontend/
│ └── components/
│ ├── Signin.jsx
│ ├── Signup.jsx
│ ├── CreateOrder.jsx
│ ├── OrderList.jsx
│ ├── GetOrderById.jsx
│ ├── Home.jsx
│ └── Dashboard.jsx
│ └── App.js
│
├── order-service/
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ ├── utils/
│ └── app.js


---

## 🚀 Getting Started

### 1️⃣ Backend Setup

```bash
cd order-service
npm install
node app.js

2️⃣ Frontend Setup

cd order-frontend
npm install
npm start

App will be available at: http://localhost:3000
💼 Order Flow

    User signs in

    Navigates to Create Order

    Fills in order details + uploads a PDF invoice

    Invoice is uploaded to Cloudinary

    Order is saved to MongoDB

    Confirmation email is sent to the signed-in user

    Order appears in the user’s Order List

🔒 User Dashboard

    🧾 Create New Order

    📜 View All Orders

    🔍 Search Order by ID

    🚪 Logout

🔮 Future Enhancements

    Admin role with user management

    Real payment integration

    Date filtering and order status updates

    Email templating with branding

🤝 Contributing

Contributions are welcome!
Fork the repo, create a new branch, and raise a pull request.