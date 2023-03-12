"use strict";

window.addEventListener("load", ready);

let lives = 6;
let points = 0;
let isGameRunning = false;

function ready() {
  console.log("JavaScript ready!");
  document.querySelector("#btn_start").addEventListener("click", start);
  document.querySelector("#btn_go_to_start").addEventListener("click", showStartScreen);
  document.querySelector("#btn_play_again").addEventListener("click", showStartScreen);
}

function start() {
  isGameRunning = true;
  document.querySelector("#start").classList.add("hidden");

  document.querySelector("#play_game").play();

  animationstart();
  positionStart();
  delayStart();
  registerClick();
  // start timer
  startTimer();

  document.querySelector("#meteor_container1").addEventListener("animationiteration", restartFalling);
  document.querySelector("#meteor_container2").addEventListener("animationiteration", restartFalling);
  document.querySelector("#meteor_container3").addEventListener("animationiteration", restartFalling);
  document.querySelector("#meteor_container4").addEventListener("animationiteration", restartFalling);
  document.querySelector("#astroid_container").addEventListener("animationiteration", restartastro);
  document.querySelector("#rocket_container").addEventListener("animationiteration", rocketGone);
}

function animationstart() {
  console.log("animationstart");
  let rocket = document.querySelector("#rocket_container");
  let astroid = document.querySelector("#astroid_container");
  let meteor = document.querySelector("#meteor_container1");
  let meteor2 = document.querySelector("#meteor_container2");
  let meteor3 = document.querySelector("#meteor_container3");
  let meteor4 = document.querySelector("#meteor_container4");

  rocket.classList.add("falling");
  astroid.classList.add("astro");
  meteor.classList.add("meteoFalling");
  meteor2.classList.add("meteoFalling");
  meteor3.classList.add("meteoFalling");
  meteor4.classList.add("meteoFalling");
  document.querySelector("#dino1_container").classList.add("yelloD");
  document.querySelector("#dino2_container").classList.add("orangeD");
  document.querySelector("#dino3_container").classList.add("blueD");
  document.querySelector("#dino4_container").classList.add("greenD");
  document.querySelector("#dino5_container").classList.add("redD");
}

function registerClick() {
  let rocket = document.querySelector("#rocket_container");
  let astroid = document.querySelector("#astroid_container");
  let meteor = document.querySelector("#meteor_container1");
  let meteor2 = document.querySelector("#meteor_container2");
  let meteor3 = document.querySelector("#meteor_container3");
  let meteor4 = document.querySelector("#meteor_container4");

  // Registrer click
  rocket.addEventListener("mousedown", clickRocket);
  astroid.addEventListener("mousedown", clickAstroid);
  meteor.addEventListener("mousedown", clickMeteo);
  meteor2.addEventListener("mousedown", clickMeteo);
  meteor3.addEventListener("mousedown", clickMeteo);
  meteor4.addEventListener("mousedown", clickMeteo);
}

function positionStart() {
  document.querySelector("#meteor_container1").classList.add("position1");
  document.querySelector("#meteor_container2").classList.add("position2");
  document.querySelector("#meteor_container3").classList.add("position3");
  document.querySelector("#meteor_container4").classList.add("position4");
}

function delayStart() {
  document.querySelector("#meteor_container1").classList.add("delay1");
  document.querySelector("#meteor_container2").classList.add("delay2");
  document.querySelector("#meteor_container3").classList.add("delay3");
  document.querySelector("#meteor_container4").classList.add("delay4");
}

function clickRocket() {
  console.log("Click rocket");
  let rock = this;
  // Forhindr gentagne clicks
  rock.removeEventListener("mousedown", clickRocket);

  // Stop coin container
  rock.classList.add("paused");

  // sæt forsvind-animation på coin
  rock.querySelector("img").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  rock.addEventListener("animationend", rocketGone);

  document.querySelector("#play_rocket").currentTime = 0;
  document.querySelector("#play_rocket").play();

  incrementPoints5();
}

