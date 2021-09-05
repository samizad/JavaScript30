var numOfBtn = document.querySelectorAll(".button").length;
for (var j = 0; j < numOfBtn; j++) {
  document
    .querySelectorAll(".button")
    [j].addEventListener("click", function () {
      var btnStyle = this.innerHTML;
      sound(btnStyle);
      animation(btnStyle);
    });
}
document.addEventListener("keypress", function (e) {
  sound(e.key);
  animation(e.key);
});
function sound(key) {
  switch (key) {
    case "w":
      var sound1 = new Audio("./sounds/w.mp3");
      sound1.play();
      break;
    case "a":
      var sound1 = new Audio("./sounds/a.mp3");
      sound1.play();
      break;
    case "s":
      var sound1 = new Audio("./sounds/s.mp3");
      sound1.play();
      break;
    case "d":
      var sound1 = new Audio("./sounds/s.mp3");
      sound1.play();
      break;
    case "j":
      var sound1 = new Audio("./sounds/s.mp3");
      sound1.play();
      break;
    case "k":
      var sound1 = new Audio("./sounds/s.mp3");
      sound1.play();
      break;
    case "l":
      var sound1 = new Audio("./sounds/s.mp3");
      sound1.play();
      break;
    default:
      console.log(key);
  }
}
function animation(currentKey) {
  var activeBtn = document.querySelector("." + currentKey);
  activeBtn.classList.add("animation");
  setTimeout(function () {
    activeBtn.classList.remove("animation");
  }, 100);
}
