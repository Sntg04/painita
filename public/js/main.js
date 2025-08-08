document.addEventListener('DOMContentLoaded', function() {
  // Efecto navbar al hacer scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Calculadora de préstamo
  const montoSlider = document.getElementById('monto');
  const plazoSlider = document.getElementById('plazo');
  const montoValue = document.getElementById('montoValue');
  const plazoValue = document.getElementById('plazoValue');
  const solicitarBtn = document.getElementById('solicitarBtn');

  function formatMoney(amount) {
    if (amount >= 1000000) {
      return `$${(amount/1000000).toFixed(1)}M`;
    }
    return `$${(amount/1000).toFixed(0)}K`;
  }

  function updateValues() {
    montoValue.textContent = formatMoney(montoSlider.value);
    plazoValue.textContent = `${plazoSlider.value} días`;
  }

  montoSlider.addEventListener('input', updateValues);
  plazoSlider.addEventListener('input', updateValues);
  
  solicitarBtn.addEventListener('click', function() {
    window.location.href = `/solicitar?monto=${montoSlider.value}&plazo=${plazoSlider.value}`;
  });

  updateValues();

  // Scroll suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Animaciones al hacer scroll
  const animateElements = document.querySelectorAll('.benefit-card, .testimonial-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-section');
      }
    });
  }, { threshold: 0.1 });

  animateElements.forEach(el => observer.observe(el));
});