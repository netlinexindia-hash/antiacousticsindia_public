// Anti Acoustics India — main.js

/* ── Navbar scroll effect ─────────────────────────────────── */
const navbar = document.querySelector('.navbar');
const solidNavPages = ['about.html','products.html','specifications.html','pricing.html','contact.html'];
const currentPage = window.location.pathname.split('/').pop();

if (solidNavPages.includes(currentPage)) {
  navbar && navbar.classList.add('solid');
} else {
  window.addEventListener('scroll', () => {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* ── Active nav link ──────────────────────────────────────── */
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

/* ── Hamburger menu ───────────────────────────────────────── */
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger && hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close on link click
navLinks && navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger && hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Close on outside click
document.addEventListener('click', e => {
  if (navLinks && hamburger && !navbar.contains(e.target)) {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  }
});

/* ── Scroll fade-in animation ─────────────────────────────── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* ── Contact form handler ─────────────────────────────────── */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const name  = document.getElementById('name')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const phone = document.getElementById('phone')?.value || '';
    const company = document.getElementById('company')?.value || '';
    const message = document.getElementById('message')?.value || '';
    const subject = `Enquiry from ${name}${company ? ' ('+company+')' : ''} via antiacousticsindia.com`;
    const body = `Name: ${name}\nCompany: ${company}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`;
    window.location.href = `mailto:anil14@antiacousticsindia.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    btn.textContent = '✓ Opening your email client...';
    btn.style.background = '#10B981';
    setTimeout(() => {
      btn.textContent = 'Send Enquiry';
      btn.style.background = '';
      contactForm.reset();
    }, 3000);
  });
}

/* ── Smooth scroll for anchor links ──────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
