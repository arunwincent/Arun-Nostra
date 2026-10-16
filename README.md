# Nostra - Premium E-Commerce Storefront

A fully responsive, interactive fashion e-commerce storefront built using semantic **HTML5**, modern **CSS3 Layout Techniques (Flexbox & Media Queries)**, and plain **Vanilla JavaScript DOM Manipulation**. 

This application was developed as a Week 5 milestone assignment for the MERN Full-Stack Developer Course at **Error Makes Clever Academy**.

---

## 🚀 Active Project Pages

The repository contains three primary routing viewpoints:
*   `index.html` – **Home Page**: Features a responsive multi-device fluid hero banner, interactive value cards with 3D hover layout states, a dynamic horizontal swipe-slider for "Most Wanted" clothes, and a robust footer menu layout block.
*   `collections.html` – **Store Engine Catalog**: Features an instant keywords text search bar, custom tag checkbox selection filters, and a multi-column fluid shopping grid display cards desk.
*   `contact.html` – **Support Center**: Contains a clean user communication messaging element deck with full input formatting validations and layout boundary controls.

---

## 🛠️ Key Technical Features Implemented

### 📱 Responsive Mobile Core
*   **Dual-Banner Assets Engine**: Swaps between wide horizontal banners on desktops (`desktop-banner`) and tight vertical crops on phones (`mobile-banner`) to maintain beautiful text scaling layout bounds.
*   **Slide Menu Drawer**: Uses Vanilla JavaScript `.classList.toggle('active')` and fixed CSS layer positioning (`z-index`) to run an elegant, mobile hamburger navigational layout overlay.
*   **Horizontal Swipe Track**: Re-configures desktop carousel grids on mobile into native thumb-swipe streams using `overflow-x: auto` and `scroll-snap-type`.

### ⚙️ Search & Filter System (JavaScript)
*   **Live Keyup Search Engine**: Looks through titles inside `.collection-grid` dynamically using string index lookup boundaries (`.indexOf()`).
*   **Checkbox Tag Sifter**: Scans custom HTML `data-tags` attributes and controls element layout states (`style.display`) on target categories. Includes a reset loop filter safety net.

### 🎨 Visual & Typography Upgrades
*   **Glassmorphic Navbar Separation**: Pinned top headers (`position: sticky`) with glowing hover states and sliding baseline indicator tracker lines (`::after` width animations).
*   **3D Card Hover Frames**: Elevates display items smoothly across the Z-axis bounds using CSS `transform: translateY()` and deep ambient box shadows.
*   **Uniform Crop Aspect-Ratios**: Normalizes mismatched product images with `object-fit: cover` and fixed grid dimensions.

---

## 📂 Repository File Tree

```text
├── index.html            # Main Landing Workspace Core
├── collections.html      # Shop Catalog Search & Filter Panel
├── contact.html          # Clean Validation Messaging Form
├── style.css             # Main Master Stylesheet (including Responsive Queries)
├── script.js            # Main Logic (Mobile Menu, Sliders, Search Actions)
└── images/               # Structured Directory Assets Folder
    ├── banner img/       # Responsive Banner Panels
    ├── New arrival/      # Seasonal Grid Tiles
    ├── mostwanted/       # Horizontal Carousel Tiles
    └── collections/      # Catalog Display Clothes
```

---

## 🎓 Academic Context
*   **Institution**: Error Makes Clever Academy
*   **Course Track**: MERN Full-Stack Development
*   **Project Term**: Week 5 Assignment Milestones
*   **Developer**: Arun
