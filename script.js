// ===== Portfolio Script =====

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => navMenu.classList.toggle('open'));
navMenu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navMenu.classList.remove('open'))
);

// Active section highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = navMenu.querySelectorAll('a');
window.addEventListener('scroll', () => {
  const y = window.scrollY + 100;
  sections.forEach(s => {
    const top = s.offsetTop;
    const h = s.offsetHeight;
    const id = s.getAttribute('id');
    if (y >= top && y < top + h) {
      navLinks.forEach(l => l.classList.remove('active'));
      const link = navMenu.querySelector(`a[href="#${id}"]`);
      if (link) link.classList.add('active');
    }
  });
});


//role
const roleEl = document.getElementById('roleText');
roleEl.textContent = 'Full Stack Developer';

// Contact form
//document.getElementById('contactForm').addEventListener('submit', e => {
  //e.preventDefault();
  //alert('Thank you!');
  //e.target.reset();
//});
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  formStatus.textContent = '';

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: new FormData(contactForm),
    });
    const data = await res.json();

    if (data.success) {
      formStatus.textContent = '✅ Message sent! I\'ll get back to you soon.';
      formStatus.style.color = 'green';
      contactForm.reset();
    } else {
      formStatus.textContent = '❌ Something went wrong. Please try again.';
      formStatus.style.color = 'red';
    }
  } catch (err) {
    formStatus.textContent = '❌ Network error. Please try again.';
    formStatus.style.color = 'red';
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
});

