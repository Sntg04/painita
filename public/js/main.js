document.addEventListener('DOMContentLoaded', function() {
  // Configuración de la calculadora
  const montoSlider = document.getElementById('monto');
  const plazoSlider = document.getElementById('plazo');
  const montoValue = document.getElementById('montoValue');
  const plazoValue = document.getElementById('plazoValue');
  const solicitarBtn = document.getElementById('solicitarBtn');

  // Formatear montos (ej: $500K o $1.2M)
  function formatMoney(amount) {
    if (amount >= 1000000) {
      return `$${(amount/1000000).toFixed(1)}M`;
    }
    return `$${(amount/1000).toFixed(0)}K`;
  }

  // Actualizar valores visuales
  function updateValues() {
    montoValue.textContent = formatMoney(montoSlider.value);
    plazoValue.textContent = `${plazoSlider.value} días`;
  }

  // Event Listeners
  montoSlider.addEventListener('input', updateValues);
  plazoSlider.addEventListener('input', updateValues);
  
  solicitarBtn.addEventListener('click', function() {
    window.location.href = `/solicitar?monto=${montoSlider.value}&plazo=${plazoSlider.value}`;
  });

  // Inicializar valores
  updateValues();

  // Smooth scrolling para anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});