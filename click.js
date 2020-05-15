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

function LoadImage4() {
  document.getElementById("fullImage").src = "./images/shapes.svg";
  bloomingMenu.remove();
}

function saveImage() {
  var imagedata = document.getElementById("fullImage").src;
  if (imagedata.includes("shapes.svg")) {
    document
      .getElementById("printbtn")
      .setAttribute("href", "./images/Shapes.png");
  } else {
    document.getElementById("printbtn").setAttribute("href", imagedata);
  }
}
