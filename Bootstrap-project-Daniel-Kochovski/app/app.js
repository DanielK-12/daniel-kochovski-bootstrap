
const audioSuccess = new Audio("");
audioSuccess.src = 'sounds/dota-2-game-ready-sound-youtube1.mp3';
const audioError = new Audio("");
audioError.src = 'sounds/wait-for-it.mp3';

let proverka = document.getElementById("proverka");

document.getElementById('let-me-in-one').addEventListener('click', function () {
  if (proverka.value.length < 1) {
    audioError.play();
  } else {
    audioSuccess.play();
  }
});


let proverkaTwo = document.getElementById("proverka-two");

document.getElementById('let-me-in-two').addEventListener('click', function () {
  if (proverkaTwo.value.length < 1) {
    audioError.play();
  } else {
    audioSuccess.play();
  }
});
