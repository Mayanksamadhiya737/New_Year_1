const bgHeart = document.querySelector('.bg_heart');
    const images = [
      "images/First.jpg",
      "images/second.jpg",
      "images/third.jpg",
      "images/fourth.jpg",
      "images/sixth.jpg",
      "images/seventh.jpg",
      "images/eigth.jpg",
      "images/ningth.jpg",
      "images/tength.jpg",
    ];
    let currentImageIndex = 0;

    function changeBackground() {
        bgHeart.style.opacity = 0.9; // Fade out
        setTimeout(() => {
          bgHeart.style.backgroundImage = `url('${images[currentImageIndex]}')`;
          bgHeart.style.opacity = 1; // Fade in
          currentImageIndex = (currentImageIndex + 1) % images.length;
        }, 1000); // Adjust the delay to match the transition duration
      }

    setInterval(changeBackground, 5000); // Change background every 5 seconds
