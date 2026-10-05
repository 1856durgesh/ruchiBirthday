document.addEventListener("click", function(event) {
  let x = event.clientX;
  let y = event.clientY;

  for (let i = 0; i < 30; i++) {
      createFireworkParticle(x, y);
  }
});

function createFireworkParticle(x, y) {
  let particle = document.createElement("div");
  particle.classList.add("firework");

  // Random color for each particle
  let colors = ["red", "yellow", "blue", "green", "purple", "orange", "pink", "cyan"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  particle.style.backgroundColor = randomColor;

  document.body.appendChild(particle);

  let angle = Math.random() * 2 * Math.PI;
  let distance = Math.random() * 120;

  let finalX = x + Math.cos(angle) * distance;
  let finalY = y + Math.sin(angle) * distance;

  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;

  // Animate particle explosion
  particle.animate([
      { transform: `translate(0, 0)`, opacity: 1 },
      { transform: `translate(${finalX - x}px, ${finalY - y}px)`, opacity: 0 }
  ], {
      duration: 1000,
      easing: "ease-out"
  });

  // Remove after animation
  setTimeout(() => {
      particle.remove();
  }, 1000);
}
