let diceDiv = document.querySelector(".dice-div");
diceDiv.addEventListener("click", diceClickHandler);
let nextPlayerTextContainer = document.querySelector(".next-player-txt");
let randomValue = 0;
let currentPlayer = "red";
let nextPlayer = "green";

const centerDiv = document.querySelector(".center-winner-div");
let shouldMove = false;
const safePositions = [9, 22, 35, 48];
const turningPoints = [51, 12, 25, 38];
const allSmallDivsArray = [];

const redStartPosition = 1;
const redWinningDivsArray = [];
let redWinDiceCount = 0;
let currentRed1Position = 0,
  currentRed2Position = 0,
  currentRed3Position = 0,
  currentRed4Position = 0;
let red1WinPosition = 0,
  red2WinPosition = 0,
  red3WinPosition = 0,
  red4WinPosition = 0;
let red1TotalPosition = 0,
  red2TotalPosition = 0,
  red3TotalPosition = 0,
  red4TotalPosition = 0;
const redToken1Holder = document.getElementById("red-token-holder-1");
const redToken2Holder = document.getElementById("red-token-holder-2");
const redToken3Holder = document.getElementById("red-token-holder-3");
const redToken4Holder = document.getElementById("red-token-holder-4");
const redToken1 = document.getElementById("red-token-1");
const redToken2 = document.getElementById("red-token-2");
const redToken3 = document.getElementById("red-token-3");
const redToken4 = document.getElementById("red-token-4");

const yellowStartPosition = 27;
const yellowWinningDivsArray = [];
let yellowWinDiceCount = 0;
let currentYellow1Position = 0,
  currentYellow2Position = 0,
  currentYellow3Position = 0,
  currentYellow4Position = 0;
let yellow1WinPosition = 0,
  yellow2WinPosition = 0,
  yellow3WinPosition = 0,
  yellow4WinPosition = 0;
let yellow1TotalPosition = 0,
  yellow2TotalPosition = 0,
  yellow3TotalPosition = 0,
  yellow4TotalPosition = 0;
const yellowToken1Holder = document.getElementById("yellow-token-holder-1");
const yellowToken2Holder = document.getElementById("yellow-token-holder-2");
const yellowToken3Holder = document.getElementById("yellow-token-holder-3");
const yellowToken4Holder = document.getElementById("yellow-token-holder-4");
const yellowToken1 = document.getElementById("yellow-token-1");
const yellowToken2 = document.getElementById("yellow-token-2");
const yellowToken3 = document.getElementById("yellow-token-3");
const yellowToken4 = document.getElementById("yellow-token-4");

const greenStartPosition = 14;
const greenWinningDivsArray = [];
let greenWinDiceCount = 0;
let currentGreen1Position = 0,
  currentGreen2Position = 0,
  currentGreen3Position = 0,
  currentGreen4Position = 0;
let green1WinPosition = 0,
  green2WinPosition = 0,
  green3WinPosition = 0,
  green4WinPosition = 0;
let green1TotalPosition = 0,
  green2TotalPosition = 0,
  green3TotalPosition = 0,
  green4TotalPosition = 0;
const greenToken1Holder = document.getElementById("green-token-holder-1");
const greenToken2Holder = document.getElementById("green-token-holder-2");
const greenToken3Holder = document.getElementById("green-token-holder-3");
const greenToken4Holder = document.getElementById("green-token-holder-4");
const greenToken1 = document.getElementById("green-token-1");
const greenToken2 = document.getElementById("green-token-2");
const greenToken3 = document.getElementById("green-token-3");
const greenToken4 = document.getElementById("green-token-4");

const blueStartPosition = 40;
const blueWinningDivsArray = [];
let blueWinDiceCount = 0;
let currentBlue1Position = 0,
  currentBlue2Position = 0,
  currentBlue3Position = 0,
  currentBlue4Position = 0;
let blue1WinPosition = 0,
  blue2WinPosition = 0,
  blue3WinPosition = 0,
  blue4WinPosition = 0;
