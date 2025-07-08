// Ajoute automatiquement l'année actuelle dans le footer
document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const footer = document.querySelector("footer p");
  if (footer) {
    footer.innerHTML = `&copy; ${year} JUNIOR PORTFOLIO`;
  }

  // Gestion simple du formulaire de contact
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Merci pour votre message ! Je vous répondrai dès que possible.");
      form.reset();
    });
  }
});
