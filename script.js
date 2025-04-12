const colors = [
  { name: "Merah", value: "red" },
  { name: "Biru", value: "blue" },
  { name: "Hijau", value: "green" },
  { name: "Kuning", value: "yellow" },
  { name: "Ungu", value: "purple" },
  { name: "Oranye", value: "orange" }
];

let correctColor = null;

function generateGame() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  correctColor = colors[randomIndex];
  document.getElementById("colorName").textContent = correctColor.name;

  const shuffledColors = [...colors].sort(() => 0.5 - Math.random());
  const boxesContainer = document.getElementById("colorBoxes");
  boxesContainer.innerHTML = "";

  shuffledColors.forEach(color => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = color.value;
    box.onclick = () => checkAnswer(color);
    boxesContainer.appendChild(box);
  });

  document.getElementById("result").textContent = "";
}

function checkAnswer(selectedColor) {
  const result = document.getElementById("result");
  if (selectedColor.name === correctColor.name) {
    result.textContent = "Benar! 🎉";
    result.style.color = "green";
  } else {
    result.textContent = "Salah 😢";
    result.style.color = "red";
  }
}

window.onload = generateGame;
