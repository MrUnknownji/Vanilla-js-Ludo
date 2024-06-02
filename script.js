let diceDiv = document.querySelector(".dice-div");
diceDiv.addEventListener("click", diceClickHandler);
let randomValue = 0;

let shouldMove = false;
const safePositions = [9, 22, 35, 48];
const redStartPosition = 1;
const redWinningDivsArray = [];
const allSmallDivsArray = [];

let currentRed1Position = 0,
  currentRed2Position = 0,
  currentRed3Position = 0,
  currentRed4Position = 0;
let red1WinPosition = 0,
  red2WinPosition = 0,
  red3WinPosition = 0,
  red4WinPosition = 0;
let redWinDiceCount = 0;

const redToken1Holder = document.getElementById("red-token-holder-1");
const redToken2Holder = document.getElementById("red-token-holder-2");
const redToken3Holder = document.getElementById("red-token-holder-3");
const redToken4Holder = document.getElementById("red-token-holder-4");
const redToken1 = document.getElementById("red-token-1");
const redToken2 = document.getElementById("red-token-2");
const redToken3 = document.getElementById("red-token-3");
const redToken4 = document.getElementById("red-token-4");

const centerDiv = document.querySelector(".center-winner-div");

for (let i = 1; i <= 52; i++) {
  const element = document.getElementById(`small-div-${i}`);
  allSmallDivsArray.push(element);
}

for (let i = 1; i <= 5; i++) {
  const element = document.getElementById(`small-div-rw-${i}`);
  redWinningDivsArray.push(element);
}

redToken1.addEventListener("click", () => {
  handleTokenClick(1);
});
redToken2.addEventListener("click", () => {
  handleTokenClick(2);
});
redToken3.addEventListener("click", () => {
  handleTokenClick(3);
});
redToken4.addEventListener("click", () => {
  handleTokenClick(4);
});

function handleTokenClick(tokenNumber) {
  if (shouldMove) {
    const currentPos = getCurrentPosition(tokenNumber);
    if (randomValue === 6 && currentPos === 0) {
      moveRedTokenToStart(tokenNumber);
      shouldMove = false;
    } else if (currentPos > 0) {
      moveRedToken(currentPos, getWinPosition(tokenNumber), tokenNumber);
      shouldMove = false;
    }
    removeRedHighlight();
  }
}

function diceClickHandler() {
  randomValue = Math.floor(Math.random() * 6) + 1;
  updateDiceDisplay(randomValue);
  shouldMove = true;
  makeRedHighlight();
}
function makeRedHighlight() {
  redToken1.setAttribute("highlight", true);
  redToken2.setAttribute("highlight", true);
  redToken3.setAttribute("highlight", true);
  redToken4.setAttribute("highlight", true);
}
function removeRedHighlight() {
  redToken1.removeAttribute("highlight");
  redToken2.removeAttribute("highlight");
  redToken3.removeAttribute("highlight");
  redToken4.removeAttribute("highlight");
}

function updateDiceDisplay(value) {
  diceDiv.innerHTML = null;
  for (let i = 1; i <= value; i++) {
    const dotSpan = document.createElement("span");
    dotSpan.classList.add("material-symbols-outlined");
    dotSpan.textContent = "fiber_manual_record";
    diceDiv.appendChild(dotSpan);
  }
  diceDiv.setAttribute("rotate", true);
  setTimeout(() => diceDiv.removeAttribute("rotate"), 250);
}

function moveRedTokenToStart(tokenNumber) {
  const tokenHolder = getTokenElementHolder(tokenNumber);
  tokenHolder.innerHTML = null;
  setTokenPosition(tokenNumber, redStartPosition);
  handleOverlapStyling(redStartPosition, tokenNumber);
  allSmallDivsArray[redStartPosition - 1].appendChild(
    getTokenElement(tokenNumber)
  );
}

