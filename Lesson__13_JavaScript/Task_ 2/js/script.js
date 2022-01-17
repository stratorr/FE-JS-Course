function showNotification({ top = 0, right = 0, className, html }) {
  let div = document.createElement("div");
  div.className = "notification";
  if (className) {
    div.classList.add(className);
  }
  div.style.top = top + "px";
  div.style.right = right + "px";
  div.innerHTML = html;

  document.body.append(div);

  setTimeout(() => div.remove(), 1500);
}

let i = 1;
setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: "Hello " + i++,
    className: "welcome",
  });
}, 2000);
