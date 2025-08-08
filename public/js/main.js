document.addEventListener('DOMContentLoaded', function() {
  const montoSlider = document.getElementById('monto');
  const plazoSlider = document.getElementById('plazo');
  const montoValue = document.getElementById('montoValue');
  const plazoValue = document.getElementById('plazoValue');
  const interesElement = document.getElementById('interes');
  const totalElement = document.getElementById('total');
  const solicitarBtn = document.getElementById('solicitarBtn');

  // Formatear dinero
  const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  });

  // Calcular préstamo
  function calcularPrestamo() {
    const monto = parseInt(montoSlider.value);
    const plazo = parseInt(plazoSlider.value);
    
    // Fórmula de interés simple (ejemplo: 5% mensual)
    const interes = Math.round(monto * 0.05 * (plazo / 30));
    const total = monto + interes;
    
    // Actualizar UI
    montoValue.textContent = formatter.format(monto);
    plazoValue.textContent = `${plazo} días`;
    interesElement.textContent = formatter.format(interes);
    totalElement.textContent = formatter.format(total);
  }

  // Event listeners
  montoSlider.addEventListener('input', calcularPrestamo);
  plazoSlider.addEventListener('input', calcularPrestamo);
  solicitarBtn.addEventListener('click', () => {
    window.location.href = `/solicitar?monto=${montoSlider.value}&plazo=${plazoSlider.value}`;
  });

  // Calcular al cargar
  calcularPrestamo();
});