function moveRedToken(currentPosition, redWinPosition, tokenNumber) {
  const nextPosition = currentPosition + randomValue;
  if (nextPosition < 52) {
    updateTokenPosition(currentPosition, nextPosition, tokenNumber);
  } else {
    handleWinningMove(
      currentPosition,
      redWinPosition,
      randomValue,
      tokenNumber
    );
  }
}

function handleOverlapStyling(position, tokenNumber) {
  const tokenElement = getTokenElement(tokenNumber);
  if (allSmallDivsArray[position - 1].children.length > 0) {
    tokenElement.style.top = `${tokenNumber * 20}%`;
    tokenElement.style.left = `${tokenNumber * 20}%`;
  } else {
    tokenElement.style.top = "50%";
    tokenElement.style.left = "50%";
  }
}

function updateTokenPosition(oldPos, newPos, tokenNumber) {
  const tokenElement = getTokenElement(tokenNumber);
  allSmallDivsArray[oldPos - 1].removeChild(tokenElement);
  handleOverlapStyling(newPos, tokenNumber);
  allSmallDivsArray[newPos - 1].appendChild(tokenElement);
  setTokenPosition(tokenNumber, newPos);
}

function handleWinningMove(
  currentPosition,
  redWinPosition,
  value,
  tokenNumber
) {
  const winPosition = currentPosition + value - 51;
  if (redWinPosition > 0 && winPosition <= 6) {
    redWinningDivsArray[redWinPosition - 1].innerHTML = null;
  }
  if (currentPosition + winPosition > 51 && redWinPosition == 0) {
    allSmallDivsArray[currentPosition - 1].innerHTML = null;
  }

  if (winPosition <= 5) {
    redWinningDivsArray[winPosition - 1].appendChild(
      getTokenElement(tokenNumber)
    );
    setTokenPosition(tokenNumber, 51 + winPosition);
    setRedWinPosition(tokenNumber, winPosition);
  }

  if (winPosition == 6) {
    const icon = document.createElement("span");
    icon.classList.add("material-symbols-outlined", "red-token");
    icon.textContent = "poker_chip";
    centerDiv.appendChild(icon);
    console.log(redWinDiceCount);
    redWinDiceCount += 1;
    if (redWinDiceCount == 4) {
      setTimeout(() => alert("Red won the game!"), 100);
    }
  }
}

function getCurrentPosition(tokenNumber) {
  switch (tokenNumber) {
    case 1:
      return currentRed1Position;
    case 2:
      return currentRed2Position;
    case 3:
      return currentRed3Position;
    case 4:
      return currentRed4Position;
  }
}
function getWinPosition(tokenNumber) {
  switch (tokenNumber) {
    case 1:
      return red1WinPosition;
    case 2:
      return red2WinPosition;
    case 3:
      return red3WinPosition;
    case 4:
      return red4WinPosition;
  }
}
function getTokenElement(tokenNumber) {
  switch (tokenNumber) {
    case 1:
      return redToken1;
    case 2:
      return redToken2;
    case 3:
      return redToken3;
    case 4:
      return redToken4;
  }
}
function getTokenElementHolder(tokenNumber) {
  switch (tokenNumber) {
    case 1:
      return redToken1Holder;
    case 2:
      return redToken2Holder;
    case 3:
      return redToken3Holder;
    case 4:
      return redToken4Holder;
  }
}
function setTokenPosition(tokenNumber, position) {
  switch (tokenNumber) {
    case 1:
      currentRed1Position = position;
      break;
    case 2:
      currentRed2Position = position;
      break;
    case 3:
      currentRed3Position = position;
      break;
    case 4:
      currentRed4Position = position;
      break;
  }
}
function setRedWinPosition(tokenNumber, position) {
  switch (tokenNumber) {
    case 1:
      red1WinPosition = position;
      break;
    case 2:
      red2WinPosition = position;
      break;
    case 3:
      red3WinPosition = position;
      break;
    case 4:
      red4WinPosition = position;
      break;
  }
}