let blue1TotalPosition = 0,
  blue2TotalPosition = 0,
  blue3TotalPosition = 0,
  blue4TotalPosition = 0;
const blueToken1Holder = document.getElementById("blue-token-holder-1");
const blueToken2Holder = document.getElementById("blue-token-holder-2");
const blueToken3Holder = document.getElementById("blue-token-holder-3");
const blueToken4Holder = document.getElementById("blue-token-holder-4");
const blueToken1 = document.getElementById("blue-token-1");
const blueToken2 = document.getElementById("blue-token-2");
const blueToken3 = document.getElementById("blue-token-3");
const blueToken4 = document.getElementById("blue-token-4");
let redBorder = document.querySelector(".red-border");
let greenBorder = document.querySelector(".green-border");
let yellowBorder = document.querySelector(".yellow-border");
let blueBorder = document.querySelector(".blue-border");

for (let i = 1; i <= 52; i++) {
  const element = document.getElementById(`small-div-${i}`);
  allSmallDivsArray.push(element);
}

for (let i = 1; i <= 5; i++) {
  const element = document.getElementById(`small-div-rw-${i}`);
  redWinningDivsArray.push(element);
}

for (let i = 1; i <= 5; i++) {
  const element = document.getElementById(`small-div-yw-${i}`);
  yellowWinningDivsArray.push(element);
}

for (let i = 1; i <= 5; i++) {
  const element = document.getElementById(`small-div-gw-${i}`);
  greenWinningDivsArray.push(element);
}

for (let i = 1; i <= 5; i++) {
  const element = document.getElementById(`small-div-bw-${i}`);
  blueWinningDivsArray.push(element);
}

redToken1.addEventListener("click", () => {
  handleTokenClick(1, "red");
});
redToken2.addEventListener("click", () => {
  handleTokenClick(2, "red");
});
redToken3.addEventListener("click", () => {
  handleTokenClick(3, "red");
});
redToken4.addEventListener("click", () => {
  handleTokenClick(4, "red");
});

yellowToken1.addEventListener("click", () => {
  handleTokenClick(1, "yellow");
});
yellowToken2.addEventListener("click", () => {
  handleTokenClick(2, "yellow");
});
yellowToken3.addEventListener("click", () => {
  handleTokenClick(3, "yellow");
});
yellowToken4.addEventListener("click", () => {
  handleTokenClick(4, "yellow");
});

greenToken1.addEventListener("click", () => {
  handleTokenClick(1, "green");
});
greenToken2.addEventListener("click", () => {
  handleTokenClick(2, "green");
});
greenToken3.addEventListener("click", () => {
  handleTokenClick(3, "green");
});
greenToken4.addEventListener("click", () => {
  handleTokenClick(4, "green");
});

blueToken1.addEventListener("click", () => {
  handleTokenClick(1, "blue");
});
blueToken2.addEventListener("click", () => {
  handleTokenClick(2, "blue");
});
blueToken3.addEventListener("click", () => {
  handleTokenClick(3, "blue");
});
blueToken4.addEventListener("click", () => {
  handleTokenClick(4, "blue");
});

function handleTokenClick(tokenNumber, color) {
  if (getShouldMove(tokenNumber, color) && shouldMove) {
    const currentPos = getCurrentPosition(tokenNumber, color);
    if (randomValue === 6 && currentPos === 0) {
      moveTokenToStart(tokenNumber, color);
      shouldMove = false;
    } else if (currentPos > 0) {
      moveToken(currentPos, tokenNumber, color);
      shouldMove = false;
    }
  }
  removeHighlight();
}

function diceClickHandler() {
  removeHighlight();
  randomValue = Math.floor(Math.random() * 6) + 1;
  setCurrentPlayer();
  setNextPlayer(randomValue, currentPlayer);
  updateDiceDisplay(randomValue);
  shouldMove = true;
  makeHighlight(currentPlayer);
}

