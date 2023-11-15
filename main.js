function addToDisplay(value) {
  document.getElementById("display").value =
    document.getElementById("display").value + value;
}

function c() {
  document.getElementById("display").value = "";
}

function resultat() {
  try {
    document.getElementById("display").value = eval(
      document.getElementById("display").value
    );
  } catch (error) {
    document.getElementById("display").value = "a3mel 3a9lek";
  }
}
