### Project Info

# Project Name:
**ShopSphere – Mini E-Commerce Product Catalog (Gadgets & Accessories)**

# Live URL:
**Not Deployed (Runs on Localhost)**

# Purpose:
ShopSphere is a simple mini e-commerce product catalog built with **Next.js 15/16 (App Router)**.  
The goal of this project is to demonstrate core Next.js skills including **App Router routing, Route Handlers (API), dynamic routes, public pages, mock authentication with cookies, middleware-based route protection, and a clean component-based UI**.

This project focuses only on the **main assignment requirements** (no optional features).

---

# Key Features:

### Landing Page
- Public landing page with **7 separate sections** (component-based)
- Responsive navbar + footer
- Hero section uses **Swiper carousel**

### Authentication (Mock)
- Hardcoded email/password login
- Authentication state stored in cookies
- Redirects to **/items** after successful login

**Demo Credentials**
- Email: `demo@shopsphere.com`
- Password: `123456`

### Route Protection
- Protected route: **/profile**
- Unauthenticated users are redirected to **/login**
- Implemented using **Next.js Middleware**
- Uses secure `httpOnly` cookie for protection + a UI cookie for showing/hiding navbar buttons

### Items / Lists (Public)
- Public Items page (**/items**) fetches items from internal API
- Shows item cards with **name, description, price, and image**

### Item Details (Public)
- Public dynamic details page (**/items/[id]**)
- Fetches a single item from internal API and shows full details

### UI & UX
- Clean, modern UI with Tailwind CSS
- Fully responsive (mobile/tablet/desktop)
- Swiper-based hero + review carousel
- Component-based section architecture for maintainability

---

# Routes Summary:

### Public Routes
- `/` → Landing Page
- `/items` → Items List Page
- `/items/[id]` → Item Details Page
- `/login` → Login Page

### Protected Routes
- `/profile` → Protected Profile Page (requires login)

---

# API Routes (Next.js Route Handlers):

| Method | Route | Description |
|-------|------|-------------|
| GET | `/api/items` | Get all items |
| GET | `/api/items/:id` | Get single item by id |
| POST | `/api/auth/login` | Mock login & set cookies |
| POST | `/api/auth/logout` | Logout & clear cookies |

---

# Technologies Used:
Frontend / Fullstack (Single Repo)
Next.js 15/16 (App Router)
React
Tailwind CSS
Swiper.js

---

# Authentication / Protection
Cookies (httpOnly + UI cookie)
Next.js Middleware

---

# Author:
Kabir
ShopSphere – Next.js Assignment Project