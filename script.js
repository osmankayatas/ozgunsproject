const navLinks = Array.from(document.querySelectorAll(".top-nav .nav-link"));

function setActiveLink(targetHash) {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === targetHash);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const hash = link.getAttribute("href");
    if (hash) {
      setActiveLink(hash);
    }
  });
});

window.addEventListener("hashchange", () => {
  if (window.location.hash) {
    setActiveLink(window.location.hash);
  }
});

if (window.location.hash) {
  setActiveLink(window.location.hash);
}
