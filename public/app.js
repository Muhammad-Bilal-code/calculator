var displayinput = document.getElementById("displayInput");
function getval(val) {
  displayinput.value += val;
}
function calculate() {
  displayinput.value = eval(displayinput.value);
}
function clearAll() {
  displayinput.value = "";
}

function back() {
  displayinput.value = displayinput.value.slice(
    0,
    displayinput.value.length - 1
  );
}