function makeHighlight(color) {
  const currentBorder = getCurrentBorder(color);
  currentBorder.classList.add("highlight");
}

function removeHighlight() {
  redBorder.classList.remove("highlight");
  greenBorder.classList.remove("highlight");
  yellowBorder.classList.remove("highlight");
  blueBorder.classList.remove("highlight");
}

function updateDiceDisplay(value) {
  diceDiv.innerHTML = null;
  diceDiv.style.backgroundColor = currentPlayer;
  nextPlayerTextContainer.innerText = `Next player: ${getNextPlayer(
    currentPlayer
  )}`;

  for (let i = 1; i <= value; i++) {
    const dotSpan = document.createElement("span");
    dotSpan.classList.add("material-symbols-outlined");
    dotSpan.textContent = "fiber_manual_record";
    diceDiv.appendChild(dotSpan);
  }
  diceDiv.setAttribute("rotate", true);
  setTimeout(() => diceDiv.removeAttribute("rotate"), 250);
}

function moveTokenToStart(tokenNumber, color) {
  const tokenHolder = getTokenElementHolder(tokenNumber, color);
  tokenHolder.innerHTML = null;
  setTokenPosition(tokenNumber, color, getStartPosition(color));
  setTotalCurrentPosition(tokenNumber, getStartPosition(color), color);
  handleOverlapStyling(getStartPosition(color), tokenNumber, color);
  allSmallDivsArray[getStartPosition(color) - 1].appendChild(
    getTokenElement(tokenNumber, color)
  );
}

function moveToken(currentPosition, tokenNumber, color) {
  const nextPosition = currentPosition + randomValue;
  const totalCurrentPosition =
    getTotalCurrentPosition(tokenNumber, color) + randomValue;
  setTotalCurrentPosition(tokenNumber, totalCurrentPosition, color);
  if (totalCurrentPosition < getTotalCurrentPositionBreakValue(color)) {
    updateTokenPosition(currentPosition, nextPosition, tokenNumber, color);
  } else {
    handleWinningMove(currentPosition, randomValue, tokenNumber, color);
  }
}

function updateTokenPosition(oldPos, newPos, tokenNumber, color) {
  if (newPos > 52) {
    newPos = newPos - 52;
  }
  const tokenElement = getTokenElement(tokenNumber, color);
  allSmallDivsArray[oldPos - 1].removeChild(tokenElement);
  handleTokenArrival(newPos, tokenNumber, color);
  allSmallDivsArray[newPos - 1].appendChild(tokenElement);
  setTokenPosition(tokenNumber, color, newPos);
}

function handleWinningMove(currentPosition, value, tokenNumber, color) {
  const winDivArray = getWinningDivsArray(color);
  const currentWinPosition = getWinPosition(tokenNumber, color);
  const totalWinPositions = 6;
  const newPosition = currentPosition + value - getTurningPoint(color);
  const tokenElement = getTokenElement(tokenNumber, color);
  if (currentWinPosition > 0 && newPosition <= totalWinPositions) {
    winDivArray[currentWinPosition - 1].removeChild(tokenElement);
  }
  if (
    currentPosition + newPosition > getTurningPoint(color) &&
    currentWinPosition == 0
  ) {
    allSmallDivsArray[currentPosition - 1].removeChild(tokenElement);
  }

  if (newPosition <= 5) {
    winDivArray[newPosition - 1].appendChild(
      getTokenElement(tokenNumber, color)
    );
    setTokenPosition(tokenNumber, color, getTurningPoint(color) + newPosition);
    setWinPosition(tokenNumber, color, newPosition);
    handleOverlapStylingInsideWinDiv(newPosition, tokenNumber, color);
  }

  if (newPosition == totalWinPositions) {
    const icon = document.createElement("span");
    icon.classList.add("material-symbols-outlined", `${color}-token`);
    icon.textContent = "poker_chip";
    centerDiv.appendChild(icon);
    incrementWinDiceCount(color);
    if (getWinDiceCount(color) == 4) {
      setTimeout(() => alert(color + " won the game!"), 100);
    }
  }
}

