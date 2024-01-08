function reveal(card) {
  const cardId = card.id;
  if (cardId === "dog1" || cardId === "dog2") {
    card.classList.add("dog");
  } else if (cardId === "cat1" || cardId === "cat2") {
    card.classList.add("cat");
  } else if (cardId === "shark1" || cardId === "shark2") {
    card.classList.add("shark");
  }
};

function hideCards(cardId1, cardId2) {
  const card1 = document.getElementById(cardId1);
  const card2 = document.getElementById(cardId2);
  card1.classList.remove("dog", "cat", "shark");
  card2.classList.remove("dog", "cat", "shark");
};

let numberOfWins = 0;
let numberOfLoses = 0;
let numberOfAttempts = 0;
let successRate = 0;

function updateStats() {
  document.getElementById('wins').textContent = numberOfWins;
  document.getElementById('loses').textContent = numberOfLoses;
  document.getElementById('attempts').textContent = numberOfAttempts;
  document.getElementById('sucess').textContent = successRate.toFixed(0) + "%";
}

function calculateSuccessRate() {
  if (numberOfAttempts > 0) {
    successRate = (numberOfWins / numberOfAttempts) * 100;
  }
}

let firstClick = null;
let secondClick = null;

function gameStart(card) {
  if (firstClick === null) {
    // First click
    firstClick = card.id;
    reveal(card);

  } else if (secondClick === null) {
    // Second click
    secondClick = card.id;
    reveal(card);

    setTimeout(() => {
      if ((firstClick === "dog1" && secondClick === "dog2") || (firstClick === "dog2" && secondClick === "dog1")) {
        numberOfWins++;
        numberOfAttempts++;
        const dog1card = document.getElementById("dog1");
        const dog2card = document.getElementById("dog2");
        dog1card.style.visibility = "hidden";
        dog2card.style.visibility = "hidden";
        alert("You found the match!");
        calculateSuccessRate()
        updateStats();

      } else if ((firstClick === "cat1" && secondClick === "cat2") || (firstClick === "cat2" && secondClick === "cat1")) {
        numberOfWins++;
        numberOfAttempts++;
        const cat1card = document.getElementById("cat1");
        const cat2card = document.getElementById("cat2");
        cat1card.style.visibility = "hidden";
        cat2card.style.visibility = "hidden";
        alert("You found the match!");
        calculateSuccessRate()
        updateStats();

      } else if ((firstClick === "shark1" && secondClick === "shark2") || (firstClick === "shark2" && secondClick === "shark1")) {
        numberOfWins++;
        numberOfAttempts++;
        const shark1card = document.getElementById("shark1");
        const shark2card = document.getElementById("shark2");
        shark1card.style.visibility = "hidden";
        shark2card.style.visibility = "hidden";
        alert("You found the match!");
        calculateSuccessRate()
        updateStats();

      } else {
        alert("you lost!");
        hideCards(firstClick, secondClick);
        numberOfAttempts++;
        numberOfLoses++;
        calculateSuccessRate()
        updateStats();
      };

      firstClick = null;
      secondClick = null;
    }, 500);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // alert("find the same cards");
  const divs = document.querySelectorAll(".card");
  const ids = ['dog1', 'dog2', 'cat1', 'cat2', 'shark1', 'shark2'];

  const shuffleIds = ids.sort(() => Math.random() - 0.5);

  divs.forEach((div, index) => {
    div.id = shuffleIds[index];
  });
});