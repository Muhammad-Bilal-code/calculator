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
