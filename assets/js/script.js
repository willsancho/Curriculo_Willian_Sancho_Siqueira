/**
 * Lógica de Impressão e Modo Econômico do CV
 */
function printCV(mode) {
  if (mode === 'eco') {
    // Ativa o modo econômico e chama a janela de impressão
    document.body.classList.add('eco-mode');
    window.print();
  } else {
    // Garante o modo colorido normal e chama a janela de impressão
    document.body.classList.remove('eco-mode');
    window.print();
  }
}