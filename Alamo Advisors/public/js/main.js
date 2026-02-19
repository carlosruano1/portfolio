// ==========================================
// Alamo Advisors Website JavaScript
// ==========================================

// ==========================================
// Mobile Navigation Toggle
// ==========================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    }
  });
}

// ==========================================
// Smooth Scrolling for Anchor Links
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    // Skip if href is just "#"
    if (href === '#') {
      e.preventDefault();
      return;
    }
    
    const target = document.querySelector(href);
    
    if (target) {
      e.preventDefault();
      const navHeight = document.querySelector('.nav').offsetHeight;
      const targetPosition = target.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ==========================================
// Sticky Navigation on Scroll
// ==========================================
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 100) {
    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
  } else {
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
  
  lastScrollTop = scrollTop;
});

// ==========================================
// Active Navigation Link on Scroll
// ==========================================
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
    
    if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href')?.startsWith('#')) {
          link.classList.remove('active');
        }
      });
      navLink.classList.add('active');
    }
  });
}

if (sections.length > 0) {
  window.addEventListener('scroll', highlightNavLink);
}

// ==========================================
// Contact Form Validation & Submission
// ==========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  // Phone number formatting
  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  
  phoneInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      
      if (value.length > 10) {
        value = value.slice(0, 10);
      }
      
      if (value.length >= 6) {
        value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6);
      } else if (value.length >= 3) {
        value = value.slice(0, 3) + '-' + value.slice(3);
      }
      
      e.target.value = value;
    });
  });
  
  // ZIP code validation
  const zipInput = document.getElementById('zipCode');
  if (zipInput) {
    zipInput.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '').slice(0, 5);
    });
  }
  
  // Form validation functions
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  function validatePhone(phone) {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length === 10;
  }
  
  function validateZipCode(zip) {
    return /^\d{5}$/.test(zip);
  }
  
  function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + 'Error');
    
    if (field && errorElement) {
      field.classList.add('error');
      errorElement.textContent = message;
    }
  }
  
  function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + 'Error');
    
    if (field && errorElement) {
      field.classList.remove('error');
      errorElement.textContent = '';
    }
  }
  
  function clearAllErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    const errorFields = document.querySelectorAll('.error');
    
    errorMessages.forEach(msg => msg.textContent = '');
    errorFields.forEach(field => field.classList.remove('error'));
  }
  
  function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    if (formMessage) {
      formMessage.textContent = message;
      formMessage.className = `form-message ${type}`;
      formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
  
  // Real-time validation
  const formFields = contactForm.querySelectorAll('input, select, textarea');
  formFields.forEach(field => {
    field.addEventListener('blur', () => {
      validateField(field);
    });
    
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) {
        validateField(field);
      }
    });
  });
  
  function validateField(field) {
    const fieldId = field.id;
    const value = field.value.trim();
    
    // Skip honeypot field
    if (field.classList.contains('honeypot')) {
      return true;
    }
    
    // Required field check
    if (field.hasAttribute('required') && !value) {
      showError(fieldId, 'This field is required');
      return false;
    }
    
    // Email validation
    if (fieldId === 'email' && value && !validateEmail(value)) {
      showError(fieldId, 'Please enter a valid email address');
      return false;
    }
    
    // Phone validation
    if ((fieldId === 'daytimePhone' || fieldId === 'eveningPhone') && value) {
      if (!validatePhone(value)) {
        showError(fieldId, 'Please enter a valid 10-digit phone number');
        return false;
      }
    }
    
    // ZIP code validation
    if (fieldId === 'zipCode' && value && !validateZipCode(value)) {
      showError(fieldId, 'Please enter a valid 5-digit ZIP code');
      return false;
    }
    
    // State validation
    if (fieldId === 'state' && field.hasAttribute('required') && !value) {
      showError(fieldId, 'Please select a state');
      return false;
    }
    
    clearError(fieldId);
    return true;
  }
  
  // Form submission
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    clearAllErrors();
    
    // Check honeypot
    const honeypot = contactForm.querySelector('.honeypot');
    if (honeypot && honeypot.value) {
      // Likely a bot, silently fail
      showFormMessage('Thank you for your message. We will be in touch soon.', 'success');
      contactForm.reset();
      return;
    }
    
    // Validate all fields
    let isValid = true;
    const fields = contactForm.querySelectorAll('input:not(.honeypot), select, textarea');
    
    fields.forEach(field => {
      if (!validateField(field)) {
        isValid = false;
      }
    });
    
    if (!isValid) {
      showFormMessage('Please correct the errors above and try again.', 'error');
      return;
    }
    
    // Collect form data
    const formData = new FormData(contactForm);
    const data = {};
    
    formData.forEach((value, key) => {
      if (key !== 'website') { // Exclude honeypot
        data[key] = value;
      }
    });
    
    // Disable submit button
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    try {
      // Send to serverless function
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        showFormMessage('Thank you for your message. We will be in touch soon.', 'success');
        contactForm.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showFormMessage('There was an error submitting your message. Please try again or contact us directly at (210) 404-2211.', 'error');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });
}

// ==========================================
// Animated Counter for Stat Numbers
// ==========================================
function animateCounter(element, target, duration = 2000, prefix = '', suffix = '') {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = prefix + target + suffix;
      clearInterval(timer);
    } else {
      element.textContent = prefix + Math.floor(current) + suffix;
    }
  }, 16);
}

// ==========================================
// Intersection Observer for Fade-in Animations & Counter Animation
// ==========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const fadeElements = document.querySelectorAll('.service-card, .stat-card, .team-card, .why-item');

if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(20px)';
        entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 100);
        
        // Animate stat numbers if this is a stat card
        if (entry.target.classList.contains('stat-card')) {
          const statNumber = entry.target.querySelector('.stat-number');
          if (statNumber && statNumber.dataset.target) {
            const target = parseInt(statNumber.dataset.target);
            const originalText = statNumber.textContent;
            // Extract prefix and suffix from original text
            const prefix = originalText.match(/^[^\d]+/) ? originalText.match(/^[^\d]+/)[0] : '';
            const suffix = originalText.match(/[^\d]+$/) ? originalText.match(/[^\d]+$/)[0] : '';
            animateCounter(statNumber, target, 2000, prefix, suffix);
          }
        }
        
        fadeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  fadeElements.forEach(element => {
    fadeObserver.observe(element);
  });
}

// ==========================================
// Performance: Lazy Loading Images (if added later)
// ==========================================
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}

// ==========================================
// Console Message (Optional - can be removed)
// ==========================================
console.log('%cAlamo Advisors, LP', 'font-size: 20px; font-weight: bold; color: #1e5790;');
console.log('%cWebsite built with modern web standards', 'font-size: 12px; color: #666;');
