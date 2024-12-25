(() => {
  // source/scripts/mobile-nav.js
  var burgerBtn = document.querySelector(".burger-button");
  var mobileMenu = document.querySelector(".header__navigation");
  var closeMenuBtn = document.querySelector(".navigation__close-button");
  burgerBtn.addEventListener("click", () => {
    mobileMenu.classList.add("header__navigation--open");
  });
  closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("header__navigation--open");
  });
  document.body.addEventListener("click", (e) => {
    let target = e.target;
    if (!target.classList.contains("main-nav__link") && !target.classList.contains("burger-button__line") && !target.classList.contains("burger-button__lines") && !target.classList.contains("navigation")) {
      mobileMenu.classList.remove("header__navigation--open");
    }
  });
  var profile = document.querySelector(".profile");
  var closeProfileBtn = document.querySelector(".profile__close");
  var profileLink = document.querySelector(".main-nav__link--profile");
  var profileLink2 = document.querySelector(".ipad-panel__link--profile");
  var profileLink3 = document.querySelector(".user-menu__link--profile");
  function openUserProfileEntry(e) {
    e.preventDefault();
    profile.classList.remove("profile--closed");
    mobileMenu.classList.remove("header__navigation--open");
    document.body.classList.add("page__container--open-modal");
  }
  function closeUserProfileEntry() {
    profile.classList.add("profile--closed");
    document.body.classList.remove("page__container--open-modal");
  }
  closeProfileBtn.addEventListener("click", () => {
    closeUserProfileEntry();
  });
  profile.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains("profile")) {
      closeUserProfileEntry();
    }
  });
  profileLink.addEventListener("click", (e) => {
    openUserProfileEntry(e);
  });
  profileLink2.addEventListener("click", (e) => {
    openUserProfileEntry(e);
  });
  profileLink3.addEventListener("click", (e) => {
    openUserProfileEntry(e);
  });
})();
//# sourceMappingURL=mobile-nav.js.map
