const progressBar = document.getElementsByClassName('progressBar')
function finishFunction() {
  console.log("Running");
  for (let x = 0; x <= progressBar.length; x++) {
    setInterval(() => {
      var computedStyle = getComputedStyle(progressBar[x])
      var width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
      progressBar[x].style.setProperty('--width', width + 1);

      if (('--width', width + 0.5) < 100) {
        document.getElementById("red").textContent = (('--width', width + 1) + "%");
        document.getElementById("blue").textContent = (('--width', width + 1) + "%");
        document.getElementById("green").textContent = (('--width', width + 1) + "%");
        document.getElementById("yellow").textContent = (('--width', width + 1) + "%");
        document.getElementById("white").textContent = (('--width', width + 1) + "%");
      } else {
        document.getElementById("red").textContent = 100 + "%";
        document.getElementById("blue").textContent = 100 + "%";
        document.getElementById("green").textContent = 100 + "%";
        document.getElementById("yellow").textContent = 100 + "%";
        document.getElementById("white").textContent = 100 + "%";
      }
    }, 100)

  }
}
