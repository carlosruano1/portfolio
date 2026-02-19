# Alamo Advisors Website - Deployment Guide

## Pre-Deployment Checklist

### 1. Install Dependencies
```bash
npm install
```

### 2. Test Locally
```bash
# Development server with auto-reload
npm run dev

# Production server
npm start
```

Visit `http://localhost:3000` to test the site.

### 3. Configure Email Service

Choose one email service for contact form submissions:

#### Option A: SendGrid (Recommended)
1. Sign up at https://sendgrid.com/
2. Get your API key
3. Add to environment variables:
   ```
   SENDGRID_API_KEY=your_api_key_here
   EMAIL_TO=contact@alamoadvisors.com
   EMAIL_FROM=noreply@alamoadvisors.com
   ```
4. Install SendGrid package:
   ```bash
   npm install @sendgrid/mail
   ```
5. Uncomment SendGrid code in `api/contact.js`

#### Option B: SMTP (Nodemailer)
1. Get SMTP credentials from your email provider
2. Add to environment variables:
   ```
   SMTP_HOST=smtp.example.com
   SMTP_PORT=465
   SMTP_USER=your_username
   SMTP_PASS=your_password
   EMAIL_TO=contact@alamoadvisors.com
   EMAIL_FROM=noreply@alamoadvisors.com
   ```
3. Install Nodemailer:
   ```bash
   npm install nodemailer
   ```
4. Uncomment Nodemailer code in `api/contact.js`

#### Option C: AWS SES
1. Configure AWS SES in your AWS account
2. Get access keys
3. Add to environment variables:
   ```
   AWS_ACCESS_KEY_ID=your_access_key
   AWS_SECRET_ACCESS_KEY=your_secret_key
   AWS_REGION=us-east-1
   EMAIL_TO=contact@alamoadvisors.com
   EMAIL_FROM=noreply@alamoadvisors.com
   ```
4. Install AWS SDK:
   ```bash
   npm install aws-sdk
   ```
5. Uncomment AWS SES code in `api/contact.js`

## Deployment to Vercel (Recommended)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- Project name? **alamo-advisors**
- Directory? **./public**

### Step 4: Configure Environment Variables
In Vercel Dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add your email service credentials
4. Redeploy

### Step 5: Custom Domain
1. Go to project settings > Domains
2. Add `alamoadvisors.com` (or your domain)
3. Follow DNS configuration instructions

## Deployment to Netlify

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify
```bash
netlify login
```

### Step 3: Initialize Site
```bash
netlify init
```

### Step 4: Configure Build Settings
- Build command: (leave empty)
- Publish directory: `public`
- Functions directory: `api`

### Step 5: Deploy
```bash
netlify deploy --prod
```

### Step 6: Environment Variables
```bash
netlify env:set SENDGRID_API_KEY "your_key_here"
netlify env:set EMAIL_TO "contact@alamoadvisors.com"
netlify env:set EMAIL_FROM "noreply@alamoadvisors.com"
```

## Post-Deployment Tasks

### 1. Test Contact Form
- Submit a test inquiry
- Verify email is received
- Check spam folder if needed

### 2. Test All Links
- Client Login link
- Form CRS PDF link
- Form ADV link
- All navigation links

### 3. Mobile Testing
Test on various devices:
- iPhone (Safari)
- Android (Chrome)
- iPad (Safari)
- Desktop (Chrome, Firefox, Safari, Edge)

### 4. Performance Testing
- Run Google PageSpeed Insights
- Check Core Web Vitals
- Optimize if needed

### 5. SEO Setup
- Submit sitemap to Google Search Console
- Verify meta descriptions
- Check structured data

### 6. Analytics (Optional)
Add Google Analytics 4:
1. Create GA4 property
2. Add tracking code to all HTML files before `</head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

## Security Checklist

- [ ] HTTPS enabled (automatic with Vercel/Netlify)
- [ ] Environment variables secured
- [ ] Form has honeypot spam protection
- [ ] Rate limiting configured (optional)
- [ ] CORS headers properly set
- [ ] No sensitive data in client-side code

## Maintenance

### Regular Updates
- Review and update content quarterly
- Check for broken links monthly
- Update Form CRS when required by SEC
- Monitor contact form submissions

### Backup
- Export environment variables
- Keep local copy of all files
- Document any custom configurations

## Troubleshooting

### Contact Form Not Working
1. Check browser console for errors
2. Verify API endpoint is accessible
3. Check environment variables are set
4. Review serverless function logs

### Fonts Not Loading
1. Check Google Fonts/Fontshare CDN status
2. Verify font URLs in HTML
3. Check browser network tab

### Mobile Menu Not Working
1. Check JavaScript console for errors
2. Verify main.js is loaded
3. Clear browser cache

## Support

For technical issues:
- Check deployment platform documentation
- Review error logs in platform dashboard
- Test locally first to isolate issues

For content updates:
- Edit HTML files in `public/` directory
- Update styles in `public/css/styles.css`
- Redeploy after changes