function handleOverlapStyling(position, tokenNumber, color) {
  const tokenElement = getTokenElement(tokenNumber, color);
  if (allSmallDivsArray[position - 1].children.length > 0) {
    tokenElement.style.top = `${tokenNumber * 20}%`;
    tokenElement.style.left = `${tokenNumber * 20}%`;
  } else {
    tokenElement.style.top = "50%";
    tokenElement.style.left = "50%";
  }
}
function handleOverlapStylingInsideWinDiv(position, tokenNumber, color) {
  const tokenElement = getTokenElement(tokenNumber, color);
  const winDivArray = getWinningDivsArray(color);
  if (winDivArray[position - 1].children.length > 0) {
    tokenElement.style.top = `${tokenNumber * 20}%`;
    tokenElement.style.left = `${tokenNumber * 20}%`;
  } else {
    tokenElement.style.top = "50%";
    tokenElement.style.left = "50%";
  }
}

function handleTokenArrival(position, tokenNumber, color) {
  if (!safePositions.includes(position)) {
    sendTokensBackExceptLast(position, color);
  }
  handleOverlapStyling(position, tokenNumber, color);
}
function getCurrentPosition(tokenNumber, color) {
  if (color == "red") {
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
  } else if (color == "yellow") {
    switch (tokenNumber) {
      case 1:
        return currentYellow1Position;
      case 2:
        return currentYellow2Position;
      case 3:
        return currentYellow3Position;
      case 4:
        return currentYellow4Position;
    }
  } else if (color == "green") {
    switch (tokenNumber) {
      case 1:
        return currentGreen1Position;
      case 2:
        return currentGreen2Position;
      case 3:
        return currentGreen3Position;
      case 4:
        return currentGreen4Position;
    }
  } else if (color == "blue") {
    switch (tokenNumber) {
      case 1:
        return currentBlue1Position;
      case 2:
        return currentBlue2Position;
      case 3:
        return currentBlue3Position;
      case 4:
        return currentBlue4Position;
    }
  }
}
function getWinPosition(tokenNumber, color) {
  if (color == "red") {
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
  } else if (color == "yellow") {
    switch (tokenNumber) {
      case 1:
        return yellow1WinPosition;
      case 2:
        return yellow2WinPosition;
      case 3:
        return yellow3WinPosition;
      case 4:
        return yellow4WinPosition;
    }
  } else if (color == "green") {
    switch (tokenNumber) {
      case 1:
        return green1WinPosition;
      case 2:
        return green2WinPosition;
      case 3:
        return green3WinPosition;
      case 4:
        return green4WinPosition;
    }
  } else if (color == "blue") {
    switch (tokenNumber) {
      case 1:
        return blue1WinPosition;
      case 2:
        return blue2WinPosition;
      case 3:
        return blue3WinPosition;
      case 4:
        return blue4WinPosition;
    }
  }
}

