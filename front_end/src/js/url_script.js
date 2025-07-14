document.addEventListener("DOMContentLoaded", () => {
  const smoothScrollTo = (targetElement) => {
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      smoothScrollTo(targetElement);

      history.replaceState(null, "", window.location.pathname);
    });
  });

  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const attemptScroll = () => {
        smoothScrollTo(targetElement);
        history.replaceState(null, "", window.location.pathname);
      };

      setTimeout(attemptScroll, 150);
    }
  }
});
