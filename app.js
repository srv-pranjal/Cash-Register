const billAmount = document.querySelector("#bill-amt");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#btn-check");
const nextButton = document.querySelector("#btn-next");
const errorMessage = document.querySelector("#error-msg");
const cashLabel = document.querySelector("label[for='cash-given']");
const tableContainer = document.querySelector("#table-container");

const notesList = [2000, 500, 100, 20, 10, 5, 1];
const outputTags = document.querySelectorAll(".output");

function displayMessage(message) {
  errorMessage.style.display = "block";
  errorMessage.innerText = message;
}

function calculateNumberOfNotes(amountToBeReturned) {
  notesList.forEach((note, index) => {
    let value = Math.floor(amountToBeReturned / note);
    if (value != 0) {
      outputTags[index].innerText = value;
    }
    amountToBeReturned %= note;
  });
}

function checkClickHandler() {
  clearTable();
  errorMessage.style.display = "none";
  const billValue = parseInt(billAmount.value);
  const cashGivenValue = parseInt(cashGiven.value);
  if (billValue === "" || billValue == 0) {
    displayMessage("❌ Bill Amount can't be empty or Zero");
  } else if (cashGivenValue === "") {
    displayMessage("❌ Cash Given can't be empty");
  } else if (cashGivenValue < billValue) {
    displayMessage(
      "You are giving less money than the bill!\n Do you wanna wash plates??😠"
    );
  } else if (billValue === cashGivenValue) {
    displayMessage("No cash needs to be returned. Thank you");
    errorMessage.style.color = "green";
  } else {
    tableContainer.style.display = "block";
    calculateNumberOfNotes(cashGivenValue - billValue);
  }
}

function nextClickHandler() {
  errorMessage.style.display = "none";
  const billValue = billAmount.value;
  if (billValue === "" || billValue == 0) {
    displayMessage("❌ Bill Amount can't be empty or Zero");
  } else {
    nextButton.style.display = "none";
    cashLabel.style.display = "block";
    cashGiven.style.display = "block";
    checkButton.style.display = "inline";
  }
}

function clearTable() {
  notesList.forEach((note, index) => {
    outputTags[index].innerText = "";
  });
}

checkButton.addEventListener("click", checkClickHandler);
nextButton.addEventListener("click", nextClickHandler);
