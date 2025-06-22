---

**Prompt for MCP Agent: Build "Fair Dinkum Rubbish Removal" Next.js Website - Visual Replication & Functionality**

**I. Core Objective:**
"Build a modern, responsive, and fully functional Next.js website for 'Fair Dinkum Rubbish Removal,' a hybrid rubbish removal business based in Sydney, Australia. The website's design and layout should **directly replicate the provided image examples for the main page sections**, adapting the content and branding to 'Fair Dinkum Rubbish Removal'. The primary goal is to create an intuitive platform for informing customers, managing bookings, and processing payments."

**II. Business Model (Critical for Content & Features):**
"The website must clearly present and facilitate two distinct core services:
1.  **Self-Load Tipper Trailer Rental:** We deliver a tipper trailer to the customer's site, they load it at their pace, and we then collect the loaded trailer for waste disposal. This requires clear information on trailer sizes and usage.
2.  **Full-Service Hands-On Rubbish Removal:** Our crew comes to the customer's site, physically loads the rubbish onto our truck/trailer, and disposes of it. This requires clear information on what we can remove and the ease of the service."

**III. Technical Specifications:**
* **Framework:** Next.js (utilizing React components, routing, and API routes as appropriate).
* **Styling:** Implement styling (e.g., Tailwind CSS, styled-components, or a suitable CSS-in-JS library) to achieve the exact visual layout and aesthetics of the provided images, **strictly adhering to the defined color palette below**.
* **Database (Initial MVP):** Implement a simple **local database** (e.g., using a file-based JSON DB, or a lightweight solution like SQLite if easily integrated with Next.js API routes) to temporarily manage booking data, customer information, and service details. Focus on functional data storage for prototyping.
* **Payments:** Implement a **mock electronic payment integration** (e.g., a placeholder button that simulates a successful payment, or a simple form that would typically connect to a real gateway like Stripe/PayPal, but without live credentials initially). The UI for payment should align with the provided design elements.

**IV. Design & Branding (Direct Replication & Adaptation):**

"The website's design must **closely replicate the visual layout, spacing, typography, and button styles** seen in the uploaded images, including:
* `hero section.jpg`
* `menu header.jpg`
* `main page section 2.jpg`
* `main page section 3.jpg`
* `main page section 5.jpg`
* `main page section 7.jpg`
* `main page section 8.jpg`
* `main page section 9.jpg`
* `footter section.jpg`

**Adapt the content and branding to 'Fair Dinkum Rubbish Removal':**
* **Logo:** Use the updated logo design for 'Fair Dinkum Rubbish Removal' (featuring the Southern Cross stars in a pyramid-like arrangement within eucalyptus leaves) in the header and footer where "DUMPSTERDASH" appears in the examples.
* **Color Palette:** **Strictly adhere to the following defined color palette for all website elements:**
    1.  **Fair Dinkum Green (Primary Accent/CTA):**
        * **HEX:** `#339933`
        * **RGB:** `rgb(51, 153, 51)`
        * *Use for:* Main call-to-action buttons, prominent accents, key headings.
    2.  **Eucalyptus Deep Green (Secondary Brand/Section BG):**
        * **HEX:** `#4F6D5F`
        * **RGB:** `rgb(79, 109, 95)`
        * *Use for:* Section backgrounds, darker green elements, graphic accents, subtle borders.
    3.  **Light Eucalyptus Green (Subtle Backgrounds/Details):**
        * **HEX:** `#C2DDC5`
        * **RGB:** `rgb(194, 221, 197)`
        * *Use for:* Lighter background sections, subtle graphic elements, card backgrounds, hover states for green elements.
    4.  **Dark Charcoal (Primary Text/Main Background):**
        * **HEX:** `#3A3A3A`
        * **RGB:** `rgb(58, 58, 58)`
        * *Use for:* Primary body text, main headings, navigation bar background, footer background.
    5.  **Off-White (Main Backgrounds/Light Text):**
        * **HEX:** `#F8F8F8`
        * **RGB:** `rgb(248, 248, 248)`
        * *Use for:* Main page backgrounds, content cards, clean containers, and contrasting text on dark backgrounds.
    6.  **Pure White (Logo Stars/High Contrast Text):**
        * **HEX:** `#FFFFFF`
        * **RGB:** `rgb(255, 255, 255)`
        * *Use for:* The Southern Cross stars in the logo, primary text on dark backgrounds, icons, and elements needing maximum contrast.
    7.  **Subtle Gold (Optional Highlight/Premium Touch):**
        * **HEX:** `#FFD700`
        * **RGB:** `rgb(255, 215, 0)`
        * *Use for:* Very subtle accents like small decorative icons, thin borders, or a premium highlight on specific calls-to-action (use sparingly).

* **Imagery:** Replace placeholder images with relevant images for 'Fair Dinkum Rubbish Removal' (e.g., images of your tipper trailers, crew working, clean sites). The AI should suggest appropriate placeholders or indicate where specific imagery should go.
* **Typography:** Match the font styles and sizes as closely as possible to the reference images.

