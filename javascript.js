"use strict";

window.addEventListener("load", start);

let lives = 6;
let points = 0;
function start() {
  // Start animationer
  let rocket = document.querySelector("#rocket_container");
  let rocket2 = document.querySelector("#rocket_container2");
  let astroid = document.querySelector("#astroid_container");
  let astroid2 = document.querySelector("#astroid_container2");
  let meteor = document.querySelector("#meteor_container1");
  let meteor2 = document.querySelector("#meteor_container2");
  let meteor3 = document.querySelector("#meteor_container3");
  let meteor4 = document.querySelector("#meteor_container4");
  rocket.classList.add("falling");
  rocket2.classList.add("falling2");
  astroid.classList.add("astro");
  astroid2.classList.add("astro2");
  meteor.classList.add("meteo1");
  meteor2.classList.add("meteo2");
  meteor3.classList.add("meteo3");
  meteor4.classList.add("meteo4");
  // Registrer click
  rocket.addEventListener("click", clickRocket);
  rocket2.addEventListener("click", clickRocket2);
  astroid.addEventListener("click", clickAstroid);
  astroid2.addEventListener("click", clickAstroid2);
  meteor.addEventListener("click", clickMeteo);
  meteor2.addEventListener("click", clickMeteo);
  meteor3.addEventListener("click", clickMeteo);
  meteor4.addEventListener("click", clickMeteo);

  document.querySelector("#play_game").play();
}

function clickRocket() {
  console.log("Click rocket");
  // Forhindr gentagne clicks
  document
    .querySelector("#rocket_container")
    .removeEventListener("click", clickRocket);

  // Stop coin container
  document.querySelector("#rocket_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#rocket_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#rocket_container")
    .addEventListener("animationend", rocketGone);

  incrementPoints5();
}
function clickRocket2() {
  console.log("Click rocket2");
  // Forhindr gentagne clicks
  document
    .querySelector("#rocket_container2")
    .removeEventListener("click", clickRocket2);

  // Stop coin container
  document.querySelector("#rocket_container2").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#rocket_sprite2").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#rocket_container2")
    .addEventListener("animationend", rocketGone2);

  incrementPoints5();
}

function clickAstroid() {
  console.log("Click astroid");
  // Forhindr gentagne clicks
  document
    .querySelector("#astroid_container")
    .removeEventListener("click", clickAstroid);

  // Stop coin container
  document.querySelector("#astroid_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#astroid_sprite").classList.add("zoom_in");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#astroid_container")
    .addEventListener("animationend", astroidGone);

  incrementPoints10();
}
function clickAstroid2() {
  console.log("Click astroid2");
  // Forhindr gentagne clicks
  document
    .querySelector("#astroid_container2")
    .removeEventListener("click", clickAstroid2);

  // Stop coin container
  document.querySelector("#astroid_container2").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#astroid_sprite2").classList.add("zoom_in");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#astroid_container2")
    .addEventListener("animationend", astroidGone2);

  incrementPoints10();
}

function clickMeteo() {
  console.log("Click astroid2");
  let meteor = this;
  // Forhindr gentagne clicks
  meteor.removeEventListener("click", clickMeteo);

  // Stop coin container
  meteor.classList.add("paused");

  // sæt forsvind-animation på coin
  meteor.querySelector("img").classList.add("zoom_m");

  // når forsvind-animation er færdig: coinGone
  meteor.addEventListener("animationend", meteorGone1);
  incrementPoints();
}

function rocketGone() {
  // fjern event der bringer os herind
  document
    .querySelector("#rocket_container")
    .removeEventListener("animationend", rocketGone);

  // fjern forsvind-animation
  document.querySelector("#rocket_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#rocket_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#rocket_container").classList.remove("falling");
  document.querySelector("#rocket_container").offsetWidth;
  document.querySelector("#rocket_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#rocket_container")
    .addEventListener("click", clickRocket);
}
function rocketGone2() {
  // fjern event der bringer os herind
  document
    .querySelector("#rocket_container2")
    .removeEventListener("animationend", rocketGone2);

  // fjern forsvind-animation
  document.querySelector("#rocket_sprite2").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#rocket_container2").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#rocket_container2").classList.remove("falling2");
  document.querySelector("#rocket_container2").offsetWidth;
  document.querySelector("#rocket_container2").classList.add("falling2");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#rocket_container2")
    .addEventListener("click", clickRocket2);
}

