
const audioSuccess = new Audio("https://www.fesliyanstudios.com/play-mp3/5744");
const audioError = new Audio("https://www.fesliyanstudios.com/play-mp3/5744");

document.getElementById('let-me-in-one').addEventListener('click', function () {
  let proverka = document.querySelectorAll("proverka").length;
  if (proverka.length == 0) {
    audioError.play();
  } else {
    audioSuccess.play();
  }
});


document.getElementById('let-me-in-two').addEventListener('click', function () {
  let proverka = document.querySelectorAll("proverka").length;
  if (proverka.length == 0) {
    audioError.play();
  } else {
    audioSuccess.play();
  }
});


