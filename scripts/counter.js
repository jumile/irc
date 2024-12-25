(() => {
  // source/scripts/counter.js
  document.body.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains("count-button--plus")) {
      const targetParent = target.parentNode;
      const targetField = targetParent.querySelector('input[type="number"]');
      const minusBtn = targetParent.querySelector(".count-button--minus");
      increaseCount(targetField, minusBtn);
    }
    if (target.classList.contains("count-button--minus")) {
      const targetParent = target.parentNode;
      const targetField = targetParent.querySelector('input[type="number"]');
      decreaseCount(targetField, target);
    }
  });
  function increaseCount(field, target) {
    target.disabled = false;
    let currentValue = Number(field.value);
    currentValue++;
    field.value = currentValue;
  }
  function decreaseCount(field, btn) {
    let currentValue = Number(field.value);
    if (currentValue > 0)
      currentValue--;
    if (currentValue === 0)
      btn.disabled = true;
    field.value = currentValue;
  }
})();
//# sourceMappingURL=counter.js.map
