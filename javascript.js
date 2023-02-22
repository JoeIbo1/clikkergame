window.addEventListener("load", start);

function start() {
  // Start animationer
  document.querySelector("#rocket_container").classList.add("falling");
  document.querySelector("#rocket_container2").classList.add("falling2");
  document.querySelector("#astroid_container").classList.add("astro");
  // Registrer click
  document.querySelector("#rocket_container").addEventListener("click", clickRocket);
  document.querySelector("#rocket_container2").addEventListener("click", clickRocket2);
    document.querySelector("#astroid_container").addEventListener("click", clickAstroid);

}


function clickRocket() {
  console.log("Click coin");
  // Forhindr gentagne clicks
  document.querySelector("#rocket_container").removeEventListener("click", clickRocket);
  
  // Stop coin container
  document.querySelector("#rocket_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#rocket_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#rocket_container").addEventListener("animationend", rocketGone);
}
function clickRocket2() {
  console.log("Click coin");
  // Forhindr gentagne clicks
  document.querySelector("#rocket_container2").removeEventListener("click", clickRocket2);
  
  // Stop coin container
  document.querySelector("#rocket_container2").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#rocket_sprite2").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#rocket_container2").addEventListener("animationend", rocketGone2);
}

function clickAstroid() {
  console.log("Click coin");
  // Forhindr gentagne clicks
  document.querySelector("#astroid_container").removeEventListener("click", clickAstroid);

  // Stop coin container
  document.querySelector("#astroid_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#astroid_sprite").classList.add("zoom_in");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#astroid_container").addEventListener("animationend", astroidGone);
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