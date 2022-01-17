let text = document.querySelector("#text");
let btn = document.querySelector("#hider");

btn.addEventListener("click", () => {
  text.textContent = "";
});
