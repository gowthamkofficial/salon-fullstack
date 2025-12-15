# 💇‍♂️ Salon Fullstack – Professional Salon Website

A modern, mobile-first salon website built using **Angular (latest version with SSR)** and **Tailwind CSS**, designed for **Saravanan K’s Salon**, located at **Vikkiramangalam Bus Stand, Usilampatti, Madurai – 625207**.

This project focuses on **clean UI/UX, scalability, and real-world architecture**, making it production-ready and easy to extend with backend APIs in the future.

---

## 🚀 Project Overview

The website allows customers to:
- View salon services with pricing
- Browse available products
- See staff profiles
- Check current and pending appointment availability in real time
- Make informed decisions before booking

An **admin interface** is included to manage:
- Current appointments
- Pending appointment slots

> ⚠️ Current Phase: **UI / Design / Layout only**  
> No backend APIs are integrated yet (mock data is used everywhere).

---

## 🧠 Key Objectives

- Build a **professional salon website**
- Ensure **mobile-first responsiveness**
- Use **Angular SSR** for performance & SEO
- Follow **module-based architecture (no standalone components)**
- Prepare clean integration points for future APIs
- Provide an **admin dashboard** for appointment management

---

## 🧩 Main Website Sections

1. **Hero Section** – Salon branding and introduction
2. **Services** – List of services with pricing
3. **Products** – Salon products display
4. **Staff Profiles** – Available staff members
5. **Appointments** – Current & pending appointments
6. **Footer** – Address & contact information

---

## 🔐 Admin Features

- View all appointments
- Update appointment status (current / pending)
- Admin-ready architecture for future authentication

---

## 🛠️ Tech Stack

| Technology | Usage |
|----------|------|
| Angular (Latest) | Frontend framework |
| Angular Universal (SSR) | Server-side rendering |
| Tailwind CSS | Styling & responsive design |
| TypeScript | Strongly typed code |
| Mock Data | Temporary data source |
| Module-based Architecture | Scalable structure |

---

## 🗂️ Project Architecture

src/app/
│
├── core/
│ ├── components/ # Header, Footer
│ ├── hero/
│ ├── services/
│ ├── products/
│ ├── staff/
│ └── appointments/
│ └── services/ # Global singleton services
│
├── shared/
│ ├── components/ # Reusable UI components
│ ├── directives/
│ └── pipes/
│
├── admin/
│ └── appointments/ # Admin appointment management
│
├── models/ # Interfaces & DTOs
│
└── app-routing.module.ts

