const billAmount = document.querySelector("#bill-amt");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#btn-check");
const errorMessage = document.querySelector("#error-msg");
const notesList = [2000, 500, 100, 20, 10, 5, 1];
const outputTags = document.querySelectorAll(".output");

function displayMessage(message) {
  errorMessage.style.display = "block";
  errorMessage.innerText = message;
}

function calculateNumberOfNotes(amountToBeReturned) {
  notesList.forEach((note, index) => {
    let value = Math.floor(amountToBeReturned / note);
    outputTags[index].innerText = value;
    amountToBeReturned %= note;
  });
}

function buttonClickHandler() {
  errorMessage.style.display = "none";
  const billValue = billAmount.value;
  const cashGivenValue = cashGiven.value;
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
    calculateNumberOfNotes(cashGivenValue - billValue);
  }
}

checkButton.addEventListener("click", buttonClickHandler);
