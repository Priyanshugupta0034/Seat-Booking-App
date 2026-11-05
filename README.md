# 🎟️ Seat Booking App

A full-stack web application that lets users view, select, and reserve seats in real time. It prevents double bookings with seat locking and gives organizers a dashboard to manage venues, bookings, and revenue.

## 🚀 Features

### User
- Sign up and login (email / phone OTP)
- Interactive seat map with live availability
- Search and filter by date, time, location, and price
- Secure online payments
- Instant e-ticket with QR code
- Booking history and cancellation

### Admin
- Create and manage venues, events, or routes
- Custom seat layouts and pricing tiers
- Booking management and analytics dashboard

### System
- Seat locking during checkout to prevent double booking
- Real-time seat updates using WebSockets
- Role-based access control

## 🛠️ Tech Stack

| Layer      | Technology                    |
|------------|-------------------------------|
| Frontend   | React.js, Tailwind CSS        |
| Backend    | Node.js, Express.js           |
| Database   | MongoDB                       |
| Real-time  | Socket.io                     |
| Payments   | Razorpay / Stripe             |
| Auth       | JWT                           |

## 📂 Project Structure

```
seat-booking-app/
├── client/        # React frontend
├── server/        # Node.js backend
├── .env.example
└── README.md
```

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/[your-username]/seat-booking-app.git
cd seat-booking-app

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

### Environment Variables

Create a `.env` file in the `server` folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
```

### Run the App

```bash
# Start backend
cd server
npm run dev

# Start frontend
cd client
npm start
```

## 📸 Screenshots

_Add screenshots of the seat map, booking page, and admin dashboard here._

## 🔮 Future Scope

- AI-based seat recommendations and dynamic pricing
- Waitlist and group booking
- Multi-language support
- Discount coupons and loyalty points
- Calendar and maps integration

## 🤝 Contributing

Contributions are welcome. Fork the repo, create a feature branch, and open a pull request.

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

[Priyanshu Gupta]
GitHub: [Priyanshugupta0034]
