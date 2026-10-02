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
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const dashboard = document.querySelector('.dashboard-preview');
window.addEventListener('pointermove', e => {
  if (!dashboard || window.innerWidth < 900) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;
  dashboard.style.transform =
    `perspective(1300px) rotateX(${2 - y * 1.2}deg) rotateY(${x * 1.4}deg)`;
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
