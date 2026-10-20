# SHUBH ENTERPRISES & INTERNET CAFE — Modern Business Website

A modern, premium, dynamic, and fully responsive business website for **SHUBH ENTERPRISES & INTERNET CAFE**, located in Lok Nagar, Jurakhan Kheda, Unnao, Uttar Pradesh, India.

Built using **React (TypeScript)**, **Tailwind CSS**, and **Vite**, featuring bilingual support (Hindi & English), interactive solar subsidy calculations under **PM Surya Ghar Muft Bijli Yojana**, live service search, document checklists, and a genuine customer enquiry workflow connected to WhatsApp and local storage.

---

## 🌟 Key Features & Sections

### 1. Brand Identity & Header
- **Emblem**: Circular SE monogram matching the grand opening poster.
- **Color Scheme**: Deep Navy Blue (`#0B192C`), Vibrant Red (`#D90429`), Pure White, and Golden/Amber accents.
- **Bilingual Switcher**: Seamless 1-click toggle between **English** and **हिन्दी** with persistent local storage.
- **Direct Contacts**: Click-to-call buttons (`tel:7007235826`), WhatsApp link (`https://wa.me/917007235826`).
- **Owner & Location**: Shubh Rajpoot • Lok Nagar, Jurakhan Kheda, Unnao (Near Sukh Dev Ata Chakki).

### 2. Homepage Hero Section
- Bold welcome headline & Hindi tagline: *“आपकी सभी ऑनलाइन सेवाओं का भरोसेमंद केंद्र”*.
- Prominent action buttons: **Call Now**, **WhatsApp Us**, and **Explore Our Services**.
- Composite visual combining modern computer workstation, digital badges, and rooftop solar installations.
- Live real-time business open/closed status.

### 3. Comprehensive Services Directory
Includes interactive search bar and category filters:
- **Internet Cafe & Computer Services**: High-speed printing (Colour & B/W), Xerox, scanning, passport-size photographs (5-minute delivery), lamination, pendrive typing, internet workstation.
- **Online Application Services**: Govt exam applications (UP Police, SSC, UPSSSC, Railway, Army), scholarship submissions, income/caste/domicile certificates, authorized Aadhaar assistance.
- **Travel & Booking Services**: Railway (IRCTC) ticket booking guidance, flight booking, web check-in & boarding pass printing.
- **Solar Energy Solutions**: PM Surya Ghar Muft Bijli Yojana information, rooftop solar installation assistance, site feasibility, and after-sales support coordination.
- **Transparent Disclaimers**: Clear, legally compliant regulatory notice stating independent private facilitation status.

### 4. Solar Energy Promotion & Calculator
- Headline: *“Switch to Solar. Save Energy. Build a Brighter Future.”*
- Verified PM Surya Ghar Scheme Details:
  - **1 kW System**: ₹30,000 central subsidy
  - **2 kW System**: ₹60,000 central subsidy
  - **3 kW System**: ₹78,000 maximum central subsidy
- **Interactive Solar Savings Calculator**: Drag the monthly bill slider to compute plant size, subsidy amount, bill savings, and required roof area.
- Dedicated **Solar Consultation Modal** with direct WhatsApp dispatch.

### 5. Document Preparation Guide (Smart Citizen Helper)
- Interactive checklist modal specifying exact documents to bring along for Police/SSC exams, caste/income certificates, and PM Surya Ghar solar applications.

### 6. Functional Enquiry Form & Owner Dashboard
- Form with full name, 10-digit Indian phone validation (`^[6-9]\d{9}$`), service picker, date, and honeypot anti-spam protection.
- Confetti celebration upon submission.
- Saves genuinely to `localStorage` and generates a formatted message with 1-click WhatsApp dispatch to `+91 7007235826`.
- **Owner Portal Modal**: Shubh Rajpoot can view, search, call, or message received enquiries directly from the site.

### 7. Facility & Milestone Gallery
- Lightbox gallery showcasing workstations, laser printing equipment, rooftop solar installations, and the official **Grand Opening Invitation Poster**.

### 8. Local SEO & Structured Data
- Schema.org `LocalBusiness` JSON-LD in `index.html`.
- Open Graph and Twitter Card tags.
- Verified physical address, geo-coordinates for Unnao, and confirmed working hours: **8:00 AM – 9:00 PM Daily**.

---

## 🚀 Running the Project Locally

```powershell
# Navigate to project folder
cd "c:\Users\GET CRAFT\Desktop\download file\web"

# Start the Vite preview server
npm run preview

# Or start the Vite development server with hot-reload
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Building for Production

```powershell
npm run build
```
The optimized static bundle will be generated in `dist/`.

---

## 🌐 Deploying to Production

### Option 1: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in this directory.
3. Use default settings (`dist` output folder).

### Option 2: Netlify
1. Connect this folder or repository to Netlify.
2. The included `netlify.toml` automatically configures the build and single-page routing.
