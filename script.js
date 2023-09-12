document.addEventListener("DOMContentLoaded", () => {
  const FS = document.getElementById("FSclick");
  const xhair = document.getElementById("crosshair");

  FS.addEventListener("click", () => {
    FS.classList.remove('pos');
      FS.classList.add('hide');
    document.documentElement.requestFullscreen().then(() => {
      xhair.requestPointerLock();
      });
    });
  });

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    document.documentElement.style.cursor = "auto";
  }
});