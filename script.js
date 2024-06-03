let diceDiv = document.querySelector(".dice-div");
diceDiv.addEventListener("click", diceClickHandler);
let randomValue = 0;

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

function handleTokenClick(tokenNumber, color) {
  if (shouldMove) {
    const currentPos = getCurrentPosition(tokenNumber, color);
    if (randomValue === 6 && currentPos === 0) {
      moveTokenToStart(tokenNumber, color);
      shouldMove = false;
    } else if (currentPos > 0) {
      moveToken(currentPos, tokenNumber, color);
      shouldMove = false;
    }
  }
}

function diceClickHandler() {
  randomValue = Math.floor(Math.random() * 6) + 1;
  updateDiceDisplay(randomValue);
  shouldMove = true;
}
function makeRedHighlight(color) {
  const tokens = getAllTokens(color);
  tokens.forEach((token) => token.setAttribute("highlight", true));
}
function removeRedHighlight(color) {
  const tokens = getAllTokens(color);
  tokens.forEach((token) => token.removeAttribute("highlight", true));
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
  if (color == "red") {
    if (nextPosition < 52) {
      updateTokenPosition(currentPosition, nextPosition, tokenNumber, color);
    } else {
      handleWinningMove(currentPosition, randomValue, tokenNumber, color);
    }
  } else if (color == "yellow") {
    const totalCurrentPosition = getTotalCurrentPosition(tokenNumber, color);
    if (totalCurrentPosition + randomValue < 78) {
      updateTokenPosition(currentPosition, nextPosition, tokenNumber, color);
      setTotalCurrentPosition(
        tokenNumber,
        totalCurrentPosition + randomValue,
        color
      );
    } else {
      handleWinningMove(currentPosition, randomValue, tokenNumber, color);
    }
  }
}

function updateTokenPosition(oldPos, newPos, tokenNumber, color) {
  if (newPos > 52) {
    newPos = newPos - 51;
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
  if (currentWinPosition > 0 && newPosition <= totalWinPositions) {
    winDivArray[currentWinPosition - 1].innerHTML = null;
  }
  if (
    currentPosition + newPosition > getTurningPoint(color) &&
    currentWinPosition == 0
  ) {
    allSmallDivsArray[currentPosition - 1].innerHTML = null;
  }

  if (newPosition <= 5) {
    winDivArray[newPosition - 1].appendChild(
      getTokenElement(tokenNumber, color)
    );
    setTokenPosition(tokenNumber, color, getTurningPoint(color) + newPosition);
    setWinPosition(tokenNumber, color, newPosition);
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

function handleTokenArrival(position, tokenNumber, color) {
  console.log(color);
  sendTokensBackExceptLast(position, color);
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
  }
}
function getAllTokens(color) {
  if (color === "red") {
    return [redToken1, redToken2, redToken3, redToken4];
  } else if (color === "yellow") {
    return [yellowToken1, yellowToken2, yellowToken3, yellowToken4];
  }
}
function getStartPosition(color) {
  if (color === "red") {
    return redStartPosition;
  } else if (color === "yellow") {
    return yellowStartPosition;
  }
}
function getWinDiceCount(color) {
  if (color === "red") {
    return redWinDiceCount;
  } else if (color === "yellow") {
    return yellowWinDiceCount;
  }
}
function incrementWinDiceCount(color) {
  if (color === "red") {
    redWinDiceCount += 1;
  } else if (color === "yellow") {
    yellowWinDiceCount += 1;
  }
}

function getTotalCurrentPosition(tokenNumber, color) {
  if (color == "yellow") {
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
  }
}
function setTotalCurrentPosition(tokenNumber, position, color) {
  if (color == "yellow") {
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
    console.log(tokenElement.classList.contains(className));
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
  }
}