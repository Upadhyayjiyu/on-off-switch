function toggleDevice() {
  const switchElement = document.getElementById("toggleSwitch");
  const statusText = document.getElementById("statusText");

  if (switchElement.checked) {
    statusText.textContent = "Device is ON";
    statusText.style.color = "#4caf50";
  } else {
    statusText.textContent = "Device is OFF";
    statusText.style.color = "#f44336";
  }
}