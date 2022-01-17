let pane = document.querySelectorAll(".pane");

for (let el of pane) {
  el.insertAdjacentHTML(
    "afterbegin",
    '<button class="remove-button">[x]</button>'
  );

  el.firstChild.addEventListener("click", () => {
    el.remove();
  });
}
