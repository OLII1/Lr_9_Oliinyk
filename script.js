const cards = [
  { name: "6", value: 6, img: "6.png" },
  { name: "7", value: 7, img: "7.png" },
  { name: "8", value: 8, img: "8.png" },
  { name: "9", value: 9, img: "9.png" },
  { name: "10", value: 10, img: "10.png" },
  { name: "В", value: 2, img: "jack.png" },
  { name: "Д", value: 3, img: "queen.png" },
  { name: "К", value: 4, img: "king.png" },
  { name: "Т", value: 11, img: "ace.png" }
];

let userTotal = 0, compTotal = 0, rounds = 0;
let userName = "";

window.onload = function() {
  userName = prompt("Введіть ім’я:");
  if (!userName || userName.trim() === "") userName = "Гравець";
  document.getElementById("userName").textContent = `${userName}:`;
};

document.getElementById("generate").onclick = function() {
  if (rounds < 3) {
    rounds++;
    document.getElementById("tries").textContent = `Спроба ${rounds} з 3`;

    const userCard = cards[Math.floor(Math.random() * cards.length)];
    const compCard = cards[Math.floor(Math.random() * cards.length)];

    document.getElementById("userCard").src = userCard.img;
    document.getElementById("compCard").src = compCard.img;

    userTotal += userCard.value;
    compTotal += compCard.value;

    document.getElementById("userScore").textContent = userTotal;
    document.getElementById("compScore").textContent = compTotal;

    if (rounds === 3) {
      let result = "";
      if (userTotal > compTotal) result = ` ${userName} виграв!`;
      else if (userTotal < compTotal) result = " Виграв комп’ютер!";
      else result = " Нічия!";
      document.getElementById("result").textContent = result;
      this.disabled = true;
    }
  }
};
