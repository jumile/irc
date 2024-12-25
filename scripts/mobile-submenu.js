(() => {
  // source/scripts/mobile-submenu.js
  var submenuLinks = document.querySelectorAll(".main-nav__link--submenu");
  var submenus = document.querySelectorAll(".submenu");
  submenuLinks.forEach((clickedLink) => {
    clickedLink.addEventListener("click", (e) => {
      e.preventDefault();
      const submenuWrapper = clickedLink.parentNode;
      const submenu = submenuWrapper.querySelector(".submenu");
      for (let link of submenuLinks) {
        if (link.classList.contains("main-nav__link--submenu-closed") && link !== clickedLink) {
          link.classList.remove("main-nav__link--submenu-closed");
          for (let menu of submenus) {
            if (menu.classList.contains("main-nav__submenu--opened"))
              menu.classList.remove("main-nav__submenu--opened");
          }
        }
      }
      submenu.classList.toggle("main-nav__submenu--opened");
      clickedLink.classList.toggle("main-nav__link--submenu-closed");
    });
  });
  document.body.addEventListener("click", (e) => {
    let target = e.target;
    if (!target.classList.contains("main-nav__link--submenu")) {
      for (let menu of submenus) {
        menu.classList.remove("main-nav__submenu--opened");
      }
      for (let link of submenuLinks) {
        link.classList.remove("main-nav__link--submenu-closed");
      }
    }
  });
})();
//# sourceMappingURL=mobile-submenu.js.map
