const cursor = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', e => {
  if (cursor) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const dashboard = document.querySelector('.dashboard-preview');
window.addEventListener('pointermove', e => {
  if (!dashboard || window.innerWidth < 960) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;
  dashboard.style.transform =
    `perspective(1400px) rotateX(${3 - y * 1.5}deg) rotateY(${x * 1.8}deg)`;
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    if (id && id !== '#') {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const navActions = document.querySelector('.nav-actions');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    if (isOpen) {
      navLinks.style.display = 'none';
      navActions.style.display = 'none';
    } else {
      navLinks.style.cssText = 'display:flex; flex-direction:column; position:absolute; top:84px; left:0; right:0; background:rgba(3,11,28,0.95); padding:24px; border-bottom:1px solid rgba(255,255,255,0.1); backdrop-filter:blur(20px);';
      navActions.style.cssText = 'display:flex; flex-direction:column; position:absolute; top:250px; left:0; right:0; background:rgba(3,11,28,0.95); padding:0 24px 24px 24px; gap:12px;';
    }
  });
}
