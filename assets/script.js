function mobilemenu() {
  var x = document.getElementById("navbartop");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}