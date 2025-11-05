
function alternarModoEscuro() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('modoEscuro', document.body.classList.contains('dark-mode'));
}

window.onload = function() {
  if (localStorage.getItem('modoEscuro') === 'true') {
    document.body.classList.add('dark-mode');
  }
};
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  
  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  // Fecha menu ao clicar em qualquer link
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
    });
  });
});

document.getElementById("toggle-contrast")?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});