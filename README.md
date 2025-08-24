# Hurak Assessment — Haseeb Ahmed

This repository contains my submission for the Hurak technical assessment.

## Tech Stack
- Laravel 12 (Backend API + Email via Brevo)
- React (Frontend UI + scheduler)
- MySQL (Database)
- Axios (API communication)

## Project Structure
hurak-assessment/
├── backend/ # Laravel project
└── frontend/ # React (Create React App / Vite)

markdown
Copy
Edit

## Backend Setup (Laravel)
1. `cd backend`
2. Copy `.env.example` to `.env` and configure database + Brevo:
DB_DATABASE=box
DB_USERNAME=root
DB_PASSWORD=
BREVO_API_KEY=YOUR_BREVO_API_KEY
3. `composer install`
4. `php artisan key:generate`
5. `php artisan migrate`
6. `php artisan serve` → runs at http://127.0.0.1:8000

## Frontend Setup (React)
1. Open a new terminal → `cd frontend`
2. `npm install`
3. `npm start` → runs at http://localhost:3000

## Features
- Box scheduler (doubles count each interval)
- Random colors from `[red, yellow, green, blue, pink, grey]`
- Box data saved to DB via API
- Email sent when total boxes reach 16 (subject: `1st Task Done - Haseeb Ahmed`)
- Shuffle & Sort Buttons