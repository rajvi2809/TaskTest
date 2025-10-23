TaskTest E-Commerce Platform
Overview

TaskTest is an e-commerce app with:

User registration/login (JWT)

Browse products with search/filter

Add/update/remove items in cart

Complete checkout and view order history

Admin dashboard for managing products/orders

Responsive design for desktop and mobile

Tech Stack

Backend: Node.js, Express, PostgreSQL (products/orders), MongoDB (users/auth), JWT, bcryptjs, cors, dotenv, express-validator
Frontend: React, Redux Toolkit, React Router, Axios, js-cookie, react-hot-toast, Vite

Backend Setup

Clone the repo

Go to backend folder: cd TaskTest-main/backend

Install dependencies: npm install

Create a .env file with variables like:

PORT=5000
JWT_SECRET=db44fe8d0efaa1469874631b91fb0cf88709961a088971c955af6b1103086418
POSTGRES_URL=postgresql://postgres:Rajvi%402003@db.hoeciiyhcvitcbqlihfi.supabase.co:5432/postgres
MONGODB_URI=mongodb+srv://202412079_db_user:QSJz9fbu3pZIpemu@ecommerce.qmepuj5.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce
NODE_ENV=development
Frontend Setup


Install dependencies: npm install


VITE_API_URL=http://localhost:5000/api


Run frontend: npm run dev

Run backend: npm start

for Admin login:-
email=admin@example.com
password=Admin@123
