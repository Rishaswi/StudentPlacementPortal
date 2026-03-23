# 🎓 Student Placement Preparation Portal
A modern, end-to-end recruitment preparation platform designed to empower students with DSA practice, industry-standard test environments, and comprehensive career management.

## 🚀 Key Features

### 💻 Advanced Coding Practice
- **Multi-Language Compiler**: Solve problems in **Java, Python, C++, C, or JavaScript** using a high-performance local execution engine.
- **Smart IDE Features**: Auto-indentation, bracket auto-pairing, and intuitive block-formatting to speed up your coding sessions.
- **Real-time Verdicts**: Instant feedback with detailed "Accepted," "Wrong Answer," or "Compilation Error" statuses.
- **Classic DSA List**: Access a curated collection of standard problems including Two Sum, Palindrome, Factorial, and more.

### 🛡️ Secure Admin Dashboard
- **Problem Management**: Admins can seamlessly upload new coding problems with custom constraints, test cases, and starter code templates.
- **Unified Sync**: Problems added via the Admin Portal are instantly visible and playable in the Student Dashboard.
- **Student Progress**: High-level statistical tracking of student performance across coding challenges and tests.

### 📊 Comprehensive Student Portal
- **Performance Tracking**: Visual summaries of previous attempts and successful submissions.
- **Career Management**: Tools for marking placement status and package details.
- **Dynamic Problem View**: Professional problem descriptions with examples, constraints, and categories.

---

## 🛠️ Tech Stack
- **Frontend**: React.js, Tailwind CSS (Design System), Lucide Icons
- **Backend**: Node.js, Express.js
- **Database**: 
  - **MongoDB**: For user authentication, profiles, and problem metadata.
  - **PostgreSQL**: For the core coding judge, problem synchronization, and storage.
- **Compiler Engine**: Native Node.js `child_process` execution with temporary filesystem isolation.

---

## 🏗️ Getting Started

### 📋 Prerequisites
Ensure you have the following installed on your local machine:
1. **Node.js**: (v18+)
2. **MongoDB**: Local instance running on port `27017`
3. **PostgreSQL**: Local instance running on port `5432`
4. **Compilers** (for full language support):
   - `python3`
   - `jdk` (java and javac)
   - `g++` (for C++)

---

### ⚙️ Installation & Setup

1. **Clone the project**:
   ```bash
   git clone https://github.com/Rishaswi/StudentPlacementPortal.git
   cd "Student Placement Preparation Portal (1)"
   ```

2. **Frontend Setup**:
   ```bash
   npm install
   npm run dev
   ```

3. **Backend Setup**:
   ```bash
   cd backend
   npm install
   ```

4. **Environment Configuration**:
   Create a `.env` file in the `backend/` directory:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_url
   JWT_SECRET=your_secret
   PG_USER=your_postgres_user
   PG_PASSWORD=your_postgres_password
   PG_DATABASE=postgres
   PG_HOST=127.0.0.1
   PG_PORT=5432
   ```

5. **Start the Backend Server**:
   ```bash
   npm run dev
   ```

---

## 📝 Usage
1. **Student Login**: Register or log in to access placement tests and coding practice.
2. **Admin Access**: Log in with authorized credentials to manage the platform contents.

## 🤝 Contribution
Contributions are welcome! Please feel free to open a Pull Request or report an issue.

---

*This project was developed with a focus on ease of use and high-performance code execution.*