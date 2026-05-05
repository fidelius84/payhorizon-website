# Payhorizon Website v2

## Structure

```
payhorizon-v2/
├── index.html           ← Homepage
├── services.html        ← All 6 services (terminals, EPOS, IC++, online, open banking, MCA)
├── sectors.html         ← 9 sectors
├── acquirers.html       ← Full panel detail (6 acquirers)
├── about.html           ← Company info & principles
├── contact.html         ← Enquiry form
├── privacy-policy.html  ← Legal
├── terms.html           ← Legal
├── cookie-policy.html   ← Legal
├── css/
│   └── style.css        ← Complete design system
└── js/
    ├── components.js    ← Shared nav + footer (injected on every page)
    └── main.js          ← Scroll reveal, counters, nav, form, mobile menu
```

## Deployment

**Static HTML — no build step, no dependencies.**

### Option A — cPanel / FTP
Upload all files and folders to `public_html/`. Preserve folder structure.

### Option B — Netlify (drag and drop)
Zip the folder → netlify.com → "Deploy manually" → drag zip.

### Option C — GitHub Pages
Push to repo → Settings → Pages → Source: main branch, root.

## Required actions before going live

1. **Contact form** — replace `YOUR_FORM_ID` in `contact.html` with a real Formspree ID (formspree.io)
2. **SSL** — ensure HTTPS is active (Let's Encrypt via your host's control panel)
3. **Cookie consent banner** — add Cookiebot or CookieYes before enabling analytics
4. **Google Analytics** — add GA4 Measurement ID to `<head>` of each page after cookie consent is configured

## Design system

- **Fonts:** Barlow Condensed (headings) + Barlow (body) via Google Fonts CDN
- **Palette:** Ink `#0E0F11` base · Teal `#00D4AA` accent
- **Key features:** Animated ticker, scroll-reveal, number counters, grid animations, comparison table

## Contract terms

All references to contract length use **18–48 months** (updated from previous version).

## Regulatory disclosures

Footer on every page contains all 5 mandatory elements:
1. Payhorizon Limited (Co. No. 16092547) ✅
2. Introducer for MWBS ✅
3. FCA FRN: 1003907 ✅
4. ICO Reg. ZC038563 ✅
5. Registered office: 16 Brampton Court, 7 Union Road, Romford, RM7 0GS ✅

Do not remove or modify these disclosures.