function getTokenElement(tokenNumber, color) {
  if (color == "red") {
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
  } else if (color == "green") {
    switch (tokenNumber) {
      case 1:
        return greenToken1;
      case 2:
        return greenToken2;
      case 3:
        return greenToken3;
      case 4:
        return greenToken4;
    }
  } else if (color == "yellow") {
    switch (tokenNumber) {
      case 1:
        return yellowToken1;
      case 2:
        return yellowToken2;
      case 3:
        return yellowToken3;
      case 4:
        return yellowToken4;
    }
  } else if (color == "blue") {
    switch (tokenNumber) {
      case 1:
        return blueToken1;
      case 2:
        return blueToken2;
      case 3:
        return blueToken3;
      case 4:
        return blueToken4;
    }
  }
}
function getTokenElementHolder(tokenNumber, color) {
  if (color == "red") {
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
  } else if (color == "yellow") {
    switch (tokenNumber) {
      case 1:
        return yellowToken1Holder;
      case 2:
        return yellowToken2Holder;
      case 3:
        return yellowToken3Holder;
      case 4:
        return yellowToken4Holder;
    }
  } else if (color == "green") {
    switch (tokenNumber) {
      case 1:
        return greenToken1Holder;
      case 2:
        return greenToken2Holder;
      case 3:
        return greenToken3Holder;
      case 4:
        return greenToken4Holder;
    }
  } else if (color == "blue") {
    switch (tokenNumber) {
      case 1:
        return blueToken1Holder;
      case 2:
        return blueToken2Holder;
      case 3:
        return blueToken3Holder;
      case 4:
        return blueToken4Holder;
    }
  }
}
function setTokenPosition(tokenNumber, color, position) {
  if (color == "red") {
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
  } else if (color == "yellow") {
    switch (tokenNumber) {
      case 1:
        currentYellow1Position = position;
        break;
      case 2:
        currentYellow2Position = position;
        break;
      case 3:
        currentYellow3Position = position;
        break;
      case 4:
        currentYellow4Position = position;
        break;
    }
  } else if (color == "green") {
    switch (tokenNumber) {
      case 1:
        currentGreen1Position = position;
        break;
      case 2:
        currentGreen2Position = position;
        break;
      case 3:
        currentGreen3Position = position;
        break;
      case 4:
        currentGreen4Position = position;
        break;
    }
  } else if (color == "blue") {
    switch (tokenNumber) {
      case 1:
        currentBlue1Position = position;
        break;
      case 2:
        currentBlue2Position = position;
        break;
      case 3:
        currentBlue3Position = position;
        break;
      case 4:
        currentBlue4Position = position;
        break;
    }
  }
}
function setWinPosition(tokenNumber, color, position) {
  if (color == "red") {
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
  } else if (color == "yellow") {
    switch (tokenNumber) {
      case 1:
        yellow1WinPosition = position;
        break;
      case 2:
        yellow2WinPosition = position;
        break;
      case 3:
        yellow3WinPosition = position;
        break;
      case 4:
        yellow4WinPosition = position;
        break;
    }
  } else if (color == "green") {
    switch (tokenNumber) {
      case 1:
        green1WinPosition = position;
        break;
      case 2:
        green2WinPosition = position;
        break;
      case 3:
        green3WinPosition = position;
        break;
      case 4:
        green4WinPosition = position;
        break;
    }
  } else if (color == "blue") {
    switch (tokenNumber) {
      case 1:
        blue1WinPosition = position;
        break;
      case 2:
        blue2WinPosition = position;
        break;
      case 3:
        blue3WinPosition = position;
        break;
      case 4:
        blue4WinPosition = position;
        break;
    }
  }
}
function getAllTokens(color) {
  if (color === "red") {
    return [redToken1, redToken2, redToken3, redToken4];
  } else if (color === "yellow") {
    return [yellowToken1, yellowToken2, yellowToken3, yellowToken4];
  } else if (color === "green") {
    return [greenToken1, greenToken2, greenToken3, greenToken4];
  } else if (color === "blue") {
    return [blueToken1, blueToken2, blueToken3, blueToken4];
  }
}
function getStartPosition(color) {
  if (color === "red") {
    return redStartPosition;
  } else if (color === "yellow") {
    return yellowStartPosition;
  } else if (color === "green") {
    return greenStartPosition;
  } else if (color === "blue") {
    return blueStartPosition;
  }
}
function getWinDiceCount(color) {
  if (color === "red") {
    return redWinDiceCount;
  } else if (color === "yellow") {
    return yellowWinDiceCount;
  } else if (color === "green") {
    return greenWinDiceCount;
  } else if (color === "blue") {
    return blueWinDiceCount;
  }
}
function incrementWinDiceCount(color) {
  if (color === "red") {
    redWinDiceCount += 1;
  } else if (color === "yellow") {
    yellowWinDiceCount += 1;
  } else if (color === "green") {
    greenWinDiceCount += 1;
  } else if (color === "blue") {
    blueWinDiceCount += 1;
  }
}

