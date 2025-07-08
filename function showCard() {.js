function showCard() {
  document.getElementById("card").classList.add("visible");
  document.querySelector(".box").style.display = "none";  // hide box on click
  launchConfetti();
}
