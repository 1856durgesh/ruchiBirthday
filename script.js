document.getElementById("blowButton").addEventListener("click", function() {
  document.getElementById("flame").style.opacity = "0";
  let blowSong=document.getElementById("blowCandle")
  blowSong.play();
  setTimeout(()=>{
    blowSong.pause();
    blowSong.currentTime=0;
  },1500)
  setTimeout(() => {
      document.getElementById("flame").style.display = "none";
  }, 2000);
});

document.getElementById("cutButton").addEventListener("click", function() {
  let cake = document.getElementById("cake");
  let candle = document.getElementById("candle");
  let birthdayMessage = document.getElementById("birthdayMessage");
  let birthdaySong = document.getElementById("birthdaySong");


  // cake.classList.add("cut-animation");
    cake.classList.add("cut");
  candle.style.display = "none"; // Remove candle

  // Show birthday message with animation
  birthdayMessage.style.animation = "moveUp 3s ease-in-out forwards";
  birthdaySong.play();

  launchBalloons();

  setTimeout(() => {
      cake.classList.remove("cut-animation");
  }, 500);
});

function launchBalloons() {
  const balloonContainer = document.getElementById("balloonContainer");
  for (let i = 0; i < 10; i++) {
      let balloon = document.createElement("div");
      balloon.className = "balloon";
      balloon.style.left = Math.random() * 100 + "vw";
      balloon.style.background = getRandomColor();
      let string = document.createElement("div");
      string.className = "string";
      balloon.appendChild(string);
      balloonContainer.appendChild(balloon);
  }
}

function getRandomColor() {
  const colors = ["red", "blue", "yellow", "green", "purple", "pink", "orange", "gold"];
  return colors[Math.floor(Math.random() * colors.length)];
}