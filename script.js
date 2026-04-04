// ── MOBILE MENU ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ── SCROLL ANIMATIONS ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity   = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.feature-card, .timeline-item, .diff-item, .vm-card, .visit-card, .extra-card, .prog-row'
).forEach(el => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ── CONTACT FORM VALIDATION ──
function submitForm() {
  let valid = true;

  const fields = [
    { id: 'parentName', errId: 'err-parentName' },
    { id: 'childName',  errId: 'err-childName'  },
    { id: 'phone',      errId: 'err-phone'       },
    { id: 'childAge',   errId: 'err-childAge'    },
    { id: 'interest',   errId: 'err-interest'    },
  ];

  fields.forEach(f => {
    const el  = document.getElementById(f.id);
    const err = document.getElementById(f.errId);
    if (!el || !err) return;
    if (!el.value.trim()) {
      el.classList.add('error');
      err.classList.add('show');
      valid = false;
    } else {
      el.classList.remove('error');
      err.classList.remove('show');
    }
  });

  if (valid) {
    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('successMsg').classList.add('show');
  }
}

// Clear error on input
document.querySelectorAll('.form-group input, .form-group select').forEach(el => {
  el.addEventListener('input', () => {
    el.classList.remove('error');
    const errEl = document.getElementById('err-' + el.id);
    if (errEl) errEl.classList.remove('show');
  });
});

// ── FAQ TOGGLE ──
function toggleFaq(item) {
  const allItems = document.querySelectorAll('.faq-item');
  allItems.forEach(i => {
    if (i !== item) i.classList.remove('open');
  });
  item.classList.toggle('open');
}