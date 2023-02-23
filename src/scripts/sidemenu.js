export const sidemenu = () => {
  let btn = document.querySelector(".c-sidebar-btn");
  let cover = document.querySelector(".c-sidebar-bg");
  let sidebar = document.querySelector(".c-sidebar");
  function check() {
    if (btn.classList.contains("c-sidebar-btn:is-open")) {
      let nowscroll = document.documentElement.scrollTop || document.body.scrollTop;
      document.body.style.top = -1 * nowscroll + "px";
      document.body.classList.add("is-fixed");
      btn.setAttribute("aria-expanded", "true");
      btn.setAttribute("aria-label", "menu close");
      sidebar.setAttribute("tabindex", "");
      sidebar.setAttribute("aria-hidden", "false");
    } else {
      var pos = parseInt(document.body.style.top);
      if (pos != "0") {
        pos = pos * -1;
      }
      document.body.style.top = 0;
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", "menu open");
      sidebar.setAttribute("tabindex", "-1");
      sidebar.setAttribute("aria-hidden", "true");
      document.body.classList.remove("is-fixed");
      window.scrollTo({
        top: pos,
        left: 0,
        behavior: "instant" /* css smooth-scroll の影響をカット */,
      });
    }
  }
  btn.addEventListener("click", () => {
    btn.classList.toggle("c-sidebar-btn:is-open");
    sidebar.classList.toggle("c-sidebar:is-open");
    check();
  });
  cover.addEventListener("click", () => {
    btn.classList.remove("c-sidebar-btn:is-open");
    sidebar.classList.remove("c-sidebar:is-open");
    check();
  });
};
