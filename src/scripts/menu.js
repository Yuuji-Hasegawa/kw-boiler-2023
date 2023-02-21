export const menu = () => {
  let btn = document.querySelector(".c-menu-btn");
  let gnav = document.querySelector(".c-header-nav-wrapper");
  function change() {
    if (btn.classList.contains("c-menu-btn:is-open")) {
      btn.setAttribute("aria-expanded", "true");
      btn.setAttribute("aria-label", "menu close");
      gnav.setAttribute("tabindex", "");
    } else {
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", "menu open");
      gnav.setAttribute("tabindex", "-1");
    }
  }
  btn.addEventListener("click", () => {
    btn.classList.toggle("c-menu-btn:is-open");
    gnav.classList.toggle("c-header-nav-wrapper:is-open");
    change();
  });
};
