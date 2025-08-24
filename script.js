// Sticky nav on scroll
const nav = document.getElementById('siteNav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) nav.classList.add('solid');
  else nav.classList.remove('solid');
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  mobileMenu.style.display = expanded ? 'none' : 'block';
});

// Close mobile menu on outside click
document.addEventListener('click', (ev)=>{
  if (!mobileMenu.contains(ev.target) && !navToggle.contains(ev.target) && window.innerWidth <= 640){
    mobileMenu.style.display = 'none';
    navToggle.setAttribute('aria-expanded','false');
  }
});

// Set copy year
document.getElementById('copyYear').textContent = new Date().getFullYear();