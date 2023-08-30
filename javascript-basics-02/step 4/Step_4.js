function kousa() {
    var userInput = prompt("Enter 'Y' to reset the form, or 'N' to cancel:");
    if (userInput !== null) {
      userInput = userInput.toUpperCase();
      if (userInput === 'Y') {
        mousa();
      } else if (userInput === 'N') {
      } else {
        alert("Invalid input. Please enter 'Y' or 'N'.");
      }
    }
}

function mousa() {
    var nameInput = document.getElementById("name");
    var surnameInput = document.getElementById("surname");
    var cityInput = document.getElementById("city");
  
    nameInput.value = "";
    surnameInput.value = "";
    cityInput.value = "";
}