function clickAstroid() {
  console.log("Click astroid");
  let astro = this;
  // Forhindr gentagne clicks
  astro.removeEventListener("mousedown", clickAstroid);

  // Stop coin container
  astro.classList.add("paused");

  // sæt forsvind-animation på coin
  astro.querySelector("img").classList.add("zoom_in");

  // når forsvind-animation er færdig: coinGone
  astro.addEventListener("animationend", astroidGone);

  document.querySelector("#play_astroid").currentTime = 0;
  document.querySelector("#play_astroid").play();

  incrementPoints10();
}

function clickMeteo() {
  console.log("Click astroid2");
  let meteor = this;
  // Forhindr gentagne clicks
  meteor.removeEventListener("mousedown", clickMeteo);

  // Start the animation
  meteor.classList.add("paused");
  meteor.querySelector("img").classList.add("zoom_m");

  // når forsvind-animation er færdig: coinGone
  meteor.addEventListener("animationend", meteorGone);

  // Play the sound effect
  document.querySelector("#play_meto").currentTime = 0;
  document.querySelector("#play_meto").play();
   document.querySelector("#play_meto").volume = 0.2;

  incrementPoints();
}

function rocketGone() {
  let rock = this;
  // fjern event der bringer os herind
  rock.removeEventListener("animationend", rocketGone);

  // fjern forsvind-animation
  rock.querySelector("img").classList.remove("zoom_out");

  // fjern pause
  rock.classList.remove("paused");
  if (isGameRunning) {
    // genstart falling animation
    rock.classList.remove("falling");
    rock.offsetWidth;
    rock.classList.add("falling");

    // gør det muligt at klikke på coin igen
    rock.addEventListener("mousedown", clickRocket);
  }
}

function astroidGone() {
  let astro = this;
  // fjern event der bringer os herind
  astro.removeEventListener("animationend", astroidGone);

  // fjern forsvind-animation
  astro.querySelector("img").classList.remove("zoom_in");

  // fjern pause
  astro.classList.remove("paused");

  if (isGameRunning) {
    // genstart falling animation
    astro.classList.remove("astro");
    astro.offsetWidth;
    astro.classList.add("astro");

    // gør det muligt at klikke på coin igen
    astro.addEventListener("mousedown", clickAstroid);
  }
}

function meteorGone() {
  // fjern event der bringer os herind
  let meteo = this;
  meteo.removeEventListener("animationend", meteorGone);

  // fjern forsvind-animation
  meteo.querySelector("img").classList.remove("zoom_m");

  // fjern pause
  meteo.classList.remove("paused");

  if (isGameRunning) {
    // genstart falling animation
    meteo.classList.remove("meteoFalling");
    meteo.offsetWidth;
    meteo.classList.add("meteoFalling");

    // gør det muligt at klikke på coin igen
    meteo.addEventListener("mousedown", clickMeteo);
  }
}

function decrementLives() {
  console.log("mist et liv");
  showDecrementedLives();
  lives--;
  if (lives == 0) {
    lose();
  }
}

function showDecrementedLives() {
  document.querySelector("#heart" + lives).classList.remove("active_heart");
  document.querySelector("#heart" + lives).classList.add("broken_heart");
}

function lose() {
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#play_gameover").play();
  stopGame();

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

  // meteor har ramt jorden
  decrementLives();
  if(isGameRunning){
  // genstart falling animation på container
  meteoer.classList.remove("meteoFalling");
  meteoer.offsetWidth;
  meteoer.classList.add("meteoFalling");

  meteoer.classList // her fjerner vi alle positioner, så den kan blive ved med at give den nye positioner
    .remove("delay1", "delay2", "delay3", "delay4");

  meteoer.classList // her fjerner vi alle positioner, så den kan blive ved med at give den nye positioner
    .remove("position1", "position2", "position3", "position4");

  let pos = Math.floor(Math.random() * 4) + 1;
  meteoer.classList.add("position" + pos);

  let del = Math.floor(Math.random() * 4) + 1;
  meteoer.classList.add("delay" + del);
}
}

function restartastro() {
  let astro = this;
  console.log(astro);

  // meteor har ramt jorden
  decrementLives();
  decrementLives();

  // genstart falling animation på container
  astro.classList.remove("astro");
  astro.offsetWidth;
  astro.classList.add("astro");
}

function resetPoints() {
  // nulstil point
  points = 0;
  // nulstil vising af point
  displayPoints();
}