function getTotalCurrentPosition(tokenNumber, color) {
  if (color == "red") {
    switch (tokenNumber) {
      case 1:
        return red1TotalPosition;
      case 2:
        return red2TotalPosition;
      case 3:
        return red3TotalPosition;
      case 4:
        return red4TotalPosition;
    }
  } else if (color == "yellow") {
    switch (tokenNumber) {
      case 1:
        return yellow1TotalPosition;
      case 2:
        return yellow2TotalPosition;
      case 3:
        return yellow3TotalPosition;
      case 4:
        return yellow4TotalPosition;
    }
  } else if (color == "green") {
    switch (tokenNumber) {
      case 1:
        return green1TotalPosition;
      case 2:
        return green2TotalPosition;
      case 3:
        return green3TotalPosition;
      case 4:
        return green4TotalPosition;
    }
  } else if (color == "blue") {
    switch (tokenNumber) {
      case 1:
        return blue1TotalPosition;
      case 2:
        return blue2TotalPosition;
      case 3:
        return blue3TotalPosition;
      case 4:
        return blue4TotalPosition;
    }
  }
}
function setTotalCurrentPosition(tokenNumber, position, color) {
  if (color == "red") {
    switch (tokenNumber) {
      case 1:
        red1TotalPosition = position;
        break;
      case 2:
        red2TotalPosition = position;
        break;
      case 3:
        red3TotalPosition = position;
        break;
      case 4:
        red4TotalPosition = position;
        break;
    }
  } else if (color == "yellow") {
    switch (tokenNumber) {
      case 1:
        yellow1TotalPosition = position;
        break;
      case 2:
        yellow2TotalPosition = position;
        break;
      case 3:
        yellow3TotalPosition = position;
        break;
      case 4:
        yellow4TotalPosition = position;
        break;
    }
  } else if (color == "green") {
    switch (tokenNumber) {
      case 1:
        green1TotalPosition = position;
        break;
      case 2:
        green2TotalPosition = position;
        break;
      case 3:
        green3TotalPosition = position;
        break;
      case 4:
        green4TotalPosition = position;
        break;
    }
  } else if (color == "blue") {
    switch (tokenNumber) {
      case 1:
        blue1TotalPosition = position;
        break;
      case 2:
        blue2TotalPosition = position;
        break;
      case 3:
        blue3TotalPosition = position;
        break;
      case 4:
        blue4TotalPosition = position;
        break;
    }
  }
}
function getTurningPoint(color) {
  if (color === "red") {
    return turningPoints[0];
  } else if (color === "yellow") {
    return turningPoints[2];
  } else if (color === "green") {
    return turningPoints[1];
  } else if (color === "blue") {
    return turningPoints[3];
  }
}
function getWinningDivsArray(color) {
  if (color === "red") {
    return redWinningDivsArray;
  } else if (color === "yellow") {
    return yellowWinningDivsArray;
  } else if (color === "green") {
    return greenWinningDivsArray;
  } else if (color === "blue") {
    return blueWinningDivsArray;
  }
}

function getAllTokensOnDiv(div) {
  const tokens = [];
  const children = div.children;
  for (let i = 0; i < children.length; i++) {
    if (children[i].classList.contains("token")) {
      tokens.push(children[i]);
    }
  }
  return tokens;
}
function sendTokensBackExceptLast(position, color) {
  const tokensOnDiv = getAllTokensOnDiv(allSmallDivsArray[position - 1]);
  const className = `${color}-token`;
  for (let i = 0; i < tokensOnDiv.length; i++) {
    const tokenElement = tokensOnDiv[i];
    if (!tokenElement.classList.contains(className)) {
      const tokenHolder = getTokenElementHolderById(tokenElement);
      tokenHolder.appendChild(tokenElement);
      resetTokenPosition(tokenElement.id);
    }
  }
}

