# 🚌 BusTicket

This is a modern **Bus Ticket Booking Web App** built with **Angular 19.2.10**. The application allows users to book bus tickets by selecting travel routes and dates, viewing available buses, and booking multiple seats with passenger details for each.

## 🔧 Tech Stack

- **Frontend:** Angular 19
- **Styling:** Css


---

## ✨ Key Features

- 🔍 Select **From** and **To** locations
- 📅 Choose **Date of Travel**
- 🚌 View **Available Buses**
- 🎫 **Select Multiple Seats** per booking
- 👥 Enter **Passenger Details** per seat
- ✅ Form validation and booking confirmation

---

## 📁 Project Structure

src/
│
├── app/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Feature pages (booking, search results, etc.)
│ ├── services/ # API integration and business logic
│ ├── models/ # TypeScript interfaces/models
│ ├── app-routing.module.ts
│ └── app.module.ts

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- Angular CLI 19.2.10
- A REST API backend or mock server for testing

### Development Server

To start a local development server, run:

```bash
ng serve
Open your browser and navigate to http://localhost:4200/. The application will automatically reload when source files change.
Angular CLI includes powerful code scaffolding tools. To generate a new component, run:
ng generate component component-name
For a complete list of schematics (e.g., components, directives, or pipes), run:
ng generate --help

To build the project, use:
ng build
💡 Future Enhancements
Map-based location picker

Booking history and ticket download

Payment gateway integration

Email/SMS ticket confirmations

Mobile-friendly UI (PWA support)


