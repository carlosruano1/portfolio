require('dotenv').config();
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Trust proxy (Render, Heroku, etc.)
app.set('trust proxy', 1);

// Security headers
app.use(helmet({ contentSecurityPolicy: false })); // CSP often breaks fonts/external assets

// Compression
app.use(compression());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limit contact form (5 per 15 min per IP)
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many submissions. Please try again later.' },
});

// Serve static files with proper MIME types
app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res, filepath) => {
    if (filepath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    } else if (filepath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    } else if (filepath.endsWith('.xml')) {
      res.setHeader('Content-Type', 'application/xml');
    } else if (filepath.endsWith('.txt')) {
      res.setHeader('Content-Type', 'text/plain');
    } else if (filepath.endsWith('.webp')) {
      res.setHeader('Content-Type', 'image/webp');
    } else if (filepath.endsWith('.gif')) {
      res.setHeader('Content-Type', 'image/gif');
    }
  },
  maxAge: '1d'
}));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/team', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'team.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/faq', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'faq.html'));
});

app.get('/proposal-disclosure', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'proposal-disclosure.html'));
});

// SEO routes
app.get('/sitemap.xml', (req, res) => {
  res.type('application/xml');
  res.sendFile(path.join(__dirname, 'public', 'sitemap.xml'));
});

app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.sendFile(path.join(__dirname, 'public', 'robots.txt'));
});

// Health check (for load balancers / platforms)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Contact form API
app.post('/api/contact', contactLimiter, async (req, res) => {
  const { firstName, lastName, email, daytimePhone, comments, addressStreet1, city, state, zipCode } = req.body;
  if (!firstName || !lastName || !email || !comments) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const emailTo = process.env.EMAIL_TO || 'contact@alamoadvisors.com';
  const emailFrom = process.env.EMAIL_FROM || 'noreply@alamoadvisors.com';

  let transporter;
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  } else if (process.env.SENDGRID_API_KEY) {
    transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY,
      },
    });
  }

  if (!transporter) {
    console.error('No email configured: set SMTP_* or SENDGRID_API_KEY in env');
    return res.status(503).json({ error: 'Contact form temporarily unavailable' });
  }

  const body = [
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Phone: ${daytimePhone || 'N/A'}`,
    `Address: ${[addressStreet1, city, state, zipCode].filter(Boolean).join(', ')}`.trim() || 'N/A',
    '',
    'Message:',
    comments,
  ].join('\n');

  try {
    await transporter.sendMail({
      from: emailFrom,
      to: emailTo,
      replyTo: email,
      subject: `Website Inquiry from ${firstName} ${lastName}`,
      text: body,
    });
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Start server (only when run directly, not when imported)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Alamo Advisors website running on http://localhost:${PORT}`);
  });
}

// Export for Vercel serverless
module.exports = app;
