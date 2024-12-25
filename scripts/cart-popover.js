(() => {
  // source/scripts/cart-popover.js
  var headerCartBtn = document.querySelector(".user-menu .button-cart");
  var ipadPanelCartBtn = document.querySelector(".ipad-panel__link--cart");
  var cartPopover = document.querySelector(".cart-popover");
  var cartPopoverCloseBtn = cartPopover.querySelector(".cart-popover__close");
  function openCart(e) {
    e.preventDefault();
    cartPopover.classList.remove("cart-popover--closed");
    document.body.classList.add("page__container--open-modal");
  }
  function closeCart() {
    cartPopover.classList.add("cart-popover--closed");
    document.body.classList.remove("page__container--open-modal");
  }
  headerCartBtn.addEventListener("click", (e) => {
    openCart(e);
  });
  ipadPanelCartBtn.addEventListener("click", (e) => {
    openCart(e);
  });
  cartPopoverCloseBtn.addEventListener("click", () => {
    closeCart();
  });
  cartPopover.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains("cart-popover")) {
      closeCart();
    }
  });
})();
//# sourceMappingURL=cart-popover.js.map
