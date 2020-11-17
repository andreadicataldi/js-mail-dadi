var email = prompt("Please insert your Ferrari corporate email address.");

var authorizedAddresses = [
  "binotto@ferrari.com",
  "mekies@ferrari.com",
  "resta@ferrari.com",
  "leclerc@ferrari.com",
  "byrne@ferrari.com",
];

var login = false;

for (var i = 0; i < authorizedAddresses.length; i++) {
  if (email == authorizedAddresses[i]) {
    login = true;
  }
}

if (login == true) {
  alert("Login successful.");
  document.getElementById("authorization").innerHTML =
    "You logged in successfully to the Scuderia Ferrari email service.";
} else {
  alert("Login failed.");
  document.getElementById("authorization").innerHTML =
    "You are not authorized to log in the Scuderia Ferrari email service.";
}
