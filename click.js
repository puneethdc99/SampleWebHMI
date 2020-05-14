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
  if (imagedata.includes("shapes.svg")) {
    let input = imagedata;
    new SvgToPngConverter().convertFromInput(input, function (imgD) {
      document.getElementById("printbtn").setAttribute("href", imgD);
    });
  } else {
    document.getElementById("printbtn").setAttribute("href", imagedata);
  }
}

function LoadImage4() {
  document.getElementById("fullImage").src = "./images/shapes.svg";
  bloomingMenu.remove();
}

class SvgToPngConverter {
  constructor() {
    this._init = this._init.bind(this);
    this._cleanUp = this._cleanUp.bind(this);
    this.convertFromInput = this.convertFromInput.bind(this);
  }

  _init() {
    this.canvas = document.createElement("canvas");
    this.imgPreview = document.createElement("img");
    this.imgPreview.style = "position: absolute; top: -9999px";

    document.body.appendChild(this.imgPreview);
    this.canvasCtx = this.canvas.getContext("2d");
  }

  _cleanUp() {
    document.body.removeChild(this.imgPreview);
  }

  convertFromInput(input, callback) {
    this._init();
    let _this = this;
    this.imgPreview.onload = function () {
      const img = new Image();
      _this.canvas.width = _this.imgPreview.clientWidth;
      _this.canvas.height = _this.imgPreview.clientHeight;
      img.crossOrigin = "anonymous";
      img.src = _this.imgPreview.src;
      img.onload = function () {
        _this.canvasCtx.drawImage(img, 0, 0);
        let imgData = _this.canvas.toDataURL("image/png");
        if (typeof callback == "function") {
          callback(imgData);
        }
        _this._cleanUp();
      };
    };

    this.imgPreview.src = input;
  }
}
