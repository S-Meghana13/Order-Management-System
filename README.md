

# 📦 Order Management System

A full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** based **Order Management System** that enables users to securely register, log in, create orders with invoice PDFs, and receive confirmation emails. Built with a responsive Bootstrap UI and toast notifications for seamless user interaction.

---

## 📌 Key Features

### 🔐 Authentication
- User Sign Up & Sign In
- JWT-based session management
- Toastify-based real-time feedback for login/signup

### 📋 Order Management
- ✅ Create orders with:
  - Customer Name
  - Auto-filled Email (from logged-in user)
  - Delivery Address
  - Order Amount
  - Upload Invoice (PDF only)
- 📥 Store invoices securely in **Cloudinary**
- 📧 Send confirmation email on successful order creation
- 📜 View list of all orders by the current user
- 🔍 Fetch order details by order ID

### 🎨 UI & UX
- Clean Bootstrap 5 interface
- Sidebar-based dashboard layout
- Fully mobile responsive design
- Smooth toast notifications

---

## 🛠️ Tech Stack

| Layer       | Technologies                                  |
|-------------|-----------------------------------------------|
| **Frontend** | React.js, React Router, Bootstrap, Axios, Toastify |
| **Backend**  | Node.js, Express.js, Mongoose                |
| **Database** | MongoDB Atlas                                |
| **Uploads**  | Cloudinary (for invoice PDFs)                |
| **Email**    | Nodemailer (Gmail SMTP with App Password)    |
| **Auth**     | JSON Web Tokens (JWT)                        |

---

## 📂 Folder Structure

Order-Management-System/
├── order-frontend/
│ ├── components/
│ │ ├── Signin.jsx
│ │ ├── Signup.jsx
│ │ ├── CreateOrder.jsx
│ │ ├── OrderList.jsx
│ │ ├── OrderById.jsx
│ │ ├── Home.jsx
│ │ └── Dashboard.jsx
│ └── App.js

├── order-service/
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ ├── utils/
│ └── app.js


---

## 🚀 Getting Started

### 🔧 1. Backend Setup

```bash
cd order-service
npm install
node app.js

🎯 2. Frontend Setup

cd order-frontend
npm install
npm start

    App runs at: http://localhost:3000

💼 Order Workflow

    User logs in or signs up

    Navigates to Create Order

    Fills in order form & uploads PDF invoice

    Invoice is uploaded to Cloudinary

    Order is saved in MongoDB

    Confirmation email is sent to the signed-in user

    Order becomes visible in the Order List

👤 Dashboard Features

    🧾 Create Order

    📄 View All Orders

    🔍 Search by Order ID

    🚪 Logout

🚀 Deployment

    Frontend deployed on Vercel

    Backend deployed on Render

    Use environment variables for API URL (e.g., REACT_APP_API_BASE_URL)

🔮 Future Enhancements

    🛡️ Admin role with advanced access

    💳 Real payment gateway integration

    📆 Date filtering, order status tracking

    🎨 Custom email templates with brand styling

🤝 Contributing

Pull requests are welcome!
Fork the repo → create a feature branch → commit → open a PR.
