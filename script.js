// Tambahkan efek interaktif saat hover
const textElement = document.querySelector(".text-animation");

textElement.addEventListener("mouseover", () => {
  textElement.style.color = "#ff6f61";
  textElement.style.textShadow = "4px 4px 6px rgba(0, 0, 0, 0.5)";
});

textElement.addEventListener("mouseout", () => {
  textElement.style.color = "#fff";
  textElement.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.3)";
});
