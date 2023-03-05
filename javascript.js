"use strict";

window.addEventListener("load", ready);

let animationTime = 3000;
let lives = 6;
let points = 0;

function ready() {
  console.log("JavaScript ready!");
  document.querySelector("#btn_start").addEventListener("click", start);
  document.querySelector("#btn_go_to_start").addEventListener("click", showStartScreen);
}

function start() {
  document.querySelector("#start").classList.add("hidden");

  document.querySelector("#play_game").play();

  animationstart();
  positionStart();
  registerClick();
  // start timer
  startTimer();
  setTimeout(checkAnimations, animationTime);


  document.querySelector("#meteor_container1").addEventListener("animationiteration", restartFalling);
  document.querySelector("#meteor_container2").addEventListener("animationiteration", restartFalling);
  document.querySelector("#meteor_container3").addEventListener("animationiteration", restartFalling);
  document.querySelector("#meteor_container4").addEventListener("animationiteration", restartFalling);
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
  rocket2.addEventListener("click", clickRocket);
  astroid.addEventListener("click", clickAstroid);
  astroid2.addEventListener("click", clickAstroid);
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

function checkAnimations() {
  let animations = document.querySelectorAll(".falling, .astro, .meteoFalling");
  animations.forEach((animation) => {
    if (!animation.classList.contains("paused")) {
      decrementLives();
      animationGone.call(animation);
    }
  });
}


function clickRocket(){
  console.log("Click rocket");
  let rock = this;
  // Forhindr gentagne clicks
  rock.removeEventListener("click", clickRocket);

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
  astro.removeEventListener("click", clickAstroid);

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
  meteor.removeEventListener("click", clickMeteo);

  // Start timer for animation
  let timer = setTimeout(() => {
    decrementLives();
    meteorGone.call(meteor);
  }, 3000);

  // Når forsvind-animation er færdig: coinGone
  meteor.addEventListener("animationend", () => {
    clearTimeout(timer);
    meteorGone.call(meteor);
  });

  // Start the animation
  meteor.classList.add("paused");
  meteor.querySelector("img").classList.add("zoom_m");

  // Play the sound effect
  document.querySelector("#play_meto").currentTime = 0;
  document.querySelector("#play_meto").play();

  // Increment points when the animation is clicked
  meteor.addEventListener("click", () => {
    incrementPoints();
    clearTimeout(timer);
    meteorGone.call(meteor);
  });
}

function rocketGone() {
  let rock = this;
  // fjern event der bringer os herind
  rock.removeEventListener("animationend", rocketGone);

  // fjern forsvind-animation
  rock.querySelector("img").classList.remove("zoom_out");

  // fjern pause
  rock.classList.remove("paused");

  // genstart falling animation
  rock.classList.remove("falling");
  rock.offsetWidth;
  rock.classList.add("falling");

  // gør det muligt at klikke på coin igen
  rock.addEventListener("click", clickRocket);
}

function astroidGone() {
  let astro = this;
  // fjern event der bringer os herind
  astro.removeEventListener("animationend", astroidGone);

  // fjern forsvind-animation
  astro.querySelector("img").classList.remove("zoom_in");

  // fjern pause
  astro.classList.remove("paused");

  // genstart falling animation
  astro.classList.remove("astro");
  astro.offsetWidth;
  astro.classList.add("astro");

  // gør det muligt at klikke på coin igen
  astro.addEventListener("click", clickAstroid);
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
  meteo.classList.remove("meteoFalling");
  meteo.offsetWidth;
  meteo.classList.add("meteoFalling");

  // gør det muligt at klikke på coin igen
  meteo.addEventListener("click", clickMeteo);
}

function decrementLives() {
  console.log("mist et liv");
  showDecrementedLives();
  lives--;
  lose();
}

function showDecrementedLives() {
  document.querySelector("#heart" + lives).classList.remove("active_heart");
  document.querySelector("#heart" + lives).classList.add("broken_heart");
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
  resetLives();
  resetPoints();
console.log("stopped game");
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
  document.querySelector("#astroid_container2").removeEventListener("click", clickAstroid);
  document.querySelector("#rocket_container").removeEventListener("click", clickRocket);
  document.querySelector("#rocket_container2").removeEventListener("click", clickRocket);

  document.querySelector("#meteor_container1").classList.remove("position1");
  document.querySelector("#meteor_container2").classList.remove("position2");
  document.querySelector("#meteor_container3").classList.remove("position3");
  document.querySelector("#meteor_container4").classList.remove("position4");

    // Stop og nulstil lyde, fx baggrundsmusik
    document.querySelector("#sound_dreams").pause();
    document.querySelector("#sound_dreams").currentTime = 0;

    // nulstil timer - fjern animationen fra timeren (fjern klassen shrink fra time_sprite)
    document.querySelector("#time_sprite").classList.remove("shrink");

}


