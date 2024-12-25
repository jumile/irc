(() => {
  // source/scripts/how-use.js
  var howUseButton = document.querySelector(".care-program__how-use-link");
  var howUseBlock = document.querySelector(".care-program__how-use");
  if (howUseButton) {
    howUseButton.addEventListener("click", () => {
      howUseBlock.classList.toggle("care-program__how-use--close");
    });
  }
})();
//# sourceMappingURL=how-use.js.map