function getTokenElementHolderById(tokenElement) {
  switch (tokenElement.id) {
    case "red-token-1":
      return redToken1Holder;
    case "red-token-2":
      return redToken2Holder;
    case "red-token-3":
      return redToken3Holder;
    case "red-token-4":
      return redToken4Holder;
    case "yellow-token-1":
      return yellowToken1Holder;
    case "yellow-token-2":
      return yellowToken2Holder;
    case "yellow-token-3":
      return yellowToken3Holder;
    case "yellow-token-4":
      return yellowToken4Holder;
    case "green-token-1":
      return greenToken1Holder;
    case "green-token-2":
      return greenToken2Holder;
    case "green-token-3":
      return greenToken3Holder;
    case "green-token-4":
      return greenToken4Holder;
    case "blue-token-1":
      return blueToken1Holder;
    case "blue-token-2":
      return blueToken2Holder;
    case "blue-token-3":
      return blueToken3Holder;
    case "blue-token-4":
      return blueToken4Holder;
  }
}
function resetTokenPosition(tokenId) {
  switch (tokenId) {
    case "red-token-1":
      currentRed1Position = 0;
      break;
    case "red-token-2":
      currentRed2Position = 0;
      break;
    case "red-token-3":
      currentRed3Position = 0;
      break;
    case "red-token-4":
      currentRed4Position = 0;
      break;
    case "yellow-token-1":
      currentYellow1Position = 0;
      break;
    case "yellow-token-2":
      currentYellow2Position = 0;
      break;
    case "yellow-token-3":
      currentYellow3Position = 0;
      break;
    case "yellow-token-4":
      currentYellow4Position = 0;
      break;
    case "green-token-1":
      currentGreen1Position = 0;
      break;
    case "green-token-2":
      currentGreen2Position = 0;
      break;
    case "green-token-3":
      currentGreen3Position = 0;
      break;
    case "green-token-4":
      currentGreen4Position = 0;
      break;
    case "blue-token-1":
      currentBlue1Position = 0;
      break;
    case "blue-token-2":
      currentBlue2Position = 0;
      break;
    case "blue-token-3":
      currentBlue3Position = 0;
      break;
    case "blue-token-4":
      currentBlue4Position = 0;
      break;
  }
}
function setCurrentPlayer() {
  if (nextPlayer == "red") {
    currentPlayer = "red";
  } else if (nextPlayer == "yellow") {
    currentPlayer = "yellow";
  } else if (nextPlayer == "green") {
    currentPlayer = "green";
  } else if (nextPlayer == "blue") {
    currentPlayer = "blue";
  }
}

function setNextPlayer(randomValue, color) {
  if (randomValue === 6) {
    if (color === "red") {
      nextPlayer = "red";
    } else if (color === "yellow") {
      nextPlayer = "yellow";
    } else if (color === "green") {
      nextPlayer = "green";
    } else if (color === "blue") {
      nextPlayer = "blue";
    }
  } else {
    if (color == "red") {
      nextPlayer = "green";
    } else if (color == "green") {
      nextPlayer = "yellow";
    } else if (color == "yellow") {
      nextPlayer = "blue";
    } else if (color == "blue") {
      nextPlayer = "red";
    }
  }
}
function getNextPlayer() {
  return nextPlayer;
}

function getShouldMove(tokenNumber, color) {
  if (color == currentPlayer) {
    return true;
  } else {
    return false;
  }
}
function getTotalCurrentPositionBreakValue(color) {
  if (color == "red") {
    return 51;
  } else if (color == "green") {
    return 64;
  } else if (color == "yellow") {
    return 77;
  } else if (color == "blue") {
    return 90;
  }
}

function getCurrentBorder(color) {
  if (color == "red") {
    return redBorder;
  } else if (color == "green") {
    return greenBorder;
  } else if (color == "yellow") {
    return yellowBorder;
  } else if (color == "blue") {
    return blueBorder;
  }
}
