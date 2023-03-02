"use strict";

window.addEventListener("load", start);

let lives = 6;
let points = 0;
function start() {

  animationstart();
  positionStart();
  registerClick();

  document.querySelector("#meteor_container1").addEventListener("animationiteration", restartFalling);
  document.querySelector("#meteor_container2").addEventListener("animationiteration", restartFalling);
  document.querySelector("#meteor_container3").addEventListener("animationiteration", restartFalling);
  document.querySelector("#meteor_container4").addEventListener("animationiteration", restartFalling);

  document.querySelector("#play_game").play();
}

function animationstart(){

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
  meteor.classList.add("meteoFalling");
  meteor2.classList.add("meteoFalling");
  meteor3.classList.add("meteoFalling");
  meteor4.classList.add("meteoFalling");
}

function registerClick(){

  let rocket = document.querySelector("#rocket_container");
  let rocket2 = document.querySelector("#rocket_container2");
  let astroid = document.querySelector("#astroid_container");
  let astroid2 = document.querySelector("#astroid_container2");
  let meteor = document.querySelector("#meteor_container1");
  let meteor2 = document.querySelector("#meteor_container2");
  let meteor3 = document.querySelector("#meteor_container3");
  let meteor4 = document.querySelector("#meteor_container4");

  // Registrer click
  rocket.addEventListener("click", clickRocket);
  rocket2.addEventListener("click", clickRocket2);
  astroid.addEventListener("click", clickAstroid);
  astroid2.addEventListener("click", clickAstroid2);
  meteor.addEventListener("click", clickMeteo);
  meteor2.addEventListener("click", clickMeteo);
  meteor3.addEventListener("click", clickMeteo);
  meteor4.addEventListener("click", clickMeteo);
}

function positionStart(){
  document.querySelector("#meteor_container1").classList.add("position1");
  document.querySelector("#meteor_container2").classList.add("position2");
  document.querySelector("#meteor_container3").classList.add("position3");
  document.querySelector("#meteor_container4").classList.add("position4");
}

function clickRocket(){
  console.log("Click rocket");
  // Forhindr gentagne clicks
  document.querySelector("#rocket_container").removeEventListener("click", clickRocket);

  // Stop coin container
  document.querySelector("#rocket_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#rocket_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#rocket_container").addEventListener("animationend", rocketGone);

    document.querySelector("#play_rocket").currentTime = 0;
    document.querySelector("#play_rocket").play();

  incrementPoints5();
}

function clickRocket2() {
  console.log("Click rocket2");
  // Forhindr gentagne clicks
  document.querySelector("#rocket_container2").removeEventListener("click", clickRocket2);

  // Stop coin container
  document.querySelector("#rocket_container2").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#rocket_sprite2").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#rocket_container2").addEventListener("animationend", rocketGone2);

  incrementPoints5();
}

function clickAstroid() {
  console.log("Click astroid");
  // Forhindr gentagne clicks
  document.querySelector("#astroid_container").removeEventListener("click", clickAstroid);

  // Stop coin container
  document.querySelector("#astroid_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#astroid_sprite").classList.add("zoom_in");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#astroid_container").addEventListener("animationend", astroidGone);

    document.querySelector("#play_astroid").currentTime = 0;
    document.querySelector("#play_astroid").play();

  incrementPoints10();
}

function clickAstroid2() {
  console.log("Click astroid2");
  // Forhindr gentagne clicks
  document.querySelector("#astroid_container2").removeEventListener("click", clickAstroid2);

  // Stop coin container
  document.querySelector("#astroid_container2").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#astroid_sprite2").classList.add("zoom_in");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#astroid_container2").addEventListener("animationend", astroidGone2);

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
  meteor.addEventListener("animationend", meteorGone);

  document.querySelector("#play_meto").currentTime = 0;
  document.querySelector("#play_meto").play();

  incrementPoints();
}

