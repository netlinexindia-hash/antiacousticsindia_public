# Static Website Development Plan
## Anti Acoustics India — antiacousticsindia

---

> [!IMPORTANT]
> **Action Required Before Development**: Please fill in your company details in the placeholders below (marked with `[ ]`). Once confirmed, development will begin.

### Your Company Details (Fill These In)
| Field | Your Value |
|---|---|
| **Company Name** | Anti Acoustics India |
| **Address Line 1** | `[C-20,Sector-7]' |
| **Address Line 2** | `[Noida, State UP 201301]` |
| **Phone 1** | `[+91-9643427078]` |
| **Phone 2** | `[+91-XXXXXXXXXX]` (optional) |
| **Email** | `[anil14@antiacousticsindia.com]` |
| **WhatsApp** | `[+91-9643427078]` (optional) |
| **GST Number** | `[Your GST Number]` (optional) |

---

## 1. Project Overview

Build a professional, responsive **static HTML/CSS/JS** website for **Anti Acoustics India** — a manufacturer and supplier of audiometric booths and acoustic solutions. The website will be housed in the `antiacousticsindia` Git repository.

The site is based on the product and service information found in the Audiometric Booth Proposal from Decibels Acoustics, adapted and rebranded for Anti Acoustics India.

**Source Document:** `Proposal for Audiometric Booth.pdf`  
**Repository:** `d:\Deesontech\Projects\antiacousticsindia`  
**Technology:** Pure HTML5 + CSS3 + Vanilla JS (no frameworks)

---

## 2. Sitemap / Pages

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Hero, intro, highlights |
| About Us | `about.html` | Company background, certifications |
| Products | `products.html` | Audiometric booths listing |
| Specifications | `specifications.html` | Technical details & materials |
| Pricing | `pricing.html` | Price table + terms |
| Contact | `contact.html` | Address, phone, email, map |

---

## 3. Page-by-Page Content Plan

### 3.1 Home Page (`index.html`)

**Sections:**
- **Hero Banner:** Full-width hero with tagline  
  > *"Precision Acoustic Solutions for a Quieter World"*  
  CTA buttons: "View Products" and "Get a Quote"
- **About Snippet:** 2-line intro + link to About page  
  > *"Specialists in tailor-made acoustic and thermal insulation solutions with over 25 years of combined experience."*
- **What We Offer (Icon Grid):**
  - Industrial Acoustic Solutions
  - Plant Noise & Thermal Acoustic Solutions
  - Traffic Noise Control
  - Architectural Acoustic Solutions
  - Audiology Testing Solutions
  - Acoustic Consultancy
- **Featured Products:** Cards for 4×4×7 ft and 5×5×7 ft booths
- **Why Choose Us:** ISO 9001:2015 Certified, OSHA Compliance, Fire-Resistant Materials, 2–3 Week Delivery
- **Contact CTA Strip:** Phone + email + "Contact Us" button

---

### 3.2 About Us (`about.html`)

**Sections:**
- Company story and mission
- ISO 9001:2015 certification badge
- Experience highlights (25+ years combined experience)
- Team approach (tailor-made, budget & technical)
- Services at a glance (same 6-item list)

---

### 3.3 Products (`products.html`)

**Two product cards (based on PDF):**

#### Product 1 — Standard Audiometric Booth (4×4×7 ft)
- **Outer Dimensions:** 4 ft × 4 ft × 7 ft (L×B×H)
- **Noise Performance:** < 40 dB(A) inside from 60–65 dB(A) ambient
- **Standard:** OSHA Compliant
- **Price:** ₹1,20,000/- + GST @ 18%

#### Product 2 — Deluxe Audiometric Booth (5×5×7 ft)
- **Outer Dimensions:** 5 ft × 5 ft × 7 ft (L×B×H)
- **Noise Performance:** < 40 dB(A) inside from 60–65 dB(A) ambient
- **Standard:** OSHA Compliant
- **Price:** ₹1,30,000/- + GST @ 18%

> [!NOTE]
> Custom sizes available on request (mentioned on product page).

---

### 3.4 Specifications (`specifications.html`)

Content drawn from PDF Pages 2 & 3:

| Component | Specification |
|---|---|
| **Panel Structure** | 1.6mm CRCA sheet (TATA/JINDAL), 100mm panel thickness |
| **Wall Insulation** | 3mm acoustic damper (2000 kg/m³) + 100mm Mineral Wool (PROROX SL960, 100 kg/m³) |
| **Inner Lining** | 0.4mm perforated GI sheet (40–42% perforation) + acoustic fabric |
| **Cross Members** | At 600mm C/C |
| **Acoustic Door** | Single leaf, matching insulation, EPDM gaskets, heavy-duty hinges & lock |
| **Vision Panel (Window)** | 6mm + 12mm air gap + 6mm = 24mm DGU toughened glass |
| **Ventilation** | Forced-air silent fan with ducting (HVAC calculated) |
| **Jack Panel** | 8–10 patch cords (6.5mm) for headphones & audiometers |
| **Lighting** | Internal ceiling light included |
| **Finish (Exterior)** | Red oxide primer + Enamel paint (RAL color) |
| **Finish (Interior)** | Aesthetic acoustic fabric |
| **Hardware** | Zinc passivated |
| **Fire & Water** | Fire-resistant and water-repellent materials |

---

### 3.5 Pricing (`pricing.html`)

**Price Table:**

| Model | Size (L×B×H) | Price (Ex-Works) | GST |
|---|---|---|---|
| Standard Booth | 4 ft × 4 ft × 7 ft | ₹1,20,000/- | 18% extra |
| Deluxe Booth | 5 ft × 5 ft × 7 ft | ₹1,30,000/- | 18% extra |
| Custom Size | On Request | Contact Us | — |

**Terms & Conditions Section:**
1. Prices are **Ex-Works** (transport charges extra)
2. Payment: **50% advance**, 40% on dispatch, 10% post installation/testing
3. GST @ **18%** applicable extra
4. Installation **included** in cost
5. Unloading, scaffolding & ladders in **client's scope**
6. Electricity to be provided by the client
7. Delivery: **2–3 weeks** after advance payment and drawing approval

---

### 3.6 Contact (`contact.html`)

**Content:**
- Company name: **Anti Acoustics India**
- Full address: `[To be filled by user]`
- Phone numbers: `[To be filled by user]`
- Email: `[To be filled by user]`
- Contact form: Name, Company, Email, Phone, Message, Submit
- Optional: Embedded Google Map

---

## 4. Design Direction

| Element | Details |
|---|---|
| **Color Palette** | Deep Navy `#0A1628`, Teal/Cyan `#00B4D8`, White `#FFFFFF`, Light Gray `#F5F7FA` |
| **Typography** | Google Fonts — `Outfit` (headings) + `Inter` (body) |
| **Style** | Modern, professional, clean — inspired by industrial/B2B aesthetics |
| **Animations** | Subtle scroll fade-ins, hover lift effects on cards |
| **Icons** | SVG icons or Font Awesome (CDN) |
| **Responsive** | Mobile-first, fully responsive (hamburger nav on mobile) |
| **Hero** | Full-viewport with gradient overlay |

---

## 5. File Structure

```
antiacousticsindia/
├── index.html
├── about.html
├── products.html
├── specifications.html
├── pricing.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── logo.png          ← to be created/provided
│   ├── hero-bg.jpg       ← acoustic/industrial image
│   └── booth-*.jpg       ← product images
└── Proposal for Audiometric Booth.pdf
```

---

## 6. Technical Notes

- **No frameworks** — pure HTML/CSS/JS for simplicity and speed
- **SEO ready** — meta tags, Open Graph, descriptive titles per page
- **Contact form** — static form with `mailto:` or Formspree integration
- **Performance** — optimized images, minimal JS
- **Hosting-ready** — can be deployed on GitHub Pages directly from the repo

---

## 7. Verification Plan

After development, verify:
1. Open each page in browser (`index.html`, `about.html`, etc.) — check all content renders
2. Resize to mobile (375px) — confirm responsive layout and hamburger menu
3. Click all navigation links — no broken links
4. Submit contact form — confirm it opens email client or submits via Formspree
5. Run Lighthouse audit — aim for 90+ on Performance, Accessibility, SEO

---

> [!TIP]
> Once you've filled in your company details above, let me know and I'll start building the website immediately.
