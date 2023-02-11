function initscroll() {
  const initScroll = document.querySelectorAll(".js-scroll");
  const heigth = window.innerHeight * 0.6;

  function animeScroll() {
    initScroll.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - heigth;
      if (sectionTop < 0) {
        section.classList.add("ativo");
      }
    });
  }
  animeScroll();
  window.addEventListener("scroll", animeScroll);
}
initscroll();

const linksInternos = document.querySelectorAll('.header-menu a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  const topo = section.offsetTop;
  window.scrollTo({
    top: topo,
    behavior: "smooth",
  });
}

linksInternos.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});
