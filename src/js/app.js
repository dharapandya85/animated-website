// GSAP animation for hero text
gsap.from(".hero-text", { duration: 1.5, y: 50, opacity: 0, ease: "power2.out" });
//gsap.from(".thumbnail", { opacity: 0, y: 30, stagger: 0.2, ease: "power2.out" });
// Mouse hover and interaction
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("mouseenter", () => {
    thumbnails.forEach((otherThumbnail) => {
      if (otherThumbnail !== thumbnail) {
        otherThumbnail.classList.add("dimmed");
      }
    });
  });

  thumbnail.addEventListener("mouseleave", () => {
    thumbnails.forEach((otherThumbnail) => {
      otherThumbnail.classList.remove("dimmed");
    });
  });

});