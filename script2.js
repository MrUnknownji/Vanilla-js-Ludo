let diceDiv = document.querySelector(".dice-div");
diceDiv.addEventListener("click", diceClickHandler);

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
let redWinDiceCount = 0,
  blueWinDiceCount = 0,
  yellowWinDiceCount = 0,
  greenWinDiceCount = 0;

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

function diceClickHandler() {
  const randomValue = Math.floor(Math.random() * 6) + 1;
  updateDiceDisplay(randomValue);

  // Remove previous event listeners
  redToken1.replaceWith(redToken1.cloneNode(true));
  redToken2.replaceWith(redToken2.cloneNode(true));
  redToken3.replaceWith(redToken3.cloneNode(true));
  redToken4.replaceWith(redToken4.cloneNode(true));

  redToken1.addEventListener("click", () => handleTokenClick(1, randomValue));
  redToken2.addEventListener("click", () => handleTokenClick(2, randomValue));
  redToken3.addEventListener("click", () => handleTokenClick(3, randomValue));
  redToken4.addEventListener("click", () => handleTokenClick(4, randomValue));
  function handleTokenClick(tokenNumber, diceValue) {
    const currentPos = getCurrentPosition(tokenNumber);
    if (diceValue === 6 && currentPos === 0) {
      moveRedTokenToStart(tokenNumber);
    } else if (currentPos > 0) {
      moveRedToken(currentPos, getWinPosition(tokenNumber), diceValue, tokenNumber);
    }
  }
  
  // redToken1.addEventListener("click", () => {
  //   if (randomValue == 6 && currentRed1Position == 0) {
  //     moveRedTokenToStart(1);
  //     return;
  //   } else if (currentRed1Position > 0) {
  //     moveRedToken(currentRed1Position, red1WinPosition, randomValue, 1);
  //     return;
  //   }
  // });

  // redToken2.addEventListener("click", () => {
  //   if (randomValue == 6 && currentRed2Position == 0) {
  //     moveRedTokenToStart(2);
  //     return;
  //   } else if (currentRed2Position > 0) {
  //     moveRedToken(currentRed2Position, red2WinPosition, randomValue, 2);
  //     return;
  //   }
  // });

  // redToken3.addEventListener("click", () => {
  //   if (randomValue == 6 && currentRed3Position == 0) {
  //     moveRedTokenToStart(3);
  //     return;
  //   } else if (currentRed3Position > 0) {
  //     moveRedToken(currentRed3Position, red3WinPosition, randomValue, 3);
  //     return;
  //   }
  // });

  // redToken4.addEventListener("click", () => {
  //   if (randomValue == 6 && currentRed4Position == 0) {
  //     moveRedTokenToStart(4);
  //     return;
  //   } else if (currentRed4Position > 0) {
  //     moveRedToken(currentRed4Position, red4WinPosition, randomValue, 4);
  //     return;
  //   }
  // });
  // if (randomValue == 6 && currentRed1Position == 0) {
  //   redToken1.addEventListener("click", () => moveRedTokenToStart(1));
  // } else if (currentRed1Position > 0) {
  //   redToken1.addEventListener("click", () =>
  //     moveRedToken(currentRed1Position, red1WinPosition, randomValue, 1)
  //   );
  // }
  // if (randomValue == 6 && currentRed2Position == 0) {
  //   redToken2.addEventListener("click", () => moveRedTokenToStart(2));
  // } else if (currentRed2Position > 0) {
  //   redToken2.addEventListener("click", () =>
  //     moveRedToken(currentRed2Position, red2WinPosition, randomValue, 2)
  //   );
  // }
  // if (randomValue == 6 && currentRed3Position == 0) {
  //   redToken3.addEventListener("click", () => moveRedTokenToStart(3));
  // } else if (currentRed3Position > 0) {
  //   redToken3.addEventListener("click", () =>
  //     moveRedToken(currentRed3Position, red3WinPosition, randomValue, 3)
  //   );
  // }
  // if (randomValue == 6 && currentRed4Position == 0) {
  //   redToken4.addEventListener("click", () => moveRedTokenToStart(4));
  // } else if (currentRed4Position > 0) {
  //   redToken4.addEventListener("click", () =>
  //     moveRedToken(currentRed4Position, red4WinPosition, randomValue, 4)
  //   );
  // }
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
  switch (tokenNumber) {
    case 1:
      redToken1Holder.innerHTML = null;
      currentRed1Position = redStartPosition;
      allSmallDivsArray[redStartPosition - 1].appendChild(redToken1);
      break;
    case 2:
      redToken2Holder.innerHTML = null;
      currentRed2Position = redStartPosition;
      allSmallDivsArray[redStartPosition - 1].appendChild(redToken2);
      break;
    case 3:
      redToken3Holder.innerHTML = null;
      currentRed3Position = redStartPosition;
      allSmallDivsArray[redStartPosition - 1].appendChild(redToken3);
      break;
    case 4:
      redToken4Holder.innerHTML = null;
      currentRed4Position = redStartPosition;
      allSmallDivsArray[redStartPosition - 1].appendChild(redToken4);
      break;
    default:
      break;
  }
}

function moveRedToken(currentPosition, redWinPosition, value, tokenNumber) {
  console.log(value, tokenNumber);
  const nextPosition = currentPosition + value;
  if (nextPosition < 52) {
    updateTokenPosition(currentPosition, nextPosition, tokenNumber);
  } else {
    handleWinningMove(currentPosition, redWinPosition, value, tokenNumber);
  }
}

function updateTokenPosition(oldPos, newPos, tokenNumber) {
  allSmallDivsArray[oldPos - 1].innerHTML = null;
  switch (tokenNumber) {
    case 1:
      allSmallDivsArray[newPos - 1].appendChild(redToken1);
      currentRed1Position = newPos;
      break;
    case 2:
      allSmallDivsArray[newPos - 1].appendChild(redToken2);
      currentRed2Position = newPos;
      break;
    case 3:
      allSmallDivsArray[newPos - 1].appendChild(redToken3);
      currentRed3Position = newPos;
      break;
    case 4:
      allSmallDivsArray[newPos - 1].appendChild(redToken4);
      currentRed4Position = newPos;
      break;
    default:
      break;
  }
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
    switch (tokenNumber) {
      case 1:
        redWinningDivsArray[winPosition - 1].appendChild(redToken1);
        currentRed1Position = 51 + winPosition;
        red1WinPosition = winPosition;
        break;
      case 2:
        redWinningDivsArray[winPosition - 1].appendChild(redToken2);
        currentRed2Position = 51 + winPosition;
        red2WinPosition = winPosition;
        break;
      case 3:
        redWinningDivsArray[winPosition - 1].appendChild(redToken3);
        currentRed3Position = 51 + winPosition;
        red3WinPosition = winPosition;
        break;
      case 4:
        redWinningDivsArray[winPosition - 1].appendChild(redToken4);
        currentRed4Position = 51 + winPosition;
        red4WinPosition = winPosition;
        break;
      default:
        break;
    }
  }

  if (winPosition == 6) {
    const icon = document.createElement("span");
    icon.classList.add("material-symbols-outlined", "red-token");
    icon.textContent = "poker_chip";
    centerDiv.appendChild(icon);
    redWinDiceCount += 1;
    if (redWinDiceCount == 4) {
      setTimeout(() => alert("Red won the game!"), 100);
    }
  }
}
function updateCurrentPosition(tokenNumber, position) {
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

function updateWinPosition(tokenNumber, position) {
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

function getTokenHolder(tokenNumber) {
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

