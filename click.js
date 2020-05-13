function LoadSecondImage() {
  document.getElementById("fullImage").src = "./images/Mining2.png";
  bloomingMenu.remove();
}

function LoadFirstImage() {
  document.getElementById("fullImage").src = "./images/from_print.png";
  bloomingMenu.render();
}

function LoadThirdImage() {
  document.getElementById("fullImage").src = "./images/Mining3.png";
  bloomingMenu.remove();
}

function saveImage() {
  var imagedata = document.getElementById("fullImage").src;
  document.getElementById("printbtn").setAttribute("href", imagedata);
}
