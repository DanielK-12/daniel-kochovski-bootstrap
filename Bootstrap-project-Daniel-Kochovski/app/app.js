
const audioSuccess = new Audio("");
audioSuccess.src = 'sounds/Vo_monkey_king.mpeg';
const audioError = new Audio("");
audioError.src = 'sounds/Vo_tusk_tusk_rival_19.mpeg';

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
