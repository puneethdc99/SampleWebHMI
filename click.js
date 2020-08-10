function LoadSecondImage() {
  document.getElementById("fullImage").src = "./images/Display2.png";
}

function LaunchOSk() {
  var oShell = new ActiveXObject("Shell.Application");
  var commandtoRun = "C:\\Windows\\System32\\osk.exe";
  oShell.ShellExecute(commandtoRun, "", "", "open", "1");
}

function LoadFirstImage() {
  document.getElementById("fullImage").src = "./images/Display1.png";
}

function LoadThirdImage() {
  document.getElementById("fullImage").src = "./images/Display3.png";
}

function LoadImage4() {
  document.getElementById("fullImage").src = "./images/shapes.svg";
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
