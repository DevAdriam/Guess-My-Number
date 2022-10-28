//Variables declaration

var getrestart = document.querySelector(".restart");
var getagain = document.querySelector(".again");
var getbtn = document.querySelector(".btn");

var getinput = document.querySelector(".guessinput");
var getquizzbox = document.querySelector(".quizzbox");
var getunknownbox = document.querySelector(".unknownbox");

var gethint = document.querySelector(".hint");
var getbody = document.querySelector("body");

var getscore = document.getElementById("scoretext");
var gethighscore = document.getElementById("highscoretext");

//define what we need

getquizzbox.textContent = Math.round(Math.random() * 20);
getscore.textContent = Number("20");

// Start action
function guess() {
  //checking input has value
  if (!getinput.value) {
    alert("Please Add One Number");
  }

  //checking input is Number or not
  if (!isNaN(getinput.value)) {
    // when guess number is low
    if (Number(getinput.value) < Number(getquizzbox.textContent)) {
      gethint.textContent = "Too low";
      wrong();
    }

    // when guess number is high
    else if (Number(getinput.value) > Number(getquizzbox.textContent)) {
      gethint.textContent = "Too high";
      wrong();
    }

    //when answer correct
    else {
      getquizzbox.style.color = "#fff";
      getquizzbox.style.backgroundColor = "#ff3cac";

      if (Number(getscore.textContent) > gethighscore.textContent) {
        gethighscore.textContent = Number(getscore.textContent);
      }

      gethint.textContent = "Correct!! Good Job Mate !";
      getunknownbox.style.display = "none";
      getbtn.setAttribute("disabled", "");
    }

    getinput.value = "";
    getinput.focus();

    console.log(getquizzbox.textContent);

    if (Number(getscore.textContent) < 0) {
      attemptleft();
    }
  }

  //When input is not Number
  else {
    alert("Please Add Only Number");
    getinput.value = "";
    getinput.focus();
  }
}

//Defining Function

let attemptleft = function () {
  window.alert("Game Over");
  again();
};

let wrong = function Showingwrong() {
  getscore.textContent--;
};

let again = function againfun() {
  gethint.textContent = "Lets win some more Buddy!";
  getscore.textContent = "20";
  getquizzbox.style.backgroundColor = "navy";
  getquizzbox.textContent = Math.round(Math.random() * 20);
  getinput.value = "";
  getinput.focus();
  getunknownbox.style.display = "block";
  getbtn.removeAttribute("disabled", "");
};

//Event Section
getbtn.addEventListener("click", guess);
getagain.addEventListener("click", again);
getrestart.addEventListener("click", function () {
  again();
  gethighscore.textContent = "";
  gethint.textContent = "Lemme support you";
});
