document.addEventListener("DOMContentLoaded", () => {
  // Selectează toate link-urile din bara de navigare care încep cu '#'
  const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Oprește comportamentul implicit al link-ului (nu modifică URL-ul și nu sare brusc)

      // Extrage ID-ul secțiunii (ex: "home_section", "about_section") din atributul href
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      // Dacă elementul țintă există, derulează lin la el
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });

        // Opțional: Actualizează URL-ul în istoric FĂRĂ a reîncărca pagina sau a sări.
        // Aceasta este pentru a permite bookmarking-ul sau butonul "back" al browserului să funcționeze.
        // Dacă nu vrei să se schimbe URL-ul deloc (nici măcar cu #), poți șterge linia de mai jos.
        // history.pushState(null, '', this.getAttribute('href'));
      }
    });
  });
});
