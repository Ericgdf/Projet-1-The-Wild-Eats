var button = document.getElementById("toggle-button");
var hiddenInfo = document.getElementById("hidden-info");

button.addEventListener("click", function () {
  if (hiddenInfo.style.display === "none") {
    hiddenInfo.style.display = "block";
  } else {
    hiddenInfo.style.display = "none";
  }
});
