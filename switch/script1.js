function toggleDevice() {
  const switchElement = document.getElementById("toggleSwitch");
  const statusText = document.getElementById("statusText");
  const soundOn = document.getElementById("soundOn");
  const soundOff = document.getElementById("soundOff");

  if (switchElement.checked) {
    statusText.textContent = "Oven is ON";
    statusText.style.color = "#4caf50";
    soundOn.play();
  } else {
    statusText.textContent = "Oven is OFF";
    statusText.style.color = "#f44336";
    soundOff.play();
  }
}