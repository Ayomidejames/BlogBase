# BlogBase: A Secure Full-Stack Blogging Ecosystem
BlogBase is a robust backend API built with the MERN stack (MongoDB, Express.js, Node.js) designed to provide a seamless and secure blogging experience. It features a complete user authentication system, role-based access control, and a relational-style interaction system for posts and comments.


## 🚀 Key Features

- Secure Authentication: User registration and login powered by JWT (JSON Web Tokens) and Bcrypt for password hashing.
- OTP Verification: Integrated email service that sends One-Time Passwords for account activation upon sign-up.
- Role-Based Access Control (RBAC): Distinct permissions for Regular Users, Admins, and SuperAdmins, ensuring platform integrity and moderation capabilities.
- Full CRUD Functionality: 
    * Posts: Users can create, read, update, and delete their own blog content.
    
    * Comments: Dynamic commenting system allowing users to engage with posts, with real-time updates to the parent post document.
- Data Integrity: Implements advanced MongoDB logic such as $push and $pull operators to manage relationships between users, posts, and comments.


## 📁 Project Structure

```BlogBase/
│
├── 📂 controllers/            # Maps requests to logic
│   ├── 📄 authController.js     # User registration and login
│   ├── 📄 commentController.js  # Comment CRUD and sync logic
│   ├── 📄 otpController.js      # Verify account with OTP
│   ├── 📄 postController.js     # Blog CRUD and authorization
│   └── 📄 userController.js     # Role and profile management
│
├── 📂 lib/                    # Utility logic
│   └── 📄 mailService.js        # Config for OTP email sending
│
├── 📂 middlewares/            # Request "gatekeepers"
│   ├── 📄 adminMiddleware.js    # Checks for SuperAdmin role
│   └── 📄 authMiddleware.js     # JWT verification
│
├── 📂 mongoDB/                # Database connection
│   └── 📄 db.js                 # Connects mongoose to MongoDB
│
├── 📂 routers/                # API Endpoints definition
│   ├── 📄 authRouter.js
│   ├── 📄 commentRouter.js
│   ├── 📄 otpRouter.js
│   ├── 📄 postRouter.js
│   └── 📄 userRouter.js
│
├── 📂 schema/                 # Mongoose Data Models
│   ├── 📄 commentSchema.js
│   ├── 📄 postSchema.js
│   └── 📄 userSchema.js
│
├── 📄 .gitignore              # Files to ignore (e.g., .env)
├── 📄 package-lock.json       # Exact versions of dependencies
├── 📄 package.json            # Scripts, dependencies, and metadata
├── 📄 README.md               # Project documentation
└── 📄 server.js               # Entry point for the application
```
To ensure scalability, the project follows the MVC (Model-View-Controller) pattern:

* **models/:** Defines the database schemas for Users, Posts, and Comments.

* **controllers/:** Contains the core logic for handling requests and permissions.

* **routes/:** Maps API endpoints to their respective controllers.

* **middleware/:** Handles security "gatekeeping" (e.g., ensuring a user is signed in).

## 🛠️ Technical Stack

**Backend:** Node.js, Express.js

**Database:** MongoDB (using Mongoose ODM)

**Security:** JWT, Bcrypt, Dotenv (environment variables)

**Utilities:** MailService (for OTP delivery), Git/GitHub for version control.

### 🛠️ Getting Started
To get a local copy up and running, follow these steps:

    1. Prerequisites
        npm
        npm install npm@latest -g

    2. Installation
        1. Clone the repo:
            git clone https://github.com/Ayomidejames/BlogBase.git
        2. Install NPM packages:
            npm install
        3. Create a .env file in the root directory and add your credentials:
            PORT=5000
            MONGO_URI=your_mongodb_uri
            JWT_SECRET=your_secret_key
            BLOGBASE_EMAIL=your_email
            BLOGBASE_PASSWORD=your_app_password
            SUPERADMIN=your_email_address
        4. Start the server:
            npm run dev