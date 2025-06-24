---

**I. Core Objective:**
Build a modern, responsive, and fully functional Next.js website for **Fair Dinkum Rubbish Removal**, a hybrid rubbish removal business based in Sydney, Australia. The website’s layout must **replicate the provided image examples for all main page sections**, adapting branding and content to suit the Fair Dinkum identity. The platform should enable customers to understand services, manage bookings, and process payments.

---

**II. Business Model:**
The website must clearly communicate and support the two core services offered:

1. **Self-Load Tipper Trailer Rental** – A trailer is delivered to the customer, who loads it themselves. The company then collects and disposes of the rubbish.
2. **Full-Service Rubbish Removal** – A crew physically visits the customer’s site, loads the rubbish, and disposes of it.

---

**III. Technical Specifications:**

* **Framework:** Next.js (React-based)
* **Local Database (Prototype Stage):** Use a lightweight, file-based solution (e.g., JSON or SQLite) to manage customer bookings and service data.
* **Mock Payment Integration:** Simulate an electronic payment process using a placeholder button or form. The design should reflect a working payment system UI but does not need live credentials.

---

**IV. Visual Design Implementation:**
The website should **visually replicate all layout, spacing, typography, and structural elements** from the provided images, adjusted to suit Fair Dinkum Rubbish Removal's branding. The design must follow the Trashly-inspired image references for consistency.

---

**V. Key Website Sections & Functional Goals:**

1. **Header**

   * Use the provided layout reference.
   * Include company logo and navigation:
     “Service Needs” (dropdown), “Our Rentals” (dropdown), “Service Areas”, “About”
   * Include call-to-action: “Get a Quote” and phone number
   * Responsive across devices

2. **Hero Section**

   * Headline: “Fair Dinkum Rubbish Removal & Trailer Hire in Sydney”
   * Brief subheading explaining the hybrid model
   * Call-to-Action buttons: “Get a Quote” and phone number
   * Background image as in reference

3. **Services Overview ("Our Rentals")**

   * Introduce both key services with brief explanations
   * Include image gallery/carousel
   * “View Our Services” button links to dedicated service page

4. **Service Categories**

   * Grid layout of typical service categories (e.g., “Home Renovation Cleanup”, “Landscaping Waste”)
   * Each with description and “See More” button

5. **Why Choose Us**

   * 3-column layout explaining differentiators (e.g., hybrid model, eco-disposal, pricing)

6. **Testimonials**

   * Replicate testimonial layout from reference
   * Include “Load More” button to reveal additional placeholder reviews

7. **Contact Call-to-Action**

   * Prompt users to get in touch for quotes
   * Include phone and CTA button

8. **Get a Quote Section**

   * Feature a bold, action-driven quote prompt
   * “Get a Quote Today” heading with CTA button
   * Related visual (e.g., tipper trailer)

9. **Footer**

   * Include business information and navigation from the visual reference
   * Company logo, contact details, quick links
   * Ensure copyright

---

**VI. Core Functionalities to Implement:**

1. **Quote/Booking Form**

   * Multi-step or single-page quote request form
   * Fields:

     * Name, Phone, Email, Address, Suburb, Postcode
     * Select service type
     * Waste type (e.g., General, Green, Mixed)
     * Estimate volume/size
     * Preferred date/time
     * Tipper trailer access information
   * Store form submissions in local database
   * Show confirmation after submission

2. **Mock Payment Flow**

   * Simulate a transaction process
   * Confirmation message upon simulated success

---

**VII. UX & Performance Goals:**

* Fully responsive for desktop, tablet, and mobile
* Clear navigation and calls-to-action
* Fast load performance using Next.js features (code splitting, optimization)
* Placeholder content adapted to Australian context and Fair Dinkum branding

---

**VIII. Expected Output from MCP Agent:**

* **Next.js project setup** with standard structure and routing
* **Component-based layout** replicating the visual design provided
* **Backend API routes** for handling form submissions and interacting with the local DB
* **Quote/booking system** (form, data handling, local DB)
* **Mock payment flow**
* **Placeholder content** adapted for Fair Dinkum Rubbish Removal
* **Run instructions** for local development
* **Willingness to iterate** and provide code explanations

---
