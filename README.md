📁 Project Structure
# This project follows the MVC (Model-View-Controller) pattern to ensure scalability and clean code separation.

## VENDIFY/
  ├── controllers/          # Business logic & Request handling
  │   ├── authController.js     # User registration & Login logic
  │   ├── cartController.js     # Shopping cart operations
  │   ├── categoryController.js # Product categorization logic
  │   ├── otpController.js      # Email/Phone verification logic
  │   ├── productController.js  # CRUD operations for products
  │   └── userController.js     # Profile management
  ├── db/                   # Database configuration
  │   └── db.js                 # MongoDB connection setup via Mongoose
  ├── lib/                  # Utilities & Third-party services
  │   └── mailService.js        # Nodemailer / Email configuration
  ├── middlewares/          # Custom Express middlewares
  │   ├── adminMiddleware.js    # Protects admin-only routes
  │   └── authMiddleware.js     # Verifies JWT tokens for logged-in users
  ├── routers/              # API Route definitions
  │   ├── authRouter.js         # /api/auth routes
  │   ├── cartRouter.js         # /api/cart routes
  │   ├── productRouter.js      # /api/products routes
  │   └── ...                   # (Other routers)
  ├── schema/               # Mongoose Models (Data Blueprints)
  │   ├── cartSchema.js
  │   ├── productSchema.js
  │   └── userSchema.js
  ├── .env                  # Environment variables (Private!)
  ├── .gitignore            # Files excluded from GitHub (node_modules, .env)
  ├── package.json          # Dependencies & Scripts
  └── server.js             # Main entry point of the application
  
🚀 Getting Started
1. Prerequisites
Node.js (v18+ recommended)

MongoDB (Atlas or Local)

2. Installation
Clone the repository and install dependencies:

Bash
git clone https://github.com/Ayomidejames/Vendify.git
cd Vendify
npm install
3. Environment Setup
Create a .env file in the root directory and add:

Code snippet
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_email
EMAIL_PASS=your_password
4. Running the App
Bash
# Development mode (with nodemon)
npm run app

# Production mode
npm start
🛠️ Key Technologies
Backend: Node.js, Express.js

Database: MongoDB with Mongoose ODM

Security: JWT (JSON Web Tokens), Bcrypt.js

Validation: Express-validator

Hosting: Render
