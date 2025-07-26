// Animación en scroll
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  for (let r of reveals) {
    const top = r.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      r.classList.add("active");
    }
  }
});

// Validación de formulario
document.getElementById("formulario").addEventListener("submit", function (e) {
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !correo || !mensaje) {
    alert("Por favor completa todos los campos.");
    e.preventDefault();
  }
});