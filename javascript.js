window.addEventListener("load", start);

function start() {
    
  document.querySelector("#rocket_sprite").addEventListener("click", fade);
  document.querySelector("#rocket_container").addEventListener("click", stop1);
  document.querySelector("#rocket_sprite") .addEventListener("animationend", stop);
   
      



}

function fade() {
  console.log("fade");
  document.querySelector("#rocket_sprite").classList.add("fade_out");
}

function stop() {
  console.log("stop");
  document.querySelector("#rocket_sprite").classList.remove("fade_out");
}








function stop1() {
  document.querySelector("#rocket_container").classList.add("paused");
}