function rocketGone() {
  // fjern event der bringer os herind
  document.querySelector("#rocket_container").removeEventListener("animationend", rocketGone);

  // fjern forsvind-animation
  document.querySelector("#rocket_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#rocket_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#rocket_container").classList.remove("falling");
  document.querySelector("#rocket_container").offsetWidth;
  document.querySelector("#rocket_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document.querySelector("#rocket_container").addEventListener("click", clickRocket);
}

function rocketGone2() {
  // fjern event der bringer os herind
  document.querySelector("#rocket_container2").removeEventListener("animationend", rocketGone2);

  // fjern forsvind-animation
  document.querySelector("#rocket_sprite2").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#rocket_container2").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#rocket_container2").classList.remove("falling2");
  document.querySelector("#rocket_container2").offsetWidth;
  document.querySelector("#rocket_container2").classList.add("falling2");

  // gør det muligt at klikke på coin igen
  document.querySelector("#rocket_container2").addEventListener("click", clickRocket2);
}

function astroidGone() {
  // fjern event der bringer os herind
  document.querySelector("#astroid_container").removeEventListener("animationend", astroidGone);

  // fjern forsvind-animation
  document.querySelector("#astroid_sprite").classList.remove("zoom_in");

  // fjern pause
  document.querySelector("#astroid_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#astroid_container").classList.remove("astro");
  document.querySelector("#astroid_container").offsetWidth;
  document.querySelector("#astroid_container").classList.add("astro");

  // gør det muligt at klikke på coin igen
  document.querySelector("#astroid_container").addEventListener("click", clickAstroid);
}

function astroidGone2() {
  // fjern event der bringer os herind
  document.querySelector("#astroid_container2").removeEventListener("animationend", astroidGone2);

  // fjern forsvind-animation
  document.querySelector("#astroid_sprite2").classList.remove("zoom_in");

  // fjern pause
  document.querySelector("#astroid_container2").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#astroid_container2").classList.remove("astro2");
  document.querySelector("#astroid_container2").offsetWidth;
  document.querySelector("#astroid_container2").classList.add("astro2");

  // gør det muligt at klikke på coin igen
  document.querySelector("#astroid_container2").addEventListener("click", clickAstroid2);
}

function meteorGone() {
  // fjern event der bringer os herind
  let meteo = this;
  meteo.removeEventListener("animationend", meteorGone);

  // fjern forsvind-animation
  meteo.querySelector("img").classList.remove("zoom_m");

  // fjern pause
  meteo.classList.remove("paused");

  // genstart falling animation
  meteo.classList.remove("meteo1");
  meteo.offsetWidth;
  meteo.classList.add("meteo1");

  // gør det muligt at klikke på coin igen
  meteo.addEventListener("click", clickMeteo);
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
    document.querySelector("#play_gameComplet").play();
    stopGame();
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

function restartFalling() {
  let meteoer = this;
  console.log(meteoer);
  // genstart falling animation på container
  meteoer.classList.remove("meteoFalling");
  meteoer.offsetWidth;
  meteoer.classList.add("meteoFalling");

  meteoer.classList // her fjerner vi alle positioner, så den kan blive ved med at give den nye positioner
    .remove("position1", "position2", "position3", "position4");

  let pos = Math.floor(Math.random() * 4) + 1;
  meteoer.classList.add("position" + pos);
}

function stopGame() {
  // Stop animationer

  document.querySelector("#play_game").pause();

  document.querySelector("#meteor_container1").classList.remove("meteoFalling");
  document.querySelector("#meteor_container2").classList.remove("meteoFalling");
  document.querySelector("#meteor_container3").classList.remove("meteoFalling");
  document.querySelector("#meteor_container4").classList.remove("meteoFalling");
  document.querySelector("#astroid_container").classList.remove("astro");
  document.querySelector("#astroid_container2").classList.remove("astro2");
  document.querySelector("#rocket_container").classList.remove("falling");
  document.querySelector("#rocket_container2").classList.remove("falling2");

  // Fjern click
  document.querySelector("#meteor_container1").removeEventListener("click", clickMeteo);
  document.querySelector("#meteor_container2").removeEventListener("click", clickMeteo);
  document.querySelector("#meteor_container3").removeEventListener("click", clickMeteo);
  document.querySelector("#meteor_container4").removeEventListener("click", clickMeteo);
  document.querySelector("#astroid_container").removeEventListener("click", clickAstroid);
  document.querySelector("#astroid_container2").removeEventListener("click", clickAstroid2);
  document.querySelector("#rocket_container").removeEventListener("click", clickRocket);
  document.querySelector("#rocket_container2").removeEventListener("click", clickRocket2);
}