function astroidGone() {
  // fjern event der bringer os herind
  document
    .querySelector("#astroid_container")
    .removeEventListener("animationend", astroidGone);

  // fjern forsvind-animation
  document.querySelector("#astroid_sprite").classList.remove("zoom_in");

  // fjern pause
  document.querySelector("#astroid_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#astroid_container").classList.remove("astro");
  document.querySelector("#astroid_container").offsetWidth;
  document.querySelector("#astroid_container").classList.add("astro");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#astroid_container")
    .addEventListener("click", clickAstroid);
}
function astroidGone2() {
  // fjern event der bringer os herind
  document
    .querySelector("#astroid_container2")
    .removeEventListener("animationend", astroidGone2);

  // fjern forsvind-animation
  document.querySelector("#astroid_sprite2").classList.remove("zoom_in");

  // fjern pause
  document.querySelector("#astroid_container2").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#astroid_container2").classList.remove("astro2");
  document.querySelector("#astroid_container2").offsetWidth;
  document.querySelector("#astroid_container2").classList.add("astro2");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#astroid_container2")
    .addEventListener("click", clickAstroid2);
}
function meteorGone1() {
  // fjern event der bringer os herind
  document
    .querySelector("#meteor_container1")
    .removeEventListener("animationend", meteorGone1);

  // fjern forsvind-animation
  document.querySelector("#meteor_sprite1").classList.remove("zoom_m");

  // fjern pause
  document.querySelector("#meteor_container1").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#meteor_container1").classList.remove("meteo1");
  document.querySelector("#meteor_container1").offsetWidth;
  document.querySelector("#meteor_container1").classList.add("meteo1");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#meteor_container1")
    .addEventListener("click", clickMeteo);
}
function meteorGone2() {
  // fjern event der bringer os herind
  document
    .querySelector("#meteor_container2")
    .removeEventListener("animationend", meteorGone2);

  // fjern forsvind-animation
  document.querySelector("#meteor_sprite2").classList.remove("zoom_m");

  // fjern pause
  document.querySelector("#meteor_container2").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#meteor_container2").classList.remove("meteo2");
  document.querySelector("#meteor_container2").offsetWidth;
  document.querySelector("#meteor_container2").classList.add("meteo2");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#meteor_container2")
    .addEventListener("click", clickMeteo);
}
function meteorGone3() {
  // fjern event der bringer os herind
  document
    .querySelector("#meteor_container3")
    .removeEventListener("animationend", meteorGone3);

  // fjern forsvind-animation
  document.querySelector("#meteor_sprite3").classList.remove("zoom_m");

  // fjern pause
  document.querySelector("#meteor_container3").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#meteor_container3").classList.remove("meteo3");
  document.querySelector("#meteor_container3").offsetWidth;
  document.querySelector("#meteor_container3").classList.add("meteo3");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#meteor_container3")
    .addEventListener("click", clickMeteo);
}
function meteorGone4() {
  // fjern event der bringer os herind
  document
    .querySelector("#meteor_container4")
    .removeEventListener("animationend", meteorGone4);

  // fjern forsvind-animation
  document.querySelector("#meteor_sprite4").classList.remove("zoom_m");

  // fjern pause
  document.querySelector("#meteor_container4").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#meteor_container4").classList.remove("meteo4");
  document.querySelector("#meteor_container4").offsetWidth;
  document.querySelector("#meteor_container4").classList.add("meteo4");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#meteor_container4")
    .addEventListener("click", clickMeteo);
}

function decrementLives() {
  console.log("mist et liv");
  showDecrementedLives();
  lives--;
  lose();
}

function lose() {
  if (lives == 0) {
    reset();
  } else {
  }
  // slut på spillet
}

function win() {
  if (points >= 50) {
    document.querySelector("#level_complete").classList.remove("hidden");
  } else {
  }
}

function incrementPoints5() {
  console.log("Giv point");
  points += 5;
  console.log("har nu " + points + " point");
  displayPoints();
  win();
}

function incrementPoints10() {
  console.log("Giv point");
  points += 10;
  console.log("har nu " + points + " point");
  displayPoints();
  win();
}

function incrementPoints() {
  console.log("Giv point");
  points++;
  console.log("har nu " + points + " point");
  displayPoints();
  win();
}

function displayPoints() {
  console.log("vis point");
  document.querySelector("#point_count").textContent = points;
}
