
  

  button.addEventListener("mouseover", () => {

    // Zufällige Position berechnen
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Button verschieben
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
  })