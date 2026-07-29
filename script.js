// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
  // Seleção dos elementos da interface
  const btnContrast = document.getElementById('btn-contrast');
  const btnIncreaseFont = document.getElementById('btn-increase-font');
  const btnDecreaseFont = document.getElementById('btn-decrease-font');
  const body = document.body;
  const html = document.documentElement;

  // Controle de Fonte
  let currentFontSize = 100; // Porcentagem inicial

  btnIncreaseFont.addEventListener('click', () => {
    if (currentFontSize < 150) { // Limite máximo de aumento
      currentFontSize += 10;
      html.style.fontSize = `${currentFontSize}%`;
    }
  });

  btnDecreaseFont.addEventListener('click', () => {
    if (currentFontSize > 80) { // Limite mínimo
      currentFontSize -= 10;
      html.style.fontSize = `${currentFontSize}%`;
    }
  });

  // Alternar Alto Contraste
  btnContrast.addEventListener('click', () => {
    body.classList.toggle('high-contrast');
    
    // Atualiza o estado do atributo ARIA para leitores de tela
    const isHighContrast = body.classList.contains('high-contrast');
    btnContrast.setAttribute('aria-pressed', isHighContrast);
  });

  // Evento do Formulário
  const form = document.getElementById('feedback-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Obrigado pelo seu feedback! Sua mensagem foi enviada com sucesso.');
    form.reset();
  });
});