document.addEventListener("DOMContentLoaded", () => {
  const smoothScrollTo = (targetElement) => {
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // 1. GESTIONARE CLICK-URI PE LINK-URILE DE PE PAGINA CURENTĂ
  const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Oprește comportamentul implicit al link-ului

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      smoothScrollTo(targetElement);

      // Pentru click-uri pe aceeași pagină, menținem URL-ul curat
      history.replaceState(null, "", window.location.pathname);
    });
  });

  // 2. GESTIONARE ANCORE LA ÎNCĂRCAREA PAGINII (când vii de pe altă pagină cu #ancoră)
  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // NOUA ABORDARE: Forțăm scroll-ul imediat și apoi cu un mic delay
      // pentru a acoperi cazurile în care DOM-ul nu este complet "gata" imediat.
      // Acest lucru ar trebui să fie mai fiabil.
      const attemptScroll = () => {
        smoothScrollTo(targetElement);
        // Curăță #ancora din URL după derulare, pentru a menține URL-ul curat.
        history.replaceState(null, "", window.location.pathname);
      };

      // Încercăm imediat
      //   attemptScroll();

      // Și apoi, după un scurt moment, pentru siguranță, în cazul în care randarea durează mai mult
      setTimeout(attemptScroll, 150); // Un delay de 150ms ar trebui să fie suficient
    }
  }
});
