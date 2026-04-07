# Hearing Hope - React Website

A complete React replica of [hearinghope.in](https://hearinghope.in) — Delhi's leading hearing care clinic website.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Open in browser
# http://localhost:3000
```

### Build for Production
```bash
npm run build
```

---

## 📁 Project Structure

```
hearing-hope/
├── public/
│   └── index.html              # HTML entry point (Google Fonts + FontAwesome)
├── src/
│   ├── data/
│   │   └── constants.js        # ✅ All site data (nav, services, products, etc.)
│   ├── styles/
│   │   └── global.css          # ✅ CSS variables, resets, shared utilities
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── TopBar.jsx      # Top announcement bar
│   │   │   ├── TopBar.css
│   │   │   ├── Navbar.jsx      # Sticky nav with dropdowns + hamburger
│   │   │   └── Navbar.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx        # Auto-sliding carousel (3 slides)
│   │   │   └── Hero.css
│   │   ├── AppointmentBar/
│   │   │   ├── AppointmentBar.jsx  # Call/WhatsApp CTA bar
│   │   │   └── AppointmentBar.css
│   │   ├── Services/
│   │   │   ├── Services.jsx    # 4-card service grid
│   │   │   └── Services.css
│   │   ├── About/
│   │   │   ├── About.jsx       # About section with image + badge
│   │   │   └── About.css
│   │   ├── Stats/
│   │   │   ├── Stats.jsx       # Animated counter stats (IntersectionObserver)
│   │   │   └── Stats.css
│   │   ├── Products/
│   │   │   ├── Products.jsx    # Signia hearing aids product grid (12 items)
│   │   │   └── Products.css
│   │   ├── WhyTrust/
│   │   │   ├── WhyTrust.jsx    # 6 trust badges grid
│   │   │   └── WhyTrust.css
│   │   ├── Testimonials/
│   │   │   ├── Testimonials.jsx  # 5 customer reviews with star ratings
│   │   │   └── Testimonials.css
│   │   ├── Certifications/
│   │   │   ├── Certifications.jsx  # 8 certification icon tiles
│   │   │   └── Certifications.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx     # Controlled form + contact info
│   │   │   └── Contact.css
│   │   ├── Blogs/
│   │   │   ├── Blogs.jsx       # 3 recent blog cards
│   │   │   └── Blogs.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx      # 4-column footer with links & locations
│   │   │   └── Footer.css
│   │   └── Common/
│   │       ├── SectionHeader.jsx   # Reusable tag + title + subtitle + divider
│   │       ├── FloatingButtons.jsx # WhatsApp float + scroll-to-top
│   │       └── FloatingButtons.css
│   ├── App.js                  # Root component — assembles all sections
│   └── index.js                # React DOM entry point
└── package.json
```

---

## 🧩 Key Features

| Feature | Implementation |
|---|---|
| Hero Carousel | `useState` + `useEffect` auto-slide every 5s |
| Animated Counters | `IntersectionObserver` + `setInterval` count-up |
| Scroll-to-Top | `window.scrollY` listener with smooth scroll |
| WhatsApp Float | Pulsing animation, links to WhatsApp |
| Dropdown Nav | CSS hover dropdowns, mobile hamburger toggle |
| Contact Form | Controlled React form with success message |
| Responsive | CSS Grid auto-fit, media queries for all breakpoints |

---

## ✏️ Customization

All content lives in **`src/data/constants.js`** — edit that file to update:
- Navigation links and dropdowns
- Hero slide text and gradients
- Services, products, testimonials
- Contact info and locations
- Blog posts

No need to touch any component files for content changes.
