# Quick Start Guide - Alamo Advisors Website

## Get Running in 5 Minutes

### Step 1: Install Dependencies (1 minute)
```bash
npm install
```

### Step 2: Start Development Server (30 seconds)
```bash
npm run dev
```

### Step 3: Open in Browser
Visit: **http://localhost:3000**

That's it! The website is now running locally.

---

## What You'll See

### Home Page (http://localhost:3000)
- Hero section with "Fiduciary Investment Advisory"
- About section with firm overview
- Services section with 6 service cards
- Why Choose Us section
- Footer with contact info and disclosures

### Team Page (http://localhost:3000/team)
- 6 placeholder team member cards
- Ready for your team photos and bios

### Contact Page (http://localhost:3000/contact)
- Full contact form with all required fields
- Contact information sidebar
- Form validation built-in

---

## Testing the Site

### Desktop Testing
1. Open http://localhost:3000
2. Click through all navigation links
3. Test smooth scrolling (Home, About, Services)
4. Try the contact form
5. Click external links (Client Login, Form CRS)

### Mobile Testing
1. Open browser DevTools (F12)
2. Click device toolbar icon (Ctrl+Shift+M)
3. Select iPhone or Android device
4. Test hamburger menu
5. Verify all content is readable

---

## Making Quick Changes

### Change Colors
Edit `public/css/styles.css` - lines 11-14:
```css
--color-primary: #1e5790;    /* Main blue */
--color-secondary: #aba489;  /* Warm taupe */
--color-background: #ffffff; /* White */
--color-text: #333333;       /* Dark gray */
```

### Change Text
Edit the HTML files in `public/`:
- `index.html` - Home page content
- `team.html` - Team page content
- `contact.html` - Contact page content

### Add Team Members
Edit `team.html` - duplicate a `.team-card` div and update:
- Team member name
- Title/role
- Biography
- LinkedIn link

---

## Contact Form Setup

The form works locally but won't send emails yet. To enable email:

### Option 1: SendGrid (Easiest)
1. Sign up at https://sendgrid.com (free tier available)
2. Get API key
3. Create `.env` file:
   ```
   SENDGRID_API_KEY=your_key_here
   EMAIL_TO=contact@alamoadvisors.com
   EMAIL_FROM=noreply@alamoadvisors.com
   ```
4. Install SendGrid: `npm install @sendgrid/mail`
5. Uncomment SendGrid code in `api/contact.js` (line 82-95)

See `DEPLOYMENT.md` for other email options.

---

## Ready to Deploy?

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel
```

Follow the prompts, and your site will be live in minutes!

See `DEPLOYMENT.md` for complete deployment instructions.

---

## File Overview

**HTML Pages:**
- `public/index.html` - Home page
- `public/team.html` - Team page
- `public/contact.html` - Contact page

**Styling:**
- `public/css/styles.css` - All styles (mobile-first)

**JavaScript:**
- `public/js/main.js` - Navigation, forms, smooth scrolling

**Backend:**
- `server.js` - Development server
- `api/contact.js` - Contact form handler

**Configuration:**
- `package.json` - Dependencies
- `vercel.json` - Deployment config
- `.env.example` - Environment variables template

---

## Common Tasks

### Update Contact Information
Edit footer in all HTML files:
- Address
- Phone number
- Email
- Office hours

### Change Fonts
Edit `<head>` section in HTML files:
- Currently using Instrument Serif + Geist
- Update Google Fonts links to change

### Add New Page
1. Create new HTML file in `public/`
2. Copy header/footer from existing page
3. Add navigation link in all pages
4. Add route in `server.js` if needed

---

## Need Help?

**Documentation:**
- `README.md` - Project overview
- `DEPLOYMENT.md` - Deployment guide
- `SEC-COMPLIANCE.md` - Compliance info
- `PROJECT-SUMMARY.md` - Complete project details

**Common Issues:**
- Port 3000 in use? Change in `server.js` (line 5)
- Fonts not loading? Check internet connection
- Form not submitting? Check browser console (F12)

---

## Next Steps

1. ✅ Site running locally
2. ⬜ Customize content
3. ⬜ Add team member info
4. ⬜ Configure email service
5. ⬜ Test on mobile devices
6. ⬜ Deploy to production

---

**You're all set! Start customizing and make it yours.**
