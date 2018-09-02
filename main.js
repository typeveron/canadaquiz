function check() {
  var q1 = document.quiz.q1.value;
  var q2 = document.quiz.q2.value;
  var q3 = document.quiz.q3.value;
  var q4 = document.quiz.q4.value;
  var q5 = document.quiz.q5.value;
  var q6 = document.quiz.q6.value;
  var correct = 0;

  if (q1 == "Beaver") {
    correct++;
  }

  if (q2 == "Hockey") {
    correct++;
  }

  if (q3 == "11") {
    correct++;
  }

  if (q4 == "Beer") {
    correct++;
  }

  if (q5 == "Ottawa") {
    correct++;
  }

  if (q6 == "Basketball Baby") {
    correct++;
  }

  var messages = ["YOU ARE UNSTOPPABLE!!!",
    "Excellent work",
    "You got most",
    "It's alright",
    "It's not good ahhhhh",
    "Don't try and act dumb",
    "Your so drunk!!!"
  ];
  var pictures = [
    "img/socol.gif",
    "img/tenor.gif",
    "img/mity.gif",
    "img/okay.gif",
    "img/ohno.gif",
    "img/dumb.gif",
    "img/drunky.gif"
  ];
  var range;

  if (correct === 6) {
    range = 0;
  }

  if (correct > 4 && correct < 6) {
    range = 1;
  }

  if (correct > 3 && correct < 5) {
    range = 2;
  }

  if (correct > 2 && correct < 4) {
    range = 3;
  }

  if (correct > 1 && correct < 3) {
    range = 4;
  }

  if (correct > 0 && correct < 2) {
    range = 5;
  }

  if (correct < 1) {
    range = 6;
  }

  document.getElementById("done").style.visibility = "visible";
  document.getElementById("correct").innerHTML =
    "you got " + correct + " correct.";
  document.getElementById("message").innerHTML = messages[range];
  document.getElementById("picture").src = pictures[range];
}


	

 

	

	
	
	