(() => {
  // source/scripts/popovers.js
  var buttons = document.querySelectorAll(".ingredients__list-link");
  var popovers = document.querySelectorAll(".ingredients__descr");
  var ingrList = document.querySelector(".ingredients__list");
  if (buttons.length > 0) {
    let firstLink = Math.round(buttons[0].getBoundingClientRect().x);
    const styles = window.getComputedStyle(ingrList);
    let gap = parseInt(styles.columnGap);
    const popoverCoords = function(link, popover) {
      let linkCoords = link.getBoundingClientRect();
      let xLink = Math.round(linkCoords.x);
      let linkWidth = Math.round(linkCoords.width);
      let left = Math.round(linkWidth / 2 + xLink - firstLink - gap / 2);
      if (window.innerWidth < 834) {
        left = 45;
      }
      if (left < 0) {
        left = 45;
      }
      popover.style.left = left + "px";
    };
    buttons.forEach((link, index) => {
      link.addEventListener("mouseover", (ev) => {
        popovers.forEach((item, inx) => {
          if (inx === index) {
            popoverCoords(link, item);
            item.style.display = "block";
          }
        });
      });
      link.addEventListener("click", (ev) => {
        ev.preventDefault();
        popovers.forEach((item, inx) => {
          if (inx === index) {
            popoverCoords(link, item);
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
      link.addEventListener("mouseout", () => {
        popovers.forEach((item, inx) => {
          if (inx === index) {
            item.style.display = "none";
          }
        });
      });
    });
  }
})();
//# sourceMappingURL=popovers.js.map