**V. Key Website Sections & Functionality (Based on Visuals & Business Model):**

1.  **Header (`menu header.jpg`):**
    * Integrate 'Fair Dinkum Rubbish Removal' logo.
    * Navigation Menu: "Service Needs" (dropdown), "Our Rentals" (dropdown), "Service Areas", "About".
    * Call-to-Action Buttons: "Get a Quote" (instead of "Rent Now"), and phone number.
    * Ensure responsiveness.
2.  **Hero Section (`hero section.jpg`):**
    * Main heading: "Fair Dinkum Rubbish Removal & Trailer Hire in Sydney" (or similar, adaptable).
    * Sub-heading: Explain the hybrid model concisely.
    * Call-to-Action Buttons: "Get a Quote," phone number.
    * Background image placeholder.
3.  **"Our Rentals" / Services Overview (`main page section 2.jpg`):**
    * Adapt content to discuss "Our Services" (covering both tipper trailer rental and full-service).
    * Implement image carousel/gallery for tipper trailers and examples of full-service jobs.
    * "View Our Services" button leading to a dedicated services page.
4.  **Service Categories (`main page section 3.jpg`):**
    * Adapt headings and descriptions to align with common rubbish removal needs (e.g., "Home Renovations Cleanup," "Landscaping Waste," "Construction Site Clearance," "Deceased Estate / Moving Cleanouts").
    * Each category should have a "See More" button.
5.  **"Why Us" (`main page section 8.jpg`):**
    * Replicate the three-column layout.
    * Adapt content to highlight 'Fair Dinkum Rubbish Removal's' unique selling propositions (e.g., "Exceptional Hybrid Service," "Eco-Friendly Disposal," "Affordable & Transparent Pricing").
6.  **Testimonials (`main page section 7.jpg`):**
    * Replicate the layout for testimonials.
    * Implement a "Load More" button for additional testimonials (initially placeholders).
7.  **Contact Us Call-to-Action (`main page section 5.jpg`):**
    * Replicate the design.
    * Update text to encourage contact for quotes.
    * Include phone number and "Get a Quote" button.
8.  **Get a Quote Section (`main page section 9.jpg`):**
    * Replicate the layout and call to action.
    * "Get A Quote Today" heading and "Get a Quote" button.
    * Placeholder for relevant imagery (e.g., a tipper trailer or crew).
9.  **Footer (`footter section.jpg`):**
    * Replicate the layout with sections for "Services," "Quick Links," and "Get In Touch."
    * Update contact details (address, phone, hours) to be relevant for Sydney.
    * Integrate 'Fair Dinkum Rubbish Removal' logo and business description.
    * Copyright information.

**VI. Key Functionalities to Implement:**

1.  **Quote/Booking System:**
    * **Frontend Form:** Create a multi-step or single-page form for users to get a quote or book.
    * **Input Fields:**
        * Customer details (Name, Phone, Email, Address, Suburb, Postcode).
        * Service selection (Tipper Trailer Rental / Full-Service Rubbish Removal).
        * Waste type (checkboxes/dropdown for General, Green, Concrete, Mixed, etc.).
        * Estimated volume/size.
        * Preferred date/time.
        * For Tipper Trailer Rental: Access details (driveway/street), note if towing vehicle is required for DIY pick-up (though your model is delivery/collection).
    * **Local Database Integration:** Store submitted quote/booking requests in the local database.
    * **Confirmation:** A simple confirmation message on submission.
2.  **Mock Electronic Payment:**
    * Create a simple payment screen or a button that simulates a payment process, confirming a successful transaction after a user clicks. This will demonstrate the UI and flow without needing live API keys initially.

**VII. User Experience (UX) & Performance Goals:**
* **Fully Responsive:** The website must look and function flawlessly on desktop, tablet, and mobile devices.
* **Intuitive Navigation:** Users should easily find information and complete actions.
* **Fast Loading Times:** Optimize Next.js for performance (e.g., image optimization, code splitting).
* **Clear Calls-to-Action (CTAs):** Ensure all action buttons are prominent and guide users.

**VIII. Expected Output from MCP Agent:**

"The MCP agent should provide:
* **Next.js project setup** with core pages (`pages/index.js`, `pages/services.js`, `pages/contact.js`, etc.) and component structure.
* **Reusable React components** for sections based on the image references (e.g., Header, Footer, Hero, Service Cards, Testimonial Cards).
* **Styling (CSS/SCSS/Tailwind) code** to match the visual design exactly, using the provided color palette.
* **Backend API routes (Next.js API Routes)** for handling form submissions and interacting with the local database.
* **Placeholder content** that is relevant to 'Fair Dinkum Rubbish Removal' and its services.
* **Basic local database implementation** and schema.
* **Mock payment integration** UI and logic.
* **Clear instructions** on how to run the project locally.
* **Be prepared to iterate** on design details, content, and functionality, and provide detailed explanations for all generated code."

---