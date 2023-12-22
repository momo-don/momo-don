document.addEventListener("DOMContentLoaded", function() {
    const numGlitters = 100;
    const glitterColors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

    for (let i = 0; i < numGlitters; i++) {
      createGlitter();
    }

    function createGlitter() {
      const glitter = document.createElement("div");
      glitter.className = "glitter";
      glitter.style.left = `${Math.random() * window.innerWidth}px`;
      glitter.style.top = `${Math.random() * window.innerHeight}px`;
      glitter.style.background = glitterColors[Math.floor(Math.random() * glitterColors.length)];
      glitter.style.animationDuration = `${Math.random() * 2 + 1}s`;
      document.body.appendChild(glitter);
    }
    
  });