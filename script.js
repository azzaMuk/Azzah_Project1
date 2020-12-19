let wins = 0;
let loses = 0;

let play = function (userChoice) {
  document.getElementById("player").innerHTML = "";
  document.getElementById("computer").innerHTML = "";
  document.getElementById("results").innerHTML = "";
  document.getElementById("player").innerHTML =
    "You chose" + " " + userChoice + "";

  let computerChoice = Math.random() * 30;
  if (computerChoice <= 10) {
    computerChoice = "rock";
  } else if (computerChoice <= 20) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  document.getElementById("computer").innerHTML =
    " --------------------  Computer chose" + " " + computerChoice + ".";

  let compare = function (user, computer) {
    if (user == "reset") {
      return " ";
    }
    if (user == computer) {
      return "The result is a tie!";
    } else if (user == "rock") {
      if (computer == "scissors") {
        wins++;
        return "You wins. ";
      } else {
        loses++;
        return "Computer wins.";
      }
    } else if (user == "paper") {
      if (computer == "rock") {
        wins++;
        return "You wins";
      } else {
        loses++;
        return "Computer win.";
      }
    } else if (user == "scissors") {
      if (computer == "rock") {
        loses++;
        return " Computer wins";
      } else {
        wins++;
        return "You win";
      }
    }
  };

  let winner = compare(userChoice, computerChoice);
  document.getElementById("results").innerHTML = winner;
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("loses").innerHTML = loses;

  if (wins == 3) {
    document.getElementById("wins").innerHTML;
    let audio = new Audio("winningSound.m4a");
    audio.play();
    setTimeout(function () {
      alert("YOU WON THREE ROUNDS");
    }, 1000);
  } else if (loses == 3) {
    document.getElementById("loses").innerHTML;
    let audio = new Audio("losingSound.m4a");
    audio.play();
    setTimeout(function () {
      alert("SORRY, YOU LOST THREE ROUNDS");
    }, 1000);
  }
};

let playAgain = function () {
  loses = 0;
  wins = 0;
  document.getElementById("player").innerHTML = " ";
  document.getElementById("computer").innerHTML = " ";
  document.getElementById("results").innerHTML = "  ";
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("loses").innerHTML = loses;
};

function rules() {
  var popup = document.getElementById("popupText");
  popup.classList.toggle("show");
}
