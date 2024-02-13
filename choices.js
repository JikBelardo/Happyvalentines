const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

let yesButtonSize = 24; // Initial size of the Yes button

noButton.addEventListener("click", () => {
    yesButtonSize += 2; // Increase the size by 2 pixels
    yesButton.style.fontSize = yesButtonSize + "px"; // Apply the new size
});