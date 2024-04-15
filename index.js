let tallInput = document.getElementById("Tall");
let sjekkButton = document.getElementById("Sjekk");
let flaksButton = document.getElementById("Flaks");
let svar = Math.floor(Math.random() * 101);

sjekkButton.addEventListener("click", function() {
  let tall = parseInt(tallInput.value);

  if (tall === svar) {
    alert ("Riktig svar");
  } else if (tall < svar) {
    alert("Skriv et tall større enn " + tall);
  } else {
    alert("Skriv et tall større enn " + tall);
  }
});

flaksButton.addEventListener("click", function() {
  let flaks = Math.floor(Math.random() * 101);

  if (flaks === svar) {
    alert("Du fikk" + flaks + "\n" + "Du var heldig");
  } else {
    alert("Du fikk " + flaks + "\n" + " Du var ikke heldig");
  }  
});

console.log("Svaret er: " + svar);