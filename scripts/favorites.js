(() => {
  // source/scripts/favorites.js
  var favButton = document.querySelectorAll(".button-favorite");
  favButton.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("button-favorite--selected");
    });
  });
})();
//# sourceMappingURL=favorites.js.map
