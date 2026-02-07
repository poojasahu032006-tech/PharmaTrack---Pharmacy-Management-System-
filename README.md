
# 💊 PharmaTrack – Pharmacy Management System

PharmaTrack is a **Full Stack Java Web Application** designed to simplify pharmacy operations and medicine management.  
It helps streamline tasks such as **adding, updating, deleting, and tracking medicines**, ensuring efficient workflow and accurate inventory management.

---

## 🚀 Features

- 🔐 User Authentication (Admin/User roles)
- 💊 Add, Update, and Delete Medicines
- 🔍 Search Medicines
- 📉 Track Low Inventory Levels
- ⏳ Expiry Report Generation
- 📦 Inventory Dashboard
- 🌐 RESTful APIs built using Spring Boot
- 💻 Responsive Frontend built using React (Mobile-Friendly UI)

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React.js, Tailwind CSS |
| **Backend** | Spring Boot, Java |
| **Database** | MySQL |
| **Tools** | Git, Postman, VS Code |

---

## 🧩 Project Overview

PharmaTrack aims to **digitize the manual pharmacy process** by offering a web-based solution that handles inventory management, medicine tracking, and expiry reporting — all in one place.  
The system allows both **Admins** and **Users** to log in and perform their specific tasks efficiently.

---

## 🧑‍🤝‍🧑 Team Members

- **Sadiya Shaikh**  
- **Suprita Shetty**  
- **Pooja Sahu**

---


## ⚙️ How to Run the Project

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/SSsadiyashaikh/PharmaTrack.git
````

### 2️⃣ Backend Setup (Spring Boot)

```bash
cd pharmatrack-backend
cd pharmatrack
mvn spring-boot:run
```

* The backend will start on **[http://localhost:8080](http://localhost:8080)**

### 3️⃣ Frontend Setup (React)

```bash
cd pharmatrack-frontend
npm run dev
```

* The frontend will start on **[http://localhost:5173](http://localhost:5173)**

---

## 🛢 Database Setup (MySQL)

1. **Install MySQL Server**
   Make sure MySQL is installed and running on your system (default port: `3306`).

2. **Create a new database**
   ```sql
   CREATE DATABASE pharmatrack;
   ```

3. **Configure the connection in Spring Boot**
   Open the file:
   `pharmatrack-backend/src/main/resources/application.properties`
   and update the following:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/pharmatrack
   spring.datasource.username=root
   spring.datasource.password=your_password

   # Hibernate settings
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true
   spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
   ```

   > ⚠️ **Note:** Replace `your_password` with your actual MySQL password.

4. **Run the backend**

   ```bash
   mvn spring-boot:run
   ```
 Once the application starts successfully, the required tables will be automatically created in your MySQL database.

---

## 🧱 Project Structure

```
PharmaTrack/
│
├── pharmatrack-backend/pharmatrack       # Spring Boot backend
│   ├── src/
│   ├── pom.xml
│   └── application.properties
│
├── pharmatrack-frontend/      # React frontend
│   ├── src/
│   ├── package.json
│   └── public/
│
└── README.md
```

---

## 📸 THE WEB PAGES

### 🧾 Login Page

<img width="1919" height="977" alt="Login Page" src="https://github.com/user-attachments/assets/1647b21a-3638-4f4b-b2a3-7c14998288c6" />

### 📊 Dashboard

<img width="1916" height="1012" alt="Dashboard" src="https://github.com/user-attachments/assets/dd2d1d4b-8c6a-45c7-999a-e9a16dcc4d1b" />

### 💊 Medicines List

<img width="1919" height="1015" alt="Medicines" src="https://github.com/user-attachments/assets/3dc91044-232e-4053-8dc8-8a9cd5fd9332" />

### ➕ Add Medicine

<img width="1917" height="1016" alt="Add Medicine" src="https://github.com/user-attachments/assets/9d1d9c17-7de9-4701-b655-d165496124a2" />

### 🧾 Expiry Report

<img width="1919" height="1016" alt="Expiry Report" src="https://github.com/user-attachments/assets/d061f4ea-c4e4-4037-8caa-e1165cb09c2b" />

### 📦 Medicine Inventory

<img width="1919" height="1010" alt="Medicine Inventory" src="https://github.com/user-attachments/assets/b59e51c6-4982-43f1-adc5-e9a59be0837f" />

---

## 🧮 CRUD Operations

| Operation           | Description                    | Screenshot                                                                                       |
| ------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------ |
| **Create Medicine** | Add new medicine details       | ![Add Medicine](https://github.com/user-attachments/assets/9d1d9c17-7de9-4701-b655-d165496124a2) |
| **Update Medicine** | Edit existing medicine details | ![Update](https://github.com/user-attachments/assets/8bc24620-e96c-495d-9d5a-4c3c2b236904)       |
| **Search Medicine** | Search by medicine name        | ![Search](https://github.com/user-attachments/assets/e5648802-a629-4a6e-8e0c-6b5a0d2bbf33)       |
| **Delete Medicine** | Remove a medicine record       | ![Delete](https://github.com/user-attachments/assets/df0187f0-e1b7-4537-b277-9233fe576c1e)       |

---
## 📱 Mobile Responsive
<img width="1301" height="996" alt="image" src="https://github.com/user-attachments/assets/7765e5ce-091f-43cb-88f0-730d0358802d" />

---
## 🧠 Future Enhancements

* 💵 Billing and Invoice Module
* 📧 Email Alerts for Expiring Medicines
* ☁️ Cloud Deployment (AWS/Azure)
* 👩‍⚕️ Role-Based Dashboard Analytics

---
## 💫 Conclusion

**PharmaTrack** is a modern and efficient pharmacy management system designed to simplify daily operations.
With its **Spring Boot backend**, **React frontend**, and **mobile-responsive design**, it ensures seamless management of medicines, inventory, and expiry tracking.

This project represents our journey of building a **Full Stack Java Web Application** with focus on performance, scalability, and user experience.

🤝 **A big thank you to my team members** for their consistency, and teamwork throughout the project.
Together, we transformed our idea into a fully functional application that reflects our dedication and learning.

💡 *Built with passion, teamwork, and a love for technology.*




