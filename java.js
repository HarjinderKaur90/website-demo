document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("main section");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      // Reset opacity for all sections
      sections.forEach(sec => {
        sec.style.opacity = "0.2";
        sec.style.pointerEvents = "none";
      });

      // Show target section
      target.style.opacity = "1";
      target.style.pointerEvents = "auto";
     target.scrollIntoView({ behavior: "smooth", block: "start" });

    });
  });
});
