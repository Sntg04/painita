document.addEventListener('DOMContentLoaded', function() {
  const montoSlider = document.getElementById('monto');
  const plazoSlider = document.getElementById('plazo');
  const montoValue = document.getElementById('montoValue');
  const plazoValue = document.getElementById('plazoValue');
  const solicitarBtn = document.getElementById('solicitarBtn');

  // Formatear dinero (simplificado)
  function formatMoney(amount) {
    if (amount >= 1000000) {
      return `$${(amount/1000000).toFixed(1)}M`;
    }
    return `$${(amount/1000).toFixed(0)}K`;
  }

  // Actualizar valores
  function updateValues() {
    const monto = parseInt(montoSlider.value);
    const plazo = parseInt(plazoSlider.value);
    
    montoValue.textContent = formatMoney(monto);
    plazoValue.textContent = `${plazo} días`;
  }

  // Event listeners
  montoSlider.addEventListener('input', updateValues);
  plazoSlider.addEventListener('input', updateValues);
  solicitarBtn.addEventListener('click', () => {
    window.location.href = `/solicitar?monto=${montoSlider.value}&plazo=${plazoSlider.value}`;
  });

  // Inicializar
  updateValues();
});