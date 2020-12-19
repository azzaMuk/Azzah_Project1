let player1 = 0;
let player2 = 0;

let play = function (userChoice1, userChoice2) {
  document.getElementById("p1result").innerHTML = "";
  document.getElementById("p2result").innerHTML = "";
  document.getElementById("results").innerHTML = "";

  document.getElementById("p1result").innerHTML =
    "player 1 chose" + " " + userChoice1 + "";
  document.getElementById("p2result").innerHTML =
    "player 2 chose" + " " + userChoice2 + "";

  let compare = function (p1, p2) {
    if (p1 == p2) {
      return "The result is a tie!";
    } else if (p1 == "rock") {
      if (p2 == "scissors") {
        player1++;
        return "player1 wins. ";
      } else {
        player2++;
        return "player2 wins.";
      }
    } else if (p1 == "paper") {
      if (p2 == "rock") {
        player1++;
        return "player1 wins";
      } else {
        player2++;
        return "player2 win.";
      }
    } else if (p1 == "scissors") {
      if (p2 == "rock") {
        player2++;
        return "player2 wins";
      } else {
        player1++;
        return "player1 win";
      }
    }
  };

  let winner = compare(userChoice1, userChoice2);
  document.getElementById("results").innerHTML = winner;
  document.getElementById("player1").innerHTML = player1;
  document.getElementById("plauer2").innerHTML = player2;

  if (player1 == 3) {
    document.getElementById("player1").innerHTML;
    let audio = new Audio("winningSound.m4a");
    audio.play();
    setTimeout(function () {
      alert("player1 WON THREE ROUNDS");
    }, 1000);
  } else if (player2 == 3) {
    document.getElementById("player2").innerHTML;
    let audio = new Audio("winningSound.m4a");
    audio.play();
    setTimeout(function () {
      alert("player2, WON THREE ROUNDS");
    }, 1000);
  }
};

let playAgain = function () {
  player1 = 0;
  player2 = 0;
  document.getElementById("p1result").innerHTML = " ";
  document.getElementById("p2result").innerHTML = " ";
  document.getElementById("results").innerHTML = "  ";
  document.getElementById("player1").innerHTML = wins;
  document.getElementById("player2").innerHTML = loses;
};

function rules() {
  var popup = document.getElementById("popupText");
  popup.classList.toggle("show");
}
