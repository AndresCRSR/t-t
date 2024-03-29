function expandImage(image) {
    document.getElementById("expanded-image").innerHTML = `<img src="${image.src}" alt="Expanded Image">`;
    document.getElementById("expanded-image").style.display = "block";
  }
  
  function shrinkImage() {
    document.getElementById("expanded-image").innerHTML = "";
    document.getElementById("expanded-image").style.display = "none";
  }
  