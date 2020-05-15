function LoadSecondImage() {
  document.getElementById("fullImage").src = "./images/Display2.png";
  bloomingMenu.remove();
}

function LoadFirstImage() {
  document.getElementById("fullImage").src = "./images/Display1.png";
  bloomingMenu.render();
}

function LoadThirdImage() {
  document.getElementById("fullImage").src = "./images/Display3.png";
  bloomingMenu.remove();
}

function LoadImage4() {
  document.getElementById("fullImage").src = "./images/shapes.svg";
  bloomingMenu.remove();
}

function saveImage() {
  var imagedata = document.getElementById("fullImage").src;
  if (imagedata.includes("shapes.svg")) {
    document
      .getElementById("printbtn")
      .setAttribute("href", "./images/Display4.png");
  } else {
    document.getElementById("printbtn").setAttribute("href", imagedata);
  }
}
