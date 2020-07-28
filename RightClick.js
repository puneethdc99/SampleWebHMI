window.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  var contextElement = document.getElementById("context-menu");
  contextElement.style.top = event.offsetY + 120 + "px";
  contextElement.style.left = event.offsetX + 220 + "px";
  contextElement.classList.add("active");
});
window.addEventListener("click", function () {
  document.getElementById("context-menu").classList.remove("active");
});
