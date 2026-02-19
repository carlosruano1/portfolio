const nodemailer = require('nodemailer');

// Simple in-memory rate limit (5 per 15 min per IP - resets on cold start)
const submissions = new Map();
const LIMIT = 5;
const WINDOW_MS = 15 * 60 * 1000;

function checkRateLimit(ip) {
  const now = Date.now();
  const bucket = submissions.get(ip) || { count: 0, resetAt: now + WINDOW_MS };
  if (now > bucket.resetAt) {
    bucket.count = 0;
    bucket.resetAt = now + WINDOW_MS;
  }
  bucket.count++;
  submissions.set(ip, bucket);
  return bucket.count <= LIMIT;
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ error: 'Too many submissions. Please try again later.' });
  }

  const { firstName, lastName, email, daytimePhone, comments, addressStreet1, city, state, zipCode } = req.body || {};
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
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
  } else if (process.env.SENDGRID_API_KEY) {
    transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      auth: { user: 'apikey', pass: process.env.SENDGRID_API_KEY },
    });
  }

  if (!transporter) {
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
};