function resetLives() {
  // sæt lives til 3
  lives = 6;
  //nulstil visning af liv (hjerte vi ser)
  document.querySelector("#heart1").classList.remove("broken_heart");
  document.querySelector("#heart2").classList.remove("broken_heart");
  document.querySelector("#heart3").classList.remove("broken_heart");
  document.querySelector("#heart4").classList.remove("broken_heart");
  document.querySelector("#heart5").classList.remove("broken_heart");
  document.querySelector("#heart6").classList.remove("broken_heart");
  document.querySelector("#heart1").classList.add("active_heart");
  document.querySelector("#heart2").classList.add("active_heart");
  document.querySelector("#heart3").classList.add("active_heart");
  document.querySelector("#heart4").classList.add("active_heart");
  document.querySelector("#heart5").classList.add("active_heart");
  document.querySelector("#heart6").classList.add("active_heart");
}

function showStartScreen() {
  // fjern hidden fra startskærm og tilføj til game over og level complete
  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}

function startTimer() {
  console.log("starttimer");
  // Sæt timer-animationen (shrink) i gang ved at tilføje klassen shrink til time_sprite
  document.querySelector("#time_sprite").classList.add("shrink");

  // Tilføj en eventlistener som lytter efter at animationen er færdig (animationend) og kalder funktionen timeIsUp
  document.querySelector("#time_sprite").addEventListener("animationend", timeIsUp);
}

function timeIsUp() {
  console.log("Tiden er gået!");

  if (points >= 50) {
    win();
  } else {
    lose();
  }
}

function stopGame() {
  // Stop animationer
  isGameRunning = false;
  resetLives();
  resetPoints();
  console.log("stopped game");
  document.querySelector("#play_game").pause();

  document.querySelector("#meteor_container1").classList.remove("meteoFalling");
  document.querySelector("#meteor_container2").classList.remove("meteoFalling");
  document.querySelector("#meteor_container3").classList.remove("meteoFalling");
  document.querySelector("#meteor_container4").classList.remove("meteoFalling");
  document.querySelector("#astroid_container").classList.remove("astro");
  document.querySelector("#rocket_container").classList.remove("falling");

  document.querySelector("#dino1_container").classList.remove("yelloD");
  document.querySelector("#dino2_container").classList.remove("orangeD");
  document.querySelector("#dino3_container").classList.remove("blueD");
  document.querySelector("#dino4_container").classList.remove("greenD");
  document.querySelector("#dino5_container").classList.remove("redD");

  // Fjern click
  document.querySelector("#meteor_container1").removeEventListener("mouseDown", clickMeteo);
  document.querySelector("#meteor_container2").removeEventListener("mouseDown", clickMeteo);
  document.querySelector("#meteor_container3").removeEventListener("mouseDown", clickMeteo);
  document.querySelector("#meteor_container4").removeEventListener("mouseDown", clickMeteo);
  document.querySelector("#astroid_container").removeEventListener("mouseDown", clickAstroid);
  document.querySelector("#rocket_container").removeEventListener("mouseDown", clickRocket);

  document.querySelector("#meteor_container1").classList.remove("position1");
  document.querySelector("#meteor_container2").classList.remove("position2");
  document.querySelector("#meteor_container3").classList.remove("position3");
  document.querySelector("#meteor_container4").classList.remove("position4");

    document.querySelector("#meteor_container1").removeEventListener("animationiteration", restartFalling);
    document.querySelector("#meteor_container2").removeEventListener("animationiteration", restartFalling);
    document.querySelector("#meteor_container3").removeEventListener("animationiteration", restartFalling);
    document.querySelector("#meteor_container4").removeEventListener("animationiteration", restartFalling);
    document.querySelector("#astroid_container").removeEventListener("animationiteration", restartastro);
    document.querySelector("#rocket_container").removeEventListener("animationiteration", rocketGone);

  // Stop og nulstil lyde, fx baggrundsmusik
  document.querySelector("#play_game").pause();
  document.querySelector("#play_game").currentTime = 0;

  // nulstil timer - fjern animationen fra timeren (fjern klassen shrink fra time_sprite)
  document.querySelector("#time_sprite").classList.remove("shrink");
}
