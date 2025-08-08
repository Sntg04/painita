document.getElementById('formPrestamo').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const monto = document.getElementById('monto').value;
  
  try {
    const response = await fetch('/api/prestamos/solicitar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        monto: monto,
        plazo: 30,
        cliente_id: 1 // Ejemplo
      })
    });
    
    const data = await response.json();
    document.getElementById('resultado').innerHTML = `
      <div class="alert alert-success">
        Préstamo #${data.prestamo_id} solicitado correctamente
      </div>
    `;
  } catch (error) {
    console.error('Error:', error);
  }
});