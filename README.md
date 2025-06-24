# Fair Dinkum Rubbish Removal Website

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm (v8+ recommended)

### Installation
1. Clone the repository:
   ```
   git clone <repo-url>
   cd <project-directory>
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features
- Modern, responsive Next.js website for Fair Dinkum Rubbish Removal
- Quote/Booking form with local database (see below)
- Mock payment simulation after quote submission
- Fully styled with Tailwind CSS and Trashly-inspired design system

## Local Database (MVP)
- Quote/booking submissions are stored in a local file: `quotes.json` in the project root.
- Each submission is appended to this file via the `/api/quote` API route.
- No external database is required for prototyping.

## Mock Payment
- After submitting a quote, you will be prompted to simulate a payment.
- Click the 'Simulate Payment' button to see a success message (no real payment is processed).

## Customization
- Update business details, images, and content in the `/src` directory as needed.

## License
MIT
