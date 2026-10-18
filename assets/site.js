// Portfolio : bouton « Voir plus » (au-delà de 9 sites). Sans JavaScript, tous les sites sont affichés (<noscript>).

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('voir-plus');
  const grid = document.getElementById('grille');
  if (!button || !grid) return;
  button.addEventListener('click', () => {
    const first = grid.querySelector('.extra');
    grid.classList.remove('collapsed');
    button.setAttribute('aria-expanded', 'true');
    button.parentElement.hidden = true;
    // Le premier site affiché reçoit le focus (navigation au clavier).
    if (first) first.focus({ preventScroll: true });
  });